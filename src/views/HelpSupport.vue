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
        <h1>Help &amp; Support<br><span>We're Here For You</span></h1>
        <div class="paint-container">
          <svg class="paint-svg" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 1600 160"><path style="fill:#14407b" d="M333,20l9-1v1c-1.139,1.139-.4,0-1,2l-2-1v1l-5,1V22C332.861,20.861,333.6,22,333,20Zm-68,0h2v1C264.99,20.426,266.135,21.12,265,20Zm8,0,6,1v1c-3.1,1.643-1.8,1.9-7,2Q272.5,22,273,20Zm-10,1h2v1C262.99,21.426,264.135,22.12,263,21Zm43,3v2l6,1v1h-1v1h-8c-1.139-1.139,0-.4-2-1,1.01-3.129.557-1.518,0-5h-8V22h1V21h3c2.05,1.885,9.224,1.1,13,1v1h-1v1h-3Zm-46-2h3v1h-2c-0.73.474-.011,1.392-2,1Zm118,0v2c-3.138.048-8.5-.565-10-2h10Zm28,0v2c-5.937.177-15.034,1.018-18-2h18ZM1600,195H0V56c6.264-.162,9.232-2.562,14-4l19-1V50c2.893-.836,8.879-.905,10,0-3.537.286-4.884,1.349-8,2v2l-6,1v1c-4.671,1.436-7.876-1.19-11,2l16-1v2l-4,1v3H27l1,2c-.36.566-14.554,1.781-16,2,.844,1.135-.127.145,1,1,2.786,3.1,6.729,1.543,12,2,1.848,.16,2,1,2,1l15-1,45-1,1-2,8,1V67h5v1c3.858,1.033,8.376-.514,11-1V62a13.307,13.307,0,0,0,4-3h8v2l20,1V61c2.509-.907,4.5-.283,6-2l1-3,10-1c6.236-2.012,12.925-4.594,20-6V47l28-5h14V41h17V40h11l20-1V38l11,1V38h3V37l6-2V34h11V33h3V32c2.225-.659,17.162,2.252,19,3v1h2v1c1.682,.383,1.767-.951,2-1h15c1.382-2.612,1.769-1.693,2-6-.223-.105-3.626-1.439-3-2h1c4.8-4.753,15.039,.813,20,2v4h10c.249,.054,.311,1.362,2,1V34h2V33l15,1v1h3v1c3.564,1.13,8.383,.022,11,1v1h-5c-2.7-2.515-10.481-.273-14,0l1,3,5-1,1,2,11,2V43l6-1q-.5-2.5-1-5c1.135-.844,.145,.127,1-1h13V35c3.394-2.495,1.052-3.507,7-4,1.653,1.6,5.613,1.99,9,2l4-5h-1c-1.139-1.139,0-.4-2-1V25Z"></path></svg>
        </div>
        <img src="/images/rider.png" class="hi h1" alt="Delivery Rider">
        <img src="/images/phone.png" class="hi h2" alt="App on Phone">
        <img src="/images/shops.png" class="hi h3" alt="Merchant Shop">
      </section>

      <!-- Quick Contact Section -->
      <section class="quick-contact-section">
        <div class="quick-contact-grid">
          <div class="quick-contact-item">
            <div class="quick-icon">
              <i class="fas fa-phone"></i>
            </div>
            <div class="quick-info">
              <h4>Call Us Now</h4>
              <p>+254 700 000 000</p>
              <small>Available 24/7</small>
            </div>
          </div>
          <div class="quick-contact-item">
            <div class="quick-icon">
              <i class="fab fa-whatsapp"></i>
            </div>
            <div class="quick-info">
              <h4>WhatsApp</h4>
              <p>Chat with our team</p>
              <small>Instant response</small>
            </div>
          </div>
          <div class="quick-contact-item">
            <div class="quick-icon">
              <i class="fas fa-envelope"></i>
            </div>
            <div class="quick-info">
              <h4>Email Support</h4>
              <p>support@jamboapp.com</p>
              <small>Response within 24hrs</small>
            </div>
          </div>
        </div>
      </section>

      <!-- Blue Content Section (matches homepage style) -->
      <section class="hs-content-section">
        <!-- Spiky paint wave TOP -->
        <div class="hs-wave-top">
          <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 1600 160"><path style="fill:#fdfbf4" d="M333,20l9-1v1c-1.139,1.139-.4,0-1,2l-2-1v1l-5,1V22C332.861,20.861,333.6,22,333,20Zm-68,0h2v1C264.99,20.426,266.135,21.12,265,20Zm8,0,6,1v1c-3.1,1.643-1.8,1.9-7,2Q272.5,22,273,20Zm-10,1h2v1C262.99,21.426,264.135,22.12,263,21Zm43,3v2l6,1v1h-1v1h-8c-1.139-1.139,0-.4-2-1,1.01-3.129.557-1.518,0-5h-8V22h1V21h3c2.05,1.885,9.224,1.1,13,1v1h-1v1h-3Zm-46-2h3v1h-2c-0.73.474-.011,1.392-2,1Zm118,0v2c-3.138.048-8.5-.565-10-2h10Zm28,0v2c-5.937.177-15.034,1.018-18-2h18Zm35,3h8q-0.5,2.5-1,5h2v3l15,1,1,2h18v1c2.719,0.547,4.4-1.148,6-2V34l6,1q-0.5,3-1,6h13v1h2v1h5l1-2,7,2c0.671,1.893,1.289,6.118,2,8,1.889,0.831,5,2.4,7,3h20v1l7,1V55l4-1v1h5V54h1v1h8V54c-1.975-1.129-2.338-1.417-3-4l-4-1v1l-9,1V50h-3V49h-1v1H545V49l-12-1V46h-3V45c1.719-1.127,1.355-.633,2-3h3v3c2.333,0.4,5.561,1.943,9,1V45h8v1h4v1h1V46h8c2.487-4.155,6.738-4.358,8-10l-5-1-1-2h2c3.694,3.591,4.09-.421,9,1v1h3v1l4-1c-0.083,2.971.011,4.984-1,7l-2,1v1h1c3.922,4.2,11.712-.247,18,2v1h2v1h3v1c5.15,1.671,8.465-2.556,10,1h-5c-0.88,3.4-1.861,3.065-6,3V51a12.7,12.7,0,0,0-5-1v3a29.368,29.368,0,0,0-7,1l1,3,14,1a25.313,25.313,0,0,0,5-1v1h3v1c1.94,0.4,3.789-1.883,7-1v1l13,1V58c3.577,0.063,5.714-.128,8-1V56l-5-1V54c-4.24-1.526-7.016,1.066-10-2,1.139-1.139.4,0,1-2h-8V49l15,1V49h13V48l6-1v2l4-1,1,3h5v1h-3v4c2.533-.505,5.063-2.78,7-3,1.6-.182,1.247,1.736,2,2,2.8,0.981,5.051-.647,7-1l1-3c4.465,0.373,2.915.628,7,0-0.36,2.022-1.432,2.944,0,4h-4v1c1.135,0.844.145-.127,1,1a10.6,10.6,0,0,0,4,1v2l8-1,1,2h2v1h8V59l8-1v1h2l1,2h9v1c4.4,1.239,12.371.419,15,0V61a3.983,3.983,0,0,1-2-2h6c1.392,1.14,5.988.69,9,0V58c3.224-.468,3.834,3.133,8,2V59l6-1v1h4v1h2v1h16v1h10v1c3.08,0.817,5.362-1.476,7-1l1,2h6V62c5.272-.273,15.725-2.758,22-1v1h5l12-1,1,2a10.88,10.88,0,0,0,7,3c1.139-1.139,0-.4,2-1V64h-3V62l15-1v1h10c3.061,0.9,8.609,3.347,14,2V63a2.657,2.657,0,0,1,3,1c4.524,1.1,8.372-.942,11-2l1-2c-1.135-.844-0.145.127-1-1l-8-1q1-3.5,2-7l10-1v1l9,1v1l32,1v2l16,1v1h-1c-0.233,1.59,1.616,1.242,2,2,1.813,3.58-1.626,3.413,4,4l3-5,6,1,1-2h6V57l9,1a100.135,100.135,0,0,1,25-3v2a105.972,105.972,0,0,0,17,1v2a11.352,11.352,0,0,0,2-2l17,1V58h3V57c3.14-.787,3.9,1.769,6,2V58l26,1v1c4.82,1.292,5.48-1.914,10-2h5v1h22v1h-1c-3.2,2.784-11.41-.178-16,0h-3v1h-14l-7-1c-0.33.667-.67,1.333-1,2l-6,1V62c1.14-1.139.4,0,1-2a40.117,40.117,0,0,0-9,1c-0.33,2-.67,4-1,6l3,1c3.13,2.854,25.01,2.763,32,2,2.93-.32,4.02-1.757,6-3V66l23,2c5.34,0.173,8.26-1.859,12-3h7V64h4v1c4.09,1.066,9.19-.477,12-1,1.43-3.826.63-3.158,8-3v1h5c0.33,0.667.67,1.333,1,2l6-1c0.67-1,1.33-2,2-3l4,1V60h4V58c-4.22.139-11.01-.111-13-2h2c3.9-3.759,16.04,1.162,19,2l8-1c0.33,1,.67,2,1,3h-3v2c2.66,1.412,4.22,2.03,9,2v1c1.61,0.894,7-1,7-1,0.33,0.667.67,1.333,1,2,1.47,0.767,6.4,2.038,9,1,0.33-.667.67-1.333,1-2h1c2.08-.276,2,1,2,1l10-1c0.33,0.667.67,1.333,1,2h21v1l12,1V68l12-1c2.02,0.176,2,1,2,1h5v1l9-1v1l4,1v1c2.87,0.571,2.36-1.808,3-2a1.549,1.549,0,0,1,2,1l5-1v2l4-1c0.33-.667.67-1.333,1-2l22-1V66h-3V64l5,1v2a12.66,12.66,0,0,0,5,1V67h3V65l6,3v1c2.76,0.74,2.28-1.723,3-2h12V66h5V65l13,1v1a2.583,2.583,0,0,0,3-1h16V65l5-1v2l37-2v1l3,1h11a2.614,2.614,0,0,1,3-1v1h4v1h7v1h-8v1h-1c-0.99,0-3.79-2.2-6-1-0.33.667-.67,1.333-1,2h-1c-0.23,1.4.37-.268,1,1,3.2,2.78,10.43-.685,15,1v1h2v1l3,1V73l31,1v1h8V74c3.92-1.1,12.43,1.283,15,2l9-1v1h7v1l5-1c0.33,0.667.67,1.333,1,2h15v7l-20-1V83h-11l-14-1V81h-13V80h-6V79h-15v1l-9-1c-0.33,1-.67,2-1,3l4,1v1h12v1h10v1c2.18,0.356,3.93-2.224,7-1,0.33,0.667.67,1.333,1,2l28-1c0.67,1,1.33,2,2,3l11-1c0.68,2.927,1.11,3.275,4,4,0.88-3.4,1.86-3.065,6-3v1h4V0H0Z"></path></svg>
        </div>

        <!-- Content -->
        <div class="hs-content-inner">
          <div class="hs-text-content">
            <h2>Always Ready<br>To Help You.</h2>
            <p>Whether you have a question about your order, need to report an issue, or want to learn more about JamboApp — our dedicated support team is here for you around the clock.</p>
            <div class="hs-contact-lines">
              <div class="hs-contact-line">
                <i class="fas fa-phone"></i>
                <span>+254 700 000 000</span>
              </div>
              <div class="hs-contact-line">
                <i class="fab fa-whatsapp"></i>
                <span>Chat on WhatsApp</span>
              </div>
              <div class="hs-contact-line">
                <i class="fas fa-envelope"></i>
                <span>support@jamboapp.com</span>
              </div>
            </div>
            <div class="hs-signature">JamboApp Support Team</div>
          </div>
          <div class="hs-image-side">
            <img src="/images/support-team.jpg" class="hs-main-img" alt="Support Team">
            <div class="hs-overlay-img">
              <img src="/images/customer-service-hero.jpg" alt="Customer Service">
            </div>
          </div>
        </div>

        <!-- FAQ inside the blue section -->
        <div class="hs-faq-inner">
          <div class="hs-faq-header">
            <h2>Frequently Asked Questions</h2>
            <p>Find quick answers to common questions about JamboApp</p>
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
          <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 1600 160"><path style="fill:#fdfbf4" d="M333,20l9-1v1c-1.139,1.139-.4,0-1,2l-2-1v1l-5,1V22C332.861,20.861,333.6,22,333,20Zm-68,0h2v1C264.99,20.426,266.135,21.12,265,20Zm8,0,6,1v1c-3.1,1.643-1.8,1.9-7,2Q272.5,22,273,20Zm-10,1h2v1C262.99,21.426,264.135,22.12,263,21Zm43,3v2l6,1v1h-1v1h-8c-1.139-1.139,0-.4-2-1,1.01-3.129.557-1.518,0-5h-8V22h1V21h3c2.05,1.885,9.224,1.1,13,1v1h-1v1h-3Zm-46-2h3v1h-2c-0.73.474-.011,1.392-2,1Zm118,0v2c-3.138.048-8.5-.565-10-2h10Zm28,0v2c-5.937.177-15.034,1.018-18-2h18Zm35,3h8q-0.5,2.5-1,5h2v3l15,1,1,2h18v1c2.719,0.547,4.4-1.148,6-2V34l6,1q-0.5,3-1,6h13v1h2v1h5l1-2,7,2c0.671,1.893,1.289,6.118,2,8,1.889,0.831,5,2.4,7,3h20v1l7,1V55l4-1v1h5V54h1v1h8V54c-1.975-1.129-2.338-1.417-3-4l-4-1v1l-9,1V50h-3V49h-1v1H545V49l-12-1V46h-3V45c1.719-1.127,1.355-.633,2-3h3v3c2.333,0.4,5.561,1.943,9,1V45h8v1h4v1h1V46h8c2.487-4.155,6.738-4.358,8-10l-5-1-1-2h2c3.694,3.591,4.09-.421,9,1v1h3v1l4-1c-0.083,2.971.011,4.984-1,7l-2,1v1h1c3.922,4.2,11.712-.247,18,2v1h2v1h3v1c5.15,1.671,8.465-2.556,10,1h-5c-0.88,3.4-1.861,3.065-6,3V51a12.7,12.7,0,0,0-5-1v3a29.368,29.368,0,0,0-7,1l1,3,14,1a25.313,25.313,0,0,0,5-1v1h3v1c1.94,0.4,3.789-1.883,7-1v1l13,1V58c3.577,0.063,5.714-.128,8-1V56l-5-1V54c-4.24-1.526-7.016,1.066-10-2,1.139-1.139.4,0,1-2h-8V49l15,1V49h13V48l6-1v2l4-1,1,3h5v1h-3v4c2.533-.505,5.063-2.78,7-3,1.6-.182,1.247,1.736,2,2,2.8,0.981,5.051-.647,7-1l1-3c4.465,0.373,2.915.628,7,0-0.36,2.022-1.432,2.944,0,4h-4v1c1.135,0.844.145-.127,1,1a10.6,10.6,0,0,0,4,1v2l8-1,1,2h2v1h8V59l8-1v1h2l1,2h9v1c4.4,1.239,12.371.419,15,0V61a3.983,3.983,0,0,1-2-2h6c1.392,1.14,5.988.69,9,0V58c3.224-.468,3.834,3.133,8,2V59l6-1v1h4v1h2v1h16v1h10v1c3.08,0.817,5.362-1.476,7-1l1,2h6V62c5.272-.273,15.725-2.758,22-1v1h5l12-1,1,2a10.88,10.88,0,0,0,7,3c1.139-1.139,0-.4,2-1V64h-3V62l15-1v1h10c3.061,0.9,8.609,3.347,14,2V63a2.657,2.657,0,0,1,3,1c4.524,1.1,8.372-.942,11-2l1-2c-1.135-.844-0.145.127-1-1l-8-1q1-3.5,2-7l10-1v1l9,1v1l32,1v2l16,1v1h-1c-0.233,1.59,1.616,1.242,2,2,1.813,3.58-1.626,3.413,4,4l3-5,6,1,1-2h6V57l9,1a100.135,100.135,0,0,1,25-3v2a105.972,105.972,0,0,0,17,1v2a11.352,11.352,0,0,0,2-2l17,1V58h3V57c3.14-.787,3.9,1.769,6,2V58l26,1v1c4.82,1.292,5.48-1.914,10-2h5v1h22v1h-1c-3.2,2.784-11.41-.178-16,0h-3v1h-14l-7-1c-0.33.667-.67,1.333-1,2l-6,1V62c1.14-1.139.4,0,1-2a40.117,40.117,0,0,0-9,1c-0.33,2-.67,4-1,6l3,1c3.13,2.854,25.01,2.763,32,2,2.93-.32,4.02-1.757,6-3V66l23,2c5.34,0.173,8.26-1.859,12-3h7V64h4v1c4.09,1.066,9.19-.477,12-1,1.43-3.826.63-3.158,8-3v1h5c0.33,0.667.67,1.333,1,2l6-1c0.67-1,1.33-2,2-3l4,1V60h4V58c-4.22.139-11.01-.111-13-2h2c3.9-3.759,16.04,1.162,19,2l8-1c0.33,1,.67,2,1,3h-3v2c2.66,1.412,4.22,2.03,9,2v1c1.61,0.894,7-1,7-1,0.33,0.667.67,1.333,1,2,1.47,0.767,6.4,2.038,9,1,0.33-.667.67-1.333,1-2h1c2.08-.276,2,1,2,1l10-1c0.33,0.667.67,1.333,1,2h21v1l12,1V68l12-1c2.02,0.176,2,1,2,1h5v1l9-1v1l4,1v1c2.87,0.571,2.36-1.808,3-2a1.549,1.549,0,0,1,2,1l5-1v2l4-1c0.33-.667.67-1.333,1-2l22-1V66h-3V64l5,1v2a12.66,12.66,0,0,0,5,1V67h3V65l6,3v1c2.76,0.74,2.28-1.723,3-2h12V66h5V65l13,1v1a2.583,2.583,0,0,0,3-1h16V65l5-1v2l37-2v1l3,1h11a2.614,2.614,0,0,1,3-1v1h4v1h7v1h-8v1h-1c-0.99,0-3.79-2.2-6-1-0.33.667-.67,1.333-1,2h-1c-0.23,1.4.37-.268,1,1,3.2,2.78,10.43-.685,15,1v1h2v1l3,1V73l31,1v1h8V74c3.92-1.1,12.43,1.283,15,2l9-1v1h7v1l5-1c0.33,0.667.67,1.333,1,2h15v7l-20-1V83h-11l-14-1V81h-13V80h-6V79h-15v1l-9-1c-0.33,1-.67,2-1,3l4,1v1h12v1h10v1c2.18,0.356,3.93-2.224,7-1,0.33,0.667.67,1.333,1,2l28-1c0.67,1,1.33,2,2,3l11-1c0.68,2.927,1.11,3.275,4,4,0.88-3.4,1.86-3.065,6-3v1h4V160H0Z"></path></svg>
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
            <router-link to="/courier-info" class="join-btn">Apply Now →</router-link>
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
            <router-link to="/merchant-info" class="join-btn">Register Business →</router-link>
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
  width: 100%;
  padding: 0;
  overflow-x: hidden;
}

