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
      </div>
      <img src="@/assets/CSP_Logo_White_trans.png" alt="Logo" class="logo-overlay">
    </section>
    <section class="intro">
      <h2>About Me</h2>
      <div class="portrait-container">
        <img src="@/assets/portrait.jpg" alt="Galina Filipkova" class="portrait"/>
      </div>
      <p>Welcome to my counselling practice. I offer a safe and confidential space to explore your thoughts and feelings. With years of experience, I am here to help you navigate through your challenges and achieve personal growth.</p>
      <a href="/sample.pdf" download="sample.pdf">Download Sample PDF</a>
    </section>
    <section class="services">
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
  mounted() {
    this.playVideo();
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

.intro, .services {
  padding: 20px;
  text-align: center;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.intro h2, .services h2 {
  color: #333;
  margin-bottom: 15px;
}

.intro p, .services ul {
  color: #666;
}

.services ul {
  list-style-type: none;
  padding: 0;
}

.services ul li {
  margin: 10px 0;
}

.portrait-container {
  display: flex;
  justify-content: center;
  margin: 20px 0;
}

.portrait {
  border: 5px solid #6699CC; /* Pale blue frame */
  border-radius: 10px;
  width: 200px; /* Adjust as needed */
  height: auto;
}
</style>
