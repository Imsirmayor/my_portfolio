// // src/app/engineering/experience/page.tsx
// 'use client';

// import { useState } from 'react';
// import Link from 'next/link';

// // Mock data for experience timeline
// const experiences = [
//   {
//     id: 1,
//     title: "Junior Validation & Test Development Engineer",
//     company: "AMS-OSRAM",
//     period: "Dec 2024 - Jun 2025",
//     description: "Developed test flow sequences from PDL to Python/C++ for IC validation on Diamondx testers. Improved traceability and efficiency in validation workflows via test automation.",
//     skills: ["Python", "C++", "PDL", "IC Validation", "Test Automation", "Linux"],
//     achievements: [
//       "Designed and implemented test flow sequences from PDL test sequences",
//       "Deployed and tested validation setups on Linux simulator environments",
//       "Collaborated with lab engineers to integrate test sequences into automated testing frameworks",
//       "Optimized test development processes for improved efficiency & accuracy"
//     ]
//   },
//   {
//     id: 2,
//     title: "Test and Validation Engineer Intern",
//     company: "AMS-OSRAM",
//     period: "Jun 2024 - Aug 2024",
//     description: "Created Python OOP scripts for instrument control using SCPI commands, improving IC measurement efficiency.",
//     skills: ["Python", "OOP", "SCPI", "SVN", "GitLab", "NI Tools"],
//     achievements: [
//       "Developed and implemented Python test sequences from Code Beamer for IC validation",
//       "Managed code versions using SVN and GitLab",
//       "Assisted in configuring lab test benches, including IC register/pin maps",
//       "Contributed to test specification documents"
//     ]
//   },
//   {
//     id: 3,
//     title: "Test Data & Software Development Intern",
//     company: "Hycenta GmbH (COMET Center)",
//     period: "Jun 2025 - Sep 2025",
//     description: "Analyzed and processed time-series sensor data from electrolyzer test beds using Python for hydrogen storage systems.",
//     skills: ["Python", "Pandas", "NumPy", "Flask", "SQLite", "Data Analysis"],
//     achievements: [
//       "Performed statistical analysis to identify performance degradation patterns",
//       "Designed and implemented a secure, production-grade internal web application",
//       "Developed a robust authentication system with admin-configurable permissions",
//       "Created intuitive dashboard for secure file upload and management"
//     ]
//   },
//   {
//     id: 4,
//     title: "IT & Design Specialist",
//     company: "Raven & Macaw / Valueminds NG",
//     period: "2016 - 2023",
//     description: "Provided comprehensive IT support and delivered UI/UX design solutions for web and mobile applications.",
//     skills: ["IT Support", "UI/UX Design", "Network Management", "TCP/IP", "Prototyping"],
//     achievements: [
//       "Managed network infrastructure (TCP/IP, DHCP, DNS)",
//       "Troubleshot hardware/software issues and deployed system updates",
//       "Created intuitive interfaces and interactive prototypes for web and mobile applications",
//       "Partnered with cross-functional teams to implement new technologies"
//     ]
//   }
// ];

