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
        <h1>Couple Therapy</h1>
      </div>
    </section>

    <!-- SECTION 1: Intro -->
    <section class="content-section blackWhite" ref="section1" :data-section="1" :class="{ 'fade-in': showSection1 }">
      <div class="card-row">
        <div class="card image-card">
          <img src="@/assets/Two trees.jpg" alt="Two trees" class="section-image" loading="eager" />
        </div>

        <div class="card text-card">
          <h2>Helping couples build stronger, healthier relationships</h2>
          <p>
            Relationships can be deeply meaningful—and deeply challenging. Whether you’re feeling disconnected, stuck in
            conflict,
            or struggling to rebuild trust, couples therapy can help you understand each other more clearly and
            reconnect in
            a healthier way.
          </p>
          <p>
            As a HG psychotherapist I work within the framework of essential human needs as a foundation for supporting
            individual wellbeing
            and thriving relationships. My couple therapy work also incorporates practical communication and conflict
            resolution skills
            alongside evidence-based guidance for positive and lasting relationships from John and Julie Gottman.
          </p>
        </div>
      </div>
    </section>

    <!-- SECTION 2: Sessions focus -->
    <section class="content-section whiteBlue" ref="section2" :data-section="2" :class="{ 'fade-in': showSection2 }">
      <div class="card-row">
        <div class="card text-card">
          <h2>Sessions focus on</h2>
          <ul>
            <li>Understanding your and your partner’s <strong>emotional needs</strong></li>
            <li>Improving <strong>communication and listening</strong></li>
            <li>Reducing harmful <strong>conflict patterns</strong></li>
            <li>Strengthening <strong>friendship and intimacy</strong></li>
            <li>Rebuilding and nurturing <strong>trust</strong></li>
            <li>Learning <strong>communication and emotional regulation tools</strong> you can use outside sessions</li>
          </ul>
        </div>

        <div class="card image-card">
          <img src="@/assets/Spinning couple.jpg" alt="Spinning couple" class="section-image focus-top"
            loading="lazy" />
        </div>
      </div>
    </section>

    <!-- SECTION 3: How therapy works best -->
    <section class="content-section blackWhite" ref="section3" :data-section="3" :class="{ 'fade-in': showSection3 }">
      <div class="card-row">
        <div class="card image-card">
          <img src="@/assets/Two ducks.jpg" alt="Two ducks" class="section-image focus-bottom" loading="lazy" />
        </div>

        <div class="card text-card">
          <h2>Therapy works best when it is</h2>
          <ul>
            <li><strong>Collaborative</strong> — we work together as a team</li>
            <li><strong>Non-judgmental</strong> — both partners feel heard and respected</li>
            <li><strong>Practical</strong> — sessions lead to real, usable skills</li>
            <li><strong>Compassionate</strong> — change happens at your pace</li>
          </ul>
          <p>
            Therapy is goal-oriented but flexible. Some couples come for <strong>short-term support</strong>, while
            others
            choose
            <strong>longer-term work</strong>.
            <em>You don’t need to be “in crisis” to benefit from couple therapy—many couples come to strengthen an
              already
              meaningful relationship.</em>
          </p>
          <div class="button-container">
            <router-link to="/contact" class="button-link">Get in Touch Today</router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 4: Individual sessions -->
    <section class="content-section whiteBlue" ref="section4" :data-section="4" :class="{ 'fade-in': showSection4 }">
      <div class="card-row">
        <div class="card text-card">
          <h2>Why individual sessions may be suggested</h2>
          <p>While most couple therapy sessions are attended together, there are times when <strong>individual
              sessions</strong> can be a helpful and appropriate part of the process.</p>
          <p>These sessions are always used <strong>in service of the relationship</strong>, not instead of couple therapy
            work.
          </p>
          <p>Individual sessions help each partner gain <strong>insight into their own patterns, emotions, and stress
              responses</strong>, which often makes joint sessions more productive and less reactive.</p>
        </div>

        <div class="card image-card">
          <img src="@/assets/Blossom.jpg" alt="Blossom" class="section-image focus-top" loading="lazy" />
        </div>
      </div>
    </section>

    <!-- SECTION 5: Confidentiality -->
    <section class="content-section blackWhite" ref="section5" :data-section="5" :class="{ 'fade-in': showSection5 }">
      <div class="card-row single">
        <div class="card text-card">
          <h2>Confidentiality of individual sessions</h2>
          <p>Individual sessions are confidential. They are used to support the couple therapy and the relationship as
            a
            whole, not to take sides or keep harmful secrets.</p>
          <p>If something important for the relationship comes up, we will discuss together how it can be shared in a
            safe
            and respectful way.</p>
          <p>As with all therapy, confidentiality may only be broken in rare situations required by law or professional
            ethics, such as concerns about safety.</p>
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
      showSection4: false,
      showSection5: false,
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
      observer.observe(this.$refs.section4);
      observer.observe(this.$refs.section5);
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
.whiteBlue a {
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
  color: #f9f9f9;
  background-color: #5DAED5;
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
