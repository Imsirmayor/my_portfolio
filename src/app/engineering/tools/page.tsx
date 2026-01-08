// src/app/engineering/tools/page.tsx
'use client';

import { useState } from 'react';

// Tool categories with detailed information
const toolCategories = [
  {
    id: 'automotive',
    title: 'Automotive Testing & Validation',
    description: 'Specialized tools and frameworks for automotive system validation, ADAS, and autonomous driving technologies',
    tools: [
      {
        name: 'CANoe',
        proficiency: 'Advanced',
        description: 'Comprehensive software tool for development, test, and analysis of entire ECU networks and individual ECUs',
        projects: ['Automotive E/E System Validation', 'CAN/LIN Bus Analysis', 'ECU Simulation'],
        icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10'
      },
      {
        name: 'CAN/LIN/FlexRay',
        proficiency: 'Advanced',
        description: 'In-depth experience with automotive communication protocols for vehicle network systems',
        projects: ['Bus Communication Analysis', 'Network Integration Testing', 'Protocol Validation'],
        icon: 'M13 10V3L4 14h7v7l9-11h-7z'
      },
      {
        name: 'NI TestStand',
        proficiency: 'Advanced',
        description: 'Test management software for automating validation and production test systems',
        projects: ['Test Sequence Automation', 'Production Test Systems', 'Hardware Integration'],
        icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
      },
      {
        name: 'PXI Systems',
        proficiency: 'Intermediate',
        description: 'Modular instrumentation platform for building automated test and measurement systems',
        projects: ['Modular Test Rigs', 'Data Acquisition Systems', 'Hardware-in-Loop Testing'],
        icon: 'M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2'
      },
      {
        name: 'Autoware Framework',
        proficiency: 'Intermediate',
        description: 'Open-source software for autonomous driving technology development and validation',
        projects: ['Autonomous System Testing', 'Sensor Fusion Validation', 'Path Planning Algorithms'],
        icon: 'M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3'
      }
    ]
  },
  {
    id: 'emc',
    title: 'EMC Testing & Shielding',
    description: 'Expertise in electromagnetic compatibility testing following military standards',
    tools: [
      {
        name: 'AECTP500 Standards',
        proficiency: 'Advanced',
        description: 'Military standard for electromagnetic compatibility testing of equipment and systems',
        projects: ['EMC Chamber Testing', 'Radiation Measurements', 'Immunity Testing'],
        icon: 'M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4'
      },
      {
        name: 'EMC Shielding Techniques',
        proficiency: 'Intermediate',
        description: 'Methods and materials for reducing electromagnetic interference in electronic systems',
        projects: ['Component Shielding', 'Cable Harness Design', 'Grounding Strategies'],
        icon: 'M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4'
      }
    ]
  },
  {
    id: 'programming',
    title: 'Programming & Scripting',
    description: 'Languages and frameworks for test automation, data analysis, and system development',
    tools: [
      {
        name: 'Python',
        proficiency: 'Advanced',
        description: 'Extensive experience in test automation, data analysis, and instrument control',
        projects: ['Test Automation Frameworks', 'Data Processing Pipelines', 'Hardware Abstraction Layers'],
        icon: 'M13 10V3L4 14h7v7l9-11h-7z'
      },
      {
        name: 'C++',
        proficiency: 'Intermediate',
        description: 'Development of embedded systems and performance-critical applications',
        projects: ['Embedded System Development', 'ATE Test Code', 'Performance Optimization'],
        icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4'
      },
      {
        name: 'MATLAB/Simulink',
        proficiency: 'Advanced',
        description: 'Modeling, simulation, and analysis of dynamic systems and control algorithms',
        projects: ['Control System Design', 'System Modeling', 'Algorithm Development'],
        icon: 'M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z'
      }
    ]
  },
  {
    id: 'validation',
    title: 'Validation Methodologies',
    description: 'Structured approaches to system verification and validation',
    tools: [
      {
        name: 'Scenario-Based V&V',
        proficiency: 'Advanced',
        description: 'Validation approach using realistic scenarios to test autonomous systems',
        projects: ['ADAS Test Scenarios', 'Edge Case Identification', 'Test Coverage Analysis'],
        icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2'
      },
      {
        name: 'Safety Argumentation',
        proficiency: 'Intermediate',
        description: 'Structured reasoning to demonstrate that a system is acceptably safe',
        projects: ['ISO 26262 Compliance', 'Safety Case Development', 'Hazard Analysis'],
        icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
      }
    ]
  },
  {
    id: 'hardware',
    title: 'Hardware & Instrumentation',
    description: 'Test equipment and hardware systems for validation and measurement',
    tools: [
      {
        name: 'EE System Test Benches',
        proficiency: 'Advanced',
        description: 'Comprehensive electrical/electronic test setups for vehicle system validation',
        projects: ['LabCar Test Environment', 'Harness Validation', 'Power Management Testing'],
        icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10'
      },
      {
        name: 'Oscilloscopes & Multimeters',
        proficiency: 'Advanced',
        description: 'Measurement equipment for signal analysis and electrical characterization',
        projects: ['Signal Integrity Analysis', 'Voltage/Current Measurements', 'Troubleshooting'],
        icon: 'M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4'
      }
    ]
  }
];

