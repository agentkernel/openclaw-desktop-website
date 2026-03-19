"use client";

import { useTranslations } from "next-intl";

export function Footer() {
  const tNav = useTranslations("nav");
  const tFooter = useTranslations("footer");

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Main Footer Links */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-slate-500 mb-6">
          <a
            href="/"
            className="hover:text-orange-600 transition"
          >
            {tNav("home")}
          </a>
          <a
            href="/feishu"
            className="hover:text-orange-600 transition"
          >
            {tNav("feishu")}
          </a>
          <a
            href="/free-api"
            className="hover:text-orange-600 transition"
          >
            {tNav("freeApi")}
          </a>
          <a
            href="/alternatives"
            className="hover:text-orange-600 transition"
          >
            {tNav("alternatives")}
          </a>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-200 dark:border-slate-800 pt-6 mb-6" />

        {/* GitHub Links */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-slate-500 mb-4">
          <a
            href="https://github.com/agentkernel/openclaw-desktop"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-600 transition"
          >
            {tFooter("github")}
          </a>
          <a
            href="https://github.com/agentkernel/openclaw-desktop/releases"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-600 transition"
          >
            {tFooter("releases")}
          </a>
          <a
            href="https://github.com/openclaw/openclaw"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-600 transition"
          >
            OpenClaw
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-slate-400">
          <span>{tFooter("license")}</span>
        </div>
      </div>
    </footer>
  );
}
