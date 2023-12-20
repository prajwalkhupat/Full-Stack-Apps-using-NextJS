// pages/about.js
import React from 'react';

const About = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md max-w-md">
        <h1 className="text-2xl font-bold mb-4">About Us</h1>
        <p className="text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac quam id ligula
          volutpat efficitur. Proin ac quam nec justo fermentum bibendum. Suspendisse
          potenti. Vestibulum euismod, orci vitae accumsan aliquam, odio libero feugiat
          nunc, nec suscipit augue turpis ac justo.
        </p>
        <p className="text-gray-700 mt-4">
          Nulla facilisi. Sed vel scelerisque justo. Vivamus eu elit eget augue
          interdum fermentum. Fusce bibendum, risus non aliquam malesuada, nisi sem
          tincidunt est, eu fringilla elit velit ac felis.
        </p>
      </div>
    </div>
  );
};

export default About;
