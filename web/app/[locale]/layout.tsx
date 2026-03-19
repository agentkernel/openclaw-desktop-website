import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/routing";
import { SkipToContent } from "./components/SkipToContent";
import { ScrollToTop } from "./components/ScrollToTop";

export const metadata: Metadata = {
  title: {
    default: "OpenClaw Desktop – One-Click Windows Installer",
    template: "%s | OpenClaw Desktop",
  },
  description:
    "Official-style desktop installer for OpenClaw AI agents. Run, update, and manage OpenClaw locally with ease.",
  keywords: ["OpenClaw", "AI agents", "Windows installer", "desktop app", "electron"],
  authors: [{ name: "OpenClaw Team" }],
  creator: "OpenClaw",
  publisher: "OpenClaw",
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: "zh_CN",
    siteName: "OpenClaw Desktop",
    title: "OpenClaw Desktop – One-Click Windows Installer",
    description:
      "Official-style desktop installer for OpenClaw AI agents. Run, update, and manage OpenClaw locally with ease.",
  },
  twitter: {
    card: "summary_large_image",
    title: "OpenClaw Desktop",
    description:
      "One-Click Windows Installer for OpenClaw AI Agents",
  },
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!routing.locales.includes(locale as "en" | "zh")) notFound();
  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body>
        <NextIntlClientProvider messages={messages}>
          <SkipToContent />
          <div
            id="main-content"
            className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 text-slate-900 dark:text-slate-100"
          >
            {children}
          </div>
          <ScrollToTop />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