/* Page Hero */
.page-hero {
  position: relative; text-align: center; padding: 60px 20px 0;
  min-height: 440px; background: #fdfbf4; overflow: hidden;
  display: flex; flex-direction: column; align-items: center;
}
.page-hero h1 {
  font-family: 'Playfair Display', serif;
  font-size: clamp(2rem, 4vw, 3.4rem);
  color: #14407b; margin-bottom: 20px; line-height: 1.1;
  position: relative; z-index: 5; font-weight: 700;
}
.page-hero h1 span { color: #fdd20a; }
.paint-container { position: absolute; bottom: 0; left: 0; width: 100%; height: 100%; z-index: 1; pointer-events: none; }
.paint-svg { position: absolute; bottom: -5px; width: 100%; height: auto; min-height: 380px; display: block; }
.hi { position: absolute; z-index: 5; filter: drop-shadow(0 10px 20px rgba(0,0,0,0.3)); pointer-events: none; }
.h1 { width: 260px; bottom: 0; left: 3%; animation: floatY 3.2s ease-in-out infinite; }
.h2 { width: 200px; bottom: 0; right: 3%; animation: floatY 3.8s ease-in-out infinite; animation-delay: .5s; }
.h3 { width: 160px; top: 110px; right: 10%; animation: floatY 2.9s ease-in-out infinite; animation-delay: 1s; opacity: .85; }
@keyframes floatY { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-18px)} }

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

