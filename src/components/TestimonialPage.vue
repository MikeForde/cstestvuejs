<template>
  <div>
    <!-- Hero Section -->
    <section class="hero" ref="hero" :class="{ 'fade-in': showHero }">
      <img :src="backupImage" alt="Backup Image" class="hero-image" />
      <template v-if="videoPlayable">
        <video class="hero-video" autoplay muted loop playsinline webkit-playsinline ref="heroVideo">
          <source src="/hero_video.mp4" type="video/mp4" />
        </video>
      </template>
      <div class="hero-content">
        <h1>Testimonials</h1>
      </div>
    </section>

    <!-- Dynamic Testimonials -->
    <section v-for="(paras, idx) in testimonials" :key="idx" class="testimonial-section" :class="[
      { 'fade-in': visibleSections.includes(idx) },
      { 'testimonial--alt': idx % 2 === 1 }
    ]">
      <div class="testimonial-card">
        <blockquote class="testimonial-quote">
          <p v-for="(p, pIdx) in paras" :key="pIdx" class="testimonial-para">
            <span v-if="pIdx === 0">“</span>
            {{ cleanParagraph(p) }}
            <span v-if="pIdx === paras.length - 1">”</span>
          </p>
        </blockquote>

        <img :src="idx % 2 === 1 ? logoWhite : logoBlack" alt="CSP Logo" class="testimonial-logo" />
      </div>
    </section>
  </div>
</template>

<script>
import testimonials from "@/data/testimonials";

export default {
  name: "TestimonialPage",

  data() {
    return {
      showHero: true,
      visibleSections: [],

      videoPlayable: true,
      backupImage: require("@/assets/AnimatedSky.gif"),

      logoBlack: require("@/assets/CSP_Logo_Black_trans.png"),
      logoWhite: require("@/assets/CSP_Logo_White_trans.png"),

      // ============================================================
      // EDIT THIS ARRAY TO ADD / REORDER TESTIMONIALS
      // Each testimonial = array of 1..many paragraphs
      // ============================================================

      testimonials
    };
  },

  mounted() {
    this.$nextTick(() => {
      setTimeout(() => {
        this.checkVideoPlayback();
      }, 50);

      const observer = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            if (!entry.isIntersecting) return;

            const idx = Number(entry.target.dataset.index);
            if (!this.visibleSections.includes(idx)) {
              this.visibleSections.push(idx);
            }
          });
        },
        { threshold: 0.1 }
      );

      const sections = this.$el.querySelectorAll(".testimonial-section");
      sections.forEach((el, idx) => {
        el.dataset.index = String(idx);
        observer.observe(el);
      });
    });
  },

  methods: {
    checkVideoPlayback() {
      const video = this.$refs.heroVideo;
      if (video) {
        video
          .play()
          .then(() => {
            this.videoPlayable = true;
            this.fadeInVideo();
          })
          .catch(() => {
            this.videoPlayable = false;
          });
      }
    },
    fadeInVideo() {
      const videoElement = this.$refs.heroVideo;
      if (videoElement) {
        videoElement.classList.add("fade-in-video");
      }
    },
    cleanParagraph(text) {
      // 1) remove "{<digits>" (e.g. "{1", "{12") but keep the rest of the text
      // 2) remove any remaining "{" or "}"
      return String(text)
        .replace(/\{(\d+)/g, "")  // strips "{1" / "{2" / "{12" only
        .replace(/[{}]/g, "");
    }
  }
};
</script>

<style scoped>
.hero {
  position: relative;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  font-size: xx-large;
}

.hero-image,
.hero-video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
}

.hero-video {
  z-index: -2;
  opacity: 0;
  transition: opacity 1s ease-in;
}

.hero-video.fade-in-video {
  opacity: 1;
  z-index: -1;
}

.hero-content {
  z-index: 1;
}

.testimonial-section {
  padding: 40px;
  opacity: 0;
  transition: opacity 1s ease-in;
  font-size: larger;
  background-color: #f9f9f9;
  color: #666;
}

.testimonial-section.testimonial--alt {
  background-color: #5DAED5;
  color: white;
}

.testimonial-card blockquote {
  margin: 0;
  padding-left: 1em;
  border-left: 4px solid #ccc;
  font-style: italic;
  /* ✅ make testimonial text italic */
  text-align: left;
}

.testimonial-card blockquote p {
  margin: 0 0 12px;
}

.testimonial-card blockquote p:last-child {
  margin-bottom: 1;
}

.testimonial-logo {
  display: block;
  margin: 20px auto 0;
  width: 100px;
  height: auto;
}

.fade-in {
  opacity: 1;
}
</style>