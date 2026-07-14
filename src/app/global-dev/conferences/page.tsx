// src/app/global-dev/conferences/page.tsx
'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

// Conference data structure
interface Conference {
  id: string;
  title: string;
  type: 'conference' | 'seminar' | 'workshop' | 'course' | 'talk';
  date: string;
  endDate?: string;
  location: {
    city: string;
    country: string;
    venue?: string;
  };
  organization: string;
  description: string;
  shortDescription: string;
  skills: string[];
  certificateUrl?: string;
  verifyUrl?: string;
  videoUrl?: string;
  images: {
    url: string;
    caption: string;
    category: 'presentation' | 'networking' | 'activity' | 'venue';
  }[];
  featured: boolean;
}

// Sample conference data
const conferenceData: Conference[] = [
  {
    id: "graduation-speech-2025",
    title: "Graduation Keynote: Building With Purpose",
    type: "talk",
    date: "2025-07-15",
    location: { city: "Graz", country: "Austria", venue: "FH Joanneum" },
    organization: "FH Joanneum",
    description: "Reflections on engineering, community, and mentorship from my graduation keynote. Shared lessons on leading with empathy, building resilient teams, and using technology to serve people.",
    shortDescription: "Keynote on purposeful engineering and mentorship from my graduation.",
    skills: ["Public Speaking", "Leadership", "Mentorship", "Storytelling"],
    videoUrl: "/docs/videos/graduation-speech.mp4", // update when the final link is ready
    images: [
      { url: "public/images/conferences/IMG_20251126_170639_709.jpg", caption: "Opening remarks on purposeful engineering", category: "presentation" },
      { url: "/images/conferences/IMG_20251130_115133_099.jpg", caption: "Sharing mentorship stories", category: "presentation" },
      { url: "/images/conferences/graduation-2.jpg", caption: "Sharing mentorship stories", category: "presentation" },
      { url: "/images/conferences/graduation-2.jpg", caption: "Sharing mentorship stories", category: "presentation" },
      { url: "/images/conferences/graduation-2.jpg", caption: "Sharing mentorship stories", category: "presentation" },
      { url: "/images/conferences/graduation-3.jpg", caption: "Celebrating with peers", category: "networking" }
    ],
    featured: true
  },
  {
    id: "euro-test-2024",
    title: "European Software Testing Conference",
    type: "conference",
    date: "2024-06-10",
    endDate: "2024-06-12",
    location: {
      city: "Berlin",
      country: "Germany",
      venue: "Berlin Congress Center"
    },
    organization: "European Testing Board",
    description: "Annual gathering of software testing professionals from across Europe, featuring keynote speakers, workshops, and networking opportunities. Focused on emerging trends in test automation, AI in testing, and quality assurance methodologies.",
    shortDescription: "Premier European event for software testing professionals featuring cutting-edge methodologies.",
    skills: ["Test Automation", "Quality Assurance", "AI Testing", "Networking"],
    certificateUrl: "/docs/certificates/euro-test-2024.pdf",
    verifyUrl: "https://credentials.europeantestingboard.com/verify/12345",
    images: [
      {
        url: "/images/conferences/euro-test-1.jpg",
        caption: "Keynote session on AI in testing",
        category: "presentation"
      },
      {
        url: "/images/conferences/euro-test-2.jpg",
        caption: "Networking with industry experts",
        category: "networking"
      },
      {
        url: "/images/conferences/IMG_20251130_115133_099.jpg",
        caption: "Workshop on test automation frameworks",
        category: "activity"
      }
    ],
    featured: true
  },
  {
    id: "auto-val-2024",
    title: "Automotive Validation Summit",
    type: "conference",
    date: "2024-03-15",
    endDate: "2024-03-16",
    location: {
      city: "Munich",
      country: "Germany",
      venue: "Motorworld Munich"
    },
    organization: "Automotive Engineers Association",
    description: "Focused on validation methodologies for automotive systems, including ADAS, autonomous driving, and electric vehicle technologies. Hands-on workshops with industry-standard tools and technologies.",
    shortDescription: "Specialized conference on automotive system validation and testing methodologies.",
    skills: ["Automotive Systems", "ADAS Validation", "CANoe", "TestStand"],
    certificateUrl: "/docs/certificates/auto-val-2024.pdf",
    images: [
      {
        url: "/images/conferences/auto-val-1.jpg",
        caption: "ADAS validation workshop",
        category: "activity"
      },
      {
        url: "/images/conferences/auto-val-2.jpg",
        caption: "Exhibition hall with industry vendors",
        category: "venue"
      }
    ],
    featured: true
  },
  {
    id: "icst-2024",
    title: "International Conference on Software Testing",
    type: "conference",
    date: "2024-04-22",
    endDate: "2024-04-25",
    location: {
      city: "Vienna",
      country: "Austria",
      venue: "Austria Center Vienna"
    },
    organization: "IEEE",
    description: "Premier academic and industry conference covering all aspects of software testing, verification, and validation. Presented research papers and industrial experience reports.",
    shortDescription: "Leading academic conference on software testing research and practices.",
    skills: ["Research", "Test Verification", "Academic Networking", "Publication"],
    certificateUrl: "/docs/certificates/icst-2024.pdf",
    images: [
      {
        url: "/images/conferences/icst-1.jpg",
        caption: "Presenting research findings",
        category: "presentation"
      },
      {
        url: "/images/conferences/icst-2.jpg",
        caption: "Discussion with conference attendees",
        category: "networking"
      }
    ],
    featured: false
  },
  {
    id: "python-test-2024",
    title: "Python Testing Workshop",
    type: "workshop",
    date: "2024-02-08",
    location: {
      city: "Graz",
      country: "Austria",
      venue: "FH JOANNEUM"
    },
    organization: "Python Software Foundation",
    description: "Hands-on workshop focused on testing methodologies for Python applications. Covered unittest, pytest, and behavior-driven development frameworks.",
    shortDescription: "Practical workshop on Python testing frameworks and methodologies.",
    skills: ["Python", "pytest", "BDD", "Test Frameworks"],
    certificateUrl: "/docs/certificates/python-test-2024.pdf",
    images: [
      {
        url: "/images/conferences/python-workshop-1.jpg",
        caption: "Hands-on coding session",
        category: "activity"
      },
      {
        url: "/images/conferences/python-workshop-2.jpg",
        caption: "Group exercise discussion",
        category: "activity"
      }
    ],
    featured: false
  },
  {
    id: "leadership-seminar-2024",
    title: "Technical Leadership Seminar",
    type: "seminar",
    date: "2024-05-20",
    endDate: "2024-05-21",
    location: {
      city: "Zurich",
      country: "Switzerland",
      venue: "Swiss Tech Convention Center"
    },
    organization: "Technical Leadership Institute",
    description: "Professional development seminar focused on leadership skills for technical professionals. Covered team management, project leadership, and technical decision-making.",
    shortDescription: "Professional development for technical leaders and managers.",
    skills: ["Leadership", "Team Management", "Project Management", "Communication"],
    certificateUrl: "/docs/certificates/leadership-2024.pdf",
    images: [
      {
        url: "/images/conferences/leadership-1.jpg",
        caption: "Group discussion session",
        category: "activity"
      },
      {
        url: "/images/conferences/leadership-2.jpg",
        caption: "Networking with other technical leaders",
        category: "networking"
      }
    ],
    featured: false
  },
  {
    id: "eu-project-2024",
    title: "EU Project Management Course",
    type: "course",
    date: "2024-01-15",
    endDate: "2024-01-19",
    location: {
      city: "Brussels",
      country: "Belgium",
      venue: "European Commission Building"
    },
    organization: "European Commission",
    description: "Intensive course on managing EU-funded projects, covering proposal writing, budgeting, reporting, and compliance requirements. Included case studies of successful EU projects.",
    shortDescription: "Comprehensive training on managing European Union funded projects.",
    skills: ["Project Management", "EU Funding", "Grant Writing", "Compliance"],
    certificateUrl: "/docs/certificates/eu-project-2024.pdf",
    images: [
      {
        url: "/images/conferences/eu-course-1.jpg",
        caption: "Course session on EU funding mechanisms",
        category: "presentation"
      },
      {
        url: "/images/conferences/eu-course-2.jpg",
        caption: "Group work on project proposals",
        category: "activity"
      }
    ],
    featured: true
  }
];

