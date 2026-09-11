export interface ProductItem {
  id: string;
  number: string;
  name: string;
  category: 'हिरे व सोलिटेअर' | 'सोन्याचे दागिने' | 'उत्कृष्ट दागिने' | 'रोजचे दागिने';
  tagline: string;
  description: string;
  metal: string;
  gemstone: string;
  image: string;
  aspect: 'tall' | 'wide' | 'standard' | 'portrait';
}

export const SITE_CONFIG = {
  // ब्रँड माहिती
  brandName: "व्ही बी माकणीकर",
  brandNameEn: "V. B. Makneekar",
  brandMonogram: "VBM",
  tagline: "जिथे परंपरा भेटते अद्वितीय दागिन्यांशी",
  subTagline: "पिढ्यानपिढ्या जपलेल्या सौंदर्याची साक्ष देणारे हस्तनिर्मित दागिने.",

  contact: {
    phone: "7410105757",
    displayPhone: "+91 74101 05757",
    whatsappNumber: "7410105757",
    whatsappNumber2: "8149220394",
    email: "kshirsagarshrihari111@gmail.com",
    address: "भुसार लाईन, भांडे गल्ली, लातूर",
    addressEn: "Bhusar Line, Bhande Galli, Latur",
  },

  products: [
    {
      id: "product-1",
      number: "01",
      name: "Diamond Solitaire Ring",
      category: "हिरे व सोलिटेअर",
      tagline: "प्लॅटिनम व ब्रिलियंट कट सोलिटेअर",
      description: "पॉलिश केलेल्या प्लॅटिनम बँडमध्ये एक सुंदर सोलिटेअर हिऱ्याची अंगठी, मध्यभागी गोल ब्रिलियंट कट हिरा.",
      metal: "९५० शुद्ध प्लॅटिनम",
      gemstone: "२.५० कॅरेट गोल ब्रिलियंट हिरा (D/IF)",
      image: "/images/product-01.jpg",
      aspect: "tall",
    },
    {
      id: "product-2",
      number: "02",
      name: "Gold Temple-Style Necklace Set",
      category: "सोन्याचे दागिने",
      tagline: "२२ कॅरेट हस्तनिर्मित कुंदन व पोलकी",
      description: "कुंदन आणि पोलकी दगडांनी सजलेला २२ कॅरेट सोन्याचा देवी शैलीचा नेकलेस सेट, जुळत्या झुमक्यांसह.",
      metal: "२२ कॅरेट (९१६) पिवळे सोने",
      gemstone: "नैसर्गिक अनकट पोलकी व झांबियन पाचू थेंब",
      image: "/images/product-02.jpg",
      aspect: "wide",
    },
    {
      id: "product-3",
      number: "03",
      name: "Diamond Stud Earrings",
      category: "हिरे व सोलिटेअर",
      tagline: "क्लासिक गोल सोलिटेअर स्टड",
      description: "पांढऱ्या सोन्याच्या सेटिंगमध्ये क्लासिक गोल हिऱ्याचे स्टड इयररिंग्ज, मऊ मखमलीवर सुबकपणे ठेवलेले.",
      metal: "१८ कॅरेट पांढरे सोने (४-प्रॉंग कोरोनेट)",
      gemstone: "३.०० कॅरेट एकत्रित जोडी",
      image: "/images/product-03.jpg",
      aspect: "standard",
    },
    {
      id: "product-4",
      number: "04",
      name: "Gold Kada Bangles",
      category: "सोन्याचे दागिने",
      tagline: "कोरीव फुलांचे राजघराणी कडे",
      description: "बारीक कोरीव फुलांच्या नक्षीकामासह पारंपारिक २२ कॅरेट सोन्याचे कडे, एकमेकांवर टेकवून उभे केलेले.",
      metal: "२२ कॅरेट शुद्ध पिवळे सोने",
      gemstone: "सूक्ष्म माणकाने सजवलेले",
      image: "/images/product-04.jpg",
      aspect: "portrait",
    },
    {
      id: "product-5",
      number: "05",
      name: "Bridal Mangalsutra",
      category: "उत्कृष्ट दागिने",
      tagline: "पवित्र काळे मणी व सोने-हिरा लॉकेट",
      description: "हिऱ्याने जडलेल्या सोनेरी लॉकेटसह सुंदर काळे-सोनेरी मण्यांचे वधूचे मंगळसूत्र.",
      metal: "१८ कॅरेट पिवळे सोने व ओनिक्स मणी",
      gemstone: "१.१५ कॅरेट पावे व नाशपाती आकाराचे हिरे",
      image: "/images/product-05.jpg",
      aspect: "tall",
    },
    {
      id: "product-6",
      number: "06",
      name: "Emerald & Gold Pendant Necklace",
      category: "उत्कृष्ट दागिने",
      tagline: "टियरड्रॉप पाचू व हिरा हॅलो",
      description: "टियरड्रॉप आकाराच्या पाचूभोवती लहान हिऱ्यांचा हॅलो असलेला सोन्याच्या साखळीचा नेकलेस.",
      metal: "१८ कॅरेट पिवळे सोने",
      gemstone: "४.८० कॅरेट नैसर्गिक टियरड्रॉप पाचू",
      image: "/images/product-06.jpg",
      aspect: "tall",
    },
    {
      id: "product-7",
      number: "07",
      name: "Rose Gold Charm Bracelet",
      category: "रोजचे दागिने",
      tagline: "नाजूक आकाशीय व हृदय अलंकार",
      description: "लहान हृदय व तारा आकाराच्या चार्म्स आणि सूक्ष्म हिऱ्यांनी सजलेले नाजूक रोझ गोल्ड ब्रेसलेट.",
      metal: "१८ कॅरेट रोझ गोल्ड",
      gemstone: "०.४५ कॅरेट मायक्रो पावे हिरे",
      image: "/images/product-07.jpg",
      aspect: "wide",
    },
    {
      id: "product-8",
      number: "08",
      name: "Antique Gold Jhumka Earrings",
      category: "सोन्याचे दागिने",
      tagline: "फिलिग्री घंटा थेंब व मोत्याचे अलंकार",
      description: "बारीक फिलिग्री कामासह आणि लहान मोत्याच्या थेंबांसह अँटिक फिनिशचे सोनेरी झुमके.",
      metal: "२२ कॅरेट अँटिक फिनिश सोने",
      gemstone: "नैसर्गिक बसरा मोती व माणके",
      image: "/images/product-08.jpg",
      aspect: "standard",
    },
    {
      id: "product-9",
      number: "09",
      name: "Royal Meenakari Choker",
      category: "सोन्याचे दागिने",
      tagline: "२२ कॅरेट मीनाकारी सोने व मोती थेंब",
      description: "निळ्या व हिरव्या रंगाच्या मीनाकारी नक्षीकाम आणि पोलकी दगडांसह तयार केलेला भव्य २२ कॅरेट सोन्याचा चोकर.",
      metal: "२२ कॅरेट पिवळे सोने",
      gemstone: "पोलकी हिरे व नैसर्गिक मोती",
      image: "/images/product-09.jpg",
      aspect: "tall",
    },
    {
      id: "product-10",
      number: "10",
      name: "Kundan Polki Drop Earrings",
      category: "सोन्याचे दागिने",
      tagline: "फिलिग्री टियरड्रॉप व मोती झालर",
      description: "अँटिक सोन्याच्या फिलिग्री सेटिंगमध्ये कुंदन पोलकीचे झुमके, खाली गोड्या पाण्याच्या मोत्यांची झालर.",
      metal: "२२ कॅरेट अँटिक सोने",
      gemstone: "अनकट पोलकी व गोड्या पाण्याचे मोती",
      image: "/images/product-10.jpg",
      aspect: "tall",
    }
  ] as ProductItem[]
};
