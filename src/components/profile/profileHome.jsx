import React from "react";
import { Home } from "@mui/icons-material";

export default function ProfileMain() {
  return (
    <div className="text-white w-screen h-screen bg-black p-6 font-roboto overflow-auto">
      <nav className="bg-slate-950 px-4 py-2 flex items-center justify-start mb-8 shadow-lg shadow-gray-600/30">
        <div className="text-purple-500 p-3 flex flex-col items-center mr-2">
          <a href="/">
            <Home fontSize="large" />
          </a>
        </div>
        <div className="text-white text-2xl p-3 text-center flex items-center justify-center mt-1">
          Profile Insights
        </div>
      </nav>
      <section className="p-3">
        <h1 className="text-4xl text-purple-500 mb-8">Education</h1>
        <div className="mb-8 p-4 bg-gray-800 rounded-lg">
          <h1 className="text-2xl text-purple-400 mb-4">High School</h1>
          <p className="mb-2">
            I did my secondary education at Amrita Vidyalayam, Trivandrum,
            Kerala, India.
          </p>
          <p>
            I was in the Science Stream with Computer Science and passed with a
            92% score in my final boards.
          </p>
        </div>
        <div className="p-4 bg-gray-800 rounded-lg">
          <h1 className="text-2xl text-purple-400 mb-4">Undergraduation</h1>
          <p className="mb-2">
            I am currently pursuing my BTech in Computer Science and Engineering
            at Sree Chithra Thirunal College Of Engineering, Thiruvananthapuram,
            Kerala, India.
          </p>
          <p>I am currently in my second year of the program.</p>
        </div>
      </section>
      <section className="p-3">
        <h1 className="text-4xl text-purple-500 mb-8">Skills</h1>
        <div className="mb-8 p-4 bg-gray-800 rounded-lg">
          <p className="mb-2">
            I am passionate about web development and leveraging generative AI
            to create innovative solutions. My interests lie in combining the
            power of AI with seamless web interfaces to create tools and
            platforms that can automate tasks, enhance user experiences, and
            provide intelligent services. I enjoy experimenting with different
            technologies and frameworks to push the boundaries of what's
            possible in the digital realm.
          </p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-4">
          {[
            {
              name: "Python",
              image: "https://www.svgrepo.com/show/376344/python.svg",
            },
            {
              name: "LangChain",
              image:
                "https://api.nuget.org/v3-flatcontainer/langchain/0.13.1-dev.41/icon",
            },
            {
              name: "Django",
              image:
                "https://w7.pngwing.com/pngs/159/366/png-transparent-django-python-computer-icons-logo-python-text-label-rectangle-thumbnail.png",
            },
            {
              name: "Flask",
              image:
                "https://w7.pngwing.com/pngs/164/57/png-transparent-flask-logos-brands-icon.png",
            },
            {
              name: "HTML",
              image:
                "https://e7.pngegg.com/pngimages/780/934/png-clipart-html-logo-html5-logo-icons-logos-emojis-tech-companies-thumbnail.png",
            },
            {
              name: "CSS",
              image:
                "https://cdn4.iconfinder.com/data/icons/flat-brand-logo-2/512/css3-512.png",
            },
            {
              name: "JavaScript",
              image:
                "https://static-00.iconduck.com/assets.00/javascript-js-icon-2048x2048-nyxvtvk0.png",
            },
            {
              name: "React",
              image:
                "https://w7.pngwing.com/pngs/79/518/png-transparent-js-react-js-logo-react-react-native-logos-icon-thumbnail.png",
            },
            {
              name: "Docker",
              image:
                "https://banner2.cleanpng.com/20180802/ipp/c26b0dc2951a5195ae50c46f6be2544e.webp",
            },
            {
              name: "Node.js",
              image:
                "https://w7.pngwing.com/pngs/205/650/png-transparent-node-js-javascript-software-developer-express-js-computer-software-node-js-logo-nodejs-software-development-thumbnail.png",
            },
            {
              name: "Express",
              image: "https://img.icons8.com/fluent/200/express-js.png",
            },
            {
              name: "MongoDB",
              image: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-2.svg",
            },
          ].map((tech) => (
            <div key={tech.name} className="flex flex-col items-center">
              <img
                src={tech.image}
                alt={`${tech.name} Logo`}
                className="w-12 h-12 mb-2"
              />
              <span className="text-gray-300">{tech.name}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
