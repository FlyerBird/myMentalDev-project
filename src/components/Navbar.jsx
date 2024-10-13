import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Sun, Moon } from 'lucide-react';

const Navbar = ({ isDarkMode, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState('EN');
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);

  const toggleLanguage = () => {
    setLanguage(language === 'EN' ? 'ES' : 'EN');
    setIsLangDropdownOpen(false);
  };

  return (
    <nav className={`${isDarkMode ? 'bg-[#111518] text-white' : 'bg-white text-[#111518]'} p-4`}>
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <h1 className="text-xl font-bold">myMentalDev</h1>
          <div className="relative">
            <button
              onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
              className="flex items-center space-x-1 focus:outline-none"
            >
              <span>{language}</span>
              <ChevronDown size={16} />
            </button>
            {isLangDropdownOpen && (
              <div className={`absolute top-full left-0 mt-1 ${isDarkMode ? 'bg-[#1a1f24]' : 'bg-gray-100'} rounded-md shadow-lg`}>
                <button
                  onClick={toggleLanguage}
                  className={`block w-full text-left px-4 py-2 ${isDarkMode ? 'hover:bg-[#2a2f34]' : 'hover:bg-gray-200'}`}
                >
                  {language === 'EN' ? 'ES' : 'EN'}
                </button>
              </div>
            )}
          </div>
        </div>
        
        <div className="hidden md:flex items-center space-x-8 lg:space-x-16 flex-grow justify-center">
          <h2 className="font-bold">About</h2>
          <h2 className="font-bold">Mental tools</h2>
        </div>
        
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none md:hidden"
          >
            {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </button>
          <button onClick={toggleTheme} className="focus:outline-none">
            {isDarkMode ? (
              <Sun size={24} className="text-white" />
            ) : (
              <Moon size={24} className="text-[#111518]" />
            )}
          </button>
        </div>
      </div>
      
      <div className={`container mx-auto mt-2 ${isDarkMode ? 'bg-[#1a1f24]' : 'bg-gray-100'} rounded-md p-4 ${isOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="flex flex-col space-y-2">
          <h2 className="font-bold">About</h2>
          <h2 className="font-bold">Mental tools</h2>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;