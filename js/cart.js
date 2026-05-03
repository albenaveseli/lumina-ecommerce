// ============================================
// LUMINA — Cart Management
// ============================================

function getCart() {
  return JSON.parse(localStorage.getItem('lumina_cart') || '[]');
}

function saveCartData(cartData) {
  localStorage.setItem('lumina_cart', JSON.stringify(cartData));
  updateCartUI();
}

function addToCart(productId) {
  const cartData = getCart();
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;
  const existing = cartData.find(i => i.id === productId);
  if (existing) {
    existing.qty++;
  } else {
    cartData.push({ id: product.id, qty: 1 });
  }
  saveCartData(cartData);
  showToast(`✓ ${product.name} u shtua`);
}

function removeFromCart(productId) {
  const cartData = getCart().filter(i => i.id !== productId);
  saveCartData(cartData);
}

function changeQty(productId, delta) {
  const cartData = getCart();
  const item = cartData.find(i => i.id === productId);
  if (!item) return;
  item.qty = Math.max(1, item.qty + delta);
  saveCartData(cartData);
}

function getCartTotal() {
  return getCart().reduce((sum, item) => {
    const p = PRODUCTS.find(p => p.id === item.id);
    return sum + (p ? p.price * item.qty : 0);
  }, 0);
}

function getCartCount() {
  return getCart().reduce((sum, item) => sum + item.qty, 0);
}

function updateCartUI() {
  const cartData = getCart();
  const count = getCartCount();
  document.querySelectorAll('#cart-count').forEach(el => el.textContent = count);

  const itemsEl = document.getElementById('cart-items');
  const emptyEl = document.getElementById('cart-empty');
  const footerEl = document.getElementById('cart-footer');
  const totalEl = document.getElementById('cart-total');

  if (!itemsEl) return;

  if (cartData.length === 0) {
    if (emptyEl) emptyEl.style.display = 'flex';
    if (footerEl) footerEl.style.display = 'none';
    itemsEl.querySelectorAll('.cart-item').forEach(i => i.remove());
    return;
  }

  if (emptyEl) emptyEl.style.display = 'none';
  if (footerEl) footerEl.style.display = 'block';

  itemsEl.querySelectorAll('.cart-item').forEach(i => i.remove());

  cartData.forEach(item => {
    const p = PRODUCTS.find(p => p.id === item.id);
    if (!p) return;
    const div = document.createElement('div');
    div.className = 'cart-item';
    div.innerHTML = `
      <div class="cart-item-img">
        ${getProductSVG(p.svgType, p.color, 40)}
      </div>
      <div class="cart-item-info">
        <div class="cart-item-name">${p.name}</div>
        <div class="cart-item-price">€${(p.price * item.qty).toLocaleString()}</div>
        <div class="cart-item-controls">
          <button class="qty-btn" onclick="changeQty(${p.id}, -1)">−</button>
          <span class="qty-num">${item.qty}</span>
          <button class="qty-btn" onclick="changeQty(${p.id}, 1)">+</button>
          <button class="remove-btn" onclick="removeFromCart(${p.id})">🗑</button>
        </div>
      </div>`;
    itemsEl.appendChild(div);
  });

  if (totalEl) totalEl.textContent = `€${getCartTotal().toLocaleString()}`;
}

function toggleCart() {
  const sidebar = document.getElementById('cart-sidebar');
  const overlay = document.getElementById('cart-overlay');
  if (!sidebar) return;
  sidebar.classList.toggle('open');
  overlay.classList.toggle('open');
}

function showToast(msg) {
  const t = document.getElementById('toast');
  if (!t) return;
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2500);
}

// Init
updateCartUI();
