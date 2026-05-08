/**
 * Lightweight i18n composable for JamboApp
 * Default language: Kiswahili (sw)
 * Alternate: English (en)
 */
import { ref } from 'vue'
import { translations } from './translations.js'

// Shared reactive lang ref — single instance across all components
const lang = ref(localStorage.getItem('jambo_lang') || 'sw')

export function useLang() {
  /**
   * Set language and persist choice
   * @param {'sw'|'en'} code
   */
  const setLanguage = (code) => {
    lang.value = code
    localStorage.setItem('jambo_lang', code)
  }

  /**
   * Translate a dot-notation key, e.g. t('nav.home')
   * Falls back to English, then the key itself
   */
  const t = (key) => {
    const parts = key.split('.')
    let node = translations
    for (const part of parts) {
      if (!node || typeof node !== 'object' || !(part in node)) return key
      node = node[part]
    }
    if (typeof node === 'object') return node[lang.value] ?? node.en ?? key
    return key
  }

  return { lang, t, setLanguage }
}
