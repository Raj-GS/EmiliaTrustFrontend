"use client";

import { useForm } from "react-hook-form";
import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import axios from "axios";

type ContactFormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

export default function ContactUsForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>();


const onSubmit = async (data: ContactFormData) => {
  try {
    const response = await axios.post("https://emiliatrustbackend.onrender.com/api/contact-us", data);

    if (response.status === 200) {
      alert("Your message has been sent!");
      reset(); // clear form
    } else {
      alert("Something went wrong. Please try again.");
    }
  } catch (error) {
    console.error("Error submitting contact form:", error);
    alert("Failed to send message. Please try again later.");
  }
};

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Navbar */}
      <header>
        <Navbar />
      </header>

      {/* Main Content */}
      <main className="flex-1 flex justify-center items-center py-16 px-4">
        <div className="w-full max-w-2xl bg-white p-10 rounded-2xl shadow-xl">
          <h2 className="text-2xl font-semibold mb-6 text-center text-[#9f3da8]">
            Contact Us
          </h2>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Name */}
            <div>
              <label className="block font-medium mb-1">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                {...register("name", { required: "Name is required" })}
                className="w-full border rounded px-3 py-2"
                placeholder="Enter Your Name"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block font-medium mb-1">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Invalid email address",
                  },
                })}
                className="w-full border rounded px-3 py-2"
                placeholder="Enter Your Email"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Phone */}
            <div>
              <label className="block font-medium mb-1">Phone</label>
              <input
                type="tel"
                {...register("phone", {
                  pattern: {
                    value: /^[0-9]{10}$/,
                    message: "Phone number must be 10 digits",
                  },
                })}
                className="w-full border rounded px-3 py-2"
                placeholder="Enter Your Phone Number"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.phone.message}
                </p>
              )}
            </div>

            {/* Message */}
            <div>
              <label className="block font-medium mb-1">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                {...register("message", { required: "Message is required" })}
                className="w-full border rounded px-3 py-2"
                placeholder="Enter Your Message"
                rows={4}
              />
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.message.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 bg-[#9f3da8] text-white font-semibold rounded-lg shadow-md hover:scale-105 transition-transform duration-200"
            >
              Send
            </button>
          </form>
        </div>
      </main>

      {/* Footer */}
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
