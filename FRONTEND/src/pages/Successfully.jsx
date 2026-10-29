import React from "react";
import { CiCircleCheck } from "react-icons/ci";

const Successfully = () => {
  return (
    <div className="w-full h-screen bg-linear-to-r from-slate-800 to-sky-800 flex items-center justify-center">
      <div className="flex flex-col gap-2 items-center justify-center py-8 px-8 rounded-md bg-white">
        <div className="border-4 border-green-300 rounded-full outline-4 outline-green-100">
          <CiCircleCheck size={48} className="text-green-500" />
        </div>
        <div className="py-2">
          <h2 className="text-lg text-slate-900">
            Password Changed Successfully
          </h2>
        </div>
        <div className="w-full">
          <button className="w-full py-3 rounded-md bg-black text-white cursor-pointer active:scale-95 transition-all duration-300">
            Back to Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Successfully;
