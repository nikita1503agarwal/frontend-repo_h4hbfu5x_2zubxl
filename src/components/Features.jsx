import { ShieldCheck, Sparkles, BookOpen, GitBranch, HeartHandshake, Search } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: <Search className="w-5 h-5 text-blue-600" />,
      title: "Expert-backed Q&A",
      desc: "Ask questions and get perspectives from individuals, parents, therapists, and educators in one place.",
    },
    {
      icon: <GitBranch className="w-5 h-5 text-indigo-600" />,
      title: "Open collaboration",
      desc: "Start community projects: resource lists, toolkits, and open-source assistive tech.",
    },
    {
      icon: <BookOpen className="w-5 h-5 text-purple-600" />,
      title: "Curated resources",
      desc: "Evidence-based articles, guides, and templates tailored to diverse needs.",
    },
    {
      icon: <HeartHandshake className="w-5 h-5 text-rose-600" />,
      title: "Supportive moderation",
      desc: "Safety-first space with clear guidelines and inclusive language tools.",
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-emerald-600" />,
      title: "Privacy by design",
      desc: "Granular control over what you share and who can see it.",
    },
    {
      icon: <Sparkles className="w-5 h-5 text-amber-600" />,
      title: "Neuro-affirming UX",
      desc: "Calm visuals, reduced sensory load, and keyboard-first navigation.",
    },
  ];
  return (
    <section id="features" className="py-14 sm:py-20 bg-gradient-to-b from-transparent to-slate-50 dark:to-slate-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">Everything you need to learn and build together</h2>
          <p className="mt-3 text-slate-600 dark:text-slate-300">One home for questions, answers, and collaborative projects—designed for neurodivergent communities.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div key={i} className="p-6 rounded-2xl bg-white/70 dark:bg-slate-800/70 border border-slate-200/60 dark:border-slate-700/60 shadow-sm hover:shadow-md transition">
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-slate-100 dark:bg-slate-700 mb-4">
                {f.icon}
              </div>
              <h3 className="font-semibold text-slate-900 dark:text-white">{f.title}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
