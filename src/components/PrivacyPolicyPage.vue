<template>
    <div>
      <section class="hero">
        <div class="hero-content">
          <h1>Privacy Policy</h1>
        </div>
      </section>
      
      <section class="info-section" ref="section1" :data-section="1" :class="{ 'fade-in': showSection1 }">
        <div class="info-card">
          <h2>Privacy Policy</h2>
          <p>This website does not collect any data.</p>
          <p>If you would like to start therapy with us, you will be provided with a privacy notice that reads as follows:</p>
        </div>
      </section>
  
      <section class="info-section" ref="section2" :data-section="2" :class="{ 'fade-in': showSection2 }">
        <div class="info-card">
          <h2>Our contact details:</h2>
          <p>Trainee Therapist Name: Galina Filipkova</p>
          <p>E-mail: <a href="mailto:clearskiespractice@gmail.com">clearskiespractice@gmail.com</a></p>
          <p>Phone Number: 07760 531057</p>
        </div>
      </section>
      
      <section class="info-section" ref="section3" :data-section="3" :class="{ 'fade-in': showSection3 }">
        <div class="info-card">
          <h2>The type of personal information we collect:</h2>
          <p>We currently collect and process the following information:</p>
          <ul>
            <li>Personal identifiers, contacts and characteristics (for example, name and contact details)</li>
            <li>Financial details (through bank transfer, cheque or online payment systems)</li>
            <li>Case notes and records</li>
          </ul>
        </div>
      </section>
  
      <section class="info-section" ref="section4" :data-section="4" :class="{ 'fade-in': showSection4 }">
        <div class="info-card">
          <h2>How we get the personal information and why we have it:</h2>
          <p>The personal information we process is provided to us directly by you for one of the following reasons:</p>
          <ul>
            <li>To enter into or carry out a contract of service between us</li>
            <li>To process payments relating to the performance of that contract</li>
          </ul>
          <p>We use the information that you have given us in order to:</p>
          <ul>
            <li>To enter into or carry out a contract of service between us</li>
            <li>To process payments relating to the performance of that contract</li>
          </ul>
          <p>We do not share this information with any other organisation or individual, other than those detailed in the ‘Client Agreement’ which forms the basis for the contract between us. The only exception to this relates to payments made for contracted services where identifiers attached by you / your bank to this payment information can be seen by the bank or other financial institution processing that payment.</p>
          <p>Under the UK General Data Protection Regulation (UK GDPR), the lawful bases we rely on for processing this information are:</p>
          <ul>
            <li>entering into and performing a contract</li>
            <li>legal duty</li>
            <li>legitimate interest</li>
          </ul>
        </div>
      </section>
  
      <section class="info-section" ref="section5" :data-section="5" :class="{ 'fade-in': showSection5 }">
        <div class="info-card">
          <h2>How we store your personal information:</h2>
          <p>Your information is securely stored.</p>
          <p>In accordance with professional and insurance requirements we will retain a record of your personal information (including case records) for a period of 7 years from the point at which the contract between us ends. At the end of that period, any information we have processed will be securely destroyed. At any stage during that period of time, or during the contract, you can request access to the information that we hold in relation to you.</p>
        </div>
      </section>
  
      <section class="info-section" ref="section6" :data-section="6" :class="{ 'fade-in': showSection6 }">
        <div class="info-card">
          <h2>How to complain re. data processing</h2>
          <p>If you have any concerns about our use of your personal information, please contact us in the first instance at <a href="mailto:clearskiespractice@gmail.com">clearskiespractice@gmail.com</a>. If we are unable to resolve your concern, you can raise this by contacting <a href="mailto:complaints@humangivens.com">complaints@humangivens.com</a>.</p>
          <p>You can also complain to the ICO if you are unhappy with how we have used your data. The ICO’s address is:</p>
          <p style="text-align: center;">Information Commissioner’s Office<br>
          Wycliffe House<br>
          Water Lane<br>
          Wilmslow<br>
          Cheshire<br>
          SK9 5AF</p>
          <p>Helpline number: 0303 123 1113</p>
          <p>ICO Website: <a href="https://www.ico.org.uk" target="_blank">https://www.ico.org.uk</a></p>
          <p><strong>Data Controller is Galina Filipkova (ICO Registration: ZB674218)</strong></p>
        </div>
      </section>
    </div>
  </template>
  
  <script>
  export default {
    name: 'PrivacyPolicyPage',
    data() {
      return {
        showSection1: false,
        showSection2: false,
        showSection3: false,
        showSection4: false,
        showSection5: false,
        showSection6: false,
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
  /* padding: 20px; */
  opacity: 0;
  transition: opacity 0.5s;
  font-size: larger;
}

.info-section p, .info-section li {
  font-family: Verdana, sans-serif;
  color: #666;
  font-size: large;
}

[data-section="2"] p, [data-section="4"] p, [data-section="6"] p {
  color: white;
}

.info-section h2 {
  font-family: Cambria, serif;
  color: #333;
}

[data-section="2"] h2, [data-section="4"] h2, [data-section="4"] li, [data-section="6"] h2 {
  color: white;
}

[data-section="2"], [data-section="4"], [data-section="6"] {
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
[data-section="6"] .info-card {
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
  