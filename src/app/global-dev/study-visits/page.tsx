// import Link from 'next/link';

// const studyVisits = [
//   {
//     id: 'erasmus-graz-2025',
//     title: 'Erasmus+ Digital Pedagogy Training',
//     location: 'Graz, Austria',
//     date: '2025-03-10',
//     summary: 'Facilitated a module on practical assessment and peer-to-peer learning; gathered materials for adapting content to multilingual cohorts.',
//     media: {
//       videoUrl: '/docs/videos/erasmus-graz.mp4',
//       gallery: [
//         '/images/study-visits/erasmus-graz-1.jpg',
//         '/images/study-visits/erasmus-graz-2.jpg',
//         '/images/study-visits/erasmus-graz-3.jpg'
//       ],
//       resources: [
//         { label: 'Facilitation deck (PDF)', url: '/docs/study-visits/erasmus-graz-deck.pdf' },
//         { label: 'Workshop handout (PDF)', url: '/docs/study-visits/erasmus-graz-handout.pdf' }
//       ]
//     },
//     tags: ['Erasmus+', 'Digital Pedagogy', 'Facilitation']
//   },
//   {
//     id: 'study-visit-vienna-2024',
//     title: 'Study Visit: Inclusive STEM Education',
//     location: 'Vienna, Austria',
//     date: '2024-11-02',
//     summary: 'Observed inclusive classroom practices, captured notes on accessibility tooling, and co-led a micro-session on adaptive lab setups.',
//     media: {
//       videoUrl: '',
//       gallery: [
//         '/images/study-visits/vienna-1.jpg',
//         '/images/study-visits/vienna-2.jpg'
//       ],
//       resources: [
//         { label: 'Accessibility checklist (PDF)', url: '/docs/study-visits/vienna-accessibility.pdf' }
//       ]
//     },
//     tags: ['Study Visit', 'STEM', 'Accessibility']
//   },
//   {
//     id: 'erasmus-berlin-2024',
//     title: 'Erasmus+ Workshop: Project-Based Learning',
//     location: 'Berlin, Germany',
//     date: '2024-06-18',
//     summary: 'Ran a hands-on lab on project-based learning; collected peer artifacts and post-session reflections for reuse.',
//     media: {
//       videoUrl: '/docs/videos/erasmus-berlin.mp4',
//       gallery: [
//         '/images/study-visits/berlin-1.jpg',
//         '/images/study-visits/berlin-2.jpg'
//       ],
//       resources: [
//         { label: 'PBL lab guide (PDF)', url: '/docs/study-visits/berlin-pbl-guide.pdf' }
//       ]
//     },
//     tags: ['Erasmus+', 'PBL', 'Workshops']
//   }
// ];

// export default function StudyVisits() {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 pt-16">
//       <div className="max-w-6xl mx-auto px-4 py-12">
//         <div className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-8 md:p-12">
//           <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 mb-6">
//             <div>
//               <p className="text-sm uppercase tracking-wide text-blue-200">Global Development</p>
//               <h1 className="text-3xl font-bold text-white">Study Visits & Erasmus Trainings</h1>
//               <p className="text-gray-300 mt-2 max-w-2xl">
//                 A log of Erasmus+ mobilities, study visits, and related trips—each with photos, videos, and the materials produced during the engagements.
//               </p>
//             </div>
//             <Link
//               href="/global-dev"
//               className="text-blue-300 hover:text-blue-200 inline-flex items-center"
//             >
//               Back to Global Development
//               <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
//               </svg>
//             </Link>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             {studyVisits.map((visit) => (
//               <div
//                 key={visit.id}
//                 className="bg-white/5 rounded-2xl border border-white/10 p-6 flex flex-col justify-between"
//               >
//                 <div>
//                   <div className="flex items-center justify-between mb-2">
//                     <span className="text-xs uppercase tracking-wide text-blue-200">{visit.location}</span>
//                     <span className="text-xs text-gray-400">{new Date(visit.date).toLocaleDateString()}</span>
//                   </div>
//                   <h2 className="text-xl font-semibold text-white mb-2">{visit.title}</h2>
//                   <p className="text-gray-300 mb-3">{visit.summary}</p>
//                   <div className="flex flex-wrap gap-2 mb-4">
//                     {visit.tags.map((tag) => (
//                       <span
//                         key={tag}
//                         className="bg-blue-600/20 text-blue-200 text-xs px-2 py-1 rounded-full"
//                       >
//                         {tag}
//                       </span>
//                     ))}
//                   </div>
//                 </div>

