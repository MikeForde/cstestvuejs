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
        <h1>About Me</h1>
      </div>
    </section>
    
    <section class="about-me" ref="aboutMe" :class="{ 'fade-in': showAboutMe }">
      <div class="about-me-container">
        <div class="about-me-info image-card">
          <img src="@/assets/galina2.jpg" alt="Galina Filipkova" class="about-me-image"/>
        </div>
        <div class="about-me-info info-card">
          <h2>I'm Galina Filipkova</h2>
          <p>I am a trainee counsellor HG.Dip.P (Trainee) and currently offer low-cost therapy sessions for adults to complete the final stage of my psychotherapy qualification.</p>
          <p>From my previous roles in education and social care, I have extensive experience of working with both adults and young people. I currently work in a grammar school in Gloucester supporting students’ wellbeing and mental health.</p>
          <p>I also volunteered previously with the Samaritans.</p>
          <p>In my free time, I enjoy reading, gardening, yoga, running and walking.</p>
        </div>
      </div>
    </section>
    
    <section class="info-section" ref="section2" :data-section="2" :class="{ 'fade-in': showSection2 }">
      <div class="info-card section1">
        <h2>My Qualifications:</h2>
        <ul>
          <li>Human Givens Diploma Part 1 and Part 2, Human Givens College</li>
          <li>CACHE Level 3 Award in Counselling Skills and Theory, Guildford College</li>
          <li>QTS, UK</li>
          <li>ASYE (Social Work), Gloucestershire Local Authority</li>
          <li>Postgraduate Diploma in Social Work, University of Bedfordshire</li>
          <li>Masters in Education, University of Münster, Germany</li>
        </ul>
      </div>
    </section>
    
    <section class="info-section" ref="section3" :data-section="3" :class="{ 'fade-in': showSection3 }">
      <div class="info-card">
        <h2>My Professional Training</h2>
        <p>My further professional training includes the following courses with the Human Givens Institute:</p>
        <ul>
          <li>Grief and bereavement and what you can do to help</li>
          <li>Trauma: Patterns of the past</li>
          <li>Obsessive compulsive disorder</li>
          <li>How to help troubled and troublesome teenagers</li>
          <li>Understanding eating difficulties</li>
          <li>How to avoid burnout</li>
          <li>The mind body connection: Food, mood and sleep</li>
          <li>How to reduce suicide risk</li>
        </ul>
        <p>I have regular professional supervision for all my work with clients. I am registered with the HGI as a Trainee Member and adheres to its <a href="https://www.hgi.org.uk/about-hgi/ethics-and-conduct" target="_blank">Code of Ethics & Professional Practice</a>. Trainee Membership Number 188828 22</p>
        <p>The HGI is a professional register accredited by the <a href="https://www.professionalstandards.org.uk/what-we-do/accredited-registers/find-a-register/detail/human-givens-institute" target="_blank">Professional Standards Authority</a>.</p>
        <p>I hold an Enhanced DBS certificate, professional indemnity insurance and am registered with the ICO (ICO Registration: ZB674218)</p>
      </div>
    </section>
    <section class="info-section" ref="section4" :data-section="4" :class="{ 'fade-in': showSection4 }">
    <div class="info-card-container">
      <div class="info-card text-card section3">
        <h2>I can help with:</h2>
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
      <div class="image-card section3">
        <img src="@/assets/Trees_up.jpg" alt="Trees up" class="help-image"/>
      </div>
    </div>
  </section>
  </div>
</template>


<script>
export default {
  name: 'AboutMePage',
  data() {
    return {
      showHero: true,
      showAboutMe: false,
      showSection1: false,
      showSection2: false,
      showSection3: false,
      showSection4: false,
      videoPlayable: true, // Assume the video is playable by default
      backupImage: require('@/assets/AnimatedSky.gif') // GIF is the backup image
    };
  },
  mounted() {
  this.$nextTick(() => {
      // Adding a slight delay to ensure Safari initializes video properly
      setTimeout(() => {
        this.checkVideoPlayback();
      }, 10);

      const options = {
        threshold: 0.1
      };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (entry.target.classList.contains('about-me')) {
            this.showAboutMe = true;
          } else if (entry.target.classList.contains('info-section')) {
            this[`showSection${entry.target.dataset.section}`] = true;
          }
        }
      });
    }, options);

      observer.observe(this.$refs.aboutMe);
      observer.observe(this.$refs.section2);
      observer.observe(this.$refs.section3);
      observer.observe(this.$refs.section4);
    });
  },
  methods: {
    checkVideoPlayback() {
      const video = this.$refs.heroVideo;
      if (video) {
        video.play().then(() => {
          this.videoPlayable = true;
          this.fadeInVideo(); // Trigger fade-in animation for the video
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
}
</script>

<style scoped>
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
  z-index: -2; /* Start beneath the GIF */
  opacity: 0;
  transition: opacity 1s ease-in; /* Transition for fading in */
}

.hero-video.fade-in-video {
  opacity: 1; /* Fade the video in when the class is added */
  z-index: -1; /* Bring the video above the GIF */
}

.hero-content {
  margin: auto;
  text-align: center;
  color: white;
  padding: 50px 20px;
}

.about-me, .info-section {
  opacity: 0;
  transition: opacity 1s ease-in;
  font-size: larger;
}

.about-me p, .info-section p, .info-section li {
  font-family: Verdana, sans-serif;
  color: #666;
  font-size: large;
}

.section1 li, .section3 li {
  color: white;
}

.about-me h2, .info-section h2 {
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  color: #333;
}

.section1 h2, .section3 h2 {
  color: white;
}

.about-me-container {
  display: flex;
  justify-content: center;
  /* align-items: flex-start; */
  flex-direction: row;
}

.image-card {
  background: #f9f9f9;
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.info-card {
  background: #f9f9f9;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
}

.info-card-container {
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  margin-top: 20px;
}

.text-card, .image-card {
  width: 50%;
  padding: 20px;
}

.help-image {
  width: 100%;
  height: auto;
  border-radius: 10px;
  object-fit: cover;
}

.section1, .section3 {
  background: #5DAED5;
}

.about-me-info {
  padding: 0 30px;
}

.about-me-image {
  width: 100%;
  padding: 20px;
  height: auto;
  border-radius: 30px;
  object-fit: cover;
}

.fade-in {
  opacity: 1;
}

h2, p, ul {
  text-align: left;
}

ul {
  list-style-type: disc;
  padding-left: 20px;
}

@media screen and (max-width: 768px) {
  .hero, .about-me, .info-section {
    width: 100%;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  .about-me-container {
    flex-direction: column;
  }

  .image-card, .info-card, .about-me-image{
    width: 100%;
    box-sizing: border-box;
    max-width:none;
  }

  .info-card-container {
    flex-direction: column;
  }

  .text-card, .image-card {
    width: 100%;
    padding: 20px 20px;
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
