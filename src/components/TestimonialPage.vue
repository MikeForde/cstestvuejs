<template>
  <div>
    <!-- Hero Section -->
    <section class="hero" ref="hero" :class="{ 'fade-in': showHero }">
      <img :src="backupImage" alt="Backup Image" class="hero-image" />
      <template v-if="videoPlayable">
        <video class="hero-video" autoplay muted loop playsinline webkit-playsinline ref="heroVideo">
          <source src="/hero_video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </template>
      <div class="hero-content">
        <h1>Testimonials</h1>
      </div>
    </section>

    <!-- Testimonial Sections -->
    <section
      class="testimonial-section"
      ref="section1"
      :data-section="1"
      :class="{ 'fade-in': showSection1 }"
    >
      <div class="testimonial-card">
        <blockquote>
          “Galina is kind, patient, caring and enables you to confront your issues. I cannot ever thank her enough for setting me free of my issues and with her help and guidance, she was like a beacon. I had a rewind which was instantly successful, it was truly mind-blowing the difference it made and continues to make. I am now back to the bubbly, positive person I was with Galina's gentle guidance.”
        </blockquote>
        <img src="@/assets/CSP_Logo_Black_trans.png" alt="CSP Logo" class="testimonial-logo" />
      </div>
    </section>

    <section
      class="testimonial-section"
      ref="section2"
      :data-section="2"
      :class="{ 'fade-in': showSection2 }"
    >
      <div class="testimonial-card">
        <blockquote>
          “Galina was very professional but also very understanding and helpful to me! She asked very relevant questions and listened intently!”
        </blockquote>
        <img src="@/assets/CSP_Logo_White_trans.png" alt="CSP Logo" class="testimonial-logo" />
      </div>
    </section>

    <section
      class="testimonial-section"
      ref="section3"
      :data-section="3"
      :class="{ 'fade-in': showSection3 }"
    >
      <div class="testimonial-card">
        <blockquote>
          <p>“After my wife of 25 years died suddenly I thought I should be old enough to deal with the grief on my own. However, the long years of interdependency were too ingrained to just suddenly let go. I found myself becoming more and more introverted, I stopped interacting with friends, became inactive and depressed. It wasn’t until I started having thoughts of self-harm that I finally took notice and realised I needed help. I just didn’t want to exist without my wife any longer.</p>
          <p>Just before Christmas 2024 I saw a leaflet simply stating “Galina - Bereavement Therapy”. At that moment, I reached rock bottom and called Galina as a last hope… and what a good call that turned out to be!</p>
          <p>Galina is quiet, calm, empathic and very, very clever. She seemed to understand my total desolation from my first visit. At first, she simply listened. I didn’t realise it at the time but she simply gave me the space to spill all the horror, grief and solitude I had felt since my wife’s death. Then, slowly and without pressure, we began to talk and she started to offer me tools to help me through. Never any judgement; never any pressure; Galina proved to be the mirror in which I faced myself.</p>
          <p>Happily, I have now been able to look beyond my grief; to accept and understand the value of past experience and to carry that into the future with me. I will never forget the incredibly good times that my marriage brought me and those memories will continue to nourish me and overshadow my grief.</p>
          <p>To Galina, my most heartfelt thanks. To you reading this, do not suffer alone. There is a path through grief but I only found mine with Galina’s help.”</p>
        </blockquote>
        <img src="@/assets/CSP_Logo_Black_trans.png" alt="CSP Logo" class="testimonial-logo" />
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'TestimonialPage',
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
      setTimeout(() => {
        this.checkVideoPlayback();
      }, 50);
      const options = { threshold: 0.1 };
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const sec = entry.target.dataset.section;
            this[`showSection${sec}`] = true;
          }
        });
      }, options);
      observer.observe(this.$refs.section1);
      observer.observe(this.$refs.section2);
      observer.observe(this.$refs.section3);
    });
  },
  methods: {
    checkVideoPlayback() {
      const video = this.$refs.heroVideo;
      if (video) {
        video.play().then(() => {
          this.videoPlayable = true;
          this.fadeInVideo();
        }).catch(() => {
          this.videoPlayable = false;
        });
      }
    },
    fadeInVideo() {
      const videoElement = this.$refs.heroVideo;
      if (videoElement) {
        videoElement.classList.add('fade-in-video');
      }
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
  max-width: 800px;
  margin: auto;
  padding: 50px 20px;
  z-index: 1;
}

.testimonial-section {
  padding: 20px;
  opacity: 0;
  transition: opacity 1s ease-in;
  font-size: larger;
  background-color: #f9f9f9;
  color: #666;
}

.testimonial-section[data-section="2"] {
  background-color: #5DAED5;
  color: white;
}

.testimonial-card {
  background: transparent;
  border: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
}

.testimonial-card blockquote {
  margin: 0;
  padding-left: 1em;
  border-left: 4px solid #ccc;
  font-style: italic;
  text-align: left;
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

@media screen and (max-width: 768px) {
  .hero,
  .testimonial-section {
    width: 100%;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
  .hero {
    height: 250px;
  }
  .hero-content {
    padding: 10px;
  }
  .hero-content h1 {
    font-size: larger;
  }
}
</style>