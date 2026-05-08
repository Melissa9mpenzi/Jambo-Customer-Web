<template>
  <footer class="footer-wrap">
    <div class="paint-vg">
      <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 1600 160"><path style="fill:#14407b" d="M333,20l9-1v1c-1.139,1.139-.4,0-1,2l-2-1v1l-5,1V22C332.861,20.861,333.6,22,333,20Zm-68,0h2v1C264.99,20.426,266.135,21.12,265,20Zm8,0,6,1v1c-3.1,1.643-1.8,1.9-7,2Q272.5,22,273,20Zm-10,1h2v1C262.99,21.426,264.135,22.12,263,21Zm43,3v2l6,1v1h-1v1h-8c-1.139-1.139,0-.4-2-1,1.01-3.129.557-1.518,0-5h-8V22h1V21h3c2.05,1.885,9.224,1.1,13,1v1h-1v1h-3Zm-46-2h3v1h-2c-0.73.474-.011,1.392-2,1ZM1600,195H0V56c6.264-.162,9.232-2.562,14-4l19-1V50c2.893-.836,8.879-.905,10,0-3.537.286-4.884,1.349-8,2v2l-6,1v1c-4.671,1.436-7.876-1.19-11,2l16-1v2l-4,1v3H27l1,2c-.36.566-14.554,1.781-16,2,.844,1.135-.127.145,1,1,2.786,3.1,6.729,1.543,12,2,1.848,.16,2,1,2,1l15-1,45-1,1-2,8,1V67h5v1c3.858,1.033,8.376-.514,11-1V62a13.307,13.307,0,0,0,4-3h8v2l20,1V61c2.509-.907,4.5-.283,6-2l1-3,10-1c6.236-2.012,12.925-4.594,20-6V47l28-5h14V41h17V40h11l20-1V38l11,1V38h3V37l6-2V34h11V33h3V32c2.225-.659,17.162,2.252,19,3v1h2v1c1.682,.383,1.767-.951,2-1h15c1.382-2.612,1.769-1.693,2-6-.223-.105-3.626-1.439-3-2h1c4.8-4.753,15.039,.813,20,2v4h10c.249,.054,.311,1.362,2,1V34h2V33l15,1v1h3v1c3.564,1.13,8.383,.022,11,1v1h-5c-2.7-2.515-10.481-.273-14,0l1,3,5-1,1,2,11,2V43l6-1q-.5-2.5-1-5c1.135-.844,.145,.127,1-1h13V35c3.394-2.495,1.052-3.507,7-4,1.653,1.6,5.613,1.99,9,2l4-5h-1c-1.139-1.139,0-.4-2-1V25Z"></path></svg>
    </div>
    <div class="footer-content">
      <div class="footer-col"><img src="/images/toma.png" alt="Jambo Bites"><h4>Jambo Bites</h4></div>
      <div class="footer-col"><img src="/images/shops.png" alt="The Shoppers"><h4>The Shoppers</h4></div>
      <div class="footer-col"><img src="/images/drug.png" alt="Mulu Pharmacy"><h4>Mulu Pharmacy</h4></div>
      <div class="footer-col"><img src="/images/burger.png" alt="Burger House"><h4>Burger House</h4></div>
      <div class="footer-col"><img src="/images/pizza.png" alt="Pizza Palace"><h4>Pizza Palace</h4></div>
      <div class="footer-col"><img src="/images/sharwama.png" alt="Shawarma Hub"><h4>Shawarma Hub</h4></div>
    </div>
    <div class="footer-links-section">
      <div class="footer-links-grid">
        <div>
          <h5>{{ t('footer.company') }}</h5>
          <ul>
            <li><a href="#">{{ t('footer.aboutUs') }}</a></li>
            <li><a href="#">{{ t('footer.blog') }}</a></li>
            <li><a href="/careers">{{ t('footer.careers') }}</a></li>
            <li><a href="#">{{ t('footer.press') }}</a></li>
          </ul>
        </div>
        <div>
          <h5>{{ t('footer.support') }}</h5>
          <ul>
            <li><a href="/help-support">{{ t('footer.helpCenter') }}</a></li>
            <li><a href="/help-support">{{ t('footer.contactUs') }}</a></li>
            <li><a href="#">{{ t('footer.reportIssue') }}</a></li>
            <li><a href="/help-support">{{ t('footer.faqs') }}</a></li>
          </ul>
        </div>
        <div>
          <h5>{{ t('footer.partners') }}</h5>
          <ul>
            <li><a href="/merchant-info">{{ t('footer.partnerWith') }}</a></li>
            <li><a href="#">{{ t('footer.restaurant') }}</a></li>
            <li><a href="/courier-info">{{ t('footer.delivery') }}</a></li>
            <li><a href="#">{{ t('footer.affiliate') }}</a></li>
          </ul>
        </div>
        <div>
          <h5>{{ t('footer.legal') }}</h5>
          <ul>
            <li><a href="#">{{ t('footer.terms') }}</a></li>
            <li><a href="#">{{ t('footer.privacy') }}</a></li>
            <li><a href="#">{{ t('footer.cookies') }}</a></li>
            <li><a href="#">{{ t('footer.access') }}</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="jamboapp-title">JAMBOAPP</div>
      <div class="copyright">{{ t('footer.copyright') }}</div>
    </div>
  </footer>
</template>

<script setup>
import { useLang } from '../i18n/useLanguage.js'
const { t } = useLang()
</script>
