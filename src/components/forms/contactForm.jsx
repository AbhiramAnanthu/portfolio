import React from "react";

function ContactForm() {
  return (
    <div className="text-white w-full bg-black p-6 font-roboto flex flex-col items-center justify-center overflow-x-hidden">
      <form
        action="/"
        className="bg-slate-950 p-8 rounded-lg shadow-lg w-full md:w-5/6 lg:w-5/6 border border-gray-300/40"
      >
        <h2 className="text-3xl text-purple-500 mb-6 text-center">
          Contact Me
        </h2>
        <div className="mb-4">
          <label htmlFor="first-name" className="block text-gray-300 mb-2">
            First Name
          </label>
          <input
            type="text"
            id="first-name"
            placeholder="First Name"
            className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700 placeholder-gray-500 text-white"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="last-name" className="block text-gray-300 mb-2">
            Last Name
          </label>
          <input
            type="text"
            id="last-name"
            placeholder="Last Name"
            className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700 placeholder-gray-500 text-white"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-300 mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Email"
            className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700 placeholder-gray-500 text-white"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="github" className="block text-gray-300 mb-2">
            GitHub
          </label>
          <input
            type="url"
            id="github"
            placeholder="GitHub Profile Link"
            className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700 placeholder-gray-500 text-white"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-300 mb-2">
            Enter your message
          </label>
          <textarea
            type="text"
            placeholder="hello Abhiram!"
            className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700 placeholder-gray-500 text-white"
          />
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="border border-gray-500/50 text-white py-2 px-4 rounded-lg"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
