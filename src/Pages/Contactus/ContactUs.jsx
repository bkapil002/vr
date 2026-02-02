import React from "react";
import { Link } from "react-router-dom";

const ContactUs = () => {
  return (
    <>
      {/* TOP BLUE SECTION */}
      <section className="w-full bg-[#005a9e] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-20 text-center">
          <h1 className="text-3xl sm:text-4xl font-semibold mb-6">
            Contact us
          </h1>

          <p className="text-base sm:text-lg mb-8">
            Sign in so we can get you the right help and support.
          </p>

          <Link
            to="/signin"
            className="inline-block border border-white px-8 py-2 text-sm font-medium hover:bg-white hover:text-[#005a9e] transition"
          >
            Sign in
          </Link>

          <div className="mt-4">
            <Link
              to="/recover"
              className="text-sm underline hover:no-underline"
            >
              Can&apos;t sign in
            </Link>
          </div>
        </div>
      </section>

      {/* BOTTOM SUPPORT OPTIONS */}
      <section className="w-full bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8  py-20">
          <h2 className="text-xl font-semibold text-black mb-8">
            More support options
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* LEFT OPTION */}
            <div>
              <Link
                to="#"
                className="text-[#005a9e] font-medium hover:underline"
              >
                Business Assist
              </Link>

              <p className="text-sm text-gray-700 mt-2 leading-relaxed">
                Subscribe to Business Assist to get expert advice from
                small-business specialists. Already a subscriber?{" "}
                <Link
                  to="/signin"
                  className="text-[#005a9e] hover:underline"
                >
                  sign in now
                </Link>
              </p>
            </div>

            {/* RIGHT OPTION */}
            <div>
              <Link
                to="#"
                className="text-[#005a9e] font-medium hover:underline"
              >
                Help for admins of small businesses
              </Link>

              <p className="text-sm text-gray-700 mt-2 leading-relaxed">
                Open a service request in the Microsoft 365 admin center.
                This service is free.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
