/** Must match the `id` on the home section (e.g. EasterQuote). */
export const OFFERS_SECTION_ID = "offers" as const;

/** Home-only scroll target for the logo (see HomePage root `id`). */
export const SITE_TOP_ID = "site-top" as const;

/**
 * Same-page: #anchor. Other routes: /#anchor so the browser scrolls after navigation.
 * No JS scroll — avoids smooth-scroll fights and repeat “jumping”.
 */
export function hrefForAnchor(anchorId: string, pathname: string) {
  return pathname === "/" ? `#${anchorId}` : `/#${anchorId}`;
}

export function hrefForBrand(pathname: string) {
  return pathname === "/" ? `#${SITE_TOP_ID}` : "/";
}

export const navigationItems = [
  {
    label: "About Us",
    href: "/about",
    items: [],
  },
  {
    label: "Products",
    items: ["Signature Cakes", "Artisanal Pastries", "Chocolates & Truffles", "Seasonal Collections"],
  },
  {
    label: "Offers",
    anchorId: OFFERS_SECTION_ID,
    items: [],
  },
  {
    label: "Contact Us",
    items: [],
  },
] as const;

export const heroSlides = [
  {
    eyebrow: "Limited Edition",
    title: "Make every day a festival",
    description:
      "Experience the artisanal alchemy of our signature brownies, crafted for life's sweetest celebrations.",
    cta: "Explore Collection",
    image:
      "/images/brownies_collection.png",
  },
  {
    eyebrow: "Gourmet Selection",
    title: "Elegance in every bite",
    description:
      "Discover our hand-painted pralines and truffles, where art meets the finest cacao.",
    cta: "Shop Chocolates",
    image:
      "/images/gourmet.png",
  },
] as const;

export const galleryItems = [
  {
    title: "Decadent Brownies",
    category: "Brownies",
    description: "Rich, fudgy layers of 70% dark cacao with a signature crackle top.",
    price: "From ₹85.00",
    image:"/images/brownies_collection.png",
  },
  {
    title: "Artisanal Chocolates",
    category: "Chocolates",
    description: "Hand-painted bonbons infused with lavender honey and organic berries.",
    price: "From ₹32.00",
    image:"/images/chocolate_1.png",
  },
  {
    title: "Warm & Soft Cookies",
    category: "Cookies",
    description: "Brown-butter infused dough baked to golden perfection with sea salt.",
    price: "From ₹18.00",
    image:
      "/images/combine_cookies.png",
  },
] as const;

export const seasonalSpotlight = [
  {
    eyebrow: "First Order Offer",
    badge: "10% Off",
    title: "A little extra sweetness for your first order.",
    description:
      "Start with our most-loved bakes and enjoy 10% off your first box, cake, or dessert table booking.",
    primaryCta: "Claim First Order Offer",
    secondaryCta: "Shop Best Sellers",
    image:"/images/first_order.png",
  },
  {
    eyebrow: "Festive Offer",
    badge: "Pre-Order Now",
    title: "Hand-finished truffle boxes wrapped for elegant gifting.",
    description:
      "A polished gifting edit for festivals, hostess moments, and sweet boxes that feel thoughtful from the first glance.",
    primaryCta: "Pre-Order Gifting",
    secondaryCta: "View Festive Boxes",
    image:"/images/gift.png",
  },
  {
    eyebrow: "Special Bake",
    badge: "Weekend Batch",
    title: "Brown-butter sea salt cookies, baked in limited weekend batches.",
    description:
      "A warm, small-batch release designed to feel a little rarer and a lot more memorable.",
    primaryCta: "Reserve This Bake",
    secondaryCta: "See This Weekend's Menu",
    image:
      "/images/batch.png",
  },
] as const;

export const bestSellerItems = [
  {
    title: "Nutella Cookies",
    price: "₹25.00",
    image:"/images/nutella_cookie.png",
  },
  {
    title: "Ferrero Rocher Chocolate",
    price: "₹36.00",
    image:
      "/images/ferror_1.png",
  },
  {
    title: "Walnut Brownies",
    price: "₹85.00",
    image:
      "/images/walnut.png",
  },
] as const;

export const promiseItems = [
  {
    number: "01",
    title: "Sourced Fresh Daily",
    description: "Real dairy, Belgian chocolate, seasonal fruit hand-picked every morning.",
    image:
      "/images/source.png",
  },
  {
    number: "02",
    title: "Baked to Order",
    description: "Nothing sits in a freezer. Every item is freshly prepared when your order arrives.",
    image:
      "/images/baked.png",
  },
  {
    number: "03",
    title: "Crafted by Hand",
    description: "Our bakers shape, frost and finish every creation personally. Always.",
    image:
      "/images/handcraft.png",
  },
  {
    number: "04",
    title: "Delivered with Care",
    description: "Temperature-controlled packaging. On-time guarantee. Every time.",
    image:
      "/images/delivered.png",
  },
] as const;

export const faqItems = [
  {
    question: "How far in advance should I place my order?",
    answer:
      "For celebration cakes, we recommend ordering 48 hours in advance. For custom themes and large party orders, 4-5 days helps us prepare every detail with care.",
  },
  {
    question: "Do you offer eggless or dietary-friendly options?",
    answer:
      "Yes. We offer eggless selections and can guide you through options for nut-sensitive or low-sugar preferences. Share your requirement while placing the order.",
  },
  {
    question: "Can I customize flavors, design, and message?",
    answer:
      "Absolutely. You can personalize flavor combinations, frosting style, and message text. Our team will confirm what is possible based on your delivery date.",
  },
  {
    question: "What are your delivery timings?",
    answer:
      "Delivery slots run across the day with priority windows for celebrations. We share the exact slot after order confirmation and keep you updated before dispatch.",
  },
  {
    question: "How should I store cakes and desserts after delivery?",
    answer:
      "Keep cakes refrigerated and bring them to room temperature for 20-30 minutes before serving. Brownies and cookies are best stored in airtight containers.",
  },
] as const;

export const testimonials = [
  {
    quote:
      '"The lavender brownies were unlike anything I\'ve ever tasted. Pure magic in every bite. Lilac & Honey is my new weekly ritual."',
    name: "Elena Roberts",
    role: "Verified Connoisseur",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAyj2buOIktsEoF7ljJR8pljJ-d9-pn4BAyDjCOa_TAn75av2FLtefOSEL-Ge3yfofNXCudc2mSPRLdh0zG3YMbrKP9EHED-dP631KtJtGmd2JUcP774LRwCABudPShOaMR_QFDfq47u2T1-n_P3bxgJi5NBeM9Yk8UJYUUaOA3XrQtUJUMat98ebmUe0mg_-gSKbJGF-h4NJA1UpiCRngmBamVg3nXgF-UvATbRQswW3bS-KaE5MrhEdS_cue8i0UW3FIrEgqWESg",
  },
  {
    quote:
      '"Their truffle box looked like a gift and tasted even better. Every piece felt carefully made, not mass-produced."',
    name: "Maya Chen",
    role: "Loyal Customer",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=240&q=80",
  },
  {
    quote:
      '"We ordered for a birthday table and everything arrived fresh, beautiful, and exactly on time. The whole experience felt premium."',
    name: "Sofia Patel",
    role: "Celebration Host",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=240&q=80",
  },
] as const;
