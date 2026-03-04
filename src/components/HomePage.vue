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
        <h1>Clear Skies Practice</h1>
        <p>Helping You Moving Forward</p>
      </div>
      <img src="@/assets/CSP_Logo_White_trans.png" alt="Logo" class="logo-overlay">
    </section>
    <section class="testimonial" ref="testimonial" :class="{ 'fade-in': showTestimonial }"
      v-if="homepageTestimonials.length">
      <div class="testimonial-container">
        <div class="carousel">
          <button class="carousel-btn left" @click="prevTestimonial" aria-label="Previous testimonial"></button>

          <div class="carousel-viewport" @pointerdown="onSwipeStart" @pointermove="onSwipeMove" @pointerup="onSwipeEnd"
            @pointercancel="onSwipeEnd" style="touch-action: pan-y;">
            <div class="carousel-track" :style="trackStyle">
              <div v-for="(paras, idx) in homepageTestimonials" :key="idx" class="carousel-slide"
                :style="{ '--tFont': fontFor(paras) }">
                <div class="testimonial-card text-card-testimonial">
                  <p v-for="(p, pIdx) in paras" :key="pIdx" class="cursive">
                    <span v-if="pIdx === 0">“</span>
                    {{ p }}
                    <span v-if="pIdx === paras.length - 1">”</span>
                  </p>

                  <router-link to="/testimonials" class="see-more-link" @click.stop @pointerdown.stop @pointerup.stop
                    @pointercancel.stop>
                    See full testimonials
                  </router-link>
                </div>
              </div>
            </div>
          </div>

          <button class="carousel-btn right" @click="nextTestimonial" aria-label="Next testimonial"></button>
        </div>
      </div>
    </section>

    <section class="intro" ref="intro" :class="{ 'fade-in': showIntro }">
      <div class="intro-container">
        <div class="intro-card text-card">
          <h2>'Every journey begins with a single step'</h2>
          <p>Feeling stressed, overwhelmed, and out of control? Struggling with emotional pain, low confidence or
            relationship issues? If you need support to navigate these difficulties, I can help.</p>
          <p>My name is Galina Filipkova. I created the Clear Skies Practice as a safe space where we can work together
            to
            help you move forward. I offer specialist treatment for trauma and fast cure for phobias. My other areas of
            expertise are
            anxiety, low-mood, bereavement, navigating relationships, <router-link to="/couplestherapy">couples
              therapy</router-link>, <router-link to="/life-coaching">life coaching</router-link>, neurodivergence, and
            breaking free from unhelpful habits.
          </p>

          <p>I work from the Human Givens (HG) approach, which focuses on helping you build a life where your emotional
            and
            physical needs are met in balance, activating and adding to your resources.</p>

          <p>It is a practical, brief and solution-focussed approach that combines the latest insights from psychology
            and
            neuroscience research with proven techniques from a wide range of modalities in counselling and
            psychotherapy.
          </p>
          <p>My aim is that you will leave each session feeling a little better, more hopeful and more confident in your
            ability to recover, or make the changes you would like to see in your life. Please <router-link
              to="/therapy">read more</router-link> about how I will support you.</p>
          <div class="button-container">
            <router-link to="/contact" class="button-link">Get in Touch Today</router-link>
          </div>
        </div>
        <div class="intro-card image-card">
          <img src="@/assets/portrait_colour.jpg" alt="Galina Filipkova" class="portrait" loading="eager" />
        </div>
      </div>
    </section>
    <section class="additional-info" ref="additionalInfo" :class="{ 'fade-in': showAdditionalInfo }">
      <div class="info-container">
        <div class="info-card image-card">
          <img src="@/assets/Daisy.jpeg" alt="Help Image" class="help-image" loading="lazy" />
        </div>
        <div class="info-card text-card">
          <h2>I Can Help With:</h2>
          <ul>
            <li>Trauma &amp; PTSD</li>
            <li>Anger</li>
            <li><router-link to="/life-coaching">Confidence</router-link></li>
            <li>Phobias</li>
            <li><router-link to="/couplestherapy">Couples therapy</router-link></li>
            <li>Relationship difficulties</li>
            <li>Narcissistic abuse</li>
            <li>Anxiety</li>
            <li>OCD</li>
            <li>Depression and low-mood</li>
            <li>Addictions and unhelpful habits</li>
            <li>Bereavement and loss</li>
            <li><router-link to="/life-coaching">Life coaching</router-link></li>
          </ul>
          <i>I offer <b>neurodiversity-informed</b> therapy and life coaching.</i>
          <br />
          <i>I offer concessions for students, blue-light services staff, NHS staff, social workers and teachers.</i>
          <br />
          <i>Free therapy for Military Veterans and Family Members - please get in touch for more details.</i>
        </div>
      </div>
    </section>
    <section class="immediate-help" ref="immediateHelp" :class="{ 'fade-in': showImmediateHelp }">
      <div class="help-card">
        <h2>Need immediate help?</h2>
      </div>
    </section>
    <section class="resources" ref="resources" :class="{ 'fade-in': showResources }">
      <div class="resources-container">
        <div class="resource-card">
          <h2>Samaritans</h2>
          <p>A Samaritan is there to offer emotional support and help whatever you are going through. They're available
            24
            hours a day, 365 days a year.</p>
          <p><strong>Need support? Call 116 123 to speak to a Samaritan</strong></p>
          <a href="https://www.samaritans.org/" target="_blank">LEARN MORE</a>
        </div>
        <div class="resource-card">
          <h2>Shout</h2>
          <p>Shout is a 24/7 text service, free on all major mobile networks in the UK, for anyone in crisis and in need
            of
            immediate help.</p>
          <p><strong>Text SHOUT to 85258</strong></p>
          <a href="https://giveusashout.org/" target="_blank">LEARN MORE</a>
        </div>
      </div>
    </section>
  </div>
</template>


<script>
import testimonialsRaw from "@/data/testimonials";

export default {
  name: "HomePage",
  data() {
    return {
      showHero: true,
      showTestimonial: false,
      showIntro: false,
      showAdditionalInfo: false,
      showImmediateHelp: false,
      showResources: false,
      videoPlayable: true,
      backupImage: require("@/assets/AnimatedSky.gif"),

      // carousel state
      currentTestimonialIndex: 0,

      // shared testimonials dataset
      testimonialsRaw,

      desktopFontScale: 0.8,

      // HomePage.vue: add these fields inside data()
      swipe: {
        active: false,
        startX: 0,
        lastX: 0,
        deltaX: 0,
        pointerId: null,
        dragging: false
      },
    };
  },

  computed: {
    homepageTestimonials() {
      const SEP = "\n\n";

      // returns an array of "slides", where each slide is an array of paragraphs
      const slides = [];

      for (const paras of (this.testimonialsRaw || [])) {
        const joined = (paras || []).join(SEP);
        if (!joined) continue;

        // Find ALL {...} segments (non-greedy)
        const re = /\{([\s\S]*?)\}/g;

        // groups: key -> { parts: [{text, start, end}], firstStart, lastEnd }
        // key is either "__unnumbered__" or the number as string ("1","2",...)
        const groups = new Map();

        let match;
        while ((match = re.exec(joined)) !== null) {
          const full = match[0];           // "{...}"
          const innerRaw = match[1] ?? ""; // inside braces
          const segStart = match.index;    // index of "{"
          const segEnd = segStart + full.length; // index after "}"

          // Detect optional numeric prefix immediately after "{"
          // e.g. "{1Some text...}" => groupKey="1", text="Some text..."
          const mNum = innerRaw.match(/^\s*(\d+)\s*([\s\S]*)$/);
          const hasNum = !!(mNum && mNum[1] && mNum[2] !== undefined && innerRaw.trim().startsWith(mNum[1]));
          const groupKey = hasNum ? mNum[1] : "__unnumbered__";
          const text = (hasNum ? mNum[2] : innerRaw).trim();

          if (!text) continue;

          if (!groups.has(groupKey)) {
            groups.set(groupKey, { parts: [], firstStart: segStart, lastEnd: segEnd });
          }
          const g = groups.get(groupKey);
          g.parts.push({ text, start: segStart, end: segEnd });
          g.firstStart = Math.min(g.firstStart, segStart);
          g.lastEnd = Math.max(g.lastEnd, segEnd);
        }

        if (!groups.size) continue;

        // Build one quote per group (unnumbered => one combined quote)
        for (const [, g] of groups.entries()) {
          // Preserve original order of appearance for this group
          g.parts.sort((a, b) => a.start - b.start);

          // Join parts with ellipsis between them
          let quote = g.parts.map(p => p.text).join(" ... ").trim();

          // Add leading/trailing ellipses if this group doesn't cover start/end of testimonial
          const missedStart = g.parts[0].start > 0;
          const missedEnd = g.parts[g.parts.length - 1].end < joined.length;

          if (missedStart && !quote.startsWith("...")) quote = `... ${quote}`;
          if (missedEnd && !quote.endsWith("...")) quote = `${quote} ...`;

          // Pronoun replacement: first whole-word she/her only, but only if Galina not already mentioned
          if (!/\bGalina\b/i.test(quote)) {
            quote = quote.replace(/\b(she|her)\b/i, "[Galina]");
          }

          // Split back into paragraphs
          const outParas = quote
            .split(SEP)
            .map(s => s.trim())
            .filter(Boolean);

          if (outParas.length) slides.push(outParas);
        }
      }

      // Keep deterministic order: unnumbered first for each testimonial? (optional)
      // Current behaviour: preserves insertion order of Map by first-seen group key.

      return slides;
    },

    trackStyle() {
      return {
        transform: `translateX(calc(-${this.currentTestimonialIndex * 100}% + ${this.swipe.deltaX}px))`,
        transition: this.swipe.dragging ? "none" : "transform 350ms ease"
      };
    }
  },

  watch: {
    // If the list changes (e.g. you edit the data file), keep index in bounds
    homepageTestimonials(newVal) {
      if (!newVal.length) {
        this.currentTestimonialIndex = 0;
        return;
      }
      if (this.currentTestimonialIndex >= newVal.length) {
        this.currentTestimonialIndex = 0;
      }
    }
  },

  mounted() {
    this.$nextTick(() => {
      setTimeout(() => {
        this.checkVideoPlayback();
      }, 50);

      const options = { threshold: 0.1 };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          if (entry.target.classList.contains("testimonial")) {
            this.showTestimonial = true;
          } else if (entry.target.classList.contains("intro")) {
            this.showIntro = true;
          } else if (entry.target.classList.contains("additional-info")) {
            this.showAdditionalInfo = true;
          } else if (entry.target.classList.contains("immediate-help")) {
            this.showImmediateHelp = true;
          } else if (entry.target.classList.contains("resources")) {
            this.showResources = true;
          }
        });
      }, options);

      observer.observe(this.$refs.hero);
      if (this.$refs.testimonial) observer.observe(this.$refs.testimonial);
      observer.observe(this.$refs.intro);
      observer.observe(this.$refs.additionalInfo);
      observer.observe(this.$refs.immediateHelp);
      observer.observe(this.$refs.resources);
    });
  },

  methods: {
    prevTestimonial() {
      const n = this.homepageTestimonials.length;
      if (!n) return;
      this.currentTestimonialIndex = (this.currentTestimonialIndex - 1 + n) % n;
    },

    nextTestimonial() {
      const n = this.homepageTestimonials.length;
      if (!n) return;
      this.currentTestimonialIndex = (this.currentTestimonialIndex + 1) % n;
    },

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
    onSwipeStart(e) {
      // Only react to primary button/touch
      if (e.pointerType === "mouse" && e.button !== 0) return;
      if (!this.homepageTestimonials.length) return;

      this.swipe.active = true;
      this.swipe.dragging = true;
      this.swipe.startX = e.clientX;
      this.swipe.lastX = e.clientX;
      this.swipe.deltaX = 0;
      this.swipe.pointerId = e.pointerId;

      // Capture pointer so we still get move/end even if it leaves the element
      e.currentTarget.setPointerCapture?.(e.pointerId);
    },

    onSwipeMove(e) {
      if (!this.swipe.active) return;
      if (this.swipe.pointerId !== null && e.pointerId !== this.swipe.pointerId) return;

      const x = e.clientX;
      this.swipe.deltaX = x - this.swipe.startX;
      this.swipe.lastX = x;
    },

    onSwipeEnd(e) {
      if (!this.swipe.active) return;
      if (this.swipe.pointerId !== null && e.pointerId !== this.swipe.pointerId) return;

      const threshold = 60; // px needed to change slide
      const dx = this.swipe.deltaX;

      this.swipe.active = false;
      this.swipe.dragging = false;
      this.swipe.deltaX = 0;
      this.swipe.pointerId = null;

      if (dx > threshold) {
        this.prevTestimonial();
      } else if (dx < -threshold) {
        this.nextTestimonial();
      }
    },
    fontFor(paras) {
      const len = (paras || []).reduce((sum, p) => sum + String(p).length, 0);

      let base;

      if (len <= 80) base = 3.2;
      else if (len <= 120) base = 2.0;
      else if (len <= 160) base = 1.9;
      else if (len <= 220) base = 1.8;
      else if (len <= 320) base = 1.7;
      else if (len <= 420) base = 1.5;
      else if (len <= 520) base = 1.4;
      else base = 1.25;

      return (base * this.desktopFontScale) + "rem";
    },
  }
};
</script>




<style scoped>
/* --- Carousel layout --- */

.carousel {
  display: flex;
  align-items: stretch;
  /* important */
}

.carousel-viewport {
  overflow: hidden;
  width: 100%;
}

.carousel-track {
  display: flex;
  transition: transform 350ms ease;
  will-change: transform;
}

.carousel-slide {
  flex: 0 0 100%;
}

.carousel-btn {
  position: relative;
  width: 40px;
  background: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
}

/* Create tall chevron using borders */
.carousel-btn::before {
  content: "";
  width: 28px;
  /* overall arrow width */
  height: 80px;
  /* vertical stretch */
  background: #888;

  /* Create chevron shape */
  clip-path: polygon(70% 0%,
      100% 0%,
      30% 50%,
      100% 100%,
      70% 100%,
      0% 50%);

  transition: background 0.2s ease, transform 0.15s ease;
}

/* Left arrow */
.carousel-btn.left::before {
  transform: none;
}

.carousel-btn.right::before {
  transform: scaleX(-1);
}

.carousel-btn:hover::before {
  background: #333;
}

.carousel-viewport {
  cursor: grab;
}

.carousel-viewport:active {
  cursor: grabbing;
}

.hero {
  position: relative;
  height: 280px;
  overflow: hidden;
  width: 100%;
  isolation: isolate;
  /* new: creates its own stacking context */
  --logo-h: 80px;
  /* new: logo height var to reserve space */
  padding-bottom: calc(-10px + var(--logo-h));
  /* new: reserve logo space */
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
  /* Start beneath the GIF */
  opacity: 0;
  transition: opacity 1s ease-in;
  /* Transition for fading in */
}

.hero-video.fade-in-video {
  opacity: 1;
  /* Fade the video in when the class is added */
  z-index: -1;
  /* Bring the video above the GIF */
}

.hero-content {
  position: relative;
  margin: auto;
  text-align: center;
  color: white;
  padding: 50px 20px;
  z-index: 2;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  font-size: xx-large;
}

.hero-content p {
  font-size: x-large;
}

.logo-overlay {
  position: absolute;
  bottom: 10px;
  /* Adjust as needed */
  left: 50%;
  transform: translateX(-50%);
  width: var(--logo-h);
  /* Adjust size as needed */
  z-index: 1;
}

.text-card-testimonial {
  padding: 0 50px;
}

.testimonial {
  background: #f9f9f9;
  text-align: center;
  opacity: 0;
  transition: opacity 1s ease-in;
}

.testimonial-container {
  max-width: 900px;
  margin: 0 auto;
  padding: 18px 16px;
  /* reduced from 40px 20px */
}

.text-card-testimonial {
  padding: 0 24px;
  /* reduced from 0 50px */
}

/* keep a consistent area without being huge */
.testimonial-card {
  background: #f9f9f9;
  padding: 16px 18px;
  /* reduced from 30px */
  min-height: 110px;
  /* reduced from 220px */
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* change to flex-start if you prefer top alignment */
}

/* IMPORTANT: single source of truth for cursive text styling */
.cursive {
  font-style: italic;
  font-family:
    'Handlee',
    "Apple Chancery",
    "Snell Roundhand",
    "TT Knickerbockers Script",
    "Segoe Script",
    "Brush Script MT",
    "Lucida Handwriting",
    cursive;

  font-size: var(--tFont, 1.5rem);
  line-height: 1.18;
  /* tighter to control vertical growth */
  margin: 0 0 8px;
}

.testimonial-card .cursive:last-of-type {
  margin-bottom: 10px;
}

.see-more-link {
  display: inline-block;
  font-weight: bold;
  text-decoration: none;
  margin-top: 10px;
}

.see-more-link:hover {
  text-decoration: underline;
}

.intro,
.additional-info,
.immediate-help,
.resources {
  text-align: center;
  opacity: 0;
  transition: opacity 1s ease-in;
  font-size: larger;
}

.intro p,
.additional-info li,
.immediate-help p,
.resources p {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: large;
}

.intro h1,
.intro h2,
.intro h3,
.additional-info h1,
.additional-info h2,
.additional-info h3,
.immediate-help h1,
.immediate-help h2,
.immediate-help h3,
.resources h1,
.resources h2,
.resources h3 {
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  font-size: xx-large;
}


.intro-container,
.info-container,
.resources-container {
  display: flex;
  align-items: stretch;
}

.intro-card {
  background: #5DAED5;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
}

.info-card {
  background: #f9f9f9;
  color: #333;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
}

.intro .intro-card h2,
.intro .intro-card p {
  color: #fff;
}

.info .info-card h2,
.info .info-card p {
  color: #333;
}

.text-card {
  width: 60%;
  padding: 0 30px;
}

.image-card {
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.portrait {
  width: 100%;
  max-height: 500px;
  height: auto;
  border-radius: 10px;
  object-fit: cover;
}

.info-container .image-card {
  overflow: hidden;
}

.help-image {
  height: 100%;
  /* full height of its flex‐stretched parent */
  width: auto;
  /* let width scale proportionally */
  object-fit: cover;
  /* crop to fill */
  object-position: center center;
  /* center the cropped area */
}

.immediate-help {
  width: 100%;
  text-align: center;
}

.help-card {
  background: #5DAED5;
  padding: 20px;
}

.help-card h2 {
  color: #f9f9f9
}

.resources {
  text-align: center;
  opacity: 0;
  transition: opacity 1s ease-in;
}

.resource-card {
  background: #f9f9f9;
  padding: 20px;
  width: 50%;
}

.resource-card h2 {
  color: #333;
  margin-bottom: 15px;
}

.resource-card p {
  color: #666;
  text-align: left;
}

.resource-card a {
  display: block;
  margin-top: 10px;
  color: #007BFF;
  text-decoration: none;
  font-weight: bold;
}

.resource-card a:hover {
  text-decoration: underline;
}

/* Existing styles... */

@media screen and (max-width: 768px) {

  .intro-container,
  .info-container,
  .resources-container {
    flex-direction: column;
  }

  /* Ensure all sections occupy full width in mobile view */
  .intro,
  .additional-info,
  .immediate-help,
  .resources,
  .hero {
    width: 100%;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  .intro-container .text-card,
  .intro-container .image-card,
  .info-container .text-card,
  .info-container .image-card,
  .resource-card {
    width: 100%;
    box-sizing: border-box;
  }

  /* Change order in vertical mode */
  .intro-container .text-card {
    order: 2;
  }

  .intro-container .image-card {
    order: 1;
  }

  .info-container .text-card {
    order: 2;
  }

  .info-container .image-card {
    order: 1;
  }

  .info-container .image-card img {
    max-height: 300px;
    object-position: top center;
  }

  .hero {
    height: 250px;
    --logo-h: 60px;
  }

  .hero-content {
    padding: 10px 10px;
  }

  .hero-content h1 {
    font-size: larger;
  }

  .hero-content p {
    font-size: large;
  }

  .help-image {
    width: 100%
  }

  .logo-overlay {
    width: var(--logo-h);
  }

  .cursive {
    font-size: calc(var(--tFont, 1.6rem) * 0.68);
    line-height: 1.2;
  }
}

/* Additional styles... */


.fade-in {
  opacity: 1;
}

.immediate-help h2 {
  margin-bottom: 15px;
}

.additional-info h2 {
  margin-bottom: 15px;
}

.intro p,
.immediate-help ul {
  color: #666;
}

.additional-info {
  color: white;
}

.additional-info ul,
.immediate-help ul {
  list-style-type: none;
  padding: 0;
}

.additional-info ul li,
.immediate-help ul li {
  margin: 10px 0;
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
</style>
