import React from 'react';
import { useState } from 'react';

export default function TechStack() {
  const techStacks = [
    {
      title: 'Python',
      icon: 'https://img.icons8.com/color/48/000000/python.png',
    },
    {
      title: 'JavaScript',
      icon: 'https://img.icons8.com/color/48/000000/javascript.png',
    },
    {
      title: 'React',
      icon: 'https://img.icons8.com/color/48/000000/react-native.png',
    },
    {
      title: 'Django',
      icon: 'https://img.icons8.com/color/48/000000/django.png',
    },
    {
      title: 'Flask',
      icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmD38KsMgEwahtWc_Nfs5ZVktP9dBc36MUZA&s',
    },
    {
      title: 'LangChain',
      icon: 'https://opensource.muenchen.de/logo/langchain.jpg',
    },
    {
      title: 'Selenium',
      icon: 'https://img.icons8.com/color/48/000000/selenium-test-automation.png',
    },
    {
      title: 'MongoDB',
      icon: 'https://www.svgrepo.com/show/331488/mongodb.svg',
    },
    {
      title: 'Docker',
      icon: 'https://img.icons8.com/color/48/000000/docker.png',
    },
  ];

  const [visible, setVisible] = useState(null);
  return (
    <div className="flex flex-row justify-around align-center space-x-3 mt-2 bg-slate-900/40 md:w-[600px] w-full mx-auto py-2 px-2 rounded-lg">
      {techStacks.map((stack, index) => {
        return (
          <div className="flex justify-center align-center" key={index}>
            <img
              src={stack.icon}
              alt={stack.title}
              className="w-7 h-7 md:w-10 md:h-10 lg:w-10 lg:h-10 transition-all ease-in-out"
              onMouseEnter={() => setVisible(index)}
              onMouseLeave={() => setVisible(null)}
              key={index}
            />
            {visible === index && (
              <div className="hidden lg:inline absolute translate-y-10 bg-black text-white text-xs md:text-sm lg:text-sm p-2 rounded-lg">
                {stack.title}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
