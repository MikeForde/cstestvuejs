<template>
  <div>
    <section class="documents-hero">
      <div class="hero-content">
        <h1>Clear Skies Documents</h1>
      </div>
    </section>
    <section class="documents-list" ref="documentsList" :class="{ 'fade-in': showDocumentsList }">
      <h2>Please Download the Documents Below or Preview Them</h2>
      <ul>
        <li>
          Information for Clients
          <a href="#" @click.prevent="previewDocument('/Fees and Terms of Business.pdf')">
            Preview
          </a> 
          <a href="/Fees and Terms of Business.pdf" download="Information for Clients">
            Download
          </a>
        </li>
        <li>
          Privacy Notice
          <a href="#" @click.prevent="previewDocument('/Privacy Notice.pdf')">
            Preview
          </a>
          <a href="/Privacy Notice.pdf" download="Privacy Notice">
            Download
          </a>
        </li>
        <li>
          Client Contract
          <a href="#" @click.prevent="previewDocument('/Client Contract_pdf.pdf')">
            Preview (PDF)
          </a>
          <a href="/Client Contract.docx" download="Client Contract">
            Download (Word)
          </a>
        </li>
        <li>
          Registration Form
          <a href="#" @click.prevent="previewDocument('/Registration Form_pdf.pdf')">
            Preview (PDF)
          </a>
          <a href="/Registration Form.docx" download="Registration Form">
            Download (Word)
          </a>
        </li>
      </ul>
      <div v-if="previewUrl" class="document-previewer">
        <h3>Document Preview</h3>
        <iframe :src="previewUrl" frameborder="0"></iframe>
      </div>
    </section>
  </div>
</template>


<script>
export default {
  name: 'DocumentsPage',
  data() {
    return {
      showDocumentsList: false,
      previewUrl: ''
    };
  },
  methods: {
    previewDocument(url) {
      const extension = url.split('.').pop();
      if (extension === 'pdf') {
        this.previewUrl = url;
      } else if (extension === 'docx') {
        this.previewUrl = `https://view.officeapps.live.com/op/embed.aspx?src=${window.location.origin}${url}`;
      } else {
        this.previewUrl = '';
        alert('This document cannot be previewed.');
      }
    }
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
      // Automatically select the "Client Contract" document in the previewer
      this.previewDocument('/Client Contract_pdf.pdf');
    });
  }
};
</script>


<style scoped>
.documents-hero {
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

.document-previewer {
  margin-top: 20px;
}

.document-previewer iframe {
  width: 100%;
  height: 600px;
  border: 1px solid #ccc;
}

.fade-in {
  opacity: 1;
}

/* Mobile layout adjustments */
@media screen and (max-width: 768px) {
  .documents-list ul li {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  
  .documents-list ul li > span {
    margin-bottom: 5px;
  }
  
  .documents-list ul li .links {
    display: flex;
    gap: 10px; /* Adds space between the Preview and Download links */
  }
}
</style>

