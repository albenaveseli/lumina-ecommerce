// ============================================
// LUMINA — Product Detail Page
// ============================================

const params = new URLSearchParams(window.location.search);
const productId = parseInt(params.get('id'));
const product = PRODUCTS.find(p => p.id === productId);

let detailQty = 1;

if (!product) {
  document.getElementById('product-detail').innerHTML =
    `<div style="padding:4rem;text-align:center;color:var(--gray)">
      <p>Produkti nuk u gjet.</p>
      <a href="index.html" style="color:var(--accent)">← Kthehu</a>
    </div>`;
} else {
  document.title = `${product.name} — LUMINA`;
  renderDetail();
  renderRecommended();
}

function renderDetail() {
  const container = document.getElementById('product-detail');
  const specsHTML = product.specs.map(([k, v]) =>
    `<div class="spec-row"><span>${k}</span><span>${v}</span></div>`
  ).join('');

  container.innerHTML = `
    <div class="detail-img-box">
      ${getProductSVG(product.svgType, product.color, 180)}
    </div>
    <div class="detail-info">
      <div class="detail-category">${product.categoryLabel}</div>
      <h1 class="detail-title">${product.name}</h1>
      <div class="detail-stars">${getStars(product.stars)} &nbsp;<span style="color:var(--gray);font-size:0.85rem">(${product.stars}.0 — 124 vlerësime)</span></div>
      <div class="detail-price">
        ${product.oldPrice ? `<span class="old">€${product.oldPrice.toLocaleString()}</span>` : ''}
        €${product.price.toLocaleString()}
      </div>
      <p class="detail-desc">${product.desc}</p>

      <div class="detail-specs">
        <h4>SPECIFIKIMET</h4>
        ${specsHTML}
      </div>

      <div class="detail-qty">
        <label>Sasia:</label>
        <div class="qty-control">
          <button onclick="changeDetailQty(-1)">−</button>
          <input type="number" id="detail-qty-input" value="1" min="1" max="10" readonly>
          <button onclick="changeDetailQty(1)">+</button>
        </div>
      </div>

      <div class="detail-actions">
        <button class="btn-add-detail" onclick="addDetailToCart()">
          + Shto në Shportë
        </button>
        <button class="btn-wishlist" title="Shto te të preferuarat">♡</button>
      </div>

      <div style="margin-top:1.5rem;display:flex;gap:1rem;flex-wrap:wrap">
        <span style="font-size:0.8rem;color:var(--gray)">✓ Stok disponibël</span>
        <span style="font-size:0.8rem;color:var(--gray)">✓ Dërgim falas mbi €100</span>
        <span style="font-size:0.8rem;color:var(--gray)">✓ Garanci 2 vjet</span>
      </div>
    </div>`;
}

function changeDetailQty(delta) {
  detailQty = Math.max(1, Math.min(10, detailQty + delta));
  document.getElementById('detail-qty-input').value = detailQty;
}

function addDetailToCart() {
  for (let i = 0; i < detailQty; i++) addToCart(product.id);
}

function renderRecommended() {
  const grid = document.getElementById('recommended-grid');
  if (!grid) return;

  const others = PRODUCTS.filter(p => p.id !== productId).slice(0, 4);
  others.forEach(p => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
      <div class="product-card-img" onclick="location.href='product.html?id=${p.id}'">
        ${p.badge ? `<span class="product-badge ${p.badge}">${p.badge === 'new' ? 'I ri' : 'Zbritje'}</span>` : ''}
        ${getProductSVG(p.svgType, p.color)}
      </div>
      <div class="product-card-body" onclick="location.href='product.html?id=${p.id}'">
        <div class="product-category">${p.categoryLabel}</div>
        <div class="product-stars">${getStars(p.stars)}</div>
        <div class="product-name">${p.name}</div>
        <div class="product-desc">${p.desc.substring(0, 80)}…</div>
      </div>
      <div class="product-footer" style="padding:0 1.2rem 1.2rem">
        <div class="product-price">€${p.price.toLocaleString()}</div>
        <button class="btn-add" onclick="event.stopPropagation();addToCart(${p.id})">+ Shporta</button>
      </div>`;
    grid.appendChild(card);
  });
}
