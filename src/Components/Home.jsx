import React from 'react'
import { FaSquareGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import Photo from "../../public/Img/Photo.png";

function Home() {
   const Icon = [
   {
    id:1,
    icon:<FaLinkedin />,
    link:"https://www.linkedin.com/in/harsh-suryavanshi-a76341334",
   },
   {
    id:2,
    icon:<FaSquareGithub />,
    link:"https://github.com/Harsh-Dev1602",
   },   
  ];
  return (
    <>
        <main name="Home" className=' w-full h-auto  py-5  flex justify-center items-center gap-1.5 flex-col lg:flex-row'>
              <section className=' w-full h-auto lg:w-[45%] text-4xl flex justify-center items-center order-2 lg:order-1 flex-col space-y-5'>
                <div className=" text-center py-2 px-5 bg-white text-black rounded-2xl">
                <h1 className='font-family  text-[33px] md:text-5xl'>Harsh Suryavanshi</h1>
                <span className=' text-xl'>Full stack developar</span>

                </div>
         
                <ul className=' order-1 md:order-2 flex items-center justify-center gap-6 shadow shadow-[#ccc] rounded-2xl py-1 px-2.5'>
                     
                     {
                      Icon.map(({id,icon,link})=>(
                        <a key={id} href={link}  className=' p-2 rounded-md text-black text-4xl cursor-pointer'target="_blank" rel="noopener noreferrer">{icon}</a>
                      ))
                     }
                     
                 </ul>
              </section>
        
              <section className='w-full h-auto lg:w-[45%] flex justify-center items-center order-1 lg:order-2'> <img src={Photo} className='w-[300px] h-[300px] rounded-md   filter drop-shadow-[0_0_4px_rgba(0,0,0,1)]' />
              </section>
        </main>
    </>
  )
}

export default Home