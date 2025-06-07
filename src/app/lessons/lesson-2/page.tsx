import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Lesson2Page() {
  return (
    <div className="pt-24 pb-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-yellow-500/20 text-yellow-300 border-yellow-500/30">
            Урок 2 • Продвинутый
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
            Поиск прибыльных товаров и анализ конкуренции
          </h1>
          <p className="text-xl text-gray-400">
            Изучи продвинутые методы поиска товаров с высокой маржинальностью
          </p>
        </div>

        {/* Video Placeholder */}
        <div className="mb-12">
          <div className="aspect-video bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-gray-800 flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-900/20 to-orange-900/20" />
            <div className="relative z-10 text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 cursor-pointer hover:scale-110 transition-transform">
                <span className="text-3xl text-white">🔒</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Секреты поиска прибыльных товаров
              </h3>
              <p className="text-gray-400 mb-4">
                Продолжительность: 35 минут
              </p>
              <Badge className="bg-yellow-500/20 text-yellow-300 border-yellow-500/30">
                Доступно по подписке
              </Badge>
            </div>
          </div>
        </div>

        {/* Lesson Content */}
        <div className="space-y-8 mb-12">
          <Card className="bg-gradient-to-b from-gray-900 to-black border-gray-800">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-3">
                <span className="w-8 h-8 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-full flex items-center justify-center text-sm font-bold">1</span>
                Критерии выбора товаров
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300 space-y-4">
              <p>
                Не все товары подходят для FBM арбитража. Изучи ключевые критерии отбора прибыльных позиций.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="font-semibold text-green-300">✅ Хорошие товары:</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• BSR &lt; 100,000 в категории</li>
                    <li>• Маржа от 30-40%</li>
                    <li>• Средняя цена $15-100</li>
                    <li>• Стабильный спрос</li>
                    <li>• Мало конкурентов FBM</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="font-semibold text-red-300">❌ Избегай:</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Сезонные товары</li>
                    <li>• Товары с ограничениями</li>
                    <li>• Тяжёлые или хрупкие позиции</li>
                    <li>• Перенасыщенные ниши</li>
                    <li>• Товары без брендинга</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-b from-gray-900 to-black border-gray-800">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-3">
                <span className="w-8 h-8 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-full flex items-center justify-center text-sm font-bold">2</span>
                Инструменты для анализа
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300 space-y-4">
              <p>
                Используй профессиональные инструменты для поиска и анализа товаров.
                Это сэкономит время и поможет найти скрытые возможности.
              </p>
              <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-lg p-6">
                <h4 className="font-semibold text-yellow-300 mb-4">🔍 Основные инструменты:</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-medium text-white mb-2">Для исследования рынка:</h5>
                    <ul className="space-y-1 text-sm">
                      <li>• Jungle Scout</li>
                      <li>• Helium 10</li>
                      <li>• AMZScout</li>
                      <li>• Keepa</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-white mb-2">Для поиска поставщиков:</h5>
                    <ul className="space-y-1 text-sm">
                      <li>• Tactical Arbitrage</li>
                      <li>• OAXray</li>
                      <li>• RevSeller</li>
                      <li>• AZInsight</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-b from-gray-900 to-black border-gray-800">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-3">
                <span className="w-8 h-8 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-full flex items-center justify-center text-sm font-bold">3</span>
                Анализ конкуренции
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300 space-y-4">
              <p>
                Изучение конкурентов поможет понять, стоит ли входить в нишу и как позиционировать свой товар.
              </p>
              <div className="space-y-4">
                <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-4">
                  <h5 className="font-semibold text-blue-300 mb-3">На что обращать внимание:</h5>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <h6 className="font-medium text-white mb-2">Листинги конкурентов:</h6>
                      <ul className="space-y-1">
                        <li>• Качество фотографий</li>
                        <li>• Описание товара</li>
                        <li>• Количество отзывов</li>
                        <li>• Рейтинг продавца</li>
                      </ul>
                    </div>
                    <div>
                      <h6 className="font-medium text-white mb-2">Продажи и цены:</h6>
                      <ul className="space-y-1">
                        <li>• Средняя цена в нише</li>
                        <li>• Объём продаж</li>
                        <li>• Сезонность спроса</li>
                        <li>• Тренды роста/падения</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-b from-gray-900 to-black border-gray-800">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-3">
                <span className="w-8 h-8 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-full flex items-center justify-center text-sm font-bold">4</span>
                Практический пример
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300 space-y-4">
              <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-6">
                <h4 className="font-semibold text-green-300 mb-4">💡 Кейс: Поиск товара в категории "Home & Kitchen"</h4>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center">
                    <span>Товар:</span>
                    <span className="font-medium">Силиконовые формы для выпечки</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>BSR:</span>
                    <span className="text-green-300">#45,000 в Home & Kitchen</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Цена на Amazon:</span>
                    <span>$24.99</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Цена у поставщика:</span>
                    <span>$12.50</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Комиссии Amazon:</span>
                    <span>$3.75 (15%)</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Доставка:</span>
                    <span>$2.50</span>
                  </div>
                  <hr className="border-green-500/30" />
                  <div className="flex justify-between items-center font-semibold text-green-300">
                    <span>Чистая прибыль:</span>
                    <span>$6.24 (25%)</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* CTA for Subscription */}
        <div className="bg-gradient-to-r from-yellow-900/20 to-orange-900/20 border border-yellow-500/30 rounded-xl p-8 text-center mb-8">
          <h3 className="text-2xl font-bold text-white mb-4">
            Хочешь изучить полную методологию?
          </h3>
          <p className="text-gray-300 mb-6">
            Получи доступ к детальным урокам, инструментам и базе поставщиков
          </p>
          <Button asChild className="bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 text-white px-8 py-3 rounded-full font-semibold">
            <Link href="/subscriptions">Выбрать подписку</Link>
          </Button>
        </div>

        {/* Navigation */}
        <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
          <Button asChild variant="outline" className="border-white/20 text-white hover:bg-white/10">
            <Link href="/lessons/lesson-1">← Предыдущий урок</Link>
          </Button>

          <Button asChild className="bg-white/10 hover:bg-white/20 text-white">
            <Link href="/sales">Узнать о продажах →</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
