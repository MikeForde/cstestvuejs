<template>
  <div>
    <section class="hero">
      <div class="hero-content">
        <h1>Frequently Asked Questions</h1>
        <p>Answers to common questions about Human Givens therapy, sessions, fees, and booking.</p>
      </div>
    </section>

    <section class="info-section intro-section" ref="section1" :data-section="1" :class="{ 'fade-in': showSection1 }">
      <div class="info-card intro-card">
        <h2>Starting therapy can feel like a big step</h2>
        <p>
          It is natural to have questions before beginning. This page covers the most common questions
          about Human Givens therapy, what sessions are like, how many sessions you may need, fees,
          confidentiality, booking, and cancellations.
        </p>
      </div>
    </section>

    <section class="info-section highlights-section" ref="section2" :data-section="2"
      :class="{ 'fade-in': showSection2 }">
      <div class="info-card">
        <h2>At a glance</h2>

        <div class="highlight-grid">
          <div v-for="(item, index) in faqHighlights" :key="`highlight-${index}`" class="highlight-box">
            <h3>{{ item.title }}</h3>
            <p>{{ item.text }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="info-section faq-section" ref="section3" :data-section="3" :class="{ 'fade-in': showSection3 }">
      <div class="info-card">
        <h2>Questions and answers</h2>

        <div class="faq-list">
          <div v-for="(item, index) in faqs" :key="`faq-${index}`" class="faq-item"
            :class="{ 'faq-item-active': openFaq === index }">
            <button class="faq-question" type="button" @click="toggleFaq(index)"
              :aria-expanded="openFaq === index ? 'true' : 'false'">
              <span>{{ item.question }}</span>
              <span class="faq-icon">{{ openFaq === index ? '−' : '+' }}</span>
            </button>

            <div v-if="openFaq === index" class="faq-answer">
              <template v-if="item.type === 'html'">
                <div v-html="item.answer"></div>
              </template>

              <template v-else-if="item.type === 'list'">
                <p v-if="item.intro">{{ item.intro }}</p>
                <ul>
                  <li v-for="(point, pIndex) in item.points" :key="`point-${index}-${pIndex}`">
                    {{ point }}
                  </li>
                </ul>
                <p v-if="item.outro">{{ item.outro }}</p>
              </template>

              <template v-else>
                <p>{{ item.answer }}</p>
              </template>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="info-section cta-section" ref="section4" :data-section="4" :class="{ 'fade-in': showSection4 }">
      <div class="info-card">
        <h2>Still have questions?</h2>
        <p>
          If you would like to discuss your situation, ask a question, or arrange a free 15-minute consultation,
          please visit the <router-link to="/contact">Contact page</router-link> or email
          <a href="mailto:clearskiespractice@gmail.com">clearskiespractice@gmail.com</a>.
        </p>
      </div>
    </section>
  </div>
</template>

<script>
import faqs from '@/data/faqs.json';
import faqHighlights from '@/data/faqHighlights.json';

export default {
  name: 'FaqPage',
  data() {
    return {
      showSection1: false,
      showSection2: false,
      showSection3: false,
      showSection4: false,
      openFaq: 0,
      faqs,
      faqHighlights
    };
  },
  mounted() {
    const options = {
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observerInstance) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target.classList.contains('info-section')) {
            this[`showSection${entry.target.dataset.section}`] = true;
          }
          observerInstance.unobserve(entry.target);
        }
      });
    }, options);

    this.$nextTick(() => {
      if (this.$refs.section1) observer.observe(this.$refs.section1);
      if (this.$refs.section2) observer.observe(this.$refs.section2);
      if (this.$refs.section3) observer.observe(this.$refs.section3);
      if (this.$refs.section4) observer.observe(this.$refs.section4);
    });
  },
  methods: {
    toggleFaq(index) {
      this.openFaq = this.openFaq === index ? null : index;
    }
  }
};
</script>

<style scoped>
.hero {
  position: relative;
  min-height: 220px;
  background-image: url('@/assets/AnimatedSky.gif');
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}

.hero-content {
  position: relative;
  max-width: 900px;
  margin: auto;
  padding: 50px 20px;
  z-index: 1;
}

.hero-content h1 {
  margin-bottom: 12px;
  font-size: 2.4rem;
}

