import AcademicCards from "./cards";
function About() {
  return (
    <>
      <section className="flex flex-col h-screen justify-center items-center py-10">
        <div className="text-white text-4xl font-bold mb-8">About Me</div>
        <AcademicCards />
      </section>
    </>
  );
}

export default About;
