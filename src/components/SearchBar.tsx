import React from 'react';
import { Search } from 'lucide-react';

export function SearchBar() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex items-center justify-center space-x-4">
        <div className="relative flex-1 max-w-lg">
          <input
            type="text"
            placeholder="Search for tiffin services..."
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <Search className="absolute right-3 top-2.5 text-gray-400" />
        </div>
        <button className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600">
          Search
        </button>
      </div>
    </div>
  );
}