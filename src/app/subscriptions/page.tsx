import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import SubscriptionModal from "@/components/SubscriptionModal";
import ContactForm from "@/components/ContactForm";
import PixelCard from "@/components/PixelCard";

const plans = [
  {
    name: "Starter",
    price: "$49",
    period: "/месяц",
    description: "Идеально для новичков",
    badge: null,
    features: [
      "Основы FBM арбитража",
      "5 готовых поставщиков",
      "Базовые инструменты поиска",
      "Telegram-чат поддержки",
      "Еженедельные вебинары",
      "30 дней доступа к курсу"
    ],
    buttonText: "Начать с Starter",
    popular: false
  },
  {
    name: "Professional",
    price: "$99",
    period: "/месяц",
    description: "Для серьёзного заработка",
    badge: "Популярный",
    features: [
      "Всё из тарифа Starter",
      "15+ проверенных поставщиков",
      "Продвинутые инструменты анализа",
      "Персональный куратор",
      "Закрытый Telegram-канал",
      "Безлимитный доступ к курсу",
      "Готовые листинги товаров",
      "Автоматизация процессов"
    ],
    buttonText: "Выбрать Professional",
    popular: true
  },
  {
    name: "VIP",
    price: "$199",
    period: "/месяц",
    description: "Максимальный результат",
    badge: "Премиум",
    features: [
      "Всё из тарифа Professional",
      "50+ эксклюзивных поставщиков",
      "Индивидуальные консультации",
      "Готовый аккаунт Amazon",
      "VIP-поддержка 24/7",
      "Эксклюзивные инструменты",
      "Персональная стратегия",
      "Гарантия результата"
    ],
    buttonText: "Получить VIP",
    popular: false
  }
];

export default function SubscriptionsPage() {
  return (
    <div className="pt-24 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-6 bg-purple-500/20 text-purple-300 border-purple-500/30 animate-pulse">
            Выбери свой путь к успеху
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent animate-gradient">
            Тарифные планы
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Выбери подходящий тариф и начни зарабатывать на Amazon FBM уже сегодня
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan) => (
            <PixelCard
              key={plan.name}
              variant={plan.popular ? "blue" : "default"}
              className="relative overflow-hidden transition-all duration-300 hover:scale-105 group"
            >
              <Card
                className={`relative overflow-hidden h-full ${
                  plan.popular
                    ? "bg-gradient-to-b from-blue-900/40 to-purple-900/40 border-blue-500/50 shadow-2xl shadow-blue-500/20"
                    : "bg-gradient-to-b from-gray-900 to-black border-gray-800 hover:border-gray-700"
                }`}
              >
              {plan.badge && (
                <div className="absolute top-0 right-0 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-1 text-sm font-medium rounded-bl-lg animate-pulse">
                  {plan.badge}
                </div>
              )}

              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                  {plan.name}
                </CardTitle>
                <div className="mb-4">
                  <span className="text-4xl md:text-5xl font-bold text-white group-hover:scale-110 transition-transform duration-300 inline-block">
                    {plan.price}
                  </span>
                  <span className="text-gray-400 text-lg">
                    {plan.period}
                  </span>
                </div>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  {plan.description}
                </p>
              </CardHeader>

              <CardContent className="pt-0">
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={`${plan.name}-${featureIndex}`} className="flex items-start gap-3 group-hover:translate-x-1 transition-transform duration-300" style={{transitionDelay: `${featureIndex * 50}ms`}}>
                      <div className="w-5 h-5 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <span className="text-white text-xs">✓</span>
                      </div>
                      <span className="text-gray-300 text-sm leading-relaxed group-hover:text-white transition-colors duration-300">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <SubscriptionModal
                  planName={plan.name}
                  planPrice={plan.price}
                  planPeriod={plan.period}
                  planFeatures={plan.features}
                >
                  <Button
                    className={`w-full py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                      plan.popular
                        ? "bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white shadow-lg"
                        : "bg-white/10 hover:bg-white/20 text-white border border-white/20 hover:border-white/40"
                    }`}
                    size="lg"
                  >
                    {plan.buttonText}
                  </Button>
                </SubscriptionModal>
              </CardContent>
            </Card>
          </PixelCard>
          ))}
        </div>

        {/* Features Comparison */}
        <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 rounded-2xl p-8 border border-gray-800 hover:border-gray-700 transition-all duration-300 mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Что входит в каждый тариф?
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="group">
              <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">Обучающие материалы</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="hover:text-gray-300 transition-colors duration-300 hover:translate-x-2">• Видеокурс "Основы FBM арбитража"</li>
                <li className="hover:text-gray-300 transition-colors duration-300 hover:translate-x-2">• Практические кейсы и примеры</li>
                <li className="hover:text-gray-300 transition-colors duration-300 hover:translate-x-2">• Чек-листы и шаблоны</li>
                <li className="hover:text-gray-300 transition-colors duration-300 hover:translate-x-2">• Регулярные обновления курса</li>
              </ul>
            </div>

            <div className="group">
              <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-purple-400 transition-colors duration-300">Инструменты и поддержка</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="hover:text-gray-300 transition-colors duration-300 hover:translate-x-2">• Калькулятор прибыльности</li>
                <li className="hover:text-gray-300 transition-colors duration-300 hover:translate-x-2">• База проверенных поставщиков</li>
                <li className="hover:text-gray-300 transition-colors duration-300 hover:translate-x-2">• Telegram-сообщество</li>
                <li className="hover:text-gray-300 transition-colors duration-300 hover:translate-x-2">• Техническая поддержка</li>
              </ul>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Остались вопросы?
          </h2>
          <p className="text-gray-400 mb-6">
            Свяжись с нами и получи персональную консультацию
          </p>
          <ContactForm
            triggerText="Задать вопрос"
            trigger={
              <Button
                variant="outline"
                size="lg"
                className="border-white/20 text-white hover:bg-white/10 px-8 py-3 rounded-full hover:scale-105 transition-all duration-300"
              >
                Задать вопрос
              </Button>
            }
          />
        </div>
      </div>
    </div>
  );
}
