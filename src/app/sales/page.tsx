import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function SalesPage() {
  return (
    <div className="pt-24 pb-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-6 bg-orange-500/20 text-orange-300 border-orange-500/30">
            Стратегия продаж
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
            Секреты успешных продаж на Amazon
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Изучи проверенные стратегии и тактики для максимизации прибыли от FBM арбитража
          </p>
        </div>

        {/* Sales Funnel */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-white">
            Воронка продаж FBM арбитража
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            <Card className="bg-gradient-to-b from-blue-900/40 to-blue-800/20 border-blue-500/50 text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🔍</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Исследование</h3>
                <p className="text-blue-200 text-sm">
                  Поиск прибыльных товаров и анализ конкуренции
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-b from-green-900/40 to-green-800/20 border-green-500/50 text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📦</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Закупка</h3>
                <p className="text-green-200 text-sm">
                  Покупка товаров у надёжных поставщиков
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-b from-purple-900/40 to-purple-800/20 border-purple-500/50 text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Листинг</h3>
                <p className="text-purple-200 text-sm">
                  Создание привлекательного объявления на Amazon
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-b from-orange-900/40 to-orange-800/20 border-orange-500/50 text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💰</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Прибыль</h3>
                <p className="text-orange-200 text-sm">
                  Получение стабильного дохода
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Key Strategies */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Ключевые стратегии продаж
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-gradient-to-b from-gray-900 to-black border-gray-800">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-3">
                  <span className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-sm">📈</span>
                  Оптимизация листингов
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 space-y-3">
                <ul className="space-y-2 text-sm">
                  <li>• Качественные фотографии товара</li>
                  <li>• SEO-оптимизированные заголовки</li>
                  <li>• Детальные описания с ключевыми словами</li>
                  <li>• Конкурентные цены</li>
                  <li>• A+ контент для премиум-брендов</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-b from-gray-900 to-black border-gray-800">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-3">
                  <span className="w-8 h-8 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center text-sm">⚡</span>
                  Быстрая обработка заказов
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 space-y-3">
                <ul className="space-y-2 text-sm">
                  <li>• Автоматизация обработки заказов</li>
                  <li>• Отправка в день заказа</li>
                  <li>• Отслеживание доставки</li>
                  <li>• Качественная упаковка</li>
                  <li>• Быстрая обратная связь с клиентами</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-b from-gray-900 to-black border-gray-800">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-3">
                  <span className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center text-sm">🎯</span>
                  Управление отзывами
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 space-y-3">
                <ul className="space-y-2 text-sm">
                  <li>• Запрос отзывов у довольных клиентов</li>
                  <li>• Быстрое решение проблем</li>
                  <li>• Качественное послепродажное обслуживание</li>
                  <li>• Мониторинг репутации</li>
                  <li>• Работа с негативными отзывами</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-b from-gray-900 to-black border-gray-800">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-3">
                  <span className="w-8 h-8 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-full flex items-center justify-center text-sm">🔄</span>
                  Масштабирование бизнеса
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 space-y-3">
                <ul className="space-y-2 text-sm">
                  <li>• Расширение ассортимента</li>
                  <li>• Автоматизация процессов</li>
                  <li>• Работа с виртуальными помощниками</li>
                  <li>• Развитие собственного бренда</li>
                  <li>• Выход на новые рынки</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Revenue Breakdown */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Структура доходов FBM арбитража
          </h2>

          <div className="bg-gradient-to-r from-gray-900/80 to-gray-800/60 rounded-2xl p-8 border border-gray-700">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <h3 className="text-2xl font-bold text-green-400 mb-2">Новичок</h3>
                <div className="text-4xl font-bold text-white mb-4">$500-1,500</div>
                <p className="text-gray-400 text-sm mb-4">в месяц</p>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>• 1-3 часа в день</li>
                  <li>• 10-20 товаров</li>
                  <li>• Базовые инструменты</li>
                </ul>
              </div>

              <div className="border-x border-gray-700 px-8">
                <h3 className="text-2xl font-bold text-blue-400 mb-2">Опытный</h3>
                <div className="text-4xl font-bold text-white mb-4">$2,000-5,000</div>
                <p className="text-gray-400 text-sm mb-4">в месяц</p>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>• 3-5 часов в день</li>
                  <li>• 50-100 товаров</li>
                  <li>• Автоматизация процессов</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-purple-400 mb-2">Профессионал</h3>
                <div className="text-4xl font-bold text-white mb-4">$5,000+</div>
                <p className="text-gray-400 text-sm mb-4">в месяц</p>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>• Команда помощников</li>
                  <li>• 100+ товаров</li>
                  <li>• Собственные бренды</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Success Stories */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Истории успеха наших учеников
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-gradient-to-b from-blue-900/20 to-blue-800/10 border-blue-500/30">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">АН</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Анна Новикова</h4>
                    <p className="text-blue-300 text-sm">Москва, 3 месяца в арбитраже</p>
                  </div>
                </div>
                <p className="text-gray-300 text-sm mb-4">
                  "Начала с курса для новичков и уже через месяц получила первую прибыль $800.
                  Сейчас стабильно зарабатываю $3,200 в месяц, работая 4 часа в день."
                </p>
                <div className="text-green-400 font-semibold">
                  Результат: $3,200/месяц
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-b from-green-900/20 to-green-800/10 border-green-500/30">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">ДС</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Дмитрий Смирнов</h4>
                    <p className="text-green-300 text-sm">СПб, 6 месяцев в арбитраже</p>
                  </div>
                </div>
                <p className="text-gray-300 text-sm mb-4">
                  "Бросил офисную работу и полностью перешёл на FBM. Благодаря курсу и поддержке
                  команды вышел на доход $7,500 в месяц. Теперь работаю из дома!"
                </p>
                <div className="text-green-400 font-semibold">
                  Результат: $7,500/месяц
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-2xl p-8 text-center border border-blue-500/30">
          <h2 className="text-3xl font-bold text-white mb-4">
            Готов начать зарабатывать на Amazon?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Присоединяйся к нашему сообществу успешных арбитражников и получи все необходимые
            инструменты для старта прибыльного бизнеса
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 rounded-full text-lg font-semibold">
              <Link href="/subscriptions">Выбрать тариф</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10 px-8 py-3 rounded-full text-lg">
              <Link href="/lessons/lesson-1">Начать с бесплатного урока</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
