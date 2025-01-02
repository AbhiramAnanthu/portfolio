import React from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import RouteButtons from './routeButtons';
import TechStack from './techStack';
export default function Hero() {
  return (
    <div className="flex flex-col justify-center align-center w-full h-full font-montserrat">
      <div className="w-5/6 md:h-auto lg:h-auto mx-auto rounded-lg py-10">
        <div className="flex flex-col justify-center items-center mt-3">
          <div className="flex justify-center items-center w-full mx-auto mt-2">
            <img
              src="https://avatars.githubusercontent.com/u/162581534?v=4"
              alt="profile-photo"
              className="w-24 h-24 md:w-32 md:h-32 lg:w-32 lg:h-32 rounded-full"
            />
          </div>
          <div className="flex flex-col justify-center items-center mt-3 text-center">
            <div className="text-gray-200 text-center px-2 py-2 flex flex-col justify-center align-center">
              <p className="text-2xl md:text-5xl lg:text-4xl">Abhiram A R</p>
              <div className="flex flex-row justify-center align-center space-x-3 mt-3">
                <p className="text-sm md:text-lg text-white">
                  UnderGrad{' '}
                  <a
                    href="https://en.wikipedia.org/wiki/Sree_Chitra_Thirunal_College_of_Engineering"
                    target="_blank"
                    className="text-center text-blue-600/60"
                  >
                    @SCT
                  </a>
                </p>
              </div>
            </div>
            <div className="text-gray-500 px-2 py-2 text-center">
              <div className="flex flex-col md:flex-row lg:flex-row justify-center items-center align-center text-center">
                <p className="text-sm md:text-lg lg:text-lg px-3">
                  LLM Engineering
                </p>
                <span className="hidden md:inline text-blue-500">•</span>
                <p className="text-sm md:text-lg lg:text-lg px-3">
                  Scripting & Automation
                </p>
                <span className="hidden md:inline text-blue-500">•</span>
                <p className="text-sm md:text-lg lg:text-lg px-3">
                  Generative AI
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-center align-center items-center w-1/2 mx-auto">
          <RouteButtons title="Projects" url="projects" />
          <RouteButtons title="Contact" url="#" />
          <RouteButtons title="Resume" url="#" />
        </div>
        <div className="flex flex-col justify-center align-center ">
          <TechStack />
          <div className="flex justify-center align-center mt-2">
            <p className="text-gray-600 text-center mt-2">Tech Stack</p>
          </div>
        </div>
      </div>
    </div>
  );
}
