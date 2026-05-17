
#  Lumina Electronics — E-commerce Prototype

Prototip i dyqanit online për elektronikë premium, i implementuar me HTML5, CSS3 dhe JavaScript, i hostuar në Microsoft Azure Storage.

---

##  Live Demo

> **Azure URL:** `[https://luminaecommerce.z6.web.core.windows.net/](https://luminaecommerce.z28.web.core.windows.net/index.html)`

---

##  Përshkrimi i Projektit

**Lumina Electronics** është një prototip i dyqanit online që demonstron funksionalitetet kryesore të një platfome e-commerce moderne. Projekti u realizua si pjesë e **Detyrës 14 — Static Website** në lëndën **Cloud Computing** në Fakultetin e Inxhinierisë Elektrike dhe Kompjuterike, Universiteti i Prishtinës "Hasan Prishtina".

Projekti përmban faqe produktesh, shportë blerjeje interaktive dhe proces checkout me simulim transaksioni, duke përdorur të dhëna mock dhe ilustrime SVG për demonstrim.

---

##  Karakteristikat

-  **8 produkte mock** me faqe individuale të detajuara
-  **Filtrim sipas kategorisë** — Telefona / Laptopë / Aksesore
-  **Shopping cart interaktiv** me sidebar dhe localStorage
-  **Kontrolle sasi** (+ / −) dhe fshirje produkti
-  **Checkout 3-hap** — Të dhënat → Dërgesa → Pagesa
-  **3 metoda pagese** — Kartë krediti / PayPal / Para në dorë
-  **Kode promovuese** — `LUMINA10`, `STUDENT20`, `TECH15`
-  **Simulim transaksioni** me numër unik porosie
-  **Dizajn responsiv** për mobile, tablet dhe desktop
-  **localStorage** — shporta ruhet pas mbylljes së browser-it

---

## Struktura e Skedarëve

```
lumina-ecommerce/
├── index.html              ← Faqja kryesore me listën e produkteve
├── product.html            ← Faqja individuale e produktit
├── checkout.html           ← Procesi i checkout (3 hapa)
├── css/
│   └── style.css           ← Të gjitha stilet (dark theme)
├── js/
│   ├── products.js         ← Mock data për 8 produkte + SVG
│   ├── cart.js             ← Menaxhimi i shportës + localStorage
│   ├── main.js             ← Faqja kryesore + filtrim
│   ├── product-detail.js   ← Faqja e detajit të produktit
│   └── checkout.js         ← Procesi i checkout + simulimi
└── README.md
```

---

## 🛒 Produktet Mock

| Produkti | Kategoria | Çmimi |
|---|---|---|
| Lumina X Pro | Telefon | €899 |
| Lumina S24 | Telefon | €549 |
| Lumina Air 14 | Laptop | €1,299 |
| Lumina ProBook 16 | Laptop | €1,799 |
| Lumina Tab X | Tablet | €749 |
| Lumina Watch 3 | Aksesor | €349 |
| Lumina Buds Pro | Aksesor | €199 |
| Lumina Charge 65W | Aksesor | €49 |

---

##  Kode Promovuese

| Kodi | Zbritja |
|---|---|
| `LUMINA10` | 10% zbritje |
| `STUDENT20` | 20% zbritje |
| `TECH15` | 15% zbritje |

---

##  Deployment në Azure Storage

### Hapi 1 — Krijo Storage Account
1. Shko te [portal.azure.com](https://portal.azure.com)
2. **+ Create a resource** → "Storage account"
3. Emri: `luminaecommerce` · Region: `West Europe` · Plan: `Standard LRS`
4. **Review + Create** → **Create**

### Hapi 2 — Aktivizo Static Website
1. Storage Account → **Data management** → **Static website**
2. Status: **Enabled**
3. Index document: `index.html`
4. Error document: `index.html`
5. **Save** → kopjo **Primary endpoint URL**

### Hapi 3 — Ngarko skedarët
1. **Storage browser** → **Blob containers** → **`$web`**
2. Ngarko `index.html`, `product.html`, `checkout.html` direkt
3. Krijo dosjen **`css/`** → ngarko `style.css` brenda
4. Krijo dosjen **`js/`** → ngarko të 5 skedarët JS brenda

### Hapi 4 — Testo
Hap Primary endpoint URL — duhet të shohësh dyqanin live 

---

## 🛠 Teknologjitë e Përdorura

| Teknologjia | Përdorimi |
|---|---|
| HTML5 | Struktura e faqeve |
| CSS3 | Stilizimi dhe dizajni dark theme |
| JavaScript (Vanilla) | Interaktiviteti dhe logjika |
| localStorage | Ruajtja e shportës |
| Azure Storage | Hosting i website-it statik |
| SVG | Ilustrimet e produkteve |
| Google Fonts | Fontet Syne dhe DM Sans |

---


## 📄 Licenca

Projekt akademik — realized për qëllime edukative në kuadër të lëndës Cloud Computing.
