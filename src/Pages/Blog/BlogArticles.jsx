import React from 'react';
import { Link } from 'react-router-dom';

const BlogArticles = () => {
  // Featured articles array
  const featuredArticles = [
    {
      id: 1,
      title: "How Teade VR is empowering Frontier Transformation with Intelligence + Trust",
      date: "Jan 27, 2026",
      author: "Judson Althoff - CEO, Teade VR commercial business",
      image: "https://blogs.microsoft.com/wp-content/uploads/2025/12/OMB-FY26Q2-Hero.jpg",
      link: "/blog"
    },
    {
      id: 2,
      title: "Maia 200: The AI accelerator built for inference",
      date: "Jan 26, 2026",
      author: "Scott Guthrie - Executive Vice President, Cloud + AI",
      image: "https://blogs.microsoft.com/wp-content/uploads/2026/01/Maia200_header-960x540.jpg",
      link: "/blog"
    }
  ];

  // More news articles array
  const moreNews = [
    {
      id: 1,
      title: "Infinite scale: The architecture behind the Azure AI superfactory",
      date: "Nov 12, 2025",
      author: "Scott Guthrie - Executive Vice President, Cloud + AI",
      image: "https://blogs.microsoft.com/wp-content/uploads/2025/11/OMB-Datacenter-11_11-Hero-480x270.jpg",
      link: "/blog"
    },
    {
      id: 2,
      title: "Bridging the AI divide: How Frontier Firms are transforming business",
      date: "Nov 11, 2025",
      author: "Alysa Taylor - Chief Marketing Officer, Commercial Cloud & AI",
      image: "https://blogs.microsoft.com/wp-content/uploads/2025/11/OMB-IDC-25-Art-Hero-Final_Final-480x270.png",
      link: "/blog"
    },
    {
      id: 3,
      title: "Beware of double agents: How AI can fortify — or fracture — your cybersecurity",
      date: "Nov 5, 2025",
      author: "Charlie Bell - Executive Vice President Security",
      image: "https://blogs.microsoft.com/wp-content/uploads/2025/11/OMB-Security-11-5-Hero_Final-480x270.jpg",
      link: "#"
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