"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import {
  Bot,
  Search,
  TrendingUp,
  DollarSign,
  Bell,
  Play,
  Pause,
  Zap,
  Target,
  Clock,
  ShoppingCart
} from "lucide-react";

interface ProductLead {
  id: string;
  title: string;
  currentPrice: number;
  supplierPrice: number;
  margin: number;
  ranking: number;
  category: string;
  competition: "low" | "medium" | "high";
  trend: "up" | "down" | "stable";
  confidence: number;
  foundAt: Date;
}

export default function AIProductScout() {
  const [isScanning, setIsScanning] = useState(false);
  const [autoMode, setAutoMode] = useState(true);
  const [minMargin, setMinMargin] = useState([30]);
  const [maxPrice, setMaxPrice] = useState([100]);
  const [scannedToday, setScannedToday] = useState(0);
  const [foundProducts, setFoundProducts] = useState<ProductLead[]>([
    {
      id: "1",
      title: "Silicone Kitchen Utensil Set",
      currentPrice: 24.99,
      supplierPrice: 8.50,
      margin: 66,
      ranking: 15420,
      category: "Home & Kitchen",
      competition: "low",
      trend: "up",
      confidence: 94,
      foundAt: new Date(Date.now() - 1800000)
    },
    {
      id: "2",
      title: "Bluetooth Wireless Earbuds",
      currentPrice: 39.99,
      supplierPrice: 12.30,
      margin: 69,
      ranking: 8950,
      category: "Electronics",
      competition: "medium",
      trend: "stable",
      confidence: 87,
      foundAt: new Date(Date.now() - 3600000)
    },
    {
      id: "3",
      title: "LED Desk Lamp with USB Charging",
      currentPrice: 32.99,
      supplierPrice: 11.80,
      margin: 64,
      ranking: 22100,
      category: "Home & Garden",
      competition: "low",
      trend: "up",
      confidence: 91,
      foundAt: new Date(Date.now() - 5400000)
    }
  ]);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isScanning) {
      interval = setInterval(() => {
        setScannedToday(prev => prev + Math.floor(Math.random() * 50) + 20);
      }, 2000);
    }
    return () => clearInterval(interval);
  }, [isScanning]);

  const getCompetitionColor = (level: string) => {
    switch (level) {
      case "low": return "text-green-400";
      case "medium": return "text-yellow-400";
      case "high": return "text-red-400";
      default: return "text-gray-400";
    }
  };

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case "up": return "📈";
      case "down": return "📉";
      case "stable": return "➡️";
      default: return "➡️";
    }
  };

  const formatTimeAgo = (date: Date) => {
    const minutes = Math.floor((Date.now() - date.getTime()) / 60000);
    if (minutes < 60) return `${minutes} Min. her`;
    const hours = Math.floor(minutes / 60);
    return `${hours} Std. her`;
  };

  return (
    <div className="space-y-6">
      {/* Control Panel */}
      <Card className="bg-gradient-to-r from-blue-900/20 to-cyan-900/20 border-blue-500/30">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-3">
            <Bot className="w-8 h-8 text-blue-400" />
            KI-Produkt-Scout
            <Badge className={`${isScanning ? 'bg-green-500/20 text-green-300 border-green-500/30 animate-pulse' : 'bg-gray-500/20 text-gray-300 border-gray-500/30'}`}>
              {isScanning ? "Aktiv" : "Gestoppt"}
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Status and Controls */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Label className="text-white">Automatikmodus</Label>
                <Switch
                  checked={autoMode}
                  onCheckedChange={setAutoMode}
                />
              </div>

              <div>
                <Label className="text-white">Minimale Marge (%)</Label>
                <div className="mt-2">
                  <Slider
                    value={minMargin}
                    onValueChange={setMinMargin}
                    max={80}
                    min={10}
                    step={5}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-gray-400 mt-1">
                    <span>10%</span>
                    <span className="text-white font-medium">{minMargin[0]}%</span>
                    <span>80%</span>
                  </div>
                </div>
              </div>

              <div>
                <Label className="text-white">Maximaler Produktpreis ($)</Label>
                <div className="mt-2">
                  <Slider
                    value={maxPrice}
                    onValueChange={setMaxPrice}
                    max={500}
                    min={10}
                    step={10}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-gray-400 mt-1">
                    <span>$10</span>
                    <span className="text-white font-medium">${maxPrice[0]}</span>
                    <span>$500</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-black/40 rounded-lg p-4 border border-gray-700">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-1">
                    {scannedToday.toLocaleString()}
                  </div>
                  <div className="text-gray-400 text-sm">Produkte heute gescannt</div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-black/40 rounded-lg p-3 border border-gray-700 text-center">
                  <div className="text-xl font-bold text-green-400">{foundProducts.length}</div>
                  <div className="text-gray-400 text-xs">gefunden</div>
                </div>
                <div className="bg-black/40 rounded-lg p-3 border border-gray-700 text-center">
                  <div className="text-xl font-bold text-yellow-400">89%</div>
                  <div className="text-gray-400 text-xs">Genauigkeit</div>
                </div>
              </div>

              <Button
                onClick={() => setIsScanning(!isScanning)}
                className={`w-full ${isScanning
                  ? 'bg-red-500 hover:bg-red-600'
                  : 'bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700'
                } text-white transition-all duration-300`}
              >
                {isScanning ? (
                  <>
                    <Pause className="w-4 h-4 mr-2" />
                    Scan stoppen
                  </>
                ) : (
                  <>
                    <Play className="w-4 h-4 mr-2" />
                    Scan starten
                  </>
                )}
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Found Products */}
      <Card className="bg-gradient-to-b from-gray-900 to-black border-gray-800">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-3">
            <Target className="w-6 h-6 text-green-400" />
            Gefundene Produkte
            <Badge className="bg-green-500/20 text-green-300 border-green-500/30">
              {foundProducts.length} aktiv
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {foundProducts.map((product) => (
              <Card key={product.id} className="bg-gray-800/50 border-gray-700 hover:border-gray-600 transition-all duration-300 hover:bg-gray-800/70">
                <CardContent className="p-6">
                  <div className="grid md:grid-cols-4 gap-4 items-center">
                    <div className="md:col-span-2">
                      <h4 className="font-semibold text-white mb-2">{product.title}</h4>
                      <div className="flex items-center gap-4 text-sm text-gray-400">
                        <span className="flex items-center gap-1">
                          <ShoppingCart className="w-3 h-3" />
                          {product.category}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {formatTimeAgo(product.foundAt)}
                        </span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Amazon:</span>
                        <span className="text-white font-medium">${product.currentPrice}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Lieferant:</span>
                        <span className="text-green-400 font-medium">${product.supplierPrice}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Marge:</span>
                        <span className="text-blue-400 font-bold">{product.margin}%</span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-400 text-sm">Rang:</span>
                        <span className="text-white text-sm">#{product.ranking.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-400 text-sm">Wettbewerb:</span>
                        <span className={`text-sm font-medium ${getCompetitionColor(product.competition)}`}>
                          {product.competition}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-400 text-sm">Trend:</span>
                        <span className="text-sm">{getTrendIcon(product.trend)}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-400 text-sm">Zuversicht:</span>
                        <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30">
                          {product.confidence}%
                        </Badge>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-2 mt-4">
                    <Button size="sm" className="bg-green-600 hover:bg-green-700 text-white">
                      <DollarSign className="w-3 h-3 mr-1" />
                      Zum Portfolio hinzufügen
                    </Button>
                    <Button size="sm" variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-700">
                      <Search className="w-3 h-3 mr-1" />
                      Detaillierte Analyse
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {foundProducts.length === 0 && (
            <div className="text-center py-12">
              <Bot className="w-16 h-16 text-gray-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-400 mb-2">Keine Produkte gefunden</h3>
              <p className="text-gray-500">Starten Sie den Scan, damit der KI-Agent profitable Produkte findet</p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Notifications */}
      <Card className="bg-gradient-to-r from-yellow-900/20 to-orange-900/20 border-yellow-500/30">
        <CardContent className="p-4">
          <div className="flex items-center gap-3">
            <Bell className="w-5 h-5 text-yellow-400" />
            <div className="flex-1">
              <h4 className="font-semibold text-yellow-300">Neue Möglichkeiten entdeckt!</h4>
              <p className="text-yellow-200 text-sm">Der KI-Agent hat in der letzten Stunde 3 neue Produkte mit einer Marge von über 60 % gefunden</p>
            </div>
            <Button size="sm" className="bg-yellow-600 hover:bg-yellow-700 text-black">
              Ansehen
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
