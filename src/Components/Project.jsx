import React from 'react'
import Img1 from "../../public/Img/Project1.png"
import Img2 from "../../public/Img/Project2.png"
import Img3 from "../../public/Img/Project3.png"


function Project() {
  return (
    <>
      <main name="Project" className='w-full h-auto py-5 '>

        <section>
          <h2 className="text-2xl text-white rounded-md inline p-2  bg-black font-semibold">Project</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            <div className="p-6 shadow shadow-gray-500 rounded-md ">
              <img src={Img1} />
              <h3 className="text-2xl font-bold">Comprehensive Notes</h3>
              <p className="mt-2 text-justify">The Comprehensive Digital Learning System for Students provides an intuitive and user-friendly platform for accessing, sharing, and engaging with study materials.

                <a href="https://comprehensive-notes-minor-project.vercel.app/SignUpLogIn.html " className='text-blue-700 hover:underline font-bold  p-1.5 ' target="_blank" rel="noopener noreferrer">Visit My Project</a>
              </p>

            </div>
            <div className="p-6 shadow shadow-gray-500 rounded-md">
              <img src={Img2} />
              <h3 className="text-2xl font-bold">To-Do List</h3>

              <p className="mt-2 text-justify">
                <li className=' list-none'><span className=' font-semibold'>Organized:</span> It helps you keep your tasks in a structured manner.</li>
                <li className=' list-none'><span className=' font-semibold'>Prioritized:</span> You can arrange tasks based on their importance or urgency</li>
                <li className=' list-none'><span className=' font-semibold'>Comprehensive:</span> It captures all the tasks you need to complete<a href="https://to-do-list-gamma-nine-10.vercel.app" className='text-blue-700 font-bold hover:underline  p-1.5 ' target="_blank" rel="noopener noreferrer">Visit My Project</a></li>
              </p>

            </div>
            <div className="p-6 shadow shadow-gray-500 rounded-md " >
              <img src={Img3} />
              <h3 className="text-2xl font-bold">QR-Generator</h3>
              <p className="mt-2 text-justify">
                <li className=" list-none"><span className=' font-semibold'>Innovative: </span>It uses modern technology to create QR codes.</li>
                <li className=" list-none"><span className=' font-semibold'>Convenient:</span> It simplifies the process of sharing information.</li>
                <li className=" list-none"><span className=' font-semibold'>Efficient:</span> It quickly generates QR codes for various uses. <a href="https://qr-generator-three-wheat.vercel.app" className='text-blue-700 font-bold  hover:underline  p-1.5 ' target="_blank" rel="noopener noreferrer ">Visit My Project</a></li> 

              </p>

            </div>
          </div> 
        </section>
      </main>
    </>
  )
}

export default Project