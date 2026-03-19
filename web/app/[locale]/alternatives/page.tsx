import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { ArrowRightIcon, CheckIcon, CrossIcon } from "../components/FeatureIcons";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isZh = locale === "zh";

  return {
    title: isZh ? "同类产品对比" : "Similar Products",
    description: isZh
      ? "国内主流 AI Agent 平台对比"
      : "Overview of major AI Agent platforms in China",
  };
}

export default async function AlternativesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations("alternatives");
  const isZh = locale === "zh";

  const products = ["coze", "tongyi", "wenxin", "xinghuo", "zhipu"] as const;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 px-4 py-12 max-w-5xl mx-auto">
        {/* Hero */}
        <div className="text-center mb-12">
          <div className="w-16 h-16 rounded-2xl bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-purple-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="3" width="7" height="7" />
              <rect x="14" y="3" width="7" height="7" />
              <rect x="14" y="14" width="7" height="7" />
              <rect x="3" y="14" width="7" height="7" />
            </svg>
          </div>
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
            {t("title")}
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-4">
            {t("subtitle")}
          </p>
          <p className="text-sm text-slate-500 max-w-3xl mx-auto">
            {t("notice")}
          </p>
        </div>

        {/* Product Cards */}
        <div className="space-y-6 mb-12">
          {products.map((product) => (
            <div
              key={product}
              className="p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
            >
              {/* Product Header */}
              <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
                    {t(`products.${product}.name`)}
                  </h3>
                  <p className="text-sm text-slate-500">
                    {t(`products.${product}.company`)} • {t(`products.${product}.website`)}
                  </p>
                </div>
                <a
                  href={t(`products.${product}.url`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 text-slate-700 dark:text-slate-300 text-sm font-semibold transition-colors"
                >
                  {isZh ? "访问官网" : "Visit Website"}
                  <ArrowRightIcon className="w-4 h-4" />
                </a>
              </div>

              {/* Description */}
              <p className="text-slate-600 dark:text-slate-400 mb-4">
                {t(`products.${product}.description`)}
              </p>

              {/* Highlights */}
              <div className="flex flex-wrap gap-2 mb-4">
                {(t.raw(`products.${product}.highlights`) as string[]).map((highlight, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-700 text-sm text-slate-600 dark:text-slate-400"
                  >
                    {highlight}
                  </span>
                ))}
              </div>

              {/* Target */}
              <div className="p-3 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800">
                <p className="text-sm text-blue-700 dark:text-blue-400">
                  <span className="font-semibold">{isZh ? "适用人群" : "Best for"}: </span>
                  {t(`products.${product}.target`)}
                </p>
              </div>

              {/* Download */}
              <div className="mt-4 text-sm text-slate-500">
                {t(`products.${product}.download`)}
              </div>
            </div>
          ))}
        </div>

        {/* Why OpenClaw */}
        <div className="p-6 rounded-2xl bg-gradient-to-r from-orange-50 to-amber-50 dark:from-orange-900/20 dark:to-amber-900/20 border border-orange-200 dark:border-orange-800 mb-12">
          <h3 className="text-xl font-bold text-orange-800 dark:text-orange-300 mb-4">
            🚀 {t("whyOpenclaw.title")}
          </h3>
          <ul className="space-y-2">
            {(t.raw("whyOpenclaw.reasons") as string[]).map((reason, i) => (
              <li key={i} className="flex items-start gap-3 text-slate-700 dark:text-slate-300">
                <CheckIcon className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                {reason}
              </li>
            ))}
          </ul>
        </div>

        {/* Comparison Table */}
        <div className="mb-12">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 text-center">
            {t("comparison.title")}
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-slate-100 dark:bg-slate-800">
                  {(t.raw("comparison.headers") as string[]).map((header, i) => (
                    <th
                      key={i}
                      className="px-4 py-3 text-left text-sm font-semibold text-slate-700 dark:text-slate-300"
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                {(t.raw("comparison.rows") as string[][]).map((row, i) => (
                  <tr key={i} className="bg-white dark:bg-slate-800">
                    {row.map((cell, j) => (
                      <td
                        key={j}
                        className="px-4 py-3 text-sm text-slate-600 dark:text-slate-400"
                      >
                        {cell === "✅" ? (
                          <CheckIcon className="w-5 h-5 text-green-500 inline" />
                        ) : cell === "❌" ? (
                          <CrossIcon className="w-5 h-5 text-red-500 inline" />
                        ) : (
                          cell
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="/feishu"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-semibold transition-colors"
          >
            {isZh ? "配置飞书机器人" : "Configure Feishu Bot"}
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
