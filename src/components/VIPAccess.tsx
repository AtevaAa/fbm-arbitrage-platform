"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Crown,
  Lock,
  Unlock,
  Bot,
  Brain,
  Eye,
  Target,
  TrendingUp,
  Zap,
  CheckCircle,
  AlertTriangle,
  DollarSign,
  Search,
  Bell,
  BarChart3
} from "lucide-react";

// Импортируем VIP компоненты
import AIProductScout from "@/components/vip/AIProductScout";
import PredictiveAnalytics from "@/components/vip/PredictiveAnalytics";
import CompetitorSpy from "@/components/vip/CompetitorSpy";

export default function VIPAccess() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [activeTab, setActiveTab] = useState("overview");

  const correctPassword = "Allo1093";

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === correctPassword) {
      setIsAuthenticated(true);
      setError("");
      // Сохраняем в localStorage для навигации
      localStorage.setItem("vip_access", "true");
    } else {
      setError("Неверный пароль доступа");
      setPassword("");
    }
  };

  const vipFeatures = [
    {
      id: "ai-scout",
      title: "AI-агент поиска",
      description: "Автоматический поиск 50K+ товаров ежедневно",
      icon: Bot,
      color: "from-blue-500 to-cyan-500",
      tab: "ai-scout"
    },
    {
      id: "predictive",
      title: "Predictive Analytics",
      description: "Прогнозы с точностью 89%",
      icon: Brain,
      color: "from-purple-500 to-pink-500",
      tab: "predictive"
    },
    {
      id: "competitor-spy",
      title: "Шпионаж 24/7",
      description: "Мониторинг конкурентов в реальном времени",
      icon: Eye,
      color: "from-green-500 to-emerald-500",
      tab: "competitor-spy"
    }
  ];

  return (
    <section className="py-24 px-4 bg-gradient-to-r from-yellow-900/20 via-orange-900/10 to-red-900/20 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-20 w-64 h-64 bg-yellow-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 left-20 w-80 h-80 bg-orange-500/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {!isAuthenticated ? (
          /* VIP Password Entry */
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-8">
              <Crown className="w-16 h-16 text-yellow-500 animate-bounce" />
              <Badge className="bg-yellow-500/20 text-yellow-300 border-yellow-500/30 text-xl px-6 py-3 animate-pulse">
                VIP EXCLUSIVE
              </Badge>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent animate-gradient">
              Секретные AI-инструменты
            </h2>

            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Эксклюзивные функции для максимизации прибыли. Доступ только по специальному паролю.
            </p>

            <div className="max-w-md mx-auto mb-8">
              <Card className="bg-black/60 backdrop-blur-xl border border-yellow-500/30">
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-yellow-400 flex items-center justify-center gap-2">
                    <Lock className="w-5 h-5" />
                    Введите пароль доступа
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handlePasswordSubmit} className="space-y-4">
                    <Input
                      type="password"
                      placeholder="Секретный пароль"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="bg-gray-800/80 border-yellow-500/30 text-white text-center text-lg"
                    />
                    {error && (
                      <p className="text-red-400 text-sm text-center">{error}</p>
                    )}
                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 text-black font-bold py-3 rounded-full text-lg transition-all duration-300 hover:scale-105"
                      data-crosshair
                    >
                      <Unlock className="w-5 h-5 mr-2" />
                      Разблокировать VIP
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Preview of VIP Features */}
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {vipFeatures.map((feature) => (
                <Card key={feature.id} className="bg-black/40 backdrop-blur-sm border border-gray-700 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 right-4">
                    <Lock className="w-5 h-5 text-yellow-500" />
                  </div>
                  <CardContent className="p-6 text-center relative">
                    <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-full flex items-center justify-center mx-auto mb-4 opacity-60`}>
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-bold text-white mb-2">{feature.title}</h3>
                    <p className="text-gray-400 text-sm">{feature.description}</p>
                    <div className="mt-4 text-xs text-yellow-400 font-semibold">
                      🔒 Требует VIP доступ
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-12 text-center">
              <div className="inline-flex items-center gap-4 bg-black/40 backdrop-blur-sm border border-yellow-500/30 rounded-full px-8 py-4">
                <span className="text-yellow-400 font-semibold">💎 Подсказка:</span>
                <span className="text-gray-300">Пароль выдается VIP-подписчикам</span>
              </div>
            </div>
          </div>
        ) : (
          /* VIP Dashboard */
          <div>
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-6">
                <Crown className="w-12 h-12 text-yellow-500" />
                <Badge className="bg-green-500/20 text-green-300 border-green-500/30 text-lg px-4 py-2">
                  VIP АКТИВИРОВАН
                </Badge>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
                Добро пожаловать в VIP зону
              </h2>
              <p className="text-xl text-gray-300 mb-6 max-w-3xl mx-auto">
                Теперь у вас есть доступ к эксклюзивным AI-инструментам для максимизации прибыли
              </p>

              <Button
                onClick={() => setIsAuthenticated(false)}
                variant="outline"
                className="border-gray-700 text-gray-400 hover:bg-gray-800"
              >
                <Lock className="w-4 h-4 mr-2" />
                Заблокировать доступ
              </Button>
            </div>

            {/* VIP Tools Tabs */}
            <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
              <TabsList className="grid w-full grid-cols-4 bg-gray-800/80 backdrop-blur-sm border border-gray-700 max-w-3xl mx-auto">
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
                  {/* Quick Stats */}
                  <div className="grid md:grid-cols-4 gap-6">
                    <Card className="bg-black/60 backdrop-blur-sm border border-blue-500/30">
                      <CardContent className="p-6 text-center">
                        <div className="text-3xl font-bold text-blue-400 mb-2">50K+</div>
                        <div className="text-gray-400 text-sm">товаров в день</div>
                      </CardContent>
                    </Card>
                    <Card className="bg-black/60 backdrop-blur-sm border border-purple-500/30">
                      <CardContent className="p-6 text-center">
                        <div className="text-3xl font-bold text-purple-400 mb-2">89%</div>
                        <div className="text-gray-400 text-sm">точность AI</div>
                      </CardContent>
                    </Card>
                    <Card className="bg-black/60 backdrop-blur-sm border border-green-500/30">
                      <CardContent className="p-6 text-center">
                        <div className="text-3xl font-bold text-green-400 mb-2">24/7</div>
                        <div className="text-gray-400 text-sm">мониторинг</div>
                      </CardContent>
                    </Card>
                    <Card className="bg-black/60 backdrop-blur-sm border border-yellow-500/30">
                      <CardContent className="p-6 text-center">
                        <div className="text-3xl font-bold text-yellow-400 mb-2">+347%</div>
                        <div className="text-gray-400 text-sm">рост прибыли</div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* VIP Features Grid */}
                  <div className="grid lg:grid-cols-3 gap-8">
                    {vipFeatures.map((feature) => (
                      <Card
                        key={feature.id}
                        className="bg-black/60 backdrop-blur-sm border-gray-800 hover:border-gray-600 transition-all duration-300 hover:scale-105 group cursor-pointer relative overflow-hidden"
                        onClick={() => setActiveTab(feature.tab)}
                        data-crosshair
                      >
                        <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />

                        <CardContent className="p-8 text-center relative">
                          <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                            <feature.icon className="w-8 h-8 text-white" />
                          </div>
                          <h3 className="text-xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 group-hover:bg-clip-text transition-all duration-300">
                            {feature.title}
                          </h3>
                          <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 mb-6">
                            {feature.description}
                          </p>
                          <Button
                            className={`w-full bg-gradient-to-r ${feature.color} hover:opacity-90 text-white transition-all duration-300`}
                            data-crosshair
                          >
                            Открыть инструмент
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
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
        )}
      </div>
    </section>
  );
}
