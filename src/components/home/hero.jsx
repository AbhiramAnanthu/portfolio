import React from "react";

function Hero() {
  return (
    <div className="flex justify-center items-center w-screen h-screen bg-black font-roboto ">
      <section className="grid gap-6 px-10 md:grid-cols-2 w-5/6 md:w-10/12 lg:w-5/6 lg:h-3/4 justify-center items-center border border-gray-300/20 shadow-inner shadow-lg shadow-purple-500/20">
        <div className="p-4 text-center md:text-left lg:text-left">
          <div className="mb-6">
            <img
              src="https://avatars.githubusercontent.com/u/162581534?v=4"
              alt="profile-Abhiram A R"
              className="w-32 h-32 md:w-48 md:h-48 lg:w-48 lg:h-48 rounded-full shadow-md mx-auto md:mx-0"
            />
          </div>
          <div className="ml-3">
            <h1 className="text-3xl text-purple-500 md:text-4xl font-bold mb-2">
              Hi
            </h1>
            <h2 className="text-2xl text-purple-500 md:text-3xl font-semibold mb-2">
              I am Abhiram A R
            </h2>
            <p className="text-lg md:text-xl text-white mb-4 italic">
              Passionate about leveraging AI to solve real-world problems and
              create innovative solutions.
            </p>
            <button className="flex items-center justify-center mx-auto md:mx-0 border border-purple-500 rounded-lg px-4 py-2 text-white transition-all duration-300 ease-in-out hover:text-opacity-50 hover:shadow-lg mt-4">
              <span>See More</span>
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
        </div>
        <div className="flex justify-center items-center mt-6 md:mt-0">
          <iframe
            src="https://lottie.host/embed/673d3e6a-42af-4c99-84cb-98c6e3cb78c1/qpaITJ6QfE.json"
            className="w-48 h-48 md:w-[200px] md:h-[200px] lg:w-[400px] lg:h-[400px] rounded-lg"
            frameBorder="0"
            allowFullScreen
            color="white"
          ></iframe>
        </div>
      </section>
    </div>
  );
}

export default Hero;
