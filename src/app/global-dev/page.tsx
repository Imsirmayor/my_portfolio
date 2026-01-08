import Link from 'next/link';

export default function GlobalDev() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 pt-16">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-8 md:p-12">
          <h1 className="text-4xl font-bold text-white mb-8">Global Development</h1>
          
          <p className="text-gray-300 mb-12 max-w-3xl">
            My work in global development focuses on EU-funded projects, NGO initiatives, and international workshops. 
            I combine technical expertise with cross-cultural communication to deliver impactful training and program assistance across Europe.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Link 
              href="/global-dev/ngo" 
              className="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-white/20 transition-colors group"
            >
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-4 0H9m4 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v12m4 0V9m0 12h2m-2 0h4m0 0h2m-2 0v-4m0 4v-4m0 0h-4m4 0v-4m0 4v-4" />
                </svg>
              </div>
              <h2 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-300 transition-colors">NGO Work & EU Projects</h2>
              <p className="text-gray-300">
                Explore my role as a Project and Program Assistant for NGO organizations and EU-funded initiatives.
              </p>
            </Link>
            
            <Link 
              href="/global-dev/conferences" 
              className="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-white/20 transition-colors group"
            >
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                </svg>
              </div>
              <h2 className="text-xl font-semibold text-white mb-2 group-hover:text-green-300 transition-colors">Conferences & Workshops</h2>
              <p className="text-gray-300">
                Browse photos and details from international conferences, seminars, and training workshops I've conducted.
              </p>
            </Link>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold text-white mb-6">Global Development Highlights</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <h3 className="text-lg font-medium text-white mb-2">Study Visits & Erasmus Trainings</h3>
                <p className="text-gray-300 mb-4">
                  Field visits, Erasmus+ trainings, and exchange trips where I delivered workshops, collaborated with partner institutions, and documented best practices.
                </p>
                <Link
                  href="/global-dev/study-visits"
                  className="inline-flex items-center text-blue-300 hover:text-blue-200 font-medium"
                >
                  View study visits & outputs
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <h3 className="text-lg font-medium text-white mb-2">International Workshops</h3>
                <p className="text-gray-300">
                  Designed and delivered technical workshops and training sessions across multiple European countries, adapting content for diverse audiences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}