<template>
  <div>
    <!-- Hero Section -->
    <section class="hero" ref="hero" :class="{ 'fade-in': showHero }">
      <img :src="backupImage" alt="Backup Image" class="hero-image" />
      <template v-if="videoPlayable">
        <video class="hero-video" autoplay muted loop playsinline webkit-playsinline ref="heroVideo">
          <source src="/hero_video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </template>
      <div class="hero-content">
        <h1>Testimonials</h1>
      </div>
    </section>

    <!-- Testimonial Sections -->
    <section
      class="testimonial-section"
      ref="section1"
      :data-section="1"
      :class="{ 'fade-in': showSection1 }"
    >
      <div class="testimonial-card">
        <blockquote>
          <p>“I cannot put into words how much Galina has supported me throughout our sessions. This was my first time attending therapy so I was apprehensive. She guided me through everything and after the first session I felt at ease and excited to come back the following week. From the rewinds to coping strategies, she has given me the tools and resources to help me moving forward. Couldn’t recommend her highly enough.”</p>
        </blockquote>
        <img src="@/assets/CSP_Logo_Black_trans.png" alt="CSP Logo" class="testimonial-logo" />
      </div>
    </section>

    <section
      class="testimonial-section"
      ref="section2"
      :data-section="2"
      :class="{ 'fade-in': showSection2 }"
    >
      <div class="testimonial-card">
        <blockquote>
          “I had a lot of childhood traumas which had deeply affected me for a long time. With Galina’s
