import React from "react";
import { useForm } from "react-hook-form";
import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import volunteer from "@/assets/volunteer4.jpg";
import { Users, BookOpen, Briefcase } from "lucide-react"; // icons
import axios from "axios";

function VolunteerForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async(data: any) => {

     try {
    const response = await axios.post("http://localhost:5000/api/volunteer", data);

    if (response.status === 200) {
      alert("Your details has been sent!");
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
      {/* Header */}
      <header>
        <Navbar />
      </header>

      {/* Volunteering Section */}
      <section className="relative bg-gradient-to-r from-[#9f3da8] to-[#ec5932] text-white py-10">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-4xl font-extrabold mb-6">
              Volunteering for Change
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Join us in creating opportunities for children and women to thrive.
              Through education, empowerment, and community initiatives, we work
              together to build a brighter future.
            </p>

            <div className="grid gap-6">
              <div className="flex items-start space-x-4 bg-white/10 rounded-xl p-4">
                <BookOpen className="h-8 w-8 text-yellow-300" />
                <p>
                  <strong>Educating Children:</strong> Providing access to
                  learning resources and mentorship.
                </p>
              </div>
              <div className="flex items-start space-x-4 bg-white/10 rounded-xl p-4">
                <Users className="h-8 w-8 text-green-300" />
                <p>
                  <strong>Women Empowerment:</strong> Supporting women to gain
                  confidence, skills, and independence.
                </p>
              </div>
              <div className="flex items-start space-x-4 bg-white/10 rounded-xl p-4">
                <Briefcase className="h-8 w-8 text-blue-300" />
                <p>
                  <strong>Small Business Support:</strong> Helping women start
                  and sustain small businesses for financial freedom.
                </p>
              </div>
            </div>
<a href="#volunteer-form">
            <button className="mt-8 px-8 py-3 bg-white text-[#9f3da8] font-semibold rounded-full shadow-lg hover:scale-105 transition transform duration-200">
              Become a Volunteer
            </button>
            </a>
          </div>

          {/* Image Side */}
          <div className="flex justify-center">
            <img
              src={volunteer}
              alt="Women empowerment and education"
              className="rounded-2xl shadow-2xl object-cover w-full h-[400px]"
            />
          </div>
        </div>
      </section>

      {/* Volunteer Form */}
      <main className="flex-1 flex justify-center items-center py-16 px-4">
        <div className="w-full max-w-3xl bg-white p-10 rounded-2xl shadow-xl" id="volunteer-form">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">
            Become A Volunteer
          </h2>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {/* First Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                First Name
              </label>
              <input
                type="text"
                {...register("firstName", {
                  required: "First name is required",
                })}
                className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#9f3da8] focus:outline-none"
              />
              {errors.firstName && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.firstName.message as string}
                </p>
              )}
            </div>

            {/* Last Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Last Name
              </label>
              <input
                type="text"
                {...register("lastName", {
                  required: "Last name is required",
                })}
                className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#9f3da8] focus:outline-none"
              />
              {errors.lastName && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.lastName.message as string}
                </p>
              )}
            </div>

            {/* Mobile */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Mobile Number
              </label>
              <input
                type="tel"
                {...register("mobile", {
                  required: "Mobile number is required",
                  pattern: {
                    value: /^[0-9]{10}$/,
                    message: "Enter a valid 10-digit number",
                  },
                })}
                className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#9f3da8] focus:outline-none"
              />
              {errors.mobile && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.mobile.message as string}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^@ ]+@[^@ ]+\.[^@ ]+$/,
                    message: "Enter a valid email",
                  },
                })}
                className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#9f3da8] focus:outline-none"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message as string}
                </p>
              )}
            </div>

            {/* Profession */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Profession
              </label>
              <input
                type="text"
                {...register("profession", {
                  required: "Profession is required",
                })}
                className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#9f3da8] focus:outline-none"
              />
              {errors.profession && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.profession.message as string}
                </p>
              )}
            </div>

            {/* Address */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Address
              </label>
              <textarea
                {...register("address", { required: "Address is required" })}
                rows={4}
                className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#9f3da8] focus:outline-none"
              ></textarea>
              {errors.address && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.address.message as string}
                </p>
              )}
            </div>

            {/* Submit */}
            <div className="md:col-span-2 flex justify-center">
              <button
                type="submit"
                className="bg-gradient-to-r from-[#9f3da8] to-[#ec5932] text-white px-10 py-3 rounded-full font-semibold shadow-lg hover:scale-105 transition transform duration-200"
              >
                Submit
              </button>
            </div>
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

export default VolunteerForm;
