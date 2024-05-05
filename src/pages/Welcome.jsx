import React, { useState } from "react";
import "./motion.css";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div className="flex flex-col sm:flex-row mt-12 mx-5">
      <div className="flex justify-center items-center sm:w-1/2">
        <div class="bg-primary-dark bg-opacity-50 rounded-lg p-8  text-white px-8 text-left">
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-5">
            <span class="bg-gradient-to-r from-yellow-400 to-purple-600 text-transparent bg-clip-text">
              Experience Space with NASA APIs
            </span>
          </h1>
          <p class="md:text-xl lg:text-2xl mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit amet
            magna dapibus, lacinia tortor eget, eleifend enim. Morbi euismod
            nibh quis dictum blandit.
          </p>
          <Link to="/home">
            <button class="bg-primary hover:bg-primary-dark border-2 border-secondary text-white font-bold py-3 px-6 rounded-full shadow-lg transition duration-300">
              Explore the Apps
            </button>
          </Link>
        </div>
      </div>

      <div className="hidden sm:block sm:w-1/2">
        <div className="max-w-md mx-auto">
          <img
            src="c1.svg"
            alt="Login Image"
            className="object-cover w-full h-auto bounce"
            style={{ maxWidth: "380px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Welcome;
