// src/app/mentorship/gmi/page.tsx
'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Mentorship program data
const programs = [
  {
    id: 1,
    title: "Study Abroad Guidance",
    description: "Comprehensive support for students planning to study internationally, covering university selection, application processes, and cultural adaptation.",
    icon: "M12 14l9-5-9-5-9 5 9 5z M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222",
    stats: "120+ Students Guided",
    highlights: [
      "University selection strategy",
      "Application document preparation",
      "Scholarship opportunities",
      "Visa process guidance",
      "Cultural adaptation tips"
    ]
  },
  {
    id: 2,
    title: "Career Path Selection",
    description: "Helping graduates identify their strengths, interests, and values to make informed decisions about their professional future.",
    icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2 M12 12h.01 M12 15h.01 M12 18h.01",
    stats: "80+ Career Plans Developed",
    highlights: [
      "Skills and aptitude assessment",
      "Industry research guidance",
      "Career path mapping",
      "Personality-career fit analysis",
      "Long-term career visioning"
    ]
  },
  {
    id: 3,
    title: "Job Search Strategy",
    description: "Practical guidance on job hunting, from resume crafting to interview techniques and negotiation skills.",
    icon: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
    stats: "200+ Resumes Reviewed",
    highlights: [
      "Resume and cover letter optimization",
      "LinkedIn profile enhancement",
      "Interview preparation techniques",
      "Job search strategy development",
      "Salary negotiation guidance"
    ]
  },
  {
    id: 4,
    title: "Professional Networking",
    description: "Teaching the art of building meaningful professional relationships that can open doors to opportunities.",
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
    stats: "50+ Networking Events",
    highlights: [
      "Effective networking strategies",
      "Professional online presence",
      "Informational interview techniques",
      "Industry event participation",
      "Relationship maintenance"
    ]
  }
];

// Testimonials
const testimonials = [
  {
    id: 1,
    name: "Alexandra K.",
    role: "Master's Student in Germany",
    content: "Mayowa's guidance was instrumental in my successful application to German universities. His insights on cultural adaptation made my transition much smoother.",
    image: "/images/mentorship/alexandra.jpg"
  },
  {
    id: 2,
    name: "David T.",
    role: "Software Engineer at Tech Company",
    content: "The career counseling I received helped me identify my strengths and find a role that truly matches my skills and interests. The interview preparation was invaluable!",
    image: "/images/mentorship/david.jpg"
  },
  {
    id: 3,
    name: "Sophia M.",
    role: "Research Assistant in Austria",
    content: "As an international student, navigating the job market was daunting. The mentorship program gave me the confidence and strategies to secure my dream position.",
    image: "/images/mentorship/sophia.jpg"
  }
];

// Resources
const resources = [
  {
    title: "Study Abroad Checklist",
    description: "Comprehensive checklist for students planning to study internationally",
    link: "/resources/study-abroad-checklist.pdf",
    type: "pdf"
  },
  {
    title: "Career Assessment Template",
    description: "Framework for evaluating skills, interests, and career options",
    link: "/resources/career-assessment-template.pdf",
    type: "pdf"
  },
  {
    title: "Interview Preparation Guide",
    description: "Step-by-step guide to preparing for technical and behavioral interviews",
    link: "/resources/interview-preparation-guide.pdf",
    type: "pdf"
  },
  {
    title: "Networking Strategy Workbook",
    description: "Exercises to build and maintain professional networks",
    link: "/resources/networking-workbook.pdf",
    type: "pdf"
  }
];

