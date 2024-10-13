import React, { useState } from 'react';
import Navbar from './components/Navbar';
import LandingPage from './components/LanfingPage';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-[#111518] text-white' : 'bg-white text-[#111518]'}`}>
      <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <main className="container mx-auto mt-8 p-4">
        <LandingPage isDarkMode={isDarkMode} />
      </main>
    </div>
  );
}

export default App;