import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const { t } = useTranslation();

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-[#111518] text-white' : 'bg-white text-[#111518]'}`}>
      <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <LandingPage isDarkMode={isDarkMode} />
    </div>
  );
}

export default App;