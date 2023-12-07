import React from 'react';
import { PiUserSquare, PiMusicNoteBold, PiLightbulbBold } from "react-icons/pi";
import { GoHomeFill, GoTrophy } from "react-icons/go";
import { SiYoutubeshorts, SiYoutubegaming } from "react-icons/si";
import { MdSubscriptions, MdOutlineVideoLibrary, MdHistory,
   MdOutlineWatchLater, MdOutlineContentCut, MdOutlinePodcasts  } from "react-icons/md";
import { RiVideoLine } from "react-icons/ri";
import { IoIosArrowDown } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import { BsFire } from "react-icons/bs";
import { CgShoppingBag } from "react-icons/cg";
import { GiClapperboard, GiAerialSignal, GiHanger } from "react-icons/gi";
import { IoNewspaperOutline } from "react-icons/io5";
import { useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';


function Sidebar() {

  const isMenuOpen = useSelector((store) => store.app.isMenuOpen); 

  // early return if menu is not open
  if(!isMenuOpen) {
    return null;
  }


  return !isMenuOpen ? (
        <div className=" flex flex-col text-xs w-18 pr-1 items-center border-r transition-all duration-300">
          <a href="/" className="w-full">
            <div className="flex flex-col items-center py-4 rounded-md hover:bg-zinc-200 w-full">
              <GoHomeFill size="1.5rem" className="mb-1" />
              <span>Home</span>
            </div>
          </a>
          <div className="flex flex-col items-center py-4 rounded-md hover:bg-zinc-200 w-full">
          <SiYoutubeshorts size="1.5rem" className="mb-1" />
            <span>Shorts</span>
          </div>
          <div className="flex flex-col items-center py-4 rounded-md hover:bg-zinc-200 w-full">
            <MdSubscriptions size="1.5rem" className="mb-1" />
            <span>Subscriptions</span>
          </div>
          <div className="flex flex-col items-center py-4 rounded-md hover:bg-zinc-200 w-full">
            <MdOutlineVideoLibrary size="1.5rem" className="mb-1" />
            <span>You</span>
          </div>
        </div>
        
   ) : (
        <div className="shadow-lg w-[220px]">
          <div className="flex flex-col text-sm px-3 pl-2 pr-6 pb-4">
            <a href="/">
              <div className="flex items-center w-full py-2 px-4 hover:bg-zinc-100 rounded-md">
                <GoHomeFill size="1.5rem" className="mr-3 mb-1" />
                <span>Home</span>
              </div>
            </a>

            <div className="flex items-center w-full py-2 px-4 cursor-pointer hover:bg-zinc-100 rounded-md">
              <SiYoutubeshorts size="1.5rem" className="mr-3 mb-1" />
              <span>Shorts</span>
            </div>

            <div className="flex items-center w-full py-2 px-4 cursor-pointer hover:bg-zinc-100 rounded-md">
              <MdSubscriptions size="1.5rem" className="mr-3 mb-1" />
              <span>Subscription</span>
            </div>

            <div className=" border-b border-zinc-200 pt-3 w-full "></div> 

            <div className="flex items-center w-full py-2 px-4 cursor-pointer hover:bg-zinc-100 rounded-md" >
              <PiUserSquare size="1.5rem" className="mr-3 mb-1" />
              <span>Your channel</span>
            </div>

            <div className="flex items-center w-full py-2 px-4 cursor-pointer hover:bg-zinc-100 rounded-md">
              <MdHistory size="1.5rem" className="mr-3 mb-1" />
              <span>History</span>
            </div>

            <div className="flex items-center w-full py-2 px-4 cursor-pointer hover:bg-zinc-100 rounded-md">
              <RiVideoLine size="1.5rem" className="mr-3 mb-1" />
              <span>Your videos</span>
            </div>

            <div className="flex items-center w-full py-2 px-4 cursor-pointer hover:bg-zinc-100 rounded-md">
              <MdOutlineWatchLater size="1.5rem" className="mr-3 mb-1" />
              <span>Watch later</span>
            </div>

            <div className="flex items-center w-full py-2 px-4 cursor-pointer hover:bg-zinc-100 rounded-md">
              <MdOutlineContentCut size="1.5rem" className="mr-3 mb-1" />
              <span>Your clips</span>
            </div>

            <div className="flex items-center w-full py-2 px-4 cursor-pointer hover:bg-zinc-100 rounded-md">
              <MdOutlineVideoLibrary size="1.5rem" className="mr-3 mb-1" />
              <span>Library</span>
            </div>

            <div className="flex items-center w-full py-2 px-4 cursor-pointer  hover:bg-zinc-100 rounded-md">
              <IoIosArrowDown size="1.5rem" className="mr-3 mb-1" />
              <span>Show more</span>
            </div>

            <div className=" border-b border-zinc-200 pt-3 w-full"></div>

            {/* <div className="flex">
              <button className="flex items-center w-full py-2 px-4">
                <FaUserCircle size="1.5rem" className="mr-3 mb-1"/> Sign in
              </button>
            </div> */}

            <div className="pl-4 mb-1 pt-2 ">
                <span className="text-lg">Explore</span>
            </div>

            <div className="flex items-center w-full py-2 px-4 cursor-pointer hover:bg-zinc-100 rounded-md">
              <BsFire size="1.5rem" className="mr-3 mb-1"/>
              <span>Trending</span>
            </div>

            <div className="flex items-center w-full py-2 px-4 cursor-pointer hover:bg-zinc-100 rounded-md">
              <CgShoppingBag size="1.5rem" className="mr-3 mb-1"/>
              <span>Shopping</span>
            </div>

            <div className="flex items-center w-full py-2 px-4 cursor-pointer hover:bg-zinc-100 rounded-md">
              <PiMusicNoteBold size="1.5rem" className="mr-3 mb-1"/>
              <span>Music</span>
            </div>

            <div className="flex items-center w-full py-2 px-4 cursor-pointer hover:bg-zinc-100 rounded-md">
              <GiClapperboard size="1.5rem" className="mr-3 mb-1"/>
              <span>Movies</span>
            </div>

            <div className="flex items-center w-full py-2 px-4 cursor-pointer hover:bg-zinc-100 rounded-md">
              <GiAerialSignal size="1.5rem" className="mr-3 mb-1"/>
              <span>Live</span>
            </div>

            <div className="flex items-center w-full py-2 px-4 cursor-pointer hover:bg-zinc-100 rounded-md">
              <SiYoutubegaming size="1.5rem" className="mr-3 mb-1"/>
              <span>Gaming</span>
            </div>

            <div className="flex items-center w-full py-2 px-4 cursor-pointer hover:bg-zinc-100 rounded-md">
              <IoNewspaperOutline size="1.5rem" className="mr-3 mb-1"/>
              <span>News</span>
            </div>

            <div className="flex items-center w-full py-2 px-4 cursor-pointer hover:bg-zinc-100 rounded-md">
              <GoTrophy size="1.5rem" className="mr-3 mb-1"/>
              <span>Sports</span>
            </div>

            <div className="flex items-center w-full py-2 px-4 cursor-pointer hover:bg-zinc-100 rounded-md">
              <PiLightbulbBold size="1.5rem" className="mr-3 mb-1"/>
              <span>Learning</span>
            </div>

            <div className="flex items-center w-full py-2 px-4 cursor-pointer hover:bg-zinc-100 rounded-md">
              <GiHanger size="1.5rem" className="mr-3 mb-1"/>
              <span>Fashion & Beauty</span>
            </div>

            <div className="flex items-center w-full py-2 px-4 cursor-pointer hover:bg-zinc-100 rounded-md">
              <MdOutlinePodcasts size="1.5rem" className="mr-3 mb-1"/>
              <span>Podcasts</span>
            </div>
          </div>
        </div>
  )
}

export default Sidebar;