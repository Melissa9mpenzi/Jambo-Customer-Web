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
      <!-- Shared Hero Section -->
      <HeroSection />

      <!-- Quick Contact Section -->
      <section class="quick-contact-section">
        <div class="quick-contact-grid">
          <div class="quick-contact-item">
            <div class="quick-icon">
              <span>📞</span>
            </div>
            <div class="quick-info">
              <h4>Call Us Now</h4>
              <p>+254 700 000 000</p>
              <small>Available 24/7</small>
            </div>
          </div>
          <div class="quick-contact-item">
            <div class="quick-icon">
              <span>�</span>
            </div>
            <div class="quick-info">
              <h4>WhatsApp</h4>
              <p>Chat with our team</p>
              <small>Instant response</small>
            </div>
          </div>
          <div class="quick-contact-item">
            <div class="quick-icon">
              <span>✉️</span>
            </div>
            <div class="quick-info">
              <h4>Email Support</h4>
              <p>support@jamboapp.com</p>
              <small>Response within 24hrs</small>
            </div>
          </div>
        </div>
      </section>

      <!-- Visually Striking Blue Support Section -->
      <section class="striking-support-section">
        <!-- Top paint wave -->
        <div class="paint-wave-top">
          <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 1600 120">
            <path fill="#f8f9fa" d="M0,60 C400,120 1200,0 1600,60 L1600,120 L0,120 Z"/>
          </svg>
        </div>

        
        <!-- Floating delivery images -->
        <div class="floating-images">
          <img src="/images/drug.png" class="float-img img-med" alt="Medicine">
          <img src="/images/pizza.png" class="float-img img-pizza" alt="Pizza">
          <img src="/images/burger.png" class="float-img img-burger" alt="Burger">
          <img src="/images/shops.png" class="float-img img-shop" alt="Shop">
          <img src="/images/toma.png" class="float-img img-grocery" alt="Grocery">
        </div>
        
        <!-- Main content -->
        <div class="striking-content">
          <div class="content-badge">
            <i class="fas fa-headset"></i>
            <span>Always Here For You</span>
          </div>
          
          <h2 class="striking-title">
            Need Help?<br>
            <span class="highlight">We've Got You Covered</span>
          </h2>
          
          <p class="striking-description">
            Our dedicated support team is available round the clock to assist you with orders, 
            partnerships, or any questions you might have about JamboApp.
          </p>
          
          <div class="striking-stats">
            <div class="stat-card">
              <div class="stat-icon"><i class="fas fa-users"></i></div>
              <div class="stat-value">500+</div>
              <div class="stat-desc">Support Agents</div>
            </div>
            <div class="stat-card featured">
              <div class="stat-icon"><i class="fas fa-clock"></i></div>
              <div class="stat-value">24/7</div>
              <div class="stat-desc">Always Available</div>
            </div>
            <div class="stat-card">
              <div class="stat-icon"><i class="fas fa-smile"></i></div>
              <div class="stat-value">99%</div>
              <div class="stat-desc">Happy Customers</div>
            </div>
          </div>
          
          <div class="cta-buttons">
            <button class="btn-primary">
              <i class="fas fa-phone"></i> Call Now
            </button>
            <button class="btn-secondary">
              <i class="fas fa-comments"></i> Start Chat
            </button>
          </div>
        </div>
        
        <!-- Bottom paint wave -->
        <div class="paint-wave-bottom">
          <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 1600 120">
            <path fill="#ffffff" d="M0,60 C400,0 1200,120 1600,60 L1600,0 L0,0 Z"/>
          </svg>
        </div>
      </section>

      <!-- FAQ Section -->
      <section class="faq-section">
        <div class="section-header">
          <h2>Frequently Asked Questions</h2>
          <p>Find quick answers to common questions about JamboApp</p>
        </div>
        <div class="faq-avatar">
          <img src="/images/faq-expert.jpg" alt="Help Expert" class="faq-expert-image" />
          <p>Got questions? We have answers!</p>
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
      </section>

      <!-- How to Join Section -->
      <section class="join-section">
        <div class="section-header">
          <h2>Join the JamboApp Family</h2>
          <p>Discover how you can become part of our growing community</p>
        </div>
        <div class="join-grid">
          <div class="join-card">
            <div class="join-icon">
              <img src="/images/ppepr.png" alt="Courier" />
            </div>
            <h3>Become a Courier</h3>
            <div class="steps">
              <div class="step" v-for="(step, index) in courierSteps" :key="index">
                <span class="step-number">{{ index + 1 }}</span>
                <p>{{ step }}</p>
              </div>
            </div>
            <button class="join-btn">Apply Now</button>
          </div>

          <div class="join-card">
            <div class="join-icon">
              <img src="/images/shops.png" alt="Merchant" />
            </div>
            <h3>Become a Merchant</h3>
            <div class="steps">
              <div class="step" v-for="(step, index) in merchantSteps" :key="index">
                <span class="step-number">{{ index + 1 }}</span>
                <p>{{ step }}</p>
              </div>
            </div>
            <button class="join-btn">Register Business</button>
          </div>

          <div class="join-card">
            <div class="join-icon">
              <img src="/images/burger.png" alt="Customer" />
            </div>
            <h3>Use as Customer</h3>
            <div class="steps">
              <div class="step" v-for="(step, index) in customerSteps" :key="index">
                <span class="step-number">{{ index + 1 }}</span>
                <p>{{ step }}</p>
              </div>
            </div>
            <button class="join-btn">Download App</button>
          </div>
        </div>
      </section>

      <!-- Contact Section -->
      <section class="contact-section">
        <div class="contact-container">
          <div class="contact-info">
            <div class="section-header">
              <h2>Get in Touch</h2>
              <p>We're here to help with any questions or concerns</p>
            </div>
            <div class="contact-methods">
              <div class="contact-method">
                <div class="contact-icon">
                  <img src="/images/logo.png" alt="Phone" />
                </div>
                <div class="contact-details">
                  <h4>Call Us</h4>
                  <p>+254 700 000 000</p>
                  <p>Mon-Fri: 8AM-8PM</p>
                </div>
              </div>

              <div class="contact-method">
                <div class="contact-icon">
                  <img src="/images/jambo-logo.jpg" alt="Email" />
                </div>
                <div class="contact-details">
                  <h4>Email Us</h4>
                  <p>support@jamboapp.com</p>
                  <p>Response within 24hrs</p>
                </div>
              </div>

              <div class="contact-method">
                <div class="contact-icon">
                  <img src="/images/rest.jpg" alt="Location" />
                </div>
                <div class="contact-details">
                  <h4>Visit Us</h4>
                  <p>JamboApp HQ</p>
                  <p>Nairobi, Kenya</p>
                </div>
              </div>
            </div>
          </div>

          <div class="contact-form">
            <h3>Send us a Message</h3>
            <form @submit.prevent="submitForm">
              <div class="form-group">
                <label for="name">Your Name</label>
                <input type="text" id="name" v-model="form.name" required />
              </div>
              <div class="form-group">
                <label for="email">Email Address</label>
                <input type="email" id="email" v-model="form.email" required />
              </div>
              <div class="form-group">
                <label for="subject">Subject</label>
                <select id="subject" v-model="form.subject" required>
                  <option value="">Select a topic</option>
                  <option value="general">General Inquiry</option>
                  <option value="support">Technical Support</option>
                  <option value="partnership">Partnership</option>
                  <option value="feedback">Feedback</option>
                </select>
              </div>
              <div class="form-group">
                <label for="message">Message</label>
                <textarea id="message" v-model="form.message" rows="5" required></textarea>
              </div>
              <button type="submit" class="submit-btn">Send Message</button>
            </form>
          </div>
        </div>
      </section>

      <!-- Emergency Support -->
      <section class="emergency-section">
        <div class="emergency-content">
          <div class="emergency-icon">
            <img src="/images/logo.png" alt="Emergency Support" />
          </div>
          <div class="emergency-text">
            <h2>Emergency Support</h2>
            <p>For urgent issues with active deliveries, please call our emergency hotline</p>
            <div class="emergency-number">
              <span>Emergency Hotline:</span>
              <strong>+254 700 999 999</strong>
            </div>
          </div>
        </div>
      </section>
    </main>

    <Footer />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import HeroSection from '../components/HeroSection.vue'

