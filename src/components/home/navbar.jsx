import React, { useState } from "react";
import CodeIcon from "../../assets/code";
import MailIcon from "../../assets/mail";

function NavBar() {
  return (
    <nav className="bg-black shadow-md py-5">
      <div className="container mx-auto flex justify-between items-center px-10">
        <ToggleSelector name="projects" />
        <ToggleSelector name="contact" />
      </div>
    </nav>
  );
}

function ToggleSelector(props) {
  const [isExpanded, setIsExpanded] = useState(false); // Changed to lowercase 'isExpanded'

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const icon = props.name === "projects" ? <CodeIcon /> : <MailIcon />;

  return (
    <>
      <div className="flex justify-center items-center space-x-2">
        <button
          onClick={toggleExpand}
          className="flex items-center px-4 py-2 text-white rounded-md"
        >
          {icon}
        </button>

        <div
          className={`text-white transition-opacity duration-300 ease-in-out ${
            isExpanded ? "opacity-100" : "opacity-0"
          }`}
        >
          {props.name}
        </div>
      </div>
    </>
  );
}

export default NavBar;