.hero-content p {
  color: #f5f5f5;
  font-size: 1.1rem;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}

.info-section {
  opacity: 0;
  transition: opacity 0.5s ease;
  font-size: larger;
}

.fade-in {
  opacity: 1;
}

.info-card {
  background: #f9f9f9;
  padding: 28px 22px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
  border: none;
}

.info-section h2 {
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  color: #333;
  margin-bottom: 16px;
}

.info-section h3 {
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  color: #333;
  margin-bottom: 8px;
}

.info-section p,
.info-section li,
.info-section a,
.faq-question {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  color: #666;
  font-size: large;
  line-height: 1.7;
}

.intro-section,
.cta-section {
  background: #f9f9f9;
}

.highlights-section {
  background: #5DAED5;
}

.highlights-section .info-card {
  background: none;
}

.highlights-section h2,
.highlights-section h3,
.highlights-section p {
  color: white;
}

.highlight-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 18px;
}

.highlight-box {
  background: rgba(255, 255, 255, 0.14);
  border-radius: 14px;
  padding: 18px;
  backdrop-filter: blur(2px);
}

.faq-section {
  background: #ffffff;
}

.faq-list {
  margin-top: 10px;
}

.faq-item {
  border-bottom: 1px solid #e3e3e3;
  transition: background-color 0.25s ease, color 0.25s ease;
}

.faq-question {
  width: 100%;
  background: transparent;
  border: none;
  padding: 20px 0;
  text-align: left;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  font-weight: 700;
  color: #444;
  gap: 16px;
}

.faq-question:hover {
  color: #5DAED5;
}

.faq-icon {
  font-size: 1.8rem;
  line-height: 1;
  color: #5DAED5;
  flex-shrink: 0;
}

.faq-answer {
  padding: 0 0 20px 0;
}

.faq-answer,
.faq-answer :deep(p),
.faq-answer :deep(li),
.faq-answer :deep(a),
.faq-answer :deep(strong),
.faq-answer :deep(em) {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  color: #666;
  font-size: large;
  line-height: 1.7;
}

.faq-answer :deep(p) {
  margin: 0 0 14px 0;
}

.faq-answer :deep(ul) {
  list-style-type: disc;
  padding-left: 20px;
  margin: 0 0 14px 0;
}

.faq-answer :deep(li) {
  margin-bottom: 8px;
}

.faq-answer :deep(a) {
  color: #2f7ea6;
  text-decoration: underline;
}

.faq-answer :deep(a:hover) {
  color: #1f5f7f;
}

.faq-answer :deep(strong) {
  font-weight: 700;
  color: #444;
}

.faq-item-active {
  background: #5DAED5;
  border-bottom: 1px solid #5DAED5;
  border-radius: 12px;
  padding: 0 16px;
  margin: 10px 0;
}

.faq-item-active .faq-question {
  color: white;
}

.faq-item-active .faq-question:hover {
  color: white;
}

.faq-item-active .faq-icon {
  color: white;
}

.faq-item-active .faq-answer,
.faq-item-active .faq-answer :deep(p),
.faq-item-active .faq-answer :deep(li),
.faq-item-active .faq-answer :deep(a),
.faq-item-active .faq-answer :deep(strong),
.faq-item-active .faq-answer :deep(em) {
  color: white;
}

.faq-item-active .faq-answer :deep(a) {
  color: white;
  text-decoration: underline;
}

.faq-item-active .faq-answer :deep(a:hover) {
  color: #f3f9fc;
}

.faq-item-active .faq-answer :deep(strong) {
  color: white;
}

h2,
p,
ul {
  text-align: left;
}

ul {
  list-style-type: disc;
  padding-left: 20px;
}

a {
  color: #2f7ea6;
  text-decoration: underline;
}

a:hover {
  color: #1f5f7f;
}

@media screen and (max-width: 768px) {

  .hero,
  .info-section {
    width: 100%;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  .hero-content h1 {
    font-size: 2rem;
  }

  .info-card {
    width: 100%;
    box-sizing: border-box;
    padding: 22px 18px;
  }

  .highlight-grid {
    grid-template-columns: 1fr;
  }

  .faq-question {
    font-size: 1rem;
    padding: 18px 0;
  }

  .faq-icon {
    font-size: 1.5rem;
  }
}
</style>