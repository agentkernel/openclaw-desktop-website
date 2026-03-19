import { getTranslations } from "next-intl/server";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import {
  DownloadIcon,
  ArrowRightIcon,
  CheckIcon,
  CpuIcon,
  GlobeIcon,
  BotIcon,
  LightningIcon,
  ShieldCheckIcon,
  ComputerIcon,
  NetworkIcon,
  KeyIcon,
  UserCheckIcon,
} from "./components/FeatureIcons";

const RELEASE_URL =
  "https://github.com/agentkernel/openclaw-desktop/releases/latest";
const INSTALLER_NAME = "OpenClaw-Setup-0.1.0.exe";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations();
  const isZh = locale === "zh";

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1" id="main-content">
        {/* Hero Section */}
        <section className="relative px-4 py-16 md:py-24 lg:py-32 overflow-hidden bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-400 rounded-full mix-blend-multiply filter blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-300 rounded-full mix-blend-multiply filter blur-3xl" />
          </div>

          <div className="max-w-4xl mx-auto text-center relative">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400 text-sm font-medium mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
              </span>
              {t("hero.badge")}
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 dark:text-white mb-6">
              {t("hero.title")}
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 mb-4">
              {t("hero.subtitle")}
            </p>
            <p className="text-base text-slate-500 dark:text-slate-500 max-w-2xl mx-auto mb-8">
              {t("hero.description")}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a
                href={`${RELEASE_URL}/download/${INSTALLER_NAME}`}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-semibold px-8 py-4 text-lg transition-all shadow-lg shadow-orange-600/25 btn-press hover:shadow-xl hover:shadow-orange-600/30"
              >
                <DownloadIcon className="w-5 h-5" />
                {t("hero.downloadBtn")}
              </a>
              <a
                href="/feishu"
                className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-slate-300 dark:border-slate-600 hover:border-orange-500 dark:hover:border-orange-500 text-slate-700 dark:text-slate-300 font-semibold px-8 py-4 text-lg transition-all"
              >
                {isZh ? "飞书配置指南" : "Feishu Setup"}
                <ArrowRightIcon className="w-4 h-4" />
              </a>
            </div>

            <p className="text-sm text-slate-500">
              {t("hero.requirements")}
            </p>
          </div>
        </section>

        {/* What is OpenClaw */}
        <section className="px-4 py-16 md:py-24 bg-white dark:bg-slate-900">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                {t("whatIs.title")}
              </h2>
              <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                {t("whatIs.desc")}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-4">
                  <BotIcon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
                  {t("whatIs.abilities.chat")}
                </h3>
              </div>
              <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                <div className="w-12 h-12 rounded-xl bg-green-100 dark:bg-green-900/30 flex items-center justify-center mb-4">
                  <LightningIcon className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
                  {t("whatIs.abilities.automation")}
                </h3>
              </div>
              <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                <div className="w-12 h-12 rounded-xl bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mb-4">
                  <GlobeIcon className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
                  {t("whatIs.abilities.integration")}
                </h3>
              </div>
              <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                <div className="w-12 h-12 rounded-xl bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center mb-4">
                  <ShieldCheckIcon className="w-6 h-6 text-amber-600" />
                </div>
                <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
                  {t("whatIs.abilities.memory")}
                </h3>
              </div>
            </div>

            {/* Analogy */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-orange-50 to-amber-50 dark:from-orange-900/20 dark:to-amber-900/20 border border-orange-200 dark:border-orange-800">
              <h3 className="font-semibold text-lg text-orange-800 dark:text-orange-300 mb-2">
                💡 {t("whatIs.analogy.title")}
              </h3>
              <p className="text-slate-700 dark:text-slate-300 mb-3">
                {t("whatIs.analogy.content")}
              </p>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                {t("whatIs.analogy.example")}
              </p>
            </div>
          </div>
        </section>

        {/* What Can It Do */}
        <section className="px-4 py-16 md:py-24 bg-slate-50 dark:bg-slate-900/50">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                {t("whatCan.title")}
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-4">
                  <GlobeIcon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-lg text-slate-900 dark:text-white mb-2">
                  {t("whatCan.channels.title")}
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  {t("whatCan.channels.desc")}
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                <div className="w-12 h-12 rounded-xl bg-green-100 dark:bg-green-900/30 flex items-center justify-center mb-4">
                  <CpuIcon className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="font-semibold text-lg text-slate-900 dark:text-white mb-2">
                  {t("whatCan.aiModels.title")}
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  {t("whatCan.aiModels.desc")}
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                <div className="w-12 h-12 rounded-xl bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mb-4">
                  <LightningIcon className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="font-semibold text-lg text-slate-900 dark:text-white mb-2">
                  {t("whatCan.automation.title")}
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  {t("whatCan.automation.desc")}
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                <div className="w-12 h-12 rounded-xl bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center mb-4">
                  <ShieldCheckIcon className="w-6 h-6 text-amber-600" />
                </div>
                <h3 className="font-semibold text-lg text-slate-900 dark:text-white mb-2">
                  {t("whatCan.skills.title")}
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  {t("whatCan.skills.desc")}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Desktop */}
        <section className="px-4 py-16 md:py-24 bg-white dark:bg-slate-900">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                {t("desktop.title")}
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* CLI Problems */}
              <div className="p-6 rounded-2xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                <h3 className="font-semibold text-lg text-red-600 dark:text-red-400 mb-4">
                  ❌ {t("desktop.compare.cli.title")}
                </h3>
                <ul className="space-y-3">
                  {(t.raw("desktop.compare.cli.problems") as string[]).map((problem, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-600 dark:text-slate-400">
                      <span className="text-red-500 mt-1">×</span>
                      {problem}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Desktop Benefits */}
              <div className="p-6 rounded-2xl bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800">
                <h3 className="font-semibold text-lg text-green-700 dark:text-green-400 mb-4">
                  ✅ {t("desktop.compare.desktop.title")}
                </h3>
                <ul className="space-y-3">
                  {(t.raw("desktop.compare.desktop.benefits") as string[]).map((benefit, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-700 dark:text-slate-300">
                      <CheckIcon className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Desktop Features */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {[
                t("desktop.features.gui"),
                t("desktop.features.wizard"),
                t("desktop.features.tray"),
                t("desktop.features.shortcuts"),
                t("desktop.features.uninstall"),
              ].map((feature, i) => (
                <div key={i} className="text-center p-4 rounded-xl bg-slate-50 dark:bg-slate-800">
                  <CheckIcon className="w-6 h-6 text-green-500 mx-auto mb-2" />
                  <p className="text-sm text-slate-700 dark:text-slate-300">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Requirements */}
        <section className="px-4 py-16 md:py-24 bg-slate-50 dark:bg-slate-900/50">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                {t("requirements.title")}
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-center">
                <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mx-auto mb-4">
                  <ComputerIcon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-slate-900 dark:text-white mb-1">
                  {t("requirements.os.title")}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">
                  {t("requirements.os.value")}
                </p>
                <p className="text-xs text-slate-500">
                  {t("requirements.os.note")}
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-center">
                <div className="w-12 h-12 rounded-xl bg-green-100 dark:bg-green-900/30 flex items-center justify-center mx-auto mb-4">
                  <NetworkIcon className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="font-semibold text-slate-900 dark:text-white mb-1">
                  {t("requirements.disk.title")}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">
                  {t("requirements.disk.value")}
                </p>
                <p className="text-xs text-slate-500">
                  {t("requirements.disk.note")}
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-center">
                <div className="w-12 h-12 rounded-xl bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mx-auto mb-4">
                  <GlobeIcon className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="font-semibold text-slate-900 dark:text-white mb-1">
                  {t("requirements.network.title")}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">
                  {t("requirements.network.value")}
                </p>
                <p className="text-xs text-slate-500">
                  {t("requirements.network.note")}
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-center">
                <div className="w-12 h-12 rounded-xl bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center mx-auto mb-4">
                  <UserCheckIcon className="w-6 h-6 text-amber-600" />
                </div>
                <h3 className="font-semibold text-slate-900 dark:text-white mb-1">
                  {t("requirements.admin.title")}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">
                  {t("requirements.admin.value")}
                </p>
                <p className="text-xs text-slate-500">
                  {t("requirements.admin.note")}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Installation Guide */}
        <section className="px-4 py-16 md:py-24 bg-white dark:bg-slate-900">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                {t("install.title")}
              </h2>
            </div>

            <div className="space-y-6">
              {([0, 1, 2, 3]).map((i) => (
                <div key={i} className="flex gap-4 p-6 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                  <span className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-500 font-bold flex items-center justify-center">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-white mb-1">
                      {t(`install.steps.${i}.title`)}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400">
                      {t(`install.steps.${i}.desc`)}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Tips */}
            <div className="mt-8 p-4 rounded-xl bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800">
              <h4 className="font-semibold text-amber-800 dark:text-amber-300 mb-2">
                💡 {t("install.tips.title")}
              </h4>
              <ul className="space-y-1 text-sm text-amber-700 dark:text-amber-400">
                <li>• {t("install.tips.apiKey")}</li>
                <li>• {t("install.tips.feishu")}</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Quick Start Links */}
        <section className="px-4 py-16 md:py-24 bg-slate-50 dark:bg-slate-900/50">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                {t("quickStart.title")}
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <a
                href="/feishu"
                className="p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-orange-500 dark:hover:border-orange-500 transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.503 0h-.944c-.323 0-.636.12-.861.333l-5.278 5.085a1.16 1.16 0 0 0 0 1.664l5.278 5.085c.225.213.538.333.861.333h.944v5.5a.75.75 0 0 0 1.5 0V.75a.75.75 0 0 0-1.5 0v5.5h-.944V.75a.75.75 0 0 0-1.5 0v5.5h-.944V.75a.75.75 0 0 0-1.5 0v5.5h-.944V.75a.75.75 0 0 0-1.5 0v5.5h-.944V.75a.75.75 0 0 0-1.5 0v5.5z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-slate-900 dark:text-white mb-1 group-hover:text-orange-600 transition-colors">
                  {t("quickStart.feishu.title")}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                  {t("quickStart.feishu.desc")}
                </p>
                <span className="inline-flex items-center gap-1 text-sm text-orange-600 font-medium group-hover:gap-2 transition-all">
                  {t("quickStart.feishu.link")}
                  <ArrowRightIcon className="w-4 h-4" />
                </span>
              </a>

              <a
                href="/free-api"
                className="p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-orange-500 dark:hover:border-orange-500 transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-green-100 dark:bg-green-900/30 flex items-center justify-center mb-4">
                  <KeyIcon className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="font-semibold text-slate-900 dark:text-white mb-1 group-hover:text-orange-600 transition-colors">
                  {t("quickStart.freeApi.title")}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                  {t("quickStart.freeApi.desc")}
                </p>
                <span className="inline-flex items-center gap-1 text-sm text-orange-600 font-medium group-hover:gap-2 transition-all">
                  {t("quickStart.freeApi.link")}
                  <ArrowRightIcon className="w-4 h-4" />
                </span>
              </a>

              <a
                href="/alternatives"
                className="p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-orange-500 dark:hover:border-orange-500 transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mb-4">
                  <GlobeIcon className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="font-semibold text-slate-900 dark:text-white mb-1 group-hover:text-orange-600 transition-colors">
                  {t("quickStart.alternatives.title")}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                  {t("quickStart.alternatives.desc")}
                </p>
                <span className="inline-flex items-center gap-1 text-sm text-orange-600 font-medium group-hover:gap-2 transition-all">
                  {t("quickStart.alternatives.link")}
                  <ArrowRightIcon className="w-4 h-4" />
                </span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
