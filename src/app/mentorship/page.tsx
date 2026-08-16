// import Link from 'next/link';

// export default function Mentorship() {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900 pt-16">
//       <div className="max-w-6xl mx-auto px-4 py-12">
//         <div className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-8 md:p-12">
//           <h1 className="text-4xl font-bold text-white mb-8">Mentorship</h1>
          
//           <p className="text-gray-300 mb-12 max-w-3xl">
//             I am passionate about guiding the next generation of professionals through structured mentorship programs. 
//             My approach combines technical knowledge with career development strategies to help young graduates navigate their professional journeys.
//           </p>
          
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
//             <Link 
//               href="/mentorship/gmi" 
//               className="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-white/20 transition-colors group"
//             >
//               <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
//                 <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
//                 </svg>
//               </div>
//               <h2 className="text-xl font-semibold text-white mb-2 group-hover:text-green-300 transition-colors">Global Mentorship Initiative</h2>
//               <p className="text-gray-300">
//                 Learn about my role in mentoring young graduates through structured programs and career guidance.
//               </p>
//             </Link>
            
//             <Link 
//               href="/mentorship/grp" 
//               className="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-white/20 transition-colors group"
//             >
//               <div className="w-12 h-12 bg-teal-600 rounded-lg flex items-center justify-center mb-4">
//                 <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
//                 </svg>
//               </div>
//               <h2 className="text-xl font-semibold text-white mb-2 group-hover:text-teal-300 transition-colors">GRP-European Digital Education Hub</h2>
//               <p className="text-gray-300">
//                 Discover my contributions to digital education initiatives and European collaboration projects.
//               </p>
//             </Link>
//           </div>
          
//           <div>
//             <h2 className="text-2xl font-semibold text-white mb-6">Mentorship Philosophy</h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <div className="bg-white/5 rounded-xl p-6 border border-white/10">
//                 <h3 className="text-lg font-medium text-white mb-2">Technical Guidance</h3>
//                 <p className="text-gray-300">
//                   Providing hands-on technical mentorship in system test engineering, automation frameworks, and validation methodologies.
//                 </p>
//               </div>
//               <div className="bg-white/5 rounded-xl p-6 border border-white/10">
//                 <h3 className="text-lg font-medium text-white mb-2">Career Development</h3>
//                 <p className="text-gray-300">
//                   Helping mentees navigate career choices, interview preparation, and professional growth in the tech industry.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


// src/app/mentorship/page.tsx
import Link from 'next/link';

const stats = [
  { label: "Mentees Supported", value: "25+" },
  { label: "Mentorship Hours", value: "200+" },
  { label: "Career Workshops", value: "15+" },
  { label: "Success Stories", value: "12+" },
];

const philosophyItems = [
  {
    title: "Technical Guidance",
    description: "Providing hands-on technical mentorship in system test engineering, automation frameworks, and validation methodologies.",
    color: "emerald"
  },
  {
    title: "Career Development",
    description: "Helping mentees navigate career choices, interview preparation, and professional growth in the tech industry.",
    color: "teal"
  },
  {
    title: "Leadership Skills",
    description: "Developing leadership capabilities through practical projects, team collaboration, and decision-making exercises.",
    color: "green"
  },
  {
    title: "Global Perspective",
    description: "Fostering cross-cultural understanding and international career opportunities through diverse mentorship experiences.",
    color: "cyan"
  }
];

