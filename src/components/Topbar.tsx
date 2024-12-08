import React from "react";
import { IoCheckmarkSharp } from "react-icons/io5";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FiAlertCircle } from "react-icons/fi";

const TopbarPage = () => {
  return (

    <div className="flex flex-colsm:flex-row  justify-around py-3 px-4  sm:px-8  w-[1720px] h-[45px] bg-purple-950 text-slate-400 font-bold">
      <div className="flex text-center items-center space-x-2">
        <p className="flex py-16 pr-10 w-[500px] h-[14px] font-inter text-slate-400 font-normal text-[13px] leading-[14.3px]">
          <IoCheckmarkSharp className="w-4 h-4 text-slate-400 text-center text-[13px]" />
          Free shipping on all orders over $50{" "}
        </p>
      </div>

      <div className="flex justify-between text-slate-400 bg-purple-950 items-center space-x-6 sm:space-x-6 mt-2 sm:mt-0">
        <select className="text-slate-400 bg-purple-950 text-[12px] sm:text-[13px] border-none outline-none">
          <option> Eng </option>
        </select>
        <p className="w-[30px] h-[17px] font-Inter font-normal text-[13px] leading-[16.9px] text-center sm:text-[13px]">
          Faqs
        </p>
        <FiAlertCircle className="w-6 h-6" />
        <p className="w-[85px] h-[17px] font-inter text-[12px] sm:text-[13px]">Need Help</p>
      </div>
    </div>

   
  );
};
export default TopbarPage



