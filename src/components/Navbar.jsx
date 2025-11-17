import { Menu, Brain, User } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 dark:bg-slate-900/70 border-b border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <span className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-gradient-to-tr from-indigo-500 via-blue-500 to-cyan-400 text-white shadow-lg">
              <Brain className="w-5 h-5" />
            </span>
            <span className="font-semibold text-slate-900 dark:text-white text-lg tracking-tight">NeuroHub</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-slate-600 dark:text-slate-300">
            <a href="#features" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Features</a>
            <a href="#community" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Community</a>
            <a href="#faq" className="hover:text-blue-600 dark:hover:text-blue-400 transition">FAQ</a>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <button className="inline-flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition">
              <User className="w-4 h-4" /> Sign in
            </button>
            <a href="#get-started" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-indigo-600 to-blue-600 text-white text-sm font-medium shadow hover:shadow-md transition">
              Join free
            </a>
          </div>

          <button onClick={() => setOpen(!open)} className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200">
            <Menu className="w-5 h-5" />
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col gap-2 text-slate-700 dark:text-slate-200">
              <a href="#features" className="px-3 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800">Features</a>
              <a href="#community" className="px-3 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800">Community</a>
              <a href="#faq" className="px-3 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800">FAQ</a>
              <div className="h-px bg-slate-200 dark:bg-slate-800 my-2" />
              <button className="px-3 py-2 rounded-lg text-left hover:bg-slate-100 dark:hover:bg-slate-800">Sign in</button>
              <a href="#get-started" className="px-3 py-2 rounded-lg bg-gradient-to-r from-indigo-600 to-blue-600 text-white">Join free</a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
