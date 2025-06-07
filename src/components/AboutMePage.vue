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
          <img src="@/assets/galina2.jpg" alt="Galina Filipkova" class="about-me-image" />
        </div>
        <div class="about-me-info info-card">
          <h2>I'm Galina Filipkova</h2>
          <p>Since founding the Clear Skies Practice in September 2024, I have conducted over 100 therapeutic sessions
            with
            adults to help them move forward from difficult periods in their life. In my practice, I always endeavour to
            ensure that alongside specific therapeutic work in sessions, you learn tools, skills and knowledge to
            sustain
            good emotional health in the future and beyond therapy.</p>
          <p>For the past three years, I have worked in a grammar school successfully supporting pupils with a wide
            range of
            emotional difficulties, including anxiety, performance anxiety, OCD, anger, panic attacks, procrastination,
            low
            mood, low self-esteem, relationships, barriers to school attendance and self-harm. In this role and my
            previous
            role as a teaching assistant at a SEND school, I have also built substantial experience in supporting
            neurodivergent individuals. </p>
          <p>Furthermore, I have extensive experience of working with both adults and young people from my past roles as
            a
            teacher, personal tutor and a social worker. I also volunteered previously with the Samaritans.</p>
          <p>In my free time, I enjoy reading, gardening, yoga, running and walking.</p>
          <p>Please feel free to get in touch by email or text to request a 15-minute initial call (free of charge) so I
            can
            answer any questions you might have.</p>
          <div class="button-container">
            <router-link to="/contact" class="button-link">Get in Touch Today</router-link>
          </div>
        </div>
      </div>
    </section>

    <section class="info-section" ref="section2" :data-section="2" :class="{ 'fade-in': showSection2 }">
      <div class="info-card section1">
        <h2>My Qualifications:</h2>
        <ul>
          <li>Human Givens Diploma Practitioner, Human Givens College</li>
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
          <li>The missing links: molar memories, subthreshold traumas, and the affect bridge</li>
          <li>Obsessive compulsive disorder</li>
          <li>How to help troubled and troublesome teenagers</li>
          <li>Understanding eating difficulties</li>
          <li>How to avoid burnout</li>
          <li>The mind body connection: Food, mood and sleep</li>
          <li>How to reduce suicide risk</li>
          <li>Neurodiversity and relationships</li>
          <li>How to create healing stories for distressed children</li>
          <li>Understanding eating difficulties</li>
          <li>Online and phone therapy training</li>
        </ul>
        <p>I have regular professional supervision for all my work with clients. I am registered with the HGI as a
          Trainee
          Member and adheres to its <a href="https://www.hgi.org.uk/about-hgi/ethics-and-conduct" target="_blank">Code
            of
            Ethics & Professional Practice</a>. Trainee Membership Number 188828 22</p>
        <p>The HGI is a professional register accredited by the <a
            href="https://www.professionalstandards.org.uk/what-we-do/accredited-registers/find-a-register/detail/human-givens-institute"
            target="_blank">Professional Standards Authority</a>.</p>
        <p>I hold an Enhanced DBS certificate, professional indemnity insurance and am registered with the ICO (ICO
          Registration: ZB674218)</p>
      </div>
    </section>
    <section class="info-section" ref="section4" :data-section="4" :class="{ 'fade-in': showSection4 }">
      <div class="info-card-container">
        <div class="info-card text-card section3">
          <h2>I can help with:</h2>
          <ul>
            <li>Anxiety</li>
            <li>Academic anxiety</li>
            <li>Panic attacks</li>
            <li>OCD</li>
            <li>Concentration difficulties</li>
            <li>Low mood/depression</li>
            <li>Stress</li>
            <li>Trauma</li>
            <li>PTSD</li>
            <li>Phobias</li>
            <li>Anger</li>
            <li>Bereavement and loss</li>
            <li>Relationship difficulties</li>
            <li>Life transitions</li>
            <li>Addictions (mild to moderate) and unhelpful habits</li>
            <li>Low confidence</li>
            <li>Low self-esteem</li>
            <li>Emotional problems</li>
          </ul>
        </div>
        <div class="image-card section3">
          <img src="@/assets/Trees_up.jpg" alt="Trees up" class="help-image" />
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
      }, 50);

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
  margin: auto;
  text-align: center;
  color: white;
  padding: 50px 20px;
}

.about-me,
.info-section {
  opacity: 0;
  transition: opacity 1s ease-in;
  font-size: larger;
}

.about-me p,
.info-section p,
.info-section li {
  font-family: Verdana, sans-serif;
  color: #666;
  font-size: large;
}

.section1 li,
.section3 li {
  color: white;
}

.about-me h2,
.info-section h2 {
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  color: #333;
}

.section1 h2,
.section3 h2 {
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

.text-card,
.image-card {
  width: 50%;
  padding: 20px;
}

.help-image {
  width: 100%;
  height: auto;
  max-height: 500px;
  border-radius: 10px;
  object-fit: cover;
}

.section1,
.section3 {
  background: #5DAED5;
}

.about-me-info {
  padding: 0 30px;
}

.about-me-image {
  width: 100%;
  padding: 20px;
  height: auto;
  min-height: 400px;
  min-width: 300px;
  border-radius: 30px;
  object-fit: cover;
}

.fade-in {
  opacity: 1;
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

@media screen and (max-width: 768px) {

  .hero,
  .about-me,
  .info-section {
    width: 100%;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  .about-me-container {
    flex-direction: column;
  }

  .image-card,
  .info-card,
  .about-me-image {
    width: 100%;
    box-sizing: border-box;
    max-width: none;
  }

  .info-card-container {
    flex-direction: column;
  }

  .text-card,
  .image-card {
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