export default function GlobalMentorshipInitiative() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900 pt-16">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Header Section */}
        <div className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-8 mb-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Global Mentorship Initiative</h1>
          <p className="text-xl text-green-200 mb-6">Guiding the next generation of professionals through education and career challenges</p>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Through the Global Mentorship Initiative, I volunteer my time and expertise to help young graduates navigate 
            educational opportunities abroad, make informed career choices, and successfully transition into the professional world.
          </p>
        </div>

        {/* Mentorship Approach */}
        <div className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-8 mb-8">
          <h2 className="text-2xl font-semibold text-white mb-6">My Mentorship Approach</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-medium text-white mb-3">Personalized Guidance</h3>
              <p className="text-gray-300 mb-6">
                Every individual has unique strengths, challenges, and aspirations. I provide tailored advice that considers 
                each mentee's specific circumstances, helping them develop strategies that align with their personal and professional goals.
              </p>
              
              <h3 className="text-lg font-medium text-white mb-3">Holistic Development</h3>
              <p className="text-gray-300">
                Beyond academic and career advice, I focus on developing well-rounded professionals equipped with 
                the soft skills, cultural intelligence, and resilience needed to thrive in global environments.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-medium text-white mb-3">Structured Programs</h3>
              <p className="text-gray-300 mb-6">
                I've developed structured mentorship programs with clear objectives, milestones, and outcomes. 
                These programs provide a framework for progress while allowing flexibility for individual needs.
              </p>
              
              <h3 className="text-lg font-medium text-white mb-3">Long-term Support</h3>
              <p className="text-gray-300">
                Mentorship doesn't end with a single consultation. I maintain ongoing relationships with mentees, 
                providing continued support as they navigate new challenges and opportunities throughout their journey.
              </p>
            </div>
          </div>
        </div>

        {/* Mentorship Programs */}
        <div className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-8 mb-8">
          <h2 className="text-2xl font-semibold text-white mb-6 text-center">Mentorship Programs</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {programs.map((program) => (
              <div key={program.id} className="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-white/20 transition-colors">
                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={program.icon} />
                  </svg>
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-2">{program.title}</h3>
                <p className="text-gray-300 mb-4">{program.description}</p>
                
                <div className="bg-green-600/20 text-green-300 text-sm px-3 py-1 rounded-full inline-block mb-4">
                  {program.stats}
                </div>
                
                <h4 className="text-md font-medium text-white mb-2">Key Focus Areas:</h4>
                <ul className="space-y-1">
                  {program.highlights.map((highlight, index) => (
                    <li key={index} className="text-gray-300 flex items-start">
                      <svg className="w-4 h-4 text-green-400 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Success Stories */}
        <div className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-8 mb-8">
          <h2 className="text-2xl font-semibold text-white mb-6 text-center">Success Stories</h2>
          
          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={testimonial.id} 
                  className={`bg-white/5 rounded-xl p-6 border transition-all duration-300 ${index === activeTestimonial ? 'border-green-500 scale-105' : 'border-white/10 opacity-80'}`}
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-white">{testimonial.name}</h4>
                      <p className="text-green-300 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-300 italic">"{testimonial.content}"</p>
                </div>
              ))}
            </div>
            
            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full ${index === activeTestimonial ? 'bg-green-500' : 'bg-white/30'}`}
                  aria-label={`View testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Mentorship Impact */}
        <div className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-8 mb-8">
          <h2 className="text-2xl font-semibold text-white mb-6 text-center">Mentorship Impact</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="bg-green-600/20 rounded-xl p-4 border border-green-500/30">
              <div className="text-3xl font-bold text-white">50+</div>
              <div className="text-green-300">Mentees Supported</div>
            </div>
            <div className="bg-green-600/20 rounded-xl p-4 border border-green-500/30">
              <div className="text-3xl font-bold text-white">15+</div>
              <div className="text-green-300">Countries Represented</div>
            </div>
            <div className="bg-green-600/20 rounded-xl p-4 border border-green-500/30">
              <div className="text-3xl font-bold text-white">85%</div>
              <div className="text-green-300">Success Rate</div>
            </div>
            <div className="bg-green-600/20 rounded-xl p-4 border border-green-500/30">
              <div className="text-3xl font-bold text-white">200+</div>
              <div className="text-green-300">Hours Volunteered</div>
            </div>
          </div>
        </div>

        {/* Resources Section */}
        <div className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-8 mb-8">
          <h2 className="text-2xl font-semibold text-white mb-6">Mentorship Resources</h2>
          <p className="text-gray-300 mb-6">
            I've developed various resources to support mentees in their educational and professional journeys. 
            These materials are based on proven strategies and real-world experience.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {resources.map((resource, index) => (
              <a
                key={index}
                href={resource.link}
                className="bg-white/5 rounded-lg p-4 border border-white/10 hover:border-green-500/30 transition-colors flex items-start"
              >
                <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white mb-1">{resource.title}</h3>
                  <p className="text-gray-300 text-sm">{resource.description}</p>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Get Involved */}
        <div className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-8 text-center">
          <h2 className="text-2xl font-semibold text-white mb-4">Interested in Mentorship?</h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Whether you're a student considering studying abroad, a recent graduate navigating career choices, 
            or a professional looking for guidance, I'm here to help you achieve your goals.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="mailto:mayowa.adeyemi@edu.fh-joanneum.at"
              className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
            >
              Request Mentorship
            </a>
            <a 
              href="https://globalmentorship.org"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 text-white px-6 py-3 rounded-lg border border-white/20 hover:bg-white/20 transition-colors"
            >
              Learn About GMI
            </a>
            <Link 
              href="/mentorship"
              className="bg-white/10 text-white px-6 py-3 rounded-lg border border-white/20 hover:bg-white/20 transition-colors"
            >
              Back to Mentorship
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}