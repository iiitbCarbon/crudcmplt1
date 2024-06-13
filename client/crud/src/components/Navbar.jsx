import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-transparent p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <img src="data:image/png;base64,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" alt="Logo" className="h-8 w-8" />
          <span className="ml-2 text-xl font-bold text-white font-title">CRUD</span>
        </div>
        <div className="relative" ref={dropdownRef}>
          <button onClick={toggleDropdown} className="text-white font-title text-xl">
            Menu
          </button>
          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-20">
              <Link to="/" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                Home
              </Link>
              <Link to="/add" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                Add
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