/* Blue Content Section — matches homepage content-section */
.hs-content-section {
  position: relative;
  background-color: #14407b;
  overflow: hidden;
  color: #fff;
  z-index: 2;
}

.hs-wave-top {
  position: relative;
  width: 100%;
  height: 120px;
  margin-bottom: -4px;
  z-index: 1;
}
.hs-wave-top svg { width: 100%; height: 100%; display: block; }

.hs-wave-bottom {
  position: relative;
  width: 100%;
  height: 120px;
  margin-top: -4px;
  z-index: 1;
}
.hs-wave-bottom svg { width: 100%; height: 100%; display: block; }

.hs-content-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 60px;
  padding: 60px 10%;
  flex-wrap: wrap;
}

.hs-text-content { flex: 1; min-width: 280px; }

.hs-text-content h2 {
  font-family: 'Playfair Display', serif;
  font-size: clamp(2rem, 4vw, 3.2rem);
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 1.5rem;
  color: #fff;
}

.hs-text-content p {
  font-size: 1.05rem;
  color: rgba(255,255,255,0.88);
  line-height: 1.8;
  margin-bottom: 2rem;
  max-width: 480px;
}

.hs-contact-lines {
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-bottom: 2.5rem;
}

.hs-contact-line {
  display: flex;
  align-items: center;
  gap: 14px;
}
.hs-contact-line i {
  font-size: 1.3rem;
  color: #fdd20a;
  width: 24px;
  text-align: center;
  flex-shrink: 0;
}
.hs-contact-line span {
  font-size: 1rem;
  color: rgba(255,255,255,0.92);
  font-weight: 500;
}

