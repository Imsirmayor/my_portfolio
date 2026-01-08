// src/app/global-dev/ngo/page.tsx
'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Project data
const projects = [
  {
    id: 1,
    title: "Introducing UPLAYS: Supporting Ukrainian Youth",
    description: "A comprehensive program supporting Ukrainian youth through sports, language acquisition, and job readiness training to facilitate integration and personal development.",
    image: "/images/ukrainian-youth.jpg",
    details: "/global-dev/ngo/uplays",
    externalLink: "https://activeaustria.org/uplays",
    category: "Youth Development",
    impact: "150+ youth supported, 80% showing improved language skills and social integration"
  },
  {
    id: 2,
    title: "Sailing Women's Initiative for Sport and Empowerment",
    description: "Empowering women through sailing programs that build confidence, leadership skills, and foster cross-cultural connections in a supportive environment.",
    image: "/images/sailing-women.jpg",
    details: "/global-dev/ngo/sailing-women",
    externalLink: "https://activeaustria.org/sailing-women",
    category: "Women Empowerment",
    impact: "200+ women participants, 12 certified sailing instructors from diverse backgrounds"
  },
  {
    id: 3,
    title: "SportWay – Sport Play",
    description: "Community sports initiative that brings people together through recreational activities, promoting health, intercultural dialogue, and active citizenship.",
    image: "/images/sportway.jpg",
    details: "/global-dev/ngo/sportway",
    externalLink: "https://activeaustria.org/sportway",
    category: "Community Sports",
    impact: "50+ community events, 1000+ participants from 30+ nationalities"
  },
  {
    id: 4,
    title: "Intercultural Fitness Festival",
    description: "Annual festival celebrating diversity through sports, dance, and wellness activities that bring together communities from different cultural backgrounds.",
    image: "/images/fitness-festival.jpg",
    details: "/global-dev/ngo/fitness-festival",
    externalLink: "https://activeaustria.org/fitness-festival",
    category: "Cultural Exchange",
    impact: "Annual event with 500+ participants, 20+ cultural organizations involved"
  },
  {
    id: 5,
    title: "Active Aging Program",
    description: "Initiative promoting physical activity and social connection among seniors to improve quality of life and combat social isolation.",
    image: "/images/active-aging.jpg",
    details: "/global-dev/ngo/active-aging",
    externalLink: "https://activeaustria.org/active-aging",
    category: "Senior Wellness",
    impact: "12 community centers involved, 300+ senior participants weekly"
  },
  {
    id: 6,
    title: "Green Sports Initiative",
    description: "Environmental sustainability program combining sports activities with ecological education and community clean-up events.",
    image: "/images/green-sports.jpg",
    details: "/global-dev/ngo/green-sports",
    externalLink: "https://activeaustria.org/green-sports",
    category: "Eco Sports",
    impact: "25 parks cleaned, 10 tons of waste collected through sport-based events"
  }
];

// Categories for filtering
const categories = ["All", "Youth Development", "Women Empowerment", "Community Sports", "Cultural Exchange", "Senior Wellness", "Eco Sports"];

