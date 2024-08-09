<!-- src/components/Footer.vue -->
<template>
    <footer class="site-footer">
      <div class="footer-content">
        <div class="footer-left">
          <p>&copy; 2024 Clear Skies Practice. All rights reserved.</p>
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
  
  @media screen and (max-width: 768px) {
    .footer-content {
      flex-direction: column;
      text-align: center;
    }
    
    .footer-right {
      margin-top: 10px;
    }
  }
  </style>
  