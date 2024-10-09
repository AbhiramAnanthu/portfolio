import React from 'react';

const HeroCard = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-black mt-12"> {/* Reduced space to bring card closer to navbar */}
            <div className="flex bg-gray-900 text-white rounded-lg p-16 shadow-lg transform hover:scale-105 transition-transform duration-300"
                 style={{ boxShadow: '0 0 40px 10px rgba(128, 0, 255, 0.7)', width: '90%', maxWidth: '1400px' }}> {/* Increased size */}
                
                {/* Profile Picture */}
                <img
                    src="https://via.placeholder.com/200" // Replace with your image URL
                    alt="Profile"
                    className="w-56 h-56 rounded-full border-4 border-blue-500 object-cover"
                />

                {/* Card Content */}
                <div className="ml-16 flex flex-col justify-center space-y-8 flex-grow">
                    <h1 className="text-6xl font-bold text-blue-400"> {/* Made text larger */}
                        Hi, I am Abhiram A R {/* Fixed welcome text */}
                    </h1>

                    <p className="text-xl text-purple-300">
                        Showcasing my skills and projects
                    </p>

                    <button className="bg-blue-500 text-white py-3 px-8 rounded hover:bg-blue-600 transition duration-300">
                        View My Work
                    </button>
                </div>

                {/* Animation */}
                <div className="ml-16 flex-shrink-0">
                    <iframe
                        src="https://lottie.host/embed/673d3e6a-42af-4c99-84cb-98c6e3cb78c1/qpaITJ6QfE.json"
                        width="400"
                        height="400"
                        frameBorder="0"
                        allowFullScreen
                        className="rounded-lg"
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default HeroCard;
