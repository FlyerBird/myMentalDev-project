import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronDown, Sun, Moon, Menu, X } from 'lucide-react';

const Navbar = ({ isDarkMode, toggleTheme, openModal }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'es' : 'en';
    i18n.changeLanguage(newLang);
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
              <span>{i18n.language.toUpperCase()}</span>
              <ChevronDown size={16} />
            </button>
            {isLangDropdownOpen && (
              <div className={`absolute top-full left-0 mt-1 ${isDarkMode ? 'bg-[#1a1f24]' : 'bg-gray-100'} rounded-md shadow-lg`}>
                <button
                  onClick={toggleLanguage}
                  className={`block w-full text-left px-4 py-2 ${isDarkMode ? 'hover:bg-[#2a2f34]' : 'hover:bg-gray-200'}`}
                >
                  {i18n.language === 'en' ? 'ES' : 'EN'}
                </button>
              </div>
            )}
          </div>
        </div>
        
        <div className="hidden md:flex items-center space-x-8 lg:space-x-16 flex-grow justify-center">
          <button className="font-bold" onClick={() => openModal('about')}>{t('navbar.about')}</button>
          <button className="font-bold" onClick={() => openModal('mentalTools')}>{t('navbar.mentalTools')}</button>
        </div>
        
        <div className="flex items-center space-x-4">
          <button onClick={toggleTheme} className="focus:outline-none">
            {isDarkMode ? (
              <Sun size={24} className="text-white" />
            ) : (
              <Moon size={24} className="text-[#111518]" />
            )}
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none md:hidden"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      <div className={`container mx-auto mt-2 ${isDarkMode ? 'bg-[#1a1f24]' : 'bg-gray-100'} rounded-md p-4 ${isOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="flex flex-col space-y-2 items-end pr-4">
          <button className="font-bold" onClick={() => openModal('about')}>{t('navbar.about')}</button>
          <button className="font-bold" onClick={() => openModal('mentalTools')}>{t('navbar.mentalTools')}</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;