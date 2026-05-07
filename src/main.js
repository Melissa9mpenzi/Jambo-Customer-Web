import { createApp } from 'vue'
import App from './App.vue'
import './style.css'

const app = createApp(App)

// Scroll handler for sticky header
const handleScroll = () => {
  const header = document.querySelector('header')
  const bodyEl = document.body
  if (!header) return

  if (window.scrollY > 20) {
    header.classList.add('sticky')
    bodyEl.classList.add('sticky-active')
  } else {
    header.classList.remove('sticky')
    bodyEl.classList.remove('sticky-active')
  }
}

app.mount('#app')

// Add scroll listener after app is mounted
app._instance && window.addEventListener('scroll', handleScroll, { passive: true })
handleScroll()

// Cleanup on page unload
window.addEventListener('beforeunload', () => {
  window.removeEventListener('scroll', handleScroll)
})
