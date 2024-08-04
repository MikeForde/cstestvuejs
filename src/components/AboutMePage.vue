<template>
    <div>
      <section class="hero">
        <div class="hero-content">
          <h1>About Me</h1>
        </div>
      </section>
      <section class="intro">
        <div class="intro-content">
          <img src="@/assets/portrait.jpg" alt="About Me Image" class="intro-image">
          <h2>Hello, I'm Galina Filipkova</h2>
          <p>I started the Clear Skies Practice as a safe place where you can come to be healed, to enjoy a shared experience and to find your way forward. You are not alone, and help is now just a moment away.</p>
          <p>Together we will discover ways to help you cope with the things that may have damaged or hurt you, so you can take courage to live wholeheartedly again.</p>
        </div>
      </section>
      <section class="contact-details">
        <h2>Contact Details</h2>
        <p><strong>Address:</strong> Clear Skies Practice, The Road, Tewkesbury, GL20, England, UK</p>
        <p><strong>Phone:</strong> 0789 123 345</p>
        <p><strong>Email:</strong> <a href="mailto:info@clearskiespractice.com">info@clearskiespractice.com</a></p>
      </section>
    </div>
  </template>
  
  <script>
  export default {
    name: 'AboutMePage'
  }
  </script>
  
  <style scoped>
  .hero {
    background-color: #00509E;
    color: white;
    text-align: center;
    padding: 50px 20px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }
  
  .hero-content {
    max-width: 800px;
    margin: auto;
  }
  
  .intro {
    padding: 20px;
    text-align: left;
    max-width: 800px;
    margin: auto;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }
  
  .intro-content {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  
  .intro-image {
    max-width: 100%;
    height: auto;
    margin: 20px 0;
  }
  
  .contact-details {
    padding: 20px;
    text-align: left;
    max-width: 800px;
    margin: auto;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }
  
  .contact-details h2 {
    color: #333;
    margin-bottom: 15px;
  }
  </style>
  