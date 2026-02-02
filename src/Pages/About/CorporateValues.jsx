import React from "react";

const CorporateValues = () => {
  return (
    <section className=" w-full bg-white">
      <div className="py-9 lg:py-10">
        
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <h2 className="text-3xl lg:text-4xl font-semibold mb-4">
            Our corporate values
          </h2>
          <p className="text-base lg:text-lg text-gray-700 leading-relaxed">
            Our values align to our mission, support our culture, and serve as a
            declaration of how we treat each other, our customers, and our
            partners.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">
          
          {/* Respect */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Respect</h3>
            <p className="text-gray-700 leading-relaxed">
              We recognize that the thoughts, feelings, and backgrounds of
              others are as important as our own.
            </p>
          </div>

          {/* Integrity */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Integrity</h3>
            <p className="text-gray-700 leading-relaxed">
              We are honest, ethical, and trustworthy.
            </p>
          </div>

          {/* Accountability */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Accountability</h3>
            <p className="text-gray-700 leading-relaxed">
              We accept full responsibility for our decisions, actions, and
              results.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CorporateValues;
