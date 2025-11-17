import { ArrowRight, Users, GitFork, MessageSquare } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 opacity-70">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-gradient-to-tr from-indigo-500/20 to-cyan-400/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -right-24 w-[28rem] h-[28rem] bg-gradient-to-tr from-purple-500/20 to-blue-400/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-28 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs bg-blue-600/10 text-blue-700 dark:text-blue-300 ring-1 ring-blue-600/20 mb-4">
            <Users className="w-3.5 h-3.5" /> A safe, inclusive space for neurodivergent communities
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
            Where knowledge meets care: ask, build, and connect
          </h1>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-300 max-w-xl">
            Think of it as Q&A meets open collaboration. Get answers, share lived experiences, and co-create tools tailored for ADHD, autism, dyslexia, and more.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#get-started" className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-gradient-to-r from-indigo-600 to-blue-600 text-white font-medium shadow hover:shadow-lg transition">
              Get started <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#demo" className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800/60 transition">
              Explore demo
            </a>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-4 text-sm text-slate-600 dark:text-slate-300">
            <div className="flex items-center gap-2"><MessageSquare className="w-4 h-4 text-blue-600"/> Peer Q&A threads</div>
            <div className="flex items-center gap-2"><GitFork className="w-4 h-4 text-indigo-600"/> Community projects</div>
            <div className="flex items-center gap-2"><Users className="w-4 h-4 text-cyan-600"/> Multi-role support</div>
            <div className="flex items-center gap-2"><ArrowRight className="w-4 h-4 text-purple-600"/> Guided resources</div>
          </div>
        </div>

        <div className="relative">
          <div className="relative bg-white/70 dark:bg-slate-800/70 rounded-2xl border border-slate-200/60 dark:border-slate-700/60 shadow-xl p-4">
            <div className="grid grid-cols-3 gap-3 mb-3">
              <div className="h-2 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500" />
              <div className="h-2 rounded-full bg-slate-200 dark:bg-slate-700" />
              <div className="h-2 rounded-full bg-slate-200 dark:bg-slate-700" />
            </div>
            <div className="aspect-video rounded-xl bg-gradient-to-br from-indigo-600/20 via-blue-600/20 to-cyan-500/20 flex items-center justify-center">
              <div className="text-center px-6">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Live community preview</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">Mocked view of threads, repos, and resource cards</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