const faqs = ref([
  {
    question: 'How do I place my first order?',
    answer: 'Download the JamboApp, create an account, browse available restaurants or stores, add items to your cart, and checkout. Your delivery will be on its way!',
    isOpen: false
  },
  {
    question: 'What are the delivery fees?',
    answer: 'Delivery fees vary based on distance and time of day. You can see the exact fee before confirming your order. Premium members enjoy reduced delivery fees.',
    isOpen: false
  },
  {
    question: 'How do I become a delivery partner?',
    answer: 'Apply through our website or app, provide required documents (ID, vehicle registration), complete our training program, and start earning!',
    isOpen: false
  },
  {
    question: 'How can I track my order?',
    answer: 'Once your order is confirmed, you can track it in real-time through the app. You\'ll see your courier\'s location and estimated arrival time.',
    isOpen: false
  },
  {
    question: 'What payment methods are accepted?',
    answer: 'We accept M-Pesa, credit/debit cards, and cash on delivery. You can save multiple payment methods in your account for convenience.',
    isOpen: false
  },
  {
    question: 'How do I report an issue with my order?',
    answer: 'Go to your order history, select the order with an issue, and use the "Report Problem" feature. You can also call our support team for immediate assistance.',
    isOpen: false
  },
  {
    question: 'Is my personal information secure?',
    answer: 'Yes, we use industry-standard encryption to protect your personal and payment information. Your data is never shared with third parties without your consent.',
    isOpen: false
  },
  {
    question: 'Can I schedule orders in advance?',
    answer: 'Yes! You can schedule orders up to 7 days in advance through our app. Perfect for planning meals or important deliveries.',
    isOpen: false
  }
])

