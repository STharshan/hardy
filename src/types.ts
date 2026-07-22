export interface ServicePackage {
  id: string;
  title: string;
  subtitle: string;
  priceStart: string;
  duration: string;
  popular?: boolean;
  image: string;
  iconName: 'sparkles' | 'brush' | 'disc' | 'shieldCheck' | 'car';
  description: string;
  features: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'all' | 'exterior' | 'interior' | 'wheels' | 'correction';
  beforeImage: string;
  afterImage: string;
  carModel: string;
  location: string;
}

export interface Review {
  id: string;
  author: string;
  location: string;
  rating: number;
  date: string;
  text: string;
  carModel: string;
}

export interface ServiceAddon {
  id: string;
  name: string;
  price: number;
  description: string;
}
