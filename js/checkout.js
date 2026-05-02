// ============================================
// LUMINA — Checkout JS
// ============================================

let currentStep = 1;
let shippingCost = 3.50;
let promoDiscount = 0;
let paymentMethod = 'card';

// Merr shportën
const cart = JSON.parse(localStorage.getItem('lumina_cart') || '[]');

// Nëse shporta është bosh, kthehu
if (cart.length === 0) {
  window.location.href = 'index.html';
}

// ---- STEP NAVIGATION ----
function goToStep(step) {
  if (step > currentStep && !validateCurrentStep()) return;

  document.getElementById(`panel-${currentStep}`).style.display = 'none';
  document.getElementById(`panel-${step}`).style.display = 'block';

  document.querySelectorAll('.step').forEach((s, i) => {
    s.classList.toggle('active', i + 1 <= step);
  });

  currentStep = step;
  updateSummary();
}

function validateCurrentStep() {
  if (currentStep === 1) {
    const name = document.getElementById('co-name').value.trim();
    const email = document.getElementById('co-email').value.trim();
    const phone = document.getElementById('co-phone').value.trim();
    const last = document.getElementById('co-lastname').value.trim();
    if (!name || !last || !email || !phone) {
      alert('Ju lutemi plotësoni të gjitha fushat e detyrueshme (*).');
      return false;
    }
    if (!email.includes('@')) {
      alert('Email i pavlefshëm.');
      return false;
    }
  }
  if (currentStep === 2) {
    const city = document.getElementById('co-city').value.trim();
    const addr = document.getElementById('co-address').value.trim();
    if (!city || !addr) {
      alert('Ju lutemi plotësoni qytetin dhe adresën.');
      return false;
    }
  }
  return true;
}

// ---- SHIPPING ----
function updateShipping(type) {
  document.querySelectorAll('.shipping-opt').forEach(el => el.classList.remove('selected'));
  const map = { standard: 3.50, express: 8.00, free: 0 };
  shippingCost = map[type] || 3.50;
  document.getElementById(`ship-${type}`).classList.add('selected');
  updateSummary();
}

// ---- PAYMENT ----
function selectPayment(method, btn) {
  paymentMethod = method;
  document.querySelectorAll('.pay-method').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById('card-fields').style.display = method === 'card' ? 'block' : 'none';
  document.getElementById('paypal-fields').style.display = method === 'paypal' ? 'block' : 'none';
  document.getElementById('cash-fields').style.display = method === 'cash' ? 'block' : 'none';
}

// ---- CARD FORMAT ----
function formatCard(input) {
  let v = input.value.replace(/\D/g, '').substring(0, 16);
  input.value = v.replace(/(.{4})/g, '$1 ').trim();
}
function formatExpiry(input) {
  let v = input.value.replace(/\D/g, '').substring(0, 4);
  if (v.length >= 2) v = v.substring(0,2) + '/' + v.substring(2);
  input.value = v;
}

// ---- PROMO CODE ----
function applyPromo() {
  const code = document.getElementById('promo-input').value.trim().toUpperCase();
  const msgEl = document.getElementById('promo-msg');
  const codes = { 'LUMINA10': 0.10, 'STUDENT20': 0.20, 'TECH15': 0.15 };

  if (codes[code]) {
    promoDiscount = codes[code];
    msgEl.className = 'promo-msg ok';
    msgEl.textContent = `✓ Kodi "${code}" u aplikua — ${(promoDiscount*100).toFixed(0)}% zbritje!`;
  } else {
    promoDiscount = 0;
    msgEl.className = 'promo-msg err';
    msgEl.textContent = 'Kodi i pavlefshëm. Provo: LUMINA10, STUDENT20, TECH15';
  }
  updateSummary();
}

// ---- SUMMARY ----
function updateSummary() {
  const itemsEl = document.getElementById('summary-items');
  const subtotalEl = document.getElementById('summary-subtotal');
  const shippingEl = document.getElementById('summary-shipping');
  const totalEl = document.getElementById('summary-total');

  if (!itemsEl) return;

  itemsEl.innerHTML = '';
  let subtotal = 0;

  cart.forEach(item => {
    const p = PRODUCTS.find(p => p.id === item.id);
    if (!p) return;
    const lineTotal = p.price * item.qty;
    subtotal += lineTotal;

    const div = document.createElement('div');
    div.className = 'summary-item';
    div.innerHTML = `
      <div class="summary-item-img">${getProductSVG(p.svgType, p.color, 30)}</div>
      <div class="summary-item-name">${p.name} × ${item.qty}</div>
      <div class="summary-item-price">€${lineTotal.toLocaleString()}</div>`;
    itemsEl.appendChild(div);
  });

  const discount = subtotal * promoDiscount;
  const total = subtotal - discount + shippingCost;

  if (subtotalEl) subtotalEl.textContent = `€${subtotal.toLocaleString()}`;
  if (shippingEl) shippingEl.textContent = shippingCost === 0 ? 'Falas' : `€${shippingCost.toFixed(2)}`;
  if (totalEl) totalEl.textContent = `€${total.toFixed(2)}`;

  if (promoDiscount > 0) {
    let discLine = document.getElementById('discount-line');
    if (!discLine) {
      discLine = document.createElement('div');
      discLine.id = 'discount-line';
      discLine.className = 'summary-line';
      discLine.style.color = '#00b87c';
      shippingEl.parentElement.insertAdjacentElement('afterend', discLine);
    }
    discLine.innerHTML = `<span>Zbritja (${(promoDiscount*100).toFixed(0)}%)</span><span>−€${discount.toFixed(2)}</span>`;
  }
}

// ---- PLACE ORDER ----
function placeOrder() {
  if (paymentMethod === 'card') {
    const card = document.getElementById('co-card').value.replace(/\s/g, '');
    const expiry = document.getElementById('co-expiry').value;
    const cvv = document.getElementById('co-cvv').value;
    const name = document.getElementById('co-cardname').value.trim();
    if (card.length < 16 || !expiry || cvv.length < 3 || !name) {
      alert('Ju lutemi plotësoni të gjitha të dhënat e kartës.');
      return;
    }
  }

  // Simulim transaksioni
  const orderNum = '#LM-' + Math.floor(100000 + Math.random() * 900000);
  const email = document.getElementById('co-email')?.value || 'emaili@juaj.com';

  document.getElementById('order-number').textContent = orderNum;
  document.getElementById('confirm-email').textContent = email;
  document.getElementById('success-modal').style.display = 'flex';

  // Pastro shportën
  localStorage.removeItem('lumina_cart');
}

// ---- INIT ----
updateSummary();
