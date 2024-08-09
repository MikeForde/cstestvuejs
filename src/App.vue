<template>
  <div id="app" @click="handleClickOutsideMenu">
    <nav class="navbar">
      <div class="brand-and-links">
        <div class="hamburger" @click.stop="toggleMenu">
          <i class="fas fa-bars"></i>
        </div>
        <router-link to="/" class="brand-link" @click="closeMenu">
          <img src="@/assets/CSP_Logo_White_trans.png" alt="Logo" class="logo">
          <span class="brand-name">Clear Skies Practice</span>
        </router-link>
        <ul class="nav-links" :class="{ 'nav-active': menuActive }" ref="menu">
          <li><router-link to="/therapy" @click="closeMenu">Therapy</router-link></li>
          <li><router-link to="/about-me" @click="closeMenu">About Me</router-link></li>
          <li><router-link to="/contact" @click="closeMenu">Contact</router-link></li>
          <li class="dropdown">
            <span @click="toggleDropdown">Info <i class="fas fa-caret-down"></i></span>
            <ul class="dropdown-content" :class="{ 'show-dropdown': dropdownActive }">
              <li><router-link to="/documents" @click="closeMenu">Documents</router-link></li>
              <li><router-link to="/privacy" @click="closeMenu">Privacy Policy</router-link></li>
              <li><router-link to="/business" @click="closeMenu">Fees and Business Terms</router-link></li>
            </ul>
          </li>
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
      menuActive: false,
      dropdownActive: false
    };
  },
  methods: {
    toggleMenu() {
      this.menuActive = !this.menuActive;
      if (!this.menuActive) {
        this.dropdownActive = false;
      }
    },
    toggleDropdown() {
      this.dropdownActive = !this.dropdownActive;
    },
    closeMenu() {
      this.menuActive = false;
      this.dropdownActive = false;
    },
    handleClickOutsideMenu(event) {
      const menu = this.$refs.menu;
      if (this.menuActive && !menu.contains(event.target)) {
        this.closeMenu();
      }
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
  background-color: #5DAED5;
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
  position: relative;
}

.nav-links li a, .nav-links li span {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  cursor: pointer;
}

.nav-links li a:hover, .nav-links li span:hover {
  background-color: #359ACB;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #359ACB;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  z-index: 1;
  min-width: 160px;
  list-style-type: none; /* Remove bullet points */
  padding: 0; /* Remove padding */
}

.dropdown-content li {
  margin: 0;
}

.dropdown-content li a {
  padding: 12px 16px;
}

.show-dropdown {
  display: block;
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
    background-color: #359ACB;
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

  .dropdown-content {
    position: static;
    box-shadow: none;
  }
}
</style>
