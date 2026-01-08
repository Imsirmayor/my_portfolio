import Link from 'next/link';

export default function Mentorship() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900 pt-16">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-8 md:p-12">
          <h1 className="text-4xl font-bold text-white mb-8">Mentorship</h1>
          
          <p className="text-gray-300 mb-12 max-w-3xl">
            I am passionate about guiding the next generation of professionals through structured mentorship programs. 
            My approach combines technical knowledge with career development strategies to help young graduates navigate their professional journeys.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Link 
              href="/mentorship/gmi" 
              className="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-white/20 transition-colors group"
            >
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h2 className="text-xl font-semibold text-white mb-2 group-hover:text-green-300 transition-colors">Global Mentorship Initiative</h2>
              <p className="text-gray-300">
                Learn about my role in mentoring young graduates through structured programs and career guidance.
              </p>
            </Link>
            
            <Link 
              href="/mentorship/grp" 
              className="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-white/20 transition-colors group"
            >
              <div className="w-12 h-12 bg-teal-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h2 className="text-xl font-semibold text-white mb-2 group-hover:text-teal-300 transition-colors">GRP-European Digital Education Hub</h2>
              <p className="text-gray-300">
                Discover my contributions to digital education initiatives and European collaboration projects.
              </p>
            </Link>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold text-white mb-6">Mentorship Philosophy</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <h3 className="text-lg font-medium text-white mb-2">Technical Guidance</h3>
                <p className="text-gray-300">
                  Providing hands-on technical mentorship in system test engineering, automation frameworks, and validation methodologies.
                </p>
              </div>
              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <h3 className="text-lg font-medium text-white mb-2">Career Development</h3>
                <p className="text-gray-300">
                  Helping mentees navigate career choices, interview preparation, and professional growth in the tech industry.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}