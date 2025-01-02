import ProjectCard from './projectCard';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import jsonData from './projects.json';

export default function ProjectsArray() {
  return (
    <div className="bg-black h-screen w-full">
      <header className="w-full mt-3 md:mt-4 lg:mt-3">
        <nav className="w-full h-16 flex items-center px-4">
          <div className="flex items-center space-x-4">
            <a href="/" className="flex items-center text-white">
              <ArrowBackIcon className="text-white !w-6 !h-6 md:!w-8 md:!h-8" />
            </a>
          </div>
          <div className="flex-grow text-white text-center text-2xl md:text-3xl lg:text-4xl font-semibold">
            Projects
          </div>
        </nav>
      </header>

      <div className="w-full mx-auto flex flex-col h-full justify-start align-center px-2 py-2">
        <div className="mt-4 rounded-lg w-3/4 mx-auto py-5">
          {jsonData.map((project, index) => {
            return (
              <ProjectCard
                key={index}
                title={project.title}
                state={project.projectState}
                createdAt={project.createdAt}
                updatedAt={project.updatedAt}
                description={project.description}
                gitHubLink={project.gitHubLink}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
