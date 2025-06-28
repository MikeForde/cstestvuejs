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
        <h3>Opening Hours</h3>
        <p>Monday 6-7pm<br />
          Tuesday 6-7pm<br />
          Wednesday 2.30pm to 6.30pm<br />
          Thursday 6-7pm
        </p>
        <p>Other times may be available on request (Monday, Tuesday, Thursday: 5-6pm; Friday 5-6pm and 6-7pm).</p>
        <p>A greater choice of session times is available between 18 July and 31 August.</p>
        <h3>Fees</h3>
        <p>The therapy sessions are 60-90 minutes in length. A 60-minute session is charged at £80. 90-minute sessions
          are
          charged at £120 per session.</p>
        <p>
          <b>
            Phobia or
            <span class="tooltip-container" tabindex="0">
              single-incident trauma
              <span class="tooltip-text">
                Single-event trauma is triggered by one unexpected incident—such as physical or sexual assault, a
                natural
                disaster,
                a serious accident, or a sudden illness or injury. Recognizing its warning signs and symptoms is
                essential
                for getting
                the right support and care. After such an event, people often suffer intrusive memories that interfere
                with
                everyday
                life, leading to emotional upheaval and shifts in mood. They might find themselves plagued by recurrent
                flashbacks,
                overwhelming fear, anger, or sadness, and unable to enjoy activities they once loved. Understanding
                these
                mental
                health effects is key to making sense of what’s happening in the aftermath of a single-incident trauma.
              </span>
            </span>
            treatment - trauma relating to a single traumatic event - is offered at the discounted price of £60 per hr between
            June-August 2025. Completing a further number of these face-to-face is a post-qualification training
            requirement
            and will enable me to offer them online in the future.
          </b>
        </p>
        <p>Please contact me for my availability and to arrange a 15-minute, free introductory phone call to discuss the
          outcome you’re looking for and to ask questions about how therapy will work for you. Email is my preferred
          method
          of contact.</p>
        <p>Email: <a href="mailto:clearskiespractice@gmail.com">clearskiespractice@gmail.com</a> (preferred)</p>
        <p>Text: <a href="sms:07760 531057">07760 531057</a> (please include your email address)</p>
      </div>
    </section>

    <section class="info-section" ref="section2" :data-section="2" :class="{ 'fade-in': showSection2 }">
      <div class="info-card">
        <h2>Location</h2>
        <p>I provide both <b>online</b> and <b>face-to-face</b> therapy sessions, the latter in Tewkesbury which is
          easily
          accessible from the surrounding areas
          such
          as Gloucester, Cheltenham and Worcester. Rewinds (for fast trauma and phobia treatment) are currently only
          offered
          face-to-face.</p>
        <p>The Clear Skies Practice is currenlty available from the following locations:</p>
        <p>From <a
            href="https://reflectionrooms.co.uk" target="_blank">Reflection Rooms,
            Tewkesbury</a>.</p>
        <p>Address: Reflection Rooms, 13-14 Barton St, Tewkesbury, GL20 5PP</p>
        <p>Until 31 Aug 2025, on the ground floor in <a
            href="https://www.thedevereuxcentre.co.uk/other-tenants/" target="_blank">the Devereux Centre,
            Tewkesbury</a>.</p>
        <p>Address: The Devereux Centre, Barton Road, Tewkesbury, GL20 5GJ</p>
        <p>Both are well situated and easy walking distance from the High Street.</p>
      </div>
    </section>

    <section class="info-section" ref="section3" :data-section="3" :class="{ 'fade-in': showSection3 }">
      <div class="info-card">
        <h2>Parking Information</h2>
        <p>There is free on-street parking in some side streets in Tewkesbury that are within walking distance of both locations. If on-street parking is at capacity, the closest paid car park is Rails Meadow, Howells Road,
          Tewkesbury, GL20 5BQ (<a
            href="https://tewkesbury.gov.uk/parking/rails-meadow-howells-road-tewkesbury-gl20-5qb/"
            target="_blank">Rails Meadow Parking</a>). They charge £1 up to 1 hour and £2 up to 3 hours.</p>
      </div>
    </section>

    <section class="info-section" ref="section4" :data-section="4" :class="{ 'fade-in': showSection4 }">
      <div class="info-container">
        <div class="info-card map-card">
          <h2>Map</h2>
          <iframe class="mapImage" frameborder="0" scrolling="no" id="gmap_canvas"
            src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=Devereux%20Centre,%20Barton%20Road%20Tewkesbury+(Clear%20Skies%20Practice)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
        </div>
        <div class="info-card image-card">
          <img src="@/assets/Devereux_Centre.jpg" alt="Devereux Centre" class="location-image" />
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
.info-section[data-section="4"] {
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
.info-section[data-section="4"] h2 {
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


@media screen and (max-width: 768px) {

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
    bottom: 20%;           /* adjust as needed for vertical placement */
    left: 50%;
    transform: translateX(-50%);
    width: 90vw;
    max-width: 320px;      /* optional cap */
    text-align: center;    /* center the text inside */
    pointer-events: auto;  /* ensure it remains interactive */
  }
}
</style>
