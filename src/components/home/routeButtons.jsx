import React from 'react';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

export default function RouteButtons(props) {
  return (
    <div className="flex flex-row justify-center align-center">
      <a href={props.url}>
        <button className="rounded-md px-3 py-2 flex flex-row justify-center align-center">
          <span className="text-sm md:text-lg  text-white text-center px-2">
            {props.title}
          </span>
          <span className="text-gray-400 flex justify-center align-center">
            <OpenInNewIcon />
          </span>
        </button>
      </a>
    </div>
  );
}
