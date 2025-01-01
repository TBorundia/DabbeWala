import React, { useState } from 'react';
import { Menu, X, UtensilsCrossed } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path ? 'text-orange-500' : 'text-gray-600';
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center">
            <UtensilsCrossed className="h-8 w-8 text-orange-500" />
            <span className="ml-2 text-xl font-bold text-gray-800">Dabbewala</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className={`hover:text-orange-500 ${isActive('/')}`}>Home</Link>
            <Link to="/services" className={`hover:text-orange-500 ${isActive('/services')}`}>Services</Link>
            <Link to="/about" className={`hover:text-orange-500 ${isActive('/about')}`}>About</Link>
            <Link to="/contact" className={`hover:text-orange-500 ${isActive('/contact')}`}>Contact</Link>
            <button className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600">
              Sign Up
            </button>
          </div>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link to="/" className="block px-3 py-2 text-gray-600">Home</Link>
            <Link to="/services" className="block px-3 py-2 text-gray-600">Services</Link>
            <Link to="/about" className="block px-3 py-2 text-gray-600">About</Link>
            <Link to="/contact" className="block px-3 py-2 text-gray-600">Contact</Link>
            <button className="w-full text-left px-3 py-2 bg-orange-500 text-white rounded-md">
              Sign Up
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}