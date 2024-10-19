import React from 'react';
import { useTranslation } from 'react-i18next';
import { Brain, Users, Rocket, ArrowRight } from 'lucide-react';

const LandingPage = ({ isDarkMode }) => {
  const { t } = useTranslation();

  return (
    <div className={`container mx-auto mt-8 p-4 ${isDarkMode ? 'text-white' : 'text-[#111518]'}`}>
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">{t('home.welcome')}</h1>
        <p className="text-xl mb-8">{t('home.description')}</p>
        <button className={`px-6 py-3 ${isDarkMode ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-500 hover:bg-blue-600'} text-white rounded-full font-bold flex items-center justify-center mx-auto`}>
          {t('common.startJourney')}
          <ArrowRight className="ml-2" size={20} />
        </button>
      </section>

      <section className="grid md:grid-cols-3 gap-8 mb-16">
        <div className={`p-6 rounded-lg ${isDarkMode ? 'bg-[#1a1f24]' : 'bg-gray-100'}`}>
          <Brain size={48} className={`mb-4 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />
          <h2 className="text-2xl font-bold mb-2">{t('home.personalGrowth.title')}</h2>
          <p>{t('home.personalGrowth.description')}</p>
        </div>
        <div className={`p-6 rounded-lg ${isDarkMode ? 'bg-[#1a1f24]' : 'bg-gray-100'}`}>
          <Users size={48} className={`mb-4 ${isDarkMode ? 'text-green-400' : 'text-green-600'}`} />
          <h2 className="text-2xl font-bold mb-2">{t('home.inclusiveApproach.title')}</h2>
          <p>{t('home.inclusiveApproach.description')}</p>
        </div>
        <div className={`p-6 rounded-lg ${isDarkMode ? 'bg-[#1a1f24]' : 'bg-gray-100'}`}>
          <Rocket size={48} className={`mb-4 ${isDarkMode ? 'text-yellow-400' : 'text-yellow-600'}`} />
          <h2 className="text-2xl font-bold mb-2">{t('home.lifeOptimization.title')}</h2>
          <p>{t('home.lifeOptimization.description')}</p>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-4">{t('home.whyUs.title')}</h2>
        <ul className="list-disc list-inside space-y-2">
          {t('home.whyUs.reasons', { returnObjects: true }).map((reason, index) => (
            <li key={index}>{reason}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-4">{t('home.startJourney.title')}</h2>
        <p className="mb-4">{t('home.startJourney.description')}</p>
        <button className={`px-6 py-3 ${isDarkMode ? 'bg-green-600 hover:bg-green-700' : 'bg-green-500 hover:bg-green-600'} text-white rounded-full font-bold`}>
          {t('common.getStarted')}
        </button>
      </section>
    </div>
  );
};

export default LandingPage;