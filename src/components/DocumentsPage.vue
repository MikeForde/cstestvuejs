<template>
  <div>
    <section class="documents-hero">
      <div class="hero-content">
        <h1>Download Documents</h1>
      </div>
    </section>
    <section class="documents-list" ref="documentsList" :class="{ 'fade-in': showDocumentsList }">
      <h2>Available Documents</h2>
      <ul>
        <li>
          <a href="/information_for_clients.pdf" download="Information for Clients">
            Information for Clients
          </a>
        </li>
        <li>
          <a href="/privacy_notice.pdf" download="Privacy Notice">
            Privacy Notice
          </a>
        </li>
        <li>
          <a href="/client_contract.pdf" download="Client Contract">
            Client Contract
          </a>
        </li>
        <li>
          <a href="/registration_form.pdf" download="Registration Form">
            Registration Form
          </a>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  name: 'DocumentsPage',
  data() {
    return {
      showDocumentsList: false,
    };
  },
  mounted() {
    const options = {
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (entry.target.classList.contains('documents-list')) {
            this.showDocumentsList = true;
          }
          observer.unobserve(entry.target);
        }
      });
    }, options);

    this.$nextTick(() => {
      observer.observe(this.$refs.documentsList);
    });
  }
};
</script>

<style scoped>
.documents-hero {
  background-color: #6699CC;
  color: white;
  text-align: center;
  padding: 50px 20px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.hero-content {
  max-width: 800px;
  margin: auto;
}

.documents-list {
  padding: 20px;
  text-align: left;
  max-width: 800px;
  margin: auto;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  opacity: 0;
  transition: opacity 1s ease-in;
}

.fade-in {
  opacity: 1;
}

.documents-list h2 {
  color: #333;
  margin-bottom: 15px;
}

.documents-list ul {
  list-style-type: none;
  padding: 0;
}

.documents-list ul li {
  margin: 10px 0;
}

.documents-list ul li a {
  color: #00509E;
  text-decoration: none;
  font-weight: bold;
}

.documents-list ul li a:hover {
  text-decoration: underline;
}
</style>
