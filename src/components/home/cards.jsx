import React from "react";
import SchoolIcon from "@mui/icons-material/School";
import CollegeIcon from "@mui/icons-material/Business"; // Example icon, use a suitable one for college

function AcademicCards() {
  const cardArr = [
    {
      title: "School",
      desc: "Completed 12th grade from Amrita Vidyalayam and graduated in 2023.",
      icon: <SchoolIcon />,
    },
    {
      title: "Undergraduate",
      desc: "Pursuing B.Tech in Computer Science and Engineering, graduating in 2023.",
      icon: <CollegeIcon />,
    },
    {
      title: "Areas of Interest",
      desc: (
        <ul className="list-inside">
          <li>Web Development</li>
          <li>Generative AI (GenAI)</li>
          <li>Machine Learning</li>
        </ul>
      ),
      icon: <SchoolIcon />,
    },
  ];

  return (
    <div className="flex flex-row justify-center space-x-3 my-20 w-full ">
      {cardArr.map((info, index) => (
        <Card key={index} name={info.title} desc={info.desc} icon={info.icon} />
      ))}
    </div>
  );
}

function Card(props) {
  return (
    <div className="flex flex-col justify-evenly  items-center bg-black text-white rounded-lg p-8 m-4 transition-transform transform hover:scale-105 w-96 shadow-inner shadow-purple-500/50 cursor-pointer">
      {/* Increased width for larger cards */}
      <div className="flex flex-col justify-center items-center">
        <div className="text-4xl mb-2">{props.icon}</div>
        <div className="text-2xl font-semibold mb-2">{props.name}</div>
      </div>
      <div className="text-lg text-gray-300 text-center">{props.desc}</div>
    </div>
  );
}

export default AcademicCards;
