import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { MdOutlineClear } from "react-icons/md";
import "animate.css";
import { Link } from "react-scroll";
import logo from "../../public/Img/logo.png"

function Navbar() {
  const [menuOpen, setmenuOpen] = useState(false);
  const Menu = ["Home", "About Us","Skills", "Project", "Contact Us"];
  return (
    <>
    
      <header className="w-full h-auto sticky top-0 right-0 rounded-b-2xl py-[15px] px-10  bg-gray-800 text-white  flex justify-between items-center  ">
      
        <h1 className=" flex gap-5 text-2xl  sm:text-4xl font-bold"><img src={logo} className=" w-10 h-auto object-cover shadow shadow-[#cccc] rounded-full" />  Harsh Dev</h1>
        <ul className=" hidden lg:flex justify-center items-center gap-4">
          {Menu.map((text, i) => (
            <Link  key={i}
              to={text}
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
            <li
              className="cursor-pointer font-semibold px-2 py-0.5 rounded-md hover:bg-gray-700  text-[17px] transition-all"
              
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
          {menuOpen ? <MdOutlineClear /> : <IoMenu />}
        </div>
        {menuOpen && (
        <div
          className="w-full    h-auto lg:hidden absolute top-17 rounded-md right-0 py-5 text-black flex  justify-center items-center flex-col bg-gray-800 z-10
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
              offset={-70}
              duration={500}
                className="w-[90%] text-center text-white  cursor-pointer font-semibold mx-4 py-2    hover:bg-gray-700 rounded-md  text-xl transition-all ">
                {text}
              </Link>
            ))}

        </div>
      )}
      </header>
    </>
  );
}

export default Navbar;
