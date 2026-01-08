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

export default function StudyVisits() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 pt-16">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-8 md:p-12">
          <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 mb-6">
            <div>
              <p className="text-sm uppercase tracking-wide text-blue-200">Global Development</p>
              <h1 className="text-3xl font-bold text-white">Study Visits & Erasmus Trainings</h1>
              <p className="text-gray-300 mt-2 max-w-2xl">
                A log of Erasmus+ mobilities, study visits, and related trips—each with photos, videos, and the materials produced during the engagements.
              </p>
            </div>
            <Link
              href="/global-dev"
              className="text-blue-300 hover:text-blue-200 inline-flex items-center"
            >
              Back to Global Development
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {studyVisits.map((visit) => (
              <div
                key={visit.id}
                className="bg-white/5 rounded-2xl border border-white/10 p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs uppercase tracking-wide text-blue-200">{visit.location}</span>
                    <span className="text-xs text-gray-400">{new Date(visit.date).toLocaleDateString()}</span>
                  </div>
                  <h2 className="text-xl font-semibold text-white mb-2">{visit.title}</h2>
                  <p className="text-gray-300 mb-3">{visit.summary}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {visit.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-blue-600/20 text-blue-200 text-xs px-2 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  {visit.media.videoUrl && (
                    <a
                      href={visit.media.videoUrl}
                      className="w-full inline-flex items-center justify-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Watch video
                    </a>
                  )}

                  {visit.media.gallery.length > 0 && (
                    <div className="flex items-center gap-2 text-gray-200">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span>{visit.media.gallery.length} photos</span>
                    </div>
                  )}

                  {visit.media.resources.length > 0 && (
                    <div className="space-y-1">
                      {visit.media.resources.map((res) => (
                        <a
                          key={res.url}
                          href={res.url}
                          className="block text-blue-300 hover:text-blue-200"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {res.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
