import React from 'react'
import { FaSquareGithub, FaLinkedin, FaPlay } from "react-icons/fa6";
import Photo from "../../public/Img/Image1.png";

function Home() {
  const icons = [
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

  const stats = [
    { id: 1, label: "Projects Completed", value: "7+" },
    { id: 2, label: "Years Experience", value: "0.5" },
    { id: 3, label: "Tech Stacks", value: "5+" },
  ];

  return (
    <>
      <main style={{ minHeight:"calc(100vh - 100px)"}}
        name="Home" 
        className="relative w-full h-auto flex flex-col items-center justify-center bg-gradient-to-r from-[#9b51e0] to-[#3a0ca3] text-white py-32 overflow-hidden"
      >
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/5 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-40 right-10 w-64 h-64 bg-purple-400/10 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-16 z-10">
          <section className="w-full lg:w-3/5 flex flex-col items-start space-y-6 animate__animated animate__fadeInLeft">
            <div className="bg-white/20 backdrop-blur-md px-4 py-1 rounded-full text-sm font-bold tracking-widest uppercase">
              Available for Hire
            </div>
            
            <h2 className="text-2xl md:text-3xl font-medium opacity-90">
              Hello, I am
            </h2>
            
            <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-tight">
              Harsh <br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-200">
                Suryavanshi
              </span>
            </h1>

            <p className="text-lg md:text-xl max-w-lg opacity-80 leading-relaxed">
              Expert <span className="font-bold text-white underline decoration-purple-400">Full Stack Developer</span> specializing in building high-performance web applications using the MERN stack.
            </p>
            
            <div className="flex flex-wrap items-center gap-6 pt-4">
              <button className="bg-white text-[#7000ff] px-8 py-4 rounded-full font-bold shadow-2xl hover:scale-105 transition-all flex items-center gap-3 group">
                GET STARTED 
                <div className="bg-[#7000ff] group-hover:bg-[#3a0ca3] p-1.5 rounded-full text-white transition-colors">
                  <FaPlay className="text-[10px]" />
                </div>
              </button>

              <div className="flex gap-5">
                {icons.map(({ id, icon, link }) => (
                  <a 
                    key={id} 
                    href={link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-3xl hover:text-purple-300 transform hover:-translate-y-1 transition-all"
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-10 border-t border-white/10 w-full max-w-md">
              {stats.map((stat) => (
                <div key={stat.id}>
                  <h4 className="text-2xl md:text-3xl font-bold">{stat.value}</h4>
                  <p className="text-xs uppercase tracking-wider opacity-60 font-semibold">{stat.label}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="w-full lg:w-2/5 flex justify-center items-center relative animate__animated animate__fadeInRight">
            <div className="absolute w-full h-full bg-white/5 rounded-full blur-3xl scale-110"></div>
            
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-tr from-white/30 to-transparent rounded-[2.5rem] blur-sm"></div>
              
              <img 
                src={Photo} 
                alt="Harsh Suryavanshi"
                className="relative w-[300px] h-[300px] md:w-[420px] md:h-[420px] object-cover rounded-[2rem] shadow-2xl border-2 border-white/20 transform rotate-2 group-hover:rotate-0 transition-all duration-700" 
              />

              <div className="absolute top-10 -right-10 bg-white p-4 rounded-2xl shadow-2xl flex items-center gap-3 animate-bounce">
                 <div className="bg-green-500 w-3 h-3 rounded-full"></div>
                 <span className="text-black font-bold text-sm">Real-time Expert</span>
              </div>

              <div className="absolute -bottom-6 -left-6 bg-white p-5 rounded-3xl shadow-2xl transform group-hover:scale-110 transition-transform">
                 <div className="bg-gradient-to-br from-[#9b51e0] to-[#3a0ca3] p-4 rounded-full text-white">
                    <FaPlay className="text-xl" />
                 </div>
              </div>
            </div>
          </section>
        </div>

      
      </main>
    </>
  )
}

export default Home;