import React from 'react';
import { ChefHat, Clock, Heart } from 'lucide-react';

export function Features() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md">
          <ChefHat className="h-12 w-12 text-orange-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Home Cooked Meals</h3>
          <p className="text-gray-600">Authentic homemade food prepared with love and care</p>
        </div>
        <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md">
          <Clock className="h-12 w-12 text-orange-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Timely Delivery</h3>
          <p className="text-gray-600">Punctual delivery to ensure you never miss a meal</p>
        </div>
        <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md">
          <Heart className="h-12 w-12 text-orange-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Quality Assured</h3>
          <p className="text-gray-600">Verified tiffin services with high quality standards</p>
        </div>
      </div>
    </div>
  );
}