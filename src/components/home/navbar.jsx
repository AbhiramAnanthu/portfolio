import React, { useState } from "react";

function NavBar(props) {
  return (
    <nav className="shadow-md py-5 mt-3 w-screen">
      <div className="container mx-auto flex flex-row justify-around items-center pt-3">
        <ToggleSelector name="Projects" id="projects" icon={props.icon1} />
        <ToggleSelector name="Contact" id="contact" icon={props.icon2} />
        <ToggleSelector name="Message" id="message" icon={props.icon2} />
      </div>
    </nav>
  );
}

function ToggleSelector(props) {
  return (
    <>
      <button className="w-32 h-6 flex flex-row items-center justify-evenly px-4 py-2 lg:h-12 rounded-xl lg:border lg: border-black font-roboto transition-all ease-in-out hover:border-white">
        <a
          href={`/${props.name}`}
          className="text-white text-sm flex items-center space-x-2"
        >
          <div>{props.icon}</div>
          <div className="hidden lg:inline md:inline">{props.name}</div>
        </a>
      </button>
    </>
  );
}

export default NavBar;
