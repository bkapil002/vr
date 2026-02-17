import React from 'react';
import { Link } from 'react-router-dom';

const BlogArticles = () => {
  // Featured articles array
  const featuredArticles = [
    {
      id: 1,
      title: "What Is Immersive Vocational Training",
      date: "Jan 27, 2026",
      author: "Judson Althoff - CEO, Teade VR commercial business",
      image: "https://blogs.microsoft.com/wp-content/uploads/2025/12/OMB-FY26Q2-Hero.jpg",
      link: "/blog-articles/how-teade-vr-is-empowering-frontier-transformation"
    },
    {
      id: 2,
      title: "What Is the Difference Between Traditional Workshops and VR Labs?",
      date: "Jan 26, 2026",
      author: "Scott Guthrie - Executive Vice President, Cloud + AI",
      image: "https://blogs.microsoft.com/wp-content/uploads/2026/01/Maia200_header-960x540.jpg",
      link: "/blog-articles/maia-200-ai-accelerator-for-inference"
    },
    {
      id: 3,
      title: "The Next Decade of Vocational Education: Immersive, Measurable, Scalable",
      date: "Jan 27, 2026",
      author: "Judson Althoff - CEO, Teade VR commercial business",
      image: "https://blogs.microsoft.com/wp-content/uploads/2026/01/OMB-Open-to-Work-Book-Hero-Final-960x540.jpg",
      link: "/blog-articles/how-teade-vr-is-empowering-frontier-transformation"
    },
  ];

  // More news articles array
  const moreNews = [
    {
      id: 1,
      title: "Why Immersive VR Is Redefining Practical Skill Development in 2026",
      date: "Nov 12, 2025",
      author: "Scott Guthrie - Executive Vice President, Cloud + AI",
      image: "https://blogs.microsoft.com/wp-content/uploads/2025/11/OMB-Datacenter-11_11-Hero-480x270.jpg",
      link: "/blog-articles/infinite-scale-azure-ai-superfactory"
    },
    {
      id: 2,
      title: "How VR Reduces Training Risk While Increasing Competency",
      date: "Nov 11, 2025",
      author: "Alysa Taylor - Chief Marketing Officer, Commercial Cloud & AI",
      image: "https://blogs.microsoft.com/wp-content/uploads/2025/11/OMB-IDC-25-Art-Hero-Final_Final-480x270.png",
      link: "/blog-articles/bridging-ai-divide-frontier-firms"
    },
    {
      id: 3,
      title: "Why Data-Driven Skill Tracking Is the Future of Workforce Planning",
      date: "Nov 5, 2025",
      author: "Charlie Bell - Executive Vice President Security",
      image: "https://blogs.microsoft.com/wp-content/uploads/2025/11/OMB-Security-11-5-Hero_Final-480x270.jpg",
      link: "/blog-articles/ai-double-agents-cybersecurity"
    }
  ];

  return (
    <div className="max-w-[1400px] mb-15 mx-auto px-4 sm:px-6 md:px-8 ">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 ">
        {/* Featured Section - Left Side (2 columns) */}
        <div className="lg:col-span-2">
          <h2 className="text-2xl text-gray-600 font-normal mb-6 mt-5">Featured</h2>
          <div className="space-y-6">
            {featuredArticles.map((article) => (
              <div key={article.id} className="group cursor-pointer">
                <div className="overflow-hidden rounded-lg mb-4">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <Link to={article.link} className="space-y-2">
                  <p className="text-sm text-gray-600">
                    {article.date} | {article.author}
                  </p>
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-[#005a9e] transition-colors">
                    {article.title}
                  </h3>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* More News Section - Right Side (1 column) */}
        <div className="lg:col-span-1">
          <h2 className="text-2xl text-gray-600 font-normal mb-6 mt-5">More News</h2>
          <div className="space-y-6">
            {moreNews.map((article) => (
              <div key={article.id} className="group cursor-pointer">
                <div className="overflow-hidden rounded-lg mb-3">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <Link to={article.link} className="space-y-2">
                  <p className="text-xs text-gray-600">
                    {article.date} | {article.author}
                  </p>
                  <h3 className="text-base font-semibold text-gray-900 group-hover:text-[#005a9e] transition-colors">
                    {article.title}
                  </h3>
                </Link>
              </div>
            ))}
          </div>
          
          {/* View More Button */}
          <div className="mt-8">
            <button className="bg-[#005a9e] hover:bg-[#005a9e] text-white font-semibold px-6 py-3 rounded transition-colors duration-300 flex items-center gap-2">
              View More
              <svg 
                className="w-4 h-4" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogArticles;