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
      <div class="info-container">
        <div class="image-card">
          <img src="@/assets/Booking.jpg" alt="Booking Sessions Image - swirling sands" class="info-image" loading="eager" />
        </div>
        <div class="info-card">
          <h2>Booking Sessions</h2>
          <p>Email: <a href="mailto:clearskiespractice@gmail.com">clearskiespractice@gmail.com</a> (preferred)</p>
          <p>Text via WhatsApp: <a href="sms:07760 531057">07760 531057</a> (please include your email address)</p>
          <p>Please contact me for my availability and to arrange a 15-minute, free introductory phone call to discuss
            the
            outcome you’re looking for and to ask questions about how therapy will work for you. Email is my preferred
            method of contact.</p>
        </div>
      </div>
    </section>

    <section class="info-section" ref="section2" :data-section="2" :class="{ 'fade-in': showSection2 }">
      <div class="info-container">
        <div class="info-card">
          <h2>Opening Hours</h2>
          <p>Afternoons and evenings. More appointment options are available during the school holidays.</p>
        </div>
        <div class="image-card">
          <img src="@/assets/Openings.jpg" alt="Opening Hours Image - clearing in woods" class="info-image" />
        </div>
      </div>
    </section>

    <section class="info-section" ref="section3" :data-section="3" :class="{ 'fade-in': showSection3 }">
      <div class="info-container">
        <div class="image-card">
          <img src="@/assets/CostOfTherapy.jpg" alt="Cost of Therapy Image - the duck bill" class="info-image" />
        </div>
        <div class="info-card">
          <h2>Cost of Therapy</h2>
          <p>Therapy for individuals - £80 (for 60 minutes)</p>
          <p>Therapy for couples - £120 (for 60 minutes)</p>
          <p>I offer concessions for blue-light services staff, NHS staff and social workers - <i>see Fees and Business page for more detail.</i></p>
          <p>Free therapy for Military Veterans and Family Members - <i>please get in touch for more details.</i></p>
        </div>
      </div>
    </section>

    <section class="info-section" ref="section4" :data-section="4" :class="{ 'fade-in': showSection4 }">
      <div class="info-container">
        <div class="info-card">
          <h2>Location</h2>
          <p>I provide <b>online video call</b> (16+) and <b>face-to-face</b> therapy sessions. Rewinds (for fast
            trauma
            and phobia treatment) are currently only offered face-to-face.</p>
          <p>The Clear Skies Practice is based in Tewkesbury and Cheltenham. It is easily accessible from the surrounding areas of Gloucestershire and Worcestershire, including nearby towns and villages such as Bredon, Pershore, Upton-upon-Severn, Winchcombe, Cheltenham, and Gloucester.</p>
          <p>Location 1: <a href="https://reflectionrooms.co.uk" target="_blank">Reflection Rooms, Tewkesbury</a>.
            Address:
            Reflection Rooms, 13-14 Barton St, Tewkesbury, GL20 5PP</p>
          <p>The above is well situated and easy walking distance from Tewkesbury High Street.</p>
          <p>Location 2: <a href="https://www.theregencypractice.com"
            target="_blank">The Regency Practice, Cheltenham</a>.
          Address: The Regency Practice, 22A Rodney Road, Cheltenham, GL50 1JJ</p>
        </div>
        <div class="image-card">
          <img src="@/assets/Location.jpg" alt="Location Image - boat statue" class="info-image" />
        </div>
      </div>
    </section>

    <section class="info-section" ref="section5" :data-section="5" :class="{ 'fade-in': showSection5 }">
      <div class="info-card">
        <h2>Parking Information</h2>
        <h3>Tewkesbury</h3>
        <p>Free on-road parking is available around town, along with several paid car parks nearby.</p>
        <p>Tewkesbury is also well-served by buses, with the nearest stops at The Crescent or Tewkesbury Hospital, depending
          on
          your direction of travel.</p>
        <h3>Cheltenham</h3>
        <p>The Regency Practice - Parking can be located outside on Rodney Road, Rodney Road Car Park GL50 1HX or John Lewis Car Park GL52 2RR.</p>
      </div>
    </section>

    <section class="info-section" ref="section6" :data-section="6" :class="{ 'fade-in': showSection6 }">
      <div class="info-container">
        <div class="info-card map-card">
          <h2>Reflection Rooms - Tewkesbury</h2>
          <iframe class="mapImage" frameborder="0" scrolling="no" id="gmap_canvas"
            src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=Reflection%20Rooms,%20Barton%20Street%20Tewkesbury+(Clear%20Skies%20Practice)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
        </div>
        <div class="info-card image-card">
          <img src="@/assets/Reflection_rooms.jpg" alt="Reflection Rooms - example room" class="location-image" loading="lazy" />
        </div>
      </div>
    </section>

    <section class="info-section" ref="section7" :data-section="7" :class="{ 'fade-in': showSection7 }">
      <div class="info-container">
        <div class="info-card map-card">
          <h2>The Regency Practice - Cheltenham</h2>
          <iframe class="mapImage" frameborder="0" scrolling="no" id="gmap_canvas"
            src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=Regency%20Practice,%20Rodney%20Road%20Cheltenham+(Clear%20Skies%20Practice)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
        </div>
        <div class="info-card image-card">
          <img src="@/assets/Regency_Practice_room.jpg" alt="Regency Practice external view" class="location-image" loading="lazy" />
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
      showSection5: false,
      showSection6: false,
      showSection7: false,
      videoPlayable: true,
      backupImage: require('@/assets/AnimatedSky.gif')
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
      observer.observe(this.$refs.section5);
      observer.observe(this.$refs.section6);
      observer.observe(this.$refs.section7);
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

