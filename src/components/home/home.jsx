import NavBar from "./navbar";
import Hero from "./hero";
import ContactSection from "./contact";
import AboutMe from "./aboutme";
import ProjectSectionConsult from "./project";
import "../home/home.css";

function Home() {
  return (
    <>
      <div className="w-full overflow-x-hidden">
        <NavBar />
        <Hero />
        <AboutMe />
        <ProjectSectionConsult />
        <ContactSection />
      </div>
    </>
  );
}

export default Home;
