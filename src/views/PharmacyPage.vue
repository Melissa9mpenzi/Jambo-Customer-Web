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
        <h1>Pharmacy<br><span>Health Delivered</span></h1>
        <div class="paint-container">
          <svg class="paint-svg" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 1600 160"><path style="fill:#14407b" d="M333,20l9-1v1c-1.139,1.139-.4,0-1,2l-2-1v1l-5,1V22C332.861,20.861,333.6,22,333,20Zm-68,0h2v1C264.99,20.426,266.135,21.12,265,20Zm8,0,6,1v1c-3.1,1.643-1.8,1.9-7,2Q272.5,22,273,20Zm-10,1h2v1C262.99,21.426,264.135,22.12,263,21Zm43,3v2l6,1v1h-1v1h-8c-1.139-1.139,0-.4-2-1,1.01-3.129.557-1.518,0-5h-8V22h1V21h3c2.05,1.885,9.224,1.1,13,1v1h-1v1h-3Zm-46-2h3v1h-2c-0.73.474-.011,1.392-2,1Zm118,0v2c-3.138.048-8.5-.565-10-2h10Zm28,0v2c-5.937.177-15.034,1.018-18-2h18ZM1600,195H0V56c6.264-.162,9.232-2.562,14-4l19-1V50c2.893-.836,8.879-.905,10,0-3.537.286-4.884,1.349-8,2v2l-6,1v1c-4.671,1.436-7.876-1.19-11,2l16-1v2l-4,1v3H27l1,2c-.36.566-14.554,1.781-16,2,.844,1.135-.127.145,1,1,2.786,3.1,6.729,1.543,12,2,1.848,.16,2,1,2,1l15-1,45-1,1-2,8,1V67h5v1c3.858,1.033,8.376-.514,11-1V62a13.307,13.307,0,0,0,4-3h8v2l20,1V61c2.509-.907,4.5-.283,6-2l1-3,10-1c6.236-2.012,12.925-4.594,20-6V47l28-5h14V41h17V40h11l20-1V38l11,1V38h3V37l6-2V34h11V33h3V32c2.225-.659,17.162,2.252,19,3v1h2v1c1.682,.383,1.767-.951,2-1h15c1.382-2.612,1.769-1.693,2-6-.223-.105-3.626-1.439-3-2h1c4.8-4.753,15.039,.813,20,2v4h10c.249,.054,.311,1.362,2,1V34h2V33l15,1v1h3v1c3.564,1.13,8.383,.022,11,1v1h-5c-2.7-2.515-10.481-.273-14,0l1,3,5-1,1,2,11,2V43l6-1q-.5-2.5-1-5c1.135-.844,.145,.127,1-1h13V35c3.394-2.495,1.052-3.507,7-4,1.653,1.6,5.613,1.99,9,2l4-5h-1c-1.139-1.139,0-.4-2-1V25Z"></path></svg>
        </div>
        <img src="/images/drug.png" class="hi d1" alt="Medicine">
        
        <img src="/images/drug.png" class="hi d4" alt="Pharmacy">
      </section>

      <section class="category-page-section">
        <div class="category-breadcrumb">
          <router-link to="/" class="breadcrumb-link">Home</router-link>
          <span class="breadcrumb-sep">›</span>
          <span class="breadcrumb-current">Pharmacy</span>
        </div>
        <div class="subcategory-intro">
          <h3>Browse by Type</h3>
          <p>Discover the range of pharmacy and health products available on JamboApp</p>
        </div>
        <div class="subcategory-grid">
          <div class="subcategory-card" v-for="cat in pharmacyCategories" :key="cat.name">
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

const pharmacyCategories = [
  { icon: 'fas fa-prescription-bottle-medical', name: 'Prescription Medicines',  description: 'Upload your prescription and get medication delivered safely and discreetly.' },
  { icon: 'fas fa-capsules',                    name: 'Over-the-Counter (OTC)',   description: 'Pain relievers, antacids, antihistamines and everyday remedies — no prescription needed.' },
  { icon: 'fas fa-pump-soap',                   name: 'Skincare & Beauty',        description: 'Medically-approved skincare, sunscreens, moisturisers and dermatology products.' },
  { icon: 'fas fa-tablets',                     name: 'Vitamins & Supplements',   description: 'Multivitamins, Vitamin C, D, Zinc and natural health boosters for daily wellness.' },
  { icon: 'fas fa-stethoscope',                 name: 'Medical Devices',          description: 'Blood pressure monitors, glucometers, thermometers and home health equipment.' },
  { icon: 'fas fa-vial',                        name: 'Lab & Testing Kits',       description: 'Rapid test kits for blood sugar, malaria, COVID-19 and more, for home use.' },
  { icon: 'fas fa-baby',                        name: 'Baby & Maternal Health',   description: 'Baby formula, nappies, prenatal vitamins and products for mother and child care.' },
  { icon: 'fas fa-dumbbell',                    name: 'Sports & Nutrition',       description: 'Protein supplements, energy drinks, recovery aids and sports performance products.' },
]
</script>


