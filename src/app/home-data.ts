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
      "https://lh3.googleusercontent.com/aida/ADBb0uhyh3vmVxkEpESFOFYfpU_g3ldCW6_uG2RClWqtjRBu7ECbqF1Qj0urfO4kqNknDAY9eklRT1eCC45ktJmva8P_gBzVVjtHuGCSG843gvR49DMHXngFp0SnNlY39VBEjUhTEcGPZA-uLQ-Vwz_OIDO1lgcmyZDhA4K0USHtOgVQBMJAoRFEeKsbLpG8MfZPvp4Rx2q7EYKIsH01ALwmvBchfENeVfhzUZGpTbxscEeX3--aEsZAYhuIiqdFSEbSBPtwCEJFeOCS",
  },
  {
    eyebrow: "Gourmet Selection",
    title: "Elegance in every bite",
    description:
      "Discover our hand-painted pralines and truffles, where art meets the finest cacao.",
    cta: "Shop Chocolates",
    image:
      "https://lh3.googleusercontent.com/aida/ADBb0ui0yPOZIendXKg0yr2BYUyBXW3MbCLVhb5Yx-toP4VcrzR-rnux276PoOLRdJvpEHeH7YcnwE7ES7mjCP7oMp8qWDZvSn2LxansWHinPKNPYqT6KckTxkOCWa6GCrPTpurhAfd9RkLo92LAdBt_CVOd9WbPPH5MHp9c3gnZpd4bHuha_lR15ckRfqLNz7j2KbLIjbjUduNh13pMPLYPQQ2Ij6m5ARx1ye29xx7m884XlYKfKu2CMgqNDeFtUPkUfd19Q-qh1wCtag",
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
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDPGgrgli0mi_a7iuZr9PltF3QW8GIDjTTzRSPkjDCH_wxEk4nsi9YjWsTTjEUB3zYh0biUXDSb2Ej1KIa8hqGe4PWJMtJod7XN-9sraDUqMItPXnHnZzQ09zKBh-ZSZv1df8tJ5lzJ6jxVc2G-AHH7-XY-FOapGxwN7yu3WeU4pQOLv6rA9uLE8lowEx3mw2jrj0DNmi_Eq-V0HF-c4KHI_XBIQvgHO3i3qGzrIH489lfzjF5YFA0ThgmSTd0rPzAyHM5YejL9a7o",
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
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBM6U5eib9AiGjIN9XSSzhAnhUtctM8rmP19B0rWqvY4JcBrk4G9iB2drgh7F3gS8q_tPHTr1QJoEZWRrghQxt0m3vLTw87DTAjjs977xsJKVkayIcKZev_NdwQUmfpzjJNGGMjTPlvBMKpdq8PS_klQsXfRfSJ27z7B4O8RCGjhDz0EZ2b-olABTsD5RNmCeDMYDpj4or98bs1kqkd_6ZlE8T0yl0cy1ktV75Bo8rShTVSFB3xua2sTSXUd-WoQi2chpXSqoVvBd8",
  },
  {
    eyebrow: "Festive Offer",
    badge: "Pre-Order Now",
    title: "Hand-finished truffle boxes wrapped for elegant gifting.",
    description:
      "A polished gifting edit for festivals, hostess moments, and sweet boxes that feel thoughtful from the first glance.",
    primaryCta: "Pre-Order Gifting",
    secondaryCta: "View Festive Boxes",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDPGgrgli0mi_a7iuZr9PltF3QW8GIDjTTzRSPkjDCH_wxEk4nsi9YjWsTTjEUB3zYh0biUXDSb2Ej1KIa8hqGe4PWJMtJod7XN-9sraDUqMItPXnHnZzQ09zKBh-ZSZv1df8tJ5lzJ6jxVc2G-AHH7-XY-FOapGxwN7yu3WeU4pQOLv6rA9uLE8lowEx3mw2jrj0DNmi_Eq-V0HF-c4KHI_XBIQvgHO3i3qGzrIH489lfzjF5YFA0ThgmSTd0rPzAyHM5YejL9a7o",
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
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCslIFtGQde5lmR8H4sMW2exDEHvrDwcQ2wnZtRd6Y419qOTilLP4xnaUUZXjTjtIWYeHFDRKmUOz051kDdBgctDGJ8QQiRi7RpT8aOZRkO6c61qJ_w6l4WD2fzFLcQTa_tNzf35R8kGk8S7mlJi7VC-il6RIBlMEs5zpzERRNK-YcqnmZoKFo5lub72YQTSuUZqIr9jPW_HfYmYedQBpg4XDxJUgtvlWJrAGUW7pbOvjC6DbJUinlgXWi0SKrSGkUByPXEn2nIfao",
  },
] as const;

