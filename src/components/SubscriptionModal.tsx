"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Check, CreditCard, Lock } from "lucide-react";

interface SubscriptionModalProps {
  planName: string;
  planPrice: string;
  planPeriod: string;
  planFeatures: string[];
  children: React.ReactNode;
}

export default function SubscriptionModal({
  planName,
  planPrice,
  planPeriod,
  planFeatures,
  children
}: SubscriptionModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    name: "",
    phone: "",
    country: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
    cardHolder: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    // Симуляция обработки платежа
    await new Promise(resolve => setTimeout(resolve, 2000));

    setIsProcessing(false);
    setIsSuccess(true);

    setTimeout(() => {
      setIsOpen(false);
      setCurrentStep(1);
      setIsSuccess(false);
      setFormData({
        email: "",
        name: "",
        phone: "",
        country: "",
        cardNumber: "",
        expiry: "",
        cvv: "",
        cardHolder: ""
      });
    }, 3000);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const renderStep1 = () => (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-white mb-4">Личная информация</h3>

      <div>
        <Label htmlFor="email" className="text-white">Email *</Label>
        <Input
          id="email"
          type="email"
          value={formData.email}
          onChange={(e) => handleInputChange("email", e.target.value)}
          className="bg-gray-800 border-gray-700 text-white mt-1"
          placeholder="your@email.com"
          required
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="name" className="text-white">Имя *</Label>
          <Input
            id="name"
            value={formData.name}
            onChange={(e) => handleInputChange("name", e.target.value)}
            className="bg-gray-800 border-gray-700 text-white mt-1"
            required
          />
        </div>
        <div>
          <Label htmlFor="phone" className="text-white">Телефон</Label>
          <Input
            id="phone"
            value={formData.phone}
            onChange={(e) => handleInputChange("phone", e.target.value)}
            className="bg-gray-800 border-gray-700 text-white mt-1"
            placeholder="+7 (999) 123-45-67"
          />
        </div>
      </div>

      <div>
        <Label htmlFor="country" className="text-white">Страна</Label>
        <Select onValueChange={(value) => handleInputChange("country", value)}>
          <SelectTrigger className="bg-gray-800 border-gray-700 text-white mt-1">
            <SelectValue placeholder="Выберите страну" />
          </SelectTrigger>
          <SelectContent className="bg-gray-800 border-gray-700 text-white">
            <SelectItem value="ru">Россия</SelectItem>
            <SelectItem value="by">Беларусь</SelectItem>
            <SelectItem value="kz">Казахстан</SelectItem>
            <SelectItem value="ua">Украина</SelectItem>
            <SelectItem value="other">Другая</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Button
        onClick={() => setCurrentStep(2)}
        className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white"
        disabled={!formData.email || !formData.name}
      >
        Продолжить к оплате
      </Button>
    </div>
  );

  const renderStep2 = () => (
    <div className="space-y-4">
      <div className="flex items-center gap-2 mb-4">
        <CreditCard className="w-5 h-5 text-blue-400" />
        <h3 className="text-lg font-semibold text-white">Данные карты</h3>
        <Lock className="w-4 h-4 text-green-400" />
      </div>

      <div>
        <Label htmlFor="cardHolder" className="text-white">Имя держателя карты *</Label>
        <Input
          id="cardHolder"
          value={formData.cardHolder}
          onChange={(e) => handleInputChange("cardHolder", e.target.value)}
          className="bg-gray-800 border-gray-700 text-white mt-1"
          placeholder="IVAN PETROV"
          required
        />
      </div>

      <div>
        <Label htmlFor="cardNumber" className="text-white">Номер карты *</Label>
        <Input
          id="cardNumber"
          value={formData.cardNumber}
          onChange={(e) => handleInputChange("cardNumber", e.target.value)}
          className="bg-gray-800 border-gray-700 text-white mt-1"
          placeholder="1234 5678 9012 3456"
          maxLength={19}
          required
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="expiry" className="text-white">Срок действия *</Label>
          <Input
            id="expiry"
            value={formData.expiry}
            onChange={(e) => handleInputChange("expiry", e.target.value)}
            className="bg-gray-800 border-gray-700 text-white mt-1"
            placeholder="MM/YY"
            maxLength={5}
            required
          />
        </div>
        <div>
          <Label htmlFor="cvv" className="text-white">CVV *</Label>
          <Input
            id="cvv"
            value={formData.cvv}
            onChange={(e) => handleInputChange("cvv", e.target.value)}
            className="bg-gray-800 border-gray-700 text-white mt-1"
            placeholder="123"
            maxLength={3}
            required
          />
        </div>
      </div>

      <div className="bg-gray-800/50 rounded-lg p-3 text-sm text-gray-400">
        <div className="flex items-center gap-2 mb-1">
          <Lock className="w-4 h-4 text-green-400" />
          <span className="text-green-400">Безопасная оплата</span>
        </div>
        <p>Ваши данные защищены SSL-шифрованием</p>
      </div>

      <div className="flex gap-3">
        <Button
          onClick={() => setCurrentStep(1)}
          variant="outline"
          className="flex-1 border-gray-700 text-gray-300 hover:bg-gray-800"
        >
          Назад
        </Button>
        <Button
          onClick={handleSubmit}
          className="flex-1 bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white"
          disabled={!formData.cardNumber || !formData.expiry || !formData.cvv || !formData.cardHolder || isProcessing}
        >
          {isProcessing ? "Обработка..." : `Оплатить ${planPrice}${planPeriod}`}
        </Button>
      </div>
    </div>
  );

  const renderSuccess = () => (
    <div className="text-center py-8">
      <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
        <Check className="w-10 h-10 text-white" />
      </div>
      <h3 className="text-2xl font-bold text-white mb-2">Подписка активирована!</h3>
      <p className="text-gray-400 mb-4">
        Добро пожаловать в тариф <span className="text-blue-400 font-semibold">{planName}</span>
      </p>
      <Badge className="bg-green-500/20 text-green-300 border-green-500/30">
        Доступ открыт
      </Badge>
    </div>
  );

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] bg-black/95 backdrop-blur-xl border border-gray-800 text-white max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Оформление подписки
          </DialogTitle>
        </DialogHeader>

        {isSuccess ? renderSuccess() : (
          <div className="space-y-6">
            {/* План подписки */}
            <Card className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 border-blue-500/30">
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-lg font-bold text-white">{planName}</h4>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-white">{planPrice}</div>
                    <div className="text-sm text-gray-400">{planPeriod}</div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {planFeatures.slice(0, 4).map((feature, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm">
                      <Check className="w-3 h-3 text-green-400" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Шаги */}
            <div className="flex items-center gap-4 mb-6">
              <div className={`flex items-center gap-2 ${currentStep >= 1 ? 'text-blue-400' : 'text-gray-500'}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${currentStep >= 1 ? 'bg-blue-500' : 'bg-gray-700'}`}>
                  1
                </div>
                <span className="text-sm">Данные</span>
              </div>
              <div className={`h-px flex-1 ${currentStep >= 2 ? 'bg-blue-500' : 'bg-gray-700'}`} />
              <div className={`flex items-center gap-2 ${currentStep >= 2 ? 'text-blue-400' : 'text-gray-500'}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${currentStep >= 2 ? 'bg-blue-500' : 'bg-gray-700'}`}>
                  2
                </div>
                <span className="text-sm">Оплата</span>
              </div>
            </div>

            {/* Форма */}
            <form onSubmit={handleSubmit}>
              {currentStep === 1 ? renderStep1() : renderStep2()}
            </form>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
