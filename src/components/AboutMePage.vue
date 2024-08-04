<template>
    <div>
      <section class="hero">
        <div class="hero-content">
          <h1>About Me</h1>
        </div>
      </section>
      <section class="intro" ref="intro" :class="{ 'fade-in': showIntro }">
        <div class="intro-content">
          <img src="@/assets/portrait.jpg" alt="About Me Image" class="intro-image">
          <h2>Hello, I'm Galina Filipkova</h2>
          <p>I started the Clear Skies Practice as a safe place where you can come to be healed, to enjoy a shared experience and to find your way forward. You are not alone, and help is now just a moment away.</p>
          <p>Together we will discover ways to help you cope with the things that may have damaged or hurt you, so you can take courage to live wholeheartedly again.</p>
        </div>
      </section>
      <section class="contact-details" ref="details" :class="{ 'fade-in': showDetails }">
        <h2>Contact Details</h2>
        <p><strong>Address:</strong> Clear Skies Practice, The Road, Tewkesbury, GL20, England, UK</p>
        <p><strong>Phone:</strong> 0789 123 345</p>
        <p><strong>Email:</strong> <a href="mailto:info@clearskiespractice.com">info@clearskiespractice.com</a></p>
      </section>
    </div>
  </template>
  
  <script>
  export default {
    name: 'AboutMePage',
    data() {
      return {
        showIntro: false,
        showDetails: false,
      };
    },
    mounted() {
      const options = {
        threshold: 0.1
      };
  
      const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            if (entry.target.classList.contains('intro')) {
              this.showIntro = true;
            } else if (entry.target.classList.contains('contact-details')) {
              this.showDetails = true;
            }
            observer.unobserve(entry.target);
          }
        });
      }, options);
  
      this.$nextTick(() => {
        observer.observe(this.$refs.intro);
        observer.observe(this.$refs.details);
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
  
  .intro, .contact-details {
    padding: 20px;
    text-align: left;
    max-width: 800px;
    margin: auto;
    opacity: 0;
    transition: opacity 1s ease-in;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }
  
  .fade-in {
    opacity: 1;
  }
  
  .intro-content {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  
  .intro-image {
    max-width: 100%;
    height: 400px;
    margin: 20px 0;
  }
  
  .contact-details h2 {
    color: #333;
    margin-bottom: 15px;
  }
  </style>
  