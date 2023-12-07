import React from "react";

const CompanyProfile = () => {
  return (
    <div className="bg-gray-100">
      <section
        className="w-full bg-cover bg-center py-24"
        style={{ backgroundImage: 'url("https://source.unsplash.com/random")' }}
      >
        <div className="container mx-auto text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-4 leading-tight">
            Welcome to My Agency
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-8 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra
            euismod odio, gravida pellentesque urna varius vitae.
          </p>
          <div className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
            <span className="block mb-2">+977 8525 67893</span>
            <span className="block mb-2">company@123gmail.com</span>
          </div>
          <a
            href="demo"
            className="bg-indigo-500 text-white py-3 px-8 rounded-full inline-block hover:bg-indigo-600 transition duration-300"
          >
            Demo
          </a>
        </div>
      </section>
    </div>
  );
};

export default CompanyProfile;
