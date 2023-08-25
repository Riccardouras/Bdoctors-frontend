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
  <!-- NAVBAR -->
  <header>
    <div class="container-1">
      <div class="nav-left">
        <img id="logo" src="../img/LogoPiccolo.png" alt="">
        <h1>B-Doctors</h1>
      </div>
      <div class="nav-right">
        <a href="">Registrati</a>
        <a href="">Accedi</a>
      </div>
    </div>
  </header>
  <main>
    <!-- FORM SPECIALIZZAZIONE -->
    <div class="titleDoctor d-flex flex-column justify-content-around">
      <h2>Cerca il tuo dottore</h2>
      <h4>Cerca tra 100 000 Specialisti e Medici di Medicina Generale.</h4>
    </div>
    <form>
      <div class="form-row d-flex align-items-center">
        <div class="col me-3">
          <label for="specialization">Specializzazione:</label>
          <input type="text" class="form-control" id="specialization" placeholder="es. Cardiologo, Dentista, Ginecologo">
        </div>
        <div class="col me-3">
          <label for="location">Luogo:</label>
          <input type="text" class="form-control" id="location" placeholder="es. Roma, Milano, Firenze">
        </div>
        <button type="submit" class="text-center btn btn-primary mt-4">Cerca</button>
      </div>
    </form>
    <!-- MEDICI IN EVIDENZA -->
    <div class="container-fluid">
      <div class="row">
        <div class="sponsorDoctors">
          <h2>Dottori in evidenza</h2>
        </div>
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
        <div class="col-5 bg-light p-4 text-center d-flex justify-content-around flex-column">
          <Motion :initial="{ x: 1000 }" :animate="{ x: 0 }" :transition="{ type: 'spring', stiffness: 100 }">
            <h2 class="text-primary">Descrizione Dottore</h2>
            <div class="text-primary description d-flex justify-content-around flex-column">
              <span>Nome:</span>
              <span>Cognome:</span>
              <span>Specializzazione:</span>
            </div>
          </Motion>
        </div>
      </div>
    </div>
    <!-- MEDICI IN EVIDENZA -->
  </main>
</template>

<style lang="scss">
@use '../style.scss' as *;

.container-1 {
  height: 100px;
  background-color: #17a5f5;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.nav-left {
  display: flex;
  align-items: center;
  width: 400px;
  justify-content: space-around;

  h1 {
    font-family: cursive;
  }
}

#logo {
  width: 110px;
}

.nav-right {
  width: 200px;
  display: flex;
  justify-content: space-between;
}

div a {
  text-decoration: none;
  color: black;
}

a:hover {
  color: white;
}

.titleDoctor {
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.form-row {
  max-width: 1000px;
  height: 200px;
  margin-left: 200px;
}

.sponsorDoctors {
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
