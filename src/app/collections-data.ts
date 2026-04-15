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
    slug: "walnut-brownies",
    title: "Walnut Brownies",
    description:
      "Rich, fudgy layers of 70% dark cacao with a signature walnut crackle top.",
    longDescription:
      "Indulge in our walnut brownies — a symphony of 70% single-origin dark cacao, slow-melted Premium quality butter, and a whisper of Regular vanilla. Each brownie is baked low and slow until the interior turns impossibly fudgy while the top develops our iconic crackle crust. Finished with a dusting of Valrhona cocoa and a delicate flake of sea salt.",
    price: "From ₹82.00",
    priceNote: "Box of 6 pieces",
    image:"/images/walnut.png",
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
    slug: "chocochips-cookies",
    title: "Chococips Cookies",
    description:
      "Brown-butter infused dough baked to golden perfection with sea salt.",
    longDescription:
      "Our cookies begin with French butter, browned until nutty and fragrant, then folded into a dough that rests for 36 hours to develop deep, complex flavours. Studded with hand-chopped 65% dark chocolate and a sprinkle of fleur de sel, each cookie is baked until the edges turn golden while the centre stays delightfully gooey. Served warm from the oven.",
    price: "From ₹18.00",
    priceNote: "Box of 8 cookies",
    image:"/images/chocochips_cookie.png",
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
    slug: "nankhatai",
    title: "Nankhatai",
    description:
      "Our bestselling recipe — a caramelised edge, chewy centre, and chunks of white chocolate macadamia.",
    longDescription:
      "The cookie that started it all. Our Signature Cookie features a dough enriched with brown sugar and a touch of molasses, creating a caramelised exterior that gives way to an impossibly chewy centre. Generously studded with premium white chocolate chips and toasted macadamia nuts, each cookie is a celebration of contrasting textures and balanced sweetness.",
    price: "₹22.00",
    priceNote: "Box of 6 cookies",
    image:
      "/images/nankhatai.png",
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
    slug: "oats-atta-cookies",
    title: "Oats Atta Cookies",
    description:
      "Our bestselling recipe — a caramelised edge, chewy centre, and chunks of white chocolate macadamia.",
    longDescription:
      "The cookie that started it all. Our Signature Cookie features a dough enriched with brown sugar and a touch of molasses, creating a caramelised exterior that gives way to an impossibly chewy centre. Generously studded with premium white chocolate chips and toasted macadamia nuts, each cookie is a celebration of contrasting textures and balanced sweetness.",
    price: "₹22.00",
    priceNote: "Box of 6 cookies",
    image:
      "/images/oats_atta_cookie.png",
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
    slug: "chocolate-cookie",
    title: "Chocolate Cookie",
    description:
      "Our bestselling recipe — a caramelised edge, chewy centre, and chunks of white chocolate macadamia.",
    longDescription:
      "The cookie that started it all. Our Signature Cookie features a dough enriched with brown sugar and a touch of molasses, creating a caramelised exterior that gives way to an impossibly chewy centre. Generously studded with premium white chocolate chips and toasted macadamia nuts, each cookie is a celebration of contrasting textures and balanced sweetness.",
    price: "₹22.00",
    priceNote: "Box of 6 cookies",
    image:
      "/images/chocolate_cookie.png",
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
    slug: "coconut-cookie",
    title: "Coconut Cookie",
    description:
      "Our bestselling recipe — a caramelised edge, chewy centre, and chunks of white chocolate macadamia.",
    longDescription:
      "The cookie that started it all. Our Signature Cookie features a dough enriched with brown sugar and a touch of molasses, creating a caramelised exterior that gives way to an impossibly chewy centre. Generously studded with premium white chocolate chips and toasted macadamia nuts, each cookie is a celebration of contrasting textures and balanced sweetness.",
    price: "₹22.00",
    priceNote: "Box of 6 cookies",
    image:
      "/images/coconut_cookie.png",
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
    slug: "jeera-atta-cookie",
    title: "Jeera Atta Cookie",
    description:
      "Our bestselling recipe — a caramelised edge, chewy centre, and chunks of white chocolate macadamia.",
    longDescription:
      "The cookie that started it all. Our Signature Cookie features a dough enriched with brown sugar and a touch of molasses, creating a caramelised exterior that gives way to an impossibly chewy centre. Generously studded with premium white chocolate chips and toasted macadamia nuts, each cookie is a celebration of contrasting textures and balanced sweetness.",
    price: "₹22.00",
    priceNote: "Box of 6 cookies",
    image:
      "/images/jeera_atta_cookie.png",
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
    slug: "nutella-cookie",
    title: "Nutella Cookie",
    description:
      "Our bestselling recipe — a caramelised edge, chewy centre, and chunks of white chocolate macadamia.",
    longDescription:
      "The cookie that started it all. Our Signature Cookie features a dough enriched with brown sugar and a touch of molasses, creating a caramelised exterior that gives way to an impossibly chewy centre. Generously studded with premium white chocolate chips and toasted macadamia nuts, each cookie is a celebration of contrasting textures and balanced sweetness.",
    price: "₹22.00",
    priceNote: "Box of 6 cookies",
    image:
      "/images/nutella_cookie.png",
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
    slug: "almond-brownies",
    title: "Almond Brownies",
    description:
      "Layers of dark and white chocolate fudge swirled into a marbled masterpiece.",
    longDescription:
      "A decadent twist on our classic brownie, featuring ribbons of ivory white chocolate fudge swirled through our signature dark chocolate base. The contrast creates a striking marble pattern on top, while inside the two flavours meld into a harmonious, ultra-fudgy texture. Topped with caramelised white chocolate shards and a light sprinkle of edible flowers.",
    price: "₹85.00",
    priceNote: "Box of 6 pieces",
    image:"/images/almonds.png",
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
  {
    slug: "cashew-brownies",
    title: "Cashew Brownies",
    description:
      "Layers of dark and white chocolate fudge swirled into a marbled masterpiece.",
    longDescription:
      "A decadent twist on our classic brownie, featuring ribbons of ivory white chocolate fudge swirled through our signature dark chocolate base. The contrast creates a striking marble pattern on top, while inside the two flavours meld into a harmonious, ultra-fudgy texture. Topped with caramelised white chocolate shards and a light sprinkle of edible flowers.",
    price: "₹85.00",
    priceNote: "Box of 6 pieces",
    image:"/images/cashew.png",
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
  {
    slug: "chocochip-brownies",
    title: "Chocochip Brownies",
    description:
      "Layers of dark and white chocolate fudge swirled into a marbled masterpiece.",
    longDescription:
      "A decadent twist on our classic brownie, featuring ribbons of ivory white chocolate fudge swirled through our signature dark chocolate base. The contrast creates a striking marble pattern on top, while inside the two flavours meld into a harmonious, ultra-fudgy texture. Topped with caramelised white chocolate shards and a light sprinkle of edible flowers.",
    price: "₹75.00",
    priceNote: "Box of 6 pieces",
    image:"/images/chocochip.png",
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
  }
];
