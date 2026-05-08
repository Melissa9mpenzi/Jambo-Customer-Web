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
      <HeroSection />

      <section class="category-page-section">
        <div class="category-breadcrumb">
          <router-link to="/" class="breadcrumb-link">Home</router-link>
          <span class="breadcrumb-sep">›</span>
          <span class="breadcrumb-current">Groceries</span>
        </div>

        <div class="category-banner groceries-banner">
          <img src="/images/toma.png" class="float-img f1" alt="Fresh Tomatoes">
          <img src="/images/toma.png" class="float-img f2" alt="Vegetables">
          <img src="/images/ppepr.png" class="float-img f3" alt="Pepper">
          <img src="/images/toma.png" class="float-img f4" alt="Produce">
          <div class="banner-text">
            <div class="banner-icon">🛒</div>
            <h2>Groceries</h2>
            <p>Fresh produce, pantry essentials and household staples from trusted supermarkets and local stores near you.</p>
          </div>
        </div>

        <div class="subcategory-intro">
          <h3>Browse by Type</h3>
          <p>Discover the grocery categories available from merchants on JamboApp</p>
        </div>

        <div class="subcategory-grid">
          <div class="subcategory-card" v-for="cat in groceryCategories" :key="cat.name">
            <div class="subcategory-icon">{{ cat.icon }}</div>
            <div class="subcategory-info">
              <h4>{{ cat.name }}</h4>
              <p>{{ cat.description }}</p>
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

const groceryCategories = [
  { icon: '🥩', name: 'Meat, Poultry & Dairy', description: 'Fresh beef, chicken, fish, eggs, milk, cheese and dairy products from trusted suppliers.' },
  { icon: '🥤', name: 'Beverages', description: 'Juices, soft drinks, water, coffee, tea and energy drinks for every thirst.' },
  { icon: '🍿', name: 'Snacks & Confectionery', description: 'Crisps, biscuits, chocolates, nuts and your favourite snack brands.' },
  { icon: '🥦', name: 'Fresh Fruits & Vegetables', description: 'Farm-fresh produce — tomatoes, onions, sukuma wiki, avocados, mangoes and more.' },
  { icon: '🌾', name: 'Grains, Rice & Flour', description: 'Rice, maize flour (unga), wheat flour, lentils, beans and dry cereals in bulk or small packs.' },
  { icon: '🧂', name: 'Cooking Essentials', description: 'Cooking oil, spices, salt, sauces, vinegar and seasoning to bring your meals to life.' },
  { icon: '🍞', name: 'Bakery & Bread', description: 'Freshly baked bread, chapati, mandazi, cakes and pastries from local bakers.' },
  { icon: '🧹', name: 'Household Cleaning', description: 'Detergents, soaps, cleaning liquids, mops and household hygiene supplies.' },
]
</script>

<style scoped>
.category-page-section { background: #fdfbf4; padding: 40px 8% 100px; }
.category-breadcrumb { display: flex; align-items: center; gap: 8px; font-size: 0.9rem; color: #888; margin-bottom: 36px; }
.breadcrumb-link { color: #14407b; text-decoration: none; font-weight: 600; transition: color 0.2s; }
.breadcrumb-link:hover { color: #fdd20a; }
.breadcrumb-sep { color: #bbb; }
.breadcrumb-current { color: #333; font-weight: 500; }

.category-banner { position: relative; border-radius: 24px; padding: 70px 40px; overflow: hidden; display: flex; align-items: center; justify-content: center; min-height: 280px; margin-bottom: 64px; }
.groceries-banner { background: linear-gradient(135deg, #4a7b14 0%, #5e9e1a 60%, #345a0d 100%); }

.float-img { position: absolute; object-fit: contain; filter: drop-shadow(0 8px 20px rgba(0,0,0,0.35)); pointer-events: none; }
.f1 { width: 150px; bottom: -5px; left: 3%; animation: floatA 3.2s ease-in-out infinite; }
.f2 { width: 110px; top: 10px; left: 22%; animation: floatB 3.8s ease-in-out infinite; opacity: 0.75; }
.f3 { width: 130px; bottom: -10px; right: 20%; animation: floatA 3.5s ease-in-out infinite; animation-delay: 0.8s; }
.f4 { width: 120px; top: 5px; right: 4%; animation: floatB 2.9s ease-in-out infinite; animation-delay: 1.2s; }

@keyframes floatA { 0%,100% { transform: translateY(0px) rotate(0deg); } 50% { transform: translateY(-16px) rotate(3deg); } }
@keyframes floatB { 0%,100% { transform: translateY(0px) rotate(0deg); } 50% { transform: translateY(-20px) rotate(-3deg); } }

.banner-text { position: relative; z-index: 5; text-align: center; color: #fff; }
.banner-icon { font-size: 3rem; margin-bottom: 10px; }
.banner-text h2 { font-family: 'Playfair Display', serif; font-size: clamp(2rem, 4vw, 3.2rem); font-weight: 700; margin-bottom: 12px; text-shadow: 0 2px 12px rgba(0,0,0,0.3); }
.banner-text p { font-size: 1rem; max-width: 480px; margin: 0 auto; opacity: 0.9; line-height: 1.7; }

.subcategory-intro { text-align: center; margin-bottom: 40px; }
.subcategory-intro h3 { font-family: 'Playfair Display', serif; font-size: clamp(1.6rem, 3vw, 2.2rem); color: #14407b; margin-bottom: 10px; }
.subcategory-intro p { color: #666; font-size: 1rem; }

.subcategory-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 24px; }
.subcategory-card { background: #fff; border-radius: 16px; padding: 28px 24px; display: flex; align-items: flex-start; gap: 18px; box-shadow: 0 6px 24px rgba(20,64,123,0.07); border: 1.5px solid transparent; transition: all 0.3s ease; cursor: default; }
.subcategory-card:hover { border-color: #14407b; transform: translateY(-5px); box-shadow: 0 16px 40px rgba(20,64,123,0.13); }
.subcategory-icon { font-size: 2.4rem; flex-shrink: 0; width: 56px; height: 56px; background: #f0f4ff; border-radius: 14px; display: flex; align-items: center; justify-content: center; transition: background 0.3s; }
.subcategory-card:hover .subcategory-icon { background: #fdd20a; }
.subcategory-info h4 { font-family: 'Playfair Display', serif; font-size: 1.1rem; color: #14407b; margin-bottom: 6px; font-weight: 700; }
.subcategory-info p { font-size: 0.87rem; color: #666; line-height: 1.6; }

@media (max-width: 768px) {
  .category-page-section { padding: 30px 5% 80px; }
  .category-banner { padding: 50px 20px; min-height: 220px; }
  .f1,.f2,.f3,.f4 { width: 70px; }
}
</style>
