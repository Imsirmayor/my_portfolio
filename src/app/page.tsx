// // src/app/page.tsx

// import Image from 'next/image';
// import Link from 'next/link';


// export default function Home() {
//   return (
//     <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
//       {/* Hero Section */}
//       <section className="relative min-h-screen flex items-center justify-center px-4 pt-24">
//         <div className="absolute inset-0 bg-black/20"></div>
//         <div className="relative z-10 text-center max-w-4xl mx-auto">
//           <div className="mb-8 w-48 h-48 mx-auto relative">
//             <Image
//               src="/images/headshot.jpg"
//               alt="Mayowa Adeyemi"
//               fill
//               className="rounded-full object-cover border-4 border-white/20 shadow-2xl"
//               priority
//             />
//           </div>
//           <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
//             Mayowa Adeyemi
//           </h1>
//           <p className="text-xl md:text-2xl text-purple-200 mb-8">
//             System Test Engineer & Global Development Practitioner
//           </p>
//           <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto">
//             A Master&apos;s-educated System Test Engineer crafting robust systems, who also travels globally to lead workshops and mentor the next generation of professionals through EU-funded initiatives.
//           </p>
          
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <Link 
//               href="/engineering" 
//               className="bg-white/10 backdrop-blur-md text-white px-8 py-3 rounded-lg border border-white/20 hover:bg-white/20 transition-colors"
//             >
//               View My Work
//             </Link>
//             <Link 
//               href="/about" 
//               className="bg-purple-600/70 backdrop-blur-md text-white px-8 py-3 rounded-lg border border-purple-400/30 hover:bg-purple-600 transition-colors"
//             >
//               About Me
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* Pillars Section */}
//       <section className="py-20 px-4">
//         <div className="max-w-7xl mx-auto">
//           <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
//             Professional Pillars
//           </h2>
          
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {/* Engineering Pillar */}
//             <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 hover:border-white/20 transition-colors">
//               <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
//                 <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
//                 </svg>
//               </div>
//               <h3 className="text-xl font-semibold text-white mb-2">Engineering</h3>
//               <p className="text-gray-300 mb-4">
//                 Expertise in system test engineering, IC validation, and test automation with Python, PDL, and C++.
//               </p>
//               <Link 
//                 href="/engineering" 
//                 className="text-purple-400 hover:text-purple-300 font-medium flex items-center"
//               >
//                 Explore Engineering
//                 <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                 </svg>
//               </Link>
//             </div>
            
//             {/* Global Dev Pillar */}
//             <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 hover:border-white/20 transition-colors">
//               <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
//                 <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
//                 </svg>
//               </div>
//               <h3 className="text-xl font-semibold text-white mb-2">Global Development</h3>
//               <p className="text-gray-300 mb-4">
//                 Project and program assistance for NGO organizations, delivering workshops and training across Europe.
//               </p>
//               <Link 
//                 href="/global-dev" 
//                 className="text-blue-400 hover:text-blue-300 font-medium flex items-center"
//               >
//                 Explore Global Work
//                 <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                 </svg>
//               </Link>
//             </div>
            
//             {/* Mentorship Pillar */}
//             <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 hover:border-white/20 transition-colors">
//               <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
//                 <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
//                 </svg>
//               </div>
//               <h3 className="text-xl font-semibold text-white mb-2">Mentorship</h3>
//               <p className="text-gray-300 mb-4">
//                 Mentoring young graduates through the Global Mentorship Initiative and contributing to the GRP-European Digital Education Hub.
//               </p>
//               <Link 
//                 href="/mentorship" 
//                 className="text-green-400 hover:text-green-300 font-medium flex items-center"
//               >
//                 Explore Mentorship
//                 <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                 </svg>
//               </Link>
//             </div>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }


// [page.tsx](http://_vscodecontentref_/2)
import Image from "next/image";
import Link from "next/link";

const conferencePhotos = [
  "/images/conferences/IMG_20251126_170639_709.jpg",
  "/images/conferences/IMG_20251130_115133_099.jpg",
  "/images/conferences/IMG_20251126_170631_244.jpg",
  "/images/conferences/Panel_Speaking.jpeg",
  "/images/conferences/Me_4.jpeg",
  "/images/conferences/esf-warsaw-1.jpg",
  "/images/conferences/esf-warsaw-2.jpg",
  "/images/conferences/graduants.jpg",
];

