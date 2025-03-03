import type { Metadata } from "next";
import "./globals.css";
import { sora } from './ui/fonts';
import Header from "./ui/header/header";
import Footer from "./ui/footer/footer";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"

export const metadata: Metadata = {
  title: "Фронтенд разработка и менторинг в ИТ",
  description: "Разрабатываю сайты с 2012 года. Менторю студентов, помогаю с рабочими задачами и просто круто пишу код.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${sora.className} page`}>
        <Header></Header>
        <main className='main'>
          {children}
        </main>
        <Footer></Footer>

        <SpeedInsights/>
        <Analytics/>
      </body>
    </html>
  );
}
