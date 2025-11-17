import { Users, MessageCircle, Star } from "lucide-react";

export default function CommunityShowcase() {
  const items = [
    {
      title: "IEP Planner Template",
      desc: "Community-built planner to prepare for IEP meetings",
      stats: "2.3k saves",
    },
    {
      title: "Sensory-friendly Classroom Guide",
      desc: "Practical tips from special educators and OTs",
      stats: "1.7k saves",
    },
    {
      title: "ADHD Study Toolkit",
      desc: "Pomodoro variants, dopamine-friendly checklists",
      stats: "3.1k saves",
    },
  ];
  return (
    <section id="community" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">Built with and for the community</h2>
          <div className="hidden sm:flex items-center gap-4 text-sm text-slate-600 dark:text-slate-300">
            <div className="inline-flex items-center gap-1"><Users className="w-4 h-4"/> 10k+ members</div>
            <div className="inline-flex items-center gap-1"><MessageCircle className="w-4 h-4"/> 80k+ posts</div>
            <div className="inline-flex items-center gap-1"><Star className="w-4 h-4"/> 4.9/5 trust</div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <article key={i} className="p-6 rounded-2xl bg-white/70 dark:bg-slate-800/70 border border-slate-200/60 dark:border-slate-700/60 hover:shadow-md transition">
              <h3 className="font-semibold text-slate-900 dark:text-white">{it.title}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">{it.desc}</p>
              <div className="mt-4 text-xs text-slate-500 dark:text-slate-400">{it.stats}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
