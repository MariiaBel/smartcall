import type { Metadata } from "next";
import "./globals.css";
import { sora } from './ui/fonts';
import Header from "./ui/header/header";
import Footer from "./ui/footer/footer";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"
import { SITE_URL } from "./constants/site";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Мария — фронтенд-разработчик и ментор | SmartCall",
    template: "%s | SmartCall",
  },
  description:
    "Практикующий фронтенд-разработчик с 2012 года: React, Vue, Angular, JavaScript, HTML и CSS. Менторинг, помощь с рабочими задачами и обучение вёрстке.",
  keywords: [
    "фронтенд-разработчик",
    "ментор",
    "вёрстка",
    "JavaScript",
    "React",
    "Vue",
    "Angular",
    "HTML Academy",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: SITE_URL,
    siteName: "SmartCall",
    title: "Мария — фронтенд-разработчик и ментор",
    description:
      "Портфолио и услуги менторинга: фронтенд-разработка, вёрстка и помощь с рабочими задачами.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Мария — фронтенд-разработчик и ментор",
    description:
      "Портфолио и услуги менторинга: фронтенд-разработка, вёрстка и помощь с рабочими задачами.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" suppressHydrationWarning className={cn("font-sans", geist.variable)}>
      <body className={`${sora.className} page`} suppressHydrationWarning>
        <a className="skip-link" href="#main-content">
          Перейти к содержимому
        </a>
        <Header />
        <main id="main-content" className="main" tabIndex={-1}>
          {children}
        </main>
        <Footer />

        <SpeedInsights/>
        <Analytics/>
      </body>
    </html>
  );
}