const talks = conferenceData.filter(c => c.type === 'talk');
const graduationTalk = conferenceData.find(c => c.id === 'graduation-speech-2025');


// Extract unique values for filters
const allTypes = Array.from(new Set(conferenceData.map(item => item.type)));
const allYears = Array.from(new Set(conferenceData.map(item => new Date(item.date).getFullYear().toString()))).sort((a, b) => b.localeCompare(a));
const allLocations = Array.from(new Set(conferenceData.map(item => item.location.country)));
const allSkills = Array.from(new Set(conferenceData.flatMap(item => item.skills)));

export default function Conferences() {
  const [activeFilters, setActiveFilters] = useState({
    type: 'all',
    year: 'all',
    location: 'all',
    search: ''
  });
  
  const [selectedConference, setSelectedConference] = useState<Conference | null>(null);
  const [galleryImage, setGalleryImage] = useState<{url: string, caption: string} | null>(null);
  const [activeGallery, setActiveGallery] = useState<string | null>(null);

  // Filter conferences based on active filters
  const filteredConferences = conferenceData.filter(conference => {
    const matchesType = activeFilters.type === 'all' || conference.type === activeFilters.type;
    const matchesYear = activeFilters.year === 'all' || new Date(conference.date).getFullYear().toString() === activeFilters.year;
    const matchesLocation = activeFilters.location === 'all' || conference.location.country === activeFilters.location;
    const matchesSearch = activeFilters.search === '' || 
      conference.title.toLowerCase().includes(activeFilters.search.toLowerCase()) ||
      conference.description.toLowerCase().includes(activeFilters.search.toLowerCase()) ||
      conference.skills.some(skill => skill.toLowerCase().includes(activeFilters.search.toLowerCase()));
    
    return matchesType && matchesYear && matchesLocation && matchesSearch;
  });

  const handleFilterChange = (filterType: string, value: string) => {
    setActiveFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
  };

  const resetFilters = () => {
    setActiveFilters({
      type: 'all',
      year: 'all',
      location: 'all',
      search: ''
    });
  };

  const openConferenceModal = (conference: Conference) => {
    setSelectedConference(conference);
  };

  const openGallery = (conferenceId: string) => {
    setActiveGallery(conferenceId);
  };

  const openImageModal = (image: {url: string, caption: string}) => {
    setGalleryImage(image);
  };

  // Statistics for the hero section
  const conferenceCount = conferenceData.length;
  const countries = Array.from(new Set(conferenceData.map(c => c.location.country))).length;
  const certifications = conferenceData.filter(c => c.certificateUrl).length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 pt-16">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-8 mb-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Conferences & Professional Development</h1>
          <p className="text-xl text-blue-200 mb-6">International knowledge sharing, skill development, and professional networking</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="bg-blue-600/20 rounded-xl p-4 border border-blue-500/30">
              <div className="text-3xl font-bold text-white">{conferenceCount}+</div>
              <div className="text-blue-200">Events Attended</div>
            </div>
            <div className="bg-blue-600/20 rounded-xl p-4 border border-blue-500/30">
              <div className="text-3xl font-bold text-white">{countries}+</div>
              <div className="text-blue-200">Countries</div>
            </div>
            <div className="bg-blue-600/20 rounded-xl p-4 border border-blue-500/30">
              <div className="text-3xl font-bold text-white">{certifications}+</div>
              <div className="text-blue-200">Certifications</div>
            </div>
          </div>
        </div>

        {/* Talks Section */}
        <div id="talks" className="bg-purple-900/20 backdrop-blur-md rounded-2xl border border-purple-500/30 p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="flex-1">
              <p className="text-sm uppercase tracking-wide text-purple-200 mb-2">Talks</p>
              <h2 className="text-2xl font-semibold text-white mb-3">Graduation Speech & Keynotes</h2>
              <p className="text-purple-100 mb-4">
                Watch the graduation keynote and browse other talks. Filter to &quot;Talks&quot; to see them first.
              </p>
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => handleFilterChange('type', 'talk')}
                  className="bg-purple-600 text-white px-5 py-2 rounded-lg hover:bg-purple-700 transition-colors"
                >
                  Show talks only
                </button>
                {graduationTalk && (
                  <button
                    onClick={() => openConferenceModal(graduationTalk)}
                    className="bg-white/10 text-white px-5 py-2 rounded-lg border border-white/20 hover:bg-white/20 transition-colors"
                  >
                    View graduation speech
                  </button>
                )}
              </div>
            </div>
            <div className="md:w-1/3 bg-white/5 rounded-xl border border-white/10 p-4 text-white">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-purple-200">Talks live</span>
                <span className="font-semibold">{talks.length}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-purple-200">Video</span>
                <span className="font-semibold">{graduationTalk?.videoUrl ? 'Available' : 'Coming soon'}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Filter Section */}
        <div className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-6 mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-white">Filter Events</h2>
            <button 
              onClick={resetFilters}
              className="text-blue-400 hover:text-blue-300 text-sm"
            >
              Reset All Filters
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Search Filter */}
            <div>
              <label className="block text-gray-300 text-sm mb-2">Search</label>
              <input
                type="text"
                placeholder="Search events..."
                value={activeFilters.search}
                onChange={(e) => handleFilterChange('search', e.target.value)}
                className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            {/* Type Filter */}
            <div>
              <label className="block text-gray-300 text-sm mb-2">Event Type</label>
              <select
                value={activeFilters.type}
                onChange={(e) => handleFilterChange('type', e.target.value)}
                className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">All Types</option>
                {allTypes.map(type => (
                  <option key={type} value={type}>
                    {type.charAt(0).toUpperCase() + type.slice(1)}
                  </option>
                ))}
              </select>
            </div>
            
            {/* Year Filter */}
            <div>
              <label className="block text-gray-300 text-sm mb-2">Year</label>
              <select
                value={activeFilters.year}
                onChange={(e) => handleFilterChange('year', e.target.value)}
                className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">All Years</option>
                {allYears.map(year => (
                  <option key={year} value={year}>{year}</option>
                ))}
              </select>
            </div>
            
            {/* Location Filter */}
            <div>
              <label className="block text-gray-300 text-sm mb-2">Location</label>
              <select
                value={activeFilters.location}
                onChange={(e) => handleFilterChange('location', e.target.value)}
                className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">All Locations</option>
                {allLocations.map(location => (
                  <option key={location} value={location}>{location}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Conference Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredConferences.map(conference => (
            <div 
              key={conference.id} 
              id={conference.id}
              className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 overflow-hidden hover:border-white/20 transition-colors"
            >
              {/* Conference Image */}
              <div className="h-48 bg-gradient-to-r from-blue-600 to-purple-600 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <svg className="w-12 h-12 text-white opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-4 0H9m4 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v12m4 0V9m0 12h2m-2 0h4m0 0h2m-2 0v-4m0 4v-4m0 0h-4m4 0v-4m0 4v-4" />
                  </svg>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full">
                    {conference.type}
                  </span>
                </div>
                {conference.featured && (
                  <div className="absolute top-4 right-4">
                    <span className="bg-yellow-600 text-white text-xs px-2 py-1 rounded-full">
                      Featured
                    </span>
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{conference.title}</h3>
                <div className="flex items-center text-gray-300 text-sm mb-3">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {new Date(conference.date).toLocaleDateString()}
                  {conference.endDate && ` - ${new Date(conference.endDate).toLocaleDateString()}`}
                </div>
                <div className="flex items-center text-gray-300 text-sm mb-4">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {conference.location.city}, {conference.location.country}
                </div>
                
                <p className="text-gray-300 text-sm mb-4">{conference.shortDescription}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {conference.skills.map(skill => (
                    <span key={skill} className="bg-blue-600/20 text-blue-300 text-xs px-2 py-1 rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
                
                <div className="flex flex-wrap gap-2">
                  <button 
                    onClick={() => openConferenceModal(conference)}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition-colors"
                  >
                    View Details
                  </button>
                  {conference.certificateUrl && (
                    <a 
                      href={conference.certificateUrl}
                      className="bg-white/10 text-white px-4 py-2 rounded-lg text-sm border border-white/20 hover:bg-white/20 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Certificate
                    </a>
                  )}
                  <button 
                    onClick={() => openGallery(conference.id)}
                    className="bg-white/10 text-white px-4 py-2 rounded-lg text-sm border border-white/20 hover:bg-white/20 transition-colors"
                  >
                    View Photos
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results Message */}
        {filteredConferences.length === 0 && (
          <div className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-8 text-center">
            <h3 className="text-xl font-semibold text-white mb-2">No events match your filters</h3>
            <p className="text-gray-300">Try adjusting your search criteria or resetting the filters</p>
            <button 
              onClick={resetFilters}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg mt-4 hover:bg-blue-700 transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Conference Modal */}
        {selectedConference && (
          <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
            <div className="bg-slate-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-start mb-6">
                  <h2 className="text-2xl font-bold text-white">{selectedConference.title}</h2>
                  <button 
                    onClick={() => setSelectedConference(null)}
                    className="text-gray-400 hover:text-white"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  <div className="flex items-center text-gray-300">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {new Date(selectedConference.date).toLocaleDateString()}
                    {selectedConference.endDate && ` - ${new Date(selectedConference.endDate).toLocaleDateString()}`}
                  </div>
                  
                  <div className="flex items-center text-gray-300">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {selectedConference.location.venue && `${selectedConference.location.venue}, `}
                    {selectedConference.location.city}, {selectedConference.location.country}
                  </div>
                  
                  <div className="flex items-center text-gray-300">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-4 0H9m4 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v12m4 0V9m0 12h2m-2 0h4m0 0h2m-2 0v-4m0 4v-4m0 0h-4m4 0v-4m0 4v-4" />
                    </svg>
                    {selectedConference.organization}
                  </div>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-white mb-2">Description</h3>
                  <p className="text-gray-300">{selectedConference.description}</p>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-white mb-2">Skills & Topics</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedConference.skills.map(skill => (
                      <span key={skill} className="bg-blue-600/20 text-blue-300 px-3 py-1 rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                {selectedConference.videoUrl && (
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-white mb-2">Watch</h3>
                    <div className="flex flex-wrap gap-4">
                      <a
                        href={selectedConference.videoUrl}
                        className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors flex items-center"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Watch video
                      </a>
                    </div>
                  </div>
                )}
                
                {selectedConference.certificateUrl && (
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-white mb-2">Certification</h3>
                    <div className="flex flex-wrap gap-4">
                      <a 
                        href={selectedConference.certificateUrl}
                        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Certificate
                      </a>
                      {selectedConference.verifyUrl && (
                        <a 
                          href={selectedConference.verifyUrl}
                          className="bg-white/10 text-white px-4 py-2 rounded-lg border border-white/20 hover:bg-white/20 transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Verify Credential
                        </a>
                      )}
                    </div>
                  </div>
                )}
                
                <div>
                  <h3 className="text-lg font-semibold text-white mb-4">Event Photos</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {selectedConference.images.slice(0, 6).map((image, index) => (
                      <div 
                        key={index} 
                        className="aspect-square bg-gray-700 rounded-lg cursor-pointer hover:opacity-80 transition-opacity"
                        onClick={() => openImageModal(image)}
                      >
                        <div className="w-full h-full flex items-center justify-center">
                          <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Gallery Modal */}
        {activeGallery && (
          <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
            <div className="bg-slate-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-start mb-6">
                  <h2 className="text-2xl font-bold text-white">
                    {conferenceData.find(c => c.id === activeGallery)?.title} Photos
                  </h2>
                  <button 
                    onClick={() => setActiveGallery(null)}
                    className="text-gray-400 hover:text-white"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {conferenceData.find(c => c.id === activeGallery)?.images.map((image, index) => (
                    <div 
                      key={index} 
                      className="aspect-square bg-gray-700 rounded-lg cursor-pointer hover:opacity-80 transition-opacity"
                      onClick={() => openImageModal(image)}
                    >
                      <div className="w-full h-full flex items-center justify-center">
                        <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Image Modal */}
        {galleryImage && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl w-full">
              <button 
                onClick={() => setGalleryImage(null)}
                className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 z-10"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              <div className="bg-gray-800 rounded-lg overflow-hidden">
                <div className="h-96 bg-gray-700 flex items-center justify-center">
                  <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                
                <div className="p-4">
                  <p className="text-white text-center">{galleryImage.caption}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}