// // Mock data for projects
// const projects = [
//   {
//     id: 1,
//     title: "Master's Thesis - Automated PDL Flow Deployment",
//     description: "Developed an automated pipeline for generating reusable test templates and files from Codebeamer using Python, PDL, and Jinja2",
//     technologies: ["Python", "PDL", "Jinja2", "Codebeamer"],
//     impact: "Enabled faster development and deployment for 3 IC validation projects, improving scalability and reducing manual effort.",
//     document: "/docs/thesis-overview.pdf"
//   },
//   {
//     id: 2,
//     title: "Hardware Abstraction Layer for Instrument Control",
//     description: "Developed a Python-based Hardware Abstraction Layer (HAL) using OOP to control Keysight and NI instruments",
//     technologies: ["Python", "OOP", "SCPI", "Git", "NI TestStand"],
//     impact: "Created modular code for NI TestStand integration with comprehensive documentation.",
//     document: "/docs/hal-project.pdf"
//   },
//   {
//     id: 3,
//     title: "MATLAB/Simulink Modeling & Simulation",
//     description: "Designed and simulated dynamic systems including RLC circuits and a quarter-car suspension model",
//     technologies: ["MATLAB", "Simulink", "Control Systems", "State-space modeling"],
//     impact: "Analyzed damping and system behavior via pole-zero plots; optimized control system responses.",
//     document: "/docs/matlab-projects.pdf"
//   },
//   {
//     id: 4,
//     title: "PCB Design - Serial-to-USB and Buck Converter",
//     description: "Designed a 4-layer Serial-to-USB and 6-layer Buck Converter PCB, adhering to Euro-circuits specifications",
//     technologies: ["Altium Designer", "PCB Design", "Schematic Design", "Signal Integrity"],
//     impact: "Developed optimal stack-ups for signal integrity and implemented strategic component placement.",
//     document: "/docs/pcb-designs.pdf"
//   }
// ];

// // Skills data organized by category
// const skills = {
//   "Programming": ["Python", "C++", "MATLAB", "Java", "SQL"],
//   "Testing Tools": ["Selenium", "JUnit", "TestNG", "SoapUI", "Postman", "JIRA", "Jenkins", "GitLab CI"],
//   "Hardware/Embedded": ["Altium Designer", "Embedded Systems", "Circuit Design", "PCB Design"],
//   "Data Analysis": ["Pandas", "NumPy", "Data Mining", "Statistical Analysis"],
//   "Other": ["Requirements Management", "Technical Documentation", "SCPI", "OOP"]
// };

// export default function Experience() {
//   const [activeTab, setActiveTab] = useState('timeline');
//   const [expandedExperience, setExpandedExperience] = useState<number | null>(null);

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-16">
//       <div className="max-w-6xl mx-auto px-4 py-12">
//         {/* Header */}
//         <div className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-8 mb-8">
//           <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
//             <div>
//               <h1 className="text-4xl font-bold text-white mb-2">Professional Experience</h1>
//               <p className="text-gray-300">My journey in system test engineering, validation, and technical leadership</p>
//             </div>
//             <div className="mt-4 md:mt-0">
//               <a 
//                 href="/docs/Adeyemi_Mayowa_CV.pdf" 
//                 download
//                 className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors flex items-center"
//               >
//                 <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
//                 </svg>
//                 Download Full CV
//               </a>
//             </div>
//           </div>
//         </div>

//         {/* Navigation Tabs */}
//         <div className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-4 mb-8">
//           <div className="flex flex-wrap gap-2">
//             <button 
//               onClick={() => setActiveTab('timeline')}
//               className={`px-4 py-2 rounded-lg transition-colors ${activeTab === 'timeline' ? 'bg-purple-600 text-white' : 'bg-white/5 text-gray-300 hover:bg-white/10'}`}
//             >
//               Experience Timeline
//             </button>
//             <button 
//               onClick={() => setActiveTab('projects')}
//               className={`px-4 py-2 rounded-lg transition-colors ${activeTab === 'projects' ? 'bg-purple-600 text-white' : 'bg-white/5 text-gray-300 hover:bg-white/10'}`}
//             >
//               Key Projects
//             </button>
//             <button 
//               onClick={() => setActiveTab('skills')}
//               className={`px-4 py-2 rounded-lg transition-colors ${activeTab === 'skills' ? 'bg-purple-600 text-white' : 'bg-white/5 text-gray-300 hover:bg-white/10'}`}
//             >
//               Skills & Technologies
//             </button>
//           </div>
//         </div>

