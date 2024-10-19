import React, { useState } from "react";
import CodeIcon from "../../assets/code";
import MailIcon from "../../assets/mail";
import Profile from "../../assets/profile";

function NavBar() {
  return (
    <nav className="bg-black shadow-md py-5">
      <div className="container mx-auto flex flex-row justify-between items-center space-x-6 px-10 py-2">
        <ToggleSelector name="projects" id="projects" icon={<CodeIcon />} />
        <ToggleSelector name="contact" id="contact" icon={<MailIcon />} />
        {/* <ToggleSelector name="profile" id="profile" icon={<Profile />} /> */}
      </div>
    </nav>
  );
}

function ToggleSelector(props) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative">
      <button
        id={props.id}
        className={`flex flex-row justify-center items-center text-white transition-all duration-300 ease-in-out px-3 py-2 rounded-2xl${
          isHovered ? "bg-opacity-50 backdrop-blur bg-gray-900" : ""
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          boxShadow: isHovered
            ? "0 4px 15px rgba(0, 132, 255, 0.5)"
            : "none",
        }}
      >
        <div
          className={`flex items-center justify-center transition-transform duration-300 ease-in-out ${
            isHovered ? "transform -translate-x-1" : "transform translate-x-0"
          }`}
        >
          {props.icon}
        </div>
        <div
          className={`overflow-hidden whitespace-nowrap transition-all duration-300 ease-in-out ${
            isHovered ? "w-20" : "w-0"
          }`}
        >
          <div
            className={`opacity-0 transition-opacity duration-300 ease-in-out ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
          >
            <a href={`/${props.name}`} className="ml-3 text-white">
              {props.name}
            </a>
          </div>
        </div>
      </button>
    </div>
  );
}

export default NavBar;
