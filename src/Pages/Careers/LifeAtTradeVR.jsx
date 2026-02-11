import React from 'react';

const LifeAtMicrosoft = () => {
  const cards = [
    {
      id: 1,
      title: "Benefits",
      description: "Explore tradevr's world-class benefits designed to help you and your family live well.",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80",
      link: "#"
    },
    {
      id: 2,
      title: "Culture",
      description: "We will only achieve our mission if we live our culture, which starts with applying a growth mindset.",
      image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&q=80",
      link: "#"
    },
    {
      id: 3,
      title: "Diversity and inclusion",
      description: "We are committed to celebrating the diversity around us and its power to drive forward together.",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&q=80",
      link: "#"
    },
    {
      id: 4,
      title: "Hiring Tips",
      description: "Explore resources to help you prepare tradevr is here to support your interview journey.",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80",
      link: "#"
    }
  ];

  return (
    <section className="mb-20">
      <div className="">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-8 md:mb-12">
          Life at TradeVR
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-2 [@media(min-width:1366px)]:grid-cols-4 gap-6 md:gap-8">
          {cards.map((card) => (
            <div
              key={card.id}
              className="bg-white  overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 group cursor-pointer"
            >
              {/* Card Image */}
              <div className="relative h-48 md:h-40 overflow-hidden">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Card Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-[#005a9e] transition-colors">
                  {card.title}
                </h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LifeAtMicrosoft;