//         {/* Timeline View */}
//         {activeTab === 'timeline' && (
//           <div className="space-y-6">
//             {experiences.map((exp, index) => (
//               <div key={exp.id} className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 overflow-hidden">
//                 <div 
//                   className="p-6 cursor-pointer"
//                   onClick={() => setExpandedExperience(expandedExperience === exp.id ? null : exp.id)}
//                 >
//                   <div className="flex justify-between items-start">
//                     <div>
//                       <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
//                       <p className="text-purple-300">{exp.company} • {exp.period}</p>
//                     </div>
//                     <svg 
//                       className={`w-5 h-5 text-gray-400 transform transition-transform ${expandedExperience === exp.id ? 'rotate-180' : ''}`} 
//                       fill="none" 
//                       stroke="currentColor" 
//                       viewBox="0 0 24 24"
//                     >
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//                     </svg>
//                   </div>
//                   <p className="text-gray-300 mt-2">{exp.description}</p>
                  
//                   <div className="flex flex-wrap gap-2 mt-4">
//                     {exp.skills.map((skill, i) => (
//                       <span key={i} className="bg-purple-600/20 text-purple-300 text-sm px-3 py-1 rounded-full">
//                         {skill}
//                       </span>
//                     ))}
//                   </div>
//                 </div>
                
//                 {expandedExperience === exp.id && (
//                   <div className="px-6 pb-6">
//                     <h4 className="text-lg font-medium text-white mb-3">Key Achievements:</h4>
//                     <ul className="space-y-2">
//                       {exp.achievements.map((achievement, i) => (
//                         <li key={i} className="text-gray-300 flex items-start">
//                           <svg className="w-5 h-5 text-purple-400 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
//                           </svg>
//                           {achievement}
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>
//         )}

