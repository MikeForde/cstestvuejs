<template>
  <div>
    <section class="documents-hero">
      <div class="hero-content">
        <h1>Documents</h1>
      </div>
    </section>
    <section class="documents-list" ref="documentsList" :class="{ 'fade-in': showDocumentsList }">
      <h2>Please Download the Documents Below or Preview Them</h2>
      <ul>
        <li>
          Fees and Terms of Business
          <a href="#" @click.prevent="previewDocument('/Fees and Terms of Business.pdf')">
            Preview
          </a> 
          <a href="/Fees and Terms of Business.pdf" download="Fees and Terms of Business">
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
          Client Contract - 16 and over
          <a href="#" @click.prevent="previewDocument('/C Client Contract over 16s.pdf')">
            Preview (PDF)
          </a>
          <a href="/C Client Contract over 16s.docx" download="Client Contract - 16 and over">
            Download (Word)
          </a>
        </li>
        <li>
          Registration Form - 16 and over
          <a href="#" @click.prevent="previewDocument('/D Registration Form over 16s.pdf')">
            Preview (PDF)
          </a>
          <a href="/D Registration Form over 16s.docx" download="Registration Form - 16 and over">
            Download (Word)
          </a>
        </li>
        <li class="under-16">
          Client Contract - under 16s
          <a href="#" @click.prevent="previewDocument('/C Client Contract under 16s.pdf')">
            Preview (PDF)
          </a>
          <a href="/C Client Contract under 16s.docx" download="Client Contract - under 16s">
            Download (Word)
          </a>
        </li>
        <li class="under-16">
          Registration Form - under 16s
          <a href="#" @click.prevent="previewDocument('/D Registration Form under 16s.pdf')">
            Preview (PDF)
          </a>
          <a href="/D Registration Form under 16s.docx" download="Registration Form - under 16s">
            Download (Word)
          </a>
        </li>
        <li>
          Couple Therapy Contract - 18 and over
          <a href="#" @click.prevent="previewDocument('/Couple Therapy Contract.pdf')">
            Preview (PDF)
          </a>
          <a href="/Couple Therapy Contract.docx" download="Couple Therapy Contract - 18 and over">
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
      this.previewDocument('/C Client Contract over 16s.pdf');
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
  font-family: Verdana, Geneva, Tahoma, sans-serif;
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

.documents-list ul li.under-16 {
  background-color: #a6daf4;      /* subtle highlight */
  border-left: 4px solid #5DAED5; /* accent line */
  padding: 0.5em 1em;
  border-radius: 4px;
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

