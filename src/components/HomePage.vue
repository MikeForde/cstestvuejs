<template>
  <div>
    <section class="hero">
      <div class="hero-content">
        <h1>Clear Skies Practice Tewkesbury</h1>
        <p>Professional and confidential counselling services in Tewkesbury</p>
      </div>
    </section>
    <section class="intro">
      <h2>About Me</h2>
      <div class="portrait-container">
        <img src="@/assets/galina.jpg" alt="Galina Filipkova" class="portrait"/>
      </div>
      <p>Welcome to my counselling practice. I offer a safe and confidential space to explore your thoughts and feelings. With years of experience, I am here to help you navigate through your challenges and achieve personal growth.</p>
    </section>
    <section class="services">
      <h2>Services</h2>
      <ul>
        <li>Individual Counselling</li>
        <li>Couples Counselling</li>
        <li>Family Therapy</li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  name: 'HomePage'
}
</script>

<style scoped>
.hero {
  background-image: url('@/assets/hero_image.jpg');
  background-size: cover;
  background-position: center;
  color: white;
  text-align: center;
  padding: 50px 20px;
}

.hero-content {
  max-width: 800px;
  margin: auto;
}

.intro, .services {
  padding: 20px;
  text-align: center;
}

.intro h2, .services h2 {
  color: #333;
  margin-bottom: 15px;
}

.intro p, .services ul {
  color: #666;
}

.services ul {
  list-style-type: none;
  padding: 0;
}

.services ul li {
  margin: 10px 0;
}

.portrait-container {
  display: flex;
  justify-content: center;
  margin: 20px 0;
}

.portrait {
  border: 5px solid #add8e6; /* Pale blue frame */
  border-radius: 10px;
  width: 200px; /* Adjust as needed */
  height: auto;
}
</style>
