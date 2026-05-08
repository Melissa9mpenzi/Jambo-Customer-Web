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
      <div class="lang-switcher" id="lang-switcher">
        <button class="lang-trigger" @click="dropdownOpen = !dropdownOpen" id="lang-trigger-btn" :aria-expanded="dropdownOpen">
          <span class="lang-flag">{{ lang === 'sw' ? '🇹🇿' : '🇬🇧' }}</span>
          <span class="lang-name">{{ lang === 'sw' ? 'Kiswahili' : 'English' }}</span>
          <i class="fas fa-chevron-down lang-caret" :class="{ open: dropdownOpen }"></i>
        </button>
        <transition name="dropdown-fade">
          <div class="lang-dropdown" v-if="dropdownOpen" role="listbox">
            <button class="lang-option" :class="{ active: lang === 'sw' }" @click="selectLang('sw')" id="lang-sw-btn" role="option">
              <span>🇹🇿</span> Kiswahili
            </button>
            <button class="lang-option" :class="{ active: lang === 'en' }" @click="selectLang('en')" id="lang-en-btn" role="option">
              <span>🇬🇧</span> English
            </button>
          </div>
        </transition>
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

const dropdownOpen = ref(false)

const selectLang = (code) => {
  setLanguage(code)
  dropdownOpen.value = false
}

const closeDropdown = (e) => {
  if (!document.getElementById('lang-switcher')?.contains(e.target)) {
    dropdownOpen.value = false
  }
}

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
  document.addEventListener('click', closeDropdown)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  document.removeEventListener('click', closeDropdown)
  document.body.style.overflow = ''
})
</script>

<style scoped>
.lang-switcher { position: relative; }

.lang-trigger {
  display: flex;
  align-items: center;
  gap: 6px;
  background: #14407b;
  border: 2px solid #14407b;
  border-radius: 24px;
  padding: 6px 14px 6px 10px;
  cursor: pointer;
  color: #fff;
  font-family: inherit;
  font-size: 0.85rem;
  font-weight: 600;
  transition: background 0.2s, border-color 0.2s, box-shadow 0.2s;
  white-space: nowrap;
  box-shadow: 0 2px 8px rgba(20,64,123,0.18);
}
.lang-trigger:hover { background: #1a4e96; border-color: #fdd20a; box-shadow: 0 4px 14px rgba(20,64,123,0.28); }

.lang-flag { font-size: 1.2rem; line-height: 1; }
.lang-name { letter-spacing: 0.03em; }

.lang-caret {
  font-size: 0.7rem;
  transition: transform 0.25s;
  opacity: 0.85;
}
.lang-caret.open { transform: rotate(180deg); }

.lang-dropdown {
  position: absolute;
  top: calc(100% + 8px);
  right: 0;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 8px 32px rgba(20,64,123,0.18);
  overflow: hidden;
  min-width: 150px;
  z-index: 9999;
}

.lang-option {
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  padding: 11px 18px;
  background: none;
  border: none;
  cursor: pointer;
  font-family: inherit;
  font-size: 0.9rem;
  font-weight: 500;
  color: #14407b;
  transition: background 0.15s;
  text-align: left;
}
.lang-option span { font-size: 1.2rem; }
.lang-option:hover { background: #f0f5ff; }
.lang-option.active { background: #14407b; color: #fff; font-weight: 700; }
.lang-option.active:hover { background: #1a4e96; }

.dropdown-fade-enter-active, .dropdown-fade-leave-active { transition: opacity 0.18s, transform 0.18s; }
.dropdown-fade-enter-from, .dropdown-fade-leave-to { opacity: 0; transform: translateY(-6px); }
</style>
