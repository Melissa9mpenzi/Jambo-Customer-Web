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
      <section class="page-hero">
        <h1>Shops<br><span>Shop &amp; Deliver</span></h1>
        <img src="/images/shops.png"  class="hi s1" alt="Shop front">
        <img src="/images/shops.png"  class="hi s2" alt="Store">
        <img src="/images/output.png" class="hi s3" alt="Products">
        <img src="/images/shops.png"  class="hi s4" alt="Shopping">
      </section>

      <section class="category-page-section">
        <div class="category-breadcrumb">
          <router-link to="/" class="breadcrumb-link">Home</router-link>
          <span class="breadcrumb-sep">›</span>
          <span class="breadcrumb-current">Shops</span>
        </div>
        <div class="subcategory-intro">
          <h3>Browse by Type</h3>
          <p>Discover the variety of shops and retail merchants available on JamboApp</p>
        </div>
        <div class="subcategory-grid">
          <div class="subcategory-card" v-for="cat in shopCategories" :key="cat.name">
            <div class="subcategory-icon"><i :class="cat.icon"></i></div>
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

const shopCategories = [
  { icon: 'fas fa-shirt',           name: 'Fashion & Clothing',    description: "Men's and women's clothing, shoes, bags and accessories from trendy local boutiques." },
  { icon: 'fas fa-mobile-screen',   name: 'Electronics & Tech',    description: 'Phones, laptops, earbuds, chargers and gadgets from trusted electronics retailers.' },
  { icon: 'fas fa-couch',           name: 'Home & Furniture',      description: 'Décor, kitchenware, bedding and furniture to make your home beautiful.' },
  { icon: 'fas fa-spa',             name: 'Beauty & Personal Care', description: 'Makeup, haircare, perfumes and grooming products from top beauty brands.' },
  { icon: 'fas fa-book',            name: 'Books & Stationery',    description: 'Novels, textbooks, school supplies and office stationery delivered fast.' },
  { icon: 'fas fa-gamepad',         name: 'Toys & Games',          description: "Kids' toys, board games, outdoor play sets and educational materials." },
  { icon: 'fas fa-person-running',  name: 'Sports & Fitness',      description: 'Workout gear, gym equipment, sportswear and outdoor recreation products.' },
  { icon: 'fas fa-gift',            name: 'Gifts & Occasions',     description: 'Hampers, flowers, personalised gifts and celebration packages for every occasion.' },
]
</script>

<style scoped>
.page-hero { position:relative; text-align:center; padding:60px 20px 0; min-height:440px; background:#fdfbf4; overflow:hidden; display:flex; flex-direction:column; align-items:center; }
.page-hero h1 { font-family:'Playfair Display',serif; font-size:clamp(2.4rem,5vw,4rem); color:#14407b; margin-bottom:20px; line-height:1.1; position:relative; z-index:5; font-weight:700; }
.page-hero h1 span { color:#fdd20a; }
.paint-container { position:absolute; bottom:0; left:0; width:100%; height:100%; z-index:1; pointer-events:none; }
.paint-svg { position:absolute; bottom:-5px; width:100%; height:auto; min-height:380px; display:block; }

.hi { position:absolute; z-index:5; filter:drop-shadow(0 10px 20px rgba(0,0,0,0.3)); pointer-events:none; }
.s1 { width:260px; bottom:0;   left:3%;   animation:floatY 3.2s ease-in-out infinite; }
.s2 { width:160px; top:110px;  left:9%;   animation:floatY 3.8s ease-in-out infinite; animation-delay:.5s; opacity:.8; }
.s3 { width:200px; bottom:0;   right:4%;  animation:floatY 3.5s ease-in-out infinite; animation-delay:.8s; }
.s4 { width:150px; top:100px;  right:9%;  animation:floatY 2.9s ease-in-out infinite; animation-delay:1.2s; opacity:.75; }
@keyframes floatY { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-18px)} }

.category-page-section { background:#fdfbf4; padding:50px 8% 100px; }
.category-breadcrumb { display:flex; align-items:center; gap:8px; font-size:.9rem; color:#888; margin-bottom:36px; }
.breadcrumb-link { color:#14407b; text-decoration:none; font-weight:600; }
.breadcrumb-link:hover { color:#fdd20a; }
.breadcrumb-sep { color:#bbb; }
.breadcrumb-current { color:#333; font-weight:500; }

.subcategory-intro { text-align:center; margin-bottom:40px; }
.subcategory-intro h3 { font-family:'Playfair Display',serif; font-size:clamp(1.6rem,3vw,2.2rem); color:#14407b; margin-bottom:10px; }
.subcategory-intro p { color:#666; font-size:1rem; }

.subcategory-grid { display:grid; grid-template-columns:repeat(auto-fill,minmax(260px,1fr)); gap:24px; }
.subcategory-card { background:#fff; border-radius:16px; padding:28px 24px; display:flex; align-items:flex-start; gap:18px; box-shadow:0 6px 24px rgba(20,64,123,.07); border:1.5px solid transparent; transition:all .3s ease; cursor:default; }
.subcategory-card:hover { border-color:#14407b; transform:translateY(-5px); box-shadow:0 16px 40px rgba(20,64,123,.13); }
.subcategory-icon { flex-shrink:0; width:56px; height:56px; border-radius:50%; background:#14407b; display:flex; align-items:center; justify-content:center; transition:background .3s; }
.subcategory-icon i { color:#fff; font-size:1.4rem; }
.subcategory-card:hover .subcategory-icon { background:#fdd20a; }
.subcategory-card:hover .subcategory-icon i { color:#14407b; }
.subcategory-info h4 { font-family:'Playfair Display',serif; font-size:1.1rem; color:#14407b; margin-bottom:6px; font-weight:700; }
.subcategory-info p { font-size:.87rem; color:#666; line-height:1.6; }

@media(max-width:768px){
  .page-hero{min-height:300px;}
  .s1,.s2,.s3,.s4{width:90px;}
  .category-page-section{padding:30px 5% 80px;}
}
</style>