export const bestSellerItems = [
  {
    title: "Signature Cookies",
    price: "₹22.00",
    image:
      "https://lh3.googleusercontent.com/aida/ADBb0ujD-YbGS9L836xz5zbF8UFeIhswEa-v6O7Li9pTrX7DzLIRaG-qCj4ha-ttsf2zqjtCXK4w2sM00iy4cyI1QIDK88e7X5QTRJ3lsFMfn0VqOpNiOE_CcNyxXs6ScQdeV5NOtKEO8IB0L4Zs7bcoOiovSl34xpmF7tnoEqpG9yp6FrD9Ft599OuxiopjUg0tB_4l8ZQYOfwOdmHpm1AxWrAxsaWsk9QmL_nS_W9KrWim5UkSwxJ5LI-8nlkzrehsfigOV_1V1rfrJg",
  },
  {
    title: "Artisan Truffles",
    price: "₹36.00",
    image:
      "https://lh3.googleusercontent.com/aida/ADBb0ujIV-MbtXxkXfGglo5I4qePpOhOIJvV7xIKaNYdCQxsMY7-umJLdueErPFDwCuQGCK9bXElnCa_mBl5LkayhSVs_RaRBwWPktqz6E-7CUzVQrxg_M_gTcSBqG1Wd8cLTe-lCBcy6hVb7YVzY1UlM6dumxyZ0ZHQ1Cv0IuTur77aiNZkEu8U-iNO9nZt63erKxN73UznPGcaISoBJXo7zcZRyOCU3FKqtcUEbp6N_r2vBQ_gN6xvRLN5-6QVL9ywR-MP2Qig19N2",
  },
  {
    title: "Swirled Fudge Brownies",
    price: "₹28.00",
    image:
      "https://lh3.googleusercontent.com/aida/ADBb0ujpBavcVgsIIUxIS76jvI7ytsjQpTihG0JgaWF2xSVSlfkNoI-gaDt5XVHWJ3pB_hF6iEidY2JhmuySMEYd1BRooKEpdbQgp8nA3fiwD3G7bF7Fsty_8vXqPsfGAtrZ7KQMpIodGzjTM_qjNVUk1dYFwNx6vDTa_OIy7xtefI98d_sNPMoNjSvr0-E5VcREcv3EIFdgatfeQb7aJtPeLhQnD6qnQoKP0iYcD71c_FkOHcolsBL8bbfMhryPKENGSf-7Zw6awbc06Q",
  },
] as const;

export const promiseItems = [
  {
    number: "01",
    title: "Sourced Fresh Daily",
    description: "Real dairy, Belgian chocolate, seasonal fruit hand-picked every morning.",
    image:
      "https://lh3.googleusercontent.com/aida/ADBb0ujANUkwP0B7ofKS2-43ncvm_W0ho4DUnHf-64wTeJOmHXrJbo_KXdZnvJHJmYt7ahZkz326Wb7FzbbFRKryN_OtN862iSlLUpdZvItmY7mV9eSKU5JMm6zQNSTHyTKnPiFCTrKxcQrJeXbj_N24dJEAQlU6hmE8EZj4u1fDk3TYzTTzWf-2obHzAlqlyO5ShC8DXKVFfgwpGTNIfw92q40iz9AyWoc8MROHhp4zDUM-PwJE_43b8j16TfCjv1NTOM9q7iHwEKedIQ",
  },
  {
    number: "02",
    title: "Baked to Order",
    description: "Nothing sits in a freezer. Every item is freshly prepared when your order arrives.",
    image:
      "https://lh3.googleusercontent.com/aida/ADBb0uhZGCN6oZbBgWEMo-NvCq3AFeW-NIWwhtvD8cgLr9Rf3gsAKKnSLnHanp_DPljQepGg1ZoeuwxRrWNKbHQX-shPKJmZdQcqrApkR44VyvdFVsMpP2JjfS5yw5feHL4WrVAWmbQ1xkT_rN407uFLzoixIEgAGWg-ExulLKOE2zEhfmNo9CfwJysEl8q9HRje0r5LOtc0Sga0dFZqHvxCQTju25jila_4deQfFW-lDU9ZB2-IukLWlS6pWjsZz87emMSE8qDuUaT1CA",
  },
  {
    number: "03",
    title: "Crafted by Hand",
    description: "Our bakers shape, frost and finish every creation personally. Always.",
    image:
      "https://lh3.googleusercontent.com/aida/ADBb0ujgr5xZ_KVHaiUftssPD05aCaZmSEBQRj3Vi_VLD-5IHlg2v6uIvalpEt867lyEkEOFLoruHTQS2hlxu4gjhiaMGYLOvseqC4Yq5gR7xpkQ9VlY6u-sf2-Ztix3i7L1mH97Dk_oHrweHAyE5w-Kgy_UoTF5j9QOxJbMPhV8tm0SCUaR4zOhEc2Z-E2lRBbbXHEkSMJaDELk3S4nvSEbD4x_jyGVqpBZBTYrrz2V27pndLiExVOb7t7Ffu4hUVmSUk-2FRXkO-8X",
  },
  {
    number: "04",
    title: "Delivered with Care",
    description: "Temperature-controlled packaging. On-time guarantee. Every time.",
    image:
      "https://lh3.googleusercontent.com/aida/ADBb0ujX9UjrW5wY5STqve56u385c5QGOGIzEYgH-1aeBnQfhJq5SS7JGB7QGxjr6Kwot-_F6w9ZOKo-DSWIHn6zeI3ZV22GLrgiADWcUdWAwDQr0Von4rsOs_sA2WThO81RcqOpAEedhK2WZ1sn5woUV4APVN4C5i2HhYj6HlJia8rdxNRGnH_jBT65Ud-1sk07TrkN2N8OarrDGXIYIV3GUD9Sp5a3CoJNXWJMNFiVyrMbjhUpOfSSUHmn8mUIuyoPj-L-pKiN-53wZQ",
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
