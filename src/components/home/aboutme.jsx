import React from "react";

function AboutMe() {
  return (
    <div className="flex justify-center items-center w-screen h-screen bg-slate-950/40 py-12 font-poppins">
      <section className="text-left w-full md:w-10/12 lg:w-8/12  lg:text-center md:text-center p-6 bg-transparent rounded-lg">
        <h2 className="text-3xl md:text-4xl font-bold text-purple-500 mb-6">
          About Me
        </h2>
        <p className="text-lg md:text-xl text-gray-300 mb-4">
          I am passionate about developing projects that bring value to
          individuals and businesses alike. Currently, I am enhancing my skills
          in the field of Generative AI while pursuing my BTech in Engineering.
          My professional journey is driven by a curiosity to explore innovative
          solutions and a commitment to making a positive impact in various
          sectors.
        </p>
        <p className="text-lg md:text-xl text-gray-300 mb-4">
          Through my academic endeavors, I strive to bridge the gap between
          technology and practical applications. I believe in the transformative
          power of AI to solve real-world problems and create opportunities for
          growth and development.
        </p>
        <p className="text-lg md:text-xl text-gray-300 mb-4">
          My current focus is on mastering Generative AI techniques, which I
          find both challenging and rewarding. I am dedicated to continuous
          learning and seek to apply my knowledge in ways that benefit
          businesses, communities, and individuals.
        </p>
        <p className="text-lg md:text-xl text-gray-300 mb-4">
          Let’s connect and explore how we can collaborate on projects that
          drive innovation and create tangible results.
        </p>
      </section>
    </div>
  );
}

export default AboutMe;