export default function NGO() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 pt-16">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Header Section */}
        <div className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-8 mb-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Active Austria NGO</h1>
          <p className="text-xl text-blue-200 mb-6">Project and Program Assistant</p>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Active Austria is dedicated to promoting an active lifestyle for people of all ages and fitness levels, 
            fostering intercultural understanding, and encouraging active citizenship through sports and community programs.
          </p>
        </div>

        {/* Mission Statement */}
        <div className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-8 mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">Our Mission</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-blue-600/20 rounded-xl p-6 border border-blue-500/30 text-center">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-white mb-2">Community Building</h3>
              <p className="text-gray-300">Creating vibrant communities through shared activities and intercultural dialogue</p>
            </div>
            <div className="bg-blue-600/20 rounded-xl p-6 border border-blue-500/30 text-center">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905a3.61 3.61 0 01-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-white mb-2">Active Lifestyle</h3>
              <p className="text-gray-300">Promoting health and wellness through accessible sports and fitness activities</p>
            </div>
            <div className="bg-blue-600/20 rounded-xl p-6 border border-blue-500/30 text-center">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-white mb-2">Global Understanding</h3>
              <p className="text-gray-300">Fostering intercultural exchange and European citizenship values</p>
            </div>
          </div>
        </div>

        {/* My Role Section */}
        <div className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-8 mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">My Role as Project and Program Assistant</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-medium text-white mb-3">Responsibilities</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-400 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Coordinating EU-funded projects and ensuring compliance with grant requirements
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-400 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Developing program content and educational materials for diverse audiences
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-400 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Facilitating workshops and training sessions on intercultural communication
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-400 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Building partnerships with local organizations and community leaders
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium text-white mb-3">Impact & Achievements</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-400 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Secured €250,000+ in EU funding for community programs
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-400 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Expanded program reach to 5 new communities in Vienna
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-400 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Developed evaluation frameworks to measure program effectiveness
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-400 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Created inclusive programs serving 1000+ participants annually
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-4 mb-8">
          <h2 className="text-xl font-semibold text-white mb-4 text-center">Explore Projects by Category</h2>
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  activeCategory === category 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-white/5 text-gray-300 hover:bg-white/10'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredProjects.map((project) => (
            <div key={project.id} className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 overflow-hidden hover:border-white/20 transition-colors">
              <div className="h-48 bg-gradient-to-r from-blue-600 to-purple-600 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <svg className="w-12 h-12 text-white opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="mb-4">
                  <p className="text-blue-300 text-sm font-medium">Impact:</p>
                  <p className="text-gray-300 text-sm">{project.impact}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Link 
                    href={project.details}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition-colors"
                  >
                    Learn More
                  </Link>
                  <a 
                    href={project.externalLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/10 text-white px-4 py-2 rounded-lg text-sm border border-white/20 hover:bg-white/20 transition-colors"
                  >
                    Visit Website
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* EU Funding Section */}
        <div className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-8 mb-8">
          <h2 className="text-2xl font-semibold text-white mb-6 text-center">EU Funded Initiatives</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-gray-300 mb-4">
                Active Austria successfully partners with the European Union to deliver programs that promote 
                active citizenship, intercultural dialogue, and social inclusion across member states.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-yellow-400 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Erasmus+ Program: Youth mobility and cooperation projects
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-yellow-400 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  European Solidarity Corps: Volunteering and solidarity projects
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-yellow-400 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Creative Europe: Cross-cultural collaboration through sports and arts
                </li>
              </ul>
            </div>
            <div className="flex justify-center">
              <div className="bg-blue-600/20 rounded-xl p-6 border border-blue-500/30 text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-4 0H9m4 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v12m4 0V9m0 12h2m-2 0h4m0 0h2m-2 0v-4m0 4v-4m0 0h-4m4 0v-4m0 4v-4m0 0h-4m4 0v-4m0 4v-4" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-white mb-2">EU Partnership</h3>
                <p className="text-gray-300">Active Austria is a recognized partner in EU-funded initiatives promoting health, inclusion, and active citizenship</p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-8 text-center">
          <h2 className="text-2xl font-semibold text-white mb-4">Get Involved with Active Austria</h2>
          <p className="text-gray-300 mb-6">Join our community of volunteers, participants, and partners making a difference across Europe</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="https://activeaustria.org/volunteer"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Volunteer Opportunities
            </a>
            <a 
              href="https://activeaustria.org/donate"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 text-white px-6 py-3 rounded-lg border border-white/20 hover:bg-white/20 transition-colors"
            >
              Support Our Mission
            </a>
            <a 
              href="https://activeaustria.org/contact"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 text-white px-6 py-3 rounded-lg border border-white/20 hover:bg-white/20 transition-colors"
            >
              Partner With Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}