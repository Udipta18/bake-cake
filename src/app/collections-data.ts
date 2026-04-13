export type CollectionItem = {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  price: string;
  priceNote: string;
  image: string;
  ingredients: string[];
  servingSize: string;
  shelfLife: string;
  allergens: string[];
  category: string;
};

export const collectionsData: CollectionItem[] = [
  {
    slug: "decadent-brownies",
    title: "Decadent Brownies",
    description:
      "Rich, fudgy layers of 70% dark cacao with a signature crackle top.",
    longDescription:
      "Indulge in our signature brownies — a symphony of 70% single-origin dark cacao, slow-melted Belgian butter, and a whisper of Tahitian vanilla. Each brownie is baked low and slow until the interior turns impossibly fudgy while the top develops our iconic crackle crust. Finished with a dusting of Valrhona cocoa and a delicate flake of Maldon sea salt.",
    price: "From $24.00",
    priceNote: "Box of 6 pieces",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBM6U5eib9AiGjIN9XSSzhAnhUtctM8rmP19B0rWqvY4JcBrk4G9iB2drgh7F3gS8q_tPHTr1QJoEZWRrghQxt0m3vLTw87DTAjjs977xsJKVkayIcKZev_NdwQUmfpzjJNGGMjTPlvBMKpdq8PS_klQsXfRfSJ27z7B4O8RCGjhDz0EZ2b-olABTsD5RNmCeDMYDpj4or98bs1kqkd_6ZlE8T0yl0cy1ktV75Bo8rShTVSFB3xua2sTSXUd-WoQi2chpXSqoVvBd8",
    ingredients: [
      "70% Dark Cacao",
      "Belgian Butter",
      "Free-Range Eggs",
      "Tahitian Vanilla",
      "Maldon Sea Salt",
      "Valrhona Cocoa Powder",
    ],
    servingSize: "Serves 6–8",
    shelfLife: "Best within 5 days",
    allergens: ["Dairy", "Eggs", "Gluten"],
    category: "Brownies",
  },
  {
    slug: "artisanal-chocolates",
    title: "Artisanal Chocolates",
    description:
      "Hand-painted bonbons infused with lavender honey and organic berries.",
    longDescription:
      "Our artisanal chocolate collection is a testament to the art of confection. Each bonbon is hand-painted with natural cocoa butter colours, then filled with ganaches infused with French lavender honey, Amalfi lemon, and organic berry reductions. The shells are tempered to a satisfying snap, revealing silky centres that melt on the tongue like velvet.",
    price: "From $32.00",
    priceNote: "Box of 9 pieces",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDPGgrgli0mi_a7iuZr9PltF3QW8GIDjTTzRSPkjDCH_wxEk4nsi9YjWsTTjEUB3zYh0biUXDSb2Ej1KIa8hqGe4PWJMtJod7XN-9sraDUqMItPXnHnZzQ09zKBh-ZSZv1df8tJ5lzJ6jxVc2G-AHH7-XY-FOapGxwN7yu3WeU4pQOLv6rA9uLE8lowEx3mw2jrj0DNmi_Eq-V0HF-c4KHI_XBIQvgHO3i3qGzrIH489lfzjF5YFA0ThgmSTd0rPzAyHM5YejL9a7o",
    ingredients: [
      "Single-Origin Cacao",
      "French Lavender Honey",
      "Organic Berry Reduction",
      "Amalfi Lemon Zest",
      "Cocoa Butter",
      "Pure Cream",
    ],
    servingSize: "9 bonbons",
    shelfLife: "Best within 10 days",
    allergens: ["Dairy", "Soy"],
    category: "Chocolates",
  },
  {
    slug: "warm-soft-cookies",
    title: "Warm & Soft Cookies",
    description:
      "Brown-butter infused dough baked to golden perfection with sea salt.",
    longDescription:
      "Our cookies begin with French butter, browned until nutty and fragrant, then folded into a dough that rests for 36 hours to develop deep, complex flavours. Studded with hand-chopped 65% dark chocolate and a sprinkle of fleur de sel, each cookie is baked until the edges turn golden while the centre stays delightfully gooey. Served warm from the oven.",
    price: "From $18.00",
    priceNote: "Box of 8 cookies",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCslIFtGQde5lmR8H4sMW2exDEHvrDwcQ2wnZtRd6Y419qOTilLP4xnaUUZXjTjtIWYeHFDRKmUOz051kDdBgctDGJ8QQiRi7RpT8aOZRkO6c61qJ_w6l4WD2fzFLcQTa_tNzf35R8kGk8S7mlJi7VC-il6RIBlMEs5zpzERRNK-YcqnmZoKFo5lub72YQTSuUZqIr9jPW_HfYmYedQBpg4XDxJUgtvlWJrAGUW7pbOvjC6DbJUinlgXWi0SKrSGkUByPXEn2nIfao",
    ingredients: [
      "Browned French Butter",
      "65% Dark Chocolate",
      "Organic Flour",
      "Free-Range Eggs",
      "Fleur de Sel",
      "Madagascar Vanilla",
    ],
    servingSize: "8 cookies",
    shelfLife: "Best within 3 days",
    allergens: ["Dairy", "Eggs", "Gluten"],
    category: "Cookies",
  },
  {
    slug: "signature-cookies",
    title: "Signature Cookies",
    description:
      "Our bestselling recipe — a caramelised edge, chewy centre, and chunks of white chocolate macadamia.",
    longDescription:
      "The cookie that started it all. Our Signature Cookie features a dough enriched with brown sugar and a touch of molasses, creating a caramelised exterior that gives way to an impossibly chewy centre. Generously studded with premium white chocolate chips and toasted macadamia nuts, each cookie is a celebration of contrasting textures and balanced sweetness.",
    price: "$22.00",
    priceNote: "Box of 6 cookies",
    image:
      "https://lh3.googleusercontent.com/aida/ADBb0ujD-YbGS9L836xz5zbF8UFeIhswEa-v6O7Li9pTrX7DzLIRaG-qCj4ha-ttsf2zqjtCXK4w2sM00iy4cyI1QIDK88e7X5QTRJ3lsFMfn0VqOpNiOE_CcNyxXs6ScQdeV5NOtKEO8IB0L4Zs7bcoOiovSl34xpmF7tnoEqpG9yp6FrD9Ft599OuxiopjUg0tB_4l8ZQYOfwOdmHpm1AxWrAxsaWsk9QmL_nS_W9KrWim5UkSwxJ5LI-8nlkzrehsfigOV_1V1rfrJg",
    ingredients: [
      "Brown Sugar",
      "White Chocolate",
      "Macadamia Nuts",
      "Molasses",
      "French Butter",
      "Organic Flour",
    ],
    servingSize: "6 cookies",
    shelfLife: "Best within 3 days",
    allergens: ["Dairy", "Eggs", "Gluten", "Tree Nuts"],
    category: "Cookies",
  },
  {
    slug: "artisan-truffles",
    title: "Artisan Truffles",
    description:
      "Velvety ganache centres dusted in premium cocoa, finished with a gilded touch.",
    longDescription:
      "Each truffle begins as a pool of 72% dark chocolate ganache, infused with either single-origin espresso, passion fruit, or Champagne. Gently rolled by hand and finished with a dusting of Dutch-process cocoa or edible gold leaf, these truffles offer a moment of pure, unadulterated luxury. Our truffles are never moulded — always hand-rolled for an artisanal texture.",
    price: "$36.00",
    priceNote: "Box of 12 truffles",
    image:
      "https://lh3.googleusercontent.com/aida/ADBb0ujIV-MbtXxkXfGglo5I4qePpOhOIJvV7xIKaNYdCQxsMY7-umJLdueErPFDwCuQGCK9bXElnCa_mBl5LkayhSVs_RaRBwWPktqz6E-7CUzVQrxg_M_gTcSBqG1Wd8cLTe-lCBcy6hVb7YVzY1UlM6dumxyZ0ZHQ1Cv0IuTur77aiNZkEu8U-iNO9nZt63erKxN73UznPGcaISoBJXo7zcZRyOCU3FKqtcUEbp6N_r2vBQ_gN6xvRLN5-6QVL9ywR-MP2Qig19N2",
    ingredients: [
      "72% Dark Chocolate",
      "Heavy Cream",
      "Espresso / Passion Fruit / Champagne",
      "Dutch Cocoa Powder",
      "Edible Gold Leaf",
      "Fleur de Sel",
    ],
    servingSize: "12 truffles",
    shelfLife: "Best within 7 days",
    allergens: ["Dairy", "Soy"],
    category: "Chocolates",
  },
  {
    slug: "swirled-fudge-brownies",
    title: "Swirled Fudge Brownies",
    description:
      "Layers of dark and white chocolate fudge swirled into a marbled masterpiece.",
    longDescription:
      "A decadent twist on our classic brownie, featuring ribbons of ivory white chocolate fudge swirled through our signature dark chocolate base. The contrast creates a striking marble pattern on top, while inside the two flavours meld into a harmonious, ultra-fudgy texture. Topped with caramelised white chocolate shards and a light sprinkle of edible flowers.",
    price: "$28.00",
    priceNote: "Box of 6 pieces",
    image:
      "https://lh3.googleusercontent.com/aida/ADBb0ujpBavcVgsIIUxIS76jvI7ytsjQpTihG0JgaWF2xSVSlfkNoI-gaDt5XVHWJ3pB_hF6iEidY2JhmuySMEYd1BRooKEpdbQgp8nA3fiwD3G7bF7Fsty_8vXqPsfGAtrZ7KQMpIodGzjTM_qjNVUk1dYFwNx6vDTa_OIy7xtefI98d_sNPMoNjSvr0-E5VcREcv3EIFdgatfeQb7aJtPeLhQnD6qnQoKP0iYcD71c_FkOHcolsBL8bbfMhryPKENGSf-7Zw6awbc06Q",
    ingredients: [
      "Dark Chocolate",
      "White Chocolate",
      "Belgian Butter",
      "Free-Range Eggs",
      "Caramelised White Chocolate Shards",
      "Edible Flowers",
    ],
    servingSize: "Serves 6–8",
    shelfLife: "Best within 5 days",
    allergens: ["Dairy", "Eggs", "Gluten", "Soy"],
    category: "Brownies",
  },
];
