import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Lesson1Page() {
  return (
    <div className="pt-24 pb-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-green-500/20 text-green-300 border-green-500/30">
            Урок 1 • Бесплатно
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
            Основы FBM арбитража на Amazon US
          </h1>
          <p className="text-xl text-gray-400">
            Изучи базовые принципы заработка на Amazon без вложений в склад
          </p>
        </div>

        {/* Video Placeholder */}
        <div className="mb-12">
          <div className="aspect-video bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-gray-800 flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20" />
            <div className="relative z-10 text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 cursor-pointer hover:scale-110 transition-transform">
                <span className="text-3xl text-white">▶</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Что такое FBM и как на этом зарабатывать?
              </h3>
              <p className="text-gray-400">
                Продолжительность: 25 минут
              </p>
            </div>
          </div>
        </div>

        {/* Lesson Content */}
        <div className="space-y-8 mb-12">
          <Card className="bg-gradient-to-b from-gray-900 to-black border-gray-800">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-3">
                <span className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-sm font-bold">1</span>
                Что такое FBM (Fulfillment by Merchant)?
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300 space-y-4">
              <p>
                FBM - это модель продаж на Amazon, где продавец самостоятельно обрабатывает и отправляет заказы покупателям.
                В отличие от FBA, вам не нужно отправлять товары на склады Amazon.
              </p>
              <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-4">
                <h4 className="font-semibold text-blue-300 mb-2">Ключевые преимущества FBM:</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Низкие стартовые затраты</li>
                  <li>• Полный контроль над товарами</li>
                  <li>• Возможность работать дропшиппингом</li>
                  <li>• Быстрое масштабирование</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-b from-gray-900 to-black border-gray-800">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-3">
                <span className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-sm font-bold">2</span>
                Как работает арбитраж?
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300 space-y-4">
              <p>
                Арбитраж - это покупка товаров у одних поставщиков и продажа их по более высокой цене на Amazon.
                Ваша прибыль = разница между ценой закупки и продажи минус комиссии и расходы.
              </p>
              <div className="grid md:grid-cols-3 gap-4 mt-6">
                <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-4 text-center">
                  <div className="text-2xl mb-2">🛒</div>
                  <h5 className="font-semibold text-green-300 mb-1">Покупка</h5>
                  <p className="text-sm">Находишь товар у поставщика за $10</p>
                </div>
                <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-4 text-center">
                  <div className="text-2xl mb-2">📦</div>
                  <h5 className="font-semibold text-blue-300 mb-1">Продажа</h5>
                  <p className="text-sm">Продаёшь на Amazon за $25</p>
                </div>
                <div className="bg-purple-900/20 border border-purple-500/30 rounded-lg p-4 text-center">
                  <div className="text-2xl mb-2">💰</div>
                  <h5 className="font-semibold text-purple-300 mb-1">Прибыль</h5>
                  <p className="text-sm">Получаешь $12-15 чистой прибыли</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-b from-gray-900 to-black border-gray-800">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-3">
                <span className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-sm font-bold">3</span>
                Первые шаги в FBM
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300 space-y-4">
              <p>
                Чтобы начать работать с FBM арбитражем, вам понадобится:
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <div>
                    <h5 className="font-semibold text-white">Аккаунт Amazon Seller</h5>
                    <p className="text-sm text-gray-400">Зарегистрируйся как продавец на Amazon.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <div>
                    <h5 className="font-semibold text-white">Инструменты для исследования</h5>
                    <p className="text-sm text-gray-400">Используй сервисы для анализа конкуренции и спроса</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <div>
                    <h5 className="font-semibold text-white">База поставщиков</h5>
                    <p className="text-sm text-gray-400">Найди надёжных поставщиков с хорошими ценами</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Navigation */}
        <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
          <Button asChild variant="outline" className="border-white/20 text-white hover:bg-white/10">
            <Link href="/">← Назад на главную</Link>
          </Button>

          <div className="text-center">
            <p className="text-gray-400 text-sm mb-4">Понравился урок?</p>
            <Button asChild className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 rounded-full font-semibold">
              <Link href="/subscriptions">Получить полный доступ</Link>
            </Button>
          </div>

          <Button asChild className="bg-white/10 hover:bg-white/20 text-white">
            <Link href="/lessons/lesson-2">Следующий урок →</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
