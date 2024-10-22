import React from "react";

function ProjectSectionConsult() {
  return (
    <section className="flex flex-col justify-center items-center w-full bg-slate-950 text-white py-12 font-roboto h-screen">
      <div className="text-left w-full md:w-10/12 lg:w-8/12 md:text-center lg:text-center p-6 bg-transparent rounded-lg">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-purple-500">
          Collaborate with Me
        </h1>
        <p className="text-lg md:text-xl mb-6">
          I'm always eager to engage with like-minded individuals and businesses
          passionate about innovation and technology. Whether you have a project
          idea, need insights on generative AI, or are looking for collaboration
          opportunities, feel free to reach out. Let's work together to bring
          creative solutions to life and drive impactful results.
        </p>
        <p className="text-lg md:text-xl mb-4">Please follow the link</p>
        <button className="flex items-center justify-center mx-auto border border-purple-500 rounded-lg px-4 py-2 text-white transition-all duration-300 ease-in-out hover:text-opacity-50 hover:shadow-lg mt-4">
          <span>Collab</span>
          <svg
            className="ml-2 w-4 h-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            ></path>
          </svg>
        </button>
      </div>
    </section>
  );
}

export default ProjectSectionConsult;
