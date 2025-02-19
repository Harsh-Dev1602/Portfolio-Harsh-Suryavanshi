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
        id:1,
        text:"HTML",
        icon:<ImHtmlFive />,
      },
      {
        id:2,
        text:"CSS",
        icon:<FaCss3Alt />,
      },
      {
        id:3,
        text:"Java Script",
        icon:<TbBrandJavascript />,
      },
      {
        id:4,
        text:"React Js",
        icon:<GrReactjs />,
      }, 
      {
        id:5,
        text:"Node Js",
        icon:<FaNode />,
      },
      {
        id:6,
        text:"Mongo DB",
        icon:<DiMongodb />,
      },    
      {
        id:7,
        text:"Express Js",
        icon:<SiExpress />,
      },
      {
        id:8,
        text:"Tailwind CSS",
        icon:<SiTailwindcss />,
      },
    ]

  return (
    <div name="Skills" className=" w-full h-auto  py-5">
   <h2 className="text-3xl text-white bg-gray-800 inline p-2 rounded-2xl font-semibold">Skills</h2>
   <div className="grid gap-8    grid-cols-2  lg:grid-cols-4 lg:gap-16 py-5">
    {
        SkillInfo.map(({id,text,icon})=>(
          <div key={id} className=" h-40 gap-4 shadow text-black shadow-gray-500 flex flex-col justify-center items-center rounded-2xl">
             <i className='text-6xl'>{icon}</i>
             <span className='text-xl md:text-3xl font-semibold'>{text}</span>
          </div>
        ))
    }
   </div>
    </div>
  )
}

export default Skills