.info-section[data-section="2"],
.info-section[data-section="4"],
.info-section[data-section="6"],
.info-section[data-section="8"] {
  background-color: #5DAED5;
  color: white;
}

.info-section p,
.info-section li {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: large;
  color: #666;
}

.info-section h2 {
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  color: #333;
}

.info-section[data-section="2"] h2,
.info-section[data-section="4"] h2,
.info-section[data-section="6"] h2,
.info-section[data-section="8"] h2 {
  color: white;
}

.info-section[data-section="2"] p,
.info-section[data-section="4"] p,
.info-section[data-section="6"] p,
.info-section[data-section="8"] p {
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

h2,
p,
ul {
  text-align: left;
}

ul {
  list-style-type: disc;
  padding-left: 20px;
}

.tooltip-container {
  position: relative;
  color: #0066cc;
  text-decoration: underline;
  cursor: pointer;
  outline: none;
}

/* hide the tooltip by default */
.tooltip-text {
  visibility: hidden;
  opacity: 0;
  pointer-events: none;
  position: absolute;
  bottom: 125%;
  /* position above the text */
  left: 50%;
  transform: translateX(-50%);
  width: 420px;
  padding: 10px;
  border-radius: 4px;
  background: rgba(0, 0, 0, 0.85);
  color: #fff;
  text-align: left;
  font-size: 0.8em;
  line-height: 1.4;
  transition: opacity 0.2s ease;
  z-index: 100;
}

/* on hover or focus, show it */
.tooltip-container:hover .tooltip-text,
.tooltip-container:focus .tooltip-text {
  visibility: visible;
  opacity: 1;
  background-color: #5DAED5;
  font-weight: 100;
}

.image-card,
.info-card {
  flex: 1;
  box-sizing: border-box;
  padding: 20px;
}

.image-card {
  display: flex;
  justify-content: center;
  align-items: center;
}

.info-section[data-section="1"] .info-image {
  max-height: 350px;
}

.info-section[data-section="2"] .info-image {
  max-height: 300px;
}

.info-section[data-section="3"] .info-image {
  max-height: 380px;
}

.info-section[data-section="4"] .info-image {
  max-height: 450px;
}



.info-image {
  width: 100%;
  max-height: 500px;
  object-fit: cover;
  border-radius: 10px;
}

@media screen and (min-width: 769px) {

  /* Text cards */
  .info-section[data-section="1"] .info-card,
  .info-section[data-section="2"] .info-card,
  .info-section[data-section="3"] .info-card,
  .info-section[data-section="4"] .info-card {
    flex: 0 0 60%;
    max-width: 60%;
  }

  /* Image cards */
  .info-section[data-section="1"] .image-card,
  .info-section[data-section="2"] .image-card,
  .info-section[data-section="3"] .image-card,
  .info-section[data-section="4"] .image-card {
    flex: 0 0 40%;
    max-width: 40%;
  }
}



@media screen and (max-width: 768px) {

  .info-section[data-section="1"] .info-image {
    max-height: 300px;
  }

  .info-section[data-section="2"] .info-image {
    max-height: 300px;
  }

  .info-section[data-section="3"] .info-image {
    max-height: 300px;
  }

  .info-section[data-section="4"] .info-image {
    max-height: 300px;
  }

  .hero,
  .info-section {
    width: 100%;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  .info-container {
    flex-direction: column;
    box-sizing: border-box;
  }

  .map-card,
  .image-card {
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

  .tooltip-text {
    /* make tooltip span nearly full width and center it on the viewport */
    position: fixed;
    bottom: 20%;
    /* adjust as needed for vertical placement */
    left: 50%;
    transform: translateX(-50%);
    width: 90vw;
    max-width: 320px;
    /* optional cap */
    text-align: center;
    /* center the text inside */
    pointer-events: auto;
    /* ensure it remains interactive */
  }

  .info-container {
    flex-direction: column;
  }

  .info-container .info-card {
    order: 1;
  }

  .info-container .image-card {
    order: 2;
  }

}
</style>
