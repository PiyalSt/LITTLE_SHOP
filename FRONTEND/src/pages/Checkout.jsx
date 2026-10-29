import React from "react";
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";
import { MdDeleteSweep } from "react-icons/md";

const Checkout = () => {
  return (
    <div className="w-full py-10 px-20 space-y-16">
      <div className="w-fit relative">
        <h2 className="text-4xl text-slate-200 font-light">Checkout</h2>
        <div className="absolute -bottom-2 right-0 w-3/4 h-1 bg-amber-400 rounded-full"></div>
      </div>
      <div className="w-full flex gap-4 items-center">
        <div className="space-y-4 border-2 border-slate-800 rounded-lg p-10">
          <div className="grid grid-cols-5 justify-items-center border-2 border-slate-800 py-4 px-6 rounded-lg">
            <h2 className="text-slate-200 font-normal">Products</h2>
            <h2 className="text-slate-200 font-normal">Price</h2>
            <h2 className="text-slate-200 font-normal">Quantity</h2>
            <h2 className="text-slate-200 font-normal">Subtotal</h2>
            <h2 className="text-slate-200 font-normal">Action</h2>
          </div>
          <div>
            <div className="grid grid-cols-5 items-center justify-items-center border-b-2 border-slate-800 py-2 px-6 rounded-lg">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-md bg-slate-100"></div>
                <div>
                  <h2 className="text-sm font-semibold text-slate-200 tracking-wider">
                    Girls Pink Moana Printed Dress
                  </h2>
                  <p className="text-sm text-slate-400 font-medium">Size: S</p>
                </div>
              </div>
              <div className="text-slate-200">$80</div>
              <div className="flex items-center gap-2 cursor-pointer">
                <CiCirclePlus className="text-2xl text-slate-200" />
                <div className="border-2 px-2 rounded-md text-sm border-slate-400 text-slate-200">
                  12
                </div>
                <CiCircleMinus className="text-2xl text-slate-200 cursor-pointer" />
              </div>
              <div className="text-slate-200">$160</div>
              <div className="py-2 px-4 bg-red-500 rounded-lg active:scale-95 transition-all duration-300 cursor-pointer">
                <MdDeleteSweep className="text-xl text-white" />
              </div>
            </div>
            <div className="grid grid-cols-5 items-center justify-items-center border-b-2 border-slate-800 py-2 px-6 rounded-lg">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-md bg-slate-100"></div>
                <div>
                  <h2 className="text-sm font-semibold text-slate-200 tracking-wider">
                    Girls Pink Moana Printed Dress
                  </h2>
                  <p className="text-sm text-slate-400 font-medium">Size: S</p>
                </div>
              </div>
              <div className="text-slate-200">$80</div>
              <div className="flex items-center gap-2 cursor-pointer">
                <CiCirclePlus className="text-2xl text-slate-200" />
                <div className="border-2 px-2 rounded-md text-sm border-slate-400 text-slate-200">
                  12
                </div>
                <CiCircleMinus className="text-2xl text-slate-200 cursor-pointer" />
              </div>
              <div className="text-slate-200">$160</div>
              <div className="py-2 px-4 bg-red-500 rounded-lg active:scale-95 transition-all duration-300 cursor-pointer">
                <MdDeleteSweep className="text-xl text-white" />
              </div>
            </div>
            <div className="grid grid-cols-5 items-center justify-items-center border-b-2 border-slate-800 py-2 px-6 rounded-lg">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-md bg-slate-100"></div>
                <div>
                  <h2 className="text-sm font-semibold text-slate-200 tracking-wider">
                    Girls Pink Moana Printed Dress
                  </h2>
                  <p className="text-sm text-slate-400 font-medium">Size: S</p>
                </div>
              </div>
              <div className="text-slate-200">$80</div>
              <div className="flex items-center gap-2 cursor-pointer">
                <CiCirclePlus className="text-2xl text-slate-200" />
                <div className="border-2 px-2 rounded-md text-sm border-slate-400 text-slate-200">
                  0
                </div>
                <CiCircleMinus className="text-2xl text-slate-200 cursor-pointer" />
              </div>
              <div className="text-slate-200">$160</div>
              <div className="py-2 px-4 bg-red-500 rounded-lg active:scale-95 transition-all duration-300 cursor-pointer">
                <MdDeleteSweep className="text-xl text-white" />
              </div>
            </div>
            <div className="grid grid-cols-5 items-center justify-items-center border-b-2 border-slate-800 py-2 px-6 rounded-lg">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-md bg-slate-100"></div>
                <div>
                  <h2 className="text-sm font-semibold text-slate-200 tracking-wider">
                    Girls Pink Moana Printed Dress
                  </h2>
                  <p className="text-sm text-slate-400 font-medium">Size: S</p>
                </div>
              </div>
              <div className="text-slate-200">$80</div>
              <div className="flex items-center gap-2 cursor-pointer">
                <CiCirclePlus className="text-2xl text-slate-200" />
                <div className="border-2 px-2 rounded-md text-sm border-slate-400 text-slate-200">
                  12
                </div>
                <CiCircleMinus className="text-2xl text-slate-200 cursor-pointer" />
              </div>
              <div className="text-slate-200">$160</div>
              <div className="py-2 px-4 bg-red-500 rounded-lg active:scale-95 transition-all duration-300 cursor-pointer">
                <MdDeleteSweep className="text-xl text-white" />
              </div>
            </div>
          </div>
        </div>
        <div className="w-5/12 py-10 px-12 space-y-4 border-2 border-slate-800 rounded-lg">
          <div className="flex justify-between items-center">
            <h2 className="text-slate-200 font-medium">Subtotal</h2>
            <p className="text-slate-200">$200</p>
          </div>
          <div>
            <div className="space-y-1">
              <p className="text-xs text-slate-200 font-light tracking-wider">
                Discount Code
              </p>
              <input
                type="text"
                placeholder="Secret Code"
                className="py-2 px-4 outline-0 border-2 border-slate-400 rounded-lg w-full text-slate-200 text-sm tracking-wider uppercase"
              />
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="text-slate-200 font-medium">Delivery Charge</h2>
              <p className="text-slate-200">$5.00</p>
            </div>
            <div className="flex justify-between items-center">
              <h2 className="text-slate-200 font-medium">Grand Total</h2>
              <p className="text-slate-200">$205.00</p>
            </div>
          </div>
          <div className="w-full">
            <button className="w-full py-3 rounded-md bg-slate-200 text-slate-900 cursor-pointer active:scale-95 transition-all duration-300">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
