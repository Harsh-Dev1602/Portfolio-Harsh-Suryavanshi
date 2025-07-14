import React from 'react'
import Img1 from "../../public/Img/Project1.png"
import Img2 from "../../public/Img/Project2.png"

function Project() {

  const pro = [
    {
      id: 0,
      text: "Comprehensive Notes",
      img: Img1,
      p: "The Comprehensive Digital Learning System for Students provides an intuitive and user-friendly platform for accessing, sharing, and engaging with study materials.",
      link: "https://comprehensive-notes-minor-project.vercel.app",
    },
    {
      id: 1,
      text: "Instant Chat",
      img: Img2,
      p: "A Chat Application is a real-time communication platform that allows users to send and receive text, and multimedia messages over the internet. chat apps support features such as message notifications  and status updates.",
      link: "https://chat-application-a5mv.onrender.com",
    },
  ]

  return (
    <>
      <main name="Project" className='w-full h-auto py-5 '>
        <section>
          <h2 className="text-2xl text-white rounded-md inline p-2  bg-black font-semibold">Project</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {
              pro.map(({ id, p, text, link, img }) => (
                <div key={id} className="p-6 bg-white  shadow shadow-gray-500 rounded-2xl ">
                  <img src={img} />
                  <h3 className="italic text-2xl">{text}</h3>
                  <p className="mt-2 text-justify">{p}
                  </p>
                  <a href={link} className='text-blue-700 hover:underline font-bold  p-1.5 ' target="_blank" rel="noopener noreferrer">Visit My Project</a>
                </div>
              ))
            }
          </div>
        </section>
      </main>
    </>
  )
}

export default Project