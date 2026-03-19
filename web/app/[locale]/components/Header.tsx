"use client";

import { useState, useEffect } from "react";
import { useTranslations, useLocale } from "next-intl";
import { Link, usePathname } from "@/routing";

export function Header() {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const locale = useLocale();
  const switchLocale = locale === "en" ? "zh" : "en";
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const navLinks = [
    { href: `/`, label: t("home") },
    { href: `/feishu`, label: t("feishu") },
    { href: `/free-api`, label: t("freeApi") },
    { href: `/alternatives`, label: t("alternatives") },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "border-b border-slate-200/80 dark:border-slate-800/80 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-sm"
          : "border-b border-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="font-bold text-xl text-orange-600 hover:text-orange-700 transition-colors"
        >
          <span className="flex items-center gap-2">
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5z" />
              <path d="M2 17l10 5 10-5" />
              <path d="M2 12l10 5 10-5" />
            </svg>
            OpenClaw
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6" aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-orange-600 dark:hover:text-orange-500 transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href={pathname}
            locale={switchLocale}
            className="text-sm font-medium px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-orange-100 dark:hover:bg-orange-900/30 hover:text-orange-600 dark:hover:text-orange-400 transition-all"
          >
            {t("lang")}
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button
          type="button"
          className="md:hidden p-2 -mr-2 text-slate-600 dark:text-slate-400 hover:text-orange-600 dark:hover:text-orange-500 transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        id="mobile-menu"
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="px-4 pb-4 pt-2 space-y-1 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-t border-slate-200 dark:border-slate-800" aria-label="Mobile navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="block py-3 px-3 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href={pathname}
            locale={switchLocale}
            onClick={() => setIsMenuOpen(false)}
            className="flex items-center justify-between py-3 px-3 rounded-lg text-orange-600 dark:text-orange-500 hover:bg-orange-50 dark:hover:bg-orange-900/20 transition-colors"
          >
            <span>{t("lang")}</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </Link>
        </nav>
      </div>
    </header>
  );
}
