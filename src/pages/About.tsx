import React from 'react';

export function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">About Dabbewala</h1>
      <div className="bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
        <p className="text-gray-600 mb-6">
          Dabbewala aims to connect hostel students with local tiffin services, making healthy and homemade meals accessible to everyone.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
        <p className="text-gray-600 mb-6">
          Founded in 2024, Dabbewala started with a simple idea: helping students find quality, home-cooked meals while supporting local home chefs.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Why Choose Us?</h2>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>Verified home chefs and quality assurance</li>
          <li>Flexible meal plans and subscriptions</li>
          <li>Support for local entrepreneurs</li>
          <li>Convenient delivery options</li>
        </ul>
      </div>
    </div>
  );
}