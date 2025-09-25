"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MessageSquare } from "lucide-react";

interface ContactFormProps {
  trigger?: React.ReactNode;
  triggerText?: string;
}

export default function ContactForm({ trigger, triggerText = "Kontaktieren Sie uns" }: ContactFormProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    experience: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Hier wird die Logik für das Absenden des Formulars implementiert
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsOpen(false);
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        experience: ""
      });
    }, 2000);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {trigger || (
          <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
            {triggerText}
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px] bg-black/95 backdrop-blur-xl border border-gray-800 text-white">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Kontaktieren Sie uns
          </DialogTitle>
        </DialogHeader>

        {isSubmitted ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">✓</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Nachricht gesendet!</h3>
            <p className="text-gray-400">Wir werden uns in Kürze mit Ihnen in Verbindung setzen</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name" className="text-white">Name *</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  className="bg-gray-800 border-gray-700 text-white mt-1"
                  required
                />
              </div>
              <div>
                <Label htmlFor="email" className="text-white">E-Mail *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className="bg-gray-800 border-gray-700 text-white mt-1"
                  required
                />
              </div>
            </div>

            <div>
              <Label htmlFor="phone" className="text-white">Telefon</Label>
              <Input
                id="phone"
                value={formData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
                className="bg-gray-800 border-gray-700 text-white mt-1"
                placeholder="+49 (123) 456-78-90"
              />
            </div>

            <div>
              <Label htmlFor="experience" className="text-white">Erfahrung in der Arbitrage</Label>
              <Select onValueChange={(value) => handleInputChange("experience", value)}>
                <SelectTrigger className="bg-gray-800 border-gray-700 text-white mt-1">
                  <SelectValue placeholder="Wählen Sie Ihre Erfahrung" />
                </SelectTrigger>
                <SelectContent className="bg-gray-800 border-gray-700 text-white">
                  <SelectItem value="none">Anfänger (keine Erfahrung)</SelectItem>
                  <SelectItem value="beginner">Einsteiger (bis 3 Monate)</SelectItem>
                  <SelectItem value="intermediate">Mittel (3-12 Monate)</SelectItem>
                  <SelectItem value="advanced">Erfahren (1+ Jahr)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="subject" className="text-white">Betreff</Label>
              <Select onValueChange={(value) => handleInputChange("subject", value)}>
                <SelectTrigger className="bg-gray-800 border-gray-700 text-white mt-1">
                  <SelectValue placeholder="Wählen Sie ein Thema" />
                </SelectTrigger>
                <SelectContent className="bg-gray-800 border-gray-700 text-white">
                  <SelectItem value="subscription">Fragen zum Abonnement</SelectItem>
                  <SelectItem value="learning">Schulungen und Kurse</SelectItem>
                  <SelectItem value="technical">Technische Fragen</SelectItem>
                  <SelectItem value="partnership">Partnerschaft</SelectItem>
                  <SelectItem value="other">Sonstiges</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="message" className="text-white">Nachricht *</Label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) => handleInputChange("message", e.target.value)}
                className="bg-gray-800 border-gray-700 text-white mt-1 min-h-[100px]"
                placeholder="Erzählen Sie uns mehr über Ihre Frage..."
                required
              />
            </div>

            <div className="flex gap-3 pt-4">
              <Button
                type="submit"
                className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white"
              >
                Nachricht senden
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={() => setIsOpen(false)}
                className="border-gray-700 text-gray-300 hover:bg-gray-800"
              >
                Abbrechen
              </Button>
            </div>
          </form>
        )}

        {/* Kontaktinformationen */}
        <div className="border-t border-gray-800 pt-4 mt-6">
          <div className="flex flex-wrap gap-4 text-sm">
            <div className="flex items-center gap-2 text-gray-400">
              <Mail className="w-4 h-4" />
              <span>support@fbm-arbitrage.com</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <MessageSquare className="w-4 h-4" />
              <span>Telegram: @fbm_support</span>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
