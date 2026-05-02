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

        <!-- Image -->
        <div class="image-card">
          <img src="@/assets/Booking.jpg" alt="Booking Sessions Image - swirling sands" class="info-image"
            loading="eager" />
        </div>

        <!-- Content -->
        <div class="info-card">
          <h2>Booking Sessions</h2>

          <p>
            Email:
            <a href="mailto:clearskiespractice@gmail.com">
              clearskiespractice@gmail.com
            </a>
            (preferred)
          </p>

          <p>
            Text via WhatsApp:
            <a href="sms:07760 531057">07760 531057</a>
            (please include your email address)
          </p>

          <p>
            Please contact me for my availability and to arrange a 15-minute, free
            introductory phone call to discuss the outcome you’re looking for and to
            ask questions about how therapy will work for you.
          </p>

          <hr class="contact-divider" />

          <h3>Quick message</h3>

          <p>
            If you prefer, fill this in and it will open your email app with the
            message pre-filled.
          </p>

          <form class="contact-form" @submit.prevent="openEmailClient">
            <label>
              Your name
              <input v-model.trim="contactName" type="text" autocomplete="name" />
            </label>

            <label>
              Message <span class="hint">(required)</span>
              <textarea v-model.trim="contactMessage" rows="6" required></textarea>
            </label>

            <button class="contact-submit" type="submit">
              Open email with this message
            </button>

            <p v-if="formError" class="form-error">{{ formError }}</p>
          </form>
        </div>

      </div>
    </section>


    <section class="info-section" ref="section2" :data-section="2" :class="{ 'fade-in': showSection2 }">
      <div class="info-container">
        <div class="info-card">
          <h2>Opening Hours</h2>
          <p>Monday, Tuesday, Thursday - evenings</p>
          <p>Wednesday (online only) - all day</p>
          <p>Friday - all day </p>
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
          <h2 id="cost-of-therapy-title">Cost of Therapy<small> - Hourly Rate</small></h2>
          <div class="pricing-tabs" role="tablist" aria-label="Pricing type">
            <button class="pricing-tab" :class="{ 'pricing-tab--active': activePricingTab === 'individual' }"
              type="button" role="tab" :aria-selected="activePricingTab === 'individual'"
              @click="activePricingTab = 'individual'">
              <span class="pricing-tab__title">Individual Therapy &amp; Coaching</span>
              <span class="pricing-tab__hint-text">
                {{ activePricingTab === 'individual' ? '' : 'Tap to view prices' }}
              </span>
            </button>
            <button class="pricing-tab" :class="{ 'pricing-tab--active': activePricingTab === 'couples' }" type="button"
              role="tab" :aria-selected="activePricingTab === 'couples'" @click="activePricingTab = 'couples'">
              <span class="pricing-tab__title">Couple Therapy</span>
              <span class="pricing-tab__hint-text">
                {{ activePricingTab === 'couples' ? '' : 'Tap to view prices' }}
              </span>
            </button>
          </div>

          <div v-if="activePricingTab === 'individual'" class="pricing-grid" aria-label="Individual session price grid">
            <div class="pricing-grid__cell pricing-grid__corner" aria-hidden="true"></div>
            <div class="pricing-grid__cell pricing-grid__header pricing-grid__header--day">
              <span class="pricing-grid__label">Day</span>
              <span class="pricing-grid__subtext">ends before 5pm</span>
            </div>
            <div class="pricing-grid__cell pricing-grid__header pricing-grid__header--evening">
              <span class="pricing-grid__label">Evening</span>
              <span class="pricing-grid__subtext">from 5pm</span>
            </div>

            <div class="pricing-grid__cell pricing-grid__row-header">Face-to-face</div>
            <div class="pricing-grid__cell pricing-grid__price pricing-grid__price--day">
              <span class="pricing-grid__amount">£80</span>
            </div>
            <div class="pricing-grid__cell pricing-grid__price pricing-grid__price--evening">
              <span class="pricing-grid__amount">£90</span>
            </div>

            <div class="pricing-grid__cell pricing-grid__row-header">Online - aged 16+ only</div>
            <div class="pricing-grid__cell pricing-grid__price pricing-grid__price--day">
              <span class="pricing-grid__amount">£65</span>
            </div>
            <div class="pricing-grid__cell pricing-grid__price pricing-grid__price--evening">
              <span class="pricing-grid__amount">£75</span>
            </div>
          </div>

          <div v-else class="pricing-grid" aria-label="Couples session price grid">
            <div class="pricing-grid__cell pricing-grid__corner" aria-hidden="true"></div>
            <div class="pricing-grid__cell pricing-grid__header pricing-grid__header--day">
              <span class="pricing-grid__label">Day</span>
              <span class="pricing-grid__subtext">ends before 5pm</span>
            </div>
            <div class="pricing-grid__cell pricing-grid__header pricing-grid__header--evening">
              <span class="pricing-grid__label">Evening</span>
              <span class="pricing-grid__subtext">from 5pm</span>
            </div>

            <div class="pricing-grid__cell pricing-grid__row-header">Face-to-face</div>
            <div class="pricing-grid__cell pricing-grid__price pricing-grid__price--day">
              <span class="pricing-grid__amount">£100</span>
            </div>
            <div class="pricing-grid__cell pricing-grid__price pricing-grid__price--evening">
              <span class="pricing-grid__amount">£110</span>
            </div>

            <div class="pricing-grid__cell pricing-grid__row-header">Online</div>
            <div class="pricing-grid__cell pricing-grid__price pricing-grid__price--day">
              <span class="pricing-grid__amount">£85</span>
            </div>
            <div class="pricing-grid__cell pricing-grid__price pricing-grid__price--evening">
              <span class="pricing-grid__amount">£95</span>
            </div>
          </div>
          <ul>
            <li><strong>NHS, social workers, teachers and blue-light services</strong>: £10 further reduction</li>
            <li><strong>Under 16s and students</strong>: £5 further reduction</li>
            <li><strong>Military veterans &amp; family members</strong> &ndash; FREE via PTSD Resolution</li>
          </ul>
          <p></p>
        </div>
      </div>
    </section>

    <section class="info-section" ref="section4" :data-section="4" :class="{ 'fade-in': showSection4 }">
      <div class="info-container">
        <div class="info-card">
          <h2>Location</h2>
          <p>I provide <b>online video call</b> (16+) and <b>face-to-face</b> therapy sessions.</p>
          <p>The Clear Skies Practice is based in Tewkesbury and Cheltenham. It is easily accessible from the
            surrounding
            areas of Gloucestershire and Worcestershire, including nearby towns and villages such as Bredon, Pershore,
            Upton-upon-Severn, Winchcombe, Cheltenham, and Gloucester.</p>
          <p>Location 1: <a href="https://reflectionrooms.co.uk" target="_blank">Reflection Rooms, Tewkesbury</a>.
            Address:
            Reflection Rooms, 13-14 Barton St, Tewkesbury, GL20 5PP</p>
          <p>The above is well situated and easy walking distance from Tewkesbury High Street.</p>
          <p>Location 2: <a href="https://www.theregencypractice.com" target="_blank">The Regency Practice,
              Cheltenham</a>.
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
        <p>Tewkesbury is also well-served by buses, with the nearest stops at The Crescent or Tewkesbury Hospital,
          depending
          on
          your direction of travel.</p>
        <h3>Cheltenham</h3>
        <p>The Regency Practice - Parking can be located outside on Rodney Road, Rodney Road Car Park GL50 1HX or John
          Lewis
          Car Park GL52 2RR.</p>
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
          <img src="@/assets/Reflection_rooms.jpg" alt="Reflection Rooms - example room" class="location-image"
            loading="lazy" />
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
          <img src="@/assets/Regency_Practice_room.jpg" alt="Regency Practice external view" class="location-image"
            loading="lazy" />
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
      contactName: "",
      contactEmail: "",
      contactMessage: "",
      formError: "",
      activePricingTab: 'individual',
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
    },
    openEmailClient() {
      this.formError = "";

      if (!this.contactMessage) {
        this.formError = "Please enter a message.";
        return;
      }

      const to = "clearskiespractice@gmail.com";

      const subject = this.contactName
        ? `Website enquiry from ${this.contactName}`
        : "Website enquiry";

      const lines = [
        "Hello,",
        "",
        this.contactMessage,
        "",
        "---",
        `Name: ${this.contactName || "(not provided)"}`,
        `Page: Contact`,
      ];

      const body = lines.join("\n");

      const mailto =
        `mailto:${encodeURIComponent(to)}` +
        `?subject=${encodeURIComponent(subject)}` +
        `&body=${encodeURIComponent(body)}`;

      // Opens the user's default mail app
      window.location.href = mailto;
    },

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
  max-height: 750px;
}

