export interface ProductItem {
  id: string;
  number: string;
  name: string;
  category: 'Solitaires & Diamonds' | 'Heritage Gold' | 'Haute Joaillerie' | 'Daily Luxury';
  tagline: string;
  description: string;
  metal: string;
  gemstone: string;
  image: string;
  aspect: 'tall' | 'wide' | 'standard' | 'portrait';
}

export const SITE_CONFIG = {
  // Brand Configuration
  brandName: "व्ही बी माकणीकर",
  brandNameEn: "V. B. Makneekar",
  brandMonogram: "VBM",
  tagline: "Where Timeless Heritage Meets Haute Joaillerie",
  subTagline: "Handcrafted fine jewellery sculpted for the connoisseur of rare beauty and generational elegance.",

  contact: {
    phone: "9373124002",
    displayPhone: "+91 93731 24002",
    whatsappNumber: "9373124002",
    email: "concierge@vbmakneekar.com",
  },

  products: [
    {
      id: "product-1",
      number: "01",
      name: "Diamond Solitaire Ring",
      category: "Solitaires & Diamonds",
      tagline: "Platinum & Brilliant-Cut Solitaire",
      description: "A single elegant solitaire diamond ring in a polished platinum band, round brilliant-cut diamond centre stone catching bright highlights, displayed upright on a black velvet stand.",
      metal: "950 Solid Platinum",
      gemstone: "2.50 ct Round Brilliant Diamond (D/IF)",
      image: "/images/product-01.jpg",
      aspect: "tall",
    },
    {
      id: "product-2",
      number: "02",
      name: "Gold Temple-Style Necklace Set",
      category: "Heritage Gold",
      tagline: "22k Handcrafted Kundan & Polki Heirlooms",
      description: "An intricately handcrafted 22k gold temple-style necklace set with kundan and polki stonework, layered with matching jhumka earrings, draped gracefully over a velvet display.",
      metal: "22k (916) Royal Yellow Gold",
      gemstone: "Natural Uncut Polki & Zambian Emerald Drops",
      image: "/images/product-02.jpg",
      aspect: "wide",
    },
    {
      id: "product-3",
      number: "03",
      name: "Diamond Stud Earrings",
      category: "Solitaires & Diamonds",
      tagline: "Classic Round Solitaire Studs",
      description: "A pair of classic round diamond stud earrings in a white gold setting, placed symmetrically on a soft velvet surface.",
      metal: "18k White Gold (4-Prong Coronet)",
      gemstone: "3.00 ct Total Weight Matching Pair",
      image: "/images/product-03.jpg",
      aspect: "standard",
    },
    {
      id: "product-4",
      number: "04",
      name: "Gold Kada Bangles",
      category: "Heritage Gold",
      tagline: "Engraved Floral Royal Bangles",
      description: "A pair of traditional 22k gold kada bangles with fine engraved floral motifs, standing upright leaning gracefully against each other.",
      metal: "22k Solid Yellow Gold",
      gemstone: "Micro-accented with Ruby cabochons",
      image: "/images/product-04.jpg",
      aspect: "portrait",
    },
    {
      id: "product-5",
      number: "05",
      name: "Bridal Mangalsutra",
      category: "Haute Joaillerie",
      tagline: "Sacred Beaded Gold & Diamond Pendant",
      description: "An elegant black-and-gold beaded bridal mangalsutra with a diamond-studded gold pendant, coiled gracefully on a velvet backdrop.",
      metal: "18k Yellow Gold & Onyx Beads",
      gemstone: "1.15 ct Pavé & Pear Diamonds",
      image: "/images/product-05.jpg",
      aspect: "tall",
    },
    {
      id: "product-6",
      number: "06",
      name: "Emerald & Gold Pendant Necklace",
      category: "Haute Joaillerie",
      tagline: "Teardrop Emerald with Diamond Halo",
      description: "A gold chain necklace featuring a teardrop emerald pendant surrounded by a halo of small diamonds, hanging vertically against a dark backdrop.",
      metal: "18k Yellow Gold",
      gemstone: "4.80 ct Natural Teardrop Emerald",
      image: "/images/product-06.jpg",
      aspect: "tall",
    },
    {
      id: "product-7",
      number: "07",
      name: "Rose Gold Charm Bracelet",
      category: "Daily Luxury",
      tagline: "Delicate Celestial & Heart Accents",
      description: "A delicate rose gold chain bracelet with small heart and star charms and tiny diamond accents, coiled softly on a dark surface.",
      metal: "18k Rose Gold",
      gemstone: "0.45 ct Micro Pave Diamonds",
      image: "/images/product-07.jpg",
      aspect: "wide",
    },
    {
      id: "product-8",
      number: "08",
      name: "Antique Gold Jhumka Earrings",
      category: "Heritage Gold",
      tagline: "Filigree Bell Drops with Pearl Accents",
      description: "A pair of ornate antique-finish gold jhumka earrings with fine filigree work and small pearl drops, standing upright side by side.",
      metal: "22k Antique Finish Gold",
      gemstone: "Natural Basra Seed Pearls & Rubies",
      image: "/images/product-08.jpg",
      aspect: "standard",
    }
  ] as ProductItem[]
};
