<template>
  <div>
    <section class="documents-hero">
      <div class="hero-content">
        <h1>Clear Skies Documents</h1>
      </div>
    </section>
    <section class="documents-list" ref="documentsList" :class="{ 'fade-in': showDocumentsList }">
      <h2>Please Download the Documents Below</h2>
      <ul>
        <li>
          <a href="/Fees and Terms of Business.pdf" download="Information for Clients">
            Information for Clients
          </a>
        </li>
        <li>
          <a href="/Privacy Notice.pdf" download="Privacy Notice">
            Privacy Notice
          </a>
        </li>
        <li>
          <a href="/Client Contract.docx" download="Client Contract">
            Client Contract
          </a>
        </li>
        <li>
          <a href="/Registration Form.docx" download="Registration Form">
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
  position: relative;
  height: 200px;
  background-image: url('@/assets/Sky.jpeg');
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

.documents-list {
  padding: 20px;
  text-align: left;
  max-width: 800px;
  margin: auto;
  opacity: 0;
  transition: opacity 0.5s ease-in;
  font-family: Verdana, sans-serif;
}

.documents-list h2 {
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  font-size: x-large;
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

.fade-in {
  opacity: 1;
}
</style>
