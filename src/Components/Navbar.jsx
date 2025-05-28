import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { MdOutlineClear } from "react-icons/md";
import "animate.css";
import { Link } from "react-scroll";
import Photo from '../../public/Img/Photo.jpg'

function Navbar() {
  const [menuOpen, setmenuOpen] = useState(false);
  const Menu = ["Home", "About Us","Skills", "Project", "Contact Us"];
  return (
    <>
    
      <header className="w-full h-auto sticky top-0 right-0 rounded-b-2xl py-[15px] px-5 bg-white shadow shadow-[#cccc]   text-black  flex justify-between items-center  z-50">
      
        <h1 className=" flex gap-5 text-2xl justify-center items-center   sm:text-4xl font-bold"><img src={Photo} className=" w-10 h-10 bg-black  shadow shadow-[#cccc] rounded-full" />H.S.</h1>
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
              offset={-70}
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
