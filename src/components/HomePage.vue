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
      ],
      doctors: [
        { id: 1, name: 'Nome', surname: 'Cognome', specialization: 'Specializzazione', image: 'src/img/logo.png' },
        { id: 2, name: 'Nome', surname: 'Cognome', specialization: 'Specializzazione', image: 'src/img/programmazione.webp' },
        { id: 3, name: 'Nome', surname: 'Cognome', specialization: 'Specializzazione', image: 'src/img/programmazione.webp' },
        { id: 4, name: 'Nome', surname: 'Cognome', specialization: 'Specializzazione', image: 'src/img/programmazione.webp' },
        { id: 5, name: 'Nome', surname: 'Cognome', specialization: 'Specializzazione', image: 'src/img/programmazione.webp' },
        { id: 6, name: 'Nome', surname: 'Cognome', specialization: 'Specializzazione', image: 'src/img/programmazione.webp' },
        { id: 7, name: 'Nome', surname: 'Cognome', specialization: 'Specializzazione', image: 'src/img/logo.png' },
        { id: 8, name: 'Nome', surname: 'Cognome', specialization: 'Specializzazione', image: 'src/img/programmazione.webp' },
      ],
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
      <Motion :initial="{ x: -1000 }" :animate="{ x: 0 }" :transition="{ type: 'spring', stiffness: 100 }">
        <div class="nav-left">
          <img id="logo" src="../img/LogoPiccolo.png" alt="">
          <h1>B-Doctors</h1>
        </div>
      </Motion>
      <Motion :initial="{ x: 1000 }" :animate="{ x: 0 }" :transition="{ type: 'spring', stiffness: 100 }">
        <div class="nav-right">
          <a href="">Registrati</a>
          <a href="">Accedi</a>
        </div>
      </Motion>
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
    <div class="container">
      <div class="row">
        <h2 class="text-center">Dottori in evidenza</h2>
        <div class="col-sm-3 mt-2" v-for="doctor in doctors" :key="doctor.id">
          <div class="card">
            <img class="card-img-top" :src="doctor.image" :alt="doctor.name">
            <div class="card-body">
              <h5 class="card-title">{{ doctor.name }} {{ doctor.surname }}</h5>
              <p class="card-text">{{ doctor.specialization }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
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
