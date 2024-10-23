import React from "react";
import HomeIcon from "../../assets/home";
function ProjectCard() {
  return (
    <div className="w-5/6 md:w-1/2 lg:w-[400px] bg-slate-950 text-white p-5 rounded-lg border border-gray-500/40 shadow-inner shadow-purple-500/20 m-4">
      <div className="flex justify-end">
        <span className="inline-block bg-transparent border border-gray-500/40 text-white text-sm px-3 py-2 rounded-full">
          Completed
        </span>
      </div>
      <img
        src="https://picsum.photos/200/300"
        alt="Placeholder Image"
        className="w-full h-48 object-cover rounded-lg mt-4"
      />
      <h1 className="text-2xl font-bold mt-4 text-purple-500">Project Title</h1>
      <p className="text-sm text-gray-300 mt-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum magnam
        aliquam saepe, ipsum reiciendis culpa officiis possimus ut explicabo
        blanditiis veritatis est maiores non, quisquam ratione dolor quod
        corrupti labore.
      </p>
      <div className="mt-4">
        <button className="px-4 py-2 rounded-lg border border-purple-500/50 ">
          See more details
        </button>
      </div>
    </div>
  );
}

function ProjectDisplay() {
  return (
    <div>
      <NavBar />
      <div className="flex flex-col justify-start items-start pt-4 md:justify-start md:items-start lg:justify-start lg:items-start p-4 w-full overflow-x-hidden h-screen bg-black">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-screen px-4">
          <ProjectCard />
          <ProjectCard />
        </div>
      </div>
    </div>
  );
}

function NavBar() {
  return (
    <nav className="bg-black px-4 py-5">
      <div className="flex justify-start items-center">
        <button className="text-white border border-gray-500/40 px-4 py-2 rounded-lg transition-all duration-200 ease-in-out hover:opacity-60">
          <a href="/">
            <HomeIcon />
          </a>
        </button>
        <h1 className="text-white text-3xl font-bold px-4">Projects</h1>
      </div>
    </nav>
  );
}

export default ProjectDisplay;
