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
    
      <header className="w-full h-auto sticky top-0 right-0 rounded-b-2xl py-[15px] px-5 bg-white shadow shadow-[#cccc]   text-black  flex justify-between items-center  z-50">
      
        <div className=" text-2xl font-semibold flex justify-center items-center flex-col">
           <h1 ><span className="text-4xl text-sky-700">H</span>ars<span className=" text-[28px]">h</span></h1>
           <span className="text-[#000000a5] text-[10px]">Developar</span>
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
              className="cursor-pointer font-semibold px-2.5 py-1 rounded-md hover:bg-sky-100  text-[17px] transition-all"
              
            >
                {text}
            </li>
              </Link>
          ))}
        </ul>
        <div
          className="lg:hidden text-3xl "
          onClick={() => setmenuOpen(!menuOpen)}
        >
          {menuOpen ? <> <MdOutlineClear /> <div className="fixed top-0 right-0 w-[30%] h-screen bg-transparent"></div> </> : <IoMenu />}
        </div>
      </header>
        {menuOpen && (
          <>
        <div
          className=" w-[70%]  shadow shadow-[#cccc]  h-screen lg:hidden fixed top-0 left-0 z-50 rounded-md py-5 text-white flex  justify-center items-center flex-col bg-white
          animate__animated animate__fadeInLeft"
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
                className="w-[50%] text-center  text-black  cursor-pointer font-semibold mx-4 py-2     hover:bg-[#cccc] rounded-md  text-xl transition-all ">
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
