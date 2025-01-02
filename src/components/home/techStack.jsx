import React from 'react';

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
  return (
    <div className="flex flex-row justify-around align-center space-x-3 mt-2 bg-slate-900/40 md:w-[600px] w-full mx-auto py-2 px-2 rounded-lg">
      {techStacks.map((stack) => {
        return (
          <div className="flex justify-center align-center">
            <img
              src={stack.icon}
              alt={stack.title}
              className="w-5 h-5 lg:w-10 lg:h-10 transition-all hover:lg:scale-125"
            />
          </div>
        );
      })}
    </div>
  );
}
