<template>
  <div class="span-3-25">
    <form>
      <div 
        v-if="response" 
        class="field" 
        v-html="response"/>
      <div class="field half">
        <label for="name">Name *</label>
        <input 
          id="name" 
          v-model="name" 
          type="text" 
          name="name" 
          placeholder="Write your name">
      </div>
      <div class="field half">
        <label for="email">Email *</label>
        <input 
          id="email" 
          v-model="email" 
          type="email" 
          name="email" 
          placeholder="Write your email">
      </div>
      <div class="field">
        <label for="message">Message *</label>
        <textarea 
          id="message" 
          v-model="message" 
          name="message" 
          rows="4"
          placeholder="Write me a message"/>
      </div>
      <ul class="actions">
        <li><input 
          type="button" 
          value="Send Message" 
          class="button special" 
          @click="submit"></li>
      </ul>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  data() {
    return {
      name: '',
      email: '',
      message: '',
      response: ''
    }
  }//,
/*  methods: {
    submit: function() {
      this.axios
        .post('messages', {
          name: this.name,
          email: this.email,
          message: this.message
        })
        .then(() => {
          this.response = 'Message sent correctly!'

          this.name = ''
          this.email = ''
          this.message = ''
        })
        .catch(error => {
          if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            this.response = error.response.data.error
          } else if (error.request) {
            // The request was made but no response was received
            // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
            // http.ClientRequest in node.js
          } else {
            // Something happened in setting up the request that triggered an Error
          }
        })
    }
  }*/
}
</script>

