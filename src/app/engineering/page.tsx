// src/app/engineering/page.tsx
import Link from 'next/link';

export default function Engineering() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-16">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-8 md:p-12">
          <h1 className="text-4xl font-bold text-white mb-8">Engineering</h1>
          
          <p className="text-gray-300 mb-12 max-w-3xl">
            My expertise spans system test engineering, IC validation, and test automation. I specialize in developing Python-based validation environments, hardware/software integration, and translating procedural test flows into deployable C++ code on ATE systems.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Link 
              href="/engineering/experience" 
              className="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-white/20 transition-colors group"
            >
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h2 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors">Experience & Projects</h2>
              <p className="text-gray-300">
                Explore my professional journey, key projects, and technical achievements in system test engineering and validation.
              </p>
            </Link>
            
            <Link 
              href="/engineering/tools" 
              className="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-white/20 transition-colors group"
            >
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h2 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-300 transition-colors">Tools & Technologies</h2>
              <p className="text-gray-300">
                Discover the technical tools, languages, and frameworks I use to develop robust testing solutions and automation systems.
              </p>
            </Link>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold text-white mb-6">Technical Highlights</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <h3 className="text-lg font-medium text-white mb-2">Test Automation</h3>
                <p className="text-gray-300">
                  Developed Python-based automation frameworks for IC validation, reducing manual effort and improving traceability in testing workflows.
                </p>
              </div>
              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <h3 className="text-lg font-medium text-white mb-2">Hardware/Software Integration</h3>
                <p className="text-gray-300">
                  Experienced in integrating test sequences into automated testing frameworks and configuring lab test benches for IC validation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}