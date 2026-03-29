import React from 'react'
import { FaSquareGithub, FaLinkedin, FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa6";

function Footer() {
  const socialIcons = [
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
    {
      id: 3,
      icon: <FaFacebookF />,
      link: "#",
    },
    {
      id: 4,
      icon: <FaInstagram />,
      link: "#",
    },
  ];

  return (
    <footer className="w-full bg-[#111] text-white pt-16 pb-8 px-6 md:px-20 font-sans">
      <div className="container mx-auto flex flex-col md:flex-row justify-evenly items-start gap-12 mb-12">
  
        <div className="md:w-80 col-span-1 md:col-span-1">
          <h2 className="text-3xl font-extrabold italic mb-6">
            H<span className="text-[#9b51e0]">A</span>RSH <span className="text-[#9b51e0]">DEV</span>
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            Building modern web experiences with the MERN stack. Focused on clean code and user-centric design.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-6 border-b-2 border-[#9b51e0] inline-block">Follow Us</h3>
          <div className="flex gap-4">
            {socialIcons.map(({ id, icon, link }) => (
              <a 
                key={id} 
                href={link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-lg hover:bg-[#9b51e0] transition-all duration-300"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      <hr className="border-gray-800 mb-8" />

  
      <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-gray-500 text-xs font-medium uppercase tracking-widest">
        <p>© 2023-{new Date().getFullYear()} Developed by Harsh Dev. All rights reserved.</p>
        
      </div>
    </footer>
  );
}

export default Footer;