function NavBar() {
  return (
    <nav className="bg-black shadow-md py-8">
      <div className="container mx-auto flex justify-around items-center">
        <div>
          <a
            href="projects"
            className="text-lg text-white hover:text-purple-300 transition duration-300 px-4 py-2"
          >
            Projects
          </a>
        </div>
        <div>
          <a
            href="achievements"
            className="text-lg text-white hover:text-purple-300 transition duration-300 px-4 py-2"
          >
            Achievements
          </a>
        </div>
        <div>
          <a
            href="certificates"
            className="text-lg text-white hover:text-purple-300 transition duration-300 px-4 py-2"
          >
            Certificates
          </a>
        </div>
      </div>
      {/* Purple Horizontal Line */}
      {/* <div className="mx-4">
        <hr className="border-t-2 border-purple-500" />
      </div> */}
    </nav>
  );
}

export default NavBar;
