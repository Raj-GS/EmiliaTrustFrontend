import React from "react";
import { AnimatedSection } from "@/components/AnimatedSection";
import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import emilia from "@/assets/emilia.jpg";

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Navbar */}
      <header>
        <Navbar />
      </header>

      {/* Hero Section */}
      <div className="relative h-[30vh] bg-gradient-to-r from-[#9f3da8] to-[#ec5932] flex items-center justify-center">
        <div className="text-center text-white px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About Emilia Burton Trust
          </h1>
          <p className="text-lg md:text-xl italic">
            "Giving makes one richer than receiving"
          </p>
          <p className="mt-2">— Mrs. Maria Emilia Burton</p>
        </div>
      </div>



      {/* Content Section */}
      <div className="max-w-6xl mx-auto py-16 px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <AnimatedSection>
          <img
            src={emilia}
            alt="Mrs. Maria Emilia Burton"
            className="w-full h-[450px] object-cover rounded-2xl shadow-lg"
          />
        </AnimatedSection>

        {/* Text Content */}
        <AnimatedSection delay={200}>
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Honoring the Legacy
            </h2>
            <p className="mb-4 leading-relaxed">
              The <b>Emilia Burton Trust</b> was founded in memory of{" "}
              <b>Late Mrs. Maria Emilia Burton (1949–2017)</b>, a woman whose
              life reflected compassion, generosity, and service. She believed
              true wealth lies in giving—and lived that out through acts of
              kindness that touched her family, community, and workplace.
            </p>
            <p className="mb-4 leading-relaxed">
              In her honor, the Trust continues her legacy by reaching out to
              those in need, with a special focus on <b>women and children</b>.
            </p>
            <p className="mb-4 leading-relaxed">
              <b>Her Love for Education</b>
            </p>
            <p className="mb-4 leading-relaxed">
              Brilliant in academics and deeply passionate about learning, Mrs.
              Burton especially loved Mathematics and Science. She encouraged
              young learners by sponsoring awards for students excelling in
              science at the high school level.
            </p>
            <p className="leading-relaxed">
              Today, through the Trust, we carry her vision forward by{" "}
              <b>
                supporting children’s education and empowering women
              </b>
              —ensuring that her spirit of service lives on in future
              generations.
            </p>
          </div>
        </AnimatedSection>
      </div>

      {/* Footer */}
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default About;
