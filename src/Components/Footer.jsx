import React from 'react'
import { FaSquareGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
  const Icon = [
    {
      id: 1,
      icon: <FaLinkedin />,
      link: "https://www.linkedin.com/in/harsh-suryavanshi-a76341334",
    },
    {
      id: 2,
      icon: <FaSquareGithub />,
      link: "https://github.com/Harsh-Dev1602",
    },

  ];
  return (
    <>
      <footer className='w-full h-auto rounded-t-2xl bg-black flex flex-col lg:flex-row py-20 gap-5 px-0 md:px-20 justify-between items-center  '>
        <div className=" order-2 text-center  md:order-1 text-white text-xl flex  gap-2 md:text-2xl">
        <h1>© 2025,</h1>
        <span> All rights reserved.</span>
        </div>
        <ul className=' order-1 md:order-2 flex items-center justify-center gap-4 shadow shadow-[#ccc] rounded-2xl py-1 px-2.5'>

          {
            Icon.map(({ id, icon, link }) => (
              <a key={id} href={link} className=' p-2 rounded-md text-white hover:bg-[#cccccc17] text-3xl cursor-pointer' target="_blank" rel="noopener noreferrer">{icon}</a>
            ))
          }
        </ul>
      </footer>
    </>
  )
}

export default Footer