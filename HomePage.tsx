import React from 'react';
import { Page } from '../../types';

interface HomePageProps {
  onNavigate: (page: Page) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <div className="relative h-[calc(100vh-68px)] min-h-[600px] text-white">
      <div className="absolute inset-0 bg-black">
        <img
          src="https://picsum.photos/seed/farm/1920/1080"
          alt="Lush green farm field"
          className="w-full h-full object-cover opacity-50"
        />
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.7)' }}>
          Varada Seeds
        </h1>
        <p className="text-lg md:text-2xl font-light mb-8" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.7)' }}>
          Sowing the Seeds of Tomorrow.
        </p>
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <button
            onClick={() => onNavigate('products')}
            className="bg-brand-light-green hover:bg-brand-green text-white font-semibold py-3 px-8 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out"
          >
            Explore Our Products
          </button>
          <button
            onClick={() => onNavigate('about')}
            className="bg-transparent border-2 border-white hover:bg-white hover:text-brand-dark-green text-white font-semibold py-3 px-8 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out"
          >
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;