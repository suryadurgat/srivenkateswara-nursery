/* ==========================================================================
   Sample data for the reference prototype.
   In production this comes from the REST API (see overview.html → API).
   ========================================================================== */

const STORE = {
  name: "Sri Venkateswara Nursery",
  tagline: "Flowering Plants · Seeds · Saplings",
  phone: "+91 90000 00000",          // placeholder — to be confirmed by client
  whatsapp: "919000000000",          // placeholder
  email: "orders@svnursery.in",      // placeholder
  address: "Nursery address — to be confirmed in Phase 1",
  hours: [["Monday – Saturday", "7:00 AM – 7:30 PM"], ["Sunday", "7:00 AM – 1:00 PM"], ["Festival days", "Open — extended hours"]],
  freeShippingAbove: 999,
  deliveryFee: 60,
};

const CATEGORIES = [
  { id: "flowering", name: "Flowering Plants", blurb: "Roses, hibiscus, jasmine & more", art: { kind: "flower", f: "#d9465f", bg: "#fbe3e6" } },
  { id: "seeds", name: "Seeds", blurb: "Flower, vegetable & herb seeds", art: { kind: "seed", f: "#e0a526", bg: "#fbf0d6" } },
  { id: "saplings", name: "Saplings", blurb: "Fruit & shade tree saplings", art: { kind: "tree", f: "#3d8a5f", bg: "#e2f0e6" } },
  { id: "pots", name: "Pots & Soil", blurb: "Clay, ceramic, potting mix", art: { kind: "pot", f: "#b9572f", bg: "#f8e6dc" } },
  { id: "accessories", name: "Accessories", blurb: "Tools, fertilisers, care kits", art: { kind: "can", f: "#2f6fa3", bg: "#e1ecf6" } },
];

const C = (water, sun, soil, feed) => ({ water, sun, soil, feed });

