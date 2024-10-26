import React, { useState } from "react";

function NavBar(props) {
  return (
    <nav className="bg-black shadow-md py-5 w-screen">
      <div className="container mx-auto flex flex-row justify-between items-center space-x-6 px-9 pt-2">
        <ToggleSelector name="projects" id="projects" icon={props.icon1} />
        <ToggleSelector name="contact" id="contact" icon={props.icon2} />
      </div>
    </nav>
  );
}

function ToggleSelector(props) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    
    <div className="relative">
      <a
        href={`/${props.name}`}
        className={`flex justify-evenly items-center text-white transition-all duration-300 ease-in-out px-4 py-3 rounded-2xl ${
          isHovered ? "bg-opacity-50 backdrop-blur bg-dark" : ""
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          boxShadow: isHovered ? "0 4px 15px rgba(0, 122, 255, 0.5)" : "none",
        }}
      >
        <div
          className={`flex items-center justify transition-transform duration-400 ease-in-out ${
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
            <span className="ml-3 text-white">{props.name}</span>
          </div>
        </div>
      </a>
    </div>
  );
}

export default NavBar;