//                 <div className="space-y-2">
//                   {visit.media.videoUrl && (
//                     <a
//                       href={visit.media.videoUrl}
//                       className="w-full inline-flex items-center justify-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
//                       target="_blank"
//                       rel="noopener noreferrer"
//                     >
//                       <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
//                       </svg>
//                       Watch video
//                     </a>
//                   )}

//                   {visit.media.gallery.length > 0 && (
//                     <div className="flex items-center gap-2 text-gray-200">
//                       <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
//                       </svg>
//                       <span>{visit.media.gallery.length} photos</span>
//                     </div>
//                   )}

//                   {visit.media.resources.length > 0 && (
//                     <div className="space-y-1">
//                       {visit.media.resources.map((res) => (
//                         <a
//                           key={res.url}
//                           href={res.url}
//                           className="block text-blue-300 hover:text-blue-200"
//                           target="_blank"
//                           rel="noopener noreferrer"
//                         >
//                           {res.label}
//                         </a>
//                       ))}
//                     </div>
//                   )}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// src/app/global-dev/study-visits/page.tsx
'use client';

import Link from 'next/link';

const studyVisits = [
  {
    id: 'erasmus-graz-2025',
    title: 'Erasmus+ Digital Pedagogy Training',
    location: 'Graz, Austria',
    date: '2025-03-10',
    summary: 'Facilitated a module on practical assessment and peer-to-peer learning; gathered materials for adapting content to multilingual cohorts.',
    media: {
      videoUrl: '/docs/videos/erasmus-graz.mp4',
      gallery: [
        '/images/study-visits/erasmus-graz-1.jpg',
        '/images/study-visits/erasmus-graz-2.jpg',
        '/images/study-visits/erasmus-graz-3.jpg'
      ],
      resources: [
        { label: 'Facilitation deck (PDF)', url: '/docs/study-visits/erasmus-graz-deck.pdf' },
        { label: 'Workshop handout (PDF)', url: '/docs/study-visits/erasmus-graz-handout.pdf' }
      ]
    },
    tags: ['Erasmus+', 'Digital Pedagogy', 'Facilitation']
  },
  {
    id: 'study-visit-vienna-2024',
    title: 'Study Visit: Inclusive STEM Education',
    location: 'Vienna, Austria',
    date: '2024-11-02',
    summary: 'Observed inclusive classroom practices, captured notes on accessibility tooling, and co-led a micro-session on adaptive lab setups.',
    media: {
      videoUrl: '',
      gallery: [
        '/images/study-visits/vienna-1.jpg',
        '/images/study-visits/vienna-2.jpg'
      ],
      resources: [
        { label: 'Accessibility checklist (PDF)', url: '/docs/study-visits/vienna-accessibility.pdf' }
      ]
    },
    tags: ['Study Visit', 'STEM', 'Accessibility']
  },
  {
    id: 'erasmus-berlin-2024',
    title: 'Erasmus+ Workshop: Project-Based Learning',
    location: 'Berlin, Germany',
    date: '2024-06-18',
    summary: 'Ran a hands-on lab on project-based learning; collected peer artifacts and post-session reflections for reuse.',
    media: {
      videoUrl: '/docs/videos/erasmus-berlin.mp4',
      gallery: [
        '/images/study-visits/berlin-1.jpg',
        '/images/study-visits/berlin-2.jpg'
      ],
      resources: [
        { label: 'PBL lab guide (PDF)', url: '/docs/study-visits/berlin-pbl-guide.pdf' }
      ]
    },
    tags: ['Erasmus+', 'PBL', 'Workshops']
  }
];

// Helper function to format dates consistently
const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
};

