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
    slug: "ferrero-rocher-chocolates",
    title: "Ferrero Rocher Chocolates",
    description:
      "Classic Ferrero Rocher chocolates with a crispy hazelnut filling.",
    longDescription:
      "Our Ferrero Rocher collection is a celebration of the iconic Italian chocolate. Each piece is enveloped in a layer of milk chocolate, revealing a crunchy hazelnut filling. The shells are tempered to a satisfying snap, revealing silky centres that melt on the tongue like velvet.",
    price: "₹70.00",
    priceNote: "Price per piece",
    image:
      "/images/ferror_1.png",
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
    slug: "caramel-bonbon-chocolates",
    title: "Caramel Bonbon Chocolates",
    description:
      "Classic Caramel Bonbon chocolates with a crispy hazelnut filling.",
    longDescription:
      "Our Ferrero Rocher collection is a celebration of the iconic Italian chocolate. Each piece is enveloped in a layer of milk chocolate, revealing a crunchy hazelnut filling. The shells are tempered to a satisfying snap, revealing silky centres that melt on the tongue like velvet.",
    price: "₹70.00",
    priceNote: "Price per piece",
    image:
      "/images/caramel_bobon.png",
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
    slug: "snickers-chocolates",
    title: "Snickers Chocolates",
    description:
      "Classic Snickers chocolates with a crispy hazelnut filling.",
    longDescription:
      "Our Ferrero Rocher collection is a celebration of the iconic Italian chocolate. Each piece is enveloped in a layer of milk chocolate, revealing a crunchy hazelnut filling. The shells are tempered to a satisfying snap, revealing silky centres that melt on the tongue like velvet.",
    price: "₹80.00",
    priceNote: "Price per piece",
    image:
      "/images/snickers.png",
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
    slug: "rasmalai-chocolates",
    title: "Rasmalai Chocolates",
    description:
      "Classic rasmalai chocolates with a crispy hazelnut filling.",
    longDescription:
      "Our Classic rasmalai chocolates collection is a celebration of the iconic Italian chocolate. Each piece is enveloped in a layer of milk chocolate, revealing a crunchy hazelnut filling. The shells are tempered to a satisfying snap, revealing silky centres that melt on the tongue like velvet.",
    price: "₹80.00(L) ₹50.00(S)",
    priceNote: "Price per piece",
    image:
      "/images/rasmalai.png",
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
    slug: "white-dark-chocolates",
    title: "Milk Dark Chocolate Bar",
    description:
      "Classic milky chocolaty chocolates with a crispy hazelnut filling.",
    longDescription:
      "Our Classic milky chocolaty chocolates collection is a celebration of the iconic Italian chocolate. Each piece is enveloped in a layer of milk chocolate, revealing a crunchy hazelnut filling. The shells are tempered to a satisfying snap, revealing silky centres that melt on the tongue like velvet.",
    price: "₹80.00(L) ₹50.00(S)",
    priceNote: "Price per piece",
    image:
      "/images/white_dark.png",
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
    slug: "cookie-cream-chocolates",
    title: "Cookie&Cream Chocolate Bar",
    description:
      "Classic cookie and cream chocolates with a crispy hazelnut filling.",
    longDescription:
      "Our Classic cookie and cream chocolates collection is a celebration of the iconic Italian chocolate. Each piece is enveloped in a layer of milk chocolate, revealing a crunchy hazelnut filling. The shells are tempered to a satisfying snap, revealing silky centres that melt on the tongue like velvet.",
    price: "₹90.00",
    priceNote: "Price per piece",
    image:
      "/images/cookie.png",
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
    slug: "wafer-chocolates",
    title: "Wafer Chocolate",
    description:
      "Classic wafer chocolates with a crispy hazelnut filling.",
    longDescription:
      "Our Classic wafer chocolates collection is a celebration of the iconic Italian chocolate. Each piece is enveloped in a layer of milk chocolate, revealing a crunchy hazelnut filling. The shells are tempered to a satisfying snap, revealing silky centres that melt on the tongue like velvet.",
    price: "₹50.00",
    priceNote: "Price per piece",
    image:
      "/images/wafer.png",
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
    slug: "kunafa-chocolates",
    title: "Kunafa Chocolate",
    description:
      "Classic kunafa chocolates with a crispy hazelnut filling.",
    longDescription:
      "Our Classic kunafa chocolates collection is a celebration of the iconic Italian chocolate. Each piece is enveloped in a layer of milk chocolate, revealing a crunchy hazelnut filling. The shells are tempered to a satisfying snap, revealing silky centres that melt on the tongue like velvet.",
    price: "₹200.00(L)",
    priceNote: "Price per piece",
    image:
      "/images/kunafa.png",
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
    slug: "hazelnut-chocolates",
    title: "Hazelnut Chocolate Bar",
    description:
      "Classic hazelnut chocolates with a crispy hazelnut filling.",
    longDescription:
      "Our Classic hazelnut chocolates collection is a celebration of the iconic Italian chocolate. Each piece is enveloped in a layer of milk chocolate, revealing a crunchy hazelnut filling. The shells are tempered to a satisfying snap, revealing silky centres that melt on the tongue like velvet.",
    price: "₹120.00",
    priceNote: "Price per piece",
    image:
      "/images/hazelnut.png",
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
    slug: "nutty-chocolates",
    title: "Nutty Chocolate Bar",
    description:
      "Classic nutty chocolates with a crispy hazelnut filling.",
    longDescription:
      "Our Classic nutty chocolates collection is a celebration of the iconic Italian chocolate. Each piece is enveloped in a layer of milk chocolate, revealing a crunchy hazelnut filling. The shells are tempered to a satisfying snap, revealing silky centres that melt on the tongue like velvet.",
    price: "₹100.00",
    priceNote: "Price per piece",
    image:
      "/images/nutty.png",
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
    price: "₹230.00",
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
    price: "₹200.00",
    priceNote: "Box of 8 cookies",
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
    servingSize: "8 cookies",
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
    price: "₹250.00",
    priceNote: "Box of 8 cookies",
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
    price: "₹230.00",
    priceNote: "Box of 8 cookies",
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
    price: "₹220.00",
    priceNote: "Box of 8 cookies",
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
    servingSize: "8 cookies",
    shelfLife: "Best within 3 days",
    allergens: ["Dairy", "Eggs", "Gluten", "Tree Nuts"],
    category: "Cookies",
  },
  {
    slug: "jeera-atta-cookie",
    title: "Jeera Atta Ajwain Cookie",
    description:
      "Our bestselling recipe — a caramelised edge, chewy centre, and chunks of white chocolate macadamia.",
    longDescription:
      "The cookie that started it all. Our Signature Cookie features a dough enriched with brown sugar and a touch of molasses, creating a caramelised exterior that gives way to an impossibly chewy centre. Generously studded with premium white chocolate chips and toasted macadamia nuts, each cookie is a celebration of contrasting textures and balanced sweetness.",
    price: "₹200.00",
    priceNote: "Box of 8 cookies",
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
    servingSize: "8 cookies",
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
    price: "₹230.00",
    priceNote: "Box of 8 cookies",
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
    slug: "kashmir-roth-cookie",
    title: "Kashmir Roth Cookie",
    description:
      "Our bestselling recipe — a caramelised edge, chewy centre, and chunks of white chocolate macadamia.",
    longDescription:
      "The cookie that started it all. Our Signature Cookie features a dough enriched with brown sugar and a touch of molasses, creating a caramelised exterior that gives way to an impossibly chewy centre. Generously studded with premium white chocolate chips and toasted macadamia nuts, each cookie is a celebration of contrasting textures and balanced sweetness.",
    price: "₹250.00",
    priceNote: "Box of 8 cookies",
    image:
      "/images/kashmir_roth.png",
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
    slug: "karachi-cookie",
    title: "Karachi Cookie",
    description:
      "Our bestselling recipe — a caramelised edge, chewy centre, and chunks of white chocolate macadamia.",
    longDescription:
      "The cookie that started it all. Our Signature Cookie features a dough enriched with brown sugar and a touch of molasses, creating a caramelised exterior that gives way to an impossibly chewy centre. Generously studded with premium white chocolate chips and toasted macadamia nuts, each cookie is a celebration of contrasting textures and balanced sweetness.",
    price: "₹230.00",
    priceNote: "Box of 8 cookies",
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
    servingSize: "8 cookies",
    shelfLife: "Best within 3 days",
    allergens: ["Dairy", "Eggs", "Gluten", "Tree Nuts"],
    category: "Cookies",
  },
  {
    slug: "almond-brownies",
    title: "Almond Brownies",
    description:
      "Layers of dark and white chocolate fudge swirled into a marbled masterpiece.",
    longDescription:
      "A decadent twist on our classic brownie, featuring ribbons of ivory white chocolate fudge swirled through our signature dark chocolate base. The contrast creates a striking marble pattern on top, while inside the two flavours meld into a harmonious, ultra-fudgy texture. Topped with caramelised white chocolate shards and a light sprinkle of edible flowers.",
    price: "₹90.00",
    priceNote: "Per piece",
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
    price: "₹90.00",
    priceNote: "Per piece",
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
    price: "₹90.00",
    priceNote: "Per piece",
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
  },
  {
    slug: "walnut-brownies",
    title: "Walnut Brownies",
    description:
      "Rich, fudgy layers of 70% dark cacao with a signature walnut crackle top.",
    longDescription:
      "Indulge in our walnut brownies — a symphony of 70% single-origin dark cacao, slow-melted Premium quality butter, and a whisper of Regular vanilla. Each brownie is baked low and slow until the interior turns impossibly fudgy while the top develops our iconic crackle crust. Finished with a dusting of Valrhona cocoa and a delicate flake of sea salt.",
    price: "₹90.00",
    priceNote: "Per piece",
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
    slug: "choco-pie-cake",
    title: "Choco Pie Cake",
    description:
      "Rich, fudgy layers of 70% dark cacao with a signature Chocolate crackle top.",
    longDescription:
      "Indulge in our choco pie cakes — a symphony of 70% single-origin dark cacao, slow-melted Premium quality butter, and a whisper of Regular vanilla. Each brownie is baked low and slow until the interior turns impossibly fudgy while the top develops our iconic crackle crust. Finished with a dusting of Valrhona cocoa and a delicate flake of sea salt.",
    price: "₹30.00",
    priceNote: "Per piece",
    image:"/images/choco_pie_cake.png",
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
];
