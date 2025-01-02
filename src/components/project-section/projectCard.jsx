import { React, useState } from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function ProjectCard(props) {
  const [visible, setVisible] = useState(false);

  return (
    <div className="flex flex-col justify-center align-center w-full md:w-3/4 lg:w-3/4 mx-auto border border-gray-800/40 rounded-lg px-2 py-3 mt-2 mb-4 font-roboto">
      <div className="flex flex-row justify-between align-center items-center w-full py-2">
        <div>
          <h1 className="text-gray-400 px-2 py-2 text-lg md:text-2xl lg:text-4xl">
            {props.title}
          </h1>
        </div>
        <div className="text-center w-24 h-10 py-2 px-2 rounded-3xl bg-slate-900/50 text-green-500 flex items-center justify-center">
          <span className="text-sm text-center">{props.state}</span>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-start md:justify-between align-start md:align-center w-full md:w-3/4 md:mr-auto px-2 py-2">
        <div className="flex justify-start align-center">
          <span className="text-sm  text-gray-500">
            Created at: {props.createdAt}
          </span>
        </div>
        <div className="text-gray-500 text-sm">
          Updated at: {props.updatedAt}
        </div>
      </div>
      <div className="w-10 flex justify-start align-center mr-auto px-2 py-2">
        <a href={props.gitHubLink} target="_blank">
          <button
            onMouseEnter={() => setVisible(true)}
            onMouseLeave={() => setVisible(false)}
            className="flex justify-center align-center"
          >
            <GitHubIcon className="text-white" />
          </button>
          {visible && (
            <div className="absolute text-white bg-black rounded-lg -translate-y-7 translate-x-9 px-2 py-1">
              <span className="text-sm text-white">View Project</span>
            </div>
          )}
        </a>
      </div>
      <div className="flex flex-col justify-start align-center w-full px-2 py-2">
        {props.description.map((item, index) => (
          <div key={index}>
            {Object.keys(item).map((key) => (
              <div key={key}>
                <p
                  className="text-sm text-gray-500"
                  dangerouslySetInnerHTML={{ __html: item[key].description }}
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
