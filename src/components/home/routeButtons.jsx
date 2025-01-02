import React from 'react';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { useState } from 'react';

export default function RouteButtons(props) {
  const Button = () => {
    if (props.onClickRequired) {
      return (
        <button
          className="rounded-md px-3 py-2 flex flex-row justify-center align-center"
          onClick={() => props.setIsOpen(!props.isOpen)}
        >
          <span className="text-sm md:text-lg text-white text-center px-2">
            {props.title}
          </span>
          <span className="text-gray-400 flex justify-center align-center">
            <OpenInNewIcon />
          </span>
        </button>
      );
    } else {
      if (props.disabled) {
        return (
          <button
            className="relative rounded-md px-3 py-2 flex flex-row justify-center align-center cursor-not-allowed"
            disabled={true}
            onMouseEnter={() => setVisible(true)}
            onMouseLeave={() => setVisible(false)}
          >
            <span className="text-sm md:text-lg lg:text-lg text-gray-500/50 text-center px-2">
              {props.title}
            </span>
            <span className="text-gray-500/50 flex justify-center align-center">
              <OpenInNewIcon />
            </span>
          </button>
        );
      } else {
        return (
          <button className="rounded-md px-3 py-2 flex flex-row justify-center align-center">
            <span className="text-sm md:text-lg lg:text-lg text-white text-center px-2">
              {props.title}
            </span>
            <span className="text-gray-400 flex justify-center align-center">
              <OpenInNewIcon />
            </span>
          </button>
        );
      }
    }
  };

  return (
    <div className="flex flex-row justify-center align-center">
      <a href={props.url}>{Button()}</a>
    </div>
  );
}
