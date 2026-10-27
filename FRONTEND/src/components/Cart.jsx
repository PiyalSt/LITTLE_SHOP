import React from "react";
import { CiHeart, CiShoppingCart } from "react-icons/ci";

const Cart = () => {
  return (
    <div className="py-2 px-4 space-y-4">
      <div className="w-full bg-slate-800 rounded-md relative group cursor-pointer overflow-hidden">
        <div className="w-full h-80">
          {/* <img className='w-full h-full object-cover' src="" alt="" /> */}
        </div>
        <div className="absolute top-2 -right-10 flex flex-col gap-2 group-hover:right-2 transition-all duration-400">
          <div className="p-1.5 rounded-full bg-slate-700 text-amber-400 cursor-pointer active:scale-95 transition-all duration-200 hover:bg-amber-400/90 hover:text-white">
            <CiHeart className="text-xl cursor-pointer" />
          </div>
          <div className="p-1.5 rounded-full bg-slate-700 text-amber-400 cursor-pointer active:scale-95 transition-all duration-200 hover:bg-amber-400/90 hover:text-white">
            <CiShoppingCart className="text-xl cursor-pointer" />
          </div>
        </div>
        <div className="w-full absolute -bottom-10 px-4 group-hover:bottom-2 transition-all duration-400">
          <button className="w-full bg-white py-2 rounded-md shadow active:scale-95 transition-all duration-300 cursor-pointer">
            Add to Cart
          </button>
        </div>
      </div>
      <div className="space-y-1">
        <h2 className="text-base tracking-wider text-slate-200 font-medium">
          Trendyol
        </h2>
        <p className="text-sm font-medium text-slate-400">
          Floral Embroidered Maxi Dress
        </p>
        <div className="flex items-center gap-4">
          <p className="text-slate-200">$430</p>
          <p className="text-slate-400 line-through text-sm">$500</p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
