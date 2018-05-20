<template>
  <a 
    :href="urlPhoto" 
    :class="classAtt" 
    data-position="bottom"
    @click="trackEvent(photo.title)">
    <img 
      :src="urlPhoto" 
      :alt="photo.title" 
      :data-position="position">
  </a>
</template>
<script>
export default {
  props: {
    photo: {
      type: Object,
      required: true
    },
    classSpan: {
      type: String,
      default: ''
    },
    position: {
      type: String,
      required: true
    }
  },
  computed: {
    urlPhoto: function() {
      console.log(this.photo)
      return `https://farm${this.photo.farm}.staticflickr.com/${
        this.photo.server
      }/${this.photo.id}_${this.photo.secret}_b.jpg`
    },
    classAtt: function() {
      return 'image filtered ' + this.classSpan
    }
  },
  methods: {
    trackEvent: function(name) {
      this.$ua.trackEvent('gallery-photo', 'click', name)
    }
  }
}
</script>