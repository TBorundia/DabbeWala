import React from 'react';

interface ServiceFeature {
  text: string;
}

interface ServiceCardProps {
  title: string;
  description: string;
  price: string;
  features: string[];
}

export function ServiceCard({ title, description, price, features }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      <p className="text-gray-600 mb-4">{description}</p>
      <p className="text-orange-500 font-bold mb-4">{price}</p>
      <ul className="space-y-2">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-center text-gray-600">
            <span className="mr-2">•</span>
            {feature}
          </li>
        ))}
      </ul>
      <button className="w-full mt-6 px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600">
        Learn More
      </button>
    </div>
  );
}