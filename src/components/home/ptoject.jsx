const ProjectsSection = () => {
  return (
    <div className="py-10 bg-gray-100">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">
          My Favourite Projects
        </h2>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {/* Card 1 */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Project Title 1
            </h3>
            <p className="text-gray-600 mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
              fugiat consequuntur animi veritatis.
            </p>
            <a
              href="#"
              className="text-blue-500 hover:text-blue-700 font-medium"
            >
              GitHub Repo
            </a>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Project Title 2
            </h3>
            <p className="text-gray-600 mb-4">
              Sapiente veniam dignissimos illum numquam quibusdam praesentium
              vel expedita voluptatem.
            </p>
            <a
              href="#"
              className="text-blue-500 hover:text-blue-700 font-medium"
            >
              GitHub Repo
            </a>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Project Title 3
            </h3>
            <p className="text-gray-600 mb-4">
              Omnis porro sapiente, veniam dignissimos illum numquam quibusdam
              praesentium vel expedita.
            </p>
            <a
              href="#"
              className="text-blue-500 hover:text-blue-700 font-medium"
            >
              GitHub Repo
            </a>
          </div>
        </div>

        {/* Add more cards similarly */}
      </div>
    </div>
  );
};

export default ProjectsSection;
