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
          <div className="space-y-6">
            {t('about.sections', { returnObjects: true }).map((section, index) => (
              <div 
                key={index} 
                className={`${index > 0 ? 'pt-6 border-t border-gray-200 dark:border-gray-700' : ''}`}
              >
                <h3 className="text-xl font-semibold mb-3">{section.subtitle}</h3>
                <p className="text-base leading-relaxed text-gray-600 dark:text-gray-300">
                  {section.description}
                </p>
              </div>
            ))}
          </div>
        ) : modalContent === 'mentalTools' ? (
          <div>
            <p className="text-base leading-relaxed text-gray-600 dark:text-gray-300">
              {t('mentalTools.description')}
            </p>
          </div>
        ) : null}
      </Modal>
    </div>
  );
}

export default App;