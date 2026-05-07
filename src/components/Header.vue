<template>
  <header>
    <nav class="header-nav">
      <div class="logo">
        <div class="logo-circle">
          <img src="/images/jambo-logo.jpg" alt="Jambo Bites logo">
        </div>
      </div>
      <div class="spacer"></div>
      <div class="header-center-image">
        <img src="/images/logo.png" alt="Header Center Image" />
      </div>
      <div class="spacer"></div>
      <button class="contact-btn" @click="goToHelpSupport">Help & Support</button>
    </nav>
  </header>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const goToHelpSupport = () => {
  router.push('/help-support')
}
</script>

