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
      <footer className='w-full h-auto rounded-t-2xl bg-gray-800 flex flex-col lg:flex-row py-20 gap-5 px-0 md:px-20 justify-between items-center '>
        <h1 className=' order-2 text-center md:order-1 text-white text-xl  md:text-3xl' >© 2025 Harsh Dev,  All rights reserved.</h1>
        <ul className=' order-1 md:order-2 flex items-center justify-center gap-6'>

          {
            Icon.map(({ id, icon, link }) => (
              <a key={id} href={link} className='bg-gray-900 p-2 rounded-2xl text-white text-3xl cursor-pointer' target="_blank" rel="noopener noreferrer">{icon}</a>
            ))
          }
        </ul>
      </footer>
    </>
  )
}

export default Footer