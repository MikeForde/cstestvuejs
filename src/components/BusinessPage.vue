<template>
    <div>
      <section class="hero">
        <div class="hero-content">
          <h1>Fees and Terms of Business</h1>
        </div>
      </section>
      
      <section class="info-section" ref="section1" :data-section="1" :class="{ 'fade-in': showSection1 }">
        <div class="info-card">
          <h2>Your trainee therapist: Galina Filipkova</h2>
          <p>Telephone: <a href="sms:07760 531057">07760 531057</a></p>
          <p>E-mail: <a href="mailto:clearskiespractice@gmail.com">clearskiespractice@gmail.com</a></p>
        </div>
      </section>
  
      <section class="info-section" ref="section2" :data-section="2" :class="{ 'fade-in': showSection2 }">
        <div class="info-card">
          <h2>Terms of Business</h2>
        </div>
      </section>
  
      <section class="info-section" ref="section3" :data-section="3" :class="{ 'fade-in': showSection3 }">
        <div class="info-card">
          <h2>Opening Hours</h2>
          <p>Wednesday 2.30pm to 6.30pm</p>
        </div>
      </section>
  
      <section class="info-section" ref="section4" :data-section="4" :class="{ 'fade-in': showSection4 }">
        <div class="info-card">
          <h2>Outcome measures</h2>
          <p>We use various measures to gauge your progress and response to treatment. If you are happy to do so, you may be asked to complete a brief anonymised questionnaire to help the therapist understand your needs, how best to help you and to evaluate outcomes.</p>
        </div>
      </section>
  
      <section class="info-section" ref="section5" :data-section="5" :class="{ 'fade-in': showSection5 }">
        <div class="info-card">
          <h2>Cost of Therapy</h2>
          <p>The therapy is free; however, we ask our clients to contribute to room hire £12.00 per 1-hour session payable at each session. Any longer session, if agreed to be necessary by both parties in advance, will be charged on a pro-rata basis for room hire.</p>
          <p>Notes:</p>
          <ul>
            <li>The session fee is subject to revision from time to time. Advance notice will be given of any increase.</li>
            <li>Human Givens therapists and therapist trainees aim to meet the needs of their clients in as few sessions as possible and do not charge in advance for a course of treatment</li>
            <li>Any extra work undertaken on the client’s behalf, such as writing reports or letters for other agencies will be charged at the standard hourly rate.</li>
          </ul>
        </div>
      </section>
  
      <section class="info-section" ref="section6" :data-section="6" :class="{ 'fade-in': showSection6 }">
        <div class="info-card">
          <h2>Payment Method</h2>
          <p>If it is convenient to the client, a bank payment may be made in advance or on the day of consultation otherwise we accept cash. An invoice will be sent via email in advance.</p>
        </div>
      </section>
  
      <section class="info-section" ref="section7" :data-section="7" :class="{ 'fade-in': showSection7 }">
        <div class="info-card">
          <h2>Cancellation Policy</h2>
          <p>Since scheduling of an appointment involves the reservation of time for your individual session, a minimum of 48 hours is required for rescheduling or cancelling client appointments. Unless we reach a different agreement, the full room fee will be charged for session missed without such notification.</p>
          <p>In the event of a serious accident, emergency, or other similar situation outside the client’s control, please deal with the situation first and notify us at the earliest convenient time, or we will follow up with you typically within 24 to 48 hours of the missed appointment.</p>
        </div>
      </section>
  
      <section class="info-section" ref="section8" :data-section="8" :class="{ 'fade-in': showSection8 }">
        <div class="info-card">
          <h2>No Show Policy</h2>
          <p>Where an appointment is arranged and agreed, and a client does not attend that appointment, the room fee will be payable in full.</p>
          <p>Your Personal Information will be kept in accordance with the Data Protection Act (2018) and the General Data Protection Regulation (GDPR).</p>
          <p>Please see our Privacy Policy (attached) for full details of the information we process.</p>
        </div>
      </section>
  
      <section class="info-section" ref="section9" :data-section="9" :class="{ 'fade-in': showSection9 }">
        <div class="info-card">
          <h2>Governance</h2>
          <p>The work of this practice is governed by The Codes of Ethics & Professional Practice of the Human Givens Institute. The Institute can be contacted as follows:</p>
          <p>The HGI Membership Secretary, Human Givens Institute, Chalvington, East Sussex, BN27 3TD, UK</p>
          <p>Telephone: <a href="sms:01323 811662">01323 811662</a></p>
          <p>E-mail: <a href="mailto:hgi@humangivens.com">hgi@humangivens.com</a></p>
          <p>The Human Givens Institute’s Code of Ethics and Conduct can be viewed at: <a href="https://www.hgi.org.uk/about-hgi/ethics-and-conduct" target="_blank">https://www.hgi.org.uk/about-hgi/ethics-and-conduct</a>. If you would like a paper copy of the Policy, please contact the Human Givens Institute.</p>
          <p>If any client has comments or concerns, or even a complaint, we ask them to bring it to the attention of the practice by emailing us at <a href="mailto:clearskiespractice@gmail.com">clearskiespractice@gmail.com</a>.</p>
          <p>If necessary any client is welcome to contact the professional body which regulates us, in the first instance to – The HGI Board Secretary, Human Givens Institute, Chalvington, East Sussex, BN27 3TD, UK</p>
        </div>
      </section>
    </div>
  </template>
  
  <script>
  export default {
    name: 'BusinessPage',
    data() {
      return {
        showSection1: false,
        showSection2: false,
        showSection3: false,
        showSection4: false,
        showSection5: false,
        showSection6: false,
        showSection7: false,
        showSection8: false,
        showSection9: false,
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
        observer.observe(this.$refs.section5);
        observer.observe(this.$refs.section6);
        observer.observe(this.$refs.section7);
        observer.observe(this.$refs.section8);
        observer.observe(this.$refs.section9);
      });
    }
  }
  </script>

<style scoped>
.hero {
  position: relative;
  height: 200px;
  background-image: url('@/assets/AnimatedSky.gif');
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
  opacity: 0;
  transition: opacity 0.5s;
  font-size: larger;
}

.info-section p, .info-section li {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  color: #666;
  font-size: large;
}

[data-section="2"] p, [data-section="4"] p, [data-section="6"] p, [data-section="8"] p {
  color: white;
}

.info-section h2 {
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  color: #333;
}

[data-section="2"] h2, [data-section="4"] h2, [data-section="6"] h2, [data-section="8"] h2 {
  color: white;
}

[data-section="2"], [data-section="4"], [data-section="6"], [data-section="8"] {
  background: #5DAED5;
}

.info-card {
  background: #f9f9f9;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
  border: none; /* Remove the card border */
}

[data-section="2"] .info-card, 
[data-section="4"] .info-card, 
[data-section="6"] .info-card,
[data-section="8"] .info-card {
  background: none; /* Remove the default card background */
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
  .hero, .info-section {
    width: 100%;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  .info-card {
    width: 100%;
    box-sizing: border-box;
  }
}



</style>