// // src/app/about/page.tsx
// import Image from 'next/image';
// import Link from 'next/link';

// export default function About() {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-16">
//       <div className="max-w-6xl mx-auto px-4 py-12">
//         <div className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-8 md:p-12">
//           <h1 className="text-4xl font-bold text-white mb-8">About Me</h1>
          
//           <div className="flex flex-col md:flex-row gap-8 mb-12">
//             <div className="md:w-1/3">
//               <div className="w-64 h-64 mx-auto md:mx-0 relative">
//                 <Image
//                   src="/images/headshot.jpg"
//                   alt="Mayowa Adeyemi"
//                   fill
//                   className="rounded-2xl object-cover border-4 border-white/20"
//                 />
//               </div>
//             </div>
            
//             <div className="md:w-2/3">
//               <h2 className="text-2xl font-semibold text-white mb-4">My Journey</h2>
//               <p className="text-gray-300 mb-6">
//                 Test Engineer with an MSc in System Test Engineering (Highest Distinction, FH-Joanneum) and hands-on experience spanning semiconductor IC validation and automotive-grade flexible sensor testing. Currently developing test plans, automated test fixture, and validation infrastructure for flexible sensors at FLEXOO GmbH, working directly with test and requirements engineers at automotive partners including Tesla and Forvia. Delivered a master's thesis at AMS-OSRAM that automated test code generation using PDL, Python, and Jinja cutting test program development time from roughly two weeks to under five seconds. Skilled in test plan development (DV/PV), automated test fixture and script design, DAQ/sensor system integration, root-cause failure analysis, and compliance with automotive quality standards (IATF 16949).
//               </p>
//               <p className="text-gray-300 mb-6">
//                 What drives me is the intersection of technology and human impact. While I excel at creating robust test systems and automation frameworks, I'm equally passionate about using technology to empower communities and mentor the next generation of professionals.
//               </p>
//               <div className="flex gap-4">
//                 <a 
//                   href="/docs/Adeyemi_Mayowa_CV.pdf" 
//                   download
//                   className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors"
//                 >
//                   Download CV
//                 </a>
//                 <Link 
//                   href="/contact" 
//                   className="bg-white/10 text-white px-6 py-2 rounded-lg border border-white/20 hover:bg-white/20 transition-colors"
//                 >
//                   Get in Touch
//                 </Link>
//               </div>
//             </div>
//           </div>

//           <div className="bg-purple-600/10 border border-white/10 rounded-2xl p-6 md:p-8 mb-12">
//             <p className="text-sm uppercase tracking-wide text-purple-200 mb-2">Talks</p>
//             <h2 className="text-2xl font-semibold text-white mb-3">Graduation Speech</h2>
//             <p className="text-gray-200 mb-4">
//               Highlights, photos, and the full video from my graduation keynote—why storytelling and community matter in engineering leadership.
//             </p>
//             <div className="flex flex-wrap gap-3">
//               <Link
//                 href="/global-dev/conferences#graduation-speech-2025"
//                 className="bg-purple-600 text-white px-5 py-2 rounded-lg hover:bg-purple-700 transition-colors"
//               >
//                 Watch / View Details
//               </Link>
//               <Link
//                 href="/global-dev/conferences#talks"
//                 className="bg-white/10 text-white px-5 py-2 rounded-lg border border-white/20 hover:bg-white/20 transition-colors"
//               >
//                 See all talks
//               </Link>
//             </div>
//           </div>

