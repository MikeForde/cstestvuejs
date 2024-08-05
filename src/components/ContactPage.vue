<template>
  <div>
    <section class="hero">
      <div class="hero-content">
        <h1>Get in Touch</h1>
      </div>
    </section>
    
    <section class="info-section" ref="section1" :data-section="1" :class="{ 'fade-in': showSection1 }">
      <div class="info-card">
        <h2>Booking Sessions</h2>
        <p>Please contact me for my availability and to book therapy sessions. Text and email are my preferred methods of contact as I may be in a session if you call. I will then arrange a 15-minute, free introductory phone call, so that we can get a sense of each other and see if we are a good fit.</p>
        <p>Email: <a href="mailto:clearskiespractice@gmail.com">clearskiespractice@gmail.com</a></p>
        <p>Phone/text: 077 605 310 57</p>
      </div>
    </section>

    <section class="info-section" ref="section2" :data-section="2" :class="{ 'fade-in': showSection2 }">
      <div class="info-card">
        <h2>Location</h2>
        <p>I provide face to face therapy sessions in Tewkesbury which is easily accessible from the surrounding areas such as Gloucester, Cheltenham and Worcester.</p>
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
          <iframe width="520" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=Barton%20Road%20Tewkesbury+(The%20Devereux%20Centre)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe> 
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
          if (entry.target.classList.contains('info-section')) {
            this[`showSection${entry.target.dataset.section}`] = true;
          }
          observer.unobserve(entry.target);
        }
      });
    }, options);

    this.$nextTick(() => {
      observer.observe(this.$refs.section1);
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
  font-size: x-large;
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
}

.info-section p, .info-section li {
  font-family: Verdana, sans-serif;
  color: #666;
  font-size: large;
}

.info-section h2 {
  font-family: Cambria, serif;
  color: #333;
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

.info-container {
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  flex-wrap: wrap;
}

.map-card {
  flex: 1;
  margin-right: 10px;
}

.image-card {
  flex: 1;
  margin-left: 10px;
}

.location-image {
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
  .info-container {
    flex-direction: column;
  }

  .map-card, .image-card {
    width: 100%;
    margin: 0 0 20px 0;
  }
}
</style>
