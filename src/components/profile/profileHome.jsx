import React from "react";
import HomeIcon from "../../assets/home";

export default function ProfileMain() {
  return (
    <div className="text-white w-screen  h-screen p-6 font-roboto overflow-auto bg-black">
      <nav className="px-4 py-2 flex items-center justify-start mb-8">
        <div className="text-purple-500 p-3 flex flex-col items-center mr-2">
          <a href="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-gray-500"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {" "}
              <path d="M19 12H5" /> <path d="M12 19L5 12L12 5" />{" "}
            </svg>
          </a>
        </div>
        <div className="text-white text-2xl p-3 text-center flex items-center justify-center mt-1">
          Profile
        </div>
      </nav>
      <IntroductionSection />
    </div>
  );
}

function IntroductionSection() {
  return (
    <div className="w-full flex flex-col md:flex-row border border-gray-200 rounded-lg shadow-lg justify-between items-center p-4">
      <div className="py-2 px-3 md:ml-4 mb-4 md:mb-0">
        <img
          src="https://avatars.githubusercontent.com/u/162581534?v=4"
          alt="profile"
          className="w-24 h-24 md:w-48 md:h-48 lg:w-48 lg:h-48 rounded-full shadow-md mx-auto md:mx-0"
        />
      </div>
      <div className="w-full md:w-3/4 px-3 py-2 md:mr-4 font-montserrat text-center md:text-left">
        <h2 className="text-2xl font-semibold text-gray-300 mb-2">About Me</h2>
        <p className="text-gray-300">
          I am a passionate and driven second-year B.Tech student specializing
          in Computer Science. My academic journey is enriched with hands-on
          experience in data analysis, machine learning, and generative AI. I am
          actively engaged in diverse projects, leveraging my skills in machine
          learning, web development, and backend development to solve real-world
          problems. My curiosity and commitment to continuous learning drive me
          to explore the latest advancements in technology and apply them
          innovatively. I thrive on challenges and am always eager to
          collaborate with like-minded individuals to push the boundaries of
          what's possible.
        </p>
      </div>
    </div>
  );
}
