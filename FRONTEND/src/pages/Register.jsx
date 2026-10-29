import React from "react";
import assets from "../assets/assets";

const Register = () => {
  return (
    <div className="w-full h-screen flex">
      <div className="w-7/12">
        <img
          className="w-full h-full object-cover object-top"
          src={assets.loginImage}
          alt="login Image"
        />
      </div>
      <div className="w-5/12 flex items-center justify-center">
        <div className="w-full px-20 space-y-6">
          <div className="space-y-1">
            <h2 className="text-2xl font-semibold text-slate-100">
              Welcome 👋
            </h2>
            <p className="text-xs tracking-wider font-medium text-slate-400">
              Please login here
            </p>
          </div>
          <div className="space-y-6">
            <div className="flex flex-col gap-1">
              <p className="text-xs text-slate-300">Full Name</p>
              <div className="py-2 px-4 border-2 border-slate-400 rounded-md ">
                <input
                  className="w-full outline-0 text-sm text-slate-200 tracking-wider"
                  placeholder="Enter your name"
                  type="text"
                />
              </div>
            </div>
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
            <div className="flex flex-col gap-1">
              <p className="text-xs text-slate-300">Password</p>
              <div className="py-2 px-4 border-2 border-slate-400 rounded-md ">
                <input
                  className="w-full outline-0 text-sm text-slate-200 tracking-wider"
                  placeholder="Enter Password"
                  type="password"
                />
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-xs text-slate-300">Confirm Password</p>
              <div className="py-2 px-4 border-2 border-slate-400 rounded-md ">
                <input
                  className="w-full outline-0 text-sm text-slate-200 tracking-wider"
                  placeholder="Re-enter Password"
                  type="password"
                />
              </div>
              <div className="w-full flex justify-between mt-1">
                <div className="flex items-center gap-2">
                  <input
                    className="w-2.9 h-2.9 accent-slate-100"
                    id="Check"
                    type="checkbox"
                  />
                  <label
                    htmlFor="Check"
                    className="text-xs font-light text-slate-200 tracking-wider cursor-pointer"
                  >
                    I agree to the <span>Terms & Conditons</span>
                  </label>
                </div>
              </div>
            </div>
            <div className="mt-10">
              <button className="w-full py-2 px-4 rounded-md text-sm text-slate-900 bg-slate-100 tracking-wider cursor-pointer active:scale-95 transition-all duration-300">
                Signup
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
