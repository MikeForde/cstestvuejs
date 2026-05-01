<template>
  <div>
    <section class="hero">
      <div class="hero-content">
        <h1>Fees and Terms of Business</h1>
      </div>
    </section>

    <section class="info-section" ref="section1" :data-section="1" :class="{ 'fade-in': showSection1 }">
      <div class="info-card">
        <h2>Your therapist: Galina Filipkova</h2>
        <p>WhatsApp: <a href="sms:07760 531057">07760 531057</a></p>
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
        <p>Monday, Tuesday, Thursday - evenings</p>
        <p>Wednesday (online only) - all day</p>
        <p>Friday - all day </p>
      </div>
    </section>

    <section class="info-section" ref="section4" :data-section="4" :class="{ 'fade-in': showSection4 }">
      <div class="info-card">
        <h2>Outcome measures</h2>
        <p>We use various measures to gauge your progress and response to treatment. If you are happy to do so, you may
          be asked to complete a brief anonymised questionnaire to help the therapist understand your needs, how best to
          help you and to evaluate outcomes.</p>
      </div>
    </section>

    <section id="cost-of-therapy" class="info-section" ref="section5" :data-section="5"
      :class="{ 'fade-in': showSection5 }">
      <div class="info-card">

        <h2>Cost of Therapy</h2>
        <p>Sessions are available online (16+) and face-to-face.</p>

        <h3>Standard Session Fees</h3>
        <ul>
          <li><strong>Base fee for individual therapy and coaching</strong> – £90 (60 minutes)</li>
          <li><strong>Couples therapy</strong> – £120 (60 minutes)</li>
        </ul>

        <div class="pricing-tabs" role="tablist" aria-label="Pricing type">
          <button
            class="pricing-tab"
            :class="{ 'pricing-tab--active': activePricingTab === 'individual' }"
            type="button"
            role="tab"
            :aria-selected="activePricingTab === 'individual'"
            @click="activePricingTab = 'individual'"
          >
            Individual & Coaching - £90
          </button>
          <button
            class="pricing-tab"
            :class="{ 'pricing-tab--active': activePricingTab === 'couples' }"
            type="button"
            role="tab"
            :aria-selected="activePricingTab === 'couples'"
            @click="activePricingTab = 'couples'"
          >
            Couples - £120
          </button>
        </div>

        <div v-if="activePricingTab === 'individual'" class="pricing-grid" aria-label="Individual session price grid">
          <div class="pricing-grid__cell pricing-grid__corner" aria-hidden="true"></div>
          <div class="pricing-grid__cell pricing-grid__header pricing-grid__header--day">
            <span class="pricing-grid__label">Day</span>
            <span class="pricing-grid__subtext">ends before 5pm</span>
          </div>
          <div class="pricing-grid__cell pricing-grid__header pricing-grid__header--evening">
            <span class="pricing-grid__label">Evening</span>
            <span class="pricing-grid__subtext">from 5pm</span>
          </div>

          <div class="pricing-grid__cell pricing-grid__row-header">Face-to-face</div>
          <div class="pricing-grid__cell pricing-grid__price pricing-grid__price--day">
            <span class="pricing-grid__amount">£80</span>
            <span class="pricing-grid__subtext">£90 - £10 daytime</span>
          </div>
          <div class="pricing-grid__cell pricing-grid__price pricing-grid__price--evening">
            <span class="pricing-grid__amount">£90</span>
            <span class="pricing-grid__subtext">base fee</span>
          </div>

          <div class="pricing-grid__cell pricing-grid__row-header">Online - aged 16+ only</div>
          <div class="pricing-grid__cell pricing-grid__price pricing-grid__price--day">
            <span class="pricing-grid__amount">£65</span>
            <span class="pricing-grid__subtext">£90 - £15 online - £10 daytime</span>
          </div>
          <div class="pricing-grid__cell pricing-grid__price pricing-grid__price--evening">
            <span class="pricing-grid__amount">£75</span>
            <span class="pricing-grid__subtext">£90 - £15 online</span>
          </div>
        </div>

        <div v-else class="pricing-grid" aria-label="Couples session price grid">
          <div class="pricing-grid__cell pricing-grid__corner" aria-hidden="true"></div>
          <div class="pricing-grid__cell pricing-grid__header pricing-grid__header--day">
            <span class="pricing-grid__label">Day</span>
            <span class="pricing-grid__subtext">ends before 5pm</span>
          </div>
          <div class="pricing-grid__cell pricing-grid__header pricing-grid__header--evening">
            <span class="pricing-grid__label">Evening</span>
            <span class="pricing-grid__subtext">from 5pm</span>
          </div>

          <div class="pricing-grid__cell pricing-grid__row-header">Face-to-face</div>
          <div class="pricing-grid__cell pricing-grid__price pricing-grid__price--day">
            <span class="pricing-grid__amount">£110</span>
            <span class="pricing-grid__subtext">£120 - £10 daytime</span>
          </div>
          <div class="pricing-grid__cell pricing-grid__price pricing-grid__price--evening">
            <span class="pricing-grid__amount">£120</span>
            <span class="pricing-grid__subtext">base fee</span>
          </div>

          <div class="pricing-grid__cell pricing-grid__row-header">Online</div>
          <div class="pricing-grid__cell pricing-grid__price pricing-grid__price--day">
            <span class="pricing-grid__amount">£95</span>
            <span class="pricing-grid__subtext">£120 - £15 online - £10 daytime</span>
          </div>
          <div class="pricing-grid__cell pricing-grid__price pricing-grid__price--evening">
            <span class="pricing-grid__amount">£105</span>
            <span class="pricing-grid__subtext">£120 - £15 online</span>
          </div>
        </div>

        <h3>Additional Discounts</h3>
        <p>These discounts can also be combined with the prices above where eligible.</p>
        <ul>
          <li><strong>NHS, social workers, teachers and blue-light services</strong> – £10 further reduction</li>
          <li><strong>Under 16s and and students</strong> – £5 further reduction</li>
        </ul>
        <p>Online sessions are available to ages 16+ only. Proof of status is required where relevant.</p>

        <h3>Additional Information</h3>
        <ul>
          <li>Any pre-agreed longer or shorter sessions are charged on a pro-rata basis.</li>
          <li>Additional work (e.g. reports or letters) is charged at the standard hourly rate.</li>
        </ul>

        <h3>Military Veterans and Family Members</h3>
        <p>
          FREE support is available through the charity <strong>PTSD Resolution</strong>.
        </p>

      </div>
    </section>

    <section class="info-section" ref="section6" :data-section="6" :class="{ 'fade-in': showSection6 }">
      <div class="info-card">
        <h2>Healthcare Insurance</h2>
        <p>Some clients have coverage from a healthcare insurer. We are unable to communicate directly with insurers,
          and we do not have an electronic claims system in place. It is the client’s responsibility to ascertain
          whether their insurance provider covers psychological talking therapies, to pay their fees at the time
          of consultation, and to then claim from their insurer, where possible. We will do our utmost to facilitate
          that claim.</p>
      </div>
    </section>

    <section class="info-section" ref="section7" :data-section="7" :class="{ 'fade-in': showSection7 }">
      <div class="info-card">
        <h2>Personalised Guided Imagery</h2>
        <p>At your request, your therapist can record a personalised guided imagery for you. Each recording will be
          charged at £70.
          This guided imagery is for your sole use and must not be shared with third parties. It must not be listened to
          when driving, operating heavy machinery or in any other situations where distraction may put your safety or
          that of others at risk.</p>
      </div>
    </section>

    <section class="info-section" ref="section8" :data-section="8" :class="{ 'fade-in': showSection8 }">
      <div class="info-card">
        <h2>Protection of Client and Therapist</h2>
        <p>It is recognised that some clients may be particularly vulnerable, especially young people. We reserve the
          right to record consultations, if deemed appropriate, for the protection of both client and therapist. We will
          discuss this with you first.</p>
      </div>
    </section>

    <section class="info-section" ref="section9" :data-section="9" :class="{ 'fade-in': showSection9 }">
      <div class="info-card">
        <h2>Location and Room Bookings</h2>
        <p>We provide <b>online</b> (16+) and <b>face-to-face</b> therapy sessions.</p>
        <p>The Clear Skies Practice is based in Tewkesbury and Cheltenham. It is easily accessible from the surrounding
          areas of
          Gloucestershire and Worcestershire.</p>
        <p>Location 1: <a href="https://reflectionrooms.co.uk" target="_blank">Reflection Rooms,
            Tewkesbury</a>.
          Address: Reflection Rooms, 13-14 Barton St, Tewkesbury, GL20 5PP</p>
        <p>The above is well situated and easy walking distance from Tewkesbury High Street.</p>
        <p>Location 2: <a href="https://www.theregencypractice.com" target="_blank">The
            Regency Practice,
            Cheltenham</a>.
          Address: The Regency Practice, 22A Rodney Road, Cheltenham, GL50 1JJ</p>
        <p>Please note, we cannot guarantee that you will always be seen in the same room.</p>
      </div>
    </section>

    <section class="info-section" ref="section10" :data-section="10" :class="{ 'fade-in': showSection10 }">
      <div class="info-card">
        <h2>Payment Method</h2>
        <p>If it is convenient for the client, payment online may be made in advance or on the day of consultation
          otherwise we accept cash. An invoice will be sent via email in advance. If payment is not made by the deadline
          stated on the invoice, an administration fee of £15 will be charged.</p>
      </div>
    </section>

    <section class="info-section" ref="section11" :data-section="11" :class="{ 'fade-in': showSection11 }">
      <div class="info-card">
        <h2>Cancellation Policy</h2>
        <p>Since scheduling of an appointment involves the reservation of time for your individual session, a minimum of
          48 hours is required for rescheduling or cancelling client appointments. Unless we reach a different
          agreement, <b>the full fee will be charged for session missed without such notification.</b></p>
        <p>In the event of a serious accident, emergency, or other similar situation outside the client’s control,
          please deal with the situation first and notify us at the earliest convenient time, or we will follow up with
          you typically within 24 to 48 hours of the missed appointment.</p>
        <h2>No Show Policy</h2>
        <p>Where an appointment is arranged and agreed, and a client does not attend that appointment, <b>the full fee
            will be charged for the session missed.</b></p>
      </div>
    </section>

    <section class="info-section" ref="section12" :data-section="12" :class="{ 'fade-in': showSection12 }">
      <div class="info-card">
        <h2>Your Personal Information</h2>
        <p>Your Personal Information will be kept in accordance with the Data Protection Act (2018) and the General Data
          Protection Regulation (GDPR).</p>
        <p>Please see our <router-link to="/privacy">Privacy Policy</router-link> for full details of the information we
          process.</p>
      </div>
    </section>

    <section class="info-section" ref="section13" :data-section="13" :class="{ 'fade-in': showSection13 }">
      <div class="info-card">
        <h2>Governance</h2>
        <p>The work of this practice is governed by The Codes of Ethics & Professional Practice of the Human Givens
          Institute. The Institute can be contacted as follows:</p>
        <p>The HGI Membership Secretary, Human Givens Institute, Chalvington, East Sussex, BN27 3TD, UK</p>
        <p>Telephone: <a href="sms:01323 811662">01323 811662</a></p>
        <p>E-mail: <a href="mailto:hgi@humangivens.com">hgi@humangivens.com</a></p>
        <p>The Human Givens Institute’s Code of Ethics and Conduct can be viewed at: <a
            href="https://www.hgi.org.uk/about-hgi/ethics-and-conduct"
            target="_blank">https://www.hgi.org.uk/about-hgi/ethics-and-conduct</a>. If you would like a paper copy of
          the Policy, please contact the Human Givens Institute.</p>
        <p>If any client has comments or concerns, or even a complaint, we ask them to bring it to the attention of the
          practice by emailing us at <a href="mailto:clearskiespractice@gmail.com">clearskiespractice@gmail.com</a>.</p>
        <p>If necessary any client is welcome to contact the professional body which regulates us, in the first instance
          to – The HGI Board Secretary, Human Givens Institute, Chalvington, East Sussex, BN27 3TD, UK</p>
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
      activePricingTab: 'individual',
      showSection6: false,
      showSection7: false,
      showSection8: false,
      showSection9: false,
      showSection10: false,
      showSection11: false,
      showSection12: false,
      showSection13: false,
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
      observer.observe(this.$refs.section10);
      observer.observe(this.$refs.section11);
      observer.observe(this.$refs.section12);
      observer.observe(this.$refs.section13);
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

