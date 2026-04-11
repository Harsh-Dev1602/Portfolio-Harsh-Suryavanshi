import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

function ContactUs() {
  const { register, handleSubmit, reset, formState: { errors, isSubmitSuccessful } } = useForm();
  
  const onSubmit = async (data) => {
    const userInfo = {
      name: data.name,
      email: data.email,
      message: data.message,
    }
    try {
      await axios.post("https://getform.io/f/aejrlxyb", userInfo);
      toast.success("Your message has been sent successfully!");
    }
    catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  }

  React.useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  return (
    <>
      <main name="Contact Me" className="relative w-full py-20 bg-[#f8f9fa] overflow-hidden">
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#3a0ca3]/5 rounded-full -ml-32 -mb-32 blur-3xl"></div>
        
        <section className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col items-center mb-12 text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#3a0ca3]">
              Get Started
              <span className="block w-16 h-1.5 bg-[#9b51e0] mt-3 mx-auto rounded-full"></span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto bg-white rounded-[2rem] shadow-2xl shadow-purple-500/5 overflow-hidden flex flex-col lg:flex-row border border-gray-100">
            <div className="lg:w-1/3 bg-gradient-to-br from-[#9b51e0] to-[#3a0ca3] p-10 text-white flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-4">  I'm available for new projects</h3>
              <p className="text-white/80 text-sm leading-relaxed mb-6">
                I help students and businesses build robust digital solutions with the MERN stack.
              </p>
              <ul className="space-y-3 text-sm font-semibold">
                <li className="flex items-center gap-2">✓ Professional Support</li>
                <li className="flex items-center gap-2">✓ Clean Code</li>
                <li className="flex items-center gap-2">✓ Modern Design</li>
              </ul>
            </div>
            <form 
              onSubmit={handleSubmit(onSubmit)}
              className="lg:w-2/3 p-10 space-y-5"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label htmlFor="name" className="block font-bold text-[#3a0ca3] text-sm uppercase tracking-wider">Full Name</label>
                  <input 
                    {...register("name", { required: true })} 
                    type="text" 
                    id="name" 
                    placeholder="Enter your name" 
                    className="w-full p-4 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-[#9b51e0] outline-none transition-all" 
                  />
                  {errors.name && <span className="text-red-500 text-xs font-bold">Name is required</span>}
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="block font-bold text-[#3a0ca3] text-sm uppercase tracking-wider">Email Address</label>
                  <input 
                    {...register("email", { required: true })} 
                    type="email" 
                    id="email" 
                    placeholder="Email id" 
                    className="w-full p-4 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-[#9b51e0] outline-none transition-all" 
                  />
                  {errors.email && <span className="text-red-500 text-xs font-bold">Email is required</span>}
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="block font-bold text-[#3a0ca3] text-sm uppercase tracking-wider">Your Message</label>
                <textarea 
                  {...register("message", { required: true })} 
                  id="message" 
                  rows="4"
                  placeholder="Tell me about your project..." 
                  className="w-full p-4 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-[#9b51e0] outline-none transition-all resize-none"
                ></textarea>
                {errors.message && <span className="text-red-500 text-xs font-bold">Message is required</span>}
              </div>

              <button 
                type="submit" 
                className="w-full md:w-auto px-10 py-4 bg-gradient-to-r from-[#9b51e0] to-[#3a0ca3] text-white rounded-full font-extrabold shadow-lg hover:shadow-purple-500/30 transition-all active:scale-95 uppercase tracking-widest text-sm"
              >
                Send Message
              </button>
            </form>
          </div>
        </section>
      </main>
    </>
  );
}

export default ContactUs;