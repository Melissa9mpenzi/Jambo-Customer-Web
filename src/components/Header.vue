<template>
  <header :class="{ sticky: isSticky }">
    <nav class="header-nav">
      <router-link to="/" class="logo">
        <div class="logo-circle">
          <img src="/images/jambo-logo.jpg" alt="Jambo Bites logo">
        </div>
      </router-link>
      <div class="spacer"></div>
      <div class="header-center-image">
        <img src="/images/logo.png" alt="Header Center Image" />
      </div>
      <div class="spacer"></div>

      <!-- Language switcher -->
      <div class="lang-switcher">
        <button
          @click="setLanguage('sw')"
          :class="{ active: lang === 'sw' }"
          title="Kiswahili"
          aria-label="Kiswahili"
          id="lang-sw-btn"
        >🇹🇿</button>
        <button
          @click="setLanguage('en')"
          :class="{ active: lang === 'en' }"
          title="English"
          aria-label="English"
          id="lang-en-btn"
        >🇬🇧</button>
      </div>

      <button class="hamburger-btn" @click="toggleMenu" :class="{ active: menuOpen }" :aria-label="t('nav.toggleMenu')">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </nav>
    <div class="menu-overlay" v-if="menuOpen" @click="closeMenu"></div>
    <div class="slide-menu" :class="{ open: menuOpen }">
      <div class="menu-header">
        <div class="menu-logo-circle">
          <img src="/images/jambo-logo.jpg" alt="Jambo Bites logo">
        </div>
        <button class="close-btn" @click="closeMenu" :aria-label="t('nav.closeMenu')">×</button>
      </div>
      <div class="menu-content">
        <div class="menu-section">
          <h3>{{ t('nav.heading') }}</h3>
          <router-link to="/" class="menu-link" @click="closeMenu">
            <i class="fas fa-home"></i> {{ t('nav.home') }}
          </router-link>
          <router-link to="/courier-info" class="menu-link" @click="closeMenu">
            <i class="fas fa-motorcycle"></i> {{ t('nav.courier') }}
          </router-link>
          <router-link to="/merchant-info" class="menu-link" @click="closeMenu">
            <i class="fas fa-handshake"></i> {{ t('nav.partner') }}
          </router-link>
          <router-link to="/careers" class="menu-link" @click="closeMenu">
            <i class="fas fa-briefcase"></i> {{ t('nav.careers') }}
          </router-link>
        </div>
        <div class="menu-section">
          <h3>{{ t('nav.categories') }}</h3>
          <a href="/category/food" class="menu-link">
            <i class="fas fa-utensils"></i> {{ t('nav.food') }}
          </a>
          <a href="/category/pharmacy" class="menu-link">
            <i class="fas fa-pills"></i> {{ t('nav.pharmacy') }}
          </a>
          <a href="/category/shops" class="menu-link">
            <i class="fas fa-store"></i> {{ t('nav.shops') }}
          </a>
          <a href="/category/groceries" class="menu-link">
            <i class="fas fa-shopping-basket"></i> {{ t('nav.groceries') }}
          </a>
        </div>
        <div class="menu-section">
          <h3>{{ t('nav.support') }}</h3>
          <router-link to="/help-support" class="menu-link menu-link-support" @click="closeMenu">
            <i class="fas fa-headset"></i> {{ t('nav.helpSupport') }}
          </router-link>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import { useLang } from '../i18n/useLanguage.js'

const router = useRouter()
const { lang, t, setLanguage } = useLang()

const menuOpen = ref(false)
const isSticky = ref(false)

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
  document.body.style.overflow = menuOpen.value ? 'hidden' : ''
}

const closeMenu = () => {
  menuOpen.value = false
  document.body.style.overflow = ''
}

const handleScroll = () => {
  isSticky.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  document.body.style.overflow = ''
})
</script>
