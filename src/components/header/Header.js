import React, { useState, useEffect } from 'react';
import { RiMenuUnfoldLine } from "react-icons/ri";
import logoBar from "../../assets/logoBar.svg"
import logo from "../../assets/logo.svg";
import darkLogo from "../../assets/darkLogo.svg"
import { FiSearch } from "react-icons/fi";
import { RiVideoAddLine } from "react-icons/ri";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FaCircleUser } from "react-icons/fa6";
import {BsArrowLeftShort} from "react-icons/bs";
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu, toggleSideBar } from '../../Redux/appSlice';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { YOUTUBE_SEARCH_API } from '../../utils/constant';
import { chacheRessults } from '../../Redux/searchSlice';


const Header = () => {


    const navigate=useNavigate();

    const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light");
    const [searchQuery, setSearchQuery] = useState("");
    const [searchSuggestions,setSearchSuggestions] = useState([]); 
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [smSearch,setsmSearch]=useState(false)

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

    // For search methods

    const searchCache = useSelector((store) => store.search);

    useEffect(() =>{
  
        const timer = setTimeout(() => {
            if(searchCache[searchQuery]){
                setSearchSuggestions(searchCache[searchQuery]);
            }
            else{
                getSearchSuggestion();
            }
        
        }, 200);

        return () =>{
            clearTimeout(timer);
        }; 

    }, [searchQuery]);

   const getSearchSuggestion = async () =>{
    console.log("searchQuery", searchQuery);
    const  data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSearchSuggestions(json[1]);
    dispatch(chacheRessults({
        [searchQuery] : json[1],
    }));
   }

   const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/search?q="+searchQuery,{ relative: "path" })
    setShowSuggestions(false);
}

  return (
    <div className="sticky top-0 z-50 grid grid-flow-col py-3 md:px-3 px-1 w-full bg-white items-center">

      {/* Arrow Left In sm Search To Move to normal Screen */}
      {smSearch && 
        <div className=' flex items-center px-1 mx-0'>
            <button
                onClick={()=>{
                    setsmSearch(false);
                }}
                >
                    <BsArrowLeftShort/>
            </button>
        </div>}
      

      {/* Logo and HamburgerMenu */}
      <div className={`flex col-span-2 md:col-span-1 items-center mx-4 ${smSearch?'max-sm:hidden':''}`}>
        <button 
        onClick={
            toggleMenuHandler
        }
        className=" text-xl md:text-3xl rounded-full hover:bg-zinc-100 p-2"
        >
            <RiMenuUnfoldLine className="cursor-pointer "/>
        </button>
        {smSearch && 
            <div className={`flex items-start logo cursor-pointer p-2`}>
                <Link to="/">
                    <img src={logoBar} alt="logo" className="w-14 pl-2 md:w-38" />
                </Link>
            </div>
        }
        <div className="flex items-start max-md:hidden logo cursor-pointer p-2">
            <Link to="/">
                <img
                    src={theme === "light" ? logo : darkLogo}
                    alt="logo"
                    className="w-48 pl-0 lg:w-38"
                />
            </Link>
            <p className="ml-2 text-sm my-[-9px]">IN</p>
        </div>
      </div>

      {/* Search */}
      <div className={`${smSearch?'col-span-10':'col-span-10 max-sm:flex max-sm:justify-end'} ml-1 md:ml-24`}>
        <div className={`group flex flex-row text-lg`}>
          <input 
          value={searchQuery}
          className={`${smSearch?'w-full':'w-3/5 max-sm:hidden'} md:w-2/3 border border-gray-400 rounded-l-full py-1 pl-3 md:pl-5 group-focus-within:border-sky-300 `}
          type='text'
          placeholder='Search'
          onChange={(e)=>{
            setSearchQuery(e.target.value);
          }}
          onFocus={()=>{
            const screenWidth = window.innerWidth;
            if(screenWidth<=768){
              if(!smSearch) setsmSearch(true);
            }
            setShowSuggestions(true);
          }}

          // When not Focused Suggestions are removed
          // Latency of 200s is kept to enable clicking suggestions so that this wont get triggered
          onBlur={() =>{
            // const screenWidth = window.innerWidth;
            // if(screenWidth<=640){
            //   if(smSearch) setsmSearch(false);
            // }
           setTimeout(() => setShowSuggestions(false), 200)
          }
           }
          //  Checking which key is Entered
           onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleSubmit(e);
            }
          }}
           />

          {/* Search Button */}
          <button 
          className={`border border-gray-400 ${!smSearch?'max-sm:border-none max-sm:rounded-full':''} rounded-r-full md:py-2 px-2 md:px-5 flex justify-center items-center  hover:bg-gray-100`}
          onClick={()=>{
          const screenWidth = window.innerWidth;
          if(screenWidth<=768 && !smSearch){
            if(!smSearch) setsmSearch(true);
          }
          else navigate("/search?q="+searchQuery,{ relative: "path" })}}>
          <FiSearch className='text-xl max-sm:mt-1'/></button>
        </div>

        {/* Suggestions */}
        { showSuggestions && searchQuery!="" &&
            <div className='fixed bg-white rounded-xl border border-gray-100 shadow-lg'>
                <div className='py-1'>
                    <ul>
                        {searchSuggestions.map((s,index)=> (
                            <li key={"s"+index} className='hover:bg-gray-100 text-lg'>
                                <Link to={"/search?q="+s} onClick={()=>setSearchQuery(s)} >
                                    <div className='flex lg:w-[23rem] lg:mr-[8.3rem] px-5 items-center'>
                                        <FiSearch className='text-lg m-2 mr-4'/> <span className='mb-1'>{s}</span>
                                    </div>
                                </Link>
                             </li>)
                            )
                        }
                    </ul>
                </div>
            </div>
        }
      </div>

      {/* User Icon */}
      

      {/* DarkMode Icon */}
      <div className={"flex items-center col-span-2 gap-4"}>
        <label className={`cursor-pointer grid place-items-center ${smSearch?'max-sm:hidden':'ml-2'}`}>
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

        <div className={`flex justify-center md:col-span-1 col-span-2 items-center ${smSearch?'max-sm:hidden':''}`}>
            <FaCircleUser className='text-3xl md:text-4xl font-normal'/>
        </div>
      </div>
    </div>
  )
}

export default Header;