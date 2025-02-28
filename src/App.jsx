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
    
        <div className="w-[95%] h-auto mx-[2.5%] ">
          <Navbar />
          <Home />
          <AboutUs />
          <Skills />
          <Project />
          <ContactUs />
          <Footer />
        </div>
  
      <Toaster />

    </>
  );
}

export default App;
