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

export default function Blog() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 pt-16">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-8 md:p-12">
          <h1 className="text-4xl font-bold text-white mb-8">Blog</h1>
          
          <p className="text-gray-300 mb-12 max-w-3xl">
            Sharing insights on system test engineering, global development initiatives, and mentorship experiences. 
            Join me as I explore the intersection of technology, education, and cross-cultural collaboration.
          </p>
          
          <div className="space-y-8 mb-12">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-white/20 transition-colors">
                <div className="flex justify-between items-start mb-2">
                  <span className="bg-purple-600/30 text-purple-300 text-sm px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                  <span className="text-gray-400 text-sm">{post.date}</span>
                </div>
                <h2 className="text-2xl font-semibold text-white mb-3 hover:text-purple-300 transition-colors">
                  <Link href={`/blog/${post.id}`}>
                    {post.title}
                  </Link>
                </h2>
                <p className="text-gray-300 mb-4">{post.excerpt}</p>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 text-sm">{post.readTime}</span>
                  <Link 
                    href={`/blog/${post.id}`}
                    className="text-purple-400 hover:text-purple-300 font-medium flex items-center"
                  >
                    Read more
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
          
          <div className="text-center">
            <p className="text-gray-400 mb-4">More articles coming soon...</p>
            <div className="inline-flex space-x-4">
              <button className="bg-white/10 text-white px-6 py-2 rounded-lg border border-white/20 hover:bg-white/20 transition-colors">
                Previous
              </button>
              <button className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}