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
  specs: {
    label: string;
    value: string;
  }[];
}

export const SITE_CONFIG = {
  // Brand Configuration
  brandName: "Arsh Jwell",
  brandMonogram: "AJ",
  tagline: "Where Timeless Heritage Meets Haute Joaillerie",
  subTagline: "Handcrafted fine jewellery sculpted for the connoisseur of rare beauty and generational elegance.",
  
  brandStatementParagraph: `Arsh Jwell Philosophy`,
  brandStatementDefault: `We do not merely craft jewellery; we capture eternal moments in gold and light. Every cut, facet, and curve is born from an uncompromising devotion to master craftsmanship, revering the timeless allure of precious stones and the sacred legacy of generational heritage.`,
  
  contact: {
    phone: "9373124002",
    displayPhone: "+91 93731 24002",
    whatsappNumber: "9373124002",
    whatsappDisplay: "+91 93731 24002",
    email: "concierge@arshjwell.com",
    address: "Arsh Jwell Atelier",
    addressLine1: "Flagship Fine Jewellery Atelier",
    addressLine2: "Bespoke Diamond & Gold Studio",
    instagram: "@arsh.jwell",
    instagramDisplay: "@arsh.jwell",
    mapsEmbedUrl: "",
    hours: [
      { days: "Monday – Saturday", time: "10:30 AM – 7:30 PM" },
      { days: "Sunday", time: "Bespoke Consultations" }
    ]
  },
  
  stats: {
    yearsOfLegacy: "38+ Years of Legacy",
    yearsNumber: 38,
    yearsSuffix: "+",
    yearsLabel: "Years of Master Legacy",
    
    artisans: 50,
    artisansSuffix: "+",
    artisansLabel: "Master Goldsmiths & Setters",
    
    customers: "15,000+ Connoisseurs",
    customersNumber: 15000,
    customersSuffix: "+",
    customersLabel: "Discerning Connoisseurs",

    purity: 100,
    puritySuffix: "%",
    purityLabel: "Hallmarked & Certified Purity"
  },

  signaturePiece: {
    title: "The Sovereign Colombian Emerald & Diamond Collar",
    subtitle: "A Masterpiece of High Joaillerie",
    description: "Centering a breathtaking 12.4-carat untreated Colombian emerald clasped within a cascading architectural collar of D-flawless brilliant diamonds and 18k molten yellow gold. Handcrafted over 360 hours by our master goldsmith atelier.",
    image: "/images/spotlight-hero.jpg",
    details: [
      { title: "Centre Gemstone", value: "12.4 ct Untreated Colombian Emerald" },
      { title: "Diamond Pavé", value: "18.8 ct D-F VVS1 Brilliant Cut" },
      { title: "Precious Alloy", value: "22k Hand-Sculpted Yellow Gold" },
      { title: "Atelier Creation", value: "360 Hours of Bespoke Handcrafting" }
    ]
  },

  craftsmanship: {
    label: "HERITAGE & ARTISTRY",
    heading: "The Soul of Handcrafted Perfection",
    lead: "True luxury cannot be hurried. In an era of automated replication, our atelier remains stubbornly anchored to ancestral hand-forging, stone-setting by microscope, and custom alloy blending.",
    body: "Every single piece bearing our hallmark passes through over forty meticulous stages of scrutiny. From initial gouache sketches to the final hand-polishing with rouge on silk buffs, our master artisans bring centuries-old heritage techniques into contemporary prominence.",
    certifications: [
      { title: "BIS 916 & 750 Hallmarked", desc: "Guaranteed 22K and 18K purity verified under laser spectrometry" },
      { title: "GIA & IGI Certified Diamonds", desc: "Conflict-free natural diamonds graded by premier global gemological institutes" },
      { title: "Lifetime Atelier Care", desc: "Complimentary cleaning, stone tightening, and heirloom condition appraisals" }
    ]
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
      specs: [
        { label: "Centre Diamond", value: "2.50 ct Round Brilliant" },
        { label: "Cut / Polish", value: "Triple Excellent (3EX)" },
        { label: "Band Metal", value: "Hand-finished 950 Platinum" }
      ]
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
      specs: [
        { label: "Artistry", value: "Ancestral Temple Nakshi & Kundan" },
        { label: "Gold Weight", value: "118.4 grams 22K Gold" },
        { label: "Set Includes", value: "Grand Choker Necklace & Jhumkas" }
      ]
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
      specs: [
        { label: "Carat Weight", value: "1.50 ct Each (3.00 ct Total)" },
        { label: "Clarity Grade", value: "VVS1 Flawless Eye Clean" },
        { label: "Setting Style", value: "Low-Profile 4-Prong Setting" }
      ]
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
      specs: [
        { label: "Crafting Technique", value: "Hand-chiseled Floral Repoussé" },
        { label: "Closure", value: "Concealed Screw Lock Mechanism" },
        { label: "Weight", value: "74.2 grams Pair" }
      ]
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
      specs: [
        { label: "Pendant Motif", value: "Floral Teardrop Filigree" },
        { label: "Diamond Grade", value: "E-F Color, VS1 Clarity" },
        { label: "Chain Length", value: "18-Inch Hand-Knotted Beads" }
      ]
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
      specs: [
        { label: "Central Gem", value: "4.80 ct Colombian Pear Emerald" },
        { label: "Halo Accent", value: "0.65 ct Brilliant Cut Diamonds" },
        { label: "Chain", value: "18k Diamond-Cut Wheat Chain" }
      ]
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
      specs: [
        { label: "Charms", value: "Hand-engraved Star & Heart Motifs" },
        { label: "Alloy", value: "High-Polished 18k Rose Gold" },
        { label: "Clasp", value: "Lobster Claw with Adjustable Links" }
      ]
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
      specs: [
        { label: "Finish", value: "Matte Antique Patina Gold" },
        { label: "Detailing", value: "Openwork Filigree & Hanging Pearls" },
        { label: "Backing", value: "Secure South Indian Bombay Screw" }
      ]
    }
  ] as ProductItem[]
};
