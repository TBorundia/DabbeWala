import React, { useState } from 'react';
import { Star, MapPin } from 'lucide-react';
import { tiffinServicesData } from '../data/tiffinServices';

export function TiffinServices() {
  const [activeTab, setActiveTab] = useState('all');

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Featured Tiffin Services</h2>
      
      <div className="flex justify-center space-x-4 mb-8">
        <button 
          className={`px-4 py-2 rounded-full ${activeTab === 'all' ? 'bg-orange-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setActiveTab('all')}
        >
          All
        </button>
        <button 
          className={`px-4 py-2 rounded-full ${activeTab === 'veg' ? 'bg-orange-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setActiveTab('veg')}
        >
          Veg
        </button>
        <button 
          className={`px-4 py-2 rounded-full ${activeTab === 'nonveg' ? 'bg-orange-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setActiveTab('nonveg')}
        >
          Non-Veg
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {tiffinServicesData
          .filter(service => activeTab === 'all' || service.category === activeTab)
          .map(service => (
            <div key={service.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={service.image} alt={service.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold">{service.name}</h3>
                  <div className="flex items-center">
                    <Star className="h-5 w-5 text-yellow-400 fill-current" />
                    <span className="ml-1 text-gray-600">{service.rating}</span>
                  </div>
                </div>
                <div className="flex items-center text-gray-500 mb-2">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span>{service.location}</span>
                </div>
                <div className="flex justify-between items-center mt-4">
                  <span className="font-bold text-orange-500">{service.price}</span>
                  <button className="px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}