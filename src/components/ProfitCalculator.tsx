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

  // Berechnungen
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
    if (margin >= 30) return { text: "Ausgezeichneter Gewinn", color: "bg-green-500/20 text-green-300 border-green-500/30" };
    if (margin >= 20) return { text: "Guter Gewinn", color: "bg-yellow-500/20 text-yellow-300 border-yellow-500/30" };
    if (margin >= 10) return { text: "Geringer Gewinn", color: "bg-orange-500/20 text-orange-300 border-orange-500/30" };
    return { text: "Verlust", color: "bg-red-500/20 text-red-300 border-red-500/30" };
  };

  // KI-Gewinn-Assistent
  const getAIRecommendations = () => {
    const recommendations = [];
    const warnings = [];
    const insights = [];

    // Margenanalyse
    if (profitMargin < 15) {
      warnings.push({
        icon: AlertTriangle,
        title: "Geringe Marge",
        text: "Eine Marge von weniger als 15 % birgt ein hohes Verlustrisiko bei Preisänderungen"
      });
      recommendations.push("Finden Sie Lieferanten mit niedrigeren Preisen oder Produkte mit höheren Aufschlägen");
    }

    if (profitMargin >= 30) {
      insights.push({
        icon: CheckCircle,
        title: "Ausgezeichnete Marge",
        text: "Eine Marge von über 30 % ist ideal für ein stabiles Einkommen"
      });
      recommendations.push("Skalieren Sie den Verkauf dieses Produkts, erhöhen Sie die Menge");
    }

    // Analyse der Amazon-Gebühren
    if (amazonFee > 20) {
      warnings.push({
        icon: AlertTriangle,
        title: "Hohe Amazon-Gebühr",
        text: "Eine Gebühr von über 20 % schmälert den Gewinn erheblich"
      });
      recommendations.push("Ziehen Sie Produkte in Kategorien mit niedrigeren Gebühren in Betracht (Bücher, Medien - 15 %)");
    }

    // Versandanalyse
    const shippingPercent = (shipping / salePrice) * 100;
    if (shippingPercent > 15) {
      warnings.push({
        icon: AlertTriangle,
        title: "Teurer Versand",
        text: "Die Versandkosten betragen mehr als 15 % des Produktpreises"
      });
      recommendations.push("Optimieren Sie die Logistik oder finden Sie Lieferanten mit kostenlosem Versand");
    }

    // Volumenanalyse
    if (totalProfit < 500) {
      insights.push({
        icon: TrendingUp,
        title: "Geringes Verkaufsvolumen",
        text: "Um ernsthaft Geld zu verdienen, erhöhen Sie die Menge oder finden Sie teurere Produkte"
      });
      recommendations.push("Streben Sie einen monatlichen Gewinn von 1000 $ für ein stabiles Einkommen an");
    }

    if (totalProfit > 2000) {
      insights.push({
        icon: CheckCircle,
        title: "Ausgezeichnetes Potenzial",
        text: "Mit einem solchen Gewinn können Sie ernsthaft Geld verdienen"
      });
      recommendations.push("Automatisieren Sie Prozesse und stellen Sie einen virtuellen Assistenten ein");
    }

    // Preispunktanalyse
    if (salePrice < 15) {
      warnings.push({
        icon: AlertTriangle,
        title: "Niedriger Produktpreis",
        text: "Produkte unter 15 $ haben nach allen Ausgaben oft einen geringen Gewinn"
      });
      recommendations.push("Konzentrieren Sie sich auf Produkte zwischen 20 und 100 US-Dollar für eine bessere Marge");
    }

    if (salePrice > 100) {
      insights.push({
        icon: Lightbulb,
        title: "Teures Produkt",
        text: "Teure Produkte haben möglicherweise eine geringere Nachfrage, aber einen höheren Gewinn pro Einheit"
      });
      recommendations.push("Stellen Sie sicher, dass eine stabile Nachfrage nach Produkten in diesem Preissegment besteht");
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
            FBM-Gewinnrechner
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Eingabeparameter */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <Label htmlFor="salePrice" className="text-white">Verkaufspreis bei Amazon ($)</Label>
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
                <Label htmlFor="costPrice" className="text-white">Einkaufspreis ($)</Label>
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
                <Label htmlFor="shipping" className="text-white">Versand zum Kunden ($)</Label>
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
                <Label htmlFor="amazonFee" className="text-white">Amazon-Gebühr (%)</Label>
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
                <Label htmlFor="quantity" className="text-white">Anzahl der Produkte pro Monat</Label>
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
                    <span className="text-white font-medium">{quantity[0]} Stk</span>
                    <span>200</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Berechnungsergebnisse */}
          <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-xl p-6 border border-blue-500/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-white">Berechnungsergebnisse</h3>
              <Badge className={badge.color}>
                {badge.text}
              </Badge>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-400">Verkaufspreis:</span>
                  <span className="text-white font-medium">${salePrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Einkaufspreis:</span>
                  <span className="text-white font-medium">${costPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Versand:</span>
                  <span className="text-white font-medium">${shipping.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Amazon-Gebühr:</span>
                  <span className="text-white font-medium">${amazonFeeAmount.toFixed(2)}</span>
                </div>
                <hr className="border-gray-600" />
                <div className="flex justify-between">
                  <span className="text-gray-400">Gesamtkosten:</span>
                  <span className="text-white font-medium">${totalCosts.toFixed(2)}</span>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-400">Gewinn pro Einheit:</span>
                  <span className={`font-bold ${getProfitColor(profitMargin)}`}>
                    ${profitPerItem.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Gewinnmarge:</span>
                  <span className={`font-bold ${getProfitColor(profitMargin)}`}>
                    {profitMargin.toFixed(1)}%
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Menge:</span>
                  <span className="text-white font-medium">{quantity[0]} Stk</span>
                </div>
                <hr className="border-gray-600" />
                <div className="flex justify-between">
                  <span className="text-gray-400">Gesamtumsatz:</span>
                  <span className="text-blue-400 font-bold">${totalRevenue.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Gesamtgewinn:</span>
                  <span className={`font-bold text-lg ${getProfitColor(profitMargin)}`}>
                    ${totalProfit.toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* KI-Assistent-Button */}
          <div className="flex justify-center">
            <Button
              onClick={() => setShowAssistant(!showAssistant)}
              className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <Brain className="w-5 h-5 mr-2" />
              {showAssistant ? "Assistent ausblenden" : "KI-Analyse erhalten"}
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* KI-Assistent */}
      {showAssistant && (
        <Card className="bg-gradient-to-b from-purple-900/20 to-pink-900/20 border-purple-500/30 animate-scale-in">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-3">
              <Brain className="w-8 h-8 text-purple-400" />
              KI-Gewinn-Assistent
              <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30">
                Beta
              </Badge>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Warnungen */}
            {aiAnalysis.warnings.length > 0 && (
              <div className="space-y-3">
                <h4 className="text-lg font-semibold text-red-400 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5" />
                  Warnungen
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

            {/* Einblicke */}
            {aiAnalysis.insights.length > 0 && (
              <div className="space-y-3">
                <h4 className="text-lg font-semibold text-blue-400 flex items-center gap-2">
                  <Lightbulb className="w-5 h-5" />
                  Analyse & Einblicke
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

            {/* Empfehlungen */}
            <div className="space-y-3">
              <h4 className="text-lg font-semibold text-green-400 flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                Persönliche Empfehlungen
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

            {/* Gesamturteil */}
            <div className="bg-gradient-to-r from-purple-900/40 to-pink-900/40 border border-purple-500/30 rounded-lg p-4">
              <h4 className="text-lg font-semibold text-purple-300 mb-2">🎯 Gesamturteil:</h4>
              <p className="text-purple-200 text-sm">
                {profitMargin >= 25
                  ? "Ausgezeichnetes Produkt für FBM-Arbitrage! Die hohe Marge ermöglicht die Skalierung des Geschäfts."
                  : profitMargin >= 15
                  ? "Kein schlechtes Produkt, aber es gibt Optimierungspotenzial. Arbeiten Sie an der Kostensenkung."
                  : "Dieses Produkt erfordert eine ernsthafte Optimierung oder es ist besser, Alternativen mit höherem Gewinn zu finden."
                }
              </p>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
