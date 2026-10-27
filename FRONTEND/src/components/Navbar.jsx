import React from "react";
import {
  CiHeart,
  CiLocationOn,
  CiSearch,
  CiShoppingCart,
  CiUser,
} from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {
  return (
    <div>
      <div className="w-full bg-slate-700 flex items-center justify-center gap-2 py-2 border-b-2 border-slate-600">
        <CiLocationOn className="text-white text-lg" />
        <p className="text-sm font-light text-white tracking-wider">
          Store Location: Lincoln- 344, Illinois, Chicago, USA
        </p>
      </div>
      <div className="w-full flex justify-between gap-4 py-4 px-10 bg-slate-700 shadow">
        <div className="flex gap-4 lg:gap-6">
          <div className="flex items-center gap-2 cursor-pointer group relative">
            <h4 className="text-slate-200 font-light group-hover:text-amber-400 transition-all duration-300">
              Home
            </h4>
            <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-full h-0.5 rounded-full bg-amber-400/80 scale-x-0 group-hover:scale-x-100 transition-all duration-300"></div>
          </div>
          <div className="flex items-center gap-2 cursor-pointer group relative">
            <div className="flex items-center gap-2">
              <h4 className="text-slate-200 font-light group-hover:text-amber-400 transition-all duration-300">
                Shopping
              </h4>
              <IoIosArrowDown className="text-slate-200 group-hover:text-amber-400 transition-all duration-300" />
            </div>
            <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-full h-0.5 rounded-full bg-amber-400/80 scale-x-0 group-hover:scale-x-100 transition-all duration-300"></div>
            <div className="absolute w-2xl bg-white hidden group-hover:flex justify-between -bottom-60 p-8 transition-all duration-300 rounded-md">
              <div className="space-y-2">
                <h2 className="text-base font-semibold">Men</h2>
                <div className="space-y-1">
                  <p className="text-slate-900 font-light hover:text-amber-400">
                    T-Shirts
                  </p>
                  <p className="text-slate-900 font-light hover:text-amber-400">
                    Casual Shirts
                  </p>
                  <p className="text-slate-900 font-light hover:text-amber-400">
                    Formal Shirts
                  </p>
                  <p className="text-slate-900 font-light hover:text-amber-400">
                    Jakets
                  </p>
                  <p className="text-slate-900 font-light hover:text-amber-400">
                    Blazers & Coats
                  </p>
                </div>
              </div>
              <div className="space-y-2">
                <h2 className="text-base font-semibold">Women</h2>
                <div className="space-y-1">
                  <p className="text-slate-900 font-light hover:text-amber-400">
                    Kurtas & Suits
                  </p>
                  <p className="text-slate-900 font-light hover:text-amber-400">
                    Sarees
                  </p>
                  <p className="text-slate-900 font-light hover:text-amber-400">
                    Ethnic Wear
                  </p>
                  <p className="text-slate-900 font-light hover:text-amber-400">
                    Lehenga Cholis
                  </p>
                  <p className="text-slate-900 font-light hover:text-amber-400">
                    Jackets
                  </p>
                </div>
              </div>
              <div className="space-y-2">
                <h2 className="text-base font-semibold">Footer</h2>
                <div className="space-y-1">
                  <p className="text-slate-900 font-light hover:text-amber-400">
                    Flats
                  </p>
                  <p className="text-slate-900 font-light hover:text-amber-400">
                    Casual Shoes
                  </p>
                  <p className="text-slate-900 font-light hover:text-amber-400">
                    Heels
                  </p>
                  <p className="text-slate-900 font-light hover:text-amber-400">
                    Boots
                  </p>
                  <p className="text-slate-900 font-light hover:text-amber-400">
                    Sports Shoes & Floaters
                  </p>
                </div>
              </div>
              <div className="space-y-2">
                <h2 className="text-base font-semibold">Kids</h2>
                <div className="space-y-1">
                  <p className="text-slate-900 font-light hover:text-amber-400">
                    T-Shirts
                  </p>
                  <p className="text-slate-900 font-light hover:text-amber-400">
                    Shirts
                  </p>
                  <p className="text-slate-900 font-light hover:text-amber-400">
                    Jeans
                  </p>
                  <p className="text-slate-900 font-light hover:text-amber-400">
                    Trousers
                  </p>
                  <p className="text-slate-900 font-light hover:text-amber-400">
                    Party Wear
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2 cursor-pointer group relative">
            <h4 className="text-slate-200 font-light group-hover:text-amber-400 transition-all duration-300">
              Our Story
            </h4>
            <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-full h-0.5 rounded-full bg-amber-400/80 scale-x-0 group-hover:scale-x-100 transition-all duration-300"></div>
          </div>
          <div className="flex items-center gap-2 cursor-pointer group relative">
            <h4 className="text-slate-200 font-light group-hover:text-amber-400 transition-all duration-300">
              Blog
            </h4>
            <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-full h-0.5 rounded-full bg-amber-400/80 scale-x-0 group-hover:scale-x-100 transition-all duration-300"></div>
          </div>
          <div className="flex items-center gap-2 cursor-pointer group relative">
            <h4 className="text-slate-200 font-light group-hover:text-amber-400 transition-all duration-300">
              Contact Us
            </h4>
            <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-full h-0.5 rounded-full bg-amber-400/80 scale-x-0 group-hover:scale-x-100 transition-all duration-300"></div>
          </div>
        </div>
        <div className="w-xl">
          <div className="border border-slate-300 py-2 px-4 rounded-md flex items-center gap-2">
            <input
              className="w-full text-base text-slate-200 font-normal tracking-wider outline-0"
              type="text"
              placeholder="Search your product..."
            />
            <CiSearch className="text-2xl text-slate-300 cursor-pointer hover:text-amber-400" />
          </div>
        </div>
        <div className="flex items-center justify-end gap-8">
          <div className="relative">
            <CiHeart className="text-2xl text-slate-200 hover:text-amber-400 cursor-pointer transition-all duration-200" />
            <div className="absolute w-4 h-4 -top-1 -right-2 bg-amber-600/90 rounded-full flex items-center justify-center text-xs text-white">
              2
            </div>
          </div>
          <div className="relative">
            <CiShoppingCart className="text-2xl text-slate-200 hover:text-amber-400 cursor-pointer transition-all duration-200" />
            <div className="absolute w-4 h-4 -top-1 -right-2 bg-amber-600/90 rounded-full flex items-center justify-center text-xs text-white">
              4
            </div>
          </div>
          <div>
            <CiUser className="text-2xl text-slate-200 hover:text-amber-400 cursor-pointer transition-all duration-200" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
