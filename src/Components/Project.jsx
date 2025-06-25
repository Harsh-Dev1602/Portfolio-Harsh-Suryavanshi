import React from 'react'
import Img1 from "../../public/Img/Project1.png"
import Img2 from "../../public/Img/Project2.png"
import Img3 from "../../public/Img/Project3.png"
import Img4 from "../../public/Img/Project4.png"



function Project() {
  return (
    <>
      <main name="Project" className='w-full h-auto py-5 '>

        <section>
          <h2 className="text-2xl text-white rounded-md inline p-2  bg-black font-semibold">Project</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            <div className="p-6 bg-white  shadow shadow-gray-500 rounded-2xl ">
              <img src={Img1} />
              <h3 className="italic text-2xl">Comprehensive Notes</h3>
              <p className="mt-2 text-justify">The Comprehensive Digital Learning System for Students provides an intuitive and user-friendly platform for accessing, sharing, and engaging with study materials.

                <a href="https://comprehensive-notes-minor-project.vercel.app" className='text-blue-700 hover:underline font-bold  p-1.5 ' target="_blank" rel="noopener noreferrer">Visit My Project</a>
              </p>

            </div>
            <div className="p-6 bg-white  shadow shadow-gray-500 rounded-2xl ">
              <img src={Img4} />
              <h3 className=" italic text-2xl">Instant Chat
              </h3>
              <p className="mt-2 text-justify">A Chat Application is a real-time communication platform that allows users to send and receive text, and multimedia messages over the internet. chat apps support features such as message notifications  and status updates.

                <a href="https://chat-application-a5mv.onrender.com" className='text-blue-700 hover:underline font-bold  p-1.5 ' target="_blank" rel="noopener noreferrer">Visit My Project</a>
              </p>

            </div>
            <div className="p-6 bg-white shadow shadow-gray-500 rounded-2xl">
              <img src={Img2} />
              <h3 className="text-2xl italic">To-Do List</h3>

              <p className="mt-2 text-justify">  
                A To-Do List is a tool used to organize tasks that need to be completed. As tasks are completed, they can be marked off or removed from the list.
                  <a href="https://to-do-list-gamma-nine-10.vercel.app" className='text-blue-700 font-bold hover:underline  p-1.5 ' target="_blank" rel="noopener noreferrer">Visit My Project</a>
              </p>

            </div>
            <div className="p-6 bg-white shadow shadow-gray-500 rounded-2xl " >
              <img src={Img3} />
              <h3 className="text-2xl italic">QR-Generator</h3>
              <p className="mt-2 text-justify">
              A QR Generator is a tool that creates QR codes (Quick Response codes), which are two-dimensional barcodes that can store information such as text, URLs, contact details, or other data. 
                 <a href="https://qr-generator-three-wheat.vercel.app" className='text-blue-700 font-bold  hover:underline  p-1.5 ' target="_blank" rel="noopener noreferrer ">Visit My Project</a>

              </p>

            </div>
          </div> 
        </section>
      </main>
    </>
  )
}

export default Project