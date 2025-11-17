export default function CTA() {
  return (
    <section id="get-started" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-500 p-8 sm:p-12 text-white shadow-xl">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold leading-tight">Join a kinder internet for neurodivergent minds</h3>
              <p className="mt-2 text-white/90">Create a profile as a parent, caregiver, therapist, educator, or individual. Ask your first question or star a community project.</p>
            </div>
            <div className="flex gap-3">
              <a href="#" className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-white text-slate-900 font-medium shadow hover:shadow-lg transition">Create free account</a>
              <a href="#features" className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-black/10 text-white ring-1 ring-white/20 hover:bg-white/10 transition">See features</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
