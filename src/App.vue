<template>
  <div id="page-wrapper">

    <!-- Wrapper -->
    <div id="wrapper">

      <!-- Panel (Banner) -->
      <section class="panel banner right">
        <div class="content color4 span-3-75">
          <h1 class="major">@Betatuador</h1>
          <p>Soy un artista del <strong>tatuaje</strong> con experiencia en el estilo de sombras (black and grey) y realismo. Desempeño mi profesión en la ciudad de Cali, Colombia. Tengo 'x' certificaciones y 'x' años de experiencia tatuando.</p>
          <ul class="actions">
            <li><a 
              href="#first" 
              class="button special color1 circle icon fa-angle-right">Next</a></li>
          </ul>
        </div>
        <div 
          class="image filtered span-1-75" 
          data-position="25% 25%">
          <img 
            src="https://instagram.fbog1-2.fna.fbcdn.net/vp/0d86c92f41f73de172805bf5fa27903c/5C3EAC0D/t51.2885-15/e35/30855754_170333387131465_5651122830532673536_n.jpg" 
            alt="Be profile">
        </div>
      </section>

      <!-- Panel (Spotlight) -->
      <section 
        id="first" 
        class="panel spotlight medium left">
        <div class="content span-7">
          <h2 class="major">Mi Trabajo</h2>
          <p>Trabajo fuertemente en nuevos proyectos día a día. Me actualizo con diversas técnicas del tatuaje en seminarios y capacitaciones. Tengo en mi estudio, todas las prestaciones de bioseguridad requeridas. Actualmente mi estilo se enfoca en la técnica de sombras o black and grey pero domino las demás técnicas a la perfección. </p>
        </div>
        <div 
          class="image filtered tinted" 
          data-position="top left">
          <img 
            src="/back2.jpg" 
            alt="Senegal green little bee eater bird">
        </div>
      </section>

      <!-- Panel -->
      <section class="panel color1">
        <div class="intro joined">
          <h2 class="major">Un poco sobre mí</h2>
          <p>Amo mi profesión, pero en mi tiempo libre me dedico a hacer deporte, viajar, compartir con mi familia y disfrutar de los pequeños placeres de la vida.</p>
        </div>
        <div class="inner">
          <ul class="grid-icons three connected">
            <li><span class="icon fa-balance-scale"><span class="label">Balance in life</span></span></li>
            <li><span class="icon fa-map-o "><span class="label">Travel with an empty map</span></span></li>
            <li><span class="icon fa-camera-retro"><span class="label">Photography</span></span></li>
            <li><span class="icon fa-beer"><span class="label">Friends and beers, beers and friends. It's the same.</span></span>
            </li>
            <li><span class="icon fa-bicycle"><span class="label">Sporty life</span></span></li>
            <li><span class="icon fa-code"><span class="label">Programming enthusiast</span></span></li>
          </ul>
        </div>
      </section>

      <!-- Panel (Spotlight) -->
     <!--  <section class="panel spotlight large right">
        <div class="content span-5">
          <h2 class="major">My future</h2>
          <p>I don't know everything and I'm really fine with that. But I'm not scared to take a step in any
          direction I think it will be worth for me and learn anything from scratch. I don't want to go every
          morning into a soulless office and spend there my day, therefore I'm writing my own future.</p>
        </div>
        <div 
          class="image filtered tinted" 
          data-position="top right">
          <img 
            src="/mandala-min.jpg" 
            alt="Creating Mandalas with light">
        </div>
      </section> -->

      <!-- Panel -->
      <section class="panel">
        <div class="intro color2">
          <h2 class="major">Tatuajes</h2>
          <p>Conoce un poco de mi trabajo deleitándote con las obras de arte que he hecho. Mis tatuajes han sido premiados, galardonados y aclamados en mi ciudad. ¡Disfrutalos!
            <br>Puedes ver más en: <a 
              href="https://www.instagram.com/betatuador/" 
              rel="noreferrer"
              target="_blank">@Betatuador</a></p>
        </div>
        <gallery/>
      </section>

      <!-- Panel -->
      <section class="panel color4-alt">
        <!-- <div class="intro color4">
          <h2 class="major">My contact</h2>
          <p>If you want to share some ideas or hire me write a message. <br> Say just Hi!
          if you are shy. I won't bite. </p>
        </div> -->
        <div class="inner columns divided">
          
          <div class="span-1-5">
            <h2 class="major">Sígueme</h2>

            <ul class="contact-icons color1">
              <li class="icon fa-instagram"><a 
                href="https://www.instagram.com/betatuador/" 
                rel="noreferrer"
                target="_blank">@betatuador</a>
              </li>
              <li class="icon fa-flickr"><a 
                href="#"
                rel="noreferrer"
                target="_blank">Betatuador</a></li>
              <li class="icon fa-twitter"><a 
                href="#" 
                rel="noreferrer"
                target="_blank">@betatuador</a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <!-- Copyright -->
      <div class="copyright">&copy; Mario Bolaños
      </div>

    </div>

  </div>
</template>

<script>
import Contact from "./components/Contact";
import Gallery from "./components/Gallery";

export default {
  name: "App",
  components: {
    Contact,
    Gallery
  },
  mounted() {
    this.$ua.trackView("Home");
  }
};
</script>