//           <div className="mb-12">
//             <h2 className="text-2xl font-semibold text-white mb-6">Education</h2>
//             <div className="bg-white/5 rounded-xl p-6 border border-white/10">
//               <div className="flex justify-between items-start mb-2">
//                 <h3 className="text-xl font-medium text-white">FH Joanneum University of Applied Sciences</h3>
//                 <span className="text-purple-300">2023 – 2025</span>
//               </div>
//               <p className="text-gray-300 mb-2">MSc, System Test Engineering — Graduated with Highest Distinction (CGPA: 1.98)</p>
//               <p className="text-gray-400">
//                 <strong>Thesis:</strong> Deployment of PDL Flow Within the IC Development: A Unified Approach to Test Code Generation, Validation, and Traceability
//               </p>
//             </div>
//             <br>
//             </br>
//             <div className="bg-white/5 rounded-xl p-6 border border-white/10">
//               <div className="flex justify-between items-start mb-2">
//                 <h3 className="text-xl font-medium text-white">Ladoke Akintola University of Technology</h3>
//                 <span className="text-purple-300">2011 – 2017</span>
//               </div>
//               <p className="text-gray-300 mb-2">B.Tech, Computer Engineering — Graduated with Second Class </p>
//               <p className="text-gray-400">
//                 <strong>Thesis:</strong> IOT Liquid Level Monitoring System: Using Four Fuel Filling Station as a Model
//               </p>
//             </div>
//           </div>
          
//           <div>
//             <h2 className="text-2xl font-semibold text-white mb-6">Soft Skills</h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <div className="bg-white/5 rounded-xl p-4 border border-white/10">
//                 <h3 className="text-lg font-medium text-white mb-2">Technical Strengths</h3>
//                 <ul className="text-gray-300 space-y-1">
//                   <li>• Strong analytical and problem-solving abilities</li>
//                   <li>• Detail-oriented and proactive approach to tasks</li>
//                   <li>• Reporting and documenting test results and system behaviors</li>
//                 </ul>
//               </div>
//               <div className="bg-white/5 rounded-xl p-4 border border-white/10">
//                 <h3 className="text-lg font-medium text-white mb-2">Interpersonal Skills</h3>
//                 <ul className="text-gray-300 space-y-1">
//                   <li>• Excellent communication and teamwork skills</li>
//                   <li>• Cross-cultural communication and collaboration</li>
//                   <li>• Public speaking and training facilitation</li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// [page.tsx](http://_vscodecontentref_/1)
import Image from "next/image";
import Link from "next/link";

const focusAreas = [
  "System test strategy and validation infrastructure",
  "Automotive-grade quality workflows and compliance",
  "Cross-cultural workshop facilitation across Europe",
  "Mentorship for graduates and early-career professionals",
];

const technicalStrengths = [
  "Analytical problem-solving in complex validation systems",
  "Proactive test planning, reporting, and defect traceability",
  "Automated fixture and script design for repeatable testing",
];

const interpersonalStrengths = [
  "Clear communication across technical and non-technical teams",
  "Cross-cultural collaboration in international environments",
  "Public speaking, training, and mentorship facilitation",
];

