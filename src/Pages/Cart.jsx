import React from 'react';
import { Link } from 'react-router-dom';

const Cart = () => {
  return (
    <div className=" bg-white">
      {/* Cart Header */}
      <div className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
          <h1 className="text-2xl sm:text-[39px] lg:text-[32px] font-semibold text-gray-900">
            Cart
          </h1>
        </div>
      </div>

      {/* Empty Cart Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center py-12 sm:py-16 lg:py-24">
          {/* Empty State Message */}
          <div className="text-center mb-8 sm:mb-10">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-900 mb-3 sm:mb-4">
              Your cart is empty
            </h2>
            <p className="text-sm sm:text-base text-gray-600">
              Sign in to see if you've saved any items
            </p>
          </div>

          {/* Sign In Button */}
          <Link to='/signin' className="bg-[#005a9e] hover:bg-[#005a9e] text-white font-medium px-8 sm:px-12 py-2 sm:py-2 rounded transition-colors text-sm sm:text-base mb-4 sm:mb-5">
            Sign in
          </Link>

          {/* Keep Shopping Link */}
          <Link 
            to="/" 
            className="text-[#005a9e] hover:underline text-sm sm:text-base flex items-center gap-1 group"
          >
            Keep shopping
            <svg 
              className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        {/* Help Section */}
        <div className="py-8 sm:py-12 border-t border-gray-200">
          <div className="text-left">
            <p className="text-sm sm:text-base font-semibold text-gray-900 mb-2">
              Need help?
            </p>
            <a 
              href="#" 
              className="text-[#005a9e] hover:underline text-sm sm:text-base"
            >
              Contact support
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;