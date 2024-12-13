import React from "react";

function Hero() {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center w-screen h-[80vh] lg:w-11/12 bg-black font-roboto mx-auto mt-4">
      <section className="grid gap-6 px-4 py-5 md:grid-cols-2 w-full md:w-10/12 lg:w-5/6 lg:h-3/4 justify-center items-center">
        <div className="p-4 text-center md:text-left lg:text-left">
          <div className="mb-6">
            <img
              src="https://avatars.githubusercontent.com/u/162581534?v=4"
              alt="profile-Abhiram A R"
              className="w-24 h-24 md:w-48 md:h-48 lg:w-48 lg:h-48 rounded-full shadow-md mx-auto md:mx-0"
            />
          </div>
          <div className="ml-0 md:ml-3 w-full lg:w-auto">
            <h2 className="text-2xl text-purple-500 md:text-3xl font-semibold mb-2">
              Abhiram A R
            </h2>
            <p className="text-sm md:text-xl lg:text-xl text-white mb-2">
              Web Developer <span className="text-purple-500 mx-1">|</span>{" "}
              Machine Learning <span className="text-purple-500 mx-1">|</span>{" "}
              MLOps
            </p>
            <p className="text-white text-base md:text-lg">UnderGrad @SCT</p>
            <a href="/profile">
              <button className="flex items-center justify-center mx-auto md:mx-0 border border-purple-500 rounded-lg px-3 py-2 text-white transition-all duration-300 ease-in-out hover:text-opacity-50 hover:shadow-lg mt-4">
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
            </a>
          </div>
        </div>
        <div className="flex justify-center items-center mt-6 md:mt-0">
          <iframe
            src="https://lottie.host/embed/673d3e6a-42af-4c99-84cb-98c6e3cb78c1/qpaITJ6QfE.json"
            className="w-32 h-32 md:w-[200px] md:h-[200px] lg:w-[400px] lg:h-[400px] rounded-lg"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </section>
    </div>
  );
}

export default Hero;
