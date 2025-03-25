import React from "react";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import AboutUs from "./Components/AboutUs";
import Skills from "./Components/Skills";
import Project from "./Components/Project";
import ContactUs from "./Components/ContactUs";
import Footer from "./Components/Footer";
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <>
       <div className="bg-sky-200">
        <div className="w-[94%] h-auto mx-auto  ">
          <Navbar />
          <Home />
          <AboutUs />
          <Skills />
          <Project />
          <ContactUs />
          <Footer />
        </div>
        </div>
      <Toaster />

    </>
  );
}

export default App;
