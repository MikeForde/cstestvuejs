<template>
  <footer class="site-footer">
    <div class="footer-content">
      <div class="footer-left">
        <p>&copy; 2024-{{ currentYear }} Clear Skies Practice. All rights reserved.</p>
      </div>
      <div class="footer-center">
        <img src="@/assets/CSP_Logo_White_trans.png" alt="Clear Skies Practice Logo" class="footer-logo" />
      </div>
      <div class="footer-center">
        <a href="https://www.hgi.org.uk/find-therapist/therapist/galina-filipkova" target="_blank" rel="noopener">
          <img src="@/assets/HG_logo_footer.png" alt="Human Givens Logo" class="footer-logo" />
        </a>
      </div>
      <div>
      <div class="footer-center">
        <a href="https://www.psychologytoday.com/gb/counselling/galina-filipkova-tewkesbury/1556498" target="_blank"
          rel="noopener">
          <img src="@/assets/Psychology_Today.png" alt="Psychology Today Logo" class="footer-logo2" />
        </a>
      </div>
      <div class="footer-center">
        <a href="https://www.counselling-directory.org.uk/counsellors/galina-filipkova" target="_blank"
          rel="noopener">
          <img src="@/assets/Counselling_Directory.png" alt="Counselling Directory Logo" class="footer-logo2" />
        </a>
      </div>
      <div class="footer-center">
        <a href="https://ptsdresolution.org" target="_blank"
          rel="noopener">
          <img src="@/assets/PTSD_Resolution_Logo.png" alt="Counselling Directory Logo" class="footer-logo2" />
        </a>
      </div>
      </div>
      <div class="footer-right">
        <router-link to="/privacy">Privacy Policy</router-link> |
        <router-link to="/business">Business Terms</router-link> |
        <router-link to="/contact">Contact</router-link>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterPage',
  computed: {
    currentYear() {
      return new Date().getFullYear();
    }
  }
};
</script>

<style scoped>
.site-footer {
  background-color: #5DAED5;
  color: white;
  padding: 20px 0;
  text-align: center;
  position: relative;
  bottom: 0;
  width: 100%;
  box-sizing: border-box;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  max-width: 1200px;
  margin: auto;
  flex-wrap: wrap;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.footer-left,
.footer-right,
.footer-center {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.footer-left p {
  margin: 0;
}

.footer-right {
  display: flex;
  gap: 10px;
}

.footer-right a {
  color: white;
  text-decoration: none;
}

.footer-right a:hover {
  text-decoration: underline;
}

.footer-center {
  flex: 0 1 auto;
  padding-left: 20px;
}

.footer-logo {
  max-height: 75px;
}

.footer-logo2 {
  max-height: 40px;
  max-width: 160px;
  padding-right: 20px;
}

.footer-logo, .footer-logo2 {
  user-select: none;
  -webkit-user-select: none;  /* Safari */
  -moz-user-select: none;     /* Firefox */
  -ms-user-select: none;      /* IE10+ */
}

@media screen and (max-width: 768px) {
  .footer-content {
    flex-direction: column;
    text-align: center;
  }

  .footer-right {
    margin-top: 10px;
  }

  .footer-logo, .footer-logo2 {
    max-height: 75px;
    max-width: 300px;
    padding-right: 5px;
  }

  .footer-left,
  .footer-right,
  .footer-center {
    justify-content: center;
    margin: 10px 0;
  }
}
</style>
