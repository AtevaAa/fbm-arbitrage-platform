"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Brain, TrendingUp, AlertTriangle, CheckCircle, Lightbulb } from "lucide-react";

export default function ProfitCalculator() {
  const [salePrice, setSalePrice] = useState(25);
  const [costPrice, setCostPrice] = useState(12);
  const [shipping, setShipping] = useState(3);
  const [amazonFee, setAmazonFee] = useState(15);
  const [quantity, setQuantity] = useState([10]);
  const [showAssistant, setShowAssistant] = useState(false);

  // Расчеты
  const amazonFeeAmount = (salePrice * amazonFee) / 100;
  const totalCosts = costPrice + shipping + amazonFeeAmount;
  const profitPerItem = salePrice - totalCosts;
  const profitMargin = (profitPerItem / salePrice) * 100;
  const totalProfit = profitPerItem * quantity[0];
  const totalRevenue = salePrice * quantity[0];

  const getProfitColor = (margin: number) => {
    if (margin >= 30) return "text-green-400";
    if (margin >= 20) return "text-yellow-400";
    if (margin >= 10) return "text-orange-400";
    return "text-red-400";
  };

  const getProfitBadge = (margin: number) => {
    if (margin >= 30) return { text: "Отличная прибыль", color: "bg-green-500/20 text-green-300 border-green-500/30" };
    if (margin >= 20) return { text: "Хорошая прибыль", color: "bg-yellow-500/20 text-yellow-300 border-yellow-500/30" };
    if (margin >= 10) return { text: "Низкая прибыль", color: "bg-orange-500/20 text-orange-300 border-orange-500/30" };
    return { text: "Убыточно", color: "bg-red-500/20 text-red-300 border-red-500/30" };
  };

  // AI-ассистент по прибыли
  const getAIRecommendations = () => {
    const recommendations = [];
    const warnings = [];
    const insights = [];

    // Анализ маржинальности
    if (profitMargin < 15) {
      warnings.push({
        icon: AlertTriangle,
        title: "Низкая маржинальность",
        text: "Маржа менее 15% - высокий риск убытков при изменении цен"
      });
      recommendations.push("Найди поставщиков с более низкими ценами или товары с большей наценкой");
    }

    if (profitMargin >= 30) {
      insights.push({
        icon: CheckCircle,
        title: "Отличная маржинальность",
        text: "Маржа выше 30% - идеально для стабильного заработка"
      });
      recommendations.push("Масштабируй продажи этого товара, увеличь количество");
    }

    // Анализ комиссии Amazon
    if (amazonFee > 20) {
      warnings.push({
        icon: AlertTriangle,
        title: "Высокая комиссия Amazon",
        text: "Комиссия выше 20% существенно снижает прибыль"
      });
      recommendations.push("Рассмотри товары в категориях с меньшей комиссией (Books, Media - 15%)");
    }

    // Анализ доставки
    const shippingPercent = (shipping / salePrice) * 100;
    if (shippingPercent > 15) {
      warnings.push({
        icon: AlertTriangle,
        title: "Дорогая доставка",
        text: "Стоимость доставки составляет более 15% от цены товара"
      });
      recommendations.push("Оптимизируй логистику или найди поставщиков с бесплатной доставкой");
    }

    // Анализ объемов
    if (totalProfit < 500) {
      insights.push({
        icon: TrendingUp,
        title: "Малый объем продаж",
        text: "Для серьезного заработка увеличь количество или найди более дорогие товары"
      });
      recommendations.push("Стремись к месячной прибыли от $1000 для стабильного дохода");
    }

    if (totalProfit > 2000) {
      insights.push({
        icon: CheckCircle,
        title: "Отличный потенциал",
        text: "При такой прибыли ты можешь зарабатывать серьезные деньги"
      });
      recommendations.push("Автоматизируй процессы и наймите виртуального помощника");
    }

    // Анализ ценового диапазона
    if (salePrice < 15) {
      warnings.push({
        icon: AlertTriangle,
        title: "Низкая цена товара",
        text: "Товары до $15 часто имеют низкую прибыль после всех расходов"
      });
      recommendations.push("Фокусируйся на товарах от $20 до $100 для лучшей маржинальности");
    }

    if (salePrice > 100) {
      insights.push({
        icon: Lightbulb,
        title: "Дорогой товар",
        text: "Дорогие товары могут иметь меньший спрос, но большую прибыль с единицы"
      });
      recommendations.push("Убедись, что есть стабильный спрос на товары в этом ценовом сегменте");
    }

    return { recommendations, warnings, insights };
  };

  const badge = getProfitBadge(profitMargin);
  const aiAnalysis = getAIRecommendations();

  return (
    <div className="space-y-6">
      <Card className="bg-gradient-to-b from-gray-900 to-black border-gray-800 hover:border-gray-700 transition-all duration-300">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-3">
            <span className="w-8 h-8 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center text-sm">🧮</span>
            Калькулятор прибыльности FBM
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Входные параметры */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <Label htmlFor="salePrice" className="text-white">Цена продажи на Amazon ($)</Label>
                <Input
                  id="salePrice"
                  type="number"
                  value={salePrice}
                  onChange={(e) => setSalePrice(Number(e.target.value))}
                  className="bg-gray-800 border-gray-700 text-white mt-1"
                  min="0"
                  step="0.01"
                />
              </div>

              <div>
                <Label htmlFor="costPrice" className="text-white">Цена закупки ($)</Label>
                <Input
                  id="costPrice"
                  type="number"
                  value={costPrice}
                  onChange={(e) => setCostPrice(Number(e.target.value))}
                  className="bg-gray-800 border-gray-700 text-white mt-1"
                  min="0"
                  step="0.01"
                />
              </div>

              <div>
                <Label htmlFor="shipping" className="text-white">Доставка до клиента ($)</Label>
                <Input
                  id="shipping"
                  type="number"
                  value={shipping}
                  onChange={(e) => setShipping(Number(e.target.value))}
                  className="bg-gray-800 border-gray-700 text-white mt-1"
                  min="0"
                  step="0.01"
                />
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <Label htmlFor="amazonFee" className="text-white">Комиссия Amazon (%)</Label>
                <div className="mt-2">
                  <Slider
                    value={[amazonFee]}
                    onValueChange={(value) => setAmazonFee(value[0])}
                    max={25}
                    min={8}
                    step={0.5}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-gray-400 mt-1">
                    <span>8%</span>
                    <span className="text-white font-medium">{amazonFee}%</span>
                    <span>25%</span>
                  </div>
                </div>
              </div>

              <div>
                <Label htmlFor="quantity" className="text-white">Количество товаров в месяц</Label>
                <div className="mt-2">
                  <Slider
                    value={quantity}
                    onValueChange={setQuantity}
                    max={200}
                    min={1}
                    step={1}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-gray-400 mt-1">
                    <span>1</span>
                    <span className="text-white font-medium">{quantity[0]} шт</span>
                    <span>200</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Результаты расчета */}
          <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-xl p-6 border border-blue-500/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-white">Результаты расчета</h3>
              <Badge className={badge.color}>
                {badge.text}
              </Badge>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-400">Цена продажи:</span>
                  <span className="text-white font-medium">${salePrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Цена закупки:</span>
                  <span className="text-white font-medium">${costPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Доставка:</span>
                  <span className="text-white font-medium">${shipping.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Комиссия Amazon:</span>
                  <span className="text-white font-medium">${amazonFeeAmount.toFixed(2)}</span>
                </div>
                <hr className="border-gray-600" />
                <div className="flex justify-between">
                  <span className="text-gray-400">Общие расходы:</span>
                  <span className="text-white font-medium">${totalCosts.toFixed(2)}</span>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-400">Прибыль с единицы:</span>
                  <span className={`font-bold ${getProfitColor(profitMargin)}`}>
                    ${profitPerItem.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Маржинальность:</span>
                  <span className={`font-bold ${getProfitColor(profitMargin)}`}>
                    {profitMargin.toFixed(1)}%
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Количество:</span>
                  <span className="text-white font-medium">{quantity[0]} шт</span>
                </div>
                <hr className="border-gray-600" />
                <div className="flex justify-between">
                  <span className="text-gray-400">Общая выручка:</span>
                  <span className="text-blue-400 font-bold">${totalRevenue.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Общая прибыль:</span>
                  <span className={`font-bold text-lg ${getProfitColor(profitMargin)}`}>
                    ${totalProfit.toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Кнопка AI-ассистента */}
          <div className="flex justify-center">
            <Button
              onClick={() => setShowAssistant(!showAssistant)}
              className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <Brain className="w-5 h-5 mr-2" />
              {showAssistant ? "Скрыть ассистента" : "Получить анализ AI"}
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* AI-ассистент */}
      {showAssistant && (
        <Card className="bg-gradient-to-b from-purple-900/20 to-pink-900/20 border-purple-500/30 animate-scale-in">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-3">
              <Brain className="w-8 h-8 text-purple-400" />
              AI-ассистент по прибыли
              <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30">
                Beta
              </Badge>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Предупреждения */}
            {aiAnalysis.warnings.length > 0 && (
              <div className="space-y-3">
                <h4 className="text-lg font-semibold text-red-400 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5" />
                  Предупреждения
                </h4>
                {aiAnalysis.warnings.map((warning, index) => (
                  <div key={index} className="bg-red-900/20 border border-red-500/30 rounded-lg p-4 flex items-start gap-3">
                    <warning.icon className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <h5 className="font-semibold text-red-300">{warning.title}</h5>
                      <p className="text-red-200 text-sm">{warning.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Инсайты */}
            {aiAnalysis.insights.length > 0 && (
              <div className="space-y-3">
                <h4 className="text-lg font-semibold text-blue-400 flex items-center gap-2">
                  <Lightbulb className="w-5 h-5" />
                  Анализ и инсайты
                </h4>
                {aiAnalysis.insights.map((insight, index) => (
                  <div key={index} className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-4 flex items-start gap-3">
                    <insight.icon className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <h5 className="font-semibold text-blue-300">{insight.title}</h5>
                      <p className="text-blue-200 text-sm">{insight.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Рекомендации */}
            <div className="space-y-3">
              <h4 className="text-lg font-semibold text-green-400 flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                Персональные рекомендации
              </h4>
              <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-4">
                <ul className="space-y-2">
                  {aiAnalysis.recommendations.map((recommendation, index) => (
                    <li key={index} className="text-green-200 text-sm flex items-start gap-2">
                      <span className="text-green-400 mt-1">•</span>
                      {recommendation}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Общий вердикт */}
            <div className="bg-gradient-to-r from-purple-900/40 to-pink-900/40 border border-purple-500/30 rounded-lg p-4">
              <h4 className="text-lg font-semibold text-purple-300 mb-2">🎯 Общий вердикт:</h4>
              <p className="text-purple-200 text-sm">
                {profitMargin >= 25
                  ? "Отличный товар для FBM арбитража! Высокая маржинальность позволяет масштабировать бизнес."
                  : profitMargin >= 15
                  ? "Неплохой товар, но есть возможности для оптимизации. Работай над снижением затрат."
                  : "Этот товар требует серьезной оптимизации или лучше найти альтернативы с большей прибылью."
                }
              </p>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
