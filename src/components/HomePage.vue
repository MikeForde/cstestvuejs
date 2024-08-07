<template>
  <div>
    <section class="hero">
      <video class="hero-video" autoplay muted loop playsinline webkit-playsinline ref="heroVideo">
        <source src="/hero_video.mp4" type="video/mp4">
        Your browser does not support the video tag.
      </video>
      <div class="hero-content">
        <h1>Clear Skies Practice</h1>
        <p>Helping You Moving Forward</p>
      </div>
      <img src="@/assets/CSP_Logo_White_trans.png" alt="Logo" class="logo-overlay">
    </section>
    <section class="intro" ref="intro" :class="{ 'fade-in': showIntro }">
      <div class="intro-container">
        <div class="intro-card text-card">
          <h2>Every journey begins with a single step<sup>*</sup></h2>
          <p>Feeling overwhelmed by life’s challenges? Struggling with emotional pain, relationship issues, or finding balance? If you need support to navigate these difficulties, I can help.</p>
          <p>My name is Galina Filipkova. I am a trainee counsellor HG.Dip.P (Trainee) and currently offer therapy sessions** for adults to complete the final stage of my psychotherapy qualification.</p>
          <p>I created the Clear Skies Practice as a safe space where we can work together to help you move forward. I work from the Human Givens (HG) approach. It is a practical, brief and solution-focussed approach that combines the latest insights from psychology and neuroscience research with proven techniques from a wide range of modalities in counselling and psychotherapy.</p>
          <p>My aim is to help you feel a little better after every session and to give you the tools to maintain good mental health moving forward. Please read more about how I will support you. <router-link to="/therapy">Learn more</router-link></p>
          <div class="button-container">
            <router-link to="/contact" class="button-link">Get in Touch Today</router-link>
          </div>
          <p><i>* Maya Angelou</i></p>
          <p><i>** I offer free counselling but ask my clients to contribute £12 per 1-hour session towards room hire.</i></p>
        </div>
        <div class="intro-card image-card">
          <img src="@/assets/portrait_colour.jpg" alt="Galina Filipkova" class="portrait"/>
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
    <section class="immediate-help" ref="immediateHelp" :class="{ 'fade-in': showImmediateHelp }">
      <div class="help-card">
        <h2>Need immediate help?</h2>
      </div>
    </section>
    <section class="resources" ref="resources" :class="{ 'fade-in': showResources }">
      <div class="resources-container">
        <div class="resource-card">
          <h2>Samaritans</h2>
          <p>A Samaritan is there to offer emotional support and help whatever you are going through. They're available 24 hours a day, 365 days a year.</p>
          <p><strong>Need support? Call 116 123 to speak to a Samaritan</strong></p>
          <a href="https://www.samaritans.org/" target="_blank">LEARN MORE</a>
        </div>
        <div class="resource-card">
          <h2>Shout</h2>
          <p>Shout is a 24/7 text service, free on all major mobile networks in the UK, for anyone in crisis and in need of immediate help.</p>
          <p><strong>Text SHOUT to 85258</strong></p>
          <a href="https://giveusashout.org/" target="_blank">LEARN MORE</a>
        </div>
      </div>
    </section>
  </div>
</template>


<script>
export default {
  name: 'HomePage',
  data() {
    return {
      showIntro: false,
      showAdditionalInfo: false,
      showImmediateHelp: false,
      showResources: false,
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
          } else if (entry.target.classList.contains('additional-info')) {
            this.showAdditionalInfo = true;
          } else if (entry.target.classList.contains('immediate-help')) {
            this.showImmediateHelp = true;
          } else if (entry.target.classList.contains('resources')) {
            this.showResources = true;
          }
          observer.unobserve(entry.target);
        }
      });
    }, options);

    this.$nextTick(() => {
      observer.observe(this.$refs.intro);
      observer.observe(this.$refs.additionalInfo);
      observer.observe(this.$refs.immediateHelp);
      observer.observe(this.$refs.resources);
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
  background: url('@/assets/Sky.jpeg') no-repeat center center;
  background-size: cover;
}

.hero-content {
  position: relative;
  max-width: 800px;
  margin: auto;
  text-align: center;
  color: white;
  padding: 50px 20px;
  z-index: 1;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  font-size:xx-large;
}

.hero-content p {
  font-size: x-large;
}

.logo-overlay {
  position: absolute;
  bottom: 10px; /* Adjust as needed */
  left: 50%;
  transform: translateX(-50%);
  width: 80px; /* Adjust size as needed */
  z-index: 0;
}

.intro, .additional-info, .immediate-help, .resources {
  padding: 20px;
  text-align: center;
  opacity: 0;
  transition: opacity 1s ease-in;
  font-size: larger;
}

.intro p, .additional-info li, .immediate-help p, .resources p {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: large;
}

.intro h1, .intro h2, .intro h3, 
.additional-info h1, .additional-info h2, .additional-info h3, 
.immediate-help h1, .immediate-help h2, .immediate-help h3, 
.resources h1, .resources h2, .resources h3 {
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  font-size: xx-large;
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
  /* box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); */
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
}

.info-card {
  background: #5DAED5;
}

.text-card {
  width: 55%;
  padding: 0 30px;
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

.immediate-help {
  width: 100%;
  padding: 10px;
  text-align: center;
}

.help-card {
  background: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 20px;
  /* box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); */
}

.resources {
  padding: 20px;
  text-align: center;
  opacity: 0;
  transition: opacity 1s ease-in;
}

.resources-container {
  display: flex;
  justify-content: space-between;
}

.resource-card {
  background: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 20px;
  width: 45%;
  /* box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); */
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
  .intro-container, .info-container, .resources-container {
    flex-direction: column;
  }

  .intro-container .text-card, .intro-container .image-card,
  .info-container .text-card, .info-container .image-card,
  .resources-container .resource-card {
    width: 100%;
    margin-bottom: 20px;
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

  .hero {
    height: 250px;
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

  .logo-overlay {
    width: 60px;
  }
}

/* Additional styles... */


.fade-in {
  opacity: 1;
}

.intro h2, .immediate-help h2 {
  color: #333;
  margin-bottom: 15px;
}

.additional-info h2 {
  color: white;
  margin-bottom: 15px;
}

.intro p, .immediate-help ul {
  color: #666;
}

.additional-info {
  color: white;
}

.additional-info ul, .immediate-help ul {
  list-style-type: none;
  padding: 0;
}

.additional-info ul li, .immediate-help ul li {
  margin: 10px 0;
}

.button-container {
  text-align: center;
  margin: 20px 0;
}

.button-link {
  display: inline-block;
  padding: 10px 20px;
  color: white;
  background-color: #5DAED5;
  text-align: center;
  text-decoration: none;
  border-radius: 5px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: larger;
  transition: background-color 0.3s ease;
}

.button-link:hover {
  background-color: #D5845D;
}
</style>
