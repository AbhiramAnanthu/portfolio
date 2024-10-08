import React from 'react';

const HeroSection = () => {
    return (
        <header className="flex flex-col items-center justify-center h-screen bg-black text-white text-center">
            {/* Profile Picture */}
            <img
                src="https://via.placeholder.com/150" // Replace with your image URL
                alt="Profile"
                className="w-40 h-40 rounded-full mb-4 border-4 border-purple-500 object-cover"
            />
            
            {/* Welcome Header */}
            <h1 className="text-5xl font-bold mb-2 text-purple-500">
                Welcome to My Portfolio
            </h1>
            
            <p className="text-lg mb-8">Showcasing my skills and projects</p>
            
            <button className="bg-purple-500 text-white py-2 px-4 rounded hover:bg-purple-600 transition duration-300">
                View My Work
            </button>
            
            {/* Animation */}
            <div className="mt-12 flex justify-center">
                <iframe
                    src="https://lottie.host/embed/673d3e6a-42af-4c99-84cb-98c6e3cb78c1/qpaITJ6QfE.json"
                    width="400"
                    height="400"
                    frameBorder="0"
                    allowFullScreen
                    className="rounded-lg"
                ></iframe>
            </div>
        </header>
    );
};

export default HeroSection;
