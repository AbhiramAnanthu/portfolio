function ProjectCard() {
  return (
    <>
      <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-md mx-auto">
        <div className="p-5">
          {/* Project Title */}
          <div className="text-xl font-bold text-gray-800 mb-3">
            Project Title
          </div>

          {/* Description */}
          <div className="mb-5">
            <div className="font-semibold text-gray-600 mb-2">Description</div>
            <p className="text-gray-700 leading-relaxed">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur laudantium dignissimos rem ex quam deleniti temporibus,
              labore voluptatum porro provident animi enim laborum voluptates,
              recusandae fugiat culpa, autem officiis soluta.
            </p>
          </div>

          {/* Tech Stacks used */}
          <div className="mb-5">
            <div className="font-semibold text-gray-600 mb-2">
              Tech Stacks Used
            </div>
            <p className="text-gray-700 leading-relaxed">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed,
              ratione quaerat quia corporis similique placeat ipsam eos
              repudiandae dicta adipisci quae natus repellat alias laudantium
              cum unde nisi at? Iusto!
            </p>
          </div>

          {/* Links */}
          <div className="flex justify-between items-center mt-4">
            <a
              href="#"
              className="text-blue-500 hover:text-blue-700 font-semibold"
            >
              GitHub repo here
            </a>
            <a
              href="#"
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
            >
              Access here
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectCard;
