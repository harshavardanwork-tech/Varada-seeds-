import React, { useState } from 'react';
import { Page } from '../types';
import Logo from './Logo';

interface HeaderProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

const NavLink: React.FC<{
  page: Page;
  currentPage: Page;
  onNavigate: (page: Page) => void;
  children: React.ReactNode;
}> = ({ page, currentPage, onNavigate, children }) => {
  const isActive = currentPage === page;
  return (
    <a
      href={`#${page}`}
      onClick={(e) => {
        e.preventDefault();
        onNavigate(page);
      }}
      className={`px-4 py-2 text-sm font-medium transition-colors duration-300 ${
        isActive
          ? 'text-brand-light-green'
          : 'text-gray-600 hover:text-brand-green'
      }`}
    >
      {children}
    </a>
  );
};

const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks: { page: Page; label: string }[] = [
    { page: 'home', label: 'Home' },
    { page: 'about', label: 'About Us' },
    { page: 'products', label: 'Products' },
    { page: 'contact', label: 'Contact Us' },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <div 
            className="flex items-center cursor-pointer"
            onClick={() => onNavigate('home')}
          >
            <Logo className="h-10 w-10 text-brand-green" />
            <h1 className="ml-2 text-xl font-bold text-brand-dark-green tracking-tight">
              Varada Seeds
            </h1>
          </div>
          <nav className="hidden md:flex items-center space-x-2">
            {navLinks.map((link) => (
              <NavLink key={link.page} page={link.page} currentPage={currentPage} onNavigate={onNavigate}>
                {link.label}
              </NavLink>
            ))}
          </nav>
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-brand-green focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden mt-4">
            <nav className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.page}
                  href={`#${link.page}`}
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate(link.page);
                    setIsMenuOpen(false);
                  }}
                  className={`block px-4 py-2 text-sm font-medium rounded-md transition-colors duration-300 ${
                    currentPage === link.page
                      ? 'bg-brand-green text-white'
                      : 'text-gray-600 hover:bg-gray-100 hover:text-brand-green'
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;