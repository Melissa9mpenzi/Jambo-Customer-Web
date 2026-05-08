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
        <div class="paint-container">
          <svg class="paint-svg" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 1600 160"><path style="fill:#14407b" d="M333,20l9-1v1c-1.139,1.139-.4,0-1,2l-2-1v1l-5,1V22C332.861,20.861,333.6,22,333,20Zm-68,0h2v1C264.99,20.426,266.135,21.12,265,20Zm8,0,6,1v1c-3.1,1.643-1.8,1.9-7,2Q272.5,22,273,20Zm-10,1h2v1C262.99,21.426,264.135,22.12,263,21Zm43,3v2l6,1v1h-1v1h-8c-1.139-1.139,0-.4-2-1,1.01-3.129.557-1.518,0-5h-8V22h1V21h3c2.05,1.885,9.224,1.1,13,1v1h-1v1h-3Zm-46-2h3v1h-2c-0.73.474-.011,1.392-2,1Zm118,0v2c-3.138.048-8.5-.565-10-2h10Zm28,0v2c-5.937.177-15.034,1.018-18-2h18ZM1600,195H0V56c6.264-.162,9.232-2.562,14-4l19-1V50c2.893-.836,8.879-.905,10,0-3.537.286-4.884,1.349-8,2v2l-6,1v1c-4.671,1.436-7.876-1.19-11,2l16-1v2l-4,1v3H27l1,2c-.36.566-14.554,1.781-16,2,.844,1.135-.127.145,1,1,2.786,3.1,6.729,1.543,12,2,1.848,.16,2,1,2,1l15-1,45-1,1-2,8,1V67h5v1c3.858,1.033,8.376-.514,11-1V62a13.307,13.307,0,0,0,4-3h8v2l20,1V61c2.509-.907,4.5-.283,6-2l1-3,10-1c6.236-2.012,12.925-4.594,20-6V47l28-5h14V41h17V40h11l20-1V38l11,1V38h3V37l6-2V34h11V33h3V32c2.225-.659,17.162,2.252,19,3v1h2v1c1.682,.383,1.767-.951,2-1h15c1.382-2.612,1.769-1.693,2-6-.223-.105-3.626-1.439-3-2h1c4.8-4.753,15.039,.813,20,2v4h10c.249,.054,.311,1.362,2,1V34h2V33l15,1v1h3v1c3.564,1.13,8.383,.022,11,1v1h-5c-2.7-2.515-10.481-.273-14,0l1,3,5-1,1,2,11,2V43l6-1q-.5-2.5-1-5c1.135-.844,.145,.127,1-1h13V35c3.394-2.495,1.052-3.507,7-4,1.653,1.6,5.613,1.99,9,2l4-5h-1c-1.139-1.139,0-.4-2-1V25Z"></path></svg>
        </div>
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
