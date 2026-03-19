import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { ArrowRightIcon, CheckIcon } from "../components/FeatureIcons";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isZh = locale === "zh";

  return {
    title: isZh ? "飞书配置指南" : "Feishu Setup Guide",
    description: isZh
      ? "在飞书上配置 OpenClaw AI 助手的完整步骤指南"
      : "Complete guide to setting up OpenClaw AI assistant on Feishu",
  };
}

export default async function FeishuPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations("feishu");
  const isZh = locale === "zh";

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 px-4 py-12 max-w-4xl mx-auto">
        {/* Hero */}
        <div className="text-center mb-12">
          <div className="w-16 h-16 rounded-2xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.503 0h-.944c-.323 0-.636.12-.861.333l-5.278 5.085a1.16 1.16 0 0 0 0 1.664l5.278 5.085c.225.213.538.333.861.333h.944v5.5a.75.75 0 0 0 1.5 0V.75a.75.75 0 0 0-1.5 0v5.5h-.944V.75a.75.75 0 0 0-1.5 0v5.5h-.944V.75a.75.75 0 0 0-1.5 0v5.5h-.944V.75a.75.75 0 0 0-1.5 0v5.5h-.944V.75a.75.75 0 0 0-1.5 0v5.5z" />
            </svg>
          </div>
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
            {t("title")}
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            {t("subtitle")}
          </p>
        </div>

        {/* Notice */}
        <div className="p-4 rounded-xl bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 mb-8">
          <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
            {t("notice.title")}
          </h3>
          <p className="text-sm text-blue-700 dark:text-blue-400">
            {t("notice.content")}
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-6 mb-12">
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
            >
              <div className="flex items-start gap-4">
                <span className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-500 font-bold flex items-center justify-center">
                  {i + 1}
                </span>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg text-slate-900 dark:text-white mb-2">
                    {t(`steps.${i}.title`)}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-3">
                    {t(`steps.${i}.desc`)}
                  </p>

                  {/* Step 1 details */}
                  {i === 0 && (
                    <ul className="space-y-1 text-sm text-slate-600 dark:text-slate-400">
                      {(t.raw(`steps.${i}.details`) as string[]).map((detail, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <CheckIcon className="w-4 h-4 text-green-500 flex-shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Step 2 keys */}
                  {i === 1 && (
                    <div className="flex flex-wrap gap-2">
                      {(t.raw(`steps.${i}.keys`) as string[]).map((key, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-700 text-sm text-slate-700 dark:text-slate-300 font-mono"
                        >
                          {key}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Step 3 permissions */}
                  {i === 2 && (
                    <ul className="space-y-1 text-sm text-slate-600 dark:text-slate-400">
                      {(t.raw(`steps.${i}.permissions`) as string[]).map((perm, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <CheckIcon className="w-4 h-4 text-green-500 flex-shrink-0" />
                          {perm}
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Step 4 details */}
                  {i === 3 && (
                    <ul className="space-y-1 text-sm text-slate-600 dark:text-slate-400">
                      {(t.raw(`steps.${i}.details`) as string[]).map((detail, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <CheckIcon className="w-4 h-4 text-green-500 flex-shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Step 5 tips */}
                  {i === 4 && (
                    <div className="p-3 rounded-lg bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800">
                      <p className="text-sm text-amber-700 dark:text-amber-400">
                        💡 {t(`steps.${i}.tips`)}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Important Note */}
        <div className="p-4 rounded-xl bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 mb-8">
          <p className="text-red-800 dark:text-red-300 font-medium">
            ⚠️ {t("steps.5.title")} - {t("steps.5.desc")}
          </p>
        </div>

        {/* Troubleshooting */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
            {t("troubleshoot.title")}
          </h2>
          <div className="space-y-4">
            {(t.raw("troubleshoot.items") as { q: string; a: string }[]).map((item, i) => (
              <details
                key={i}
                className="group p-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
              >
                <summary className="flex items-center justify-between cursor-pointer list-none font-semibold text-slate-900 dark:text-white">
                  <span>{item.q}</span>
                  <svg className="w-5 h-5 text-slate-500 transition-transform group-open:rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </summary>
                <p className="mt-3 text-slate-600 dark:text-slate-400">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="/free-api"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-semibold transition-colors"
          >
            {isZh ? "获取免费 API 密钥" : "Get Free API Key"}
            <ArrowRightIcon className="w-4 h-4" />
          </a>
          <a
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-slate-300 dark:border-slate-600 hover:border-orange-500 text-slate-700 dark:text-slate-300 font-semibold transition-colors"
          >
            {isZh ? "返回首页" : "Back to Home"}
          </a>
        </div>
      </main>

      <Footer />
    </div>
  );
}
