import React from 'react'
import { ImHtmlFive } from "react-icons/im";
import { FaCss3Alt } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { GrReactjs } from "react-icons/gr";
import { FaNode } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { SiExpress } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";

function Skills() {

    const SkillInfo = [   
      {
        id:0,
        text:"React Js",
        icon:<GrReactjs />,
      }, 
      {
        id:1,
        text:"Node Js",
        icon:<FaNode />,
      },
      {
        id:2,
        text:"Mongo DB",
        icon:<DiMongodb />,
      },    
      {
        id:3,
        text:"Express Js",
        icon:<SiExpress />,
      },
      {
        id:4,
        text:"Tailwind CSS",
        icon:<SiTailwindcss />,
      },
    ]

  return (
    <div name="Skills" className=" w-full h-auto  p-5">
   <h2 className="text-2xl text-white BG_Color inline p-2 rounded-md font-bold">Skills</h2>
   <div className="grid gap-8    grid-cols-2  lg:grid-cols-5 lg:gap-16 py-5">
    {
        SkillInfo.map(({id,text,icon})=>(
          <div key={id} className=" h-40 gap-5 shadow text-black shadow-gray-500 flex flex-col justify-center items-center rounded-2xl bg-white">
             <i className='text-6xl'>{icon}</i>
             <span className='text-xl text-center md:text-3xl font-semibold'>{text}</span>
          </div>
        ))
    }
   </div>
    </div>
  )
}

export default Skills