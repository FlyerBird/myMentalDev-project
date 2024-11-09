import React from 'react';
import { X } from 'lucide-react';

const Modal = ({ isOpen, onClose, title, children, isDarkMode }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-start sm:items-center p-4">
      <div 
        className={`w-full max-w-4xl h-[calc(100vh-2rem)] sm:max-h-[90vh] ${isDarkMode ? 'bg-[#1a1f24] text-white' : 'bg-white text-[#111518]'} rounded-xl shadow-xl flex flex-col`}
      >
        <div className={`flex justify-between items-center p-4 border-b ${isDarkMode ? 'border-gray-700' : 'border-gray-200'} bg-opacity-95 backdrop-blur-sm rounded-t-xl`}>
          <h2 className="text-2xl font-bold">{title}</h2>
          <button
            onClick={onClose}
            className="p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          >
            <X size={24} />
          </button>
        </div>
        <div className="p-4 overflow-y-auto">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;