import React from "react";

const HeroCard = () => {
  return (
    <div className="bg-black flex justify-center w-full -my-10 h-screen items-center">
      {/* Container for Card and Animation */}
      <div className="flex flex-row items-center mx-auto w-5/6 p-6 bg-transparent rounded-lg shadow-inner shadow-purple-500/50">
        {/* Card Section */}
        <div className="flex flex-col items-center justify-center w-full mr-6 border-r-2 border-purple-500/50 p-4">
          <div className="mb-4">
            <img
              className="w-48 h-48 rounded-full shadow-md" // Increased size for profile image
              src="https://avatars.githubusercontent.com/u/162581534?v=4"
              alt="profile photo"
            />
          </div>
          <div className="text-3xl font-semibold text-white">Welcome</div>{" "}
          {/* Increased font size */}
          <div className="text-4xl font-bold text-white mt-1">
            I am Abhiram AR
          </div>{" "}
          {/* Increased font size */}
          <div className="text-lg text-gray-300 mt-2 text-center">
            <p>GenAI | MLOps | Server-side Development</p>
          </div>
          {/* Additional Text Content */}
          <div className="mt-4 text-center text-gray-300">
            <p>
              Passionate about creating innovative solutions and enhancing user
              experiences.
            </p>
            <p>
              I enjoy collaborating with teams to deliver high-quality products
              and continuously learning new technologies.
            </p>
          </div>
        </div>

        {/* Lottie Animation Section */}
        <div className="w-1/2">
          <iframe
            src="https://lottie.host/embed/673d3e6a-42af-4c99-84cb-98c6e3cb78c1/qpaITJ6QfE.json"
            width="500" // Adjust the width as needed
            height="500" // Adjust the height as needed
            frameBorder="0"
            allowFullScreen
            className="rounded-lg"
            color="white"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default HeroCard;
