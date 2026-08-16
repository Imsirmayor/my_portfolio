// import Link from 'next/link';

// export default function GlobalDev() {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 pt-16">
//       <div className="max-w-6xl mx-auto px-4 py-12">
//         <div className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-8 md:p-12">
//           <h1 className="text-4xl font-bold text-white mb-8">Global Development</h1>
          
//           <p className="text-gray-300 mb-12 max-w-3xl">
//             My work in global development focuses on EU-funded projects, NGO initiatives, and international workshops. 
//             I combine technical expertise with cross-cultural communication to deliver impactful training and program assistance across Europe.
//           </p>
          
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
//             <Link 
//               href="/global-dev/ngo" 
//               className="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-white/20 transition-colors group"
//             >
//               <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
//                 <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-4 0H9m4 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v12m4 0V9m0 12h2m-2 0h4m0 0h2m-2 0v-4m0 4v-4m0 0h-4m4 0v-4m0 4v-4" />
//                 </svg>
//               </div>
//               <h2 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-300 transition-colors">NGO Work & EU Projects</h2>
//               <p className="text-gray-300">
//                 Explore my role as a Project and Program Assistant for NGO organizations and EU-funded initiatives.
//               </p>
//             </Link>
            
//             <Link 
//               href="/global-dev/conferences" 
//               className="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-white/20 transition-colors group"
//             >
//               <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
//                 <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
//                 </svg>
//               </div>
//               <h2 className="text-xl font-semibold text-white mb-2 group-hover:text-green-300 transition-colors">Conferences & Workshops</h2>
//               <p className="text-gray-300">
//                 Browse photos and details from international conferences, seminars, and training workshops I've conducted.
//               </p>
//             </Link>
//           </div>
          
//           <div>
//             <h2 className="text-2xl font-semibold text-white mb-6">Global Development Highlights</h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <div className="bg-white/5 rounded-xl p-6 border border-white/10">
//                 <h3 className="text-lg font-medium text-white mb-2">Study Visits & Erasmus Trainings</h3>
//                 <p className="text-gray-300 mb-4">
//                   Field visits, Erasmus+ trainings, and exchange trips where I delivered workshops, collaborated with partner institutions, and documented best practices.
//                 </p>
//                 <Link
//                   href="/global-dev/study-visits"
//                   className="inline-flex items-center text-blue-300 hover:text-blue-200 font-medium"
//                 >
//                   View study visits & outputs
//                   <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                   </svg>
//                 </Link>
//               </div>
//               <div className="bg-white/5 rounded-xl p-6 border border-white/10">
//                 <h3 className="text-lg font-medium text-white mb-2">International Workshops</h3>
//                 <p className="text-gray-300">
//                   Designed and delivered technical workshops and training sessions across multiple European countries, adapting content for diverse audiences.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// src/app/global-dev/page.tsx
import Link from 'next/link';

const stats = [
  { label: "Countries Engaged", value: "7+" },
  { label: "Talks & Workshops", value: "20+" },
  { label: "EU Projects Supported", value: "5+" },
  { label: "Training Sessions", value: "15+" },
];

