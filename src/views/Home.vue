<template>
  <div>
    <Header />

    <main>
      <!-- Hero -->
      <section class="hero">
        <h1>{{ t('home.hero.line1') }} <br><span>{{ t('home.hero.line2') }}</span></h1>
        <div class="paint-container">
           <svg class="paint-svg" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 1600 160"><path style="fill:#14407b" d="M333,20l9-1v1c-1.139,1.139-.4,0-1,2l-2-1v1l-5,1V22C332.861,20.861,333.6,22,333,20Zm-68,0h2v1C264.99,20.426,266.135,21.12,265,20Zm8,0,6,1v1c-3.1,1.643-1.8,1.9-7,2Q272.5,22,273,20Zm-10,1h2v1C262.99,21.426,264.135,22.12,263,21Zm43,3v2l6,1v1h-1v1h-8c-1.139-1.139,0-.4-2-1,1.01-3.129.557-1.518,0-5h-8V22h1V21h3c2.05,1.885,9.224,1.1,13,1v1h-1v1h-3Zm-46-2h3v1h-2c-0.73.474-.011,1.392-2,1Zm118,0v2c-3.138.048-8.5-.565-10-2h10Zm28,0v2c-5.937.177-15.034,1.018-18-2h18ZM1600,195H0V56c6.264-.162,9.232-2.562,14-4l19-1V50c2.893-.836,8.879-.905,10,0-3.537.286-4.884,1.349-8,2v2l-6,1v1c-4.671,1.436-7.876-1.19-11,2l16-1v2l-4,1v3H27l1,2c-.36.566-14.554,1.781-16,2,.844,1.135-.127.145,1,1,2.786,3.1,6.729,1.543,12,2,1.848,.16,2,1,2,1l15-1,45-1,1-2,8,1V67h5v1c3.858,1.033,8.376-.514,11-1V62a13.307,13.307,0,0,0,4-3h8v2l20,1V61c2.509-.907,4.5-.283,6-2l1-3,10-1c6.236-2.012,12.925-4.594,20-6V47l28-5h14V41h17V40h11l20-1V38l11,1V38h3V37l6-2V34h11V33h3V32c2.225-.659,17.162,2.252,19,3v1h2v1c1.682,.383,1.767-.951,2-1h15c1.382-2.612,1.769-1.693,2-6-.223-.105-3.626-1.439-3-2h1c4.8-4.753,15.039,.813,20,2v4h10c.249,.054,.311,1.362,2,1V34h2V33l15,1v1h3v1c3.564,1.13,8.383,.022,11,1v1h-5c-2.7-2.515-10.481-.273-14,0l1,3,5-1,1,2,11,2V43l6-1q-.5-2.5-1-5c1.135-.844,.145,.127,1-1h13V35c3.394-2.495,1.052-3.507,7-4,1.653,1.6,5.613,1.99,9,2l4-5h-1c-1.139-1.139,0-.4-2-1V25Z"></path></svg>
        </div>
        <img src="/images/paper.png" class="food-item paper-left" alt="" data-aos="fade-right" data-aos-delay="500">
        <img src="/images/paper.png" class="food-item paper-right" alt="" data-aos="fade-left" data-aos-delay="500">
        <img src="/images/shops.png" class="food-item pepper-right" alt="Shawarma" data-aos="zoom-in" data-aos-delay="700">
        <img src="/images/toma.png" class="food-item cheese-right" alt="Tomato" data-aos="zoom-in" data-aos-delay="800">
        <img src="/images/drug.png" class="food-item broccoli-left" alt="Pizza" data-aos="fade-up-right" data-aos-delay="600">
        <img src="/images/pizza.png" class="food-item broccoli-left-2" alt="Pepper" data-aos="fade-up-left" data-aos-delay="650">
        <img src="/images/phone.png" class="food-item pizza" alt="Burger" data-aos="flip-up" data-aos-delay="900">
      </section>

      <!-- About section -->
      <section class="content-section">
        <div class="text-content">
          <h2 v-html="t('home.contentSection.heading').replace('\n','<br>')"></h2>
          <p>{{ t('home.contentSection.body') }}</p>
          <div class="signature">{{ t('home.contentSection.signature') }}</div>
        </div>
        <div class="image-gallery" data-aos="fade-left" data-aos-duration="1000">
          <img src="/images/rest.jpg" class="main-hall-img" alt="Restaurant interior with warm lighting and wooden tables" data-aos="zoom-in" data-aos-delay="200">
          <div class="overlay-img" data-aos="fade-up" data-aos-delay="400"><img src="/images/rant.jpg" alt="Close up of delicious meal"></div>
        </div>
      </section>

      <!-- Top Categories -->
      <section class="foods-menu">
        <h2>{{ t('home.categories.title') }}</h2>
        <p>{{ t('home.categories.subtitle') }}</p>
        <div class="menu-categories">
          <router-link to="/category/food" class="menu-category-link" data-aos="fade-up" data-aos-delay="200">
            <div class="menu-category">
              <div class="plate-wrapper"><img src="/images/burger.png" class="category-image" alt="Burger"></div>
              <div class="category-content">
                <h3>{{ t('home.categories.food.name') }}</h3>
                <p>{{ t('home.categories.food.desc') }}</p>
                <span class="menu-btn" :aria-label="t('home.categories.food.name')">→</span>
              </div>
            </div>
          </router-link>
          <router-link to="/category/pharmacy" class="menu-category-link" data-aos="fade-up" data-aos-delay="300">
            <div class="menu-category">
              <div class="plate-wrapper"><img src="/images/drug.png" class="category-image" alt="Pharmacy"></div>
              <div class="category-content">
                <h3>{{ t('home.categories.pharmacy.name') }}</h3>
                <p>{{ t('home.categories.pharmacy.desc') }}</p>
                <span class="menu-btn" :aria-label="t('home.categories.pharmacy.name')">→</span>
              </div>
            </div>
          </router-link>
          <router-link to="/category/shops" class="menu-category-link" data-aos="fade-up" data-aos-delay="400">
            <div class="menu-category">
              <div class="plate-wrapper"><img src="/images/shops.png" class="category-image" alt="Shops"></div>
              <div class="category-content">
                <h3>{{ t('home.categories.shops.name') }}</h3>
                <p>{{ t('home.categories.shops.desc') }}</p>
                <span class="menu-btn" :aria-label="t('home.categories.shops.name')">→</span>
              </div>
            </div>
          </router-link>
          <router-link to="/category/groceries" class="menu-category-link" data-aos="fade-up" data-aos-delay="500">
            <div class="menu-category">
              <div class="plate-wrapper"><img src="/images/toma.png" class="category-image" alt="Groceries"></div>
              <div class="category-content">
                <h3>{{ t('home.categories.groceries.name') }}</h3>
                <p>{{ t('home.categories.groceries.desc') }}</p>
                <span class="menu-btn" :aria-label="t('home.categories.groceries.name')">→</span>
              </div>
            </div>
          </router-link>
        </div>
      </section>

      <!-- Red Banner -->
      <section class="red-banner">
        <div class="wave-separator">
          <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 1600 160"><path style="fill:#fdfbf4" d="M333,20l9-1v1c-1.139,1.139-.4,0-1,2l-2-1v1l-5,1V22C332.861,20.861,333.6,22,333,20Zm-68,0h2v1C264.99,20.426,266.135,21.12,265,20Zm8,0,6,1v1c-3.1,1.643-1.8,1.9-7,2Q272.5,22,273,20Zm-10,1h2v1C262.99,21.426,264.135,22.12,263,21Zm43,3v2l6,1v1h-1v1h-8c-1.139-1.139,0-.4-2-1,1.01-3.129.557-1.518,0-5h-8V22h1V21h3c2.05,1.885,9.224,1.1,13,1v1h-1v1h-3Zm-46-2h3v1h-2c-0.73.474-.011,1.392-2,1Zm118,0v2c-3.138.048-8.5-.565-10-2h10Zm28,0v2c-5.937.177-15.034,1.018-18-2h18ZM1600,195H0V56c6.264-.162,9.232-2.562,14-4l19-1V50c2.893-.836,8.879-.905,10,0-3.537.286-4.884,1.349-8,2v2l-6,1v1c-4.671,1.436-7.876-1.19-11,2l16-1v2l-4,1v3H27l1,2c-.36.566-14.554,1.781-16,2,.844,1.135-.127.145,1,1,2.786,3.1,6.729,1.543,12,2,1.848,.16,2,1,2,1l15-1,45-1,1-2,8,1V67h5v1c3.858,1.033,8.376-.514,11-1V62a13.307,13.307,0,0,0,4-3h8v2l20,1V61c2.509-.907,4.5-.283,6-2l1-3,10-1c6.236-2.012,12.925-4.594,20-6V47l28-5h14V41h17V40h11l20-1V38l11,1V38h3V37l6-2V34h11V33h3V32c2.225-.659,17.162,2.252,19,3v1h2v1c1.682,.383,1.767-.951,2-1h15c1.382-2.612,1.769-1.693,2-6-.223-.105-3.626-1.439-3-2h1c4.8-4.753,15.039,.813,20,2v4h10c.249,.054,.311,1.362,2,1V34h2V33l15,1v1h3v1c3.564,1.13,8.383,.022,11,1v1h-5c-2.7-2.515-10.481-.273-14,0l1,3,5-1,1,2,11,2V43l6-1q-.5-2.5-1-5c1.135-.844,.145,.127,1-1h13V35c3.394-2.495,1.052-3.507,7-4,1.653,1.6,5.613,1.99,9,2l4-5h-1c-1.139-1.139,0-.4-2-1V25Z"></path></svg>
        </div>
        <img src="/images/pizza.png" class="pizza-slice-big" alt="Large pizza slice with melting cheese" data-aos="zoom-in" data-aos-delay="300">
        <div class="red-banner-content">
          <div class="left-image-wrapper" data-aos="fade-right">
            <img src="/images/burger.png" alt="Juicy burger with fresh toppings">
          </div>
          <div class="banner-center-content">
            <h3>{{ t('home.banner.heading') }}</h3>
            <p>{{ t('home.banner.body') }}</p>
            <router-link to="/category/food" class="center-btn" :aria-label="t('home.banner.heading')">→</router-link>
          </div>
        </div>
      </section>

      <!-- Join Us -->
      <section class="join-us-section">
        <div class="join-us-header">
          <p style="text-transform:uppercase;letter-spacing:2px;font-size:0.85rem;margin-bottom:12px;font-weight:700;color:#14407b;">{{ t('home.joinUs.label') }}</p>
          <h2>{{ t('home.joinUs.heading') }}</h2>
          <p>{{ t('home.joinUs.body') }}</p>
        </div>
        <div class="join-us-grid">
          <div class="join-card">
            <div class="join-icon"><i class="fas fa-motorcycle"></i></div>
            <h3>{{ t('home.joinUs.rider.title') }}</h3>
            <p>{{ t('home.joinUs.rider.desc') }}</p>
            <a href="/courier-info" class="join-btn" :aria-label="t('home.joinUs.rider.title')">{{ t('home.joinUs.rider.btn') }}</a>
          </div>
          <div class="join-card">
            <div class="join-icon"><i class="fas fa-handshake"></i></div>
            <h3>{{ t('home.joinUs.partner.title') }}</h3>
            <p>{{ t('home.joinUs.partner.desc') }}</p>
            <a href="/merchant-info" class="join-btn" :aria-label="t('home.joinUs.partner.title')">{{ t('home.joinUs.partner.btn') }}</a>
          </div>
          <div class="join-card">
            <div class="join-icon"><i class="fas fa-briefcase"></i></div>
            <h3>{{ t('home.joinUs.careers.title') }}</h3>
            <p>{{ t('home.joinUs.careers.desc') }}</p>
            <a href="/careers" class="join-btn" :aria-label="t('home.joinUs.careers.title')">{{ t('home.joinUs.careers.btn') }}</a>
          </div>
        </div>
      </section>
    </main>

    <Footer />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import { useLang } from '../i18n/useLanguage.js'

const { t } = useLang()
</script>