// ============================================
// LUMINA — Main Page JS
// ============================================

function renderProducts(filter = 'all') {
  const grid = document.getElementById('products-grid');
  if (!grid) return;
  grid.innerHTML = '';

  const filtered = filter === 'all'
    ? PRODUCTS
    : PRODUCTS.filter(p => p.category === filter);

  filtered.forEach(p => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
      <div class="product-card-img" onclick="location.href='product.html?id=${p.id}'">
        ${p.badge ? `<span class="product-badge ${p.badge}">${p.badge === 'new' ? 'I ri' : p.badge === 'sale' ? 'Zbritje' : p.badge}</span>` : ''}
        ${getProductSVG(p.svgType, p.color)}
      </div>
      <div class="product-card-body" onclick="location.href='product.html?id=${p.id}'">
        <div class="product-category">${p.categoryLabel}</div>
        <div class="product-stars">${getStars(p.stars)} (${p.stars}.0)</div>
        <div class="product-name">${p.name}</div>
        <div class="product-desc">${p.desc.substring(0, 80)}…</div>
      </div>
      <div class="product-footer" style="padding: 0 1.2rem 1.2rem">
        <div class="product-price">
          ${p.oldPrice ? `<span class="old-price">€${p.oldPrice.toLocaleString()}</span>` : ''}
          €${p.price.toLocaleString()}
        </div>
        <button class="btn-add" onclick="event.stopPropagation(); addToCart(${p.id})">
          + Shporta
        </button>
      </div>`;
    grid.appendChild(card);
  });

  if (filtered.length === 0) {
    grid.innerHTML = `<p style="color:var(--gray);grid-column:1/-1;padding:2rem 0">Nuk u gjetën produkte.</p>`;
  }
}

function filterProducts(category, btn) {
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderProducts(category);
}

// Init
renderProducts();
