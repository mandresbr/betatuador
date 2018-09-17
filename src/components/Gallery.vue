<template>
  <!-- <div 
    v-if="photos.length" 
    class="gallery">
    <div 
      class="modal" 
      tabIndex="-1"><div class="inner">
        <img 
          src="" 
          alt="Modal image">
      </div>
    </div>
    <div class="group span-3">
      <photo-gallery 
        :photo="photos[0]" 
        position="bottom" 
        class-span="span-3"/>
      <photo-gallery 
        :photo="photos[1]" 
        position="center" 
        class-span="span-1-5"/>
      <photo-gallery 
        :photo="photos[2]" 
        position="bottom" 
        class-span="span-1-5"/>
    </div>
    <photo-gallery 
      :photo="photos[3]" 
      position="top" 
      class-span="span-2-5"/>
    <div class="group span-4-5">
      <photo-gallery 
        :photo="photos[4]" 
        position="top" 
        class-span="span-3"/>
      <photo-gallery 
        :photo="photos[5]" 
        position="center" 
        class-span="span-1-5"/>
      <photo-gallery 
        :photo="photos[6]" 
        position="bottom" 
        class-span="span-1-5"/>
      <photo-gallery 
        :photo="photos[7]" 
        position="top" 
        class-span="span-3"/>
    </div>
    <photo-gallery 
      :photo="photos[8]" 
      position="right" 
      class-span="span-2-5"/>
  </div> -->
  <div class="gallery">
    <div class="group span-3">
      <a href="https://instagram.fbog1-1.fna.fbcdn.net/vp/7613d903e0e77d35857ee4043d65de0e/5C326C9D/t51.2885-15/sh0.08/e35/s750x750/37983864_212781246070691_1059764385511112704_n.jpg" class="image filtered span-3" data-position="bottom"><img src="https://instagram.fbog1-1.fna.fbcdn.net/vp/7613d903e0e77d35857ee4043d65de0e/5C326C9D/t51.2885-15/sh0.08/e35/s750x750/37983864_212781246070691_1059764385511112704_n.jpg" alt="" /></a>
      <a href="https://instagram.fbog1-1.fna.fbcdn.net/vp/5b721d137dc0f7c5c4ef3a70dbb83306/5C2FEDE6/t51.2885-15/e35/40618248_412460662492178_7490437330889605120_n.jpg" class="image filtered span-1-5" data-position="center"><img src="https://instagram.fbog1-1.fna.fbcdn.net/vp/5b721d137dc0f7c5c4ef3a70dbb83306/5C2FEDE6/t51.2885-15/e35/40618248_412460662492178_7490437330889605120_n.jpg" alt="" /></a>
      <a href="https://instagram.fbog1-1.fna.fbcdn.net/vp/a7c0219ec6f516aacacd2a1347717864/5C284317/t51.2885-15/e35/37625845_221250288534996_1237884350087823360_n.jpg" class="image filtered span-1-5" data-position="bottom"><img src="https://instagram.fbog1-1.fna.fbcdn.net/vp/a7c0219ec6f516aacacd2a1347717864/5C284317/t51.2885-15/e35/37625845_221250288534996_1237884350087823360_n.jpg" alt="" /></a>
    </div>
    <a href="https://instagram.fbog1-1.fna.fbcdn.net/vp/612cd278cb84bf447253b5d10e4a0105/5C243372/t51.2885-15/sh0.08/e35/p750x750/36149216_603423680058486_9112472687032139776_n.jpg" class="image filtered span-2-5" data-position="top"><img src="https://instagram.fbog1-1.fna.fbcdn.net/vp/612cd278cb84bf447253b5d10e4a0105/5C243372/t51.2885-15/sh0.08/e35/p750x750/36149216_603423680058486_9112472687032139776_n.jpg" alt="" /></a>
    <div class="group span-4-5">
      <a href="https://instagram.fbog1-1.fna.fbcdn.net/vp/e840de060186052d2637da7c6f43ba14/5C180E5B/t51.2885-15/sh0.08/e35/s640x640/33918481_614563468920174_3982044031877120000_n.jpg" class="image filtered span-3" data-position="top"><img src="https://instagram.fbog1-1.fna.fbcdn.net/vp/e840de060186052d2637da7c6f43ba14/5C180E5B/t51.2885-15/sh0.08/e35/s640x640/33918481_614563468920174_3982044031877120000_n.jpg" alt="" /></a>
      <a href="ihttps://instagram.fbog1-1.fna.fbcdn.net/vp/d8deefc8cb1b78493928f8e08c0be95f/5C33FB66/t51.2885-15/e35/35276125_158496101685342_7435419538562220032_n.jpg" class="image filtered span-1-5" data-position="center"><img src="https://instagram.fbog1-1.fna.fbcdn.net/vp/d8deefc8cb1b78493928f8e08c0be95f/5C33FB66/t51.2885-15/e35/35276125_158496101685342_7435419538562220032_n.jpg" alt="" /></a>
      <a href="https://instagram.fbog1-1.fna.fbcdn.net/vp/d38ab477f9cd3a806e47a5b5b402df2b/5C17643D/t51.2885-15/e35/31198458_128495841346704_5291151227634057216_n.jpg" class="image filtered span-1-5" data-position="bottom"><img src="https://instagram.fbog1-1.fna.fbcdn.net/vp/d38ab477f9cd3a806e47a5b5b402df2b/5C17643D/t51.2885-15/e35/31198458_128495841346704_5291151227634057216_n.jpg" alt="" /></a>
      <a href="https://instagram.fbog1-1.fna.fbcdn.net/vp/857ab5243042703a9bd49099e8860a42/5C1D0C35/t51.2885-15/e35/39591443_658608981171887_3675375580167012352_n.jpg" class="image filtered span-1-5" data-position="top"><img src="https://instagram.fbog1-1.fna.fbcdn.net/vp/857ab5243042703a9bd49099e8860a42/5C1D0C35/t51.2885-15/e35/39591443_658608981171887_3675375580167012352_n.jpg" alt="" /></a>
      <a href="https://instagram.fbog1-1.fna.fbcdn.net/vp/dd0ecf416428182f96598edee78903ec/5C173D7F/t51.2885-15/e35/39486179_260917874529391_8974682057342976_n.jpg" class="image filtered span-1-5" data-position="top"><img src="https://instagram.fbog1-1.fna.fbcdn.net/vp/dd0ecf416428182f96598edee78903ec/5C173D7F/t51.2885-15/e35/39486179_260917874529391_8974682057342976_n.jpg" alt="" /></a>
    </div>
    <a href="https://instagram.fbog1-1.fna.fbcdn.net/vp/e1d90b6e5c56062dfb006d99226b1a47/5C2A8A1E/t51.2885-15/e35/32374043_371695666654873_2159505583584051200_n.jpg" class="image filtered span-2-5" data-position="right"><img src="https://instagram.fbog1-1.fna.fbcdn.net/vp/e1d90b6e5c56062dfb006d99226b1a47/5C2A8A1E/t51.2885-15/e35/32374043_371695666654873_2159505583584051200_n.jpg" alt="" /></a>
  </div>
</template>
<script>
import PhotoGallery from './PhotoGallery.vue'

export default {
  components: { PhotoGallery },
  data() {
    return {
      photos: []
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      this.axios.get('photos').then(({ data }) => {
        this.photos = data
      })
    }
  }
}
</script>