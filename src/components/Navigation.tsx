"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Crown } from "lucide-react";

const navigationItems = [
  { href: "/", label: "Главная" },
  { href: "/subscriptions", label: "Подписки" },
  { href: "/lessons/lesson-1", label: "Урок 1" },
  { href: "/lessons/lesson-2", label: "Урок 2" },
  { href: "/sales", label: "Продажи" },
];

export default function Navigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [hasVipAccess, setHasVipAccess] = useState(false);

  useEffect(() => {
    const vipAccess = localStorage.getItem("vip_access");
    setHasVipAccess(vipAccess === "true");
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-white/10 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="font-bold text-xl bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent hover:scale-105 transition-transform duration-200"
          >
            FBM Арбитраж
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg relative overflow-hidden group",
                  pathname === item.href
                    ? "bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-white border border-blue-500/30 shadow-lg shadow-blue-500/25"
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                )}
              >
                <span className="relative z-10">{item.label}</span>
                {pathname !== item.href && (
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                )}
              </Link>
            ))}

            {/* VIP Access Link */}
            {hasVipAccess && (
              <Link
                href="/vip"
                className={cn(
                  "px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg relative overflow-hidden group",
                  pathname === "/vip"
                    ? "bg-gradient-to-r from-yellow-500/20 to-orange-500/20 text-yellow-300 border border-yellow-500/30 shadow-lg shadow-yellow-500/25"
                    : "text-yellow-400 hover:text-yellow-300 hover:bg-yellow-500/5"
                )}
              >
                <span className="relative z-10 flex items-center gap-1">
                  <Crown className="w-4 h-4" />
                  VIP
                </span>
                {pathname !== "/vip" && (
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                )}
              </Link>
            )}
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden md:block">
            <Button asChild className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
              <Link href="/subscriptions">Начать</Link>
            </Button>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white hover:bg-white/10 transition-colors duration-200"
                >
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Открыть меню</span>
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-[280px] bg-black/95 backdrop-blur-xl border-l border-white/10 text-white"
              >
                <div className="flex flex-col h-full">
                  {/* Mobile Logo */}
                  <div className="flex items-center justify-between pb-6 border-b border-white/10">
                    <Link
                      href="/"
                      className="font-bold text-xl bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
                      onClick={() => setIsOpen(false)}
                    >
                      FBM Арбитраж
                    </Link>
                  </div>

                  {/* Mobile Navigation Links */}
                  <div className="flex flex-col space-y-2 py-6 flex-1">
                    {navigationItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className={cn(
                          "px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 border",
                          pathname === item.href
                            ? "bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-white border-blue-500/30 shadow-lg"
                            : "text-gray-400 hover:text-white hover:bg-white/5 border-transparent hover:border-white/10"
                        )}
                      >
                        {item.label}
                      </Link>
                    ))}

                    {/* Mobile VIP Access Link */}
                    {hasVipAccess && (
                      <Link
                        href="/vip"
                        onClick={() => setIsOpen(false)}
                        className={cn(
                          "px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 border flex items-center gap-2",
                          pathname === "/vip"
                            ? "bg-gradient-to-r from-yellow-500/20 to-orange-500/20 text-yellow-300 border-yellow-500/30 shadow-lg"
                            : "text-yellow-400 hover:text-yellow-300 hover:bg-yellow-500/5 border-transparent hover:border-yellow-500/10"
                        )}
                      >
                        <Crown className="w-4 h-4" />
                        VIP Зона
                      </Link>
                    )}
                  </div>

                  {/* Mobile CTA Button */}
                  <div className="pt-6 border-t border-white/10">
                    <Button
                      asChild
                      className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white py-3 rounded-full font-medium transition-all duration-300 shadow-lg"
                    >
                      <Link href="/subscriptions" onClick={() => setIsOpen(false)}>
                        Начать обучение
                      </Link>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
