import React from "react";
import {
  CiFacebook,
  CiInstagram,
  CiLocationOn,
  CiMail,
  CiPaperplane,
  CiPhone,
  CiTwitter,
} from "react-icons/ci";

const Footer = () => {
  return (
    <div className="w-full py-16 px-10">
      <div className="w-full flex items-start justify-between gap-4 border-b-2 border-gray-800 pb-10">
        <div className="w-3/12 space-y-4">
          <h2 className="text-2xl text-slate-100 font-semibold">Little Shop</h2>
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-slate-200">
              <CiPhone className="text-lg" />
              <p>+8801712345678</p>
            </div>
            <div className="flex items-center gap-2 text-slate-200">
              <CiMail className="text-lg" />
              <p>naruto@gmail.com</p>
            </div>
            <div className="flex items-center gap-2 text-slate-200">
              <CiLocationOn className="text-lg" />
              <p>3891 Gazipur, Kaliakoir Road, Sofipur Bazar</p>
            </div>
          </div>
        </div>
        <div className="w-4/12 flex justify-between">
          <div className="space-y-4">
            <h2 className="font-semibold text-slate-200">Information</h2>
            <div className="space-y-2">
              <p className="font-light text-slate-200 hover:underline">
                My Account
              </p>
              <p className="font-light text-slate-200 hover:underline">Login</p>
              <p className="font-light text-slate-200 hover:underline">
                My Cart
              </p>
              <p className="font-light text-slate-200 hover:underline">
                My Wishlist
              </p>
              <p className="font-light text-slate-200 hover:underline">
                Checkout
              </p>
            </div>
          </div>
          <div className="space-y-4">
            <h2 className="font-semibold text-slate-200">Services</h2>
            <div className="space-y-2">
              <p className="font-light text-slate-200 hover:underline">
                About Us
              </p>
              <p className="font-light text-slate-200 hover:underline">
                Careers
              </p>
              <p className="font-light text-slate-200 hover:underline">
                Delivery Information
              </p>
              <p className="font-light text-slate-200 hover:underline">
                Privacy Policy
              </p>
              <p className="font-light text-slate-200 hover:underline">
                Terms & Conditions
              </p>
            </div>
          </div>
        </div>
        <div className="w-4/12 space-y-4">
          <div className="space-y-2">
            <h2 className="font-semibold text-slate-200">Subscribe</h2>
            <p className="font-light text-slate-200">
              Enter your email below to be the first to know about new
              collections and product lunches.
            </p>
          </div>
          <div className="flex items-center justify-between gap-4 border-2 border-slate-400 rounded-md py-2 px-6">
            <CiMail className="text-2xl text-slate-400" />
            <input
              className="w-full outline-0 text-slate-400"
              type="text"
              placeholder="Your Email"
            />
            <CiPaperplane className="text-2xl text-slate-400 hover:text-amber-400 cursor-pointer" />
          </div>
        </div>
      </div>
      <div className="w-full flex justify-between py-4">
        <div className="text-base text-slate-200">
          &copy; 2026 Little Shop All Rights are reserved
        </div>
        <div className="flex gap-4">
          <CiFacebook className="text-2xl text-slate-400 cursor-pointer hover:text-amber-400 transition-all duration-200" />
          <CiInstagram className="text-2xl text-slate-400 cursor-pointer hover:text-amber-400 transition-all duration-200" />
          <CiTwitter className="text-2xl text-slate-400 cursor-pointer hover:text-amber-400 transition-all duration-200" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
