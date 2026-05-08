<template>
  <div>
    <div class="page-shape shape-left">
      <svg viewBox="0 0 200 200"><circle cx="60" cy="60" r="58" fill="#14407b" opacity="0.18"/><circle cx="140" cy="90" r="35" fill="#fdd20a" opacity="0.28"/><path d="M20,160 Q90,100 180,145" fill="none" stroke="#14407b" stroke-width="8" opacity="0.2"/></svg>
    </div>
    <div class="page-shape shape-right">
      <svg viewBox="0 0 200 200"><circle cx="150" cy="50" r="52" fill="#14407b" opacity="0.16"/><circle cx="60" cy="120" r="28" fill="#fdd20a" opacity="0.28"/><path d="M20,45 Q90,95 145,25" fill="none" stroke="#14407b" stroke-width="7" opacity="0.22"/></svg>
    </div>

    <Header />

    <main>
      <!-- Shared Hero Section -->
      <HeroSection />

      <!-- Category Page Content -->
      <section class="category-page-section">
        <div class="category-breadcrumb">
          <router-link to="/" class="breadcrumb-link">Home</router-link>
          <span class="breadcrumb-sep">›</span>
          <span class="breadcrumb-current">Pharmacy</span>
        </div>

        <div class="category-page-header">
          <div class="category-page-icon">
            <img src="/images/drug.png" alt="Pharmacy" />
          </div>
          <div class="category-page-title-wrap">
            <h2 class="category-page-title">Pharmacy</h2>
            <p class="category-page-subtitle">Order medicines, health supplements, and wellness products from trusted pharmacies near you. Fast, reliable, and confidential delivery.</p>
          </div>
        </div>

        <div class="category-items-grid">
          <div class="category-item-card" v-for="item in pharmacyItems" :key="item.id">
            <div class="item-img-wrap">
              <img :src="item.image" :alt="item.name" />
            </div>
            <div class="item-details">
              <h4>{{ item.name }}</h4>
              <p>{{ item.description }}</p>
              <div class="item-footer">
                <span class="item-price">{{ item.price }}</span>
                <button class="item-order-btn" :aria-label="'Order ' + item.name">Order Now</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>

    <Footer />
  </div>
</template>

<script setup>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import HeroSection from '../components/HeroSection.vue'

const pharmacyItems = [
  { id: 1, name: 'Paracetamol 500mg', description: 'Trusted pain relief and fever reducer. Available in packs of 20.', price: 'KSh 50', image: '/images/drug.png' },
  { id: 2, name: 'Vitamin C Supplements', description: 'Boost your immunity with high-dose Vitamin C tablets.', price: 'KSh 250', image: '/images/drug.png' },
  { id: 3, name: 'Antacid Tablets', description: 'Fast relief from heartburn, indigestion, and acid reflux.', price: 'KSh 120', image: '/images/drug.png' },
  { id: 4, name: 'Antiseptic Cream', description: 'Antiseptic cream for minor cuts, burns, and skin irritations.', price: 'KSh 180', image: '/images/drug.png' },
  { id: 5, name: 'Multivitamin Pack', description: 'Daily multivitamins to support overall health and wellbeing.', price: 'KSh 400', image: '/images/drug.png' },
  { id: 6, name: 'Cough Syrup', description: 'Soothing cough syrup for dry and productive coughs.', price: 'KSh 220', image: '/images/drug.png' },
]
</script>

<style scoped>
.category-page-section {
  background: #fdfbf4;
  padding: 60px 8% 100px;
  min-height: 600px;
}
.category-breadcrumb {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.9rem;
  color: #888;
  margin-bottom: 40px;
}
.breadcrumb-link {
  color: #14407b;
  text-decoration: none;
  font-weight: 600;
  transition: color 0.2s;
}
.breadcrumb-link:hover { color: #fdd20a; }
.breadcrumb-sep { color: #bbb; }
.breadcrumb-current { color: #333; font-weight: 500; }

.category-page-header {
  display: flex;
  align-items: center;
  gap: 32px;
  margin-bottom: 60px;
  flex-wrap: wrap;
}
.category-page-icon {
  width: 120px;
  height: 120px;
  background: #14407b;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 12px 32px rgba(20, 64, 123, 0.18);
  flex-shrink: 0;
}
.category-page-icon img {
  width: 80px;
  height: 80px;
  object-fit: contain;
}
.category-page-title {
  font-family: 'Playfair Display', serif;
  font-size: clamp(2rem, 4vw, 3rem);
  color: #14407b;
  margin-bottom: 10px;
}
.category-page-subtitle {
  color: #555;
  font-size: 1rem;
  line-height: 1.7;
  max-width: 600px;
}

.category-items-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 32px;
}
.category-item-card {
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(20, 64, 123, 0.08);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.category-item-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 48px rgba(20, 64, 123, 0.15);
}
.item-img-wrap {
  background: linear-gradient(135deg, #14407b 0%, #1a5298 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 28px;
  height: 180px;
}
.item-img-wrap img {
  width: 120px;
  height: 120px;
  object-fit: contain;
  filter: drop-shadow(0 8px 16px rgba(0,0,0,0.3));
  transition: transform 0.3s ease;
}
.category-item-card:hover .item-img-wrap img {
  transform: scale(1.08) rotate(-4deg);
}
.item-details {
  padding: 24px 20px 20px;
}
.item-details h4 {
  font-family: 'Playfair Display', serif;
  font-size: 1.2rem;
  color: #14407b;
  margin-bottom: 8px;
  font-weight: 700;
}
.item-details p {
  font-size: 0.88rem;
  color: #666;
  line-height: 1.6;
  margin-bottom: 18px;
}
.item-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.item-price {
  font-family: 'Montserrat', sans-serif;
  font-size: 1.1rem;
  font-weight: 700;
  color: #14407b;
}
.item-order-btn {
  background: #14407b;
  color: #fff;
  border: none;
  border-radius: 20px;
  padding: 9px 22px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s, transform 0.2s;
}
.item-order-btn:hover {
  background: #fdd20a;
  color: #14407b;
  transform: scale(1.05);
}

@media (max-width: 768px) {
  .category-page-section { padding: 40px 5% 80px; }
  .category-page-header { gap: 20px; }
  .category-page-icon { width: 80px; height: 80px; }
  .category-page-icon img { width: 50px; height: 50px; }
}
</style>
