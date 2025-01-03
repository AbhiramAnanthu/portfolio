import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function ContactModal({ isOpen, setIsOpen }) {
  const contacts = [
    {
      title: 'LinkedIn - Abhiram A R',
      icon: 'https://img.icons8.com/color/48/000000/linkedin.png',
      link: 'https://www.linkedin.com/in/abhiram-a-r-3a064b290/',
    },
    {
      title: 'GitHub - AbhiramAnanthu',
      icon: 'https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png',
      link: 'https://github.com/AbhiramAnanthu',
    },
    {
      title: 'GMail',
      icon: 'https://img.icons8.com/color/48/000000/gmail.png',
      address: 'abhiramajithr@gmail.com',
    },
    {
      title: 'Discord',
      icon: 'https://img.icons8.com/color/48/000000/discord-logo.png',
      userName: 'abhiram_59811',
    },
    {
      title: 'Mobile',
      icon: 'https://img.icons8.com/color/48/000000/phone.png',
      number: '+91 8547376353',
    },
  ];

  return (
    isOpen && (
      <div
        className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-md z-50"
        role="dialog"
        aria-modal="true"
      >
        <div className="w-lg lg:w-1/2 h-42 mx-auto bg-slate-900 rounded-lg p-6">
          <header className="flex justify-between items-center mb-4">
            <h1 className="text-2xl text-white">Contacts</h1>
            <button
              className="text-white text-2xl cursor-pointer"
              onClick={() => setIsOpen(false)}
              aria-label="Close modal"
            >
              &times;
            </button>
          </header>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {contacts.map((contact, index) => (
              <div className="flex items-center" key={index}>
                <img
                  src={contact.icon}
                  alt={`${contact.title} icon`}
                  className="w-6 h-6 mr-2"
                />
                {contact.link ? (
                  <a
                    href={contact.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-sm md:text-lg"
                  >
                    {contact.title}
                  </a>
                ) : (
                  <span className="text-white text-sm md:text-lg">
                    {contact.address || contact.userName || contact.number}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  );
}
