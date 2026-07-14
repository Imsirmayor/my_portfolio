// src/app/about/page.tsx
import Image from 'next/image';
import Link from 'next/link';

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-16">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-8 md:p-12">
          <h1 className="text-4xl font-bold text-white mb-8">About Me</h1>
          
          <div className="flex flex-col md:flex-row gap-8 mb-12">
            <div className="md:w-1/3">
              <div className="w-64 h-64 mx-auto md:mx-0 relative">
                <Image
                  src="/images/headshot.jpg"
                  alt="Mayowa Adeyemi"
                  fill
                  className="rounded-2xl object-cover border-4 border-white/20"
                />
              </div>
            </div>
            
            <div className="md:w-2/3">
              <h2 className="text-2xl font-semibold text-white mb-4">My Journey</h2>
              <p className="text-gray-300 mb-6">
                Test Engineer with an MSc in System Test Engineering (Highest Distinction, FH-Joanneum) and hands-on experience spanning semiconductor IC validation and automotive-grade flexible sensor testing. Currently developing test plans, automated test fixture, and validation infrastructure for flexible sensors at FLEXOO GmbH, working directly with test and requirements engineers at automotive partners including Tesla and Forvia. Delivered a master's thesis at AMS-OSRAM that automated test code generation using PDL, Python, and Jinja cutting test program development time from roughly two weeks to under five seconds. Skilled in test plan development (DV/PV), automated test fixture and script design, DAQ/sensor system integration, root-cause failure analysis, and compliance with automotive quality standards (IATF 16949).
              </p>
              <p className="text-gray-300 mb-6">
                What drives me is the intersection of technology and human impact. While I excel at creating robust test systems and automation frameworks, I'm equally passionate about using technology to empower communities and mentor the next generation of professionals.
              </p>
              <div className="flex gap-4">
                <a 
                  href="/docs/Adeyemi_Mayowa_CV.pdf" 
                  download
                  className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors"
                >
                  Download CV
                </a>
                <Link 
                  href="/contact" 
                  className="bg-white/10 text-white px-6 py-2 rounded-lg border border-white/20 hover:bg-white/20 transition-colors"
                >
                  Get in Touch
                </Link>
              </div>
            </div>
          </div>

          <div className="bg-purple-600/10 border border-white/10 rounded-2xl p-6 md:p-8 mb-12">
            <p className="text-sm uppercase tracking-wide text-purple-200 mb-2">Talks</p>
            <h2 className="text-2xl font-semibold text-white mb-3">Graduation Speech</h2>
            <p className="text-gray-200 mb-4">
              Highlights, photos, and the full video from my graduation keynote—why storytelling and community matter in engineering leadership.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/global-dev/conferences#graduation-speech-2025"
                className="bg-purple-600 text-white px-5 py-2 rounded-lg hover:bg-purple-700 transition-colors"
              >
                Watch / View Details
              </Link>
              <Link
                href="/global-dev/conferences#talks"
                className="bg-white/10 text-white px-5 py-2 rounded-lg border border-white/20 hover:bg-white/20 transition-colors"
              >
                See all talks
              </Link>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-white mb-6">Education</h2>
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-medium text-white">FH Joanneum University of Applied Sciences</h3>
                <span className="text-purple-300">2023 – 2025</span>
              </div>
              <p className="text-gray-300 mb-2">MSc, System Test Engineering — Graduated with Highest Distinction (CGPA: 1.98)</p>
              <p className="text-gray-400">
                <strong>Thesis:</strong> Deployment of PDL Flow Within the IC Development: A Unified Approach to Test Code Generation, Validation, and Traceability
              </p>
            </div>
            <br>
            </br>
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-medium text-white">Ladoke Akintola University of Technology</h3>
                <span className="text-purple-300">2011 – 2017</span>
              </div>
              <p className="text-gray-300 mb-2">B.Tech, Computer Engineering — Graduated with Second Class </p>
              <p className="text-gray-400">
                <strong>Thesis:</strong> IOT Liquid Level Monitoring System: Using Four Fuel Filling Station as a Model
              </p>
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold text-white mb-6">Soft Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                <h3 className="text-lg font-medium text-white mb-2">Technical Strengths</h3>
                <ul className="text-gray-300 space-y-1">
                  <li>• Strong analytical and problem-solving abilities</li>
                  <li>• Detail-oriented and proactive approach to tasks</li>
                  <li>• Reporting and documenting test results and system behaviors</li>
                </ul>
              </div>
              <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                <h3 className="text-lg font-medium text-white mb-2">Interpersonal Skills</h3>
                <ul className="text-gray-300 space-y-1">
                  <li>• Excellent communication and teamwork skills</li>
                  <li>• Cross-cultural communication and collaboration</li>
                  <li>• Public speaking and training facilitation</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}