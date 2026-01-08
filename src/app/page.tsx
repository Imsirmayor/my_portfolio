// src/app/page.tsx
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 pt-24">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <div className="mb-8 w-48 h-48 mx-auto relative">
            <Image
              src="/images/headshot.jpg"
              alt="Mayowa Adeyemi"
              fill
              className="rounded-full object-cover border-4 border-white/20 shadow-2xl"
              priority
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Mayowa Adeyemi
          </h1>
          <p className="text-xl md:text-2xl text-purple-200 mb-8">
            System Test Engineer & Global Development Practitioner
          </p>
          <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto">
            A Master&apos;s-educated System Test Engineer crafting robust systems, who also travels globally to lead workshops and mentor the next generation of professionals through EU-funded initiatives.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/engineering" 
              className="bg-white/10 backdrop-blur-md text-white px-8 py-3 rounded-lg border border-white/20 hover:bg-white/20 transition-colors"
            >
              View My Work
            </Link>
            <Link 
              href="/about" 
              className="bg-purple-600/70 backdrop-blur-md text-white px-8 py-3 rounded-lg border border-purple-400/30 hover:bg-purple-600 transition-colors"
            >
              About Me
            </Link>
          </div>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Professional Pillars
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Engineering Pillar */}
            <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 hover:border-white/20 transition-colors">
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Engineering</h3>
              <p className="text-gray-300 mb-4">
                Expertise in system test engineering, IC validation, and test automation with Python, PDL, and C++.
              </p>
              <Link 
                href="/engineering" 
                className="text-purple-400 hover:text-purple-300 font-medium flex items-center"
              >
                Explore Engineering
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            
            {/* Global Dev Pillar */}
            <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 hover:border-white/20 transition-colors">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Global Development</h3>
              <p className="text-gray-300 mb-4">
                Project and program assistance for NGO organizations, delivering workshops and training across Europe.
              </p>
              <Link 
                href="/global-dev" 
                className="text-blue-400 hover:text-blue-300 font-medium flex items-center"
              >
                Explore Global Work
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            
            {/* Mentorship Pillar */}
            <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 hover:border-white/20 transition-colors">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Mentorship</h3>
              <p className="text-gray-300 mb-4">
                Mentoring young graduates through the Global Mentorship Initiative and contributing to the GRP-European Digital Education Hub.
              </p>
              <Link 
                href="/mentorship" 
                className="text-green-400 hover:text-green-300 font-medium flex items-center"
              >
                Explore Mentorship
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}