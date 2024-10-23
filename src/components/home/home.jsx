import NavBar from "./navbar";
import Hero from "./hero";
import ContactSection from "./contact";
import AboutMe from "./aboutme";
import ProjectSectionConsult from "./project";
import CodeIcon from "../../assets/code";
import MailIcon from "../../assets/mail";
import "../home/home.css";

function Home() {
  return (
    <>
      <div className="w-full overflow-x-hidden">
        <NavBar icon1={<CodeIcon />} icon2={<MailIcon />} />
        <Hero />
        <AboutMe />
        <ProjectSectionConsult />
        <ContactSection />
      </div>
    </>
  );
}

export default Home;
