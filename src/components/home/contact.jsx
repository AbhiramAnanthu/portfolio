import React from "react";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";
import DiscordIcon from "@mui/icons-material/Group"; // Placeholder icon; choose as needed
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const contacts = [
  {
    title: "Phone",
    info: "+91 8547376353",
    icon: <PhoneIcon />,
  },
  {
    title: "Email",
    info: "abhiramajithr@gmail.com",
    icon: <EmailIcon />,
  },
  {
    title: "Instagram",
    info: "@abhiram_.ajith",
    icon: <InstagramIcon />,
    link: "https://www.instagram.com/abhiram_.ajith/",
  },
  {
    title: "Discord",
    info: "abhiram_59811",
    icon: <DiscordIcon />,
  },
  {
    title: "LinkedIn",
    info: "abhiram-a-r-3a064b290",
    icon: <LinkedInIcon />,
    link: "https://www.linkedin.com/in/abhiram-a-r-3a064b290/",
  },
  {
    title: "GitHub",
    info: "AbhiramAnanthu",
    icon: <GitHubIcon />,
    link: "https://github.com/AbhiramAnanthu",
  },
];

const ContactSection = () => {
  return (
    <section className="bg-gray-900 py-12">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-purple-500">Contact Me</h2>
        </div>
        {/* Contact Icons */}
        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">
          {contacts.map((contact, index) => (
            <div key={index} className="flex flex-col items-center">
              {contact.link ? (
                <a
                  href={contact.link}
                  className="text-white hover:text-blue-400 transition-colors text-4xl"
                  title={contact.title}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {contact.icon}
                </a>
              ) : (
                <span className="text-white text-4xl" title={contact.title}>
                  {contact.icon}
                </span>
              )}
              <p className="text-gray-300 mt-2 text-center">{contact.info}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
