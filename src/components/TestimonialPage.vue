<template>
  <div>
    <!-- Hero Section -->
    <section class="hero" ref="hero" :class="{ 'fade-in': showHero }">
      <img :src="backupImage" alt="Backup Image" class="hero-image" />
      <template v-if="videoPlayable">
        <video class="hero-video" autoplay muted loop playsinline webkit-playsinline ref="heroVideo">
          <source src="/hero_video.mp4" type="video/mp4" />
        </video>
      </template>
      <div class="hero-content">
        <h1>Testimonials</h1>
      </div>
    </section>

    <!-- Dynamic Testimonials -->
    <section v-for="(paras, idx) in testimonials" :key="idx" class="testimonial-section" :class="[
      { 'fade-in': visibleSections.includes(idx) },
      { 'testimonial--alt': idx % 2 === 1 }
    ]">
      <div class="testimonial-card">
        <blockquote class="testimonial-quote">
          <p v-for="(p, pIdx) in paras" :key="pIdx" class="testimonial-para">
            <span v-if="pIdx === 0">“</span>{{ p }}<span v-if="pIdx === paras.length - 1">”</span>
          </p>
        </blockquote>

        <img :src="idx % 2 === 1 ? logoWhite : logoBlack" alt="CSP Logo" class="testimonial-logo" />
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "TestimonialPage",

  data() {
    return {
      showHero: true,
      visibleSections: [],

      videoPlayable: true,
      backupImage: require("@/assets/AnimatedSky.gif"),

      logoBlack: require("@/assets/CSP_Logo_Black_trans.png"),
      logoWhite: require("@/assets/CSP_Logo_White_trans.png"),

      // ============================================================
      // EDIT THIS ARRAY TO ADD / REORDER TESTIMONIALS
      // Each testimonial = array of 1..many paragraphs
      // ============================================================

      testimonials: [
        [
          "It was my 1st time doing therapy and I chose to go due to some struggles I was battling in my head. Galina was so welcoming and supportive from the 1st phone call to the 1st session all the way to the last session. She always staying in close contact over email and always providing summaries of a particular session and also provided content to help with the sessions we were talking about. She really helped me realise my struggles, helped me overcome them and how to stay in control of them. I am so grateful for all the hard work she put into me and the knowledge I came away with.",
          "Thank you Galina"
        ],
         [
          "I was so relieved to gain a recommendation from a colleague for Galina. At the point of contact, my daughter (12) was struggling with challenging friendships, self confidence, low self esteem and being able to express her feelings.",
          "From the first meeting, I had confidence in Galina’s ability to develop a trusting rapport with my daughter and gently support her with compassion. Galina worked with her for approximately three months in which time her confidence started to grow as she challenged previous experiences. We saw examples of her standing up to peers and take on new roles at school. Testament to this, she was awarded the resilience award at school and congratulated on the transformation she had demonstrated in her academic progress in addition.",
          "I can wholeheartedly recommend Galina's support."
        ],
        [
          "I cannot put into words how much Galina has supported me throughout our sessions. This was my first time attending therapy so I was apprehensive. She guided me through everything and after the first session I felt at ease and excited to come back the following week. From the rewinds to coping strategies, she has given me the tools and resources to help me moving forward. Couldn’t recommend her highly enough."
        ],
        [
          "I had a lot of childhood traumas which had deeply affected me for a long time. With Galina’s help, I managed to overcome several fears/phobias. On the occasions where I did not feel able to complete a ‘Rewind’, we had an amazing relaxation session instead. She worked with me at my own pace and helped to resolve sleeping issues. I am now able to enjoy water sports, where I previously had a constant fear of drowning, so I refused to go anywhere near open bodies of water. I also had problems with needles, both giving blood and having injections, after a ‘Rewind’, I took my child to have a blood test with little difficulty. Overall, I have become a more confident, less anxious person. It has completely changed my life for the better."
        ],
        [
          "Galina was very professional but also very understanding and helpful to me! She asked very relevant questions and listened intently!"
        ],
        [
          "After my wife of 25 years died suddenly I thought I should be old enough to deal with the grief on my own. However, the long years of interdependency were too ingrained to just suddenly let go. I found myself becoming more and more introverted, I stopped interacting with friends, became inactive and depressed. It wasn’t until I started having thoughts of self-harm that I finally took notice and realised I needed help. I just didn’t want to exist without my wife any longer.",
          "Just before Christmas 2024 I saw a leaflet simply stating “Galina - Bereavement Therapy”. At that moment, I reached rock bottom and called Galina as a last hope… and what a good call that turned out to be!",
          "Galina is quiet, calm, empathic and very, very clever. She seemed to understand my total desolation from my first visit. At first, she simply listened. I didn’t realise it at the time but she simply gave me the space to spill all the horror, grief and solitude I had felt since my wife’s death. Then, slowly and without pressure, we began to talk and she started to offer me tools to help me through. Never any judgement; never any pressure; Galina proved to be the mirror in which I faced myself.",
          "Happily, I have now been able to look beyond my grief; to accept and understand the value of past experience and to carry that into the future with me. I will never forget the incredibly good times that my marriage brought me and those memories will continue to nourish me and overshadow my grief.",
          "To Galina, my most heartfelt thanks. To you reading this, do not suffer alone. There is a path through grief but I only found mine with Galina’s help."
        ],
        [
          "Galina is kind, patient, caring and enables you to confront your issues. I cannot ever thank her enough for setting me free of my issues and with her help and guidance, she was like a beacon. I had a rewind which was instantly successful, it was truly mind-blowing the difference it made and continues to make. I am now back to the bubbly, positive person I was with Galina's gentle guidance."
        ],
        [
          "Galina is fantastic at what she does. She created an environment where I felt safe, supported, and heard. Her thoughtful use of different techniques and resources felt personal and exactly what I needed, especially during a time when negative thoughts were becoming overwhelming. I am very grateful for her guidance and the difference it has made for me. Thank you!"
        ]
      ]
    };
  },

  mounted() {
    this.$nextTick(() => {
      setTimeout(() => {
        this.checkVideoPlayback();
      }, 50);

      const observer = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            if (!entry.isIntersecting) return;

            const idx = Number(entry.target.dataset.index);
            if (!this.visibleSections.includes(idx)) {
              this.visibleSections.push(idx);
            }
          });
        },
        { threshold: 0.1 }
      );

      const sections = this.$el.querySelectorAll(".testimonial-section");
      sections.forEach((el, idx) => {
        el.dataset.index = String(idx);
        observer.observe(el);
      });
    });
  },

  methods: {
    checkVideoPlayback() {
      const video = this.$refs.heroVideo;
      if (video) {
        video
          .play()
          .then(() => {
            this.videoPlayable = true;
            this.fadeInVideo();
          })
          .catch(() => {
            this.videoPlayable = false;
          });
      }
    },
    fadeInVideo() {
      const videoElement = this.$refs.heroVideo;
      if (videoElement) {
        videoElement.classList.add("fade-in-video");
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
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  font-size: xx-large;
}

.hero-image,
.hero-video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
}

.hero-video {
  z-index: -2;
  opacity: 0;
  transition: opacity 1s ease-in;
}

.hero-video.fade-in-video {
  opacity: 1;
  z-index: -1;
}

.hero-content {
  z-index: 1;
}

.testimonial-section {
  padding: 40px;
  opacity: 0;
  transition: opacity 1s ease-in;
  font-size: larger;
  background-color: #f9f9f9;
  color: #666;
}

.testimonial-section.testimonial--alt {
  background-color: #5DAED5;
  color: white;
}

.testimonial-card blockquote {
  margin: 0;
  padding-left: 1em;
  border-left: 4px solid #ccc;
  font-style: italic;
  /* ✅ make testimonial text italic */
  text-align: left;
}

.testimonial-card blockquote p {
  margin: 0 0 12px;
}

.testimonial-card blockquote p:last-child {
  margin-bottom: 1;
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
</style>