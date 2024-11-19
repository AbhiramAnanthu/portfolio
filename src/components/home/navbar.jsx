import React, { useState } from "react";
import Modal from "./modalBoxContact";
import ModalMessage from "./modalMessage";

function NavBar(props) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [isModalMessageOpen, setIsModalMessageOpen] = useState(false);

  const openModel = () => setIsModalOpen(true);
  const closeModel = () => setIsModalOpen(false);

  const openModalMessage = () => setIsModalMessageOpen(true);
  const closeModalMessage = () => setIsModalMessageOpen(false);
  return (
    <nav className="shadow-md py-5 mt-3 w-screen">
      <div className="container mx-auto mt-2  lg:mt-0 flex flex-row justify-evenly lg:justify-around items-center pt-3">
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
          isModal={true}
          click={openModalMessage}
        />
        <ModalMessage isOpen={isModalMessageOpen} onClose={closeModalMessage} />
      </div>
    </nav>
  );
}

function ToggleSelector(props) {
  return (
    <button
      className="w-32 h-6 flex flex-row items-center justify-evenly px-4 py-2 lg:h-12 rounded-2xl lg:border lg:border-black font-roboto transition-all ease-in-out hover:border-gray-600"
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
