import React from "react";
import assets from "../assets/assets";
import { FaAngleLeft } from "react-icons/fa";

const ForgotPassword = () => {
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
            <p className="text-slate-200 group-hover:text-amber-400 transition-all duration-300">Back</p>
          </div>
          <div className="space-y-1">
            <h2 className="text-2xl font-semibold text-slate-100">
              Forgot Password
            </h2>
            <p className="text-xs tracking-wider font-medium text-slate-400">
              Enter your registered email address. we’ll send you a code to reset your password.
            </p>
          </div>
          <div className="space-y-6">
            <div className="flex flex-col gap-1">
              <p className="text-xs text-slate-300">Email Address</p>
              <div className="py-2 px-4 border-2 border-slate-400 rounded-md ">
                <input
                  className="w-full outline-0 text-sm text-slate-200 tracking-wider"
                  placeholder="Email Address"
                  type="text"
                />
              </div>
            </div>
            <div className="mt-10">
              <button className="w-full py-2 px-4 rounded-md text-sm text-slate-900 bg-slate-100 tracking-wider cursor-pointer active:scale-95 transition-all duration-300">
                Send OTP
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
