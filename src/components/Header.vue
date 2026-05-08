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
      <button class="hamburger-btn" @click="toggleMenu" :class="{ active: menuOpen }" aria-label="Toggle menu">
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
        <button class="close-btn" @click="closeMenu" aria-label="Close menu">×</button>
      </div>
      <div class="menu-content">
        <div class="menu-section">
          <h3>Navigation</h3>
          <router-link to="/" class="menu-link" @click="closeMenu">
            <i class="fas fa-home"></i> Home
          </router-link>
          <router-link to="/courier-info" class="menu-link" @click="closeMenu">
            <i class="fas fa-motorcycle"></i> Become a Courier
          </router-link>
          <router-link to="/merchant-info" class="menu-link" @click="closeMenu">
            <i class="fas fa-handshake"></i> Become a Partner
          </router-link>
          <router-link to="/careers" class="menu-link" @click="closeMenu">
            <i class="fas fa-briefcase"></i> Careers
          </router-link>
        </div>
        <div class="menu-section">
          <h3>Categories</h3>
          <a href="/category/food" class="menu-link">
            <i class="fas fa-utensils"></i> Food
          </a>
          <a href="/category/pharmacy" class="menu-link" >
            <i class="fas fa-pills"></i> Pharmacy
          </a>
          <a href="/category/shops" class="menu-link" >
            <i class="fas fa-store"></i> Shops
          </a>
          <a href="/category/groceries" class="menu-link">
            <i class="fas fa-shopping-basket"></i> Groceries
          </a>
        </div>
        <div class="menu-section">
          <h3>Support</h3>
          <router-link to="/help-support" class="menu-link menu-link-support" @click="closeMenu">
            <i class="fas fa-headset"></i> Help & Support
          </router-link>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
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

const navigateToCategory = (category) => {
  closeMenu()
  router.push({ path: '/', query: { category } })
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
