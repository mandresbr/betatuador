<template>
  <a 
    :href="bigPhoto" 
    :class="classAtt" 
    data-position="bottom"
    @click="trackEvent(photo.title)">
    <img 
      :src="smallPhoto" 
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
    bigPhoto() {
      return this.urlPhoto('b')
    },
    smallPhoto() {
      return this.urlPhoto('z')
    },
    classAtt() {
      return 'image filtered ' + this.classSpan
    }
  },
  methods: {
    urlPhoto(size) {
      return `https://farm${this.photo.farm}.staticflickr.com/${
        this.photo.server
      }/${this.photo.id}_${this.photo.secret}_${size}.jpg`
    },
    trackEvent(name) {
      this.$ua.trackEvent('gallery-photo', 'click', name)
    }
  }
}
</script>