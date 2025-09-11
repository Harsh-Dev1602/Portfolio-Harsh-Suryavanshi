import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { MdOutlineClear } from "react-icons/md";
import "animate.css";
import { Link } from "react-scroll";


function Navbar() {
  const [menuOpen, setmenuOpen] = useState(false);
  const Menu = ["Home", "About Me","Skills", "Project", "Contact Me"];
  return (
    <>
    
      <header className="w-full h-auto sticky top-0 right-0 rounded-b-2xl py-[15px] px-5 bg-gray-100 shadow shadow-[#cccc]   text-black  flex justify-between items-center  z-50">
      
        <div className=" text-2xl font-semibold flex justify-center  items-start">
           <h1 className="Text_Color "><span className=" font-bold text-4xl">H</span>arsh</h1>
           <span className="text-white rounded-full p-1 BG_Color font-bold text-[15px]">Dev</span>
        </div>
        <ul className=" hidden lg:flex justify-center items-center gap-4">
          {Menu.map((text, i) => (
            <Link  key={i}
              to={text}
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
            <li
              className="cursor-pointer font-bold p-2 rounded-md Text_Color  hover:shadow shadow-[#ccc] text-[17px] transition-all"
              
            >
                {text}
            </li>
              </Link>
          ))}
        </ul>
        <div
          className="lg:hidden text-3xl rounded-md cursor-pointer hover:shadow transition-all shadow-[#ccc] p-1"
          onClick={() => setmenuOpen(!menuOpen)}
        >
          {menuOpen ? <> <MdOutlineClear /> <div className="fixed top-0 right-0 w-[30%] md:w-[70%] h-screen bg-transparent"></div> </> : <IoMenu />}
        </div>
      </header>
        {menuOpen && (
          <>
        <div
          className=" w-[70%] md:w-[30%]  shadow shadow-[#cccc]  h-screen lg:hidden fixed top-0 left-0 z-50 rounded-md py-5 text-white flex  justify-center items-center flex-col bg-gray-100 animate__animated animate__fadeInLeft"
        >
            {Menu.map((text, i) => (
              <Link 
              onClick={() => setmenuOpen(!menuOpen)}
               key={i}
              to={text}
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
                className=" Text_Color text-center p-2  hover:shadow shadow-[#ccc] cursor-pointer font-bold rounded-md text-xl transition-all ">
                {text}
              </Link>
            ))}

        </div>
        </>
      )}
    </>
  );
}

export default Navbar;
