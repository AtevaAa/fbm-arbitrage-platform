"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import {
  Eye,
  TrendingUp,
  TrendingDown,
  Bell,
  Search,
  Plus,
  Minus,
  Clock,
  DollarSign,
  AlertCircle,
  CheckCircle,
  Target,
  Zap
} from "lucide-react";

interface Competitor {
  id: string;
  name: string;
  asin: string;
  currentPrice: number;
  previousPrice: number;
  changePercent: number;
  rank: number;
  rankChange: number;
  stock: number;
  lastUpdated: Date;
  alerts: number;
  isTracking: boolean;
}

interface PriceAlert {
  id: string;
  competitor: string;
  type: "price_drop" | "price_increase" | "rank_change" | "stock_low";
  message: string;
  timestamp: Date;
  severity: "low" | "medium" | "high";
}

export default function CompetitorSpy() {
  const [competitors, setCompetitors] = useState<Competitor[]>([
    {
      id: "1",
      name: "Wireless Gaming Headset Pro",
      asin: "B08XY1234Z",
      currentPrice: 79.99,
      previousPrice: 89.99,
      changePercent: -11.1,
      rank: 15420,
      rankChange: -2340,
      stock: 8,
      lastUpdated: new Date(Date.now() - 300000),
      alerts: 3,
      isTracking: true
    },
    {
      id: "2",
      name: "Smart Fitness Tracker",
      asin: "B09AB5678C",
      currentPrice: 149.99,
      previousPrice: 129.99,
      changePercent: 15.4,
      rank: 8950,
      rankChange: 1200,
      stock: 0,
      lastUpdated: new Date(Date.now() - 180000),
      alerts: 5,
      isTracking: true
    },
    {
      id: "3",
      name: "LED Desk Lamp USB-C",
      asin: "B07CD9012E",
      currentPrice: 32.99,
      previousPrice: 32.99,
      changePercent: 0,
      rank: 22100,
      rankChange: -450,
      stock: 23,
      lastUpdated: new Date(Date.now() - 120000),
      alerts: 1,
      isTracking: true
    }
  ]);

  const [alerts, setAlerts] = useState<PriceAlert[]>([
    {
      id: "1",
      competitor: "Wireless Gaming Headset Pro",
      type: "price_drop",
      message: "Цена снижена с $89.99 до $79.99 (-11.1%)",
      timestamp: new Date(Date.now() - 300000),
      severity: "high"
    },
    {
      id: "2",
      competitor: "Smart Fitness Tracker",
      type: "stock_low",
      message: "Товар закончился на складе",
      timestamp: new Date(Date.now() - 180000),
      severity: "high"
    },
    {
      id: "3",
      competitor: "LED Desk Lamp USB-C",
      type: "rank_change",
      message: "Рейтинг улучшился на 450 позиций",
      timestamp: new Date(Date.now() - 120000),
      severity: "medium"
    }
  ]);

  const [newAsin, setNewAsin] = useState("");
  const [autoNotifications, setAutoNotifications] = useState(true);

  const addCompetitor = () => {
    if (newAsin.trim()) {
      // В реальном приложении здесь был бы API запрос
      const newCompetitor: Competitor = {
        id: Date.now().toString(),
        name: "Новый товар",
        asin: newAsin.trim(),
        currentPrice: 0,
        previousPrice: 0,
        changePercent: 0,
        rank: 0,
        rankChange: 0,
        stock: 0,
        lastUpdated: new Date(),
        alerts: 0,
        isTracking: true
      };
      setCompetitors([...competitors, newCompetitor]);
      setNewAsin("");
    }
  };

  const toggleTracking = (id: string) => {
    setCompetitors(competitors.map(comp =>
      comp.id === id ? { ...comp, isTracking: !comp.isTracking } : comp
    ));
  };

  const removeCompetitor = (id: string) => {
    setCompetitors(competitors.filter(comp => comp.id !== id));
  };

  const formatTimeAgo = (date: Date) => {
    const minutes = Math.floor((Date.now() - date.getTime()) / 60000);
    if (minutes < 60) return `${minutes} мин назад`;
    const hours = Math.floor(minutes / 60);
    return `${hours} ч назад`;
  };

  const getPriceChangeColor = (change: number) => {
    if (change > 0) return "text-red-400";
    if (change < 0) return "text-green-400";
    return "text-gray-400";
  };

  const getRankChangeColor = (change: number) => {
    if (change > 0) return "text-red-400"; // Rank увеличился (хуже)
    if (change < 0) return "text-green-400"; // Rank уменьшился (лучше)
    return "text-gray-400";
  };

  const getAlertSeverityColor = (severity: string) => {
    switch (severity) {
      case "high": return "border-red-500/30 bg-red-900/20";
      case "medium": return "border-yellow-500/30 bg-yellow-900/20";
      case "low": return "border-blue-500/30 bg-blue-900/20";
      default: return "border-gray-500/30 bg-gray-900/20";
    }
  };

  const getAlertIcon = (type: string) => {
    switch (type) {
      case "price_drop": return <TrendingDown className="w-4 h-4 text-green-400" />;
      case "price_increase": return <TrendingUp className="w-4 h-4 text-red-400" />;
      case "rank_change": return <Target className="w-4 h-4 text-blue-400" />;
      case "stock_low": return <AlertCircle className="w-4 h-4 text-orange-400" />;
      default: return <Bell className="w-4 h-4 text-gray-400" />;
    }
  };

  // Симуляция обновлений в реальном времени
  useEffect(() => {
    const interval = setInterval(() => {
      if (autoNotifications) {
        setCompetitors(competitors.map(comp => ({
          ...comp,
          lastUpdated: new Date(comp.lastUpdated.getTime() + Math.random() * 60000)
        })));
      }
    }, 30000);

    return () => clearInterval(interval);
  }, [competitors, autoNotifications]);

  return (
    <div className="space-y-6">
      {/* Control Panel */}
      <Card className="bg-gradient-to-r from-green-900/20 to-emerald-900/20 border-green-500/30">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-3">
            <Eye className="w-8 h-8 text-green-400" />
            Шпионаж за конкурентами
            <Badge className={`${autoNotifications ? 'bg-green-500/20 text-green-300 border-green-500/30 animate-pulse' : 'bg-gray-500/20 text-gray-300 border-gray-500/30'}`}>
              {autoNotifications ? "Активен" : "Пауза"}
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Label className="text-white">Автоматические уведомления</Label>
                <Switch
                  checked={autoNotifications}
                  onCheckedChange={setAutoNotifications}
                />
              </div>

              <div className="flex gap-2">
                <Input
                  placeholder="Введите ASIN товара"
                  value={newAsin}
                  onChange={(e) => setNewAsin(e.target.value)}
                  className="bg-gray-800 border-gray-700 text-white"
                />
                <Button
                  onClick={addCompetitor}
                  className="bg-green-600 hover:bg-green-700 text-white"
                >
                  <Plus className="w-4 h-4" />
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="bg-black/40 rounded-lg p-3 border border-gray-700 text-center">
                <div className="text-xl font-bold text-green-400">{competitors.filter(c => c.isTracking).length}</div>
                <div className="text-gray-400 text-xs">отслеживается</div>
              </div>
              <div className="bg-black/40 rounded-lg p-3 border border-gray-700 text-center">
                <div className="text-xl font-bold text-yellow-400">{alerts.length}</div>
                <div className="text-gray-400 text-xs">уведомлений</div>
              </div>
              <div className="bg-black/40 rounded-lg p-3 border border-gray-700 text-center">
                <div className="text-xl font-bold text-blue-400">24/7</div>
                <div className="text-gray-400 text-xs">мониторинг</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Competitors List */}
        <Card className="bg-gradient-to-b from-gray-900 to-black border-gray-800">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-3">
              <Target className="w-6 h-6 text-blue-400" />
              Отслеживаемые конкуренты
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {competitors.map((competitor) => (
              <Card key={competitor.id} className={`border-gray-700 hover:border-gray-600 transition-all duration-300 ${competitor.isTracking ? 'bg-gray-800/50' : 'bg-gray-800/20 opacity-60'}`}>
                <CardContent className="p-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h4 className="font-semibold text-white mb-1">{competitor.name}</h4>
                      <p className="text-gray-400 text-sm">ASIN: {competitor.asin}</p>
                    </div>
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => toggleTracking(competitor.id)}
                        className={`border-gray-600 ${competitor.isTracking ? 'text-green-400' : 'text-gray-400'}`}
                      >
                        {competitor.isTracking ? <Eye className="w-3 h-3" /> : <Eye className="w-3 h-3 opacity-50" />}
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => removeCompetitor(competitor.id)}
                        className="border-gray-600 text-red-400 hover:bg-red-900/20"
                      >
                        <Minus className="w-3 h-3" />
                      </Button>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-gray-400">Цена:</span>
                        <span className="text-white font-medium">${competitor.currentPrice}</span>
                      </div>
                      <div className="flex justify-between mb-1">
                        <span className="text-gray-400">Изменение:</span>
                        <span className={`font-medium ${getPriceChangeColor(competitor.changePercent)}`}>
                          {competitor.changePercent > 0 ? '+' : ''}{competitor.changePercent.toFixed(1)}%
                        </span>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-gray-400">Рейтинг:</span>
                        <span className="text-white font-medium">#{competitor.rank.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between mb-1">
                        <span className="text-gray-400">Остаток:</span>
                        <span className={`font-medium ${competitor.stock < 10 ? 'text-red-400' : 'text-green-400'}`}>
                          {competitor.stock} шт
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-700">
                    <div className="flex items-center gap-2 text-xs text-gray-400">
                      <Clock className="w-3 h-3" />
                      {formatTimeAgo(competitor.lastUpdated)}
                    </div>
                    {competitor.alerts > 0 && (
                      <Badge className="bg-red-500/20 text-red-300 border-red-500/30">
                        {competitor.alerts} уведомлений
                      </Badge>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}

            {competitors.length === 0 && (
              <div className="text-center py-8">
                <Search className="w-12 h-12 text-gray-600 mx-auto mb-3" />
                <p className="text-gray-400">Добавьте ASIN конкурентов для мониторинга</p>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Alerts Panel */}
        <Card className="bg-gradient-to-b from-gray-900 to-black border-gray-800">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-3">
              <Bell className="w-6 h-6 text-yellow-400" />
              Уведомления
              <Badge className="bg-yellow-500/20 text-yellow-300 border-yellow-500/30">
                {alerts.length} новых
              </Badge>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {alerts.map((alert) => (
              <Card key={alert.id} className={`border transition-all duration-300 ${getAlertSeverityColor(alert.severity)}`}>
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    {getAlertIcon(alert.type)}
                    <div className="flex-1">
                      <h4 className="font-semibold text-white mb-1">{alert.competitor}</h4>
                      <p className="text-gray-300 text-sm mb-2">{alert.message}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-400 text-xs flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {formatTimeAgo(alert.timestamp)}
                        </span>
                        <Badge className={`text-xs ${
                          alert.severity === 'high' ? 'bg-red-500/20 text-red-300 border-red-500/30' :
                          alert.severity === 'medium' ? 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30' :
                          'bg-blue-500/20 text-blue-300 border-blue-500/30'
                        }`}>
                          {alert.severity === 'high' ? 'Высокий' :
                           alert.severity === 'medium' ? 'Средний' : 'Низкий'}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {alerts.length === 0 && (
              <div className="text-center py-8">
                <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-3" />
                <p className="text-gray-400">Все уведомления просмотрены</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 border-blue-500/30">
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-semibold text-blue-300 mb-1">Быстрые действия</h4>
              <p className="text-blue-200 text-sm">Автоматически реагируй на изменения конкурентов</p>
            </div>
            <div className="flex gap-2">
              <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
                <Zap className="w-3 h-3 mr-1" />
                Авто-корректировка цен
              </Button>
              <Button size="sm" className="bg-purple-600 hover:bg-purple-700 text-white">
                <Target className="w-3 h-3 mr-1" />
                Анализ стратегий
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
