import React from "react";
import assets from "../assets/assets";
import { FaAngleLeft } from "react-icons/fa";

const EnterOTP = () => {
  return (
    <div className="w-full h-screen flex">
      <div className="w-7/12">
        <img
          className="w-full h-full object-cover object-center"
          src={assets.forgotImage}
          alt="login Image"
        />
      </div>
      <div className="w-5/12 flex items-center justify-center">
        <div className="w-full px-20 space-y-6">
          <div className="w-fit flex items-center gap-2 group relative cursor-pointer">
            <FaAngleLeft className="text-slate-400 group-hover:text-amber-400 transition-all duration-300" />
            <p className="text-slate-200 group-hover:text-amber-400 transition-all duration-300">
              Back
            </p>
          </div>
          <div className="space-y-1">
            <h2 className="text-2xl font-semibold text-slate-100">Enter OTP</h2>
            <p className="text-xs tracking-wider font-medium text-slate-400">
              We have share a code of your registered email address
              robertfox@example.com
            </p>
          </div>
          <div className="space-y-6">
            {/* <!-- OTP Form --> */}
            <form id="otp-form" class="space-y-6">
              <div class="flex justify-center gap-2" id="otp-container">
                <input
                  type="text"
                  maxlength="1"
                  pattern="\d*"
                  inputmode="numeric"
                  class="w-12 h-12 text-center text-xl font-semibold text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400 focus:bg-white transition-all"
                  required
                />
                <input
                  type="text"
                  maxlength="1"
                  pattern="\d*"
                  inputmode="numeric"
                  class="w-12 h-12 text-center text-xl font-semibold text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400 focus:bg-white transition-all"
                  required
                />
                <input
                  type="text"
                  maxlength="1"
                  pattern="\d*"
                  inputmode="numeric"
                  class="w-12 h-12 text-center text-xl font-semibold text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400 focus:bg-white transition-all"
                  required
                />
                <input
                  type="text"
                  maxlength="1"
                  pattern="\d*"
                  inputmode="numeric"
                  class="w-12 h-12 text-center text-xl font-semibold text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400 focus:bg-white transition-all"
                  required
                />
                <input
                  type="text"
                  maxlength="1"
                  pattern="\d*"
                  inputmode="numeric"
                  class="w-12 h-12 text-center text-xl font-semibold text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400 focus:bg-white transition-all"
                  required
                />
                <input
                  type="text"
                  maxlength="1"
                  pattern="\d*"
                  inputmode="numeric"
                  class="w-12 h-12 text-center text-xl font-semibold text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400 focus:bg-white transition-all"
                  required
                />
              </div>
              <div className="mt-10">
                <button className="w-full py-3 px-4 rounded-md text-sm text-slate-900 bg-slate-100 tracking-wider cursor-pointer active:scale-95 transition-all duration-300">
                  Verify Code
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnterOTP;
