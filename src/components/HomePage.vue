<script>
import { Motion } from "motion/vue";
export default {
  components: { Motion },
  data() {
    return {
      currentImage: 0,
      images: [
        'src/img/logo.png',
        'src/img/programmazione.webp'
      ]
    }
  },
  methods: {
    nextImage() {
      this.currentImage = (this.currentImage + 1) % this.images.length;
    },
    prevImage() {
      this.currentImage = (this.currentImage - 1 + this.images.length) % this.images.length;
    }
  }
}
</script>

<template>
  <header></header>
  <main>
    <div class="container-fluid">
      <div class="row">
        <div class="col-7 bg-light pt-4 d-flex flex-column align-items-center border-end">
          <Motion :initial="{ x: -1000 }" :animate="{ x: 0 }" :transition="{ type: 'spring', stiffness: 100 }">
            <div class="cardImages" style="height: 700px">
              <img class="img-fluid h-100" :src="images[currentImage]" alt="Immagine del carosello" />
            </div>
            <div class="buttons text-primary p-4 w-48 d-flex justify-content-evenly">
              <button class="btn btn-primary" @click="prevImage">Precedente</button>
              <button class="btn btn-primary" @click="nextImage">Successivo</button>
            </div>
          </Motion>
        </div>
        <div class="col-5 bg-light p-4 text-center ">
          <Motion :initial="{ x: 1000 }" :animate="{ x: 0 }" :transition="{ type: 'spring', stiffness: 100 }">
            <h2 class="text-primary">Descrizione Dottore</h2>
            <div class="text-primary description d-flex justify-content-around flex-column h-100">
              <span>Nome:</span>
              <span>Cognome:</span>
              <span>Indirizzo:</span>
              <span>Numero di telefono:</span>
              <span>Email:</span>
              <span>Specializzazione:</span>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias incidunt porro sapiente sit officiis odio
                ex
                eum repellendus quo sunt soluta ea cupiditate animi nihil, corporis iusto ab, saepe praesentium.
              </p>
            </div>
          </Motion>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped></style>