.info-section p,
.info-section li {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  color: #666;
  font-size: large;
}

[data-section="2"] p,
[data-section="4"] p,
[data-section="6"] p,
[data-section="8"] p,
[data-section="10"] p,
[data-section="12"] p {
  color: white;
}

.info-section h2 {
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  color: #333;
}

[data-section="2"] h2,
[data-section="4"] h2,
[data-section="6"] h2,
[data-section="8"] h2,
[data-section="10"] h2,
[data-section="12"] h2 {
  color: white;
}

[data-section="2"] h3,
[data-section="4"] h3,
[data-section="6"] h3,
[data-section="8"] h3,
[data-section="10"] h3,
[data-section="12"] h3 {
  color: white;
}

[data-section="2"],
[data-section="4"],
[data-section="6"],
[data-section="8"],
[data-section="10"],
[data-section="12"] {
  background: #5DAED5;
}

.info-card {
  background: #f9f9f9;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
  border: none;
  /* Remove the card border */
}

[data-section="2"] .info-card,
[data-section="4"] .info-card,
[data-section="6"] .info-card,
[data-section="8"] .info-card,
[data-section="10"] .info-card,
[data-section="12"] .info-card {
  background: none;
  /* Remove the default card background */
}

.fade-in {
  opacity: 1;
}

h2,
p,
ul {
  text-align: left;
}

ul {
  list-style-type: disc;
  padding-left: 20px;
}

.tooltip-container {
  position: relative;
  color: #0066cc;
  text-decoration: underline;
  cursor: pointer;
  outline: none;
}

/* hide the tooltip by default */
.tooltip-text {
  visibility: hidden;
  opacity: 0;
  pointer-events: none;
  position: absolute;
  bottom: 125%;
  /* position above the text */
  left: 50%;
  transform: translateX(-50%);
  width: 420px;
  padding: 10px;
  border-radius: 4px;
  background: rgba(0, 0, 0, 0.85);
  color: #fff;
  text-align: left;
  font-size: 0.8em;
  line-height: 1.4;
  transition: opacity 0.2s ease;
  z-index: 100;
}

/* on hover or focus, show it */
.tooltip-container:hover .tooltip-text,
.tooltip-container:focus .tooltip-text {
  visibility: visible;
  opacity: 1;
  background-color: #5DAED5;
  font-weight: 100;
}

.pricing-tabs {
  display: inline-flex;
  flex-wrap: wrap;
  gap: 10px;
  margin: 8px 0 14px;
  padding: 6px;
  border-radius: 999px;
  background: #eef6fb;
}

.pricing-tab {
  border: none;
  border-radius: 999px;
  padding: 10px 18px;
  background: transparent;
  color: #2f5165;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 0.95rem;
  font-weight: 700;
  cursor: pointer;
  transition: background-color 0.2s ease, color 0.2s ease;
}

.pricing-tab--active {
  background: #5DAED5;
  color: white;
}

.pricing-intro {
  margin: 0 0 16px;
}

.pricing-grid {
  display: grid;
  grid-template-columns: minmax(130px, 1.1fr) repeat(2, minmax(150px, 1fr));
  gap: 12px;
  margin: 20px 0;
}

.pricing-grid__cell {
  border-radius: 16px;
  padding: 16px;
}

.pricing-grid__corner {
  background: transparent;
}

.pricing-grid__header,
.pricing-grid__price,
.pricing-grid__row-header {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.pricing-grid__header {
  min-height: 88px;
}

.pricing-grid__header--day,
.pricing-grid__price--day {
  background: linear-gradient(180deg, #dff3ff 0%, #c2e7fb 100%);
  color: #174a62;
}

.pricing-grid__header--evening,
.pricing-grid__price--evening {
  background: linear-gradient(180deg, #355c7d 0%, #23364f 100%);
  color: #f5f8ff;
}

.pricing-grid__row-header {
  background: #eef6fb;
  color: #2f5165;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  font-size: 1.5rem;
  font-weight: 700;
}

.pricing-grid__label,
.pricing-grid__amount {
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  font-size: 1.5rem;
  font-weight: 700;
}

.pricing-grid__subtext {
  margin-top: 6px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 0.95rem;
  line-height: 1.4;
}

@media screen and (max-width: 768px) {

  .hero,
  .info-section {
    width: 100%;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  .info-card {
    width: 100%;
    box-sizing: border-box;
  }

  .tooltip-text {
    /* make tooltip span nearly full width and center it on the viewport */
    position: fixed;
    bottom: 20%;
    /* adjust as needed for vertical placement */
    left: 50%;
    transform: translateX(-50%);
    width: 90vw;
    max-width: 320px;
    /* optional cap */
    text-align: center;
    /* center the text inside */
    pointer-events: auto;
    /* ensure it remains interactive */
  }

  .pricing-grid {
    grid-template-columns: 1fr;
  }

  .pricing-grid__corner {
    display: none;
  }

  .pricing-tabs {
    display: flex;
    width: 100%;
    border-radius: 18px;
  }

  .pricing-tab {
    flex: 1;
    text-align: center;
  }
}
</style>
