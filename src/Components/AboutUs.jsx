import React from 'react'

function AboutUs() {
  return (
    <>
      <main name="About Me" className="w-full py-20 bg-[#f8f9fa] relative overflow-hidden">
  
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#9b51e0]/10 rounded-full -mr-20 -mt-20 blur-3xl"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col items-center mb-12">
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#3a0ca3] relative">
              About Me
              <span className="block w-16 h-1 bg-[#9b51e0] mt-2 mx-auto rounded-full"></span>
            </h2>
            <p className="text-gray-500 mt-4 font-medium uppercase tracking-widest text-sm">
              My Professional Journey
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative group">
               <div className="absolute inset-0 bg-gradient-to-tr from-[#9b51e0] to-[#3a0ca3] rounded-3xl rotate-3 group-hover:rotate-6 transition-transform duration-300"></div>
               <div className="relative bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
                  <h3 className="text-2xl font-bold text-[#3a0ca3] mb-4">Who I Am</h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    I’m a passionate and dedicated student pursuing a degree in Information Technology. 
                    With a strong foundation in the <strong>MERN stack</strong>, I focus on building 
                    scalable, user-centric web applications.
                  </p>
               </div>
            </div>
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed text-justify">
                Throughout my academic career, I've had the opportunity to work on several hands-on projects, 
                including a <strong>Comprehensive Notes</strong> system. These experiences have refined 
                my technical skills and strengthened my abilities in teamwork and creative problem-solving.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed text-justify">
                I have a keen interest in <strong>User Experience Design</strong> and Web Development. 
                This portfolio represents my most impactful work, showcasing my progress, creativity, 
                and dedication to the craft of software development.
              </p>

              {/* <div className="pt-4">
                <button className="px-8 py-3 bg-gradient-to-r from-[#9b51e0] to-[#3a0ca3] text-white font-bold rounded-full shadow-lg hover:shadow-purple-500/30 transition-all active:scale-95">
                  Download CV
                </button>
              </div> */}
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default AboutUs