const PRODUCTS = [
  { id: 101, name: "Red Rose (Desi Gulab)", cat: "flowering", price: 149, mrp: 199, rating: 4.7, reviews: 312, stock: 84, sun: "Full Sun", type: "Outdoor", occasion: ["gifting", "outdoor"], pot: "Medium", pop: 98, added: "2026-06-10", art: { kind: "flower", f: "#c8243c", bg: "#fbe3e6", pot: "#b9572f" },
    desc: "Fragrant, hardy desi rose that blooms almost all year round. Supplied in a 6-inch nursery pot with healthy root ball, ready for repotting or direct planting.",
    care: C("Water daily in summer, alternate days in winter. Avoid waterlogging.", "6+ hours of direct sunlight for best blooms.", "Well-drained loamy soil with compost.", "Organic manure every 30 days; bone meal during flowering."),
    tips: ["Prune dead flowers (deadhead) to encourage new blooms.", "Hard prune once a year after the monsoon.", "Watch for aphids on new shoots — neem oil spray works well."] },
  { id: 102, name: "Hibiscus — Double Red", cat: "flowering", price: 229, mrp: 279, rating: 4.6, reviews: 188, stock: 46, sun: "Full Sun", type: "Outdoor", occasion: ["outdoor"], pot: "Medium", pop: 91, added: "2026-05-02", art: { kind: "flower", f: "#e0313f", bg: "#fde5e2", pot: "#8a4a2c" },
    desc: "Large double-petal red hibiscus — an auspicious favourite for pooja and garden borders.",
    care: C("Keep soil moist; water every morning in summer.", "Full sun to light shade.", "Rich, slightly acidic soil.", "Potassium-rich feed monthly for more flowers."),
    tips: ["Pinch tips to make the plant bushy.", "Yellow leaves usually mean overwatering."] },
  { id: 103, name: "Arabian Jasmine (Mogra)", cat: "flowering", price: 179, mrp: 220, rating: 4.8, reviews: 406, stock: 120, sun: "Full Sun", type: "Outdoor", occasion: ["gifting", "outdoor"], pot: "Small", pop: 99, added: "2026-03-14", art: { kind: "flower", f: "#ffffff", bg: "#e8f2ea", pot: "#b9572f", c: "#f2d45c" },
    desc: "Intensely fragrant mogra — perfect for balconies, terraces and temple offerings.",
    care: C("Water regularly; reduce in winter.", "Minimum 5 hours direct sun.", "Light, well-drained soil.", "Liquid seaweed fortnightly in summer."),
    tips: ["Peak flowering is March–July.", "Prune after flowering season ends."] },
  { id: 104, name: "Bougainvillea — Magenta", cat: "flowering", price: 199, mrp: 249, rating: 4.5, reviews: 97, stock: 8, sun: "Full Sun", type: "Outdoor", occasion: ["outdoor"], pot: "Large", pop: 80, added: "2026-08-21", art: { kind: "flower", f: "#c2187a", bg: "#f8e1ef", pot: "#7b3f22" },
    desc: "Drought-tolerant climber with vivid magenta bracts. Ideal for compound walls and arches.",
    care: C("Water sparingly — once the topsoil is dry.", "Full sun is essential for colour.", "Sandy, well-drained soil.", "Low-nitrogen feed; too much nitrogen = fewer flowers."),
    tips: ["Slight water stress triggers more blooms.", "Train on a trellis for a hedge effect."] },
  { id: 105, name: "Marigold (Genda) — Orange", cat: "flowering", price: 49, mrp: 60, rating: 4.4, reviews: 240, stock: 300, sun: "Full Sun", type: "Outdoor", occasion: ["outdoor", "festival"], pot: "Small", pop: 95, added: "2026-09-25", art: { kind: "flower", f: "#ef8a12", bg: "#fdeed6", pot: "#b9572f" },
    desc: "Bright orange marigolds — the essential festival and decoration flower. Bulk pricing available.",
    care: C("Water at the base every 1–2 days.", "Full sun.", "Any well-drained garden soil.", "Light compost at planting is enough."),
    tips: ["Pinch the first bud for a bushier plant.", "Great companion plant — repels pests in vegetable beds."] },
  { id: 106, name: "Peace Lily", cat: "flowering", price: 349, mrp: 449, rating: 4.6, reviews: 154, stock: 32, sun: "Shade", type: "Indoor", occasion: ["indoor", "gifting"], pot: "Medium", pop: 88, added: "2026-07-08", art: { kind: "flower", f: "#ffffff", bg: "#e6efe9", pot: "#e9e4d8", c: "#e8df9a" },
    desc: "Elegant indoor flowering plant with white spathes; known to improve indoor air quality.",
    care: C("Water when the top inch is dry; it droops when thirsty.", "Bright indirect light; no direct sun.", "Peat-based potting mix.", "Diluted liquid feed every 6 weeks."),
    tips: ["Wipe leaves to keep them glossy.", "Brown tips = low humidity or tap-water salts."] },
  { id: 107, name: "Adenium (Desert Rose)", cat: "flowering", price: 399, mrp: 499, rating: 4.7, reviews: 76, stock: 0, sun: "Full Sun", type: "Outdoor", occasion: ["gifting"], pot: "Medium", pop: 76, added: "2026-04-17", art: { kind: "flower", f: "#ec5b8a", bg: "#fde6ee", pot: "#3d3d3d" },
    desc: "Grafted adenium with a sculptural caudex and pink blooms — a premium gifting plant.",
    care: C("Water only when soil is completely dry.", "Full sun, 6+ hours.", "Gritty cactus mix.", "Phosphorus-rich feed in growing season."),
    tips: ["Never let it sit in water.", "Reduce watering sharply in winter."] },
  { id: 108, name: "Chrysanthemum (Chamanti) — Yellow", cat: "flowering", price: 129, mrp: 159, rating: 4.5, reviews: 132, stock: 64, sun: "Partial Sun", type: "Outdoor", occasion: ["festival", "gifting"], pot: "Small", pop: 84, added: "2026-10-01", art: { kind: "flower", f: "#f2c21b", bg: "#fdf4d2", pot: "#b9572f" },
    desc: "Seasonal chamanti in full bud — a festive favourite for Dussehra and Diwali.",
    care: C("Keep evenly moist.", "Morning sun, afternoon shade.", "Rich potting mix.", "Feed every 2 weeks while blooming."),
    tips: ["Remove spent flowers to extend blooming."] },

  { id: 201, name: "Zinnia Mixed Colours — Seeds (50)", cat: "seeds", price: 59, mrp: 79, rating: 4.4, reviews: 210, stock: 500, sun: "Full Sun", type: "Outdoor", occasion: ["outdoor"], pot: "NA", pop: 86, added: "2026-08-02", art: { kind: "seed", f: "#e2475b", bg: "#fbe5e6" },
    desc: "Easy-to-grow zinnias in mixed colours. Germination in 5–7 days.",
    care: C("Keep soil moist until germination.", "Full sun.", "Seed-starting mix.", "Not needed until true leaves appear."),
    tips: ["Sow ¼ inch deep.", "Best sowing: Feb–Apr and Jul–Sep."] },
  { id: 202, name: "Sunflower Dwarf — Seeds (25)", cat: "seeds", price: 69, mrp: 89, rating: 4.6, reviews: 145, stock: 420, sun: "Full Sun", type: "Outdoor", occasion: ["outdoor"], pot: "NA", pop: 82, added: "2026-07-20", art: { kind: "seed", f: "#f0b419", bg: "#fdf3d4" },
    desc: "Dwarf sunflowers that grow to 2 ft — perfect for pots and balconies.",
    care: C("Water every 2 days.", "Full sun.", "Loose, fertile soil.", "Compost at sowing."),
    tips: ["Sow directly; seedlings dislike transplanting."] },
  { id: 203, name: "Tomato Hybrid — Seeds (100)", cat: "seeds", price: 49, mrp: 65, rating: 4.3, reviews: 330, stock: 650, sun: "Full Sun", type: "Outdoor", occasion: ["outdoor"], pot: "NA", pop: 90, added: "2026-02-11", art: { kind: "seed", f: "#d63a2a", bg: "#fbe2de" },
    desc: "High-yield hybrid tomato for kitchen gardens. Fruits in 60–70 days.",
    care: C("Even moisture; avoid wetting leaves.", "Full sun.", "Rich, well-drained soil.", "NPK 19:19:19 every 2 weeks after flowering."),
    tips: ["Stake plants early.", "Transplant at 4–5 weeks."] },
  { id: 204, name: "Tulsi (Holy Basil) — Seeds", cat: "seeds", price: 39, mrp: 49, rating: 4.7, reviews: 288, stock: 800, sun: "Full Sun", type: "Outdoor", occasion: ["outdoor", "festival"], pot: "NA", pop: 93, added: "2026-01-05", art: { kind: "seed", f: "#5a8f3c", bg: "#e5f0dd" },
    desc: "Rama tulsi seeds — sacred and medicinal. Easy germination in warm weather.",
    care: C("Mist daily until germination.", "Full sun.", "Light, sandy loam.", "Light compost monthly."),
    tips: ["Pinch flower spikes to keep leaves coming."] },
  { id: 205, name: "Petunia Grandiflora — Seeds", cat: "seeds", price: 89, mrp: 110, rating: 4.2, reviews: 64, stock: 15, sun: "Full Sun", type: "Outdoor", occasion: ["outdoor"], pot: "NA", pop: 62, added: "2026-09-12", art: { kind: "seed", f: "#8e4bc2", bg: "#efe4f8" },
    desc: "Large trumpet-shaped blooms in mixed shades — ideal winter flower for hanging baskets.",
    care: C("Bottom-water seedlings.", "Full sun.", "Fine seed mix.", "Half-strength feed weekly once established."),
    tips: ["Seeds are tiny — surface sow, don't cover."] },

  { id: 301, name: "Mango Sapling — Banganapalli (Grafted)", cat: "saplings", price: 449, mrp: 599, rating: 4.8, reviews: 221, stock: 40, sun: "Full Sun", type: "Outdoor", occasion: ["outdoor", "gifting"], pot: "Large", pop: 94, added: "2026-06-01", art: { kind: "tree", f: "#3d8a5f", bg: "#e2f0e6", fruit: "#f2b21b" },
    desc: "Grafted Banganapalli mango, 2–3 ft. Fruiting expected in 3–4 years.",
    care: C("Deep watering twice a week.", "Full sun.", "Deep, well-drained soil.", "FYM + NPK before monsoon."),
    tips: ["Remove flowers in the first 2 years to build the tree.", "Protect graft joint from damage."] },
  { id: 302, name: "Guava Sapling — Taiwan Pink", cat: "saplings", price: 299, mrp: 399, rating: 4.6, reviews: 118, stock: 26, sun: "Full Sun", type: "Outdoor", occasion: ["outdoor"], pot: "Large", pop: 85, added: "2026-08-10", art: { kind: "tree", f: "#4b9a55", bg: "#e4f2e4", fruit: "#9fcf5a" },
    desc: "Fast-growing, high-yielding pink guava — fruits within 12–18 months.",
    care: C("Water every 3–4 days.", "Full sun.", "Most soils, well drained.", "Organic manure quarterly."),
    tips: ["Prune to an open-centre shape."] },
  { id: 303, name: "Neem Sapling", cat: "saplings", price: 99, mrp: 129, rating: 4.5, reviews: 90, stock: 150, sun: "Full Sun", type: "Outdoor", occasion: ["outdoor", "gifting"], pot: "Medium", pop: 70, added: "2026-05-15", art: { kind: "tree", f: "#2f7a45", bg: "#e0efe3" },
    desc: "Hardy shade tree, popular for avenue planting and housewarming gifts.",
    care: C("Water weekly once established.", "Full sun.", "Tolerates poor soils.", "Rarely needed."),
    tips: ["Great for corporate and event tree-plantation drives."] },
  { id: 304, name: "Lemon Sapling — Kagzi", cat: "saplings", price: 249, mrp: 299, rating: 4.4, reviews: 73, stock: 5, sun: "Full Sun", type: "Outdoor", occasion: ["outdoor"], pot: "Medium", pop: 74, added: "2026-09-01", art: { kind: "tree", f: "#3f8f4f", bg: "#e8f3e0", fruit: "#f2df3c" },
    desc: "Container-friendly lemon that fruits generously — great for terrace gardens.",
    care: C("Water when topsoil is dry.", "Full sun.", "Slightly acidic, well-drained soil.", "Citrus feed every 6 weeks."),
    tips: ["Add Epsom salt occasionally to prevent yellowing."] },
  { id: 305, name: "Areca Palm", cat: "saplings", price: 399, mrp: 549, rating: 4.6, reviews: 201, stock: 38, sun: "Partial Sun", type: "Indoor", occasion: ["indoor", "gifting"], pot: "Large", pop: 89, added: "2026-07-25", art: { kind: "tree", f: "#4f9e5e", bg: "#e6f1e8", palm: true },
    desc: "Lush indoor palm for living rooms and offices — a top corporate gifting choice.",
    care: C("Water twice a week.", "Bright indirect light.", "Well-drained potting mix.", "Monthly balanced feed."),
    tips: ["Mist leaves in dry months."] },

  { id: 401, name: "Terracotta Pot — 10 inch", cat: "pots", price: 189, mrp: 229, rating: 4.5, reviews: 162, stock: 90, sun: "NA", type: "Outdoor", occasion: ["outdoor"], pot: "Large", pop: 81, added: "2026-03-30", art: { kind: "pot", f: "#b9572f", bg: "#f8e6dc" },
    desc: "Hand-made breathable clay pot with drainage hole.", care: null, tips: ["Soak new clay pots for an hour before planting."] },
  { id: 402, name: "Ceramic Planter — Matte White", cat: "pots", price: 549, mrp: 699, rating: 4.7, reviews: 58, stock: 22, sun: "NA", type: "Indoor", occasion: ["indoor", "gifting"], pot: "Medium", pop: 72, added: "2026-09-18", art: { kind: "pot", f: "#f1eee6", bg: "#ece8de" },
    desc: "Minimal ceramic planter with saucer — pairs well with peace lily and snake plants.", care: null, tips: [] },
  { id: 403, name: "Premium Potting Mix — 5 kg", cat: "pots", price: 199, mrp: 249, rating: 4.6, reviews: 274, stock: 210, sun: "NA", type: "Outdoor", occasion: ["outdoor", "indoor"], pot: "NA", pop: 92, added: "2026-02-20", art: { kind: "bag", f: "#6b4a2e", bg: "#efe6da" },
    desc: "Ready-to-use blend of cocopeat, vermicompost, perlite and red soil.", care: null, tips: ["Suitable for all flowering and vegetable plants."] },

  { id: 501, name: "Watering Can — 5 L", cat: "accessories", price: 299, mrp: 349, rating: 4.3, reviews: 88, stock: 44, sun: "NA", type: "Outdoor", occasion: ["outdoor"], pot: "NA", pop: 66, added: "2026-04-04", art: { kind: "can", f: "#2f6fa3", bg: "#e1ecf6" },
    desc: "Lightweight can with detachable rose head for gentle watering.", care: null, tips: [] },
  { id: 502, name: "Vermicompost — 2 kg", cat: "accessories", price: 129, mrp: 159, rating: 4.7, reviews: 350, stock: 260, sun: "NA", type: "Outdoor", occasion: ["outdoor", "indoor"], pot: "NA", pop: 97, added: "2026-01-22", art: { kind: "bag", f: "#4a3b2a", bg: "#ece4d8" },
    desc: "100% organic earthworm compost — improves soil structure and flowering.", care: null, tips: ["Mix 1 handful per 8-inch pot every month."] },
  { id: 503, name: "Garden Tool Kit (3 pcs)", cat: "accessories", price: 349, mrp: 449, rating: 4.4, reviews: 61, stock: 3, sun: "NA", type: "Outdoor", occasion: ["gifting"], pot: "NA", pop: 58, added: "2026-08-28", art: { kind: "can", f: "#3d8a5f", bg: "#e2f0e6" },
    desc: "Trowel, transplanter and cultivator with comfortable grips.", care: null, tips: [] },
  { id: 504, name: "Diwali Gift Pack — Mogra + Ceramic Pot", cat: "accessories", price: 699, mrp: 899, rating: 4.9, reviews: 44, stock: 30, sun: "Full Sun", type: "Indoor", occasion: ["gifting", "festival"], pot: "Medium", pop: 87, added: "2026-10-12", festival: true, art: { kind: "flower", f: "#ffffff", bg: "#fbf0d6", pot: "#d99a1b", c: "#f2d45c" },
    desc: "Festive gift pack: Arabian jasmine in a gold-finish ceramic pot, with a greeting card and care guide.", care: C("Water regularly.", "5 hours of sun.", "Pre-filled potting mix.", "Feed included."), tips: ["Custom message cards available for bulk orders."] },
];

