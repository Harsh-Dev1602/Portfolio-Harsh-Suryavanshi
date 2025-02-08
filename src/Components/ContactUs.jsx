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
      await axios.post("https://getform.io/f/ajjjknqa", userInfo);
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
      <main name="Contact Us" className="w-full h-auto  py-5 ">

        <h1 className=" text-3xl text-white rounded-2xl p-2 bg-gray-800  font-semibold inline">Contact me</h1>

        <section className="mt-5">
          <span className=" text-sm">Please fill out the form below to contact me</span>
          <form onSubmit={handleSubmit(onSubmit)}
            className="space-y-4 mt-5  shadow rounded-2xl shadow-gray-800 p-5 mx-auto  md:w-[40%]">
            <div className="text-2xl font-semibold">Send Your Message</div>
            <div>
              <label htmlFor="name" className="block text-lg">Name</label>
              <input name="name" {...register("name", { required: true })} type="text" id="name" placeholder=' Please enter a fullname..' className="w-full p-3 border border-gray-300 rounded-2xl  outline-none" />
              {errors.name && <span className="text-red-600 pl-2.5">This field is required</span>}
            </div>
            <div>
              <label htmlFor="email" className="block text-lg">Email</label>
              <input name="email" {...register("email", { required: true })} type="email" placeholder=' Please enter a email id..' id="email" className="w-full p-3 border border-gray-300 rounded-2xl outline-none" />
              {errors.email && <span className="text-red-600 pl-2.5">This field is required</span>}
            </div>
            <div>
              <label htmlFor="message" className="block text-lg">Message</label>
              <textarea name="message" {...register("message", { required: true })} id="message" placeholder=' Enter your Query..' className="w-full min-h-30 p-3 border border-gray-300 rounded-2xl outline-none"></textarea>
              {errors.message && <span className="text-red-600 pl-2.5">This field is required</span>}
            </div>
            <button type="submit" className="bg-blue-600 cursor-pointer hover:bg-blue-400 text-white p-3 rounded-2xl font-semibold">Send Message</button>
          </form>
        </section>
      </main>
    </>
  );
}

export default ContactUs;