help, I managed to overcome several fears/phobias. On the occasions where I did not feel
able to complete a ‘Rewind’, we had an amazing relaxation session instead. She worked
with me at my own pace and helped to resolve sleeping issues. I am now able to enjoy water
sports, where I previously had a constant fear of drowning, so I refused to go anywhere near
open bodies of water. I also had problems with needles, both giving blood and having
injections, after a ‘Rewind’, I took my child to have a blood test with little difficulty. Overall, I
have become a more confident, less anxious person. It has completely changed my life for
the better.”
        </blockquote>
        <img src="@/assets/CSP_Logo_White_trans.png" alt="CSP Logo" class="testimonial-logo" />
      </div>
    </section>

    <section
      class="testimonial-section"
      ref="section3"
      :data-section="3"
      :class="{ 'fade-in': showSection3 }"
    >
      <div class="testimonial-card">
        <blockquote>
          <p>“Galina was very professional but also very understanding and helpful to me! She asked very relevant questions and listened intently!”</p>
        </blockquote>
        <img src="@/assets/CSP_Logo_Black_trans.png" alt="CSP Logo" class="testimonial-logo" />
      </div>
    </section>

    <section
      class="testimonial-section"
      ref="section4"
      :data-section="4"
      :class="{ 'fade-in': showSection4 }"
    >
      <div class="testimonial-card">
        <blockquote>
          <p>“I was so relieved to gain a recommendation from a colleague for Galina. At the point of contact, my daughter (12)  was struggling with challenging friendships, self confidence, low self esteem and being able to express her feelings.</p>
          <p>From the first meeting, I had confidence in Galina’s ability to develop a trusting rapport with my daughter and gently support her with compassion. Galina worked with her for approximately three months in which time her confidence started to grow as she challenged previous experiences. We saw examples of her standing up to peers and take on new roles at school. Testament to this, she was awarded the resilience award at school and congratulated on the transformation she had demonstrated in her academic progress in addition.</p>
          <p>I can wholeheartedly recommend Galina's support.”</p>
        </blockquote>
        <img src="@/assets/CSP_Logo_White_trans.png" alt="CSP Logo" class="testimonial-logo" />
      </div>
    </section>

    <section
      class="testimonial-section"
      ref="section5"
      :data-section="5"
      :class="{ 'fade-in': showSection5 }"
    >
      <div class="testimonial-card">
        <blockquote>
          <p>“After my wife of 25 years died suddenly I thought I should be old enough to deal with the grief on my own. However, the long years of interdependency were too ingrained to just suddenly let go. I found myself becoming more and more introverted, I stopped interacting with friends, became inactive and depressed. It wasn’t until I started having thoughts of self-harm that I finally took notice and realised I needed help. I just didn’t want to exist without my wife any longer.</p>
          <p>Just before Christmas 2024 I saw a leaflet simply stating “Galina - Bereavement Therapy”. At that moment, I reached rock bottom and called Galina as a last hope… and what a good call that turned out to be!</p>
          <p>Galina is quiet, calm, empathic and very, very clever. She seemed to understand my total desolation from my first visit. At first, she simply listened. I didn’t realise it at the time but she simply gave me the space to spill all the horror, grief and solitude I had felt since my wife’s death. Then, slowly and without pressure, we began to talk and she started to offer me tools to help me through. Never any judgement; never any pressure; Galina proved to be the mirror in which I faced myself.</p>
          <p>Happily, I have now been able to look beyond my grief; to accept and understand the value of past experience and to carry that into the future with me. I will never forget the incredibly good times that my marriage brought me and those memories will continue to nourish me and overshadow my grief.</p>
          <p>To Galina, my most heartfelt thanks. To you reading this, do not suffer alone. There is a path through grief but I only found mine with Galina’s help.”</p>
        </blockquote>
        <img src="@/assets/CSP_Logo_Black_trans.png" alt="CSP Logo" class="testimonial-logo" />
      </div>
    </section>

    <section
      class="testimonial-section"
      ref="section6"
      :data-section="6"
      :class="{ 'fade-in': showSection6 }"
    >
      <div class="testimonial-card">
        <blockquote>
           <p>“Galina is kind, patient, caring and enables you to confront your issues. I cannot ever thank her enough for setting me free of my issues and with her help and guidance, she was like a beacon. I had a rewind which was instantly successful, it was truly mind-blowing the difference it made and continues to make. I am now back to the bubbly, positive person I was with Galina's gentle guidance.”</p>
        </blockquote>
        <img src="@/assets/CSP_Logo_White_trans.png" alt="CSP Logo" class="testimonial-logo" />
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'TestimonialPage',
  data() {
    return {
      showHero: true,
      showSection1: false,
      showSection2: false,
      showSection3: false,
      showSection4: false,
      showSection5: false,
      showSection6: false,
      videoPlayable: true,
      backupImage: require('@/assets/AnimatedSky.gif')
    };
  },
  mounted() {
    this.$nextTick(() => {
      setTimeout(() => {
        this.checkVideoPlayback();
      }, 50);
      const options = { threshold: 0.1 };
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const sec = entry.target.dataset.section;
            this[`showSection${sec}`] = true;
          }
        });
      }, options);
      observer.observe(this.$refs.section1);
      observer.observe(this.$refs.section2);
      observer.observe(this.$refs.section3);
      observer.observe(this.$refs.section4);
      observer.observe(this.$refs.section5);
      observer.observe(this.$refs.section6);
    });
  },
  methods: {
    checkVideoPlayback() {
      const video = this.$refs.heroVideo;
      if (video) {
        video.play().then(() => {
          this.videoPlayable = true;
          this.fadeInVideo();
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
};
</script>

<style scoped>
.hero {
  position: relative;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
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
  transition: opacity 1s ease-in;
}

.hero-video.fade-in-video {
  opacity: 1;
  z-index: -1;
}

.hero-content {
  max-width: 800px;
  margin: auto;
  padding: 50px 20px;
  z-index: 1;
}

.testimonial-section {
  padding: 20px;
  opacity: 0;
  transition: opacity 1s ease-in;
  font-size: larger;
  background-color: #f9f9f9;
  color: #666;
}

.testimonial-section[data-section="2"], .testimonial-section[data-section="4"], .testimonial-section[data-section="6"]{
  background-color: #5DAED5;
  color: white;
}

.testimonial-card {
  background: transparent;
  border: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
}

.testimonial-card blockquote {
  margin: 0;
  padding-left: 1em;
  border-left: 4px solid #ccc;
  font-style: italic;
  text-align: left;
}

.testimonial-logo {
  display: block;
  margin: 20px auto 0;
  width: 100px;
  height: auto;
}

.fade-in {
  opacity: 1;
}

@media screen and (max-width: 768px) {
  .hero,
  .testimonial-section {
    width: 100%;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
  .hero {
    height: 250px;
  }
  .hero-content {
    padding: 10px;
  }
  .hero-content h1 {
    font-size: larger;
  }
}
</style>