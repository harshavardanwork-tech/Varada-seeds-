
import React from 'react';
import { Page } from '../types';
import Logo from './Logo';
import FacebookIcon from './icons/FacebookIcon';
import TwitterIcon from './icons/TwitterIcon';
import LinkedInIcon from './icons/LinkedInIcon';
import MailIcon from './icons/MailIcon';
import PhoneIcon from './icons/PhoneIcon';
import LocationIcon from './icons/LocationIcon';

interface FooterProps {
  onNavigate: (page: Page) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-brand-dark-green text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="flex flex-col">
             <div 
                className="flex items-center cursor-pointer mb-4"
                onClick={() => onNavigate('home')}
              >
                <Logo className="h-10 w-10 text-white" />
                <h1 className="ml-2 text-xl font-bold tracking-tight">
                  AgriSeed Genetics
                </h1>
              </div>
              <p className="text-gray-300 text-sm">
                Sowing the seeds of tomorrow, today. Committed to innovation and quality in agriculture.
              </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" onClick={(e) => { e.preventDefault(); onNavigate('home'); }} className="hover:text-brand-light-green transition-colors">Home</a></li>
              <li><a href="#about" onClick={(e) => { e.preventDefault(); onNavigate('about'); }} className="hover:text-brand-light-green transition-colors">About Us</a></li>
              <li><a href="#products" onClick={(e) => { e.preventDefault(); onNavigate('products'); }} className="hover:text-brand-light-green transition-colors">Products</a></li>
              <li><a href="#contact" onClick={(e) => { e.preventDefault(); onNavigate('contact'); }} className="hover:text-brand-light-green transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <LocationIcon className="h-5 w-5 mr-3 mt-1 flex-shrink-0" />
                <span>123 Seedling Lane, Greenfield, AG 54321, USA</span>
              </li>
              <li className="flex items-center">
                <PhoneIcon className="h-5 w-5 mr-3 flex-shrink-0" />
                <a href="tel:+1234567890" className="hover:text-brand-light-green transition-colors">(123) 456-7890</a>
              </li>
              <li className="flex items-center">
                <MailIcon className="h-5 w-5 mr-3 flex-shrink-0" />
                <a href="mailto:info@agriseedgenetics.com" className="hover:text-brand-light-green transition-colors">info@agriseedgenetics.com</a>
              </li>
            </ul>
          </div>
          
          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-brand-light-green transition-colors">
                <FacebookIcon className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-brand-light-green transition-colors">
                <TwitterIcon className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-brand-light-green transition-colors">
                <LinkedInIcon className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} AgriSeed Genetics. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
