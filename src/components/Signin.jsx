import React, { useState } from 'react';
import logo from '../image/logo.jpg';
import { Link } from 'react-router-dom';

const Signin = () => {
  const [email, setEmail] = useState('');

  return (
    <div className="min-h-screen relative overflow-hidden">
      
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            'url(https://logincdn.msauth.net/shared/5/images/fluent_web_light_2_145a07dcb971527a82b8.svg)',
        }}
      />

      {/* Content Wrapper */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4">

        {/* Sign In Card */}
        <div className="w-full max-w-md bg-white rounded-lg shadow-2xl p-8 md:p-12 mb-24">
          
          <div className="flex justify-center mb-6">
            <img src={logo} alt="logo" className="w-28" />
          </div>

          <h1 className="text-2xl md:text-3xl font-medium text-center text-gray-800 mb-3">
            Sign in
          </h1>

          <p className="text-center text-sm md:text-base text-gray-600 mb-6">
            Use your Microsoft account.
          </p>

          <input
            type="text"
            placeholder="Email or phone number"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-3 border border-gray-300 rounded text-sm focus:outline-none focus:border-[#005a9e] focus:ring-1 focus:ring-[#005a9e]"
          />

          <div className="my-4">
            <Link
              to="/recover"
              className="text-[#005a9e] hover:underline font-medium text-sm"
            >
              Forgot your username?
            </Link>
          </div>

          <button className="w-full bg-[#005a9e] text-white font-medium py-3 rounded mb-6">
            Next
          </button>

          <div className="text-center text-sm">
            <span className="text-gray-600">New to Microsoft? </span>
            <Link to="/signup" className="text-[#005a9e] font-medium hover:underline">
              Create an account
            </Link>
          </div>
        </div>

        {/* Footer */}
        <div className="absolute bottom-0 w-full px-4 py-4 text-center">
          <div className="flex flex-wrap gap-4 justify-center text-xs md:text-sm text-gray-600">
            <a href="#" className="hover:underline">Help and feedback</a>
            <a href="#" className="hover:underline">Terms of use</a>
            <a href="#" className="hover:underline">Privacy and cookies</a>
          </div>

          <p className="mt-2 text-xs text-gray-500">
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

export default Signin;
