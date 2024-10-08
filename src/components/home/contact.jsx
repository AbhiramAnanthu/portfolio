const ContactSection = () => {
    return (
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          {/* Heading */}
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-gray-800">Contact Me</h2>
          </div>
  
          {/* Contact Info */}
          <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-8">
            {/* Contact Item */}
            <div className="bg-white shadow-md rounded-lg p-6 flex-1">
              <h3 className="text-lg font-semibold text-gray-800">Phone</h3>
              <p className="text-gray-600">+123 456 7890</p>
            </div>
  
            {/* Contact Item */}
            <div className="bg-white shadow-md rounded-lg p-6 flex-1">
              <h3 className="text-lg font-semibold text-gray-800">Email</h3>
              <p className="text-gray-600">email@example.com</p>
            </div>
  
            {/* Contact Item */}
            <div className="bg-white shadow-md rounded-lg p-6 flex-1">
              <h3 className="text-lg font-semibold text-gray-800">Instagram</h3>
              <p className="text-gray-600">
                <a href="https://instagram.com" className="text-blue-500 hover:underline">
                  @yourusername
                </a>
              </p>
            </div>
  
            {/* Contact Item */}
            <div className="bg-white shadow-md rounded-lg p-6 flex-1">
              <h3 className="text-lg font-semibold text-gray-800">Discord</h3>
              <p className="text-gray-600">yourusername#1234</p>
            </div>
  
            {/* Contact Item */}
            <div className="bg-white shadow-md rounded-lg p-6 flex-1">
              <h3 className="text-lg font-semibold text-gray-800">LinkedIn</h3>
              <p className="text-gray-600">
                <a href="https://linkedin.com" className="text-blue-500 hover:underline">
                  yourprofile
                </a>
              </p>
            </div>
  
            {/* Contact Item */}
            <div className="bg-white shadow-md rounded-lg p-6 flex-1">
              <h3 className="text-lg font-semibold text-gray-800">GitHub</h3>
              <p className="text-gray-600">
                <a href="https://github.com" className="text-blue-500 hover:underline">
                  yourusername
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default ContactSection;
  