import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import CommunityShowcase from './components/CommunityShowcase'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-950">
      {/* Background subtle gradients */}
      <div className="fixed inset-0 -z-10 opacity-60 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[36rem] h-[36rem] rounded-full bg-gradient-to-tr from-indigo-500/10 via-blue-500/10 to-cyan-400/10 blur-3xl" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[42rem] h-[42rem] rounded-full bg-gradient-to-tr from-purple-500/10 via-blue-500/10 to-emerald-400/10 blur-3xl" />
      </div>

      <Navbar />
      <main>
        <Hero />
        <Features />
        <CommunityShowcase />
        <CTA />
      </main>

      <footer className="border-t border-slate-200/60 dark:border-slate-800/60 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-600 dark:text-slate-300">
          <p>© {new Date().getFullYear()} NeuroHub — Built for neurodivergent individuals, parents, caregivers, therapists, and educators.</p>
          <div className="flex items-center gap-4">
            <a href="#features" className="hover:text-blue-600 dark:hover:text-blue-400">Features</a>
            <a href="#community" className="hover:text-blue-600 dark:hover:text-blue-400">Community</a>
            <a href="#get-started" className="hover:text-blue-600 dark:hover:text-blue-400">Get started</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