export default function MentorshipPage() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_20%_20%,#0f172a_0%,#0b1220_45%,#05070d_100%)] text-white pt-16">
      {/* Background Glows */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-emerald-500/20 blur-3xl" />
        <div className="absolute top-24 -right-16 h-80 w-80 rounded-full bg-teal-500/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-green-500/10 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-12">
        {/* Header Section */}
        <div className="rounded-2xl border border-white/15 bg-white/[0.04] backdrop-blur-sm p-6 sm:p-8 mb-8">
          <p className="mb-2 inline-flex items-center rounded-full border border-white/20 bg-white/5 px-4 py-1 text-xs tracking-[0.2em] text-emerald-200 uppercase">
            Career Guidance • Leadership Development
          </p>
          <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl">
            Mentorship
          </h1>
          <p className="mt-3 text-slate-300 max-w-3xl">
            I am passionate about guiding the next generation of professionals through structured mentorship programs. 
            My approach combines technical knowledge with career development strategies to help young graduates navigate their professional journeys.
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
                <p className="text-2xl font-semibold text-emerald-300 sm:text-3xl">{item.value}</p>
                <p className="mt-1 text-sm text-slate-300">{item.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Navigation Cards */}
        <section className="mb-12">
          <div className="mb-8">
            <p className="text-xs uppercase tracking-[0.2em] text-emerald-200">Programs</p>
            <h2 className="mt-2 text-2xl font-semibold sm:text-3xl">Mentorship Programs</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <Link 
              href="/mentorship/gmi" 
              className="group rounded-2xl border border-emerald-400/30 bg-gradient-to-b from-emerald-500/10 to-transparent p-6 transition hover:translate-y-[-2px] hover:border-emerald-300/60"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-500/20">
                <svg className="h-6 w-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <p className="text-xs uppercase tracking-[0.2em] text-emerald-200">Global Initiative</p>
              <h3 className="mt-2 text-xl font-semibold text-white group-hover:text-emerald-300 transition-colors">
                Global Mentorship Initiative
              </h3>
              <p className="mt-3 text-slate-300">
                Learn about my role in mentoring young graduates through structured programs and career guidance.
              </p>
              <p className="mt-5 text-emerald-200">Learn more →</p>
            </Link>
            
            <Link 
              href="/mentorship/grp" 
              className="group rounded-2xl border border-teal-400/30 bg-gradient-to-b from-teal-500/10 to-transparent p-6 transition hover:translate-y-[-2px] hover:border-teal-300/60"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-teal-500/20">
                <svg className="h-6 w-6 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <p className="text-xs uppercase tracking-[0.2em] text-teal-200">Digital Education</p>
              <h3 className="mt-2 text-xl font-semibold text-white group-hover:text-teal-300 transition-colors">
                GRP-European Digital Education Hub
              </h3>
              <p className="mt-3 text-slate-300">
                Discover my contributions to digital education initiatives and European collaboration projects.
              </p>
              <p className="mt-5 text-teal-200">Learn more →</p>
            </Link>
          </div>
        </section>

        {/* Mentorship Philosophy */}
        <section className="mb-12">
          <div className="mb-8">
            <p className="text-xs uppercase tracking-[0.2em] text-green-200">Philosophy</p>
            <h2 className="mt-2 text-2xl font-semibold sm:text-3xl">Mentorship Philosophy</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {philosophyItems.map((item) => {
              const colorMap = {
                emerald: { border: 'border-emerald-400/30', bg: 'from-emerald-500/10', text: 'text-emerald-200' },
                teal: { border: 'border-teal-400/30', bg: 'from-teal-500/10', text: 'text-teal-200' },
                green: { border: 'border-green-400/30', bg: 'from-green-500/10', text: 'text-green-200' },
                cyan: { border: 'border-cyan-400/30', bg: 'from-cyan-500/10', text: 'text-cyan-200' }
              };
              const colors = colorMap[item.color as keyof typeof colorMap];

              return (
                <div 
                  key={item.title}
                  className={`rounded-2xl border ${colors.border} bg-gradient-to-b ${colors.bg} to-transparent p-6 transition hover:border-white/25`}
                >
                  <h3 className={`text-lg font-semibold text-white ${colors.text}`}>{item.title}</h3>
                  <p className="mt-2 text-slate-300">{item.description}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Mentorship Highlights */}
        <section className="rounded-2xl border border-emerald-400/25 bg-gradient-to-b from-emerald-500/10 to-transparent p-6 sm:p-8 mb-8">
          <p className="text-xs uppercase tracking-[0.2em] text-emerald-200 mb-2">Impact</p>
          <h2 className="text-2xl font-semibold text-white mb-6">Mentorship Approach</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5 text-center">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/20 mb-3">
                <svg className="h-6 w-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">1-on-1 Mentoring</h3>
              <p className="text-sm text-slate-300">Personalized guidance tailored to each mentee's unique goals and challenges</p>
            </div>
            
            <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5 text-center">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-teal-500/20 mb-3">
                <svg className="h-6 w-6 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Group Workshops</h3>
              <p className="text-sm text-slate-300">Collaborative learning sessions on career development and technical skills</p>
            </div>
            
            <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5 text-center">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-green-500/20 mb-3">
                <svg className="h-6 w-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Global Network</h3>
              <p className="text-sm text-slate-300">Connecting mentees with international opportunities and diverse perspectives</p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="rounded-2xl border border-amber-400/25 bg-gradient-to-b from-amber-500/10 to-transparent p-6 sm:p-8 text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-amber-200 mb-2">Get Involved</p>
          <h2 className="text-2xl font-semibold text-white mb-3">Ready to grow together?</h2>
          <p className="text-slate-300 max-w-2xl mx-auto mb-6">
            Whether you're looking for mentorship or want to collaborate on mentorship initiatives, I'd love to connect.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/contact" 
              className="inline-flex items-center rounded-lg bg-amber-400 px-6 py-3 font-medium text-slate-950 transition hover:bg-amber-300"
            >
              Get In Touch
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
            <Link 
              href="/mentorship/gmi" 
              className="inline-flex items-center rounded-lg border border-white/20 bg-white/5 px-6 py-3 font-medium text-white transition hover:bg-white/10"
            >
              Explore Programs
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}