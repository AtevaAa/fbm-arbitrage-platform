"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Lock,
  Unlock,
  Bot,
  TrendingUp,
  Zap,
  Crown,
  Eye,
  Search,
  Brain,
  DollarSign,
  Target,
  Sparkles
} from "lucide-react";

// Импортируем VIP компоненты
import AIProductScout from "@/components/vip/AIProductScout";
import PredictiveAnalytics from "@/components/vip/PredictiveAnalytics";
import CompetitorSpy from "@/components/vip/CompetitorSpy";

export default function VipPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [selectedFeature, setSelectedFeature] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState("overview");

  const correctPassword = "Allo1093";

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === correctPassword) {
      setIsAuthenticated(true);
      setError("");
      localStorage.setItem("vip_access", "true");
    } else {
      setError("Неверный пароль. Доступ только для VIP-подписчиков.");
      setPassword("");
    }
  };

  useEffect(() => {
    const savedAccess = localStorage.getItem("vip_access");
    if (savedAccess === "true") {
      setIsAuthenticated(true);
    }
  }, []);

  const vipFeatures = [
    {
      id: "ai-scout",
      title: "AI-агент поиска товаров",
      description: "Автоматический поиск прибыльных товаров в реальном времени",
      icon: Bot,
      status: "active",
      color: "from-blue-500 to-cyan-500",
      tab: "ai-scout"
    },
    {
      id: "predictive",
      title: "Predictive Analytics",
      description: "Предсказание спроса и трендов с точностью 89%",
      icon: Brain,
      status: "active",
      color: "from-purple-500 to-pink-500",
      tab: "predictive"
    },
    {
      id: "competitor-spy",
      title: "Живая аналитика конкурентов",
      description: "Мониторинг конкурентов 24/7 с мгновенными уведомлениями",
      icon: Eye,
      status: "active",
      color: "from-green-500 to-emerald-500",
      tab: "competitor-spy"
    }
  ];

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center px-4">
        <Card className="w-full max-w-md bg-gradient-to-b from-gray-900 to-black border border-gray-800">
          <CardHeader className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Crown className="w-8 h-8 text-white" />
            </div>
            <CardTitle className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              VIP Доступ
            </CardTitle>
            <p className="text-gray-400">
              Эксклюзивные функции для Premium подписчиков
            </p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handlePasswordSubmit} className="space-y-4">
              <div>
                <Input
                  type="password"
                  placeholder="Введите VIP пароль"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-gray-800 border-gray-700 text-white"
                />
                {error && (
                  <p className="text-red-400 text-sm mt-2">{error}</p>
                )}
              </div>
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 text-white"
              >
                <Unlock className="w-4 h-4 mr-2" />
                Войти в VIP зону
              </Button>
            </form>

            <div className="mt-6 p-4 bg-yellow-900/20 border border-yellow-500/30 rounded-lg">
              <h4 className="text-yellow-400 font-semibold mb-2">🎯 Что вас ждет:</h4>
              <ul className="text-yellow-200 text-sm space-y-1">
                <li>• AI-агент для автопоиска товаров</li>
                <li>• Предсказательная аналитика</li>
                <li>• Шпионаж за конкурентами 24/7</li>
                <li>• Эксклюзивные инструменты</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-16 px-4 min-h-screen bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Crown className="w-12 h-12 text-yellow-500" />
            <Badge className="bg-yellow-500/20 text-yellow-300 border-yellow-500/30 text-lg px-4 py-2 animate-pulse">
              VIP EXCLUSIVE
            </Badge>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent animate-gradient">
            Секретные инструменты
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-6">
            Эксклюзивные AI-функции для максимизации прибыли. Доступно только VIP-подписчикам.
          </p>

          <Button
            onClick={() => {
              setIsAuthenticated(false);
              localStorage.removeItem("vip_access");
            }}
            variant="outline"
            className="border-gray-700 text-gray-400 hover:bg-gray-800"
          >
            <Lock className="w-4 h-4 mr-2" />
            Выйти из VIP зоны
          </Button>
        </div>

        {/* VIP Tools Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 bg-gray-800 border border-gray-700">
            <TabsTrigger value="overview" className="data-[state=active]:bg-yellow-600">
              Обзор
            </TabsTrigger>
            <TabsTrigger value="ai-scout" className="data-[state=active]:bg-blue-600">
              AI-агент
            </TabsTrigger>
            <TabsTrigger value="predictive" className="data-[state=active]:bg-purple-600">
              Аналитика
            </TabsTrigger>
            <TabsTrigger value="competitor-spy" className="data-[state=active]:bg-green-600">
              Конкуренты
            </TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview">
            <div className="space-y-8">
              {/* VIP Features Grid */}
              <div className="grid lg:grid-cols-3 gap-8">
                {vipFeatures.map((feature) => (
                  <Card
                    key={feature.id}
                    className={`bg-gradient-to-b from-gray-900 to-black border-gray-800 hover:border-gray-600 transition-all duration-300 hover:scale-105 group cursor-pointer relative overflow-hidden`}
                    onClick={() => setActiveTab(feature.tab)}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />

                    <CardHeader className="relative">
                      <div className="flex items-center justify-between mb-4">
                        <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                          <feature.icon className="w-6 h-6 text-white" />
                        </div>
                        <Badge className="bg-green-500/20 text-green-300 border-green-500/30">
                          {feature.status === "active" ? "Активно" : "Скоро"}
                        </Badge>
                      </div>
                      <CardTitle className="text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 group-hover:bg-clip-text transition-all duration-300">
                        {feature.title}
                      </CardTitle>
                      <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                        {feature.description}
                      </p>
                    </CardHeader>

                    <CardContent className="relative">
                      <Button className={`w-full bg-gradient-to-r ${feature.color} hover:opacity-90 text-white transition-all duration-300`}>
                        Открыть инструмент
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Stats Section */}
              <div className="bg-gradient-to-r from-gray-900/80 to-gray-800/60 rounded-2xl p-8 border border-gray-700">
                <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Результаты VIP-пользователей
                </h2>

                <div className="grid md:grid-cols-4 gap-8 text-center">
                  <div className="group hover:scale-105 transition-all duration-300">
                    <div className="text-4xl md:text-5xl font-bold text-yellow-400 mb-2 group-hover:text-yellow-300 transition-colors duration-300">+347%</div>
                    <div className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">Увеличение прибыли</div>
                  </div>
                  <div className="group hover:scale-105 transition-all duration-300">
                    <div className="text-4xl md:text-5xl font-bold text-green-400 mb-2 group-hover:text-green-300 transition-colors duration-300">89%</div>
                    <div className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">Точность прогнозов</div>
                  </div>
                  <div className="group hover:scale-105 transition-all duration-300">
                    <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2 group-hover:text-blue-300 transition-colors duration-300">24/7</div>
                    <div className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">Мониторинг рынка</div>
                  </div>
                  <div className="group hover:scale-105 transition-all duration-300">
                    <div className="text-4xl md:text-5xl font-bold text-purple-400 mb-2 group-hover:text-purple-300 transition-colors duration-300">50K+</div>
                    <div className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">Товаров в день</div>
                  </div>
                </div>
              </div>

              {/* Warning */}
              <div className="text-center bg-red-900/20 border border-red-500/30 rounded-xl p-6">
                <h3 className="text-red-400 font-bold text-lg mb-2">⚠️ Строго конфиденциально</h3>
                <p className="text-red-200 text-sm">
                  Данные инструменты дают серьезное конкурентное преимущество.
                  Не делитесь доступом с другими пользователями.
                </p>
              </div>
            </div>
          </TabsContent>

          {/* AI Scout Tab */}
          <TabsContent value="ai-scout">
            <AIProductScout />
          </TabsContent>

          {/* Predictive Analytics Tab */}
          <TabsContent value="predictive">
            <PredictiveAnalytics />
          </TabsContent>

          {/* Competitor Spy Tab */}
          <TabsContent value="competitor-spy">
            <CompetitorSpy />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