export default function GlobalDev() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_20%_20%,#0f172a_0%,#0b1220_45%,#05070d_100%)] text-white pt-16">
      {/* Background Glows */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute top-24 -right-16 h-80 w-80 rounded-full bg-emerald-500/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-amber-500/10 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="rounded-2xl border border-white/15 bg-white/[0.04] backdrop-blur-sm p-6 sm:p-8 mb-8">
          <p className="mb-2 inline-flex items-center rounded-full border border-white/20 bg-white/5 px-4 py-1 text-xs tracking-[0.2em] text-blue-200 uppercase">
            International Impact
          </p>
          <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl">
            Global Development
          </h1>
          <p className="mt-3 text-slate-300 max-w-3xl">
            My work in global development focuses on EU-funded projects, NGO initiatives, and international workshops. 
            I combine technical expertise with cross-cultural communication to deliver impactful training and program assistance across Europe.
          </p>
        </div>

        {/* Stats Section */}
        <section className="mb-12">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {stats.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-white/15 bg-white/[0.04] p-4 backdrop-blur-sm"
              >
                <p className="text-2xl font-semibold text-blue-300 sm:text-3xl">{item.value}</p>
                <p className="mt-1 text-sm text-slate-300">{item.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Navigation Cards */}
        <section className="mb-12">
          <div className="mb-8">
            <p className="text-xs uppercase tracking-[0.2em] text-blue-200">Explore</p>
            <h2 className="mt-2 text-2xl font-semibold sm:text-3xl">Global Development Portfolio</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <Link 
              href="/global-dev/ngo" 
              className="group rounded-2xl border border-blue-400/30 bg-gradient-to-b from-blue-500/10 to-transparent p-6 transition hover:translate-y-[-2px] hover:border-blue-300/60"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500/20">
                <svg className="h-6 w-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-4 0H9m4 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v12m4 0V9m0 12h2m-2 0h4m0 0h2m-2 0v-4m0 4v-4m0 0h-4m4 0v-4m0 4v-4" />
                </svg>
              </div>
              <p className="text-xs uppercase tracking-[0.2em] text-blue-200">NGO & EU Projects</p>
              <h3 className="mt-2 text-xl font-semibold text-white group-hover:text-blue-300 transition-colors">
                NGO Work & EU Projects
              </h3>
              <p className="mt-3 text-slate-300">
                Explore my role as a Project and Program Assistant for NGO organizations and EU-funded initiatives.
              </p>
              <p className="mt-5 text-blue-200">View NGO work →</p>
            </Link>
            
            <Link 
              href="/global-dev/conferences" 
              className="group rounded-2xl border border-emerald-400/30 bg-gradient-to-b from-emerald-500/10 to-transparent p-6 transition hover:translate-y-[-2px] hover:border-emerald-300/60"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-500/20">
                <svg className="h-6 w-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                </svg>
              </div>
              <p className="text-xs uppercase tracking-[0.2em] text-emerald-200">Conferences</p>
              <h3 className="mt-2 text-xl font-semibold text-white group-hover:text-emerald-300 transition-colors">
                Conferences & Workshops
              </h3>
              <p className="mt-3 text-slate-300">
                Browse photos and details from international conferences, seminars, and training workshops I've conducted.
              </p>
              <p className="mt-5 text-emerald-200">View conferences →</p>
            </Link>
          </div>
        </section>

        {/* Global Development Highlights */}
        <section className="mb-12">
          <div className="mb-8">
            <p className="text-xs uppercase tracking-[0.2em] text-amber-200">Highlights</p>
            <h2 className="mt-2 text-2xl font-semibold sm:text-3xl">Global Development Highlights</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-white/15 bg-white/[0.04] backdrop-blur-sm p-6 transition hover:border-white/25">
              <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                <span className="inline-block h-2 w-2 rounded-full bg-blue-400"></span>
                Study Visits & Erasmus Trainings
              </h3>
              <p className="text-slate-300 mb-4">
                Field visits, Erasmus+ trainings, and exchange trips where I delivered workshops, collaborated with partner institutions, and documented best practices.
              </p>
              <Link
                href="/global-dev/study-visits"
                className="inline-flex items-center text-blue-300 hover:text-blue-200 font-medium transition-colors"
              >
                View study visits & outputs
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            <div className="rounded-2xl border border-white/15 bg-white/[0.04] backdrop-blur-sm p-6 transition hover:border-white/25">
              <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                <span className="inline-block h-2 w-2 rounded-full bg-emerald-400"></span>
                International Workshops
              </h3>
              <p className="text-slate-300">
                Designed and delivered technical workshops and training sessions across multiple European countries, adapting content for diverse audiences.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Conference Highlight */}
        <section className="rounded-2xl border border-amber-400/25 bg-gradient-to-b from-amber-500/10 to-transparent p-6 sm:p-8">
          <div className="flex flex-col md:flex-row md:items-center gap-6">
            <div className="flex-1">
              <p className="text-xs uppercase tracking-[0.2em] text-amber-200 mb-2">Featured</p>
              <h2 className="text-2xl font-semibold text-white mb-3">Graduation Keynote: Building With Purpose</h2>
              <p className="text-slate-300 mb-4 max-w-2xl">
                Reflections on engineering, community, and mentorship from my graduation keynote at FH Joanneum. 
                Shared lessons on leading with empathy, building resilient teams, and using technology to serve people.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/global-dev/conferences#graduation-speech-2025"
                  className="inline-flex items-center rounded-lg bg-amber-400 px-5 py-2.5 font-medium text-slate-950 transition hover:bg-amber-300"
                >
                  Watch the speech
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
                <Link
                  href="/global-dev/conferences#talks"
                  className="inline-flex items-center rounded-lg border border-white/20 bg-white/5 px-5 py-2.5 text-white transition hover:bg-white/10"
                >
                  See all talks
                </Link>
              </div>
            </div>
            <div className="flex-shrink-0">
              <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
                <div className="h-32 w-48 rounded-lg bg-gradient-to-br from-amber-500/20 to-blue-500/20 flex items-center justify-center">
                  <svg className="w-12 h-12 text-amber-300/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}