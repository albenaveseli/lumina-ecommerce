// ============================================
// LUMINA — Mock Product Data
// ============================================

const PRODUCTS = [
  {
    id: 1,
    name: "Lumina X Pro",
    category: "telefon",
    categoryLabel: "Telefon",
    price: 899,
    oldPrice: 1099,
    badge: "sale",
    stars: 5,
    desc: "Telefoni flagship me kamera 200MP, ekran AMOLED 6.8\", bateri 5000mAh dhe procesor Snapdragon 8 Gen 3.",
    specs: [
      ["Ekrani", "6.8\" AMOLED 120Hz"],
      ["Kamera", "200MP + 50MP + 12MP"],
      ["RAM", "12 GB"],
      ["Ruajtja", "256 GB"],
      ["Bateria", "5000 mAh"],
      ["OS", "Android 15"]
    ],
    color: "#0066cc",
    svgType: "phone"
  },
  {
    id: 2,
    name: "Lumina Air 14",
    category: "laptop",
    categoryLabel: "Laptop",
    price: 1299,
    oldPrice: null,
    badge: "new",
    stars: 5,
    desc: "Laptop ultra-thin 14\" me procesor M4, 16GB RAM, SSD 512GB dhe bateri 18 orë. Vetëm 1.2 kg.",
    specs: [
      ["Ekrani", "14\" Liquid Retina"],
      ["Procesori", "Apple M4"],
      ["RAM", "16 GB"],
      ["SSD", "512 GB"],
      ["Bateria", "18 orë"],
      ["Pesha", "1.2 kg"]
    ],
    color: "#00aaff",
    svgType: "laptop"
  },
  {
    id: 3,
    name: "Lumina Watch 3",
    category: "aksesor",
    categoryLabel: "Aksesor",
    price: 349,
    oldPrice: 399,
    badge: "sale",
    stars: 4,
    desc: "Orë inteligjente me monitorim të shëndetit 24/7, GPS, rezistencë ndaj ujit 50m dhe bateri 7 ditë.",
    specs: [
      ["Ekrani", "1.9\" AMOLED"],
      ["GPS", "Po, i integruar"],
      ["Rezistenca", "50m ujë"],
      ["Bateria", "7 ditë"],
      ["Sensori", "SpO2, ECG, HR"],
      ["Lidhja", "Bluetooth 5.3"]
    ],
    color: "#7b4fff",
    svgType: "watch"
  },
  {
    id: 4,
    name: "Lumina Buds Pro",
    category: "aksesor",
    categoryLabel: "Aksesor",
    price: 199,
    oldPrice: null,
    badge: "new",
    stars: 5,
    desc: "Kufje me anulim aktiv të zhurmës (ANC), bateri 30 orë, audio Hi-Fi dhe rezistencë IPX5.",
    specs: [
      ["Lloji", "In-ear TWS"],
      ["ANC", "Po, -40dB"],
      ["Bateria", "8+22 orë"],
      ["Lidhja", "Bluetooth 5.3"],
      ["Rezistenca", "IPX5"],
      ["Codec", "LDAC, AAC"]
    ],
    color: "#ff6b35",
    svgType: "buds"
  },
  {
    id: 5,
    name: "Lumina Tab X",
    category: "laptop",
    categoryLabel: "Tablet",
    price: 749,
    oldPrice: 849,
    badge: "sale",
    stars: 4,
    desc: "Tablet 11\" me ekran OLED 144Hz, stilolaps dhe tastierë të përfshira. Perfekte për punë dhe art.",
    specs: [
      ["Ekrani", "11\" OLED 144Hz"],
      ["Procesori", "Snapdragon 8 Gen 2"],
      ["RAM", "8 GB"],
      ["Ruajtja", "256 GB"],
      ["Kamera", "13MP + 8MP front"],
      ["Bateria", "10090 mAh"]
    ],
    color: "#00c48c",
    svgType: "tablet"
  },
  {
    id: 6,
    name: "Lumina S24",
    category: "telefon",
    categoryLabel: "Telefon",
    price: 549,
    oldPrice: null,
    badge: null,
    stars: 4,
    desc: "Telefon mid-range me ekran Super AMOLED 6.4\", kamera 50MP dhe bateri 4500mAh. Raport çmim-cilësi i jashtëzakonshëm.",
    specs: [
      ["Ekrani", "6.4\" Super AMOLED"],
      ["Kamera", "50MP + 12MP + 5MP"],
      ["RAM", "8 GB"],
      ["Ruajtja", "128 GB"],
      ["Bateria", "4500 mAh"],
      ["Karikimi", "45W fast charge"]
    ],
    color: "#ff4466",
    svgType: "phone"
  },
  {
    id: 7,
    name: "Lumina ProBook 16",
    category: "laptop",
    categoryLabel: "Laptop",
    price: 1799,
    oldPrice: 1999,
    badge: "sale",
    stars: 5,
    desc: "Laptop profesional 16\" me RTX 4060, Intel Core i9, 32GB RAM dhe ekran OLED 4K. Për zhvillues dhe dizajnerë.",
    specs: [
      ["Ekrani", "16\" OLED 4K 120Hz"],
      ["Procesori", "Intel Core i9-14900H"],
      ["GPU", "NVIDIA RTX 4060"],
      ["RAM", "32 GB DDR5"],
      ["SSD", "1 TB NVMe"],
      ["Pesha", "2.1 kg"]
    ],
    color: "#ffc107",
    svgType: "laptop"
  },
  {
    id: 8,
    name: "Lumina Charge 65W",
    category: "aksesor",
    categoryLabel: "Aksesor",
    price: 49,
    oldPrice: null,
    badge: null,
    stars: 4,
    desc: "Karikues 65W GaN me 3 porta (2x USB-C + 1x USB-A). Karikohet çfarëdo laptopi, telefoni apo tableti.",
    specs: [
      ["Fuqia", "65W total"],
      ["Portat", "2x USB-C, 1x USB-A"],
      ["Teknologjia", "GaN III"],
      ["Standardi", "PD 3.0, QC 4+"],
      ["Madhësia", "Kompakte"],
      ["Siguria", "OVP, OCP, SCP"]
    ],
    color: "#888",
    svgType: "charger"
  }
];