export default function About() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_20%_20%,#0f172a_0%,#0b1220_45%,#05070d_100%)] text-white pt-16">
      <section className="relative overflow-hidden px-4 py-16 sm:py-20">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
          <div className="absolute top-24 -right-16 h-80 w-80 rounded-full bg-amber-500/20 blur-3xl" />
          <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-emerald-500/10 blur-3xl" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div className="rounded-3xl border border-white/15 bg-white/[0.04] p-5 backdrop-blur-sm">
              <div className="relative mx-auto h-72 w-full max-w-sm overflow-hidden rounded-2xl border border-white/20 sm:h-80">
                <Image
                  src="/images/headshot.jpg"
                  alt="Mayowa Adeyemi"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            <div>
              <p className="mb-4 inline-flex items-center rounded-full border border-white/20 bg-white/5 px-4 py-1 text-xs tracking-[0.2em] text-cyan-200 uppercase">
                About Mayowa
              </p>

              <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">
                Engineering rigor with global human impact
              </h1>

              <p className="mt-5 text-slate-300 sm:text-lg">
                I am a System Test Engineer with an MSc in System Test Engineering from FH Joanneum
                (Highest Distinction), with hands-on delivery in semiconductor IC validation and
                automotive-grade flexible sensor testing.
              </p>

              <p className="mt-4 text-slate-300 sm:text-lg">
                At FLEXOO GmbH, I develop test plans, automated fixtures, and validation infrastructure
                for flexible sensors in collaboration with requirement and test engineers at major automotive
                partners including Tesla and Forvia.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="/docs/Adeyemi_Mayowa_CV.pdf"
                  download
                  className="rounded-xl bg-cyan-500 px-6 py-3 font-medium text-slate-950 transition hover:bg-cyan-400"
                >
                  Download CV
                </a>
                <Link
                  href="/contact"
                  className="rounded-xl border border-white/25 bg-white/5 px-6 py-3 font-medium text-white transition hover:bg-white/10"
                >
                  Get in Touch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pb-12">
        <div className="mx-auto max-w-7xl rounded-2xl border border-white/15 bg-white/[0.03] p-6 sm:p-8">
          <p className="text-xs uppercase tracking-[0.2em] text-amber-200">Professional Focus</p>
          <h2 className="mt-2 text-2xl font-semibold sm:text-3xl">Where I create value</h2>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {focusAreas.map((item) => (
              <div
                key={item}
                className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-slate-200"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-12">
        <div className="mx-auto max-w-7xl rounded-2xl border border-amber-400/25 bg-gradient-to-b from-amber-500/10 to-transparent p-6 sm:p-8">
          <p className="text-xs uppercase tracking-[0.2em] text-amber-200">Talks and Presence</p>
          <h2 className="mt-2 text-2xl font-semibold sm:text-3xl">Graduation speech spotlight</h2>
          <p className="mt-3 max-w-3xl text-slate-200">
            Explore highlights, photos, and the full speech from my graduation keynote,
            focused on purposeful engineering, storytelling, and leadership through community.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/global-dev/conferences#graduation-speech-2025"
              className="rounded-lg bg-amber-400 px-5 py-2 font-medium text-slate-950 transition hover:bg-amber-300"
            >
              Watch and view details
            </Link>
            <Link
              href="/global-dev/conferences#talks"
              className="rounded-lg border border-white/20 bg-white/5 px-5 py-2 text-white transition hover:bg-white/10"
            >
              See all talks
            </Link>
          </div>
        </div>
      </section>

      <section className="px-4 pb-12">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-6 text-2xl font-semibold sm:text-3xl">Education</h2>

          <div className="grid gap-6 md:grid-cols-2">
            <article className="rounded-2xl border border-cyan-400/30 bg-gradient-to-b from-cyan-500/10 to-transparent p-6">
              <div className="mb-3 flex items-start justify-between gap-4">
                <h3 className="text-xl font-semibold">FH Joanneum University of Applied Sciences</h3>
                <span className="rounded-full border border-cyan-300/40 bg-cyan-500/10 px-3 py-1 text-sm text-cyan-200">
                  2023 - 2025
                </span>
              </div>
              <p className="text-slate-200">
                MSc, System Test Engineering - Graduated with Highest Distinction (CGPA: 1.98)
              </p>
              <p className="mt-3 text-slate-300">
                Thesis: Deployment of PDL Flow Within the IC Development: A Unified Approach to Test
                Code Generation, Validation, and Traceability
              </p>
            </article>

            <article className="rounded-2xl border border-emerald-400/30 bg-gradient-to-b from-emerald-500/10 to-transparent p-6">
              <div className="mb-3 flex items-start justify-between gap-4">
                <h3 className="text-xl font-semibold">Ladoke Akintola University of Technology</h3>
                <span className="rounded-full border border-emerald-300/40 bg-emerald-500/10 px-3 py-1 text-sm text-emerald-200">
                  2011 - 2017
                </span>
              </div>
              <p className="text-slate-200">
                B.Tech, Computer Engineering - Graduated with Second Class
              </p>
              <p className="mt-3 text-slate-300">
                Thesis: IoT Liquid Level Monitoring System Using Four Fuel Filling Stations as a Model
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="px-4 pb-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-6 text-2xl font-semibold sm:text-3xl">Professional Strengths</h2>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-white/15 bg-white/[0.03] p-6">
              <p className="text-xs uppercase tracking-[0.2em] text-cyan-200">Technical Strengths</p>
              <ul className="mt-4 space-y-3 text-slate-200">
                {technicalStrengths.map((item) => (
                  <li key={item} className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-white/15 bg-white/[0.03] p-6">
              <p className="text-xs uppercase tracking-[0.2em] text-emerald-200">Interpersonal Strengths</p>
              <ul className="mt-4 space-y-3 text-slate-200">
                {interpersonalStrengths.map((item) => (
                  <li key={item} className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}