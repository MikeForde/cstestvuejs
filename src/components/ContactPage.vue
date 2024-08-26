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
        <h1>Get in Touch</h1>
      </div>
    </section>
    
    <section class="info-section" ref="section1" :data-section="1" :class="{ 'fade-in': showSection1 }">
      <div class="info-card">
        <h2>Booking Sessions</h2>
        <p>Please contact me for my availability and to book low-cost therapy sessions*. Email is my preferred method of contact. I will then arrange a 15-minute, free introductory phone call, to ask any questions you may have, discuss the outcome you’re looking for, or explore how therapy will work for you.</p>
        <p>My working hours are 2:30pm to 6:30pm.</p>
        <p><i>* I do not charge for therapy but ask my clients to contribute £12 per 1-hour session towards room hire.</i></p>
        <p>Email: <a href="mailto:clearskiespractice@gmail.com">clearskiespractice@gmail.com</a> (preferred)</p>
        <p>Text: <a href="sms:07760 531057">07760 531057</a> (please include your email address)</p>
      </div>
    </section>

    <section class="info-section" ref="section2" :data-section="2" :class="{ 'fade-in': showSection2 }">
      <div class="info-card">
        <h2>Location</h2>
        <p>I provide face-to-face therapy sessions in Tewkesbury which is easily accessible from the surrounding areas such as Gloucester, Cheltenham and Worcester.</p>
        <p>The Clear Skies Practice is located on the ... floor in the Devereux Centre, Tewkesbury. The Centre is well situated and easy walking distance from the High Street.</p>
        <p>Address: The Devereux Centre, Barton Road, Tewkesbury, GL20 5GJ</p>
      </div>
    </section>

    <section class="info-section" ref="section3" :data-section="3" :class="{ 'fade-in': showSection3 }">
      <div class="info-card">
        <h2>Parking Information</h2>
        <p>There is free on-street parking in some side streets in Tewkesbury that are within walking distance of the practice. If on-street parking is at capacity, the closest paid car park is Rails Meadow, Howells Road, Tewkesbury, GL20 5BQ (<a href="https://tewkesbury.gov.uk/parking/rails-meadow-howells-road-tewkesbury-gl20-5qb/" target="_blank">Rails Meadow Parking</a>). They charge £1 up to 1 hour and £2 up to 3 hours.</p>
      </div>
    </section>

    <section class="info-section" ref="section4" :data-section="4" :class="{ 'fade-in': showSection4 }">
      <div class="info-container">
        <div class="info-card map-card">
          <h2>Map</h2>
          <iframe class="mapImage"   frameborder="0" scrolling="no" id="gmap_canvas" src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=Devereux%20Centre,%20Barton%20Road%20Tewkesbury+(Clear%20Skies%20Practice)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe> 
        </div>
        <div class="info-card image-card">
          <img src="@/assets/Devereux_Centre.jpg" alt="Devereux Centre" class="location-image"/>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'ContactPage',
  data() {
    return {
      showHero: true,
      showSection1: false,
      showSection2: false,
      showSection3: false,
      showSection4: false,
      videoPlayable: true,
      backupImage: require('@/assets/AnimatedSky.gif')
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
            if (entry.target.classList.contains('info-section')) {
              this[`showSection${entry.target.dataset.section}`] = true;
            }
          }
        });
      }, options);

      observer.observe(this.$refs.section1);
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
  transition: opacity 1s ease-in; /* Transition for fading in */
}

.hero-video.fade-in-video {
  opacity: 1; /* Fade the video in when the class is added */
  z-index: -1; /* Bring the video above the GIF */
}

.hero-content {
  max-width: 800px;
  margin: auto;
  padding: 50px 20px;
  z-index: 1;
}

.info-section {
  padding: 20px;
  opacity: 0;
  transition: opacity 1s ease-in;
  font-size: larger;
  background-color: #f9f9f9;
  color: #666;
}

.info-section[data-section="2"], .info-section[data-section="4"] {
  background-color: #5DAED5;
  color: white;
}

.info-section p, .info-section li {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: large;
  color: #666; 
}

.info-section h2 {
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  color: #333;
}

.info-section[data-section="2"] h2, .info-section[data-section="4"] h2 {
  color: white;
}

.info-section[data-section="2"] p {
  color: white;
}

.info-card {
  background: transparent;
  border: none; 
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
}

.info-container {
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  flex-wrap: wrap;
}

.map-card {
  flex: 1;
}

.mapImage {
  width: 100%;
  height: 400px;
  border-radius: 10px;
}

.image-card {
  flex: 1;
}

.location-image {
  width: 100%;
  height: 400px;
  border-radius: 10px;
  object-fit: cover;
  margin-top: 78px;
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
  .hero, .info-section {
    width: 100%;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  .info-container {
    flex-direction: column;
    box-sizing: border-box;
  }

  .map-card, .image-card {
    width: 100%;
    box-sizing: border-box;
    /* margin: 0 0 20px 0; */
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

