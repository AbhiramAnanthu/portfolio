import NavBar from "./navbar";
import Hero from "./hero";
import CodeIcon from "../../assets/code";
import MailIcon from "../../assets/mail";

function Home() {
  return (
    <>
      <div className="w-full overflow-x-hidden bg-black h-screen">
        <NavBar icon1={<CodeIcon />} icon2={<MailIcon />} />
        <Hero />
      </div>
    </>
  );
}

export default Home;