.info-section[data-section="2"] .info-image {
  max-height: 300px;
}

.info-section[data-section="3"] .info-image {
  max-height: 550px;
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

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 10px;
  max-width: 640px;
}

.contact-form label {
  display: flex;
  flex-direction: column;
  gap: 6px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: large;
}

.contact-form input,
.contact-form textarea {
  padding: 10px 12px;
  border-radius: 8px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  font-size: 16px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}

.contact-submit {
  align-self: flex-start;
  padding: 10px 14px;
  border-radius: 10px;
  border: none;
  background: #5DAED5;
  color: white;
  cursor: pointer;
  font-size: 16px;
}

.contact-submit:hover {
  filter: brightness(0.95);
}

.form-error {
  margin-top: 6px;
  color: #b00020;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}

.hint {
  font-size: 0.9em;
  opacity: 0.8;
}

.pricing-tabs {
  display: inline-flex;
  flex-wrap: wrap;
  gap: 10px;
  margin: 8px 0 14px;
  padding: 6px;
  border-radius: 999px;
  background: #eef6fb;
}

.pricing-tab {
  border: none;
  border-radius: 999px;
  padding: 10px 18px;
  background: transparent;
  color: #2f5165;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 0.95rem;
  font-weight: 700;
  cursor: pointer;
  transition: background-color 0.2s ease, color 0.2s ease;
}

.pricing-tab--active {
  background: #5DAED5;
  color: white;
}

.pricing-intro {
  margin: 0 0 16px;
}

.pricing-grid {
  display: grid;
  grid-template-columns: minmax(130px, 1.1fr) repeat(2, minmax(150px, 1fr));
  gap: 12px;
  margin: 20px 0;
}

.pricing-grid__cell {
  border-radius: 16px;
  padding: 16px;
}

.pricing-grid__corner {
  background: transparent;
}

.pricing-grid__header,
.pricing-grid__price,
.pricing-grid__row-header {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.pricing-grid__header {
  min-height: 88px;
}

.pricing-grid__header--day,
.pricing-grid__price--day {
  background: linear-gradient(180deg, #cceafc 0%, #a9e2fe 100%);
  color: #174a62;
}

.pricing-grid__header--evening,
.pricing-grid__price--evening {
  background: linear-gradient(180deg, #355c7d 0%, #23364f 100%);
  color: #f5f8ff;
}

.pricing-grid__row-header {
  background: #def2fe;
  color: #2f5165;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  font-size: 1.3rem;
  font-weight: 700;
}

.pricing-grid__label,
.pricing-grid__amount {
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  font-size: 1.5rem;
  font-weight: 700;
}

.pricing-grid__subtext {
  margin-top: 6px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 0.95rem;
  line-height: 1.4;
}

.pricing-tabs-hint {
  margin: 0 0 10px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 0.98rem;
  color: #2f5165;
  font-weight: 600;
}

.pricing-tabs {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin: 8px 0 16px;
  padding: 0;
  background: transparent;
}

.pricing-tab {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  min-width: 220px;
  padding: 14px 16px;
  border: 4px solid #bfdceb;
  border-radius: 16px;
  background: #ffffff;
  color: #2f5165;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 0.95rem;
  font-weight: 700;
  cursor: pointer;
  text-align: left;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  transition: transform 0.15s ease, box-shadow 0.2s ease, border-color 0.2s ease, background-color 0.2s ease, color 0.2s ease;
}

.pricing-tab:hover {
  transform: translateY(-1px);
  border-color: #5DAED5;
  box-shadow: 0 6px 14px rgba(0, 0, 0, 0.10);
}

.pricing-tab:focus-visible {
  outline: 3px solid rgba(93, 174, 213, 0.35);
  outline-offset: 2px;
  border-color: #5DAED5;
}

.pricing-tab__title {
  font-size: 1rem;
  line-height: 1.25;
}

.pricing-tab__hint-text {
  font-size: 0.82rem;
  font-weight: 600;
  opacity: 0.8;
  align-self: center;
}

.pricing-tab--active {
  background: #5DAED5;
  color: white;
  border-color: #5DAED5;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.12);
}

.pricing-tab--active .pricing-tab__hint-text {
  opacity: 1;
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

  .pricing-grid {
    grid-template-columns: minmax(82px, 1.1fr) repeat(2, minmax(66px, 1fr));
    gap: 8px;
    margin: 14px 0;
    width: 100%;
  }

  .pricing-grid__corner {
    display: block;
  }

  .pricing-grid__cell {
    border-radius: 12px;
    padding: 9px 7px;
    min-width: 0;
  }

  .pricing-grid__header {
    min-height: 62px;
    text-align: center;
  }

  .pricing-grid__row-header {
    font-size: 1rem;
    line-height: 1.15;
  }

  .pricing-grid__label,
  .pricing-grid__amount {
    font-size: 1.15rem;
    line-height: 1.1;
  }

  .pricing-grid__subtext {
    font-size: 0.72rem;
    line-height: 1.2;
    margin-top: 4px;
  }

  .pricing-tabs {
    display: flex;
    width: 100%;
    border-radius: 18px;
  }

  .pricing-tab {
    flex: 1;
    text-align: center;
  }

}
</style>
