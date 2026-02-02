import React, { useState } from 'react';
import logo from '../image/logo.jpg';
import { Link } from 'react-router-dom';
const Recover = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [showPhone, setShowPhone] = useState(false);
  const [countryCode, setCountryCode] = useState('+91');

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            'url(https://logincdn.msftauth.net/shared/5/images/fluent_web_light_2_145a07dcb971527a82b8.svg)',
        }}
      />

      {/* Content Wrapper */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4">
        {/* Recover Card */}
        <div className="w-full max-w-md bg-white rounded-lg shadow-2xl p-8 md:p-12 mb-24 relative">
          {/* Close Button - Now Inside the Box */}
          <Link to='/signin' className="absolute cursor-pointer top-4 left-4 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded p-1 transition-colors">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </Link>

          {/* Microsoft Logo */}
          <div className="flex justify-center mb-6 mt-2">
            <img src={logo} alt="logo" className="w-28" />
           
          </div>

          {/* Title */}
          <h1 className="text-2xl md:text-3xl font-medium text-center text-gray-800 mb-3">
            Recover your username
          </h1>

          <p className="text-center text-sm md:text-[15px] text-gray-600 mb-6">
            {showPhone
              ? "Enter a phone number that might be associated with your Microsoft account. If it matches, we'll send you a code."
              : "Enter an email that might be associated with your Microsoft account. If it matches, we'll send you a code."}
          </p>

          {/* Input Field - Conditional Rendering */}
          {showPhone ? (
            <div className="flex gap-2 mb-4">
              {/* Country Code Dropdown */}
              <div className="relative">
                <select
                  value={countryCode}
                  onChange={(e) => setCountryCode(e.target.value)}
                  className="w-24 h-11 px-3 py-2.5 border border-gray-300 rounded text-sm focus:outline-none focus:border-[#005a9e] focus:ring-1 focus:ring-[#005a9e] appearance-none bg-white cursor-pointer"
                >
                  <option value="+91">+91</option>
                  <option value="+1">+1</option>
                  <option value="+44">+44</option>
                  <option value="+61">+61</option>
                  <option value="+81">+81</option>
                </select>
                <svg
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 pointer-events-none text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>

              {/* Phone Number Input */}
              <input
                type="tel"
                placeholder="Phone number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="flex-1 px-3 py-2.5 border border-gray-300 rounded text-sm focus:outline-none focus:border-[#005a9e] focus:ring-1 focus:ring-[#005a9e]"
              />
            </div>
          ) : (
            <div className="mb-4">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2.5 border border-gray-300 rounded text-sm focus:outline-none focus:border-[#005a9e] focus:ring-1 focus:ring-[#005a9e]"
              />
            </div>
          )}

          {/* Toggle Link */}
          <div className="mb-6">
            <button
              onClick={() => setShowPhone(!showPhone)}
              className="text-[#005a9e] hover:underline font-medium text-sm"
            >
              {showPhone ? 'Use email address instead' : 'Use phone number instead'}
            </button>
          </div>

          {/* Next Button */}
          <button className="w-full  bg-[#005a9e] hover:bg-[#005a9e] text-white font-medium py-2.5 md:py-3 rounded transition-colors text-sm md:text-base">
            Next
          </button>
        </div>

        {/* Footer */}
        <div className="absolute bottom-0 w-full px-4 py-4 text-center">
          <div className="flex flex-wrap gap-4 justify-center text-xs md:text-sm text-gray-600 mb-2">
            <a href="#" className="hover:underline">
              Help and feedback
            </a>
            <a href="#" className="hover:underline">
              Terms of use
            </a>
            <a href="#" className="hover:underline">
              Privacy and cookies
            </a>
          </div>

          <p className="text-xs text-gray-500">
            Use private browsing if this is not your device{' '}
            <a href="#" className="text-[#005a9e] hover:underline">
              Learn more
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Recover;