"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Brain,
  TrendingUp,
  TrendingDown,
  Calendar,
  AlertTriangle,
  CheckCircle,
  Zap,
  Target,
  BarChart3,
  Clock
} from "lucide-react";

interface Prediction {
  id: string;
  product: string;
  category: string;
  currentDemand: number;
  predictedDemand: number;
  change: number;
  confidence: number;
  timeframe: string;
  recommendation: "buy" | "sell" | "hold" | "avoid";
  reasoning: string;
}

interface TrendData {
  month: string;
  sales: number;
  predicted: number;
}

export default function PredictiveAnalytics() {
  const [selectedTimeframe, setSelectedTimeframe] = useState("30");

  const predictions: Prediction[] = [
    {
      id: "1",
      product: "Wireless Gaming Headset",
      category: "Electronics",
      currentDemand: 15000,
      predictedDemand: 24000,
      change: 60,
      confidence: 94,
      timeframe: "30 дней",
      recommendation: "buy",
      reasoning: "Приближается киберспортивный сезон, исторически спрос растет на 70%"
    },
    {
      id: "2",
      product: "Yoga Mat Set",
      category: "Sports & Outdoors",
      currentDemand: 8500,
      predictedDemand: 12800,
      change: 51,
      confidence: 87,
      timeframe: "45 дней",
      recommendation: "buy",
      reasoning: "Новогодние резолюции, пик продаж фитнес-товаров в январе-марте"
    },
    {
      id: "3",
      product: "Halloween Decorations",
      category: "Home & Garden",
      currentDemand: 22000,
      predictedDemand: 3200,
      change: -85,
      confidence: 96,
      timeframe: "30 дней",
      recommendation: "sell",
      reasoning: "Окончание сезона Хэллоуина, резкое падение спроса"
    },
    {
      id: "4",
      product: "Electric Blanket",
      category: "Home & Kitchen",
      currentDemand: 5200,
      predictedDemand: 18500,
      change: 256,
      confidence: 91,
      timeframe: "60 дней",
      recommendation: "buy",
      reasoning: "Зимний сезон, исторически спрос увеличивается в 3-4 раза"
    }
  ];

  const trendData: TrendData[] = [
    { month: "Янв", sales: 12000, predicted: 11800 },
    { month: "Фев", sales: 15000, predicted: 14900 },
    { month: "Мар", sales: 18000, predicted: 18200 },
    { month: "Апр", sales: 14000, predicted: 14100 },
    { month: "Май", sales: 16000, predicted: 15950 },
    { month: "Июн", sales: 0, predicted: 17200 },
    { month: "Июл", sales: 0, predicted: 19500 },
    { month: "Авг", sales: 0, predicted: 21000 }
  ];

  const getRecommendationColor = (rec: string) => {
    switch (rec) {
      case "buy": return "bg-green-500/20 text-green-300 border-green-500/30";
      case "sell": return "bg-red-500/20 text-red-300 border-red-500/30";
      case "hold": return "bg-yellow-500/20 text-yellow-300 border-yellow-500/30";
      case "avoid": return "bg-gray-500/20 text-gray-300 border-gray-500/30";
      default: return "bg-gray-500/20 text-gray-300 border-gray-500/30";
    }
  };

  const getRecommendationText = (rec: string) => {
    switch (rec) {
      case "buy": return "Покупать";
      case "sell": return "Продавать";
      case "hold": return "Держать";
      case "avoid": return "Избегать";
      default: return "Неизвестно";
    }
  };

  const getChangeIcon = (change: number) => {
    if (change > 0) return <TrendingUp className="w-4 h-4 text-green-400" />;
    if (change < 0) return <TrendingDown className="w-4 h-4 text-red-400" />;
    return <BarChart3 className="w-4 h-4 text-gray-400" />;
  };

  const topCategories = [
    { name: "Electronics", growth: "+34%", confidence: 92 },
    { name: "Home & Kitchen", growth: "+28%", confidence: 89 },
    { name: "Sports & Outdoors", growth: "+45%", confidence: 85 },
    { name: "Beauty & Personal Care", growth: "+19%", confidence: 91 }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <Card className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 border-purple-500/30">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-3">
            <Brain className="w-8 h-8 text-purple-400" />
            Predictive Analytics
            <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30 animate-pulse">
              89% точность
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-black/40 rounded-lg p-4 border border-gray-700 text-center">
              <div className="text-2xl font-bold text-purple-400 mb-1">2.1M+</div>
              <div className="text-gray-400 text-sm">продаж проанализировано</div>
            </div>
            <div className="bg-black/40 rounded-lg p-4 border border-gray-700 text-center">
              <div className="text-2xl font-bold text-blue-400 mb-1">89%</div>
              <div className="text-gray-400 text-sm">точность прогнозов</div>
            </div>
            <div className="bg-black/40 rounded-lg p-4 border border-gray-700 text-center">
              <div className="text-2xl font-bold text-green-400 mb-1">+347%</div>
              <div className="text-gray-400 text-sm">ROI пользователей</div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="predictions" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3 bg-gray-800 border border-gray-700">
          <TabsTrigger value="predictions" className="data-[state=active]:bg-purple-600">
            Прогнозы спроса
          </TabsTrigger>
          <TabsTrigger value="trends" className="data-[state=active]:bg-purple-600">
            Тренды категорий
          </TabsTrigger>
          <TabsTrigger value="insights" className="data-[state=active]:bg-purple-600">
            AI Инсайты
          </TabsTrigger>
        </TabsList>

        {/* Predictions Tab */}
        <TabsContent value="predictions">
          <Card className="bg-gradient-to-b from-gray-900 to-black border-gray-800">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-3">
                <Target className="w-6 h-6 text-green-400" />
                Прогнозы спроса на товары
                <div className="ml-auto flex gap-2">
                  {["30", "60", "90"].map((days) => (
                    <Button
                      key={days}
                      size="sm"
                      variant={selectedTimeframe === days ? "default" : "outline"}
                      onClick={() => setSelectedTimeframe(days)}
                      className={selectedTimeframe === days ? "bg-purple-600" : "border-gray-600 text-gray-300"}
                    >
                      {days} дней
                    </Button>
                  ))}
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {predictions.map((prediction) => (
                  <Card key={prediction.id} className="bg-gray-800/50 border-gray-700 hover:border-gray-600 transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="grid md:grid-cols-4 gap-4 items-center">
                        <div>
                          <h4 className="font-semibold text-white mb-1">{prediction.product}</h4>
                          <p className="text-gray-400 text-sm">{prediction.category}</p>
                        </div>

                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-400">Текущий спрос:</span>
                            <span className="text-white">{prediction.currentDemand.toLocaleString()}</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-400">Прогноз:</span>
                            <span className="text-purple-400 font-medium">{prediction.predictedDemand.toLocaleString()}</span>
                          </div>
                        </div>

                        <div className="text-center">
                          <div className="flex items-center justify-center gap-2 mb-2">
                            {getChangeIcon(prediction.change)}
                            <span className={`font-bold ${prediction.change > 0 ? 'text-green-400' : 'text-red-400'}`}>
                              {prediction.change > 0 ? '+' : ''}{prediction.change}%
                            </span>
                          </div>
                          <Badge className={getRecommendationColor(prediction.recommendation)}>
                            {getRecommendationText(prediction.recommendation)}
                          </Badge>
                          <div className="text-xs text-gray-400 mt-1">
                            Уверенность: {prediction.confidence}%
                          </div>
                        </div>

                        <div className="space-y-2">
                          <div className="bg-gray-700/50 rounded-lg p-3">
                            <div className="text-xs text-gray-400 mb-1">AI Обоснование:</div>
                            <p className="text-white text-sm">{prediction.reasoning}</p>
                          </div>
                          <Button size="sm" className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                            <Zap className="w-3 h-3 mr-1" />
                            Применить стратегию
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Trends Tab */}
        <TabsContent value="trends">
          <Card className="bg-gradient-to-b from-gray-900 to-black border-gray-800">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-3">
                <BarChart3 className="w-6 h-6 text-blue-400" />
                Тренды по категориям
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-4">Топ растущие категории</h3>
                  <div className="space-y-3">
                    {topCategories.map((category) => (
                      <div key={category.name} className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-white font-medium">{category.name}</span>
                          <Badge className="bg-green-500/20 text-green-300 border-green-500/30">
                            {category.growth}
                          </Badge>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-400">Уверенность прогноза:</span>
                          <span className="text-blue-400">{category.confidence}%</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-4">График продаж vs прогноз</h3>
                  <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
                    <div className="space-y-3">
                      {trendData.slice(0, 6).map((data) => (
                        <div key={data.month} className="flex items-center justify-between">
                          <span className="text-gray-400 text-sm w-12">{data.month}</span>
                          <div className="flex-1 mx-4">
                            <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                              <div
                                className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
                                style={{ width: `${Math.min((data.sales || data.predicted) / 25000 * 100, 100)}%` }}
                              />
                            </div>
                          </div>
                          <span className="text-white text-sm w-16 text-right">
                            {(data.sales || data.predicted).toLocaleString()}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Insights Tab */}
        <TabsContent value="insights">
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-gradient-to-b from-green-900/20 to-green-800/10 border-green-500/30">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-green-400" />
                  Возможности
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-4">
                  <h4 className="font-semibold text-green-300 mb-2">🎯 Зимний сезон</h4>
                  <p className="text-green-200 text-sm mb-2">
                    Спрос на товары для дома увеличится на 180% в ближайшие 45 дней
                  </p>
                  <Badge className="bg-green-500/20 text-green-300 border-green-500/30">
                    Высокий приоритет
                  </Badge>
                </div>

                <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-300 mb-2">🎮 Gaming сезон</h4>
                  <p className="text-blue-200 text-sm mb-2">
                    Киберспортивные турниры стимулируют спрос на игровые аксессуары
                  </p>
                  <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30">
                    Средний приоритет
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-b from-red-900/20 to-red-800/10 border-red-500/30">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-3">
                  <AlertTriangle className="w-6 h-6 text-red-400" />
                  Предупреждения
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-4">
                  <h4 className="font-semibold text-red-300 mb-2">⚠️ Сезонный спад</h4>
                  <p className="text-red-200 text-sm mb-2">
                    Товары для активного отдыха покажут снижение спроса на 60%
                  </p>
                  <Badge className="bg-red-500/20 text-red-300 border-red-500/30">
                    Критично
                  </Badge>
                </div>

                <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-lg p-4">
                  <h4 className="font-semibold text-yellow-300 mb-2">📉 Перенасыщение</h4>
                  <p className="text-yellow-200 text-sm mb-2">
                    Рынок беспроводных наушников показывает признаки насыщения
                  </p>
                  <Badge className="bg-yellow-500/20 text-yellow-300 border-yellow-500/30">
                    Внимание
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
