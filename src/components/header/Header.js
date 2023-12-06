import React from 'react';
import { RiMenuUnfoldLine } from "react-icons/ri";
import logo from "../../assets/logo.svg";
import { FiSearch } from "react-icons/fi";
import { RiVideoAddLine } from "react-icons/ri";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FaCircleUser } from "react-icons/fa6";


const Header = () => {
  return (
    <>
        <div className="">
            <div className="flex justify-between px-5 py-3 sticky w-full shadow-lg items-center">
                <div className="flex gap-5 ">
                    <RiMenuUnfoldLine />
                    <div className="flex relative">
                        <img src={logo} alt="logo" width={160} />
                        <p className="absolute bottom-6 left-[162px] text-sm">IN</p>
                    </div>
                </div>

                <div className="flex items-center">
                    <div className="w-full">
                        <input type="text" 
                            className="border-2 border-gray-300 rounded-l-3xl px-2 pl-8 py-1"
                            placeholder="Search"
                        />
                    </div>
                    <div className="rounded-r-3xl border-2 border-gray-300 p-1 px-7 bg-zinc-100 hover:bg-zinc-200 cursor-pointer" >
                        <button> 
                            <FiSearch />
                        </button>
                    </div>
                </div>

                <div className="flex flex-row gap-8">
                    <RiVideoAddLine />
                    <IoMdNotificationsOutline />
                    <FaCircleUser />    
                </div>
            </div>
        </div>
    </>
  )
}

export default Header;