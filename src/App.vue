<template>
  <div id="app">
    <nav class="navbar">
      <div class="brand-and-links">
        <div class="hamburger" @click="toggleMenu">
          <i class="fas fa-bars"></i>
        </div>
        <router-link to="/" class="brand-link">
          <img src="@/assets/CSP_Logo_White_trans.png" alt="Logo" class="logo">
          <span class="brand-name">Clear Skies Practice</span>
        </router-link>
        <ul class="nav-links" :class="{ 'nav-active': menuActive }">
          <li><router-link to="/therapy" @click="closeMenu">Therapy</router-link></li>
          <li><router-link to="/about-me" @click="closeMenu">About Me</router-link></li>
          <li><router-link to="/documents" @click="closeMenu">Documents</router-link></li>
          <li><router-link to="/privacy" @click="closeMenu">Privacy Policy</router-link></li>
          <li><router-link to="/business" @click="closeMenu">Business Terms</router-link></li>
          <li><router-link to="/contact" @click="closeMenu">Contact</router-link></li>
        </ul>
      </div>
    </nav>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      menuActive: false
    };
  },
  methods: {
    toggleMenu() {
      this.menuActive = !this.menuActive;
    },
    closeMenu() {
      this.menuActive = false;
    }
  }
}
</script>

<style scoped>
@import '~@fortawesome/fontawesome-free/css/all.css';

.navbar {
  position: fixed;
  top: 0;
  width: 100%;
  background-color: #333;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.brand-and-links {
  display: flex;
  align-items: center;
}

.brand-link {
  display: flex;
  align-items: center;
  text-decoration: none;
}

.logo {
  height: 40px; /* Adjust as needed */
}

.brand-name {
  color: white;
  font-size: 20px;
  margin-left: 10px;
}

.hamburger {
  display: none;
  font-size: 30px;
  color: white;
  cursor: pointer;
  margin-right: 10px;
}

.nav-links {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
}

.nav-links li {
  margin: 0 15px;
}

.nav-links li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

.nav-links li a:hover {
  background-color: #111;
}

.content {
  margin-top: 70px; /* Adjust this value if your navbar height changes */
}

/* Responsive Design */
@media screen and (max-width: 768px) {
  .nav-links {
    display: none;
    flex-direction: column;
    width: 100%;
    position: absolute;
    top: 60px;
    left: 0;
    background-color: #333;
  }

  .nav-links.nav-active {
    display: flex;
  }

  .nav-links li {
    margin: 10px 0;
  }

  .hamburger {
    display: block;
  }
}
</style>
