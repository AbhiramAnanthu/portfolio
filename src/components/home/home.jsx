import NavBar from "./navbar";
import Hero from "./hero";
import About from "./aboutme";
import ProjectsSection from "./ptoject";
import ContactSection from "./contact";
import "../home/home.css";

function Home() {
  return (
    <>
      <div className="home_wrap">
        <NavBar />
        <Hero />
        <About />
        <ProjectsSection />
        <ContactSection />
      </div>
    </>
  );
}

export default Home;
