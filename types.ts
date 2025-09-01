
export type Page = 'home' | 'about' | 'products' | 'contact';

export enum SeedCategory {
  Hybrid = 'Hybrid Seeds',
  Vegetable = 'Vegetable Seeds',
  FieldCrops = 'Field Crops',
}

export interface SeedProduct {
  id: number;
  name: string;
  category: SeedCategory;
  description: string;
  imageUrl: string;
}
