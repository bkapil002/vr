import React from 'react';

export default function ProductsSection() {
  const products = [
    {
      icon: (
        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="currentColor">
          <rect x="1" y="1" width="10" height="10" />
          <rect x="13" y="1" width="10" height="10" />
          <rect x="1" y="13" width="10" height="10" />
          <rect x="13" y="13" width="10" height="10" />
        </svg>
      ),
      title: "VR world",
      link: "#"
    },
    {
      icon: (
        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="currentColor">
          <circle cx="12" cy="12" r="11" stroke="currentColor" strokeWidth="2" fill="none"/>
          <path d="M12 2 L12 12 L22 12" strokeWidth="2"/>
        </svg>
      ),
      title: "VR HVAC",
      link: "#"
    },
    {
      icon: (
        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="currentColor">
          <rect x="1" y="1" width="10" height="10" />
          <rect x="13" y="1" width="10" height="10" />
          <rect x="1" y="13" width="10" height="10" />
          <rect x="13" y="13" width="10" height="10" />
        </svg>
      ),
      title: "VR Carpentry",
      link: "#"
    },
    {
      icon: (
        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="7" width="20" height="14" rx="2" />
          <path d="M2 10 L22 10" />
          <path d="M7 3 L7 7" />
          <path d="M17 3 L17 7" />
        </svg>
      ),
      title: "VR Strile ",
      link: "#"
    }
  ];

  return (
    <div className="w-full  bg-white mt-10 py-20">
      <div className="max-w-3xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 ">
          {products.map((product, index) => (
            <a
              key={index}
              href={product.link}
              className="flex flex-col items-center text-center group"
            >
              <div className="text-gray-800 mb-4 transition-transform duration-200 group-hover:scale-110">
                {product.icon}
              </div>
              <span className="text-blue-600 hover:underline text-sm font-medium">
                {product.title}
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}