const highlights = [
  { label: "Countries engaged", value: "7+" },
  { label: "Talks and workshops", value: "20+" },
  { label: "Cross-sector collaborations", value: "15+" },
  { label: "Years in test engineering", value: "5+" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_20%_20%,#0f172a_0%,#0b1220_45%,#05070d_100%)] text-white">
      <section className="relative overflow-hidden px-4 pt-28 pb-20 sm:pt-32">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
          <div className="absolute top-24 -right-16 h-80 w-80 rounded-full bg-amber-500/20 blur-3xl" />
          <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-emerald-500/10 blur-3xl" />
        </div>

        <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div className="animate-fade-up">
            <p className="mb-4 inline-flex items-center rounded-full border border-white/20 bg-white/5 px-4 py-1 text-xs tracking-[0.2em] text-cyan-200 uppercase">
              Systems Quality • Global Development • Mentorship
            </p>

            <h1 className="max-w-3xl text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              Building reliable systems and globally relevant impact
            </h1>

            <p className="mt-6 max-w-2xl text-base text-slate-300 sm:text-lg">
              I am Mayowa Adeyemi, a System Test Engineer and Global Development Practitioner.
              I combine deep technical validation with international program delivery, conference speaking,
              and mentorship across Europe.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/engineering"
                className="rounded-xl bg-cyan-500 px-6 py-3 font-medium text-slate-950 transition hover:bg-cyan-400"
              >
                Explore Engineering Work
              </Link>
              <Link
                href="/global-dev/conferences"
                className="rounded-xl border border-white/25 bg-white/5 px-6 py-3 font-medium text-white transition hover:bg-white/10"
              >
                See Talks and Conferences
              </Link>
            </div>
          </div>

          <div className="animate-fade-up-delay">
            <div className="relative mx-auto h-72 w-72 overflow-hidden rounded-[2rem] border border-white/20 bg-white/5 p-3 shadow-2xl sm:h-80 sm:w-80">
              <div className="relative h-full w-full overflow-hidden rounded-[1.5rem]">
                <Image
                  src="/images/headshot.jpg"
                  alt="Mayowa Adeyemi"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pb-14">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 sm:grid-cols-4">
          {highlights.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-white/15 bg-white/[0.04] p-4 backdrop-blur-sm"
            >
              <p className="text-2xl font-semibold text-amber-300 sm:text-3xl">{item.value}</p>
              <p className="mt-1 text-sm text-slate-300">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-4 pb-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-6 flex items-end justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-cyan-200">Field Presence</p>
              <h2 className="mt-2 text-2xl font-semibold sm:text-3xl">Conference and Talk Highlights</h2>
            </div>
            <Link
              href="/global-dev/conferences"
              className="hidden rounded-lg border border-white/20 px-4 py-2 text-sm text-slate-200 transition hover:bg-white/10 sm:inline-flex"
            >
              View full gallery
            </Link>
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-white/[0.03] p-4">
            <div className="absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#070b13] to-transparent" />
            <div className="absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#070b13] to-transparent" />

            <div className="marquee-track flex w-max gap-4">
              {[...conferencePhotos, ...conferencePhotos].map((src, index) => (
                <div
                  key={src + index}
                  className="relative h-48 w-72 shrink-0 overflow-hidden rounded-xl border border-white/15 bg-slate-800 sm:h-56 sm:w-80"
                >
                  <Image
                    src={src}
                    alt="Conference and speaking moment"
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          <Link
            href="/global-dev/conferences"
            className="mt-4 inline-flex rounded-lg border border-white/20 px-4 py-2 text-sm text-slate-200 transition hover:bg-white/10 sm:hidden"
          >
            View full gallery
          </Link>
        </div>
      </section>

      <section className="px-4 pb-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-8 text-2xl font-semibold sm:text-3xl">Professional Pillars</h2>

          <div className="grid gap-6 md:grid-cols-3">
            <Link
              href="/engineering"
              className="group rounded-2xl border border-cyan-400/30 bg-gradient-to-b from-cyan-500/10 to-transparent p-6 transition hover:translate-y-[-2px] hover:border-cyan-300/60"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-cyan-200">Engineering</p>
              <h3 className="mt-3 text-xl font-semibold">Systems Validation and Test Automation</h3>
              <p className="mt-3 text-slate-300">
                Advanced test design, IC validation, and robust automation pipelines across Python, PDL, and C++.
              </p>
              <p className="mt-5 text-cyan-200">Explore Engineering →</p>
            </Link>

            <Link
              href="/global-dev"
              className="group rounded-2xl border border-amber-400/30 bg-gradient-to-b from-amber-500/10 to-transparent p-6 transition hover:translate-y-[-2px] hover:border-amber-300/60"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-amber-200">Global Development</p>
              <h3 className="mt-3 text-xl font-semibold">International Projects and Capacity Building</h3>
              <p className="mt-3 text-slate-300">
                Program and NGO support, workshop delivery, and cross-border collaboration for sustainable outcomes.
              </p>
              <p className="mt-5 text-amber-200">Explore Global Work →</p>
            </Link>

            <Link
              href="/mentorship"
              className="group rounded-2xl border border-emerald-400/30 bg-gradient-to-b from-emerald-500/10 to-transparent p-6 transition hover:translate-y-[-2px] hover:border-emerald-300/60"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-emerald-200">Mentorship</p>
              <h3 className="mt-3 text-xl font-semibold">Career Guidance and Leadership Development</h3>
              <p className="mt-3 text-slate-300">
                Supporting graduates and young professionals through structured mentoring and practical career strategy.
              </p>
              <p className="mt-5 text-emerald-200">Explore Mentorship →</p>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}