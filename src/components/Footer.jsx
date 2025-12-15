import React from 'react';
import english from '../image/english.png'

export default function Footer() {
  return (
    <footer className="w-full bg-[#EFEFEF] from-gray-50 to-gray-100 border-t border-gray-200">
      <div className="max-w-6xl  mx-auto px-4 sm:px-6 md:px-8 py-12 lg:py-16">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row  gap-5  justify-between ">
          {/* Products */}
          <div className="space-y-4">
            <h3 className="font-bold text-gray-900 text-base tracking-tight">Products</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-sm text-[#000000]  hover:underline transition-colors duration-200">
                  VR Weld
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-[#000000]  hover:underline transition-colors duration-200">
                  VR HVAC
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-[#000000]  hover:underline transition-colors duration-200">
                  VR Carpentry
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-[#000000]  hover:underline transition-colors duration-200">
                  VR Sterile
                </a>
              </li>
              <li>
                <a href="#" className="text-sm  text-[#000000]  hover:underline transition-colors duration-200">
                  All VR Modules 
                </a>
              </li>
            </ul>
          </div>

          {/* Solutions */}
          <div className="space-y-4">
            <h3 className="font-bold text-gray-900 text-base tracking-tight">Solutions</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-sm text-[#000000]  hover:underline transition-colors duration-200">
                  Schools & Colleges
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-[#000000]  hover:underline transition-colors duration-200">
                  Workforce Upskilling
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-[#000000]  hover:underline transition-colors duration-200">
                  Prison Education
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-[#000000]  hover:underline transition-colors duration-200">
                  Reskilling Programs
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-[#000000]  hover:underline transition-colors duration-200">
                  Global Deployments
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h3 className="font-bold text-gray-900 text-base tracking-tight">Resources</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-sm text-[#000000]  hover:underline transition-colors duration-200">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-[#000000]  hover:underline transition-colors duration-200">
                  Blog & Articles
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-[#000000]  hover:underline transition-colors duration-200">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-[#000000]  hover:underline transition-colors duration-200">
                  Support Center
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-[#000000]  hover:underline transition-colors duration-200">
                  Download Brochures
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="font-bold text-gray-900 text-base tracking-tight">Company</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-sm text-[#000000]  hover:underline transition-colors duration-200">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-[#000000]  hover:underline transition-colors duration-200">
                  Our Mission
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-[#000000]  hover:underline transition-colors duration-200">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-[#000000]  hover:underline transition-colors duration-200">
                  Partnerships
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-[#000000]  hover:underline transition-colors duration-200">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className=" border-gray-300 py-8 lg:py-12"></div>

        {/* Bottom Section */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6 lg:gap-4">
          {/* Language Selector */}
          <div className="flex text-[#000000]  justify-center  text-xs lg:text-sm items-center gap-1">
           
              <img src={english} className='w-[21px]'/>
              <span className="font-medium">English (US)</span>
          </div>

          {/* Links */}
          

          {/* Copyright */}
          <div className="order-2 flex  gap-5 lg:order-3 text-sm text-[#000000] ">
            <div className="flex flex-wrap justify-center gap-4 lg:gap-6 text-xs lg:text-sm">
            <a href="#" className="text-[#000000]  hover:text-gray-900 hover:underline transition-colors duration-200">
              Privacy
            </a>
            <a href="#" className="text-[#000000]  hover:text-gray-900 hover:underline transition-colors duration-200">
              Terms of Use
            </a>
            <a href="#" className="text-[#000000]  hover:text-gray-900 hover:underline transition-colors duration-200">
              Trademarks
            </a>
          </div>
            © 2025 TradeVR
          </div>
        </div>


      </div>
    </footer>
  );
}