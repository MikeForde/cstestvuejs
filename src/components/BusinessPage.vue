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
        <p>Afternoons, evenings, and Saturdays. More appointment options are available during the school holidays.
        </p>
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
        <p>Sessions are available online (16+) and face-to-face. Rewinds are currently only offered face-to-face.</p>
        <ul>
          <li>Therapy for individuals - £80 (for 60 minutes), on Saturdays - £85 (for 60 minutes)</li>
          <li>Therapy for couples - £115 (for 60 minutes), on Saturdays - £120 (for 60 minutes)</li>
          <li>Therapy for 12-18 year olds - £70 (for 50 minutes), on Saturdays - £75 (for 50 minutes)</li>
          <li>Personalised guided imagery recording on demand - £70 per recording (for 10-30 minutes)</li>
        </ul>
        <p>
          <b>
            Phobia or
            <span class="tooltip-container" tabindex="0">
              single-incident trauma
              <span class="tooltip-text">
                Single-event trauma is triggered by one unexpected incident—such as physical or sexual assault, a
                natural
                disaster,
                a serious accident, or a sudden illness or injury. Recognizing its warning signs and symptoms is
                essential
                for getting
                the right support and care. After such an event, people often suffer intrusive memories that interfere
                with
                everyday
                life, leading to emotional upheaval and shifts in mood. They might find themselves plagued by recurrent
                flashbacks,
                overwhelming fear, anger, or sadness, and unable to enjoy activities they once loved. Understanding
                these
                mental
                health effects is key to making sense of what’s happening in the aftermath of a single-incident trauma.
              </span>
            </span>
            treatment - trauma relating to a single traumatic event - is offered at the discounted price of £60 per hr
            between
            June-August 2025. Completing a further number of these face-to-face is a post-qualification training
            requirement
            and will enable me to offer them online in the future.
          </b>
        </p>
        <p>Any pre-agreed longer or shorter sessions are charged on a pro-rata basis.</p>
        <p>A limited number of concessions may be available for university students or unemployed individuals. Proof of
          status is required.</p>
        <p><i>Please note these prices are for private paying individuals only, rates will vary when paying via EAP or
            insurance companies due to the increased financial & administrative requirements; rates are agreed with each
            company. Please call us if you wish to discuss further. </i></p>
        <h3>Please Note:</h3>
        <ul>
          <li>The session fee is subject to revision from time to time. Advance notice will be given of any increase.
          </li>
          <li>Human Givens therapists and therapist trainees aim to meet the needs of their clients in as few sessions
            as possible and do not charge in advance for a course of treatment.</li>
          <li>Any extra work undertaken on the client’s behalf, such as writing reports or letters for other agencies
            will be charged at the standard hourly rate.</li>
        </ul>
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
        <p>At your request, I can record a personalised guided imagery for you. Each recording will be charged at £70.
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
        <p>We provide <b>online</b> (16+) and <b>face-to-face</b> therapy sessions. Rewinds (for fast trauma
          and
          phobia treatment) are currently only
          offered
          face-to-face.</p>
        <p>The Clear Skies Practice is based in Tewkesbury and is easily accessible from the surrounding areas of
          Gloucestershire and Worcestershire.</p>
        <p>Location 1: <a href="https://reflectionrooms.co.uk" target="_blank">Reflection Rooms,
            Tewkesbury</a>.
          Address: Reflection Rooms, 13-14 Barton St, Tewkesbury, GL20 5PP</p>
        <p>Location 2 (Until 31 Aug 2025): <a href="https://www.thedevereuxcentre.co.uk/other-tenants/"
            target="_blank">The
            Devereux Centre,
            Tewkesbury</a>.
          Address: The Devereux Centre, Barton Road, Tewkesbury, GL20 5GJ</p>
        <p>Both are well situated and easy walking distance from the High Street.</p>
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
}
</style>