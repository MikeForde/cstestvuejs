<template>
  <div>
    <section class="hero" ref="hero" :class="{ 'fade-in': showHero }">
      <img :src="backupImage" alt="Backup Image" class="hero-image"> <!-- GIF shows by default -->

      <template v-if="videoPlayable">
        <video class="hero-video" autoplay muted loop playsinline webkit-playsinline ref="heroVideo">
          <source src="/hero_video.mp4" type="video/mp4">
          Your browser does not support the video tag.
        </video>
      </template>
      <div class="hero-content">
        <h1>Coaching</h1>
      </div>
    </section>

    <!-- SECTION 1: Intro -->
    <section class="content-section blackWhite" ref="section1" :data-section="1" :class="{ 'fade-in': showSection1 }">
      <div class="card-row">
        <div class="card image-card">
          <img src="@/assets/Denkmal.jpg" alt="Thinker image" class="section-image focus-top" loading="eager" />
        </div>

        <div class="card text-card">
          <h2>Create Clarity, Confidence, and Direction</h2>
          <p>
            If you’re feeling stuck, overwhelmed, or uncertain about your next step, you don’t have to navigate it
            alone. I
            provide a safe, non-judgmental space where you can reflect, gain fresh perspective, and develop practical
            strategies to
            move forward with confidence.
          </p>
          <p>
            Coaching is centered on the present and future — supporting growth, accountability, and meaningful
            personal development.
          </p>
        </div>
      </div>
    </section>

    <!-- SECTION 2: Sessions focus -->
    <section class="content-section whiteBlue" ref="section2" :data-section="2" :class="{ 'fade-in': showSection2 }">
      <div class="card-row">
        <div class="card text-card">
          <h2>Coaching may be a good fit if you:</h2>
          <ul>
            <li>Feel stuck or uncertain about your next steps</li>
            <li>Want to create positive change but need guidance and accountability</li>
            <li>Are navigating a life or career transition</li>
            <li>Want to strengthen motivation, confidence and self-trust</li>
            <li>Feel overwhelmed and want to manage stress more effectively</li>
            <li>Want to develop healthier habits and sustainable routines</li>
            <li>Are ready to invest in your personal growth</li>
          </ul>
          <div class="button-container">
            <router-link to="/contact" class="button-link">Get in Touch Today</router-link>
          </div>
        </div>

        <div class="card image-card">
          <img src="@/assets/BerlinArt.jpg" alt="Berlin Art" class="section-image focus-bottom" loading="lazy" />
        </div>
      </div>
    </section>

    <!-- SECTION 3: How therapy works best -->
    <section class="content-section blackWhite" ref="section3" :data-section="3" :class="{ 'fade-in': showSection3 }">
      <div class="card-row">
        <div class="card image-card">
          <img src="@/assets/SpirallingUp.jpg" alt="Spiralling Up" class="section-image focus-top" loading="lazy" />
        </div>

        <div class="card text-card">
          <h2>Together, we will:</h2>
          <ul>
            <li>Identify obstacles and limiting patterns</li>
            <li>Clarify your goals, values and priorities</li>
            <li>Develop practical, actionable steps for change</li>
            <li>Build sustainable strategies for long-term growth</li>
          </ul>
          <p>
            My coaching approach blends therapeutic insight with practical tools and structured goal-setting. Sessions
            are
            collaborative and client-centred, focusing on what matters most to you.</p>
          <p>If at any stage therapy would be more appropriate, I will discuss this with you and advise on the next steps.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'CouplesTherapyPage',
  data() {
    return {
      showHero: true,
      showSection1: false,
      showSection2: false,
      showSection3: false,
      videoPlayable: true,
      backupImage: require('@/assets/AnimatedSky.gif')
    };
  },
  mounted() {
    this.$nextTick(() => {
      setTimeout(() => this.checkVideoPlayback(), 50);

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;
          if (entry.target.dataset.section) {
            this[`showSection${entry.target.dataset.section}`] = true;
          }
        });
      }, { threshold: 0.1 });

      observer.observe(this.$refs.section1);
      observer.observe(this.$refs.section2);
      observer.observe(this.$refs.section3);
    });
  },
  methods: {
    checkVideoPlayback() {
      const video = this.$refs.heroVideo;
      if (!video) return;

      video.play().then(() => {
        this.videoPlayable = true;
        this.fadeInVideo();
      }).catch(() => {
        this.videoPlayable = false;
      });
    },
    fadeInVideo() {
      const videoElement = this.$refs.heroVideo;
      if (videoElement) videoElement.classList.add('fade-in-video');
    }
  }
}
</script>


<style scoped>
*,
*::before,
*::after {
  box-sizing: border-box;
}

/* --- HERO (unchanged in spirit) --- */
.hero {
  position: relative;
  overflow: hidden;
  color: white;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  font-size: xx-large;
}

.hero-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
}

.hero-video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -2;
  opacity: 0;
  transition: opacity 1s ease-in;
}

.hero-video.fade-in-video {
  opacity: 1;
  z-index: -1;
}

.hero-content {
  margin: auto;
  text-align: center;
  color: white;
  padding: 50px 20px;
  z-index: 1;
}

/* --- COLOR THEMES --- */
.blackWhite {
  background-color: #f9f9f9;
}

.whiteBlue {
  background-color: #5DAED5;
}

.blackWhite h2,
.blackWhite p,
.blackWhite li,
.blackWhite a {
  color: #333;
}

.whiteBlue h2,
.whiteBlue p,
.whiteBlue li,
.whiteBlue a:not(.button-link) {
  color: #fff;
}

/* keep the “interesting bit” nearer the top when cropped */
.focus-top {
  object-position: 50% 20%;
  /* x y — 20% is “higher” than centre */
}

.focus-bottom {
  object-position: 50% 80%;
  /* x y — 80% is “lower” than centre */
}

/* --- SECTIONS / FADE --- */
.content-section {
  opacity: 0;
  transition: opacity 1s ease-in;
}

.fade-in {
  opacity: 1;
}

/* --- TYPOGRAPHY (single source of truth) --- */
.content-section h2 {
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  margin: 0 0 12px;
  font-size: xx-large;
  padding: 0;
}

.content-section p,
.content-section li {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: large;
  line-height: 1.6;
}

.content-section ul {
  margin: 0;
  padding-left: 20px;
}

/* --- LAYOUT --- */
.card-row {
  display: flex;
  justify-content: space-around;
  align-items: stretch;
}

.card {
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
}

.text-card {
  width: 60%;
  padding: 20px 50px;
}

.image-card {
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.section-image {
  width: 100%;
  height: auto;
  max-height: clamp(200px, 50vh, 400px);
  border-radius: 10px;
  object-fit: cover;
}

/* last section can be a single column */
.card-row.single {
  justify-content: center;
}

.card-row.single .text-card {
  width: min(900px, 100%);
  padding: 20px 50px;
}

.button-container {
  text-align: center;
  margin: 20px 0;
}

.button-link {
  display: inline-block;
  padding: 12px 25px;
  color: #333;
  background-color: #f9f9f9;
  text-align: center;
  text-decoration: none;
  border-radius: 5px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: larger;
  font-weight: bold;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border: 2px solid transparent;
  transition: all 0.3s ease;
}

.button-link:hover {
  background-color: #D5845D;
  box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
  transform: translateY(-2px);
  border-color: #D5845D;
  color: #f9f9f9
}

/* --- MOBILE --- */
@media screen and (max-width: 768px) {

  .hero,
  .content-section {
    width: 100%;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  .card-row {
    flex-direction: column;
  }

  .text-card {
    order: 1;
  }

  .image-card {
    order: 2;
  }

  .text-card {
    width: 100%;
    padding: 16px 20px 0;
    /* top padding gives the “breathing space” */
    box-sizing: border-box;
  }

  .image-card {
    width: 100%;
    box-sizing: border-box;
  }

  .section-image {
    max-height: 300px;
  }

  .hero {
    height: 250px;
  }

  .hero-content {
    padding: 10px 10px;
  }

  .hero-content h1 {
    font-size: larger;
  }
}
</style>
