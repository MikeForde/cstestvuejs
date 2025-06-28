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
        <p>Email: <a href="mailto:clearskiespractice@gmail.com">clearskiespractice@gmail.com</a> (preferred)</p>
        <p>Text via WhatsApp: <a href="sms:07760 531057">07760 531057</a> (please include your email address)</p>
        <p>Please contact me for my availability and to arrange a 15-minute, free introductory phone call to discuss the
          outcome you’re looking for and to ask questions about how therapy will work for you. Email is my preferred
          method
          of contact.</p>
      </div>
    </section>

    <section class="info-section" ref="section2" :data-section="2" :class="{ 'fade-in': showSection2 }">
      <div class="info-card">
        <h2>Opening Hours</h2>
        <p>Afternoons, evenings, and Saturdays. More appointment options are available during the school holidays.
        </p>
      </div>
    </section>

    <section class="info-section" ref="section3" :data-section="3" :class="{ 'fade-in': showSection3 }">
      <div class="info-card">
        <h2>Cost of Therapy</h2>
        <p>Therapy for individuals - £80 (for 60 minutes), on Saturdays - £85 (for 60 minutes)</p>
        <p>Therapy for couples - £115 (for 60 minutes), on Saturdays - £120 (for 60 minutes)</p>
        <p>Therapy for 12-18 year olds - £70 (for 50 minutes), on Saturdays - £75 (for 50 minutes)</p>

        <p>Any pre-agreed longer or shorter sessions are charged on a pro-rata basis.

          A limited number of concessions may be available for university students or unemployed individuals. Proof of
          status is required.
        </p>
        <p><i>Please note these prices are for private paying individuals only, rates will vary when paying via EAP or
            <span class="tooltip-container" tabindex="0">
              insurance companies
              <span class="tooltip-text">
                Healthcare Insurance: Some clients have coverage from a healthcare insurer. We are unable to
                communicate directly with insurers, and we do not have an electronic claims system in place. It is the
                client’s responsibility to ascertain whether or not their insurance provider covers psychological
                talking
                therapies, to pay their fees at the time of consultation, and to then claim from their insurer, where
                possible. We will do our utmost to facilitate that claim.
              </span>
            </span>due to the increased financial & administrative requirements; rates are agreed with each
            company. Please call us if you wish to discuss further.</i></p>
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
            treatment - trauma relating to a single traumatic event - is offered at the discounted price of £60 per hr
            between
            June-August 2025. Completing a further number of these face-to-face is a post-qualification training
            requirement
            and will enable me to offer them online in the future.
          </b>
        </p>
      </div>
    </section>

    <section class="info-section" ref="section4" :data-section="4" :class="{ 'fade-in': showSection4 }">
      <div class="info-card">
        <h2>Location</h2>
        <p>We provide <b>online</b> (16+) and <b>face-to-face</b> therapy sessions. Rewinds (for fast trauma
          and
          phobia treatment) are currently only
          offered
          face-to-face.</p>
        <p>The Clear Skies Practice is based in Tewkesbury and is easily accessible from the surrounding areas of
          Gloucestershire and Worcestershire.</p>
        <p>Location 1: <a href="https://reflectionrooms.co.uk" target="_blank">Reflection Rooms,
            Tewkesbury</a>.
          Address: Reflection Rooms, 13-14 Barton St, Tewkesbury, GL20 5PP</p>
        <p>Location 2 (Until 31 Aug 2025): <a href="https://www.thedevereuxcentre.co.uk/other-tenants/"
            target="_blank">The
            Devereux Centre,
            Tewkesbury</a>.
          Address: The Devereux Centre, Barton Road, Tewkesbury, GL20 5GJ</p>
        <p>Both are well situated and easy walking distance from the High Street.</p>
      </div>
    </section>

    <section class="info-section" ref="section5" :data-section="5" :class="{ 'fade-in': showSection5 }">
      <div class="info-card">
        <h2>Parking Information</h2>
        <p>Free on-road parking is available around the town, along with several paid car parks nearby.</p>
        <p>Tewkesbury is well-served by buses, with the nearest stops at The Crescent or Tewkesbury Hospital, depending
          on
          your direction of travel.</p>
      </div>
    </section>

    <section class="info-section" ref="section6" :data-section="6" :class="{ 'fade-in': showSection6 }">
      <div class="info-container">
        <div class="info-card map-card">
          <h2>Reflection Rooms</h2>
          <iframe class="mapImage" frameborder="0" scrolling="no" id="gmap_canvas"
            src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=Reflection%20Rooms,%20Barton%20Street%20Tewkesbury+(Clear%20Skies%20Practice)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
        </div>
        <div class="info-card image-card">
          <img src="@/assets/Reflection_rooms.jpg" alt="Devereux Centre" class="location-image" />
        </div>
      </div>
    </section>

    <section class="info-section" ref="section7" :data-section="7" :class="{ 'fade-in': showSection7 }">
      <div class="info-container">
        <div class="info-card map-card">
          <h2>The Devereux Centre</h2>
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
.info-section[data-section="6"] {
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
.info-section[data-section="6"] h2 {
  color: white;
}

.info-section[data-section="2"] p,
.info-section[data-section="4"] p,
.info-section[data-section="6"] p {
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
}
</style>
