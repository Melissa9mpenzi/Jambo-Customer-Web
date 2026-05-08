<template>
  <div>
    <div class="page-shape shape-left">
      <svg viewBox="0 0 200 200"><circle cx="60" cy="60" r="58" fill="#14407b" opacity="0.18"/><circle cx="140" cy="90" r="35" fill="#fdd20a" opacity="0.28"/><path d="M20,160 Q90,100 180,145" fill="none" stroke="#14407b" stroke-width="8" opacity="0.2"/></svg>
    </div>
    <div class="page-shape shape-right">
      <svg viewBox="0 0 200 200"><circle cx="150" cy="50" r="52" fill="#14407b" opacity="0.16"/><circle cx="60" cy="120" r="28" fill="#fdd20a" opacity="0.28"/><path d="M20,45 Q90,95 145,25" fill="none" stroke="#14407b" stroke-width="7" opacity="0.22"/></svg>
    </div>

    <Header />

    <main class="help-support-main">
      <!-- Page Hero -->
      <section class="page-hero">
        <h1>{{ t('help.heroLine1') }}<br><span>{{ t('help.heroLine2') }}</span></h1>
        <div class="paint-container">
          <svg class="paint-svg" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 1600 160"><path style="fill:#14407b" d="M333,20l9-1v1c-1.139,1.139-.4,0-1,2l-2-1v1l-5,1V22C332.861,20.861,333.6,22,333,20Zm-68,0h2v1C264.99,20.426,266.135,21.12,265,20Zm8,0,6,1v1c-3.1,1.643-1.8,1.9-7,2Q272.5,22,273,20Zm-10,1h2v1C262.99,21.426,264.135,22.12,263,21Zm43,3v2l6,1v1h-1v1h-8c-1.139-1.139,0-.4-2-1,1.01-3.129.557-1.518,0-5h-8V22h1V21h3c2.05,1.885,9.224,1.1,13,1v1h-1v1h-3Zm-46-2h3v1h-2c-0.73.474-.011,1.392-2,1Zm118,0v2c-3.138.048-8.5-.565-10-2h10Zm28,0v2c-5.937.177-15.034,1.018-18-2h18ZM1600,195H0V56c6.264-.162,9.232-2.562,14-4l19-1V50c2.893-.836,8.879-.905,10,0-3.537.286-4.884,1.349-8,2v2l-6,1v1c-4.671,1.436-7.876-1.19-11,2l16-1v2l-4,1v3H27l1,2c-.36.566-14.554,1.781-16,2,.844,1.135-.127.145,1,1,2.786,3.1,6.729,1.543,12,2,1.848,.16,2,1,2,1l15-1,45-1,1-2,8,1V67h5v1c3.858,1.033,8.376-.514,11-1V62a13.307,13.307,0,0,0,4-3h8v2l20,1V61c2.509-.907,4.5-.283,6-2l1-3,10-1c6.236-2.012,12.925-4.594,20-6V47l28-5h14V41h17V40h11l20-1V38l11,1V38h3V37l6-2V34h11V33h3V32c2.225-.659,17.162,2.252,19,3v1h2v1c1.682,.383,1.767-.951,2-1h15c1.382-2.612,1.769-1.693,2-6-.223-.105-3.626-1.439-3-2h1c4.8-4.753,15.039,.813,20,2v4h10c.249,.054,.311,1.362,2,1V34h2V33l15,1v1h3v1c3.564,1.13,8.383,.022,11,1v1h-5c-2.7-2.515-10.481-.273-14,0l1,3,5-1,1,2,11,2V43l6-1q-.5-2.5-1-5c1.135-.844,.145,.127,1-1h13V35c3.394-2.495,1.052-3.507,7-4,1.653,1.6,5.613,1.99,9,2l4-5h-1c-1.139-1.139,0-.4-2-1V25Z"></path></svg>
        </div>
        <img src="/images/rider.png" class="hi h1" alt="Delivery Rider">
        <img src="/images/phone.png" class="hi h2" alt="App on Phone">
        <img src="/images/shops.png" class="hi h3" alt="Merchant Shop">
      </section>

      <!-- Quick Contact Bar -->
      <section class="quick-contact-section">
        <div class="quick-contact-grid">
          <div class="quick-contact-item">
            <div class="quick-icon"><i class="fas fa-phone"></i></div>
            <div class="quick-info">
              <h4>{{ t('help.callUs') }}</h4>
              <p>+255 700 000 000</p>
              <small>{{ t('help.available') }}</small>
            </div>
          </div>
          <div class="quick-contact-item">
            <div class="quick-icon"><i class="fab fa-whatsapp"></i></div>
            <div class="quick-info">
              <h4>WhatsApp</h4>
              <p>{{ t('help.whatsappChat') }}</p>
              <small>{{ t('help.instant') }}</small>
            </div>
          </div>
          <div class="quick-contact-item">
            <div class="quick-icon"><i class="fas fa-envelope"></i></div>
            <div class="quick-info">
              <h4>{{ t('help.emailSupport') }}</h4>
              <p>support@jamboapp.com</p>
              <small>{{ t('help.emailResp') }}</small>
            </div>
          </div>
        </div>
      </section>

      <!-- Blue Content Section -->
      <section class="hs-content-section">
        <!-- Top wave -->
        <div class="hs-wave-top">
          <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 1600 160"><path style="fill:#fdfbf4" d="M333,20l9-1v1c-1.139,1.139-.4,0-1,2l-2-1v1l-5,1V22C332.861,20.861,333.6,22,333,20Zm-68,0h2v1C264.99,20.426,266.135,21.12,265,20Zm8,0,6,1v1c-3.1,1.643-1.8,1.9-7,2Q272.5,22,273,20Zm-10,1h2v1C262.99,21.426,264.135,22.12,263,21Zm43,3v2l6,1v1h-1v1h-8c-1.139-1.139,0-.4-2-1,1.01-3.129.557-1.518,0-5h-8V22h1V21h3c2.05,1.885,9.224,1.1,13,1v1h-1v1h-3Zm-46-2h3v1h-2c-0.73.474-.011,1.392-2,1Zm118,0v2c-3.138.048-8.5-.565-10-2h10Zm28,0v2c-5.937.177-15.034,1.018-18-2h18ZM1600,195H0V0Z"></path></svg>
        </div>

        <!-- Content -->
        <div class="hs-content-inner">
          <div class="hs-text-content">
            <h2 v-html="t('help.readyTitle').replace('\n','<br>')"></h2>
            <p>{{ t('help.readyBody') }}</p>
            <div class="hs-contact-lines">
              <div class="hs-contact-line"><i class="fas fa-phone"></i><span>+255 700 000 000</span></div>
              <div class="hs-contact-line"><i class="fab fa-whatsapp"></i><span>{{ t('help.whatsappLine') }}</span></div>
              <div class="hs-contact-line"><i class="fas fa-envelope"></i><span>support@jamboapp.com</span></div>
            </div>
            <div class="hs-signature">{{ t('help.signature') }}</div>
          </div>
          <div class="hs-image-side">
            <img src="/images/support-team.jpg" class="hs-main-img" alt="Support Team">
            <div class="hs-overlay-img"><img src="/images/customer-service-hero.jpg" alt="Customer Service"></div>
          </div>
        </div>

        <!-- FAQ inside blue section -->
        <div class="hs-faq-inner">
          <div class="hs-faq-header">
            <h2>{{ t('help.faqTitle') }}</h2>
            <p>{{ t('help.faqSubtitle') }}</p>
          </div>
          <div class="faq-container">
            <div class="faq-column">
              <div class="faq-item" v-for="(faq, index) in faqsLeft" :key="index" @click="toggleFaq(index + 'left')">
                <div class="faq-question">
                  <h3>{{ faq.question }}</h3>
                  <span class="faq-toggle" :class="{ 'active': faq.isOpen }">+</span>
                </div>
                <div class="faq-answer" :class="{ 'active': faq.isOpen }">
                  <p>{{ faq.answer }}</p>
                </div>
              </div>
            </div>
            <div class="faq-column">
              <div class="faq-item" v-for="(faq, index) in faqsRight" :key="index" @click="toggleFaq(index + 'right')">
                <div class="faq-question">
                  <h3>{{ faq.question }}</h3>
                  <span class="faq-toggle" :class="{ 'active': faq.isOpen }">+</span>
                </div>
                <div class="faq-answer" :class="{ 'active': faq.isOpen }">
                  <p>{{ faq.answer }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Bottom wave -->
        <div class="hs-wave-bottom">
          <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 1600 160"><path style="fill:#fdfbf4" d="M333,20l9-1v1c-1.139,1.139-.4,0-1,2l-2-1v1l-5,1V22C332.861,20.861,333.6,22,333,20Zm-68,0h2v1C264.99,20.426,266.135,21.12,265,20Zm8,0,6,1v1c-3.1,1.643-1.8,1.9-7,2Q272.5,22,273,20Zm-10,1h2v1C262.99,21.426,264.135,22.12,263,21Zm43,3v2l6,1v1h-1v1h-8c-1.139-1.139,0-.4-2-1,1.01-3.129.557-1.518,0-5h-8V22h1V21h3c2.05,1.885,9.224,1.1,13,1v1h-1v1h-3Zm-46-2h3v1h-2c-0.73.474-.011,1.392-2,1Zm118,0v2c-3.138.048-8.5-.565-10-2h10Zm28,0v2c-5.937.177-15.034,1.018-18-2h18ZM1600,195H0V160Z"></path></svg>
        </div>
      </section>

      <!-- Join the JamboApp Family -->
      <section class="join-section">
        <div class="section-header">
          <h2>{{ t('help.joinTitle') }}</h2>
          <p>{{ t('help.joinSubtitle') }}</p>
        </div>
        <div class="join-grid">
          <div class="join-card">
            <div class="join-icon"><img src="/images/ppepr.png" alt="Courier" /></div>
            <h3>{{ t('help.becomeCourier') }}</h3>
            <div class="steps">
              <div class="step" v-for="(step, index) in courierSteps" :key="index">
                <span class="step-number">{{ index + 1 }}</span>
                <p>{{ step }}</p>
              </div>
            </div>
            <router-link to="/courier-info" class="join-btn">{{ t('help.applyNow') }}</router-link>
          </div>
          <div class="join-card">
            <div class="join-icon"><img src="/images/shops.png" alt="Merchant" /></div>
            <h3>{{ t('help.becomeMerchant') }}</h3>
            <div class="steps">
              <div class="step" v-for="(step, index) in merchantSteps" :key="index">
                <span class="step-number">{{ index + 1 }}</span>
                <p>{{ step }}</p>
              </div>
            </div>
            <router-link to="/merchant-info" class="join-btn">{{ t('help.registerBiz') }}</router-link>
          </div>
          <div class="join-card">
            <div class="join-icon"><img src="/images/burger.png" alt="Customer" /></div>
            <h3>{{ t('help.useCustomer') }}</h3>
            <div class="steps">
              <div class="step" v-for="(step, index) in customerSteps" :key="index">
                <span class="step-number">{{ index + 1 }}</span>
                <p>{{ step }}</p>
              </div>
            </div>
            <button class="join-btn">{{ t('help.downloadApp') }}</button>
          </div>
        </div>
      </section>

      <!-- Contact Section -->
      <section class="contact-section">
        <div class="contact-container">
          <div class="contact-info">
            <div class="section-header">
              <h2>{{ t('help.contactTitle') }}</h2>
              <p>{{ t('help.contactSub') }}</p>
            </div>
            <div class="contact-methods">
              <div class="contact-method">
                <div class="contact-icon"><img src="/images/logo.png" alt="Phone" /></div>
                <div class="contact-details">
                  <h4>{{ t('help.callLabel') }}</h4>
                  <p>+255 700 000 000</p>
                  <p>{{ t('help.schedule') }}</p>
                </div>
              </div>
              <div class="contact-method">
                <div class="contact-icon"><img src="/images/jambo-logo.jpg" alt="Email" /></div>
                <div class="contact-details">
                  <h4>{{ t('help.emailUs') }}</h4>
                  <p>support@jamboapp.com</p>
                  <p>{{ t('help.emailResp') }}</p>
                </div>
              </div>
              <div class="contact-method">
                <div class="contact-icon"><img src="/images/rest.jpg" alt="Location" /></div>
                <div class="contact-details">
                  <h4>{{ t('help.visitUs') }}</h4>
                  <p>JamboApp HQ</p>
                  <p>Dar es Salaam, Tanzania</p>
                </div>
              </div>
            </div>
          </div>

          <div class="contact-form">
            <h3>{{ t('help.formTitle') }}</h3>
            <form @submit.prevent="submitForm">
              <div class="form-group">
                <label for="name">{{ t('help.yourName') }}</label>
                <input type="text" id="name" v-model="form.name" required />
              </div>
              <div class="form-group">
                <label for="email">{{ t('help.emailAddr') }}</label>
                <input type="email" id="email" v-model="form.email" required />
              </div>
              <div class="form-group">
                <label for="subject">{{ t('help.subject') }}</label>
                <select id="subject" v-model="form.subject" required>
                  <option value="">{{ t('help.selectTopic') }}</option>
                  <option value="general">{{ t('help.genInquiry') }}</option>
                  <option value="support">{{ t('help.techSupport') }}</option>
                  <option value="partnership">{{ t('help.partnership') }}</option>
                  <option value="feedback">{{ t('help.feedback') }}</option>
                </select>
              </div>
              <div class="form-group">
                <label for="message">{{ t('help.message') }}</label>
                <textarea id="message" v-model="form.message" rows="5" required></textarea>
              </div>
              <button type="submit" class="submit-btn">{{ t('help.sendMsg') }}</button>
            </form>
          </div>
        </div>
      </section>
    </main>

    <Footer />
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import { useLang } from '../i18n/useLanguage.js'
import { translations } from '../i18n/translations.js'

const { lang, t } = useLang()

/* ── Reactive FAQs (language-aware) ── */
const makeFaqs = () =>
  translations.help.faqs.map(f => ({
    question: f.q[lang.value] ?? f.q.en,
    answer:   f.a[lang.value] ?? f.a.en,
    isOpen: false,
  }))

const allFaqs = ref(makeFaqs())
watch(lang, () => { allFaqs.value = makeFaqs() })

const faqsLeft  = computed(() => allFaqs.value.slice(0, 4))
const faqsRight = computed(() => allFaqs.value.slice(4, 8))

const toggleFaq = (key) => {
  if (key.includes('left')) {
    const i = parseInt(key.replace('left', ''))
    allFaqs.value[i].isOpen = !allFaqs.value[i].isOpen
  } else {
    const i = parseInt(key.replace('right', ''))
    allFaqs.value[i + 4].isOpen = !allFaqs.value[i + 4].isOpen
  }
}

/* ── Reactive steps ── */
const courierSteps  = computed(() => translations.help.courierSteps.map(s => s[lang.value]  ?? s.en))
const merchantSteps = computed(() => translations.help.merchantSteps.map(s => s[lang.value] ?? s.en))
const customerSteps = computed(() => translations.help.customerSteps.map(s => s[lang.value] ?? s.en))

/* ── Contact form ── */
const form = ref({ name: '', email: '', subject: '', message: '' })

const submitForm = () => {
  alert(t('help.thankYou'))
  form.value = { name: '', email: '', subject: '', message: '' }
}
</script>
