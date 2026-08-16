// // src/app/engineering/page.tsx
// import Link from 'next/link';

// export default function Engineering() {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-16">
//       <div className="max-w-6xl mx-auto px-4 py-12">
//         <div className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-8 md:p-12">
//           <h1 className="text-4xl font-bold text-white mb-8">Engineering</h1>
          
//           <p className="text-gray-300 mb-12 max-w-3xl">
//             My expertise spans system test engineering, IC validation, and test automation. I specialize in developing Python-based validation environments, hardware/software integration, and translating procedural test flows into deployable C++ code on ATE systems.
//           </p>
          
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
//             <Link 
//               href="/engineering/experience" 
//               className="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-white/20 transition-colors group"
//             >
//               <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
//                 <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//                 </svg>
//               </div>
//               <h2 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors">Experience & Projects</h2>
//               <p className="text-gray-300">
//                 Explore my professional journey, key projects, and technical achievements in system test engineering and validation.
//               </p>
//             </Link>
            
//             <Link 
//               href="/engineering/tools" 
//               className="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-white/20 transition-colors group"
//             >
//               <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
//                 <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
//                 </svg>
//               </div>
//               <h2 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-300 transition-colors">Tools & Technologies</h2>
//               <p className="text-gray-300">
//                 Discover the technical tools, languages, and frameworks I use to develop robust testing solutions and automation systems.
//               </p>
//             </Link>
//           </div>
          
//           <div>
//             <h2 className="text-2xl font-semibold text-white mb-6">Technical Highlights</h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <div className="bg-white/5 rounded-xl p-6 border border-white/10">
//                 <h3 className="text-lg font-medium text-white mb-2">Test Automation</h3>
//                 <p className="text-gray-300">
//                   Developed Python-based automation frameworks for IC validation, reducing manual effort and improving traceability in testing workflows.
//                 </p>
//               </div>
//               <div className="bg-white/5 rounded-xl p-6 border border-white/10">
//                 <h3 className="text-lg font-medium text-white mb-2">Hardware/Software Integration</h3>
//                 <p className="text-gray-300">
//                   Experienced in integrating test sequences into automated testing frameworks and configuring lab test benches for IC validation.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// src/app/engineering/page.tsx
import Link from 'next/link';

const technicalHighlights = [
  {
    title: "Test Automation",
    description: "Developed Python-based automation frameworks for IC validation, reducing manual effort and improving traceability in testing workflows.",
    color: "cyan"
  },
  {
    title: "Hardware/Software Integration",
    description: "Experienced in integrating test sequences into automated testing frameworks and configuring lab test benches for IC validation.",
    color: "blue"
  },
  {
    title: "IC Validation",
    description: "Designed and executed validation plans for semiconductor ICs, ensuring compliance with automotive quality standards (IATF 16949).",
    color: "purple"
  },
  {
    title: "Automated Test Fixtures",
    description: "Created custom test fixtures and scripts for flexible sensor testing, working with automotive partners including Tesla and Forvia.",
    color: "emerald"
  }
];

const stats = [
  { label: "Years in Test Engineering", value: "5+" },
  { label: "Automation Scripts Built", value: "50+" },
  { label: "Test Plans Developed", value: "30+" },
  { label: "Automotive Partners", value: "4+" },
];

export default function Engineering() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_20%_20%,#0f172a_0%,#0b1220_45%,#05070d_100%)] text-white pt-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden px-4 py-16 sm:py-20">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
          <div className="absolute top-24 -right-16 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl" />
          <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-purple-500/10 blur-3xl" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="mb-4 inline-flex items-center rounded-full border border-white/20 bg-white/5 px-4 py-1 text-xs tracking-[0.2em] text-cyan-200 uppercase">
              System Test Engineering • IC Validation • Automation
            </p>

            <h1 className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              Engineering reliable systems through rigorous validation
            </h1>

            <p className="mt-5 text-slate-300 sm:text-lg">
              My expertise spans system test engineering, IC validation, and test automation. 
              I specialize in developing Python-based validation environments, hardware/software 
              integration, and translating procedural test flows into deployable C++ code on ATE systems.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/engineering/experience"
                className="rounded-xl bg-cyan-500 px-6 py-3 font-medium text-slate-950 transition hover:bg-cyan-400"
              >
                View Experience
              </Link>
              <Link
                href="/engineering/tools"
                className="rounded-xl border border-white/25 bg-white/5 px-6 py-3 font-medium text-white transition hover:bg-white/10"
              >
                See Tools & Tech
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-4 pb-14">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 sm:grid-cols-4">
          {stats.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-white/15 bg-white/[0.04] p-4 backdrop-blur-sm"
            >
              <p className="text-2xl font-semibold text-cyan-300 sm:text-3xl">{item.value}</p>
              <p className="mt-1 text-sm text-slate-300">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Main Navigation Cards */}
      <section className="px-4 pb-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8">
            <p className="text-xs uppercase tracking-[0.2em] text-cyan-200">Explore</p>
            <h2 className="mt-2 text-2xl font-semibold sm:text-3xl">Engineering Portfolio</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <Link
              href="/engineering/experience"
              className="group rounded-2xl border border-cyan-400/30 bg-gradient-to-b from-cyan-500/10 to-transparent p-6 transition hover:translate-y-[-2px] hover:border-cyan-300/60"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-cyan-500/20">
                <svg className="h-6 w-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <p className="text-xs uppercase tracking-[0.2em] text-cyan-200">Experience</p>
              <h3 className="mt-2 text-xl font-semibold text-white group-hover:text-cyan-300 transition-colors">
                Experience & Projects
              </h3>
              <p className="mt-3 text-slate-300">
                Explore my professional journey, key projects, and technical achievements in system test engineering and validation.
              </p>
              <p className="mt-5 text-cyan-200">View experience →</p>
            </Link>

            <Link
              href="/engineering/tools"
              className="group rounded-2xl border border-blue-400/30 bg-gradient-to-b from-blue-500/10 to-transparent p-6 transition hover:translate-y-[-2px] hover:border-blue-300/60"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500/20">
                <svg className="h-6 w-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <p className="text-xs uppercase tracking-[0.2em] text-blue-200">Tools</p>
              <h3 className="mt-2 text-xl font-semibold text-white group-hover:text-blue-300 transition-colors">
                Tools & Technologies
              </h3>
              <p className="mt-3 text-slate-300">
                Discover the technical tools, languages, and frameworks I use to develop robust testing solutions and automation systems.
              </p>
              <p className="mt-5 text-blue-200">Explore tools →</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Technical Highlights */}
      <section className="px-4 pb-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8">
            <p className="text-xs uppercase tracking-[0.2em] text-emerald-200">Expertise</p>
            <h2 className="mt-2 text-2xl font-semibold sm:text-3xl">Technical Highlights</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {technicalHighlights.map((item, index) => {
              const colorMap = {
                cyan: "border-cyan-400/30 bg-gradient-to-b from-cyan-500/10",
                blue: "border-blue-400/30 bg-gradient-to-b from-blue-500/10",
                purple: "border-purple-400/30 bg-gradient-to-b from-purple-500/10",
                emerald: "border-emerald-400/30 bg-gradient-to-b from-emerald-500/10"
              };
              const textColorMap = {
                cyan: "text-cyan-200",
                blue: "text-blue-200",
                purple: "text-purple-200",
                emerald: "text-emerald-200"
              };
              const borderColorMap = {
                cyan: "border-cyan-400/30",
                blue: "border-blue-400/30",
                purple: "border-purple-400/30",
                emerald: "border-emerald-400/30"
              };

              return (
                <div
                  key={item.title}
                  className={`rounded-2xl border ${borderColorMap[item.color as keyof typeof borderColorMap]} ${colorMap[item.color as keyof typeof colorMap]} to-transparent p-6`}
                >
                  <h3 className={`text-lg font-semibold text-white ${textColorMap[item.color as keyof typeof textColorMap]}`}>
                    {item.title}
                  </h3>
                  <p className="mt-2 text-slate-300">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}