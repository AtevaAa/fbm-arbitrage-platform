import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ProfitCalculator from "@/components/ProfitCalculator";
import ContactForm from "@/components/ContactForm";
import SubscriptionModal from "@/components/SubscriptionModal";
import VIPAccess from "@/components/VIPAccess";

export default function HomePage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-black" />
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}} />
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <Badge className="mb-6 bg-blue-500/20 text-blue-300 border-blue-500/30 hover:bg-blue-500/30 transition-all duration-300 animate-pulse">
            Die neue Ära von Amazon FBM
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent animate-gradient">
            Verdiene bei Amazon US
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed opacity-0 animate-fade-in-up" style={{animationDelay: '0.5s'}}>
            Lerne das FBM-Arbitrage-System und fange noch heute an, auf dem amerikanischen Amazon-Markt Geld zu verdienen
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-in-up" style={{animationDelay: '1s'}}>
            <SubscriptionModal
              planName="Professional"
              planPrice="$99"
              planPeriod="/Monat"
              planFeatures={[
                "Alles aus dem Starter-Tarif",
                "15+ geprüfte Lieferanten",
                "Erweiterte Analysewerkzeuge",
                "Persönlicher Kurator"
              ]}
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-2xl hover:scale-105 transition-all duration-300"
                data-crosshair
              >
                Training beginnen
              </Button>
            </SubscriptionModal>

            <Button asChild variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10 px-8 py-3 rounded-full text-lg hover:scale-105 transition-all duration-300">
              <Link href="/lessons/lesson-1">Kostenlose Lektion</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* VIP Access Section */}
      <VIPAccess />

      {/* Profit Calculator Section */}
      <section className="py-24 px-4 bg-gradient-to-r from-gray-900/50 to-gray-800/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Berechne deinen Gewinn
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Nutze unseren Rechner, um deinen potenziellen Gewinn aus FBM-Arbitrage zu schätzen
            </p>
          </div>
          <ProfitCalculator />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Warum FBM-Arbitrage?
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Das FBM-System (Fulfillment by Merchant) ermöglicht es dir, auf Amazon ohne Lagerkosten zu verkaufen
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gradient-to-b from-gray-900 to-black border-gray-800 hover:border-gray-700 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10 group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">💰</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-blue-400 transition-colors duration-300">Hoher Gewinn</h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  Verdiene bis zu 5000 $+ pro Monat mit der Arbitrage von Waren zwischen Lieferanten und Amazon
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-b from-gray-900 to-black border-gray-800 hover:border-gray-700 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/10 group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-green-400 transition-colors duration-300">Schneller Start</h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  Beginne bereits nach 2-3 Wochen Training mit dem Verkauf. Keine Lagerhäuser und keine großen Investitionen
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-b from-gray-900 to-black border-gray-800 hover:border-gray-700 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10 group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-purple-400 transition-colors duration-300">Bewährtes System</h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  Nutze unsere proprietären Methoden und Werkzeuge, um profitable Produkte zu finden
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 px-4 bg-gradient-to-r from-blue-900/10 to-purple-900/10">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Ergebnisse unserer Schüler
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center group hover:scale-105 transition-all duration-300">
              <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2 group-hover:text-blue-300 transition-colors duration-300">$2.5M+</div>
              <div className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">Gesamtumsatz der Schüler</div>
            </div>
            <div className="text-center group hover:scale-105 transition-all duration-300">
              <div className="text-4xl md:text-5xl font-bold text-purple-400 mb-2 group-hover:text-purple-300 transition-colors duration-300">1,200+</div>
              <div className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">Erfolgreiche Schüler</div>
            </div>
            <div className="text-center group hover:scale-105 transition-all duration-300">
              <div className="text-4xl md:text-5xl font-bold text-green-400 mb-2 group-hover:text-green-300 transition-colors duration-300">85%</div>
              <div className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">Gewinn erzielt</div>
            </div>
            <div className="text-center group hover:scale-105 transition-all duration-300">
              <div className="text-4xl md:text-5xl font-bold text-yellow-400 mb-2 group-hover:text-yellow-300 transition-colors duration-300">30</div>
              <div className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">Tage bis zum ersten Gewinn</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Bereit anzufangen?
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Schließe dich Tausenden von erfolgreichen Verkäufern auf Amazon US an
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-12 py-4 rounded-full text-lg font-semibold shadow-2xl hover:scale-105 transition-all duration-300"
            >
              <Link href="/subscriptions">Tarif wählen</Link>
            </Button>
            <ContactForm
              triggerText="Eine Frage stellen"
              trigger={
                <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10 px-12 py-4 rounded-full text-lg hover:scale-105 transition-all duration-300">
                  Eine Frage stellen
                </Button>
              }
            />
          </div>
        </div>
      </section>
    </div>
  );
}
