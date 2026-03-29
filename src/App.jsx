import { useEffect, useState } from "react";
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
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="bg-[#f8f9fa] min-h-screen selection:bg-[#9b51e0] selection:text-white">
          <Navbar />
          <div className="space-y-0">
            <Home />
            <AboutUs />
            <Skills />
            <Project />
            <ContactUs />
          </div>
          <Footer />
        </div>
      )}
      <Toaster position="bottom-right" reverseOrder={false} />
    </>
  );
}

export default App;