<!-- src/components/Footer.vue -->
<template>
  <footer class="site-footer">
    <div class="footer-content">
      <div class="footer-left">
        <p>&copy; 2024 Clear Skies Practice. All rights reserved.</p>
      </div>
      <div class="footer-center">
        <img src="@/assets/CSP_Logo_White_trans.png" alt="Clear Skies Practice Logo" class="footer-logo" />
      </div>
      <div class="footer-center">
        <img src="@/assets/HG_logo_footer.png" alt="Human Givens Logo" class="footer-logo" />
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

.footer-left, .footer-right, .footer-center {
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
  max-height: 50px;
}

@media screen and (max-width: 768px) {
  .footer-content {
    flex-direction: column;
    text-align: center;
  }
  
  .footer-right {
    margin-top: 10px;
  }

  .footer-left, .footer-right, .footer-center {
    justify-content: center;
    margin: 10px 0;
  }
}
</style>
