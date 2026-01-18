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

    <section class="about-me blackWhite" ref="aboutMe" :data-section="1" :class="{ 'fade-in': showAboutMe }">
      <div class="about-me-container">
        <div class="about-me-info image-card">
          <img src="@/assets/galina2.jpg" alt="Galina Filipkova" class="about-me-image" loading="eager" />
        </div>
        <div class="about-me-info info-card">
          <h2>I'm Galina Filipkova</h2>
          <p>Since founding Clear Skies Practice in September 2024, I have supported many clients to help them move
            forward
            from difficult periods in their lives. In my practice, I always endeavour to ensure that, alongside the
            specific
            therapeutic work in sessions, clients learn tools, skills and knowledge to sustain good emotional health
            both
            during and beyond therapy.</p>

          <p>I have over {{ yearsExperience }} years of combined experience working with children, young people, and
            adults
            in the
            education and social care sectors. This includes extensive experience in supporting neurodivergent
            individuals.
          </p>

          <p>I’ve volunteered with the Samaritans and currently work as a therapist for the PTSD Resolution charity for
            UK
            veterans and their families.</p>

          <p>In my free time, I enjoy reading, gardening, yoga, running and walking.</p>
          <p>Please feel free to get in touch via email or text to request a free 15-minute initial call, where I can
            answer
            any questions you might have.</p>
          <div class="button-container">
            <router-link to="/contact" class="button-link">Get in Touch Today</router-link>
          </div>
        </div>
      </div>
    </section>

    <section class="info-section whiteBlue" ref="section2" :data-section="2" :class="{ 'fade-in': showSection2 }">
      <div class="info-card-container">
        <div class="info-card text-card">
          <h2>My Qualifications:</h2>
          <ul class="qualifications-list">
            <li>Human Givens Diploma Practitioner, Human Givens College</li>
            <li>CACHE Level 3 Award in Counselling Skills and Theory, Guildford College</li>
            <li>Qualified Teacher Status (QTS), UK</li>
            <li>ASYE (Social Work), Gloucestershire Local Authority</li>
            <li>Postgraduate Diploma in Social Work, University of Bedfordshire</li>
            <li>Masters in Education, University of Münster, Germany</li>
          </ul>
        </div>
        <div class="image-card">
          <img src="@/assets/Professional Growth.jpg" alt="Flowering growth image" class="help-image" />
        </div>
      </div>
    </section>

    <section class="info-section blackWhite" ref="section3" :data-section="3" :class="{ 'fade-in': showSection3 }">
      <div class="info-card-container">
        <div class="image-card">
          <img src="@/assets/Trees_up.jpg" alt="Trees up" class="help-image" />
        </div>
        <div class="info-card text-card">
          <h2>Further Professional Training</h2>
          <p>My further professional training includes the following courses:</p>
          <ul>
            <li>Trauma: Patterns of the past</li>
            <li>Complex trauma: working with challenging cases</li>
            <li>Moral injury</li>
            <li>Understanding complex emotional needs (personality disorder)</li>
            <li>The missing links: molar memories, subthreshold traumas, and the affect bridge</li>
            <li>Obsessive-compulsive disorder</li>
            <li>Grief and bereavement, and what you can do to help</li>
            <li>How to help troubled and troublesome teenagers</li>
            <li>How to create healing stories for distressed children</li>
            <li>Understanding eating difficulties</li>
            <li>How to avoid burnout</li>
            <li>The mind-body connection: Food, mood, and sleep</li>
            <li>How to reduce suicide risk</li>
            <li>Couples Therapy</li>
            <li>Is narcissism the problem</li>
            <li>Neurodiversity and relationships</li>
            <li>Autism, ADHD, and executive function</li>
            <li>Autism and PDA</li>
            <li>Autistic burnout</li>
            <li>Autism: developing a positive self-identity</li>
            <li>Online and phone therapy training</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- PROFESSIONAL TRAINING: blue background for supervision & compliance text -->
    <section class="info-section whiteBlue" ref="section4" :data-section="4" :class="{ 'fade-in': showSection4 }">
      <div class="info-card-container">
        <div class="info-card text-card">
          <p>
            I have regular professional supervision for all my work with clients. I am registered with the Human Givens
            Institute (HGI) and adhere to its
            <a href="https://www.hgi.org.uk/about-hgi/ethics-and-conduct" target="_blank">
              Code of Ethics & Professional Practice
            </a>. Membership Number 188828
          </p>
          <p>
            The HGI is a professional register accredited by the
            <a href="https://www.professionalstandards.org.uk/what-we-do/accredited-registers/find-a-register/detail/human-givens-institute"
              target="_blank">
              Professional Standards Authority
            </a>.
          </p>
          <p>
            I hold an Enhanced DBS certificate, professional indemnity insurance and am registered with the ICO
            (ICO Registration: ZB674218)
          </p>
        </div>
        <div class="image-card">
          <img src="@/assets/Double_Rainbow.jpg" alt="Double rainbow image" class="help-image" loading="lazy" />
        </div>
      </div>
    </section>

    <!-- HELP WITH: white background + Daisy image -->
    <section class="info-section blackWhite" ref="section5" :data-section="5" :class="{ 'fade-in': showSection5 }">
      <div class="info-card-container">
        <div class="image-card">
          <img src="@/assets/Daisy.jpeg" alt="Daisy" class="help-image focus-top" loading="lazy" />
        </div>
        <div class="info-card text-card">
          <h2>I Can Help With:</h2>
          <ul>
            <li>Trauma &amp; PTSD</li>
            <li>Anger</li>
            <li><router-link to="/life-coaching">Confidence</router-link></li>
            <li>Phobias</li>
            <li><router-link to="/couplestherapy">Couples therapy</router-link></li>
            <li>Relationship difficulties</li>
            <li>Narcissistic abuse</li>
            <li>Anxiety</li>
            <li>OCD</li>
            <li>Depression and low-mood</li>
            <li>Addictions and unhelpful habits</li>
            <li>Bereavement and loss</li>
            <li><router-link to="/life-coaching">Life coaching</router-link></li>
          </ul>
          <i>I offer <b>neurodiversity-informed</b> therapy and life coaching.</i>
          <br />
          <i>I offer concessions for students, blue-light services staff, NHS staff, social workers and teachers.</i>
          <br />
          <i>Free therapy for Military Veterans and Family Members - please get in touch for more details.</i>
          <div class="button-container">
            <router-link to="/contact" class="button-link">Get in Touch Today</router-link>
          </div>
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
      showSection5: false,
      videoPlayable: true, // Assume the video is playable by default
      backupImage: require('@/assets/AnimatedSky.gif'), // GIF is the backup image
      experienceStartDate: new Date(2005, 11, 1), // months are 0-based: 8 = September
    };
  },
  computed: {
    yearsExperience() {
      const now = new Date();
      let years = now.getFullYear() - this.experienceStartDate.getFullYear();

      const anniversaryThisYear = new Date(
        now.getFullYear(),
        this.experienceStartDate.getMonth(),
        this.experienceStartDate.getDate()
      );

      if (now < anniversaryThisYear) years -= 1;
      return years;
    }
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
      observer.observe(this.$refs.section5);
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
*,
*::before,
*::after {
  box-sizing: border-box;
}

.qualifications-list {
  line-height: 2;
  /* roughly “160%” of the font-size */
  /* optionally you can tweak:
  margin-bottom: 0.5em; 
  to add extra space between items */
}

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

.blackWhite {
  background-color: #f9f9f9;
}

.whiteBlue {
  background-color: #5DAED5;
}

/* typography colors */
.blackWhite h2,
.blackWhite h3,
.blackWhite p,
.blackWhite li,
.blackWhite a {
  color: #333;
}

.whiteBlue h2,
.whiteBlue h3,
.whiteBlue p,
.whiteBlue li,
.whiteBlue a {
  color: #fff;
}

.focus-top {
  object-position: 50% 10%;
  /* x y — 20% is “higher” than centre */
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
  font-size: large;
}

.about-me h2,
.info-section h2 {
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}


.about-me-container {
  display: flex;
  justify-content: center;
  /* align-items: flex-start; */
  flex-direction: row;
}

.image-card {
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.info-card {
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
  /* width: 50%; */
  padding: 20px;
}

.help-image {
  width: 100%;
  height: auto;
  /* max-height: 500px; */
  border-radius: 10px;
  object-fit: cover;
}

.info-section[data-section="2"] .image-card img {
  max-height: 400px;
}

.info-section[data-section="4"] .image-card img {
  max-height: 280px;
  object-position: top center;
}

.info-section[data-section="5"] .image-card img {
  max-height: 620px;
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

@media screen and (min-width: 769px) {

  .info-card-container {
    display: flex;
    /* cross‐axis is vertical, so this makes both children as tall
       as the tallest one—but since we’ll keep the text natural,
       its height drives the container’s height. */
    align-items: stretch;
    margin-top: 20px;
  }

  /* Text block stays in flow, height = normal content height */
  .text-card {
    /* flex: 0 1 auto means “width by content (up to any max‐width),
       but shrink if container gets too small” */
    flex: 0 1 auto;
    max-width: 70%;
    /* optional cap if you still want ~60/40 */
    padding: 20px;
    box-sizing: border-box;
    margin-right: 20px;
    /* gutter between text and image */
  }

  /* Image block now flex:1, so it takes ALL remaining width */
  .image-card {
    flex: 1 1 0;
    padding: 20px;
    box-sizing: border-box;
    /* center its contents if they don’t fully fill the box */
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Finally: make the <img> fill its wrapper in both dims */
  .image-card .help-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    /* crops as needed, preserves aspect */
    border-radius: 10px;
    /* keep your rounded corners */
  }

}

@media screen and (max-width: 768px) {

  .qualifications-list {
    line-height: 1.4;
    /* roughly “160%” of the font-size */
    /* optionally you can tweak:
  margin-bottom: 0.5em; 
  to add extra space between items */
  }

  .about-me-image {
    max-height: 500px;
    width: 80% !important;
  }

  .info-section[data-section="2"] .image-card img {
    max-height: 300px;
  }

  .info-section[data-section="3"] .image-card img {
    max-height: 300px;
  }

  .info-section[data-section="4"] .image-card img {
    max-height: 300px;
    object-position: center;
  }

  .info-section[data-section="5"] .image-card img {
    max-height: 300px;
    object-position: top center;
  }

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

  .info-card-container .info-card {
    order: 1;
  }

  .info-card-container .image-card {
    order: 2;
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
