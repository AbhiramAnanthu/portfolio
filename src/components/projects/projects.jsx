import ProjectCard from "./projectCard"; // Correct the casing of ProjectCard import

function ProjectsWrap() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-6">My Projects</h2>

      {/* Top Projects Section */}
      <div className="mb-8">
        <h3 className="text-2xl font-semibold mb-4">Top Projects</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
      </div>

      {/* Favourite Projects Section */}
      <div className="mb-8">
        <h3 className="text-2xl font-semibold mb-4">Favourite Projects</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
      </div>

      {/* Recent Projects Section */}
      <div className="mb-8">
        <h3 className="text-2xl font-semibold mb-4">Recent Projects</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
      </div>

      {/* Ongoing Projects Section */}
      <div className="mb-8">
        <h3 className="text-2xl font-semibold mb-4">Ongoing Projects</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
      </div>

      <div className="text-center mt-6">
        <a href="#" className="text-blue-500 hover:text-blue-700 font-semibold">
          View all
        </a>
      </div>
    </div>
  );
}

export default ProjectsWrap;
