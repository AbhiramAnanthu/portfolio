import React from "react";

export default function ModalMessage({ isOpen, onClose }) {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 backdrop-blur-sm">
      <div className="bg-gray-900 rounded-lg shadow-lg p-6 w-3/4 lg:w-1/2 text-white">
        <div className="flex flex-row items-center justify-between py-8 pt-2 lg:pb-4">
          <h2 className="text-lg font-bold text-center text-purple-500">Message Me</h2>
          <button className="text-white lg:px-4 rounded" onClick={onClose}>
            &#10006;
          </button>
        </div>
        <form className="space-y-4 flex flex-col items-center">
          <input
            type="text"
            placeholder="Name"
            className="w-full py-2 px-4 bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-slate-900/50"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full py-2 px-4 bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-slate-900/50"
          />
          <textarea
            name="message"
            id="message"
            placeholder="Say something"
            className="w-full py-2 px-4 h-32 bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-slate-900/50 resize-none"
          ></textarea>
          <button
            type="submit"
            className="w-[110px] py-2 bg-gray-800 rounded-lg text-white font-bold flex flex-row items-center justify-center"
          >
            <div className="px-1 flex flex-row items-center justify-center">
              <p className="px-2">send</p>
              <svg
                fill="#9932CC"
                width="24" // Adjusted size
                height="24" // Adjusted size
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512.001 512.001"
              >
                <path
                  d="M509.532,34.999c-2.292-2.233-5.678-2.924-8.658-1.764L5.213,225.734c-2.946,1.144-4.967,3.883-5.192,7.034 c-0.225,3.151,1.386,6.149,4.138,7.7l102.719,57.875l35.651,174.259c0.222,1.232,0.723,2.379,1.442,3.364 c0.072,0.099,0.131,0.175,0.191,0.251c1.256,1.571,3.037,2.668,5.113,3c0.265,0.042,0.531,0.072,0.795,0.088 c0.171,0.011,0.341,0.016,0.511,0.016c1.559,0,3.036-0.445,4.295-1.228c0.426-0.264,0.831-0.569,1.207-0.915 c0.117-0.108,0.219-0.205,0.318-0.306l77.323-77.52c3.186-3.195,3.18-8.369-0.015-11.555c-3.198-3.188-8.368-3.18-11.555,0.015 l-60.739,60.894l13.124-112.394l185.495,101.814c1.868,1.02,3.944,1.239,5.846,0.78c0.209-0.051,0.4-0.105,0.589-0.166 c1.878-0.609,3.526-1.877,4.574-3.697c0.053-0.094,0.1-0.179,0.146-0.264c0.212-0.404,0.382-0.8,0.517-1.202L511.521,43.608 C512.6,40.596,511.824,37.23,509.532,34.999z M27.232,234.712L432.364,77.371l-318.521,206.14L27.232,234.712z M162.72,316.936 c-0.764,0.613-1.429,1.374-1.949,2.267c-0.068,0.117-0.132,0.235-0.194,0.354c-0.496,0.959-0.784,1.972-0.879,2.986L148.365,419.6 l-25.107-122.718l275.105-178.042L162.72,316.936z M359.507,419.195l-177.284-97.307L485.928,66.574L359.507,419.195z"
                  fill="white"
                ></path>
              </svg>
            </div>
          </button>
        </form>
      </div>
    </div>
  );
}