const faqsLeft = ref(faqs.value.slice(0, 4))
const faqsRight = ref(faqs.value.slice(4, 8))

const courierSteps = [
  'Download JamboApp and create a partner account',
  'Submit your ID and vehicle documentation',
  'Complete our online training module',
  'Get approved and start accepting deliveries',
  'Earn money on your own schedule'
]

const merchantSteps = [
  'Register your business on our platform',
  'Submit business licenses and documentation',
  'Set up your menu and pricing',
  'Go live and start receiving orders',
  'Manage orders through our merchant dashboard'
]

const customerSteps = [
  'Download JamboApp from App Store or Google Play',
  'Create your account with phone or email',
  'Browse restaurants, shops, and pharmacies',
  'Place orders and track in real-time',
  'Enjoy fast, reliable delivery to your doorstep'
]

const form = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})


const toggleFaq = (key) => {
  if (key.includes('left')) {
    const index = parseInt(key.replace('left', ''))
    faqsLeft.value[index].isOpen = !faqsLeft.value[index].isOpen
  } else {
    const index = parseInt(key.replace('right', ''))
    faqsRight.value[index].isOpen = !faqsRight.value[index].isOpen
  }
}

const submitForm = () => {
  // Handle form submission
  alert('Thank you for your message! We will get back to you within 24 hours.')
  form.value = {
    name: '',
    email: '',
    subject: '',
    message: ''
  }
}
</script>

<style scoped>
.help-support-main {
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

/* Hero Section styles removed — now using shared HeroSection component */

.hero-content h1 {
  font-size: 3.5rem;
  color: #14407b;
  margin-bottom: 1.5rem;
  font-weight: 700;
  line-height: 1.2;
}

.hero-content p {
  font-size: 1.3rem;
  color: #666;
  line-height: 1.6;
  margin-bottom: 2rem;
}

.hero-image {
  display: flex;
  justify-content: center;
  align-items: center;
}

.support-avatar {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.hero-support-image {
  width: 300px;
  height: 300px;
  object-fit: cover;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
}

/* Quick Contact Section */
.quick-contact-section {
  margin-bottom: 4rem;
  padding: 3rem 0;
  background: #f8f9fa;
  border-radius: 20px;
}

.quick-contact-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 2rem;
}

.quick-contact-item {
  background: white;
  border-radius: 12px;
  padding: 2rem 1.5rem;
  text-align: center;
  border: 1px solid #e9ecef;
  transition: all 0.2s ease;
}

.quick-contact-item:hover {
  border-color: #14407b;
  transform: translateY(-2px);
}

.quick-icon {
  width: 50px;
  height: 50px;
  background: #14407b;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;
  font-size: 1.3rem;
}

.quick-icon span {
  filter: brightness(0) invert(1);
}

.quick-info h4 {
  color: #14407b;
  margin: 0 0 0.5rem 0;
  font-size: 1.1rem;
  font-weight: 600;
}

.quick-info p {
  color: #333;
  margin: 0 0 0.3rem 0;
  font-size: 1rem;
  font-weight: 500;
}

.quick-info small {
  color: #666;
  font-size: 0.85rem;
}

/* Blue Support Section */
.striking-support-section {
  position: relative;
  background: #14407b;
  padding: 6rem 0 8rem;
  margin: 0;
  overflow: hidden;
}

/* Paint wave separators */
.paint-wave-top {
  position: absolute;
  top: -1px;
  left: 0;
  width: 100%;
  height: 80px;
  z-index: 2;
}

.paint-wave-top svg {
  width: 100%;
  height: 100%;
  display: block;
}

.paint-wave-bottom {
  position: absolute;
  bottom: -1px;
  left: 0;
  width: 100%;
  height: 80px;
  z-index: 2;
}

.paint-wave-bottom svg {
  width: 100%;
  height: 100%;
  display: block;
}


/* Floating images */
.floating-images {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 3;
}

.float-img {
  position: absolute;
  width: 100px;
  height: 100px;
  object-fit: contain;
  filter: drop-shadow(0 10px 20px rgba(0,0,0,0.3));
  animation: floatBounce 3s ease-in-out infinite;
}

.img-med {
  left: 8%;
  top: 20%;
  width: 80px;
  height: 80px;
  animation-delay: 0s;
}

.img-pizza {
  left: 5%;
  bottom: 25%;
  width: 90px;
  height: 90px;
  animation-delay: 0.5s;
}

.img-burger {
  left: 50%;
  top: 10%;
  width: 140px;
  height: 140px;
  transform: translateX(-50%);
  animation: floatBurger 3.5s ease-in-out infinite;
}

.img-shop {
  right: 8%;
  top: 25%;
  width: 85px;
  height: 85px;
  animation-delay: 1s;
}

.img-grocery {
  right: 5%;
  bottom: 20%;
  width: 80px;
  height: 80px;
  animation-delay: 1.5s;
}

@keyframes floatBounce {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-15px) rotate(3deg); }
}

@keyframes floatBurger {
  0%, 100% { transform: translateX(-50%) translateY(0) rotate(0deg); }
  50% { transform: translateX(-50%) translateY(-20px) rotate(-2deg); }
}

/* Main content */
.striking-content {
  position: relative;
  z-index: 4;
  max-width: 700px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
}

.content-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  padding: 0.6rem 1.2rem;
  border-radius: 50px;
  margin-bottom: 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.content-badge i {
  color: #fdd20a;
  font-size: 1.2rem;
}

.content-badge span {
  color: #ffffff;
  font-size: 0.9rem;
  font-weight: 500;
}

.striking-title {
  color: #ffffff;
  font-size: 3rem;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 1.5rem;
}

.striking-title .highlight {
  color: #fdd20a;
  text-shadow: 0 2px 10px rgba(253, 210, 10, 0.3);
}

.striking-description {
  color: rgba(255, 255, 255, 0.9);
  font-size: 1.15rem;
  line-height: 1.8;
  margin-bottom: 2.5rem;
  max-width: 550px;
  margin-left: auto;
  margin-right: auto;
}

/* Stats cards */
.striking-stats {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  flex-wrap: wrap;
  margin-bottom: 2.5rem;
}

.stat-card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  padding: 1.5rem;
  min-width: 140px;
  border: 1px solid rgba(255, 255, 255, 0.15);
  transition: all 0.3s ease;
}

.stat-card:hover {
  transform: translateY(-8px);
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
}

.stat-card.featured {
  background: rgba(253, 210, 10, 0.15);
  border-color: rgba(253, 210, 10, 0.3);
  transform: scale(1.05);
}

.stat-card.featured:hover {
  background: rgba(253, 210, 10, 0.25);
  box-shadow: 0 20px 40px rgba(253, 210, 10, 0.2);
}

.stat-icon {
  font-size: 1.8rem;
  color: #fdd20a;
  margin-bottom: 0.8rem;
}

.stat-value {
  font-size: 2.2rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 0.3rem;
}

.stat-desc {
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.8);
  font-weight: 500;
}

/* CTA Buttons */
.cta-buttons {
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.btn-primary {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: #fdd20a;
  color: #14407b;
  padding: 1rem 2rem;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1rem;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 5px 20px rgba(253, 210, 10, 0.3);
}

.btn-primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 30px rgba(253, 210, 10, 0.4);
}

.btn-secondary {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: transparent;
  color: #ffffff;
  padding: 1rem 2rem;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1rem;
  border: 2px solid rgba(255, 255, 255, 0.5);
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.15);
  border-color: #ffffff;
  transform: translateY(-3px);
}

/* Section Headers */
.section-header {
  text-align: center;
  margin-bottom: 3rem;
}

.section-header h2 {
  font-size: 2.5rem;
  color: #14407b;
  margin-bottom: 1rem;
  font-weight: 700;
}

.section-header p {
  font-size: 1.1rem;
  color: #666;
  max-width: 600px;
  margin: 0 auto;
}

/* FAQ Section */
.faq-section {
  margin-bottom: 4rem;
}

.faq-avatar {
  text-align: center;
  margin-bottom: 3rem;
}

.faq-expert-image {
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  margin-bottom: 1.5rem;
}

.faq-avatar p {
  color: #666;
  font-size: 1.2rem;
  margin: 0;
  font-weight: 500;
}

.faq-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.faq-column {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.faq-item {
  background: white;
  border-radius: 12px;
  border: 1px solid #e9ecef;
  overflow: hidden;
  transition: all 0.2s ease;
}

.faq-item:hover {
  border-color: #14407b;
}

.faq-question {
  padding: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  background: white;
}

.faq-question h3 {
  color: #14407b;
  font-size: 1rem;
  margin: 0;
  font-weight: 600;
  line-height: 1.4;
}

.faq-toggle {
  font-size: 1.2rem;
  color: #666;
  font-weight: bold;
  transition: transform 0.2s ease;
  flex-shrink: 0;
  margin-left: 1rem;
}

.faq-toggle.active {
  transform: rotate(45deg);
  color: #14407b;
}

.faq-answer {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease;
  background: #f8f9fa;
}

.faq-answer.active {
  max-height: 300px;
  padding: 1.5rem;
}

.faq-answer p {
  color: #666;
  line-height: 1.6;
  margin: 0;
}

/* Join Section */
.join-section {
  margin-bottom: 4rem;
}

.join-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.join-card {
  background: white;
  border-radius: 20px;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;
}

.join-card:hover {
  transform: translateY(-5px);
}

.join-icon {
  width: 80px;
  height: 80px;
  margin: 0 auto 1.5rem;
  background: linear-gradient(135deg, #14407b 0%, #2a5298 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.join-icon img {
  width: 50px;
  height: 50px;
  filter: brightness(0) invert(1);
}

.join-card h3 {
  color: #14407b;
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  font-weight: 600;
}

.steps {
  text-align: left;
  margin-bottom: 2rem;
}

.step {
  display: flex;
  align-items: flex-start;
  margin-bottom: 1rem;
}

.step-number {
  background: #fdd20a;
  color: #14407b;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  margin-right: 1rem;
  flex-shrink: 0;
}

.step p {
  margin: 0;
  color: #666;
  line-height: 1.5;
}

.join-btn {
  background: linear-gradient(135deg, #14407b 0%, #2a5298 100%);
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 25px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.join-btn:hover {
  background: linear-gradient(135deg, #2a5298 0%, #14407b 100%);
  transform: translateY(-2px);
}

/* Contact Section */
.contact-section {
  margin-bottom: 4rem;
}

.contact-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
  border-radius: 25px;
  padding: 3rem;
  box-shadow: 0 15px 40px rgba(0,0,0,0.08);
}

.contact-info .section-header {
  text-align: left;
  margin-bottom: 2rem;
}

.contact-methods {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.contact-method {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.contact-icon {
  width: 60px;
  height: 60px;
  background: #fdd20a;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.contact-icon img {
  width: 30px;
  height: 30px;
}

.contact-details h4 {
  color: #14407b;
  margin: 0 0 0.5rem 0;
  font-size: 1.1rem;
  font-weight: 600;
}

.contact-details p {
  color: #666;
  margin: 0.2rem 0;
  font-size: 0.95rem;
}

.contact-form {
  background: white;
  padding: 2rem;
  border-radius: 20px;
  box-shadow: 0 5px 20px rgba(0,0,0,0.05);
}

.contact-form h3 {
  color: #14407b;
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
  font-weight: 600;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  color: #14407b;
  margin-bottom: 0.5rem;
  font-weight: 500;
}

.form-group input,
.form-group select,
.form-group textarea {
  width: 100%;
  padding: 1rem;
  border: 2px solid #e9ecef;
  border-radius: 10px;
  font-size: 1rem;
  transition: border-color 0.3s ease;
  box-sizing: border-box;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #14407b;
}

.submit-btn {
  background: linear-gradient(135deg, #fdd20a 0%, #ffc107 100%);
  color: #14407b;
  border: none;
  padding: 1rem 2rem;
  border-radius: 25px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;
}

.submit-btn:hover {
  background: linear-gradient(135deg, #ffc107 0%, #fdd20a 100%);
  transform: translateY(-2px);
}

/* Emergency Section */
.emergency-section {
  background: linear-gradient(135deg, #dc3545 0%, #c82333 100%);
  border-radius: 25px;
  padding: 3rem;
  margin-bottom: 2rem;
  color: white;
}

.emergency-content {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.emergency-icon {
  width: 80px;
  height: 80px;
  background: rgba(255,255,255,0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.emergency-icon img {
  width: 50px;
  height: 50px;
  filter: brightness(0) invert(1);
}

.emergency-text h2 {
  margin: 0 0 1rem 0;
  font-size: 2rem;
  font-weight: 700;
}

.emergency-text p {
  margin: 0 0 1.5rem 0;
  font-size: 1.1rem;
  opacity: 0.9;
}

.emergency-number {
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 1.2rem;
}

.emergency-number span {
  opacity: 0.9;
}

.emergency-number strong {
  font-size: 1.5rem;
  font-weight: 700;
}

/* Responsive Design */
@media (max-width: 768px) {
  .hero-section {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .hero-content h1 {
    font-size: 2rem;
  }

  .hero-support-image {
    width: 250px;
    height: 250px;
  }

  .quick-contact-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  
  .faq-container {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .faq-avatar {
    margin-bottom: 2rem;
  }

  .faq-expert-image {
    width: 150px;
    height: 150px;
  }

  .striking-support-section {
    padding: 4rem 0 6rem;
  }

  .float-img {
    width: 50px;
    height: 50px;
  }

  .img-burger {
    width: 80px;
    height: 80px;
  }

  .img-med, .img-pizza, .img-shop, .img-grocery {
    display: none;
  }

  .striking-title {
    font-size: 2rem;
  }

  .striking-description {
    font-size: 1rem;
  }

  .striking-stats {
    gap: 0.8rem;
  }

  .stat-card {
    padding: 1rem;
    min-width: 100px;
  }

  .stat-value {
    font-size: 1.5rem;
  }

  .cta-buttons {
    flex-direction: column;
    align-items: center;
  }

  .btn-primary, .btn-secondary {
    width: 100%;
    max-width: 250px;
    justify-content: center;
  }

  .join-grid {
    grid-template-columns: 1fr;
  }

  .contact-container {
    grid-template-columns: 1fr;
  }

  .emergency-content {
    flex-direction: column;
    text-align: center;
  }

  .help-support-main {
    padding: 1rem;
  }
}

@media (max-width: 1024px) {
  .faq-container {
    grid-template-columns: 1fr;
  }

  .quick-contact-grid {
    grid-template-columns: 1fr;
  }

  .striking-support-section {
    padding: 5rem 0 7rem;
  }

  .float-img {
    width: 70px;
    height: 70px;
  }

  .img-burger {
    width: 100px;
    height: 100px;
  }

  .striking-title {
    font-size: 2.5rem;
  }

  .striking-stats {
    gap: 1.2rem;
  }

  .stat-card {
    min-width: 120px;
  }
}

/* Page Shapes */
.page-shape {
  position: absolute;
  top: 0;
  z-index: -1;
}

.shape-left {
  left: 0;
  width: 300px;
  height: 300px;
}

.shape-right {
  right: 0;
  width: 300px;
  height: 300px;
}
</style>
