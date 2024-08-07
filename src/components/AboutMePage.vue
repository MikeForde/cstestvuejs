<template>
  <div>
    <section class="hero">
      <div class="hero-content">
        <h1>About Me</h1>
      </div>
    </section>
    
    <section class="about-me" ref="aboutMe" :class="{ 'fade-in': showAboutMe }">
      <div class="about-me-container">
        <div class="about-me-card image-card">
          <img src="@/assets/galina2.jpg" alt="Galina Filipkova" class="about-me-image"/>
        </div>
        <div class="about-me-info info-card">
          <h2>I'm Galina Filipkova</h2>
          <p>I am a trainee counsellor HG.Dip.P (Trainee) and currently offer therapy sessions for adults to complete the final stage of my psychotherapy qualification.</p>
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
      <div class="info-card section3">
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
    </section>
  </div>
</template>


<script>
export default {
  name: 'AboutMePage',
  data() {
    return {
      showAboutMe: false,
      showSection1: false,
      showSection2: false,
      showSection3: false,
      showSection4: false,
    };
  },
  mounted() {
    const options = {
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (entry.target.classList.contains('about-me')) {
            this.showAboutMe = true;
          } else if (entry.target.classList.contains('info-section')) {
            this[`showSection${entry.target.dataset.section}`] = true;
          }
          observer.unobserve(entry.target);
        }
      });
    }, options);

    this.$nextTick(() => {
      observer.observe(this.$refs.aboutMe);
      observer.observe(this.$refs.section2);
      observer.observe(this.$refs.section3);
      observer.observe(this.$refs.section4);
    });
  }
}
</script>


<style scoped>
.hero {
  position: relative;
  height: 200px;
  background-image: url('@/assets/Sky.jpeg');
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  font-size:x-large;
}

.hero-content {
  max-width: 800px;
  margin: auto;
  padding: 50px 20px;
  z-index: 1;
  color: white;
  padding: 50px 20px;
}

.about-me, .info-section {
  padding: 20px;
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
  font-family: Cambria, serif;
  color: #333;
}

.section1 h2, .section3 h2{
  color: white;
}

.about-me-container {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: row;
}

.image-card {
  width: 35%;
  max-width: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
}

.info-card {
  background: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
}

.section1, .section3 {
  background: #5DAED5;
}

.about-me-info {
  width: 55%;
  padding: 0 30px;
}

.about-me-image {
  width: 100%;
  height: auto;
  border-radius: 10px;
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
  .about-me-container {
    flex-direction: column;
  }
  
  .image-card, .info-card {
    width: 100%;
    margin-bottom: 20px;
  }
}
</style>

