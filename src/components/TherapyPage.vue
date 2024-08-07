<template>
  <div>
    <section class="hero">
      <div class="hero-content">
        <h1>Therapy</h1>
      </div>
    </section>

    <section class="therapy" ref="therapy" :class="{ 'fade-in': showTherapy }">
      <div class="therapy-container">
        <div class="therapy-card text-card2">
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
          <p>The approach also draws on the latest research in psychology, neuroscience and on the best of person-centred, solution-focussed, motivational interviewing and CBT therapy.</p>
          <p>The HG approach is a practical approach. Together we will create a plan tailored to your needs using tools, skills and knowledge I will teach you and, most importantly, your own resources, strengths and skills to help you move forward.</p>
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
      <div class="change-card text-card2">
        <h2>Moving towards change</h2>
        <p>The Human Givens model is a brief, solution-focused approach that usually helps you see the change you want in 4-6 sessions. Some people may achieve the wanted change in fewer sessions while others may require more sessions due to the complexity of their lived experiences. I will work with your individual needs and at your pace. You can tell me after each session if you would like to book a further session. My aim is for you to feel a little better after each session and grow more and more confident in your ability to bring about the change you wish to happen.</p>
        <p>My promise to my clients is for you to have knowledge, skills and techniques to sustain your mental wellbeing beyond therapy sessions.</p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'TherapyPage',
  data() {
    return {
      showTherapy: false,
      showApproach: false,
      showTrauma: false,
      showMovingTowardsChange: false,
    };
  },
  mounted() {
    const options = {
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
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
          observer.unobserve(entry.target);
        }
      });
    }, options);

    this.$nextTick(() => {
      observer.observe(this.$refs.therapy);
      observer.observe(this.$refs.approach);
      observer.observe(this.$refs.trauma);
      observer.observe(this.$refs.movingTowardsChange);
    });
  }
}
</script>

<style scoped>
.hero {
  position: relative;
  overflow: hidden;
  background-image: url('@/assets/Sky.jpeg');
  background-size: cover;
  background-position: center;
  color: white;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  /* font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; */
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  font-size:xx-large;
}

.hero-content {
  max-width: 800px;
  margin: auto;
  text-align: center;
  color: white;
  padding: 50px 20px;
}

.therapy, .approach, .trauma, .moving-towards-change {
  padding: 20px;
  opacity: 0;
  transition: opacity 1s ease-in;
  font-size: larger;
}

.therapy p, .approach p, .trauma p, .moving-towards-change p {
  font-family: Verdana, sans-serif;
  color: #666;
  font-size: large;
}
.approach p, .moving-towards-change p{
  color: white
}

.therapy h1, .therapy h2, .therapy h3, .approach h1, .approach h2, .approach h3, .trauma h1, .trauma h2, .trauma h3, .moving-towards-change h1, .moving-towards-change h2, .moving-towards-change h3 {
  font-family: Cambria, serif;
  color: #333;
}

.approach h1, .approach h2, .approach h3, .moving-towards-change h2, .moving-towards-change h3 {
  color: white;
}

.approach-container, .trauma-container {
  display: flex;
  justify-content: space-around;
  align-items: stretch;
}

.therapy-card, .approach-card, .trauma-card, .change-card {
  background: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
}

.therapy-card {
  border: 10px solid #5DAED5;
}

.approach-card, .change-card {
  background: #5DAED5;
}


.text-card {
  width: 55%;
  padding: 0 50px;
}

.text-card2 {
  padding: 0 50px;
}

.image-card {
  width: 35%;
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

@media screen and (max-width: 768px) {
  .approach-container, .trauma-container {
    flex-direction: column;
  }

  .text-card, .image-card {
    width: 100%;
    margin-bottom: 20px;
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
}
</style>
