import  { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import AboutUs from "./Components/AboutUs";
import Skills from "./Components/Skills";
import Project from "./Components/Project";
import ContactUs from "./Components/ContactUs";
import Footer from "./Components/Footer";
import { Toaster } from 'react-hot-toast';
import Loading from "./Loading/Loading";

function App() {
   const [loading, setLoading] = useState(true);

useEffect(() => {
  setTimeout(() => {
    setLoading(false);
  }, 2000);
}, []);
  return (
    <>
      {loading ? (
        <Loading/>
      ) :(
      <div className="mx-auto container px-5">
        <Navbar />
        <Home />
        <AboutUs />
        <Skills />
        <Project />
        <ContactUs />
        <Footer />
      </div>
       )
      }
      <Toaster />
    </>
  );
}

export default App;
