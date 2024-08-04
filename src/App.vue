<template>
  <div id="app">
    <nav class="navbar">
      <ul class="nav-links">
        <router-link to="/" class="brand-link">
        <img src="@/assets/CSP_Logo_White_trans.png" alt="Logo" class="logo">
        <span class="brand-name">Clear Skies Practice</span>
      </router-link>
        <li><router-link to="/human-givens">Human Givens</router-link></li>
        <li><router-link to="/contact">Contact</router-link></li>
      </ul>
    </nav>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
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
</style>
