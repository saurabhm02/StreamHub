import React, { useState, useEffect } from 'react';
import { RiMenuUnfoldLine } from "react-icons/ri";
import logo from "../../assets/logo.svg";
import darkLogo from "../../assets/darkLogo.svg"
import { FiSearch } from "react-icons/fi";
import { RiVideoAddLine } from "react-icons/ri";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FaCircleUser } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";
import { useDispatch } from 'react-redux';
import { toggleMenu } from '../../utils/appSlice';


const Header = () => {

    const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light");

    useEffect(() =>{
        localStorage.setItem("theme", theme);
        const localTheme = localStorage.getItem("theme");
        document.querySelector("html").setAttribute("data-theme", localTheme);
    }, [theme]);

    const themeHandler = (e) =>{
        if(e.target.checked){
            setTheme("dark");
        }
        else{
            setTheme("light");
        }
    }
 
    const dispatch = useDispatch();

    const toggleMenuHandler = ()=>{
        dispatch(toggleMenu());
    }
  return (
    <>
        <div className="flex justify-between px-5 py-3 sticky w-full shadow-lg items-center">
            <div className="flex ">
               <button className="rounded-full hover:bg-zinc-100 p-2">
                <RiMenuUnfoldLine 
                        className="cursor-pointer "
                        onClick={() => toggleMenuHandler()}
                    />
               </button>
                <div className="flex items-start max-md:hidden logo cursor-pointer p-2">
                    <a href="/">
                        <img
                            src={theme === "light" ? logo : darkLogo}
                            alt="logo"
                            className="w-48 pl-6 lg:w-38"
                        />
                    </a>
                    <p className="ml-2 text-sm my-[-11px]">IN</p>
                </div>
            </div>


            <div className="group flex items-center">
                <div className="flex h-8 md:h-10 md:ml-12 md:pl-5 border border-[#404040] rounded-l-3xl group-focus-within:border-blue-500 md:group-focus-within:ml-5 md:group-focus-within:pl-0 ">
                    <div className="w-10 justify-center items-center hidden group-focus-within:md:flex ">
                        <IoIosSearch className=" text-xl" />
                    </div>
                    <input
                        type="text"
                        placeholder="Search"
                        className="w-44 px-5 text-sm outline-none md:pl-0 md:group-focus-within:pl-0 md:w-64 lg:w-[500px]"
                    />
                </div>
                <button
                    className="w-[40px] md:w-[60px] h-8 md:h-10 flex items-center justify-center border border-l-0 border-[#404040] rounded-r-3xl bg-black/[0.1] dark:bg-white/[0.15]"
                >
                    <IoIosSearch className=" text-xl" />
                </button>
            </div>

                
            <div className="flex flex-row gap-8">
                <label className="cursor-pointer grid place-items-center">
                    <input type="checkbox" 
                        value={theme} 
                        onChange={themeHandler} 
                        checked={theme == "light" ? false : true} 
                        className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2"

                    />
                    <svg className="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/></svg>
                    <svg className="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                </label>
                <div className="max-sm:hidden rounded-full cursor-pointer hover:bg-zinc-100 p-2">
                    <RiVideoAddLine  />
                </div>
                <div className="max-sm:hidden rounded-full cursor-pointer hover:bg-zinc-100 p-2">
                    <IoMdNotificationsOutline />
                </div>
                <div className="max-sm:hidden rounded-full cursor-pointer hover:bg-zinc-100 p-2">
                    <FaCircleUser /> 
                </div>   
            </div>
        </div>
    </>
  )
}

export default Header;