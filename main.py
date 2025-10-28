import os
import time
from datetime import datetime, timezone
from typing import Dict, Any, List
from fastapi import FastAPI, Header, HTTPException
from pydantic import BaseModel
import pandas as pd

# Optional: ccxt for testnet mode
try:
    import ccxt  # type: ignore
except Exception:
    ccxt = None

API_TOKEN = os.getenv("SERVICE_API_TOKEN", "dev-token")  # set in Cloud Run

app = FastAPI(title="LLM Trading Backend")

# ----------- Simple in-memory paper broker -----------
FEE = float(os.getenv("PAPER_FEE", "0.0004"))  # 0.04% per side
CASH_START = float(os.getenv("PAPER_CASH", "2000"))
STATE = {
    "cash": CASH_START,
    "asset": 0.0,           # qty of base (e.g., BTC)
    "equity": CASH_START,
    "mode": "paper",        # "paper" | "testnet"
    "symbol": "BTC/USDT",
    "equity_curve": []
}

def now_iso():
    return datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ")

def paper_equity(price: float) -> float:
    return STATE["cash"] + STATE["asset"] * price

def paper_buy(price: float, size_usd: float):
    size_usd = max(0.0, min(size_usd, STATE["cash"]))
    if size_usd <= 0:
        return 0.0
    qty = (size_usd * (1 - FEE)) / price
    STATE["asset"] += qty
    STATE["cash"] -= size_usd
    STATE["equity"] = paper_equity(price)
    return qty

def paper_sell_all(price: float):
    qty = STATE["asset"]
    if qty <= 0:
        return 0.0
    proceeds = qty * price * (1 - FEE)
    STATE["asset"] = 0.0
    STATE["cash"] += proceeds
    STATE["equity"] = paper_equity(price)
    return qty

# ----------- Request models -----------
class CandlesReq(BaseModel):
    symbol: str
    timeframe: str
    limit: int = 200

class PlaceOrderReq(BaseModel):
    symbol: str
    side: str  # "buy" | "sell"
    size_usd: float
    stop: float | None = None
    take: float | None = None

class CloseAllReq(BaseModel):
    symbol: str

class ModeReq(BaseModel):
    mode: str  # "paper" | "testnet"

# ----------- Security -----------
def must_auth(authorization: str | None):
    if not authorization or not authorization.startswith("Bearer "):
        raise HTTPException(status_code=401, detail="Missing Bearer token")
    token = authorization.split(" ", 1)[1].strip()
    if token != API_TOKEN:
        raise HTTPException(status_code=403, detail="Invalid token")

# ----------- Endpoints called by AI Studio tools -----------
@app.post("/get_candles")
def get_candles(req: CandlesReq, authorization: str = Header(None)):
    must_auth(authorization)
    # For simplicity: synth candles (replace w/ ccxt fetch_ohlcv() in prod)
    # You can integrate ccxt like:
    # ex = ccxt.binance()
    # ohlcv = ex.fetch_ohlcv(req.symbol, req.timeframe, limit=req.limit)
    # df = pd.DataFrame(ohlcv, columns=["ts","open","high","low","close","volume"])
    # df["dt"] = pd.to_datetime(df["ts"], unit="ms", utc=True)
    # return {"candles": df[["dt","open","high","low","close","volume"]].tail(req.limit).to_dict(orient="records")}
    # Demo: constant drift
    now = int(time.time())
    base = 68000.0
    rows: List[Dict[str, Any]] = []
    for i in range(req.limit):
        price = base * (1.0 + 0.0002 * i)
        rows.append({
            "dt": datetime.utcfromtimestamp(now - (req.limit - i) * 60).isoformat() + "Z",
            "open": round(price * 0.999, 2),
            "high": round(price * 1.002, 2),
            "low": round(price * 0.998, 2),
            "close": round(price, 2),
            "volume": 10 + i
        })
    return {"symbol": req.symbol, "timeframe": req.timeframe, "candles": rows}

@app.post("/place_order")
def place_order(req: PlaceOrderReq, authorization: str = Header(None)):
    must_auth(authorization)
    if STATE["mode"] == "paper":
        # Use last synthetic price as "market"
        price = req.take or req.stop or 68000.0
        if req.side == "buy":
            qty = paper_buy(price, req.size_usd)
            action = "BUY"
        else:
            qty = paper_sell_all(price)
            action = "SELL_ALL"
        return {
            "time": now_iso(),
            "mode": STATE["mode"],
            "action": action,
            "price": price,
            "qty": qty,
            "cash": STATE["cash"],
            "asset": STATE["asset"],
            "equity": STATE["equity"]
        }
    else:
        # testnet via ccxt (outline)
        if ccxt is None:
            raise HTTPException(500, "ccxt not installed on server")
        # Configure ccxt testnet exchange & place order here if needed
        raise HTTPException(400, "testnet not wired yet; set mode paper")

@app.post("/close_all")
def close_all(req: CloseAllReq, authorization: str = Header(None)):
    must_auth(authorization)
    price = 68000.0
    qty = paper_sell_all(price)
    return {"time": now_iso(), "closed_qty": qty, "equity": STATE["equity"]}

@app.post("/get_positions")
def get_positions(authorization: str = Header(None)):
    must_auth(authorization)
    return {
        "mode": STATE["mode"],
        "cash": STATE["cash"],
        "asset_qty": STATE["asset"],
        "equity": STATE["equity"]
    }

@app.post("/set_mode")
def set_mode(req: ModeReq, authorization: str = Header(None)):
    must_auth(authorization)
    if req.mode not in ("paper","testnet"):
        raise HTTPException(400, "mode must be paper|testnet")
    STATE["mode"] = req.mode
    return {"ok": True, "mode": STATE["mode"]}
