import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { MdOutlineClear } from "react-icons/md";
import { FaPlay } from "react-icons/fa6";
import "animate.css";
import { Link } from "react-scroll";

function Navbar() {
  const [menuOpen, setmenuOpen] = useState(false);
  const Menu = ["Home", "About Me", "Skills", "Project", "Contact Me"];

  return (
    <>
      <header className="w-full h-20 sticky top-0 bg-white/90 backdrop-blur-md shadow-sm flex justify-between items-center px-6 md:px-12 z-[100]">
        <div className="flex items-center gap-1 cursor-pointer">
          <h1 className="text-[#3a0ca3] text-3xl font-extrabold tracking-tighter italic">
            H<span className="text-[#9b51e0]">A</span>RSH <span className="text-[#9b51e0]">DEV</span>
          </h1>
        </div>

        <ul className="hidden lg:flex items-center gap-8">
          {Menu.map((text, i) => (
            <Link
              key={i}
              to={text}
              activeClass="text-[#9b51e0]"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              className="cursor-pointer font-bold text-[#3a0ca3] hover:text-[#9b51e0] text-[15px] uppercase tracking-wider transition-all"
            >
              {text}
            </Link>
          ))}
        </ul>

      

        <div
          className="lg:hidden text-3xl text-[#3a0ca3] cursor-pointer"
          onClick={() => setmenuOpen(!menuOpen)}
        >
          {menuOpen ? <MdOutlineClear /> : <IoMenu />}
        </div>
      </header>

      {menuOpen && (
        <div className="fixed inset-0 z-[90] lg:hidden">
          <div 
            className="absolute inset-0 bg-black/20 backdrop-blur-sm" 
            onClick={() => setmenuOpen(false)}
          ></div>
          
          <div className="absolute top-0 left-0 w-[75%] h-full bg-white shadow-2xl p-8 flex flex-col justify-center gap-6 animate__animated animate__slideInLeft">

            
            {Menu.map((text, i) => (
              <Link
                key={i}
                to={text}
                onClick={() => setmenuOpen(false)}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                className="text-[#3a0ca3] text-xl font-bold border-b border-gray-100 pb-2 active:text-[#9b51e0]"
              >
                {text}
              </Link>
            ))}

          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;