const REVIEWS = [
  { name: "Lakshmi P.", city: "Vijayawada", rating: 5, date: "2026-10-04", text: "Plants arrived healthy and well packed. The mogra already has buds!" },
  { name: "Ravi Teja K.", city: "Guntur", rating: 5, date: "2026-09-21", text: "Ordered 200 marigold pots for my sister's wedding. Delivered on the function date as promised." },
  { name: "Sowmya R.", city: "Hyderabad", rating: 4, date: "2026-09-02", text: "Good quality saplings and very helpful care instructions. Delivery took one extra day." },
  { name: "Mohammed A.", city: "Eluru", rating: 5, date: "2026-08-17", text: "The grafted mango sapling is strong and healthy. Will order again." },
];

const POSTS = [
  { id: 1, title: "How to get more blooms from your rose plant", cat: "Flowering", read: 6, date: "2026-10-10", art: { kind: "flower", f: "#c8243c", bg: "#fbe3e6", pot: "#b9572f" },
    excerpt: "Deadheading, pruning and feeding — the three habits that keep roses flowering all year.",
    body: [["Give it sun", "Roses need at least six hours of direct sunlight. A south- or east-facing balcony works best."], ["Deadhead regularly", "Snip spent flowers just above a five-leaf set. This tells the plant to produce new buds instead of seeds."], ["Feed on a schedule", "Apply organic manure monthly and a phosphorus-rich feed when buds form."], ["Prune after the monsoon", "A hard prune in October–November resets the plant for a strong winter flush."]] },
  { id: 2, title: "Monsoon care: preventing root rot in potted plants", cat: "Plant Care", read: 5, date: "2026-07-18", art: { kind: "pot", f: "#b9572f", bg: "#e1ecf6" },
    excerpt: "Excess rain is the number-one killer of potted plants. Here is how to protect yours.",
    body: [["Check drainage", "Every pot needs a drainage hole. Raise pots on feet so water can escape."], ["Water less", "Skip scheduled watering if the topsoil is still damp."], ["Use a fungicide", "A light drench of copper-based fungicide prevents fungal root rot."]] },
  { id: 3, title: "A beginner's guide to starting seeds at home", cat: "Seeds", read: 7, date: "2026-06-02", art: { kind: "seed", f: "#e0a526", bg: "#fbf0d6" },
    excerpt: "Trays, mix, moisture and light — everything you need to raise healthy seedlings.",
    body: [["Use a seed-starting mix", "Garden soil is too heavy. A cocopeat-based mix keeps seeds moist and airy."], ["Sow at the right depth", "A good rule: sow at twice the seed's diameter. Tiny seeds are surface-sown."], ["Harden off", "Before transplanting, place seedlings outdoors for a few hours daily for a week."]] },
  { id: 4, title: "Best plants to gift this Diwali", cat: "Festivals", read: 4, date: "2026-10-15", art: { kind: "flower", f: "#ef8a12", bg: "#fdeed6", pot: "#d99a1b" },
    excerpt: "Long-lasting, auspicious and low-maintenance — our top festive picks.",
    body: [["Mogra in a ceramic pot", "Fragrant, auspicious and easy to care for."], ["Areca palm", "Ideal for corporate gifting — elegant and air-purifying."], ["Tulsi", "Sacred, medicinal and meaningful for every home."]] },
  { id: 5, title: "Growing fruit trees in containers", cat: "Saplings", read: 8, date: "2026-05-11", art: { kind: "tree", f: "#3f8f4f", bg: "#e8f3e0", fruit: "#f2df3c" },
    excerpt: "Lemon, guava and dwarf mango can all thrive on a terrace with the right pot.",
    body: [["Pick the right pot", "Start with at least an 18-inch container and size up every two years."], ["Feed generously", "Container trees exhaust nutrients quickly; feed every 4–6 weeks."]] },
  { id: 6, title: "Seasonal gardening calendar for Andhra Pradesh & Telangana", cat: "Plant Care", read: 6, date: "2026-04-01", art: { kind: "can", f: "#2f6fa3", bg: "#e1ecf6" },
    excerpt: "What to sow and plant each month, tuned for our local climate.",
    body: [["Jan – Mar", "Sow summer flowers: zinnia, sunflower, portulaca."], ["Jun – Aug", "Monsoon planting: saplings and fruit trees."], ["Sep – Nov", "Winter flowers: petunia, marigold, chrysanthemum."]] },
];

const FESTIVALS = [
  { id: "diwali", name: "Diwali Green Festival", dates: "Oct 25 – Nov 10, 2026", ends: "2026-11-10T23:59:00", code: "DIWALI20", pct: 20, min: 499, desc: "20% off on gift packs, flowering plants and ceramic planters.", active: true, color: ["#7a3d12", "#d99a1b"] },
  { id: "karthika", name: "Karthika Masam Special", dates: "Nov 10 – Dec 9, 2026", ends: "2026-12-09T23:59:00", code: "KARTHIKA10", pct: 10, min: 299, desc: "Tulsi, marigold and pooja plants at special prices.", active: false, color: ["#5a2a6b", "#c2187a"] },
  { id: "sankranti", name: "Sankranti Harvest Sale", dates: "Jan 10 – Jan 17, 2027", ends: "2027-01-17T23:59:00", code: "SANKRANTI15", pct: 15, min: 599, desc: "Seeds and saplings for the new season.", active: false, color: ["#1a4430", "#d99a1b"] },
  { id: "ugadi", name: "Ugadi New Beginnings", dates: "Mar 2027", ends: "2027-03-31T23:59:00", code: "UGADI15", pct: 15, min: 499, desc: "Mango saplings and neem trees for the Telugu New Year.", active: false, color: ["#22573d", "#5fa77c"] },
];

const COUPONS = {
  DIWALI20: { pct: 20, min: 499, label: "Diwali Green Festival — 20% off" },
  WELCOME10: { pct: 10, min: 0, label: "First order — 10% off" },
  FREESHIP: { ship: true, min: 499, label: "Free delivery" },
};

const EVENT_TYPES = [
  { id: "wedding", name: "Weddings", desc: "Mandap décor, return gifts, entrance arrangements" },
  { id: "housewarming", name: "Housewarming (Gruhapravesam)", desc: "Auspicious plants, tulsi, gift saplings" },
  { id: "corporate", name: "Corporate Events", desc: "Desk plants, branded gift packs, office greening" },
  { id: "temple", name: "Temple Functions", desc: "Flowers, marigold & jasmine in bulk, tree plantation" },
  { id: "school", name: "Schools & Plantation Drives", desc: "Saplings in volume for Vana Mahotsavam drives" },
  { id: "other", name: "Other Occasions", desc: "Birthdays, anniversaries, community events" },
];

const BULK_TIERS = [
  { range: "50 – 199 units", off: "10%" },
  { range: "200 – 499 units", off: "15%" },
  { range: "500+ units", off: "20%+" },
];

/* ---------- Admin sample data ---------- */
const ADMIN_ORDERS = [
  { id: "SVN-10482", date: "2026-10-23 09:41", customer: "Lakshmi Prasanna", phone: "98xxxxxx12", items: 3, total: 677, pay: "UPI", status: "new", city: "Vijayawada" },
  { id: "SVN-10481", date: "2026-10-23 08:15", customer: "Ravi Teja K.", phone: "97xxxxxx40", items: 1, total: 449, pay: "COD", status: "new", city: "Guntur" },
  { id: "SVN-10480", date: "2026-10-22 19:02", customer: "Sowmya Reddy", phone: "90xxxxxx88", items: 5, total: 1284, pay: "Card", status: "processing", city: "Vijayawada" },
  { id: "SVN-10479", date: "2026-10-22 16:30", customer: "Mohammed Arif", phone: "99xxxxxx07", items: 2, total: 598, pay: "UPI", status: "dispatched", city: "Eluru" },
  { id: "SVN-10478", date: "2026-10-22 11:47", customer: "Padma Latha", phone: "94xxxxxx31", items: 4, total: 916, pay: "Net Banking", status: "dispatched", city: "Vijayawada" },
  { id: "SVN-10477", date: "2026-10-21 18:20", customer: "Kiran Kumar", phone: "96xxxxxx55", items: 1, total: 229, pay: "UPI", status: "delivered", city: "Mangalagiri" },
  { id: "SVN-10476", date: "2026-10-21 10:05", customer: "Anusha V.", phone: "93xxxxxx19", items: 6, total: 1842, pay: "UPI", status: "delivered", city: "Vijayawada" },
  { id: "SVN-10475", date: "2026-10-20 15:12", customer: "Srinivas Rao", phone: "98xxxxxx63", items: 2, total: 378, pay: "COD", status: "cancelled", city: "Tenali" },
  { id: "SVN-10474", date: "2026-10-20 09:30", customer: "Divya Sri", phone: "91xxxxxx77", items: 3, total: 747, pay: "Card", status: "delivered", city: "Guntur" },
  { id: "SVN-10473", date: "2026-10-19 17:44", customer: "Venkatesh B.", phone: "95xxxxxx02", items: 8, total: 2390, pay: "UPI", status: "delivered", city: "Vijayawada" },
];

const ADMIN_QUOTES = [
  { id: "BQ-2031", event: "Wedding", name: "Ravi Teja K.", date: "2026-11-14", qty: 400, items: "Marigold pots, jasmine garlands, mandap plants", budget: "₹40,000 – 60,000", status: "new" },
  { id: "BQ-2030", event: "Corporate", name: "Infra Solutions Pvt Ltd", date: "2026-11-01", qty: 150, items: "Areca palm gift packs with branded cards", budget: "₹60,000+", status: "quoted", quote: 58500 },
  { id: "BQ-2029", event: "Housewarming", name: "Padma Latha", date: "2026-10-30", qty: 80, items: "Tulsi + neem saplings as return gifts", budget: "₹10,000 – 15,000", status: "confirmed", quote: 11200 },
  { id: "BQ-2028", event: "School", name: "ZP High School, Penamaluru", date: "2026-12-05", qty: 600, items: "Neem, guava saplings for plantation drive", budget: "₹50,000", status: "new" },
];

const ADMIN_CUSTOMERS = [
  { name: "Venkatesh B.", city: "Vijayawada", orders: 14, spent: 18450, since: "2026-01" },
  { name: "Anusha V.", city: "Vijayawada", orders: 9, spent: 11220, since: "2026-02" },
  { name: "Lakshmi Prasanna", city: "Vijayawada", orders: 7, spent: 6380, since: "2026-03" },
  { name: "Sowmya Reddy", city: "Vijayawada", orders: 6, spent: 7104, since: "2026-04" },
  { name: "Mohammed Arif", city: "Eluru", orders: 5, spent: 4870, since: "2026-05" },
  { name: "Divya Sri", city: "Guntur", orders: 4, spent: 2930, since: "2026-06" },
];

const MONTHLY_REVENUE = [
  { m: "May", v: 142000 }, { m: "Jun", v: 168000 }, { m: "Jul", v: 191000 },
  { m: "Aug", v: 176000 }, { m: "Sep", v: 214000 }, { m: "Oct", v: 287000 },
];
