<template>
  <div>
    <section class="hero">
      <div class="hero-content">
        <h1>Human Givens Therapy</h1>
      </div>
    </section>
    <section class="intro" ref="intro" :class="{ 'fade-in': showIntro }">
      <img src="@/assets/human_givens_image.jpg" alt="Human Givens" class="intro-image">
      <h2>What is Human Givens?</h2>
      <p>The Human Givens approach offers a clear understanding of what we all need to feel emotionally well and be able to flourish in our individual lives:</p>
      <ul>
        <li><strong>Security</strong> – safe territory and an environment which allows us to develop fully</li>
        <li><strong>Attention</strong> - to give it to and receive it from significant others</li>
        <li><strong>Sense of autonomy and control</strong> – being able to make responsible choices about our own lives</li>
        <li><strong>Emotional intimacy</strong> – to know that at least one other person accepts us totally for who we are</li>
        <li><strong>Community</strong> – feeling connected to a group or groups beyond family</li>
        <li><strong>Status</strong> – being appreciated for our contributions within the social groupings of which we are a part</li>
        <li><strong>Privacy</strong> – opportunity to reflect and consolidate experience</li>
        <li><strong>Achievement</strong> – when you can say to yourself: “I’m glad I did that!”</li>
        <li><strong>Meaning</strong> – which comes from being stretched in what we do and how we think</li>
      </ul>
      <p>When one or more of these needs are not met in balance, which can happen to all of us from time to time, we may experience emotional distress and find it hard to chart a way through our difficulties.</p>
    </section>
    <section class="details" ref="details" :class="{ 'fade-in': showDetails }">
      <h2>What I will do:</h2>
      <ul>
        <li>Help you find ways to deal with the particular difficulties you are facing now.</li>
        <li>Set clear goals which will allow you to keep track of your progress from session to session.</li>
        <li>Aim to have you leave each session feeling better than when you arrived.</li>
        <li>Explore with you what coping skills can be better developed and which available resources can be put to better use.</li>
        <li>Explore with you if there is a past trauma event that could be making your life challenging now. An effective protocol is available to clear the lasting emotional effect of a trauma without the need to disclose upsetting and painful details.</li>
        <li>Agree with you, at the end of each session, whether and when you need a further session. We work as a team.</li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  name: 'HumanGivens',
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
          } else if (entry.target.classList.contains('details')) {
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

.intro, .details {
  padding: 20px;
  text-align: left;
  max-width: 800px;
  margin: auto;
  opacity: 0;
  transition: opacity 1s ease-in;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.intro-image {
  display: block;
  max-width: 100%;
  height: auto;
  margin: 20px auto;
}

.fade-in {
  opacity: 1;
}

.intro h2, .details h2 {
  color: #333;
  margin-bottom: 15px;
}

.intro p, .details ul {
  color: #666;
}

.details ul {
  list-style-type: none;
  padding: 0;
}

.details ul li {
  margin: 10px 0;
}
</style>
