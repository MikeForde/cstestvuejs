<template>
  <div>
    <section class="hero">
      <div class="hero-content">
        <h1>Get In Touch</h1>
      </div>
    </section>
    <section class="contact-info" ref="contactInfo" :class="{ 'fade-in': showContactInfo }">
      <div class="contact-details">
        <div class="contact-card">
          <h2>Phone</h2>
          <p>0789 123 456</p>
        </div>
        <div class="contact-card">
          <h2>Email</h2>
          <p><a href="mailto:galina@clearskiespractice.com">galina@clearskiespractice.com</a></p>
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
      showContactInfo: false,
    };
  },
  mounted() {
    const options = {
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (entry.target.classList.contains('contact-info')) {
            this.showContactInfo = true;
          }
          observer.unobserve(entry.target);
        }
      });
    }, options);

    this.$nextTick(() => {
      observer.observe(this.$refs.contactInfo);
    });
  }
};
</script>

<style scoped>
.hero {
  background-color: #6699CC;
  color: white;
  text-align: center;
  padding: 50px 20px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.hero-content {
  max-width: 800px;
  margin: auto;
}

.contact-info {
  padding: 20px;
  text-align: center;
  max-width: 800px;
  margin: auto;
  opacity: 0;
  transition: opacity 1s ease-in;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.fade-in {
  opacity: 1;
}

.contact-details {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.contact-card {
  background: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 20px;
  width: 45%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 10px;
  transition: transform 0.3s ease-in-out;
}

.contact-card:hover {
  transform: translateY(-5px);
}

.contact-card h2 {
  color: #00509E;
  margin-bottom: 10px;
}

.contact-card p {
  font-size: 1.2em;
  color: #333;
}

.contact-card a {
  color: #00509E;
  text-decoration: none;
}

.contact-card a:hover {
  text-decoration: underline;
}
</style>
