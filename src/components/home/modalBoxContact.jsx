import React from "react";

export default function Modal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const IconPill = (props) => {
    return (
      <div className="flex items-center space-x-2 text-gray-200">
        <img src={props.icon} alt={`${props.name}`} className="w-8 h-8" />
        {props.isLink ? (
          <div className="flex items-center space-x-2">
            <a href={props.src} target="_blank" rel="noopener noreferrer">
              {props.username}
            </a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path
                d="M 19.980469 2.9902344 A 1.0001 1.0001 0 0 0 19.869141 3 L 15 3 A 1.0001 1.0001 0 1 0 15 5 L 17.585938 5 L 8.2929688 14.292969 A 1.0001 1.0001 0 1 0 9.7070312 15.707031 L 19 6.4140625 L 19 9 A 1.0001 1.0001 0 1 0 21 9 L 21 4.1269531 A 1.0001 1.0001 0 0 0 19.980469 2.9902344 z M 5 3 C 3.9069372 3 3 3.9069372 3 5 L 3 19 C 3 20.093063 3.9069372 21 5 21 L 19 21 C 20.093063 21 21 20.093063 21 19 L 21 13 A 1.0001 1.0001 0 1 0 19 13 L 19 19 L 5 19 L 5 5 L 11 5 A 1.0001 1.0001 0 1 0 11 3 L 5 3 z"
                fill="gray"
              ></path>
            </svg>
          </div>
        ) : (
          <p>{props.data}</p>
        )}
      </div>
    );
  };

  const contactDetails = [
    {
      name: "PhoneNumber",
      icon: "https://www.reshot.com/preview-assets/icons/G3Z5TJCNHB/phone-G3Z5TJCNHB.svg",
      isLink: false,
      data: "+91 8547376353",
    },
    {
      name: "EmailAddress",
      icon: "https://www.reshot.com/preview-assets/icons/VBLAFXYZ7W/email-VBLAFXYZ7W.svg",
      isLink: false,
      data: "abhiramajithr@gmail.com",
    },
    {
      name: "LinkedIn",
      icon: "https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Bug.svg.original.svg",
      isLink: true,
      src: "https://www.linkedin.com/in/abhiram-a-r-3a064b290/",
      username: "Abhiram A R",
    },
    {
      name: "Discord",
      icon: "https://www.svgrepo.com/show/353655/discord-icon.svg",
      isLink: false,
      data: "abhiram_59811",
    },
    {
      name: "GitHub",
      icon: "https://www.reshot.com/preview-assets/icons/NY46M9DGFU/github-NY46M9DGFU.svg",
      isLink: true,
      src: "https://github.com/AbhiramAnanthu",
      username: "AbhiramAnanthu",
    },
  ];

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 backdrop-blur-sm">
      <div className="bg-gray-800 rounded-lg shadow-lg p-6 w-3/4 lg:w-1/2 text-white">
        <div className="flex flex-row items-center justify-between py-8 pt-2 lg:pb-4">
          <h2 className="text-lg font-bold text-center text-purple-500">Contact Details</h2>
          <button className=" text-white lg:px-4 rounded" onClick={onClose}>
            &#10006;
          </button>
        </div>
        <div className="space-y-6 grid grid-col-1 md:grid-cols-2 lg:grid-cols-2">
          {contactDetails.map((detail, index) => (
            <IconPill
              key={index}
              name={detail.name}
              icon={detail.icon}
              isLink={detail.isLink}
              src={detail.src}
              username={detail.username}
              data={detail.data}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
