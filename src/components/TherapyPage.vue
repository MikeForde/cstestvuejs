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
        <h1>Therapy</h1>
      </div>
    </section>

    <section class="therapy" ref="therapy" :class="{ 'fade-in': showTherapy }">
      <div class="therapy-container">
        <div class="therapy-card text-card-therapy">
          <h2>Therapy</h2>
          <p>Our work will begin with understanding what has brought you to seek support and what you would like to be different.</p>
        </div>
      </div>
    </section>
    
    <section class="approach" ref="approach" :class="{ 'fade-in': showApproach }">
      <div class="approach-container">
        <div class="approach-card text-card">
          <h2>My approach</h2>
          <p>The approach I take, the <a href="https://www.humangivens.com/human-givens/about/" target="_blank">Human Givens (HG) approach</a>, is underpinned by a holistic understanding of our essential emotional and physical needs which when met in balance lead to a fulfilling and emotionally healthy life.</p>
          <p>It draws on the latest research in psychology, neuroscience and on the best of person-centred, solution-focussed, motivational interviewing and CBT therapy.</p>
          <p>The HG approach is a practical one. Together we will create a plan tailored to your needs using tools, skills and knowledge which I will teach you and, most importantly, your own resources, strengths and skills to help you move forward.</p>
          <p>To support you with implementing the desired change and growing your confidence, I offer guided imagery alongside other effective techniques. </p>
          <p><a href="https://www.humangivens.com/human-givens/research/research-findings/" target="_blank">Learn more</a></p>
        </div>
        <div class="approach-card image-card">
          <img src="@/assets/LillySteppingStones.jpeg" alt="Therapy Image" class="approach-image"/>
        </div>
      </div>
    </section>
    
    <section class="trauma" ref="trauma" :class="{ 'fade-in': showTrauma }">
      <div class="trauma-container">
        <div class="trauma-card image-card">
          <img src="@/assets/Ladder_Tree.jpg" alt="Trauma Image" class="trauma-image"/>
        </div>
        <div class="trauma-card text-card">
          <h2>Trauma</h2>
          <p>If you are held back by trauma, I will help you move on from that with the effective method developed by the Human Givens Institute. This method is utilised by the PTSD Resolution charity for UK veterans and their families.</p>
          <p><a href="https://www.humangivens.com/case-studies/ptsd-resolution" target="_blank">Learn more</a></p>
        </div>
      </div>
    </section>
    <section class="moving-towards-change" ref="movingTowardsChange" :class="{ 'fade-in': showMovingTowardsChange }">
    <div class="change-card-container">
      <div class="change-card text-card2">
        <h2>Moving towards change</h2>
        <p>The Human Givens model is a brief, solution-focused approach that usually helps you see the change you want in 4-6 sessions. Some people may achieve the wanted change in fewer sessions while others may require more sessions due to the complexity of their lived experiences.</p>
        <p> I will work with your individual needs and at your pace. You can tell me after each session if you would like to book a further session. My aim is for you to feel a little better after each session and grow more and more confident in your ability to bring about the change you wish to happen.</p>
        <p>My promise to my clients is to provide you with knowledge, skills and techniques to sustain your mental wellbeing beyond therapy sessions.</p>
      </div>
      <div class="approach-card image-card">
        <img src="@/assets/TherapyPath.png" alt="Therapy Path" class="therapy-path-image"/>
      </div>
    </div>
  </section>
  </div>
</template>

<script>
export default {
  name: 'TherapyPage',
  data() {
    return {
      showHero: true,
      showTherapy: false,
      showApproach: false,
      showTrauma: false,
      showMovingTowardsChange: false,
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
            if (entry.target.classList.contains('therapy')) {
              this.showTherapy = true;
            } else if (entry.target.classList.contains('approach')) {
              this.showApproach = true;
            } else if (entry.target.classList.contains('trauma')) {
              this.showTrauma = true;
            } else if (entry.target.classList.contains('moving-towards-change')) {
              this.showMovingTowardsChange = true;
            }
          }
        });
      }, options);

    observer.observe(this.$refs.therapy);
    observer.observe(this.$refs.approach);
    observer.observe(this.$refs.trauma);
    observer.observe(this.$refs.movingTowardsChange);
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
  opacity: 0;
  transition: opacity 1s ease-in; /* Transition for fading in */
}

.hero-video.fade-in-video {
  opacity: 1; /* Fade the video in when the class is added */
  z-index: -1; /* Bring the video above the GIF */
}

.hero-content {
  margin: auto;
  text-align: center;
  color: white;
  padding: 50px 20px;
  z-index: 1;
}

.therapy, .approach, .trauma, .moving-towards-change {
  opacity: 0;
  transition: opacity 1s ease-in;
  font-size: larger;
}

.therapy p, .approach p, .trauma p, .moving-towards-change p {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  color: #666;
  font-size: large;
}

.approach p, .moving-towards-change p {
  color: white;
}

.therapy h1, .therapy h2, .therapy h3,
.approach h1, .approach h2, .approach h3,
.trauma h1, .trauma h2, .trauma h3,
.moving-towards-change h1, .moving-towards-change h2, .moving-towards-change h3 {
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  color: #333;
}

.approach h1, .approach h2, .approach h3,
.moving-towards-change h2, .moving-towards-change h3 {
  color: white;
}

.approach-container, .trauma-container {
  display: flex;
  justify-content: space-around;
  align-items: stretch;
}

.therapy-card, .approach-card, .trauma-card, .change-card {
  background: #f9f9f9;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
}

.approach-card, .change-card, .text-card2 {
  background: #5DAED5;
}

.text-card {
  width: 60%;
  padding: 0 50px;
}

.text-card-therapy {
  padding: 0 50px;
}

.image-card {
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.approach-image, .trauma-image {
  width: 100%;
  height: auto;
  border-radius: 10px;
  object-fit: cover;
}

.fade-in {
  opacity: 1;
}

.change-card-container {
  display: flex;
  justify-content: space-between;
  align-items: stretch;
}

.text-card2, .image-card {
  width: 50%;
  padding: 20px;
}

.therapy-path-image {
  width: 100%;
  height: auto;
  border-radius: 10px;
  object-fit: cover;
}

@media screen and (max-width: 768px) {
  .hero, .therapy, .approach, .trauma, .moving-towards-change {
    width: 100%;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  .approach-container, .trauma-container, .change-card-container {
    flex-direction: column;
  }

  .text-card, .image-card, .text-card2 {
    width: 100%;
    /* margin-bottom: 20px; */
    box-sizing: border-box;
  }

  .approach-container .text-card {
    order: 2;
  }

  .approach-container .image-card {
    order: 1;
  }

  .trauma-container .text-card {
    order: 1;
  }

  .trauma-container .image-card {
    order: 2;
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

  .hero-content p {
    font-size: large;
  }
}
</style>
