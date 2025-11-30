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
      <footer className='w-full h-auto rounded-t-2xl bg-gray-100 flex flex-col md:flex-row py-5 gap-5 px-0 md:px-20 justify-between items-center  '>
        <div className=" order-2 text-center  md:order-1 text-black font-semibold text-xl flex  gap-2 md:text-2xl">
          <h1 className=' text-xl'>© 2023-2025 Developed by Harsh Dev, All rights reserved.</h1>
        </div>
        <div className=' order-1 md:order-2 flex items-center justify-center gap-4 flex-col rounded-2xl py-1 px-5'>
          <h1 className=' text-2xl font-bold Text_Color'>FOLLOW US</h1>
          <ul className='flex gap-5'>
            {
              Icon.map(({ id, icon, link }) => (
                <a key={id} href={link} className=' p-2 rounded-md  BG_Color text-white text-3xl cursor-pointer' target="_blank" rel="noopener noreferrer">{icon}</a>
              ))
            }
          </ul>
        </div>
      </footer>
    </>
  )
}

export default Footer