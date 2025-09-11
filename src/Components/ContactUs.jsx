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
      toast.success("Your message has been send");


    }
    catch (error) {
      console.log(error);
      toast.error("Something went wrong")
    }
  }

  React.useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  return (
    <>
      <main name="Contact Me" className="w-full h-auto  p-5 ">

        <h1 className=" text-2xl text-white rounded-md p-2  font-bold inline BG_Color">Contact me</h1>

        <section className="mt-5">
          <span className=" font-bold text-sm">Please fill out the form below to contact me</span>
          <form onSubmit={handleSubmit(onSubmit)}
            className="space-y-4 mt-5  shadow rounded-2xl shadow-gray-500 p-5 mx-auto  lg:w-[40%] bg-white"> 
            <div className="text-2xl font-bold Text_Color">Send Your Message</div>
            <div>
              <label htmlFor="name" className="block font-semibold text-lg">Name</label>
              <input name="name" {...register("name", { required: true })} type="text" id="name" placeholder=' Please enter a fullname..' className="w-full p-3 border border-gray-300 rounded-md  outline-none" />
              {errors.name && <span className="text-red-600 font-semibold pl-1">This field is required</span>}
            </div>
            <div>
              <label htmlFor="email" className="block font-semibold text-lg">Email</label>
              <input name="email" {...register("email", { required: true })} type="email" placeholder=' Please enter a email id..' id="email" className="w-full p-3 border border-gray-300 rounded-md outline-none" />
              {errors.email && <span className="text-red-600 font-semibold pl-1">This field is required</span>}
            </div>
            <div>
              <label htmlFor="message" className="block font-semibold text-lg">Message</label>
              <textarea name="message" {...register("message", { required: true })} id="message" placeholder=' Enter your Query..' className="w-full min-h-30 p-3 border border-gray-300 rounded-md outline-none"></textarea>
              {errors.message && <span className="text-red-600 font-semibold pl-1">This field is required</span>}
            </div>
            <button type="submit" className="bg-blue-800 cursor-pointer hover:bg-blue-300 duration-1000 text-white py-3 px-5 rounded-md font-semibold">Send Message</button>
          </form>
        </section>
      </main>
    </>
  );
}

export default ContactUs;
