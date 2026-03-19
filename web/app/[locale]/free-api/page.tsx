import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { ArrowRightIcon, CheckIcon, KeyIcon } from "../components/FeatureIcons";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isZh = locale === "zh";

  return {
    title: isZh ? "免费 API 汇总" : "Free API Summary",
    description: isZh
      ? "国内主流 AI 大模型免费额度汇总，申请简单"
      : "Summary of free quotas from major Chinese AI providers",
  };
}

export default async function FreeApiPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations("freeApi");
  const isZh = locale === "zh";

  const providers = ["baidu", "ali", "xunfei", "zhipu"] as const;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 px-4 py-12 max-w-5xl mx-auto">
        {/* Hero */}
        <div className="text-center mb-12">
          <div className="w-16 h-16 rounded-2xl bg-green-100 dark:bg-green-900/30 flex items-center justify-center mx-auto mb-6">
            <KeyIcon className="w-8 h-8 text-green-600" />
          </div>
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
            {t("title")}
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-4">
            {t("subtitle")}
          </p>
          <p className="text-sm text-slate-500">
            {t("notice")}
          </p>
        </div>

        {/* Provider Cards */}
        <div className="space-y-6 mb-12">
          {providers.map((provider) => (
            <div
              key={provider}
              className="p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
            >
              {/* Provider Header */}
              <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
                    {t(`providers.${provider}.name`)}
                  </h3>
                  <p className="text-sm text-slate-500">
                    {t(`providers.${provider}.provider`)} • {t(`providers.${provider}.website`)}
                  </p>
                </div>
                <a
                  href={t(`providers.${provider}.registerUrl`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-orange-600 hover:bg-orange-700 text-white text-sm font-semibold transition-colors"
                >
                  {isZh ? "立即申请" : "Apply Now"}
                  <ArrowRightIcon className="w-4 h-4" />
                </a>
              </div>

              {/* Free Tier */}
              <div className="p-4 rounded-xl bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 mb-6">
                <h4 className="font-semibold text-green-800 dark:text-green-300 mb-2">
                  {isZh ? "免费额度" : "Free Quota"}
                </h4>
                <p className="text-sm text-green-700 dark:text-green-400 whitespace-pre-line">
                  {t(`providers.${provider}.freeTier`)}
                </p>
              </div>

              {/* Models */}
              <div className="mb-6">
                <h4 className="font-semibold text-slate-700 dark:text-slate-300 mb-2">
                  {isZh ? "支持的模型" : "Supported Models"}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {(t.raw(`providers.${provider}.models`) as string[]).map((model, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-700 text-sm text-slate-700 dark:text-slate-300"
                    >
                      {model}
                    </span>
                  ))}
                </div>
              </div>

              {/* How to get key */}
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900">
                <h4 className="font-semibold text-slate-700 dark:text-slate-300 mb-3">
                  {t(`providers.${provider}.howTo.title`)}
                </h4>
                <ol className="space-y-2">
                  {(t.raw(`providers.${provider}.howTo.steps`) as string[]).map((step, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-400">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-400 text-xs font-bold flex items-center justify-center">
                        {i + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>

              {/* Endpoint */}
              <div className="mt-4 p-3 rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-700">
                <p className="text-xs text-slate-500 mb-1">{isZh ? "API 端点" : "Endpoint"}</p>
                <code className="text-sm text-slate-700 dark:text-slate-300 break-all">
                  {t(`providers.${provider}.endpoint`)}
                </code>
              </div>
            </div>
          ))}
        </div>

        {/* Tips */}
        <div className="p-6 rounded-2xl bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800">
          <h3 className="font-semibold text-amber-800 dark:text-amber-300 mb-3">
            💡 {t("tips.title")}
          </h3>
          <ul className="space-y-2 text-sm text-amber-700 dark:text-amber-400">
            <li className="flex items-start gap-2">
              <CheckIcon className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
              {t("tips.quota")}
            </li>
            <li className="flex items-start gap-2">
              <CheckIcon className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
              {t("tips.cost")}
            </li>
            <li className="flex items-start gap-2">
              <CheckIcon className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
              {t("tips.key")}
            </li>
          </ul>
        </div>

        {/* Navigation */}
        <div className="flex flex-wrap gap-4 justify-center mt-8">
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
