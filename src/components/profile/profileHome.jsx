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
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/172px-Python-logo-notext.svg.png",
    },
    {
      header: "LangChain",
      img: "https://media.licdn.com/dms/image/v2/D4D12AQF8MwWNbgUZ_g/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1697534805076?e=2147483647&v=beta&t=oidQ7KQtMb1CVUj-mRzfSaKSFlAHdvzu4z0FZ1VsU10",
    },
    {
      header: "Flask",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWjnhJd3QLmFGb_jbOEnKahMeUSuNzpnBZYg&s",
    },
    {
      header: "Django",
      img: "https://static.djangoproject.com/img/logos/django-logo-positive.svg",
    },
    {
      header: "JavaScript",
      img: "https://cdn.worldvectorlogo.com/logos/logo-javascript.svg",
    },
    {
      header: "Node.js",
      img: "https://nodejs.org/static/logos/nodejsLight.svg",
    },
    {
      header: "React",
      img: "https://cdn.worldvectorlogo.com/logos/react-2.svg",
    },
    {
      header: "Docker",
      img: "https://cdn.worldvectorlogo.com/logos/docker-4.svg",
    },
  ];

  return (
    <div className="text-white w-screen  h-screen p-6 font-roboto overflow-auto bg-black">
      <nav className="px-4 py-2 flex items-center justify-start mb-8">
        <div className="text-purple-500 p-3 flex flex-col items-center mr-2">
          <a href="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-gray-500"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {" "}
              <path d="M19 12H5" /> <path d="M12 19L5 12L12 5" />{" "}
            </svg>
          </a>
        </div>
        <div className="text-white text-2xl p-3 text-center flex items-center justify-center mt-1">
          Profile
        </div>
      </nav>

      <div className="grid grid-col-1 gap-4">
        <section className="p-4">
          <h1 className="text-3xl text-purple-500 mb-8 text-center">
            Academics
          </h1>
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
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
          <div className="grid justify-items-center pt-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {techDetails.map((item, index) => (
              <Card2 key={index} header={item.header} img={item.img} />
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
      <div className="mb-8 p-4 border border-gray-500/50 rounded-lg w-[250px] h-auto grid grid-col-1 items-center justify-items-center my-auto cursor-pointer transition-all ease-in-out lg:hover:scale-110">
        <div className="grid grid-cols-1 gap-3 justify-items-center">
          <div>
            <img
              src={props.img}
              alt="tech-image"
              className="w-[80px] h-[80px]"
            />
          </div>
          <div>
            <h1 className="text-xl text-white text-center">{props.header}</h1>{" "}
          </div>
        </div>
      </div>
    </>
  );
}
