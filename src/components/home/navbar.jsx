import React, { useState } from "react";
import Modal from "./modalBoxContact";
function NavBar(props) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModel = () => setIsModalOpen(true);
  const closeModel = () => setIsModalOpen(false);

  return (
    <nav className="shadow-md py-5 mt-3 w-screen">
      <div className="container mx-auto flex flex-row justify-around items-center pt-3">
        <ToggleSelector
          name="Projects"
          id="projects"
          link="projects"
          icon={props.icon1}
          isModal={false}
        />
        <ToggleSelector
          name="Contact"
          id="contact"
          link="#"
          icon={props.icon2}
          isModal={true}
          click={openModel}
        />
        <Modal isOpen={isModalOpen} onClose={closeModel} />
        <ToggleSelector
          name="Message"
          id="message"
          link="#"
          icon={props.icon2}
          isModal={false}
        />
      </div>
    </nav>
  );
}

function ToggleSelector(props) {
  return (
    <button
      className="w-32 h-6 flex flex-row items-center justify-evenly px-4 py-2 lg:h-12 rounded-xl lg:border lg:border-black font-roboto transition-all ease-in-out hover:border-white"
      onClick={props.isModal ? props.click : null}
    >
      <a
        href={`/${props.link}`}
        className="text-white text-sm flex items-center space-x-2"
      >
        <div>{props.icon}</div>
        <div className="hidden lg:inline md:inline">{props.name}</div>
      </a>
    </button>
  );
}

export default NavBar;