export default function StudyVisitsPage() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_20%_20%,#0f172a_0%,#0b1220_45%,#05070d_100%)] text-white pt-16">
      {/* Background Glows */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute top-24 -right-16 h-80 w-80 rounded-full bg-emerald-500/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-amber-500/10 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-12">
        <div className="rounded-2xl border border-white/15 bg-white/[0.04] backdrop-blur-sm p-6 sm:p-8">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 mb-8">
            <div>
              <p className="mb-2 inline-flex items-center rounded-full border border-white/20 bg-white/5 px-4 py-1 text-xs tracking-[0.2em] text-blue-200 uppercase">
                Global Development
              </p>
              <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl">
                Study Visits & Erasmus Trainings
              </h1>
              <p className="mt-3 text-slate-300 max-w-2xl">
                A log of Erasmus+ mobilities, study visits, and related trips—each with photos, videos, and the materials produced during the engagements.
              </p>
            </div>
            <Link
              href="/global-dev"
              className="inline-flex items-center rounded-lg border border-white/20 bg-white/5 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-white/10 flex-shrink-0"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Global Dev
            </Link>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
            <div className="rounded-xl border border-white/15 bg-white/[0.03] p-4 text-center">
              <div className="text-2xl font-bold text-blue-300">{studyVisits.length}</div>
              <div className="text-sm text-slate-400">Total Visits</div>
            </div>
            <div className="rounded-xl border border-white/15 bg-white/[0.03] p-4 text-center">
              <div className="text-2xl font-bold text-emerald-300">
                {studyVisits.filter(v => v.media.videoUrl).length}
              </div>
              <div className="text-sm text-slate-400">Videos Available</div>
            </div>
            <div className="rounded-xl border border-white/15 bg-white/[0.03] p-4 text-center">
              <div className="text-2xl font-bold text-amber-300">
                {studyVisits.reduce((acc, v) => acc + v.media.gallery.length, 0)}
              </div>
              <div className="text-sm text-slate-400">Photos</div>
            </div>
          </div>

          {/* Study Visits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {studyVisits.map((visit) => (
              <div
                key={visit.id}
                className="rounded-2xl border border-white/15 bg-white/[0.04] backdrop-blur-sm p-6 transition hover:border-white/25 hover:translate-y-[-2px] flex flex-col"
              >
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <span className="inline-flex h-2 w-2 rounded-full bg-blue-400"></span>
                      <span className="text-xs font-medium text-blue-200">{visit.location}</span>
                    </div>
                    <span className="text-xs text-slate-400">{formatDate(visit.date)}</span>
                  </div>
                  
                  <h2 className="text-xl font-semibold text-white mb-3">{visit.title}</h2>
                  
                  <p className="text-slate-300 text-sm mb-4 line-clamp-3">{visit.summary}</p>
                  
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {visit.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-blue-600/20 text-blue-300 text-xs px-2.5 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-2 mt-2">
                  {/* Media Info */}
                  <div className="flex flex-wrap gap-4 text-sm text-slate-400">
                    {visit.media.videoUrl && (
                      <span className="flex items-center gap-1.5">
                        <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Video
                      </span>
                    )}
                    {visit.media.gallery.length > 0 && (
                      <span className="flex items-center gap-1.5">
                        <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {visit.media.gallery.length} photos
                      </span>
                    )}
                    {visit.media.resources.length > 0 && (
                      <span className="flex items-center gap-1.5">
                        <svg className="w-4 h-4 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        {visit.media.resources.length} resources
                      </span>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-2 pt-2 border-t border-white/10">
                    {visit.media.videoUrl && (
                      <a
                        href={visit.media.videoUrl}
                        className="inline-flex items-center rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                        </svg>
                        Watch
                      </a>
                    )}

                    {visit.media.gallery.length > 0 && (
                      <button
                        className="inline-flex items-center rounded-lg border border-white/20 bg-white/5 px-4 py-2 text-sm text-white transition hover:bg-white/10"
                      >
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        View Gallery
                      </button>
                    )}

                    {visit.media.resources.length > 0 && (
                      <div className="flex flex-wrap gap-1">
                        {visit.media.resources.map((res) => (
                          <a
                            key={res.url}
                            href={res.url}
                            className="inline-flex items-center rounded-lg border border-white/20 bg-white/5 px-3 py-1.5 text-xs text-white transition hover:bg-white/10"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <svg className="w-3 h-3 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            {res.label.replace(/ \(PDF\)$/, '')}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Back to Global Dev (mobile) */}
          <div className="mt-8 text-center md:hidden">
            <Link
              href="/global-dev"
              className="inline-flex items-center rounded-lg border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Global Development
            </Link>
          </div>

          {/* Call to Action */}
          <div className="mt-8 rounded-2xl border border-amber-400/25 bg-gradient-to-b from-amber-500/10 to-transparent p-6 sm:p-8 text-center">
            <p className="text-xs uppercase tracking-[0.2em] text-amber-200 mb-2">Interested</p>
            <h2 className="text-2xl font-semibold text-white mb-3">Want to collaborate on an Erasmus+ project?</h2>
            <p className="text-slate-300 max-w-2xl mx-auto mb-6">
              I'm always open to new opportunities for knowledge exchange and international collaboration.
            </p>
            <Link 
              href="/contact" 
              className="inline-flex items-center rounded-lg bg-amber-400 px-6 py-3 font-medium text-slate-950 transition hover:bg-amber-300"
            >
              Get In Touch
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}