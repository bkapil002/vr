import React from 'react'
import Google from "../../image/Google.png";
import Linked from "../../image/Linked.png";
import Twitter from "../../image/Twitter.png";
import Facebook from "../../image/Facebook.png";

const SocialMedia = () => {
  return (
    <div className='w-full bg-white py-9 lg:py-10'>
      <div className=" flex flex-col items-center gap-4 lg:flex-row lg:justify-between">
                {/* Social */}
                <div className="flex items-center gap-4">
                  <span className="text-[18px] text-gray-900">Follow Trade VR</span>
                  <div className="flex items-center gap-3">
                    <img src={Twitter} className="w-[20px] sm:w-[23px]" alt="Twitter" />
                    <img src={Linked} className="w-[18px] sm:w-[21px]" alt="LinkedIn" />
                    <img src={Google} className="w-[18px] sm:w-[20px]" alt="Google" />
                    <img src={Facebook} className="w-[10px] sm:w-[11px]" alt="Facebook" />
                  </div>
                </div>
      
                {/* Back to top */}
                <a
                  href="#top"
                  className="flex bg-[#E6E6E6] py-2 px-3 rounded-[4px] items-center gap-2 text-sm text-gray-600 hover:text-gray-900"
                >
                  ↑ Back to top
                </a>
              </div>
    </div>
  )
}

export default SocialMedia