//         {/* Projects View */}
//         {activeTab === 'projects' && (
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             {projects.map((project) => (
//               <div key={project.id} className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-6">
//                 <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
//                 <p className="text-gray-300 mb-4">{project.description}</p>
                
//                 <div className="flex flex-wrap gap-2 mb-4">
//                   {project.technologies.map((tech, i) => (
//                     <span key={i} className="bg-blue-600/20 text-blue-300 text-sm px-3 py-1 rounded-full">
//                       {tech}
//                     </span>
//                   ))}
//                 </div>
                
//                 <p className="text-gray-300 mb-4"><strong>Impact:</strong> {project.impact}</p>
                
//                 <a 
//                   href={project.document} 
//                   className="text-purple-400 hover:text-purple-300 font-medium flex items-center"
//                 >
//                   <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
//                   </svg>
//                   View Project Details
//                 </a>
//               </div>
//             ))}
//           </div>
//         )}

//         {/* Skills View */}
//         {activeTab === 'skills' && (
//           <div className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-6">
//             <h2 className="text-2xl font-semibold text-white mb-6">Technical Skills</h2>
            
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               {Object.entries(skills).map(([category, items]) => (
//                 <div key={category} className="bg-white/5 rounded-xl p-4 border border-white/10">
//                   <h3 className="text-lg font-medium text-white mb-3">{category}</h3>
//                   <div className="flex flex-wrap gap-2">
//                     {items.map((skill, i) => (
//                       <span key={i} className="bg-green-600/20 text-green-300 text-sm px-3 py-1 rounded-full">
//                         {skill}
//                       </span>
//                     ))}
//                   </div>
//                 </div>
//               ))}
//             </div>
            
//             <div className="mt-8">
//               <h3 className="text-lg font-medium text-white mb-4">Skills Proficiency</h3>
//               <div className="space-y-4">
//                 <div>
//                   <div className="flex justify-between mb-1">
//                     <span className="text-gray-300">Python</span>
//                     <span className="text-gray-300">Advanced</span>
//                   </div>
//                   <div className="w-full bg-gray-700 rounded-full h-2.5">
//                     <div className="bg-purple-600 h-2.5 rounded-full" style={{width: '90%'}}></div>
//                   </div>
//                 </div>
//                 <div>
//                   <div className="flex justify-between mb-1">
//                     <span className="text-gray-300">Test Automation</span>
//                     <span className="text-gray-300">Advanced</span>
//                   </div>
//                   <div className="w-full bg-gray-700 rounded-full h-2.5">
//                     <div className="bg-purple-600 h-2.5 rounded-full" style={{width: '85%'}}></div>
//                   </div>
//                 </div>
//                 <div>
//                   <div className="flex justify-between mb-1">
//                     <span className="text-gray-300">IC Validation</span>
//                     <span className="text-gray-300">Advanced</span>
//                   </div>
//                   <div className="w-full bg-gray-700 rounded-full h-2.5">
//                     <div className="bg-purple-600 h-2.5 rounded-full" style={{width: '88%'}}></div>
//                   </div>
//                 </div>
//                 <div>
//                   <div className="flex justify-between mb-1">
//                     <span className="text-gray-300">Hardware/Software Integration</span>
//                     <span className="text-gray-300">Intermediate</span>
//                   </div>
//                   <div className="w-full bg-gray-700 rounded-full h-2.5">
//                     <div className="bg-purple-600 h-2.5 rounded-full" style={{width: '75%'}}></div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}

//         {/* Call to Action */}
//         <div className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-8 mt-8 text-center">
//           <h2 className="text-2xl font-semibold text-white mb-4">Interested in working together?</h2>
//           <p className="text-gray-300 mb-6">I'm always open to discussing new opportunities and interesting projects.</p>
//           <Link 
//             href="/contact" 
//             className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors inline-flex items-center"
//           >
//             Get In Touch
//             <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
//             </svg>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }

// src/app/engineering/experience/page.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';

// Mock data for experience timeline
const experiences = [
  {
    id: 1,
    title: "Test Engineer",
    company: "FLEXOO GmbH",
    period: "May 2026 - Present",
    description: "Developing and validating flexible sensor systems for automotive applications.",
    skills: ["Python","Test Automation","Sensor Validation","DAQ Systems","Design Verification","Process Validation","Environmental Testing","Root Cause Analysis","IATF 16949","Automotive Testing"],
    achievements: [
      "Develop DV/PV test plans.",
      "Conduct accelerated environmental testing.",
      "Design automated Python test scripts.",
      "Integrate sensors with DAQ systems.",
      "Perform failure analysis.",
      "Support CATL battery validation.",
      "Ensure IATF 16949 compliance.",
      "Support production transfer."
    ]
  },
  {
    id: 2,
    title: "Junior Validation & Test Development Engineer",
    company: "AMS-OSRAM",
    period: "Dec 2024 - Jun 2025",
    description: "Developed test flow sequences from PDL to Python/C++ for IC validation on Diamondx testers. Improved traceability and efficiency in validation workflows via test automation.",
    skills: ["Python", "C++", "PDL", "IC Validation", "Test Automation", "Linux"],
    achievements: [
      "Designed and implemented test flow sequences from PDL test sequences",
      "Deployed and tested validation setups on Linux simulator environments",
      "Collaborated with lab engineers to integrate test sequences into automated testing frameworks",
      "Optimized test development processes for improved efficiency & accuracy"
    ]
  },
  {
    id: 3,
    title: "Test and Validation Engineer Intern",
    company: "AMS-OSRAM",
    period: "Jun 2024 - Aug 2024",
    description: "Created Python OOP scripts for instrument control using SCPI commands, improving IC measurement efficiency.",
    skills: ["Python", "OOP", "SCPI", "SVN", "GitLab", "NI Tools"],
    achievements: [
      "Developed and implemented Python test sequences from Code Beamer for IC validation",
      "Managed code versions using SVN and GitLab",
      "Assisted in configuring lab test benches, including IC register/pin maps",
      "Contributed to test specification documents"
    ]
  },
  {
    id: 4,
    title: "Test Data & Software Development Intern",
    company: "Hycenta GmbH (COMET Center)",
    period: "Jun 2025 - Sep 2025",
    description: "Analyzed and processed time-series sensor data from electrolyzer test beds using Python for hydrogen storage systems.",
    skills: ["Python", "Pandas", "NumPy", "Flask", "SQLite", "Data Analysis"],
    achievements: [
      "Performed statistical analysis to identify performance degradation patterns",
      "Designed and implemented a secure, production-grade internal web application",
      "Developed a robust authentication system with admin-configurable permissions",
      "Created intuitive dashboard for secure file upload and management"
    ]
  },
  {
    id: 5,
    title: "IT & Design Specialist",
    company: "Raven & Macaw / Valueminds NG",
    period: "2016 - 2023",
    description: "Provided comprehensive IT support and delivered UI/UX design solutions for web and mobile applications.",
    skills: ["IT Support", "UI/UX Design", "Network Management", "TCP/IP", "Prototyping"],
    achievements: [
      "Managed network infrastructure (TCP/IP, DHCP, DNS)",
      "Troubleshot hardware/software issues and deployed system updates",
      "Created intuitive interfaces and interactive prototypes for web and mobile applications",
      "Partnered with cross-functional teams to implement new technologies"
    ]
  }
];

// Mock data for projects
const projects = [
  {
    id: 1,
    title: "Master's Thesis - Automated PDL Flow Deployment",
    description: "Developed an automated pipeline for generating reusable test templates and files from Codebeamer using Python, PDL, and Jinja2",
    technologies: ["Python", "PDL", "Jinja2", "Codebeamer"],
    impact: "Enabled faster development and deployment for 3 IC validation projects, improving scalability and reducing manual effort.",
    document: "/docs/thesis-overview.pdf"
  },
  {
    id: 2,
    title: "Hardware Abstraction Layer for Instrument Control",
    description: "Developed a Python-based Hardware Abstraction Layer (HAL) using OOP to control Keysight and NI instruments",
    technologies: ["Python", "OOP", "SCPI", "Git", "NI TestStand"],
    impact: "Created modular code for NI TestStand integration with comprehensive documentation.",
    document: "/docs/hal-project.pdf"
  },
  {
    id: 3,
    title: "MATLAB/Simulink Modeling & Simulation",
    description: "Designed and simulated dynamic systems including RLC circuits and a quarter-car suspension model",
    technologies: ["MATLAB", "Simulink", "Control Systems", "State-space modeling"],
    impact: "Analyzed damping and system behavior via pole-zero plots; optimized control system responses.",
    document: "/docs/matlab-projects.pdf"
  },
  {
    id: 4,
    title: "PCB Design - Serial-to-USB and Buck Converter",
    description: "Designed a 4-layer Serial-to-USB and 6-layer Buck Converter PCB, adhering to Euro-circuits specifications",
    technologies: ["Altium Designer", "PCB Design", "Schematic Design", "Signal Integrity"],
    impact: "Developed optimal stack-ups for signal integrity and implemented strategic component placement.",
    document: "/docs/pcb-designs.pdf"
  }
];

// Skills data organized by category
const skills = {
  "Programming": ["Python", "C++", "MATLAB", "Java", "SQL"],
  "Testing Tools": ["Selenium", "JUnit", "TestNG", "SoapUI", "Postman", "JIRA", "Jenkins", "GitLab CI"],
  "Hardware/Embedded": ["Altium Designer", "Embedded Systems", "Circuit Design", "PCB Design"],
  "Data Analysis": ["Pandas", "NumPy", "Data Mining", "Statistical Analysis"],
  "Other": ["Requirements Management", "Technical Documentation", "SCPI", "OOP"]
};

export default function Experience() {
  const [activeTab, setActiveTab] = useState('timeline');
  const [expandedExperience, setExpandedExperience] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-16">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-8 mb-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div>
              <h1 className="text-4xl font-bold text-white mb-2">Professional Experience</h1>
              <p className="text-gray-300">My journey in system test engineering, validation, and technical leadership</p>
            </div>
            <div className="mt-4 md:mt-0">
              <a 
                href="/docs/Adeyemi_Mayowa_CV.pdf" 
                download
                className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors flex items-center"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download Full CV
              </a>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-4 mb-8">
          <div className="flex flex-wrap gap-2">
            <button 
              onClick={() => setActiveTab('timeline')}
              className={`px-4 py-2 rounded-lg transition-colors ${activeTab === 'timeline' ? 'bg-purple-600 text-white' : 'bg-white/5 text-gray-300 hover:bg-white/10'}`}
            >
              Experience Timeline
            </button>
            <button 
              onClick={() => setActiveTab('projects')}
              className={`px-4 py-2 rounded-lg transition-colors ${activeTab === 'projects' ? 'bg-purple-600 text-white' : 'bg-white/5 text-gray-300 hover:bg-white/10'}`}
            >
              Key Projects
            </button>
            <button 
              onClick={() => setActiveTab('skills')}
              className={`px-4 py-2 rounded-lg transition-colors ${activeTab === 'skills' ? 'bg-purple-600 text-white' : 'bg-white/5 text-gray-300 hover:bg-white/10'}`}
            >
              Skills & Technologies
            </button>
          </div>
        </div>

        {/* Timeline View */}
        {activeTab === 'timeline' && (
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div key={exp.id} className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 overflow-hidden">
                <div 
                  className="p-6 cursor-pointer"
                  onClick={() => setExpandedExperience(expandedExperience === exp.id ? null : exp.id)}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
                      <p className="text-purple-300">{exp.company} • {exp.period}</p>
                    </div>
                    <svg 
                      className={`w-5 h-5 text-gray-400 transform transition-transform ${expandedExperience === exp.id ? 'rotate-180' : ''}`} 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                  <p className="text-gray-300 mt-2">{exp.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mt-4">
                    {exp.skills.map((skill, i) => (
                      <span key={i} className="bg-purple-600/20 text-purple-300 text-sm px-3 py-1 rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                {expandedExperience === exp.id && (
                  <div className="px-6 pb-6">
                    <h4 className="text-lg font-medium text-white mb-3">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="text-gray-300 flex items-start">
                          <svg className="w-5 h-5 text-purple-400 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Projects View */}
        {activeTab === 'projects' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <div key={project.id} className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="bg-blue-600/20 text-blue-300 text-sm px-3 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <p className="text-gray-300 mb-4"><strong>Impact:</strong> {project.impact}</p>
                
                <a 
                  href={project.document} 
                  className="text-purple-400 hover:text-purple-300 font-medium flex items-center"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  View Project Details
                </a>
              </div>
            ))}
          </div>
        )}

        {/* Skills View */}
        {activeTab === 'skills' && (
          <div className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-6">
            <h2 className="text-2xl font-semibold text-white mb-6">Technical Skills</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Object.entries(skills).map(([category, items]) => (
                <div key={category} className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <h3 className="text-lg font-medium text-white mb-3">{category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill, i) => (
                      <span key={i} className="bg-green-600/20 text-green-300 text-sm px-3 py-1 rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8">
              <h3 className="text-lg font-medium text-white mb-4">Skills Proficiency</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-300">Python</span>
                    <span className="text-gray-300">Advanced</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2.5">
                    <div className="bg-purple-600 h-2.5 rounded-full" style={{width: '90%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-300">Test Automation</span>
                    <span className="text-gray-300">Advanced</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2.5">
                    <div className="bg-purple-600 h-2.5 rounded-full" style={{width: '85%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-300">IC Validation</span>
                    <span className="text-gray-300">Advanced</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2.5">
                    <div className="bg-purple-600 h-2.5 rounded-full" style={{width: '88%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-300">Hardware/Software Integration</span>
                    <span className="text-gray-300">Intermediate</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2.5">
                    <div className="bg-purple-600 h-2.5 rounded-full" style={{width: '75%'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-8 mt-8 text-center">
          <h2 className="text-2xl font-semibold text-white mb-4">Interested in working together?</h2>
          <p className="text-gray-300 mb-6">I'm always open to discussing new opportunities and interesting projects.</p>
          <Link 
            href="/contact" 
            className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors inline-flex items-center"
          >
            Get In Touch
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}