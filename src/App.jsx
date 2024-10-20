import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import Modal from './components/Modal';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [modalContent, setModalContent] = useState(null);
  const { t } = useTranslation();

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const openModal = (content) => {
    setModalContent(content);
  };

  const closeModal = () => {
    setModalContent(null);
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-[#111518] text-white' : 'bg-white text-[#111518]'}`}>
      <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} openModal={openModal} />
      <LandingPage isDarkMode={isDarkMode} />
      <Modal 
        isOpen={!!modalContent} 
        onClose={closeModal} 
        title={modalContent === 'about' ? t('about.title') : t('mentalTools.title')}
        isDarkMode={isDarkMode}
      >
        {modalContent === 'about' ? (
          <div>
            <p>{t('about.description')}</p>
          </div>
        ) : modalContent === 'mentalTools' ? (
          <div>
            <p>{t('mentalTools.description')}</p>
          </div>
        ) : null}
      </Modal>
    </div>
  );
}

export default App;