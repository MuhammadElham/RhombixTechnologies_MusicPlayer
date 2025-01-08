import React from "react";
import { assets } from "../assets/assets";

const NavBar = () => {
  return (
    <>
      <div className="w-full flex justify-between items-center font-semibold ">
        <div className="flex items-center gap-2">
            <img className="w-8 bg-black p-2 rounded-2xl cursor-pointer" src={assets.arrow_left} alt="" />
            <img className="w-8 bg-black p-2 rounded-2xl cursor-pointer" src={assets.arrow_right} alt="" />
        </div>
        <div className="flex items-center gap-4">
           <p className="bg-white text-black text-[15px] px-4 py-1 rounded-2xl hidden md:block cursor-pointer">Explore Premium</p>
           <p className="bg-black text-white py-1 px-3 rounded-2xl text-[15px] cursor-pointer ">
            <i className="fa-light fa-circle-arrow-down pr-2"></i>
            Install App
           </p>
           <i className="fa-light fa-bell text-lg cursor-pointer"></i>
           <p className="bg-[#19E48B] text-black text-center text-[15px] font-bold border-4 p-[17px] border-gray-700 w-8 h-8 rounded-full flex items-center justify-center cursor-pointer ">E</p>
        </div>
      </div>
      <div className="flex items-center gap-2 mt-4">
         <p className="bg-white text-black px-4 py-1 rounded-2xl cursor-pointer">All</p>
         <p className="bg-black px-4 py-1 rounded-2xl cursor-pointer">Music</p>
      </div>
    </>
  );
};

export default NavBar;