// SVG ilustrimet per karte produkti
function getProductSVG(type, color, size = 120) {
  const c = color;
  const s = size;
  switch(type) {
    case 'phone': return `
      <svg viewBox="0 0 120 180" width="${s}" height="${s*1.5}">
        <rect x="20" y="8" width="80" height="164" rx="14" fill="${c}" opacity="0.15"/>
        <rect x="24" y="12" width="72" height="156" rx="11" fill="${c}" opacity="0.25"/>
        <rect x="28" y="22" width="64" height="110" rx="6" fill="#0a1428" opacity="0.8"/>
        <rect x="32" y="26" width="56" height="102" rx="4" fill="${c}" opacity="0.1"/>
        <circle cx="60" cy="153" r="7" fill="${c}" opacity="0.5"/>
        <rect x="45" y="15" width="30" height="4" rx="2" fill="${c}" opacity="0.4"/>
        <circle cx="60" cy="76" r="20" fill="${c}" opacity="0.2"/>
        <circle cx="60" cy="76" r="12" fill="${c}" opacity="0.3"/>
        <circle cx="60" cy="76" r="5" fill="${c}" opacity="0.6"/>
      </svg>`;
    case 'laptop': return `
      <svg viewBox="0 0 180 130" width="${s*1.5}" height="${s}">
        <rect x="20" y="15" width="140" height="95" rx="8" fill="${c}" opacity="0.15"/>
        <rect x="24" y="19" width="132" height="87" rx="6" fill="#0a1428" opacity="0.9"/>
        <rect x="28" y="23" width="124" height="79" rx="4" fill="${c}" opacity="0.08"/>
        <rect x="5" y="110" width="170" height="12" rx="4" fill="${c}" opacity="0.2"/>
        <rect x="65" y="110" width="50" height="8" rx="2" fill="${c}" opacity="0.15"/>
        <rect x="50" y="60" width="80" height="6" rx="2" fill="${c}" opacity="0.2"/>
        <rect x="60" y="72" width="60" height="6" rx="2" fill="${c}" opacity="0.15"/>
        <circle cx="90" cy="46" r="16" fill="${c}" opacity="0.2"/>
        <circle cx="90" cy="46" r="8" fill="${c}" opacity="0.3"/>
      </svg>`;
    case 'watch': return `
      <svg viewBox="0 0 100 140" width="${s*0.8}" height="${s*1.2}">
        <rect x="35" y="5" width="30" height="20" rx="4" fill="${c}" opacity="0.3"/>
        <rect x="35" y="115" width="30" height="20" rx="4" fill="${c}" opacity="0.3"/>
        <rect x="15" y="25" width="70" height="90" rx="20" fill="${c}" opacity="0.2"/>
        <rect x="19" y="29" width="62" height="82" rx="17" fill="#0a1428" opacity="0.9"/>
        <rect x="23" y="33" width="54" height="74" rx="14" fill="${c}" opacity="0.1"/>
        <circle cx="50" cy="70" r="24" fill="${c}" opacity="0.12"/>
        <text x="50" y="65" text-anchor="middle" fill="${c}" font-size="14" font-weight="bold" opacity="0.8">10</text>
        <text x="50" y="80" text-anchor="middle" fill="${c}" font-size="8" opacity="0.5">09:41</text>
        <line x1="50" y1="70" x2="50" y2="54" stroke="${c}" stroke-width="2" opacity="0.6"/>
        <line x1="50" y1="70" x2="60" y2="70" stroke="${c}" stroke-width="2" opacity="0.4"/>
      </svg>`;
    case 'buds': return `
      <svg viewBox="0 0 140 120" width="${s*1.2}" height="${s}">
        <rect x="20" y="20" width="100" height="80" rx="20" fill="${c}" opacity="0.12"/>
        <ellipse cx="45" cy="60" rx="18" ry="24" fill="${c}" opacity="0.2"/>
        <ellipse cx="45" cy="60" rx="12" ry="16" fill="#0a1428" opacity="0.9"/>
        <circle cx="45" cy="60" r="6" fill="${c}" opacity="0.4"/>
        <ellipse cx="95" cy="60" rx="18" ry="24" fill="${c}" opacity="0.2"/>
        <ellipse cx="95" cy="60" rx="12" ry="16" fill="#0a1428" opacity="0.9"/>
        <circle cx="95" cy="60" r="6" fill="${c}" opacity="0.4"/>
        <line x1="63" y1="60" x2="77" y2="60" stroke="${c}" stroke-width="1.5" opacity="0.3" stroke-dasharray="3 2"/>
      </svg>`;
    case 'tablet': return `
      <svg viewBox="0 0 140 180" width="${s}" height="${s*1.3}">
        <rect x="15" y="10" width="110" height="160" rx="14" fill="${c}" opacity="0.15"/>
        <rect x="19" y="14" width="102" height="152" rx="11" fill="#0a1428" opacity="0.9"/>
        <rect x="23" y="18" width="94" height="144" rx="8" fill="${c}" opacity="0.08"/>
        <circle cx="70" cy="158" r="6" fill="${c}" opacity="0.4"/>
        <rect x="40" y="60" width="60" height="6" rx="2" fill="${c}" opacity="0.2"/>
        <rect x="50" y="72" width="40" height="6" rx="2" fill="${c}" opacity="0.15"/>
        <circle cx="70" cy="42" r="14" fill="${c}" opacity="0.2"/>
        <circle cx="70" cy="42" r="7" fill="${c}" opacity="0.3"/>
      </svg>`;
    case 'charger': return `
      <svg viewBox="0 0 120 120" width="${s}" height="${s}">
        <rect x="25" y="15" width="70" height="80" rx="14" fill="${c}" opacity="0.2"/>
        <rect x="29" y="19" width="62" height="72" rx="11" fill="#0a1428" opacity="0.9"/>
        <rect x="50" y="8" width="8" height="12" rx="2" fill="${c}" opacity="0.5"/>
        <rect x="62" y="8" width="8" height="12" rx="2" fill="${c}" opacity="0.5"/>
        <circle cx="60" cy="55" r="16" fill="${c}" opacity="0.15"/>
        <path d="M58 44 L52 57 L58 57 L56 68 L66 53 L60 53 Z" fill="${c}" opacity="0.6"/>
        <rect x="35" y="97" width="50" height="8" rx="4" fill="${c}" opacity="0.3"/>
      </svg>`;
    default: return `<svg viewBox="0 0 100 100" width="${s}" height="${s}"><circle cx="50" cy="50" r="40" fill="${c}" opacity="0.2"/></svg>`;
  }
}

function getStars(n) {
  return '★'.repeat(n) + '☆'.repeat(5-n);
}
