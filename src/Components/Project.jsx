import React from 'react'
import Img1 from "../../public/Img/Project1.png"
import Img2 from "../../public/Img/Project2.png"
import Img3 from "../../public/Img/Project3.png"
import Img4 from "../../public/Img/Project4.png"
import { FaArrowRight } from "react-icons/fa6";

function Project() {
  const pro = [
    {
      id: 0,
      text: "Comprehensive Notes",
      img: Img1,
      category: "Education Platform",
      p: "The Comprehensive Digital Learning System for Students provides an intuitive and user-friendly platform for accessing and sharing study materials.",
      link: "https://comprehensive-notes-minor-project.vercel.app",
    },
    {
      id: 1,
      text: "Instant Chat",
      img: Img2,
      category: "Real-time App",
      p: "A communication platform that allows users to send text and multimedia messages with real-time notifications and status updates.",
      link: "https://chat-application-a5mv.onrender.com",
    },
    {
      id: 2,
      text: "Intelli Assess",
      img: Img3,
      category: "Examination System",
      p: "An end-to-end online examination platform designed to simplify and secure the entire assessment lifecycle for institutions.",
      link: "https://intelli-assess-major-project.onrender.com",
    },
     {
      id: 3,
      text: "Placid Digital",
      img: Img4,
      category: "Training Program",
      p: "Placid Digital is a fast-growing IT power-house delivering innovative software, mobile apps, and digital marketing strategies.",
      link: "https://placid-digital.vercel.app/",
    },
  ]

  return (
    <>
      <main name="Project" className="w-full py-20 bg-white">
        <section className="container mx-auto px-6">
          <div className="flex flex-col items-center mb-16 text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#3a0ca3]">
              Latest Work
              <span className="block w-20 h-1.5 bg-gradient-to-r from-[#9b51e0] to-[#3a0ca3] mt-3 mx-auto rounded-full"></span>
            </h2>
            <p className="text-gray-500 mt-4 max-w-lg">
              Explore my recent development projects, ranging from real-time communication tools to complex assessment systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {pro.map(({ id, p, text, link, img, category }) => (
              <div 
                key={id} 
                className="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={img} 
                    alt={text}
                    className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-1 rounded-full text-[12px] font-bold text-[#7000ff] uppercase tracking-wider">
                    {category}
                  </div>
                </div>

                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold text-[#3a0ca3] mb-3 group-hover:text-[#9b51e0] transition-colors">
                    {text}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                    {p}
                  </p>
                  
                  <a 
                    href={link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[#7000ff] font-bold hover:gap-4 transition-all"
                  >
                    View Case Study <FaArrowRight />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  )
}

export default Project