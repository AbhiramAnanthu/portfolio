import React from "react";

const HeroCard = () => {
  return (
    <div className="flex-col justify-center p-10 items-center h-screen">
      {/* Container for Card and Animation */}
      <div
        className="flex flex-row items-center mx-auto w-fit p-10 bg-black rounded-lg"
        style={{
          boxShadow:
            "0 4px 20px rgba(0, 0, 0, 0.5), 0 4px 30px rgba(0, 0, 255, 0.5)", // Updated to blue shade
        }}
      >
        {/* Card Section */}
        <div className="flex flex-col items-center justify-start w-full mr-10">
          <div className="mb-6">
            <img
              className="w-32 h-32 rounded-full shadow-md"
              src="https://avatars.githubusercontent.com/u/162581534?v=4"
              alt="profile photo"
            />
          </div>
          <div className="text-2xl font-semibold text-white">Hi!</div>
          <div className="text-3xl font-bold text-white">I am Abhiram AR</div>
          <div className="text-4xl font-extrabold text-white mt-4">
            Welcome to My Portfolio
          </div>

          {/* Dummy Descriptions */}
          <div className="mt-6 text-gray-400 text-center">
            <p className="mb-2">GenAI | MLOps | Server-side Development</p>
            <p className="mb-2">
              I enjoy collaborating with teams to create efficient solutions and
              am always eager to learn new technologies to enhance my skills.
            </p>
          </div>
        </div>

        {/* Lottie Animation Section */}
        <div>
          <iframe
            src="https://lottie.host/embed/673d3e6a-42af-4c99-84cb-98c6e3cb78c1/qpaITJ6QfE.json"
            width="400"
            height="400"
            frameBorder="0"
            allowFullScreen
            className="rounded-lg"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default HeroCard;
