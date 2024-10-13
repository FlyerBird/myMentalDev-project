import React from 'react';
import { Brain, Users, Rocket, ArrowRight } from 'lucide-react';

const LandingPage = ({ isDarkMode }) => {
  return (
    <div className={`container mx-auto mt-8 p-4 ${isDarkMode ? 'text-white' : 'text-[#111518]'}`}>
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Welcome to myMentalDev</h1>
        <p className="text-xl mb-8">Empowering everyone to develop a better life through accessible coaching tools</p>
        <button className={`px-6 py-3 ${isDarkMode ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-500 hover:bg-blue-600'} text-white rounded-full font-bold flex items-center justify-center mx-auto`}>
          Start Your Journey
          <ArrowRight className="ml-2" size={20} />
        </button>
      </section>

      <section className="grid md:grid-cols-3 gap-8 mb-16">
        <div className={`p-6 rounded-lg ${isDarkMode ? 'bg-[#1a1f24]' : 'bg-gray-100'}`}>
          <Brain size={48} className={`mb-4 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />
          <h2 className="text-2xl font-bold mb-2">Personal Growth</h2>
          <p>Access easy-to-use coaching tools to enhance your mental well-being and personal development.</p>
        </div>
        <div className={`p-6 rounded-lg ${isDarkMode ? 'bg-[#1a1f24]' : 'bg-gray-100'}`}>
          <Users size={48} className={`mb-4 ${isDarkMode ? 'text-green-400' : 'text-green-600'}`} />
          <h2 className="text-2xl font-bold mb-2">Inclusive Approach</h2>
          <p>Access coaching techniques designed to empower individuals from all walks of life, regardless of profession or background.</p>
        </div>
        <div className={`p-6 rounded-lg ${isDarkMode ? 'bg-[#1a1f24]' : 'bg-gray-100'}`}>
          <Rocket size={48} className={`mb-4 ${isDarkMode ? 'text-yellow-400' : 'text-yellow-600'}`} />
          <h2 className="text-2xl font-bold mb-2">Life Optimization</h2>
          <p>Discover strategies to improve your life balance, boost productivity, and achieve your goals.</p>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-4">Why myMentalDev?</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Combines professional coaching expertise with a tech-savvy approach</li>
          <li>Offers practical tools adaptable to various life and career situations</li>
          <li>Provides a supportive community for shared growth and learning</li>
          <li>Empowers you to take control of your personal and professional development</li>
        </ul>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-4">Our Story</h2>
        <p className="mb-4">
          myMentalDev was born from the founder's unique journey as both a personal coach and a QA Engineer in the tech industry. 
          This blend of experiences inspired the creation of a platform where coaching techniques meet technological innovation, 
          making personal development accessible to everyone, regardless of their background.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-4">Start Your Development Journey</h2>
        <p className="mb-4">Join our community and access powerful tools to enhance your life, both personally and professionally.</p>
        <button className={`px-6 py-3 ${isDarkMode ? 'bg-green-600 hover:bg-green-700' : 'bg-green-500 hover:bg-green-600'} text-white rounded-full font-bold`}>
          Get Started Now
        </button>
      </section>
    </div>
  );
};

export default LandingPage;