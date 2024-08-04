<template>
  <div>
    <section class="hero">
      <video class="hero-video" autoplay muted loop ref="heroVideo">
        <source src="/hero_video.mp4" type="video/mp4">
        Your browser does not support the video tag.
      </video>
      <div class="hero-content">
        <h1>Clear Skies Practice Tewkesbury</h1>
        <p>Professional and confidential counselling</p>
        <p>Supporting You Moving Forward</p>
      </div>
      <img src="@/assets/CSP_Logo_White_trans.png" alt="Logo" class="logo-overlay">
    </section>
    <section class="intro" ref="intro" :class="{ 'fade-in': showIntro }">
      <div class="intro-container">
        <div class="intro-card text-card">
          <h2>About Me</h2>
          <p>Hello</p>
          <p>My name is Galina Filipkova. I am a trainee counsellor HG.Dip.P (Trainee) and currently offer free* therapy sessions for adults to complete the final stage of my psychotherapy qualification.</p>
          <p>I created the Clear Skies Practice as a safe space where we can work together to help you move forward. Please read more about how I will support you.</p>
          <p>* I offer free counselling but ask my clients to contribute £12 per 1-hour session towards room hire.</p>
        </div>
        <div class="intro-card image-card">
          <img src="@/assets/portrait.jpg" alt="Galina Filipkova" class="portrait"/>
        </div>
      </div>
    </section>
    <section class="additional-info" ref="additionalInfo" :class="{ 'fade-in': showAdditionalInfo }">
      <div class="info-container">
        <div class="info-card image-card">
          <img src="@/assets/Daisy.jpeg" alt="Help Image" class="help-image"/>
        </div>
        <div class="info-card text-card">
          <h2>I Can Help With:</h2>
          <ul>
            <li>Anxiety (mild to moderate)</li>
            <li>Panic attacks</li>
            <li>Stress (mild to moderate)</li>
            <li>Sleep</li>
            <li>Relaxation</li>
            <li>Depression (mild to moderate)</li>
            <li>Addiction (mild)</li>
            <li>Behaviour change</li>
            <li>Communication skills</li>
            <li>Grief/bereavement</li>
            <li>Life changes</li>
            <li>Loneliness</li>
            <li>Loss</li>
            <li>Performance</li>
            <li>Personal development</li>
            <li>Phobias (mild to moderate)</li>
            <li>Relationship difficulties (mild)</li>
            <li>Self-confidence</li>
            <li>Time management</li>
          </ul>
        </div>
      </div>
    </section>
    <section class="services" ref="services" :class="{ 'fade-in': showServices }">
      <h2>Services</h2>
      <ul>
        <li>Individual Counselling</li>
        <li>Couples Counselling</li>
        <li>Family Therapy</li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  data() {
    return {
      showIntro: false,
      showServices: false,
      showAdditionalInfo: false,
    };
  },
  mounted() {
    this.playVideo();

    const options = {
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (entry.target.classList.contains('intro')) {
            this.showIntro = true;
          } else if (entry.target.classList.contains('services')) {
            this.showServices = true;
          } else if (entry.target.classList.contains('additional-info')) {
            this.showAdditionalInfo = true;
          }
          observer.unobserve(entry.target);
        }
      });
    }, options);

    this.$nextTick(() => {
      observer.observe(this.$refs.intro);
      observer.observe(this.$refs.services);
      observer.observe(this.$refs.additionalInfo);
    });
  },
  methods: {
    playVideo() {
      const video = this.$refs.heroVideo;
      if (video && video.paused) {
        video.play().catch((error) => {
          console.error("Error playing video:", error);
        });
      }
    }
  }
}
</script>

<style scoped>
.hero {
  position: relative;
  height: 300px; /* Adjust the height as needed */
  overflow: hidden;
}

.hero-video {
  position: absolute; /* https://www.pexels.com/license/ */
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
}

.hero-content {
  position: relative;
  max-width: 800px;
  margin: auto;
  text-align: center;
  color: white;
  padding: 50px 20px;
  z-index: 1;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.logo-overlay {
  position: absolute;
  bottom: 10px; /* Adjust as needed */
  left: 50%;
  transform: translateX(-50%);
  width: 100px; /* Adjust size as needed */
  z-index: 0;
}

.intro, .additional-info, .services {
  padding: 20px;
  text-align: center;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  opacity: 0;
  transition: opacity 1s ease-in;
}

.intro-container, .info-container {
  display: flex;
  justify-content: space-around;
  align-items: stretch;
}

.intro-card, .info-card {
  background: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.text-card {
  width: 55%;
}

.image-card {
  width: 35%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.portrait, .help-image {
  width: 100%;
  height: auto;
  border-radius: 10px;
  object-fit: cover;
}

.fade-in {
  opacity: 1;
}

.intro h2, .additional-info h2, .services h2 {
  color: #333;
  margin-bottom: 15px;
}

.intro p, .additional-info ul, .services ul {
  color: #666;
}

.additional-info ul, .services ul {
  list-style-type: none;
  padding: 0;
}

.additional-info ul li, .services ul li {
  margin: 10px 0;
}
</style>
