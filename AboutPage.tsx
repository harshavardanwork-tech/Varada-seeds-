import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-brand-dark-green mb-8">
            About Varada Seeds
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <p className="text-lg text-gray-700 mb-6">
                Founded on the principle of innovation, Varada Seeds is a leader in the development and production of high-performance seeds. Our journey began over two decades ago with a small team of passionate agronomists and a shared vision: to empower farmers with genetically superior seeds that deliver exceptional yields and resilience.
              </p>
              <p className="text-gray-600 mb-6">
                We specialize in hybrid seed manufacturing, leveraging cutting-edge research and traditional breeding techniques to create varieties that thrive in diverse environmental conditions. Our commitment to quality is unwavering, with rigorous testing at every stage, from our labs to your fields.
              </p>
            </div>
            <div className="order-1 md:order-2">
              <img 
                src="https://picsum.photos/seed/lab/600/400" 
                alt="Scientist working in a lab" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
          <div className="mt-16 bg-brand-tan p-8 rounded-lg shadow-inner">
            <h3 className="text-2xl font-semibold text-brand-green mb-4">Our Mission</h3>
            <p className="text-gray-700">
              To drive agricultural progress by providing farmers with innovative seed solutions that enhance productivity, sustainability, and profitability. We are dedicated to pioneering research, exceptional quality, and building lasting partnerships within the agricultural community.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;