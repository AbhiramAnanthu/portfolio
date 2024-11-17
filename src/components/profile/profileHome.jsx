import React from "react";
import HomeIcon from "../../assets/home";

export default function ProfileMain() {
  const profileDetails = [
    {
      header: "High School",
      description: `I completed my secondary education at Amrita Vidyalayam, Trivandrum,
          Kerala, specializing in Science with Computer Science. I scored 92% in
          my final board exams, highlighting my dedication and academic
          excellence.`,
    },
    {
      header: "Undergraduation",
      description: `I'm currently pursuing a BTech in Computer Science and Engineering
              at Sree Chithra Thirunal College Of Engineering,
              Thiruvananthapuram, Kerala. Now in my second year, I'm diving deep
              into technology and software development.`,
    },
    {
      header: "Expertise",
      description: `I specialize in web development using React, Node, Flask, Django, and Docker. Proficient in Python scripting with Selenium for web scraping. Currently exploring generative AI technologies like LLMs, image, and video generators.`,
    },
  ];

  const techDetails = [
    {
      header: "Python",
      description:
        "A versatile programming language known for its readability and broad applicability in web development, data analysis, artificial intelligence, and scientific computing.",
      link: "https://docs.python.org/3.13/whatsnew/3.13.html",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/172px-Python-logo-notext.svg.png",
    },
    {
      header: "LangChain",
      description:
        "A framework for building applications with large language models, offering tools for chaining together language model queries and operations.",
      link: "https://python.langchain.com/docs/introduction/",
      img: "https://media.licdn.com/dms/image/v2/D4D12AQF8MwWNbgUZ_g/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1697534805076?e=2147483647&v=beta&t=oidQ7KQtMb1CVUj-mRzfSaKSFlAHdvzu4z0FZ1VsU10",
    },
    {
      header: "Flask",
      description:
        "A lightweight WSGI web application framework in Python designed to make getting started quick and easy, with the ability to scale up to complex applications.",
      link: "https://python-adv-web-apps.readthedocs.io/en/latest/index.html",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWjnhJd3QLmFGb_jbOEnKahMeUSuNzpnBZYg&s",
    },
    {
      header: "Django",
      description:
        "A high-level Python web framework that encourages rapid development and clean, pragmatic design, focusing on automation and adhering to the DRY principle.",
      link: "https://docs.djangoproject.com/en/5.1/",
      img: "https://static.djangoproject.com/img/logos/django-logo-positive.svg",
    },
    {
      header: "JavaScript",
      description:
        "A dynamic, high-level programming language that's essential for creating interactive web applications and known for its versatility across front-end and back-end development.",
      link: "https://developer.mozilla.org/en-US/docs/Learn/JavaScript",
      img: "https://cdn.worldvectorlogo.com/logos/logo-javascript.svg",
    },
    {
      header: "Node.js",
      description:
        "A JavaScript runtime built on Chrome's V8 JavaScript engine, enabling server-side scripting to produce dynamic web page content before the page is sent to the user's web browser.",
      link: "https://nodejs.org/en/learn/getting-started/introduction-to-nodejs",
      img: "https://nodejs.org/static/logos/nodejsLight.svg",
    },
    {
      header: "React",
      description:
        "A JavaScript library for building user interfaces, developed by Facebook, making it effortless to create interactive UIs with efficient updates and rendering.",
      link: "https://react.dev/learn",
      img: "https://cdn.worldvectorlogo.com/logos/react-2.svg",
    },
    {
      header: "Docker",
      description:
        "A platform designed to create, deploy, and run applications using containers, providing an easy way to deploy and manage applications consistently across various environments.",
      link: "https://docs.docker.com/",
      img: "https://cdn.worldvectorlogo.com/logos/docker-4.svg",
    },
  ];

  return (
    <div className="text-white w-screen h-screen p-6 font-roboto overflow-auto bg-black">
      <nav className="px-4 py-2 flex items-center justify-start mb-8 shadow-sm shadow-darkGray">
        <div className="text-purple-500 p-3 flex flex-col items-center mr-2">
          <a href="/">
            <HomeIcon />
          </a>
        </div>
        <div className="text-white text-2xl p-3 text-center flex items-center justify-center mt-1">
          Profile Insights
        </div>
      </nav>

      <div className="grid grid-col-1 gap-4">
        <section className="p-4">
          <h1 className="text-3xl text-purple-500 mb-8 text-center">
            Academics
          </h1>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {profileDetails.map((item, index) => (
              <Card
                key={index}
                header={item.header}
                description={item.description}
              />
            ))}
          </div>
        </section>
        <section className="p-4">
          <h1 className="text-3xl text-purple-500 mb-8 text-center">
            My Tech Toolkit
          </h1>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {techDetails.map((item, index) => (
              <Card2
                key={index}
                header={item.header}
                description={item.description}
                link={item.link}
                img={item.img}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

function Card(props) {
  return (
    <>
      <div className="mb-8 p-4 rounded-lg w-full h-auto flex flex-col align-center justify-center cursor-pointer lg:transition-all  lg:hover:bg-gray-800">
        <h1 className="text-2xl text-white mb-4 text-center">{props.header}</h1>
        <p className="mb-2 text-center text-gray-400">{props.description}</p>
      </div>
    </>
  );
}

function Card2(props) {
  return (
    <>
      <div className="mb-8 p-4 border border-gray-500/50 rounded-lg w-full h-auto grid grid-col-1 gap-2 items-center justify-center cursor-pointer">
        <h1 className="text-2xl text-white mb-4 text-center">{props.header}</h1>
        <div className="flex flex-row justify-center items-center">
          <img
            src={props.img}
            alt="tech-image"
            className="w-[200px] h-[200px]"
          />
        </div>
        <p className="mb-2 text-center text-gray-400">{props.description}</p>
        <div className="flex flex-row items-center justify-center">
          <a href={props.link}>
            <button className="flex items-center justify-center mx-auto md:mx-0 border border-purple-500 rounded-lg px-4 py-2 text-white transition-all duration-300 ease-in-out hover:text-opacity-50 hover:shadow-lg mt-4">
              <span>See More</span>
              <svg
                className="ml-2 w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
            </button>
          </a>
        </div>
      </div>
    </>
  );
}
