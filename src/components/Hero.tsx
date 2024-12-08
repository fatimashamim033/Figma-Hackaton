import React from "react";
import { TiArrowRightOutline } from "react-icons/ti";
import Image from "next/image";

const FurnitureSection = () => {
  return (
    <div className=" m-10">
    <div className="w-full min-h-screen bg-[#F0F2F3] flex justify-center items-center">
      <div className="max-w-[800px] text-right">
        <h5 className="text-purple-950 text-[14px] font-medium mb-4 text-left">
          Welcome to Chairy
        </h5>
        <h1 className="text-purple-950 text-[36px] sm:text-[48px] lg:text-[60px] text-left font-bold leading-tight tracking-tight mb-6">
          Best Furniture <br /> Collection for Your <br /> Interior
        </h1>
        <button className="flex items-center justify-center bg-[#029fae] text-white text-left px-6 py-3 rounded-md text-sm lg:text-base gap-2 hover:bg-gray-800 transition">
          Shop Now
          <TiArrowRightOutline size={20} />
        </button>
      </div>

  <div>
      <div className="flex py-4 px-5 min-h-screen">
      <div className=" text-left">
        <Image
          src="/images/Chair Pic.svg"
          alt="chair"
          width={443}
          height={584}
        ></Image>
        </div>
      </div>
      </div>
    </div>
    </div>
  );
};



export default FurnitureSection;
