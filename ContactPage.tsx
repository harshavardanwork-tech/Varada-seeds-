import React, { useState } from 'react';
import MailIcon from '../icons/MailIcon';
import PhoneIcon from '../icons/PhoneIcon';
import LocationIcon from '../icons/LocationIcon';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'submitted' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('submitting');
    console.log('Form data submitted:', formData);
    
    // Simulate API call
    setTimeout(() => {
      // Simulate success
      setFormStatus('submitted');
      setFormData({ name: '', email: '', phone: '', message: '' });
      
      // Reset status after a few seconds
      setTimeout(() => setFormStatus('idle'), 5000);
    }, 1500);
  };

  return (
    <div className="bg-brand-tan">
      <div className="container mx-auto px-6 py-16 sm:py-24">
        <div className="max-w-5xl mx-auto bg-white shadow-2xl rounded-lg grid grid-cols-1 lg:grid-cols-2 overflow-hidden">
          <div className="p-8 sm:p-12">
            <h2 className="text-3xl font-bold text-brand-dark-green mb-2">Get in Touch</h2>
            <p className="text-gray-600 mb-8">We'd love to hear from you. Fill out the form and we'll get back to you shortly.</p>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                <input type="text" name="name" id="name" required value={formData.name} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-green focus:border-brand-green sm:text-sm" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                <input type="email" name="email" id="email" required value={formData.email} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-green focus:border-brand-green sm:text-sm" />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                <input type="tel" name="phone" id="phone" value={formData.phone} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-green focus:border-brand-green sm:text-sm" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea name="message" id="message" rows={4} required value={formData.message} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-green focus:border-brand-green sm:text-sm"></textarea>
              </div>
              <div>
                <button 
                  type="submit" 
                  disabled={formStatus === 'submitting'}
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-brand-green hover:bg-brand-dark-green focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-green disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
                >
                  {formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
                </button>
              </div>
               {formStatus === 'submitted' && <p className="text-center text-green-600">Thank you! Your message has been sent.</p>}
               {formStatus === 'error' && <p className="text-center text-red-600">Something went wrong. Please try again.</p>}
            </form>
          </div>
          <div className="bg-brand-dark-green text-white p-8 sm:p-12 flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            <ul className="space-y-6 text-gray-300">
              <li className="flex items-start">
                <LocationIcon className="h-6 w-6 mr-4 mt-1 flex-shrink-0 text-brand-light-green" />
                <div>
                  <h4 className="font-semibold text-white">Our Address</h4>
                  <p>123 Seedling Lane, Greenfield, AG 54321, USA</p>
                </div>
              </li>
              <li className="flex items-start">
                <PhoneIcon className="h-6 w-6 mr-4 mt-1 flex-shrink-0 text-brand-light-green" />
                <div>
                  <h4 className="font-semibold text-white">Phone</h4>
                  <a href="tel:+1234567890" className="hover:text-white transition-colors">(123) 456-7890</a>
                </div>
              </li>
              <li className="flex items-start">
                <MailIcon className="h-6 w-6 mr-4 mt-1 flex-shrink-0 text-brand-light-green" />
                <div>
                  <h4 className="font-semibold text-white">Email</h4>
                  <a href="mailto:info@varadaseeds.com" className="hover:text-white transition-colors">info@varadaseeds.com</a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;