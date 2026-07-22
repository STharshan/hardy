import { ServicePackage, GalleryItem, Review, ServiceAddon } from '../types';

export const PHONE_NUMBER = "07368 366877";
export const DISPLAY_PHONE = "07368 366877";
export const WHATSAPP_LINK = "https://wa.me/447368366877?text=Hi%20Hardy,%20I'd%20like%20to%20inquire%20about%20a%20mobile%20valeting%20appointment!";
export const EMAIL_ADDRESS = "hardysvaleting@gmail.com";
export const LOCATION_TEXT = "Serving all of Nottinghamshire";

export const SERVICES_DATA: ServicePackage[] = [
  {
    id: 'general-detail',
    title: 'GENERAL DETAIL',
    subtitle: 'Thorough cleaning inside & out for a fresh, clean finish.',
    priceStart: '£50',
    duration: '2 - 3 Hours',
    popular: true,
    image: 'https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&w=800&q=80',
    iconName: 'sparkles',
    description: 'Thorough cleaning inside & out for a fresh, clean finish. Perfect for routine maintenance to keep your car looking and feeling like new.',
    features: [
      'pH neutral snow foam pre-wash & contact hand wash',
      'Wheels & alloy arches thoroughly cleaned & decontaminated',
      'Full interior vacuum including seats, carpets & boot space',
      'Dashboard, center console & door cards steam wiped & dressed',
      'Interior & exterior glass polished crystal clear',
      'Tyre dressing applied for a high-gloss jet black finish'
    ]
  },
  {
    id: 'interior-detailing',
    title: 'INTERIOR DETAILING',
    subtitle: 'Deep clean of all interior surfaces for a spotless environment.',
    priceStart: '£65',
    duration: '3 - 4 Hours',
    image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=800&q=80',
    iconName: 'brush',
    description: 'Deep clean of all interior surfaces for a spotless environment. Sanitizes leather, fabric upholstery, and removes stubborn odors and stains.',
    features: [
      'Deep compressed air blowout of vents, crevices & seat rails',
      'Hot water extraction on fabric seats, floor mats & carpets',
      'Leather cleaning & conditioning treatment with UV protection',
      'Headliner spot clean & antibacterial steam sanitization',
      'Odor removal treatment & premium fragrance application',
      'Streak-free interior glass & screen cleaning'
    ]
  },
  {
    id: 'wheel-cleaning',
    title: 'WHEEL CLEANING',
    subtitle: 'Remove brake dust & grime to restore your wheels to their best.',
    priceStart: '£35',
    duration: '1 - 1.5 Hours',
    image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=800&q=80',
    iconName: 'disc',
    description: 'Remove brake dust & grime to restore your wheels to their best. Dedicated iron fallout removal and deep barrel cleansing.',
    features: [
      'Non-acidic wheel cleaner applied to remove baked-on grime',
      'Iron fallout decontaminant dissolves purple brake dust',
      'Wheel barrels, faces & lug nuts cleaned with soft brushes',
      'Wheel arches degreased & pressure washed',
      'Hydrophobic wheel sealant applied for extended protection',
      'Satin or gloss tyre dressing finish of your choice'
    ]
  },
  {
    id: 'exterior-care',
    title: 'EXTERIOR CARE',
    subtitle: 'Safe hand wash & protection to keep your paintwork looking its best.',
    priceStart: '£55',
    duration: '2.5 - 3.5 Hours',
    image: 'https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&w=800&q=80',
    iconName: 'car',
    description: 'Safe hand wash & protection to keep your paintwork looking its best. Uses multi-bucket wash method with grit guards to prevent swirl marks.',
    features: [
      'Multi-stage snow foam & gentle microfibre mitt hand wash',
      'Tar, bug & tree sap spot removal across lower bodywork',
      'Clay bar paint decontamination treatment for glass-like smoothness',
      'High-grade synthetic sealant or carnauba wax protection (6+ months)',
      'Exterior plastic trim restored & UV protected',
      'Exhaust tips polished to mirror shine'
    ]
  }
];

export const VALUE_PROPS = [
  {
    id: 'insured',
    icon: 'shieldCheck',
    title: 'FULLY INSURED',
    subtitle: 'For complete peace of mind.'
  },
  {
    id: 'products',
    icon: 'droplets',
    title: 'PROFESSIONAL PRODUCTS',
    subtitle: 'Using trusted, premium brands.'
  },
  {
    id: 'mobile',
    icon: 'mapPin',
    title: 'MOBILE SERVICE',
    subtitle: 'I come to you - home, work or anywhere.'
  },
  {
    id: 'flexible',
    icon: 'calendar',
    title: 'FLEXIBLE BOOKINGS',
    subtitle: 'Appointments to suit your schedule.'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g1',
    title: 'Porsche 911 GT3 Full Ceramic Detail',
    category: 'correction',
    beforeImage: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80',
    afterImage: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=800&q=80',
    carModel: 'Porsche 911 GT3',
    location: 'West Bridgford, Nottingham'
  },
  {
    id: 'g2',
    title: 'BMW M4 Competition Interior Revival',
    category: 'interior',
    beforeImage: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=80',
    afterImage: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=800&q=80',
    carModel: 'BMW M4 Competition',
    location: 'Beeston, Nottingham'
  },
  {
    id: 'g3',
    title: 'Range Rover Sport Wheel & Arch Deep Clean',
    category: 'wheels',
    beforeImage: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=800&q=80',
    afterImage: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=800&q=80',
    carModel: 'Range Rover Sport',
    location: 'Mansfield, Nottinghamshire'
  },
  {
    id: 'g4',
    title: 'Audi RS6 Avant Full General & Exterior Gloss',
    category: 'exterior',
    beforeImage: 'https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&w=800&q=80',
    afterImage: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&w=800&q=80',
    carModel: 'Audi RS6 Avant',
    location: 'Newark-on-Trent'
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'r1',
    author: 'Mark W.',
    location: 'West Bridgford',
    rating: 5,
    date: '2 weeks ago',
    text: "Hardy arrived promptly on my driveway with his fully equipped mobile setup. My Range Rover interior looked better than the day I bought it from the showroom. Exceptional attention to detail!",
    carModel: 'Range Rover Autobiography'
  },
  {
    id: 'r2',
    author: 'Sarah L.',
    location: 'Beeston',
    rating: 5,
    date: '1 month ago',
    text: "So convenient having Hardy come to my workplace while I worked. The machine polish and ceramic sealant brought back the deep mirror gloss on my black Audi. Highly recommended!",
    carModel: 'Audi A5 Coupe'
  },
  {
    id: 'r3',
    author: 'David P.',
    location: 'Mansfield',
    rating: 5,
    date: '3 weeks ago',
    text: "Honest, reliable and incredibly thorough. Took the time to remove all brake dust and iron spots from my alloy wheels. Best mobile valeting service in Nottinghamshire hands down.",
    carModel: 'Porsche Cayman S'
  }
];

export const ADDONS: ServiceAddon[] = [
  {
    id: 'ceramic-boost',
    name: '12-Month Ceramic Paint Protection Spray',
    price: 35,
    description: 'High silica ceramic hydrophobic layer that repels water, dirt & UV light.'
  },
  {
    id: 'leather-condition',
    name: 'Deep Leather Conditioning & UV Shield',
    price: 25,
    description: 'Restores soft supple leather feel and guards against cracking and color fade.'
  },
  {
    id: 'engine-bay',
    name: 'Engine Bay Steam Clean & Dressing',
    price: 30,
    description: 'Degreased, delicate safe steam clean and matte factory plastic dressing.'
  },
  {
    id: 'pet-hair',
    name: 'Pet Hair & Odor Sanitization Removal',
    price: 20,
    description: 'Specialist mechanical hair extraction tools & thermal fogging sanitizer.'
  }
];

export const NOTTINGHAM_AREAS = [
  'Nottingham City Centre',
  'West Bridgford',
  'Beeston',
  'Arnold',
  'Carlton',
  'Hucknall',
  'Mansfield',
  'Newark-on-Trent',
  'Bingham',
  'Southwell',
  'Retford',
  'Eastwood',
  'Stapleford',
  'Cotgrave'
];
