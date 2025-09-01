
import React from 'react';
import { SeedCategory, SeedProduct } from '../../types';
import ProductCard from '../ProductCard';

const products: SeedProduct[] = [
  { id: 1, name: 'Hybrid Corn ASG-720', category: SeedCategory.Hybrid, description: 'High-yield, drought-tolerant hybrid corn. Excellent for grain and silage.', imageUrl: 'https://picsum.photos/seed/corn/400/300' },
  { id: 2, name: 'Hybrid Canola ASG-45', category: SeedCategory.Hybrid, description: 'Superior oil content and blackleg resistance. Adapts well to various climates.', imageUrl: 'https://picsum.photos/seed/canola/400/300' },
  { id: 3, name: 'Hybrid Sunflower ASG-9', category: SeedCategory.Hybrid, description: 'Robust variety with high oleic content, perfect for oil production.', imageUrl: 'https://picsum.photos/seed/sunflower/400/300' },
  { id: 4, name: 'Roma Tomato "Valiant"', category: SeedCategory.Vegetable, description: 'Disease-resistant Roma variety with a rich flavor, ideal for sauces.', imageUrl: 'https://picsum.photos/seed/tomato/400/300' },
  { id: 5, name: 'Bell Pepper "Emerald Giant"', category: SeedCategory.Vegetable, description: 'Large, blocky green peppers that mature to a vibrant red. Sweet and crisp.', imageUrl: 'https://picsum.photos/seed/pepper/400/300' },
  { id: 6, name: 'Cucumber "Crisp King"', category: SeedCategory.Vegetable, description: 'Burpless, thin-skinned cucumber with a refreshing taste. Highly productive vines.', imageUrl: 'https://picsum.photos/seed/cucumber/400/300' },
  { id: 7, name: 'Soybean ASG-Prime', category: SeedCategory.FieldCrops, description: 'High-protein soybean with excellent standability and pest resistance.', imageUrl: 'https://picsum.photos/seed/soybean/400/300' },
  { id: 8, name: 'Winter Wheat "Tundra"', category: SeedCategory.FieldCrops, description: 'Hardy winter wheat known for its superior milling quality and cold tolerance.', imageUrl: 'https://picsum.photos/seed/wheat/400/300' },
  { id: 9, name: 'Alfalfa "GreenGold"', category: SeedCategory.FieldCrops, description: 'A premium, multi-leaf alfalfa with fast recovery and high feed value.', imageUrl: 'https://picsum.photos/seed/alfalfa/400/300' },
];

const ProductsPage: React.FC = () => {
  const renderCategory = (category: SeedCategory) => {
    const categoryProducts = products.filter(p => p.category === category);
    return (
      <div key={category} className="mb-16">
        <h3 className="text-3xl font-bold text-brand-green mb-8 border-l-4 border-brand-light-green pl-4">{category}</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categoryProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="bg-gray-50 py-16 sm:py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-brand-dark-green tracking-tight">Our Premium Seeds</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
            Genetically engineered for performance, resilience, and superior yield.
          </p>
        </div>
        
        {renderCategory(SeedCategory.Hybrid)}
        {renderCategory(SeedCategory.Vegetable)}
        {renderCategory(SeedCategory.FieldCrops)}
      </div>
    </div>
  );
};

export default ProductsPage;
