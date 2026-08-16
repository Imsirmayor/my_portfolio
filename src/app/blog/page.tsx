// import Link from 'next/link';

// // Mock blog posts data - you'll replace this with real content
// const blogPosts = [
//   {
//     id: 1,
//     title: "Automating IC Test Code Generation with PDL and Python",
//     excerpt: "How I developed a pipeline to automate test code generation for semiconductor validation, reducing manual effort across multiple chip projects.",
//     date: "2025-06-15",
//     category: "Technical",
//     readTime: "8 min read"
//   },
//   {
//     id: 2,
//     title: "Lessons from Training Non-Technical Audiences",
//     excerpt: "Reflections on adapting technical content for diverse audiences during EU-funded workshops and training sessions.",
//     date: "2025-05-22",
//     category: "Education",
//     readTime: "6 min read"
//   },
//   {
//     id: 3,
//     title: "Building a Hardware Abstraction Layer for Instrument Control",
//     excerpt: "A deep dive into creating a Python-based HAL for controlling Keysight and NI instruments using OOP principles.",
//     date: "2025-04-10",
//     category: "Technical",
//     readTime: "10 min read"
//   }
// ];

// export default function Blog() {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 pt-16">
//       <div className="max-w-4xl mx-auto px-4 py-12">
//         <div className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-8 md:p-12">
//           <h1 className="text-4xl font-bold text-white mb-8">Blog</h1>
          
//           <p className="text-gray-300 mb-12 max-w-3xl">
//             Sharing insights on system test engineering, global development initiatives, and mentorship experiences. 
//             Join me as I explore the intersection of technology, education, and cross-cultural collaboration.
//           </p>
          
//           <div className="space-y-8 mb-12">
//             {blogPosts.map((post) => (
//               <article key={post.id} className="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-white/20 transition-colors">
//                 <div className="flex justify-between items-start mb-2">
//                   <span className="bg-purple-600/30 text-purple-300 text-sm px-3 py-1 rounded-full">
//                     {post.category}
//                   </span>
//                   <span className="text-gray-400 text-sm">{post.date}</span>
//                 </div>
//                 <h2 className="text-2xl font-semibold text-white mb-3 hover:text-purple-300 transition-colors">
//                   <Link href={`/blog/${post.id}`}>
//                     {post.title}
//                   </Link>
//                 </h2>
//                 <p className="text-gray-300 mb-4">{post.excerpt}</p>
//                 <div className="flex justify-between items-center">
//                   <span className="text-gray-400 text-sm">{post.readTime}</span>
//                   <Link 
//                     href={`/blog/${post.id}`}
//                     className="text-purple-400 hover:text-purple-300 font-medium flex items-center"
//                   >
//                     Read more
//                     <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                     </svg>
//                   </Link>
//                 </div>
//               </article>
//             ))}
//           </div>
          
//           <div className="text-center">
//             <p className="text-gray-400 mb-4">More articles coming soon...</p>
//             <div className="inline-flex space-x-4">
//               <button className="bg-white/10 text-white px-6 py-2 rounded-lg border border-white/20 hover:bg-white/20 transition-colors">
//                 Previous
//               </button>
//               <button className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors">
//                 Next
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// src/app/blog/page.tsx
import Link from 'next/link';

// Mock blog posts data - you'll replace this with real content
const blogPosts = [
  {
    id: 1,
    title: "Automating IC Test Code Generation with PDL and Python",
    excerpt: "How I developed a pipeline to automate test code generation for semiconductor validation, reducing manual effort across multiple chip projects.",
    date: "2025-06-15",
    category: "Technical",
    readTime: "8 min read"
  },
  {
    id: 2,
    title: "Lessons from Training Non-Technical Audiences",
    excerpt: "Reflections on adapting technical content for diverse audiences during EU-funded workshops and training sessions.",
    date: "2025-05-22",
    category: "Education",
    readTime: "6 min read"
  },
  {
    id: 3,
    title: "Building a Hardware Abstraction Layer for Instrument Control",
    excerpt: "A deep dive into creating a Python-based HAL for controlling Keysight and NI instruments using OOP principles.",
    date: "2025-04-10",
    category: "Technical",
    readTime: "10 min read"
  }
];

// Helper function to format dates consistently
const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
};

// Category color mapping
const categoryColors: Record<string, string> = {
  "Technical": "border-cyan-400/30 bg-cyan-500/10 text-cyan-200",
  "Education": "border-amber-400/30 bg-amber-500/10 text-amber-200",
  "Mentorship": "border-emerald-400/30 bg-emerald-500/10 text-emerald-200",
  "Global Development": "border-blue-400/30 bg-blue-500/10 text-blue-200",
};

export default function BlogPage() {
  // Statistics for the hero section
  const totalPosts = blogPosts.length;
  const categories = Array.from(new Set(blogPosts.map(post => post.category)));

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_20%_20%,#0f172a_0%,#0b1220_45%,#05070d_100%)] text-white pt-16">
      {/* Background Glows */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-purple-500/20 blur-3xl" />
        <div className="absolute top-24 -right-16 h-80 w-80 rounded-full bg-indigo-500/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-violet-500/10 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 py-12">
        {/* Header Section */}
        <div className="rounded-2xl border border-white/15 bg-white/[0.04] backdrop-blur-sm p-6 sm:p-8 mb-8">
          <p className="mb-2 inline-flex items-center rounded-full border border-white/20 bg-white/5 px-4 py-1 text-xs tracking-[0.2em] text-purple-200 uppercase">
            Thoughts & Insights
          </p>
          <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl">
            Blog
          </h1>
          <p className="mt-3 text-slate-300 max-w-3xl">
            Sharing insights on system test engineering, global development initiatives, and mentorship experiences. 
            Join me as I explore the intersection of technology, education, and cross-cultural collaboration.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="rounded-xl border border-white/15 bg-white/[0.04] p-4 text-center">
            <div className="text-2xl font-bold text-purple-300">{totalPosts}</div>
            <div className="text-sm text-slate-400">Total Articles</div>
          </div>
          <div className="rounded-xl border border-white/15 bg-white/[0.04] p-4 text-center">
            <div className="text-2xl font-bold text-indigo-300">{categories.length}</div>
            <div className="text-sm text-slate-400">Categories</div>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="space-y-6 mb-8">
          {blogPosts.map((post) => {
            const colorClass = categoryColors[post.category] || "border-white/15 bg-white/5 text-slate-300";
            
            return (
              <article 
                key={post.id} 
                className="rounded-2xl border border-white/15 bg-white/[0.04] backdrop-blur-sm p-6 transition hover:border-white/25 hover:translate-y-[-2px]"
              >
                <div className="flex flex-wrap justify-between items-start gap-2 mb-3">
                  <span className={`inline-flex rounded-full border ${colorClass} px-3 py-1 text-xs font-medium`}>
                    {post.category}
                  </span>
                  <span className="text-sm text-slate-400">{formatDate(post.date)}</span>
                </div>
                
                <h2 className="text-2xl font-semibold text-white mb-3">
                  <Link 
                    href={`/blog/${post.id}`}
                    className="hover:text-purple-300 transition-colors"
                  >
                    {post.title}
                  </Link>
                </h2>
                
                <p className="text-slate-300 mb-4">{post.excerpt}</p>
                
                <div className="flex flex-wrap justify-between items-center gap-4">
                  <span className="text-sm text-slate-400 flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {post.readTime}
                  </span>
                  <Link 
                    href={`/blog/${post.id}`}
                    className="inline-flex items-center text-purple-400 hover:text-purple-300 font-medium transition-colors"
                  >
                    Read more
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </article>
            );
          })}
        </div>

        {/* Coming Soon / Pagination */}
        <div className="rounded-2xl border border-white/15 bg-white/[0.04] backdrop-blur-sm p-6 text-center">
          <p className="text-slate-400 mb-4">More articles coming soon...</p>
          <div className="flex flex-wrap justify-center gap-3">
            <button 
              disabled
              className="rounded-lg border border-white/20 bg-white/5 px-6 py-2 text-sm text-slate-500 cursor-not-allowed"
            >
              Previous
            </button>
            <button 
              disabled
              className="rounded-lg border border-white/20 bg-white/5 px-6 py-2 text-sm text-slate-500 cursor-not-allowed"
            >
              Next
            </button>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-8 rounded-2xl border border-purple-400/25 bg-gradient-to-b from-purple-500/10 to-transparent p-6 text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-purple-200 mb-2">Stay Updated</p>
          <h2 className="text-xl font-semibold text-white mb-3">Want to read more?</h2>
          <p className="text-slate-300 max-w-2xl mx-auto mb-6">
            Follow my journey as I continue to write about engineering, global development, and mentorship.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/contact"
              className="inline-flex items-center rounded-lg bg-purple-500 px-6 py-3 font-medium text-white transition hover:bg-purple-400"
            >
              Get in Touch
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
            <Link 
              href="/"
              className="inline-flex items-center rounded-lg border border-white/20 bg-white/5 px-6 py-3 font-medium text-white transition hover:bg-white/10"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}