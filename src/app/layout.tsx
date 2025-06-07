import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Crosshair from "@/components/Crosshair";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "FBM Арбитраж | Заработок на Amazon US",
  description: "Обучение онлайн арбитражу по системе FBM на американском рынке Amazon. Эксклюзивные курсы и инструменты для успешных продаж.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
        className={`${inter.variable} font-sans antialiased bg-black text-white`}
      >
        <Navigation />
        <Crosshair color="rgba(59, 130, 246, 0.6)" triggerSelector="[data-crosshair]" />
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
