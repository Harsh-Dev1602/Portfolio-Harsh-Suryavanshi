import React from 'react'
import { GrReactjs } from "react-icons/gr";
import { FaNode } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { SiExpress, SiTailwindcss, SiJavascript } from "react-icons/si";

function Skills() {
  const SkillInfo = [
    { id: 0, text: "React Js", icon: <GrReactjs />, color: "text-[#61DAFB]" },
    { id: 1, text: "Node Js", icon: <FaNode />, color: "text-[#339933]" },
    { id: 2, text: "Mongo DB", icon: <DiMongodb />, color: "text-[#47A248]" },
    { id: 3, text: "Express Js", icon: <SiExpress />, color: "text-[#000000]" },
    { id: 4, text: "Tailwind CSS", icon: <SiTailwindcss />, color: "text-[#06B6D4]" },
    { id: 5, text: "JavaScript", icon: <SiJavascript />, color: "text-[#F7DF1E]" },
  ];

  return (
    <div name="Skills" className="w-full py-20 bg-[#f8f9fa]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#3a0ca3]">
            My Skills
            <span className="block w-16 h-1.5 bg-[#9b51e0] mt-3 mx-auto rounded-full"></span>
          </h2>
          <p className="text-gray-500 mt-4 uppercase tracking-[0.2em] text-sm font-bold">
            Technologies I Master
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {SkillInfo.map(({ id, text, icon, color }) => (
            <div 
              key={id} 
              className="group flex flex-col items-center justify-center p-8 bg-white rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-50"
            >
              <div className={`text-5xl mb-4 transition-transform duration-300 group-hover:scale-110 ${color}`}>
                {icon}
              </div>
              <span className="text-sm font-bold text-[#3a0ca3] uppercase tracking-wider text-center">
                {text}
              </span>
              
              <div className="w-0 group-hover:w-full h-1 bg-gradient-to-r from-[#9b51e0] to-[#3a0ca3] mt-4 transition-all duration-500 rounded-full"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Skills