<template>
  <div>
    <h1>Contact Us</h1>
    <form @submit.prevent="submitForm">
      <div>
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="name">
      </div>
      <div>
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email">
      </div>
      <div>
        <label for="message">Message:</label>
        <textarea id="message" v-model="message"></textarea>
      </div>
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'ContactPage',
  data() {
    return {
      name: '',
      email: '',
      message: ''
    }
  },
  methods: {
    submitForm() {
      alert(`Message sent by ${this.name} (${this.email}): ${this.message}`);
      this.name = '';
      this.email = '';
      this.message = '';
    }
  }
}
</script>

<style scoped>
h1 {
  color: green;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
form {
  max-width: 500px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
form div {
  margin-bottom: 10px;
}
</style>