.hs-signature {
  font-family: 'Playfair Display', serif;
  font-size: 1.6rem;
  color: #fdd20a;
  font-style: italic;
  margin-top: 1rem;
}

.hs-image-side {
  flex: 1;
  min-width: 260px;
  position: relative;
  display: flex;
  justify-content: center;
}

.hs-main-img {
  width: 100%;
  max-width: 420px;
  height: 320px;
  object-fit: cover;
  border-radius: 20px;
  box-shadow: 0 20px 50px rgba(0,0,0,0.35);
  display: block;
}

.hs-overlay-img {
  position: absolute;
  bottom: -30px;
  right: -20px;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 15px 40px rgba(0,0,0,0.4);
  border: 4px solid #fdd20a;
}
.hs-overlay-img img {
  width: 160px;
  height: 140px;
  object-fit: cover;
  display: block;
}

@media (max-width: 900px) {
  .hs-content-inner { flex-direction: column; gap: 40px; padding: 50px 6%; }
  .hs-overlay-img { right: 10px; bottom: -20px; }
}

/* FAQ inside the blue section */
.hs-faq-inner {
  padding: 20px 10% 60px;
}
.hs-faq-header {
  text-align: center;
  margin-bottom: 40px;
}
.hs-faq-header h2 {
  font-family: 'Playfair Display', serif;
  font-size: clamp(1.8rem, 3vw, 2.4rem);
  color: #fff;
  margin-bottom: 10px;
  font-weight: 700;
}
.hs-faq-header p {
  color: rgba(255,255,255,0.75);
  font-size: 1rem;
}
/* Override FAQ card styles for blue bg */
.hs-faq-inner .faq-item {
  background: rgba(255,255,255,0.08);
  border: 1px solid rgba(255,255,255,0.15);
  border-radius: 12px;
  margin-bottom: 12px;
  overflow: hidden;
  transition: background 0.3s;
}
.hs-faq-inner .faq-item:hover {
  background: rgba(255,255,255,0.14);
}
.hs-faq-inner .faq-question {
  padding: 18px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
}
.hs-faq-inner .faq-question h3 {
  color: #fff;
  font-size: 0.97rem;
  font-weight: 600;
  line-height: 1.4;
  margin: 0;
}
.hs-faq-inner .faq-toggle {
  color: #fdd20a;
  font-size: 1.4rem;
  font-weight: bold;
  flex-shrink: 0;
  margin-left: 1rem;
  transition: transform 0.2s;
}
.hs-faq-inner .faq-toggle.active { transform: rotate(45deg); }
.hs-faq-inner .faq-answer {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease;
  background: rgba(0,0,0,0.12);
}
.hs-faq-inner .faq-answer.active {
  max-height: 300px;
  padding: 16px 20px;
}
.hs-faq-inner .faq-answer p {
  color: rgba(255,255,255,0.85);
  line-height: 1.6;
  margin: 0;
  font-size: 0.93rem;
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
  text-decoration: none;
  display: inline-block;
}

.join-btn:hover {
  background: linear-gradient(135deg, #2a5298 0%, #14407b 100%);
  transform: translateY(-2px);
  color: #fdd20a;
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