// Projects data
const projects = [
  {
    title: "Automotive E/E System Testing",
    description: "Comprehensive testing of vehicle electrical and electronic systems using LabCar environment",
    tools: ["CANoe", "CAN/LIN/FlexRay", "EE Test Benches"],
    image: "/images/automotive-testing.jpg",
    link: "/docs/automotive-testing-report.pdf"
  },
  {
    title: "EMC Testing with AECTP500",
    description: "Electromagnetic compatibility testing following military standards for automotive components",
    tools: ["AECTP500 Standards", "EMC Shielding", "Measurement Equipment"],
    image: "/images/emc-testing.jpg",
    link: "/docs/emc-testing-report.pdf"
  },
  {
    title: "Autonomous Driving Validation",
    description: "Scenario-based verification and validation of ADAS and autonomous driving systems",
    tools: ["Autoware Framework", "Scenario-Based V&V", "Python"],
    image: "/images/autonomous-validation.jpg",
    link: "/docs/autonomous-validation.pdf"
  }
];

export default function Tools() {
  const [activeCategory, setActiveCategory] = useState('automotive');
  const [expandedTool, setExpandedTool] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-16">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-8 mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">Tools & Technologies</h1>
          <p className="text-gray-300 text-lg">
            Comprehensive expertise in automotive testing, validation frameworks, and engineering tools 
            for developing robust testing solutions and advanced automation systems.
          </p>
        </div>

        {/* Category Navigation */}
        <div className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-4 mb-8 overflow-x-auto">
          <div className="flex flex-nowrap gap-2">
            {toolCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-lg transition-colors whitespace-nowrap ${
                  activeCategory === category.id 
                    ? 'bg-purple-600 text-white' 
                    : 'bg-white/5 text-gray-300 hover:bg-white/10'
                }`}
              >
                {category.title}
              </button>
            ))}
          </div>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {toolCategories
            .find(cat => cat.id === activeCategory)
            ?.tools.map((tool) => (
              <div 
                key={tool.name} 
                className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-6 hover:border-white/20 transition-colors"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center mr-4">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={tool.icon} />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">{tool.name}</h3>
                      <span className="text-purple-300 text-sm">{tool.proficiency}</span>
                    </div>
                  </div>
                  <button 
                    onClick={() => setExpandedTool(expandedTool === tool.name ? null : tool.name)}
                    className="text-gray-400 hover:text-white"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d={expandedTool === tool.name ? 'M6 18L18 6M6 6l12 12' : 'M12 6v6m0 0v6m0-6h6m-6 0H6'} 
                      />
                    </svg>
                  </button>
                </div>
                
                <p className="text-gray-300 mb-4">{tool.description}</p>
                
                {expandedTool === tool.name && (
                  <div className="mt-4">
                    <h4 className="text-lg font-medium text-white mb-2">Project Applications:</h4>
                    <ul className="space-y-1">
                      {tool.projects.map((project, i) => (
                        <li key={i} className="text-gray-300 flex items-start">
                          <svg className="w-4 h-4 text-purple-400 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {project}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))
          }
        </div>

        {/* Project Showcase */}
        <div className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-8 mb-8">
          <h2 className="text-2xl font-semibold text-white mb-6">Project Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div key={index} className="bg-white/5 rounded-xl p-4 border border-white/10 hover:border-white/20 transition-colors">
                <div className="h-40 bg-gray-700 rounded-lg mb-4 flex items-center justify-center">
                  <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-white mb-2">{project.title}</h3>
                <p className="text-gray-300 text-sm mb-3">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tools.map((tool, i) => (
                    <span key={i} className="bg-purple-600/20 text-purple-300 text-xs px-2 py-1 rounded-full">
                      {tool}
                    </span>
                  ))}
                </div>
                <a 
                  href={project.link} 
                  className="text-purple-400 hover:text-purple-300 text-sm font-medium flex items-center"
                >
                  View Project Details
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Expertise Summary */}
        <div className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-8">
          <h2 className="text-2xl font-semibold text-white mb-6">Areas of Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <h3 className="text-lg font-medium text-white mb-3">Automotive Systems</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-400 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  ADAS and Autonomous Driving system validation
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-400 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  CAN, LIN, and FlexRay bus communication analysis
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-400 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  E/E system integration and testing
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-400 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  LabCar test environment configuration
                </li>
              </ul>
            </div>
            
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <h3 className="text-lg font-medium text-white mb-3">Testing Methodologies</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-400 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Electromagnetic Compatibility (EMC) testing
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-400 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Scenario-based verification and validation
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-400 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Safety argumentation and ISO 26262 compliance
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-400 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Test automation and framework development
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}