<script>
import { Motion } from "motion/vue";
import axios from 'axios';
import { store } from '../store/store';
import { RouterLink } from 'vue-router'

export default {
  components: { Motion },
  data() {
    return {
      currentImage: 0,
      specialties: [],
      images: [
        'src/img/logo.png',
        'src/img/programmazione.webp'
      ],
      store
    }
  },
  methods: {
    nextImage() {
      this.currentImage = (this.currentImage + 1) % this.images.length;
    },
    prevImage() {
      this.currentImage = (this.currentImage - 1 + this.images.length) % this.images.length;
    },
    submitForm() {
      this.$router.push('/advancedsearch');
    },
    subscribersDoctors() {
      axios.get('http://localhost:8000/api/sponsoredDoctors')
        .then(response => {
          this.store.sponsoredDoctors = response.data.results;
          // console.log(this.results);
        });
    },
    getSpecialties() {
      axios.get('http://localhost:8000/api/allSpecialties')
        .then(response => {
          this.specialties = response.data.results;
          // console.log(this.specialties);
        })
    },
    saveSpecialtyID(event) {
      this.store.specialtyID = event.target.value;
      // console.log(this.store.specialtyID);
    }
  },
  mounted() {
    this.store.specialtyID = 0;
    this.subscribersDoctors();
    this.getSpecialties();
  },
}
</script>
<template>
  <!-- NAVBAR -->
  <header>
    <div class="background">
      <div class="container navbar ">
        <Motion :initial="{ x: -1000 }" :animate="{ x: 0 }" :transition="{ type: 'spring', stiffness: 100 }">
          <div class="nav-left">
            <img id="logo" src="../img/LogoPiccolo.png" alt="">
            <h1 class="text-white">B-Doctors</h1>
          </div>
        </Motion>
        <Motion :initial="{ x: 1000 }" :animate="{ x: 0 }" :transition="{ type: 'spring', stiffness: 100 }">
          <div class="nav-right">
            <a class="link-header" href="http://localhost:8000/register">Registrati</a>
            <a class="link-header" href="http://localhost:8000/login">Accedi</a>
          </div>
        </Motion>
      </div>

      <!-- FORM RICERCA -->
      <div class="container">
        <div class="titleDoctor d-flex flex-column justify-content-around w-75 m-auto align-items-start pt-5 ">
          <h2>Cerca il tuo dottore!</h2>
          <h4>Cerca tra 100 000 Specialisti e Medici di Medicina Generale.</h4>
        </div>

        <div>
          <div class="form-row d-flex align-items-center">
            <div class="col me-3">
              <label class="text-white" for="specialization">Specializzazione:</label>
              <select @change="saveSpecialtyID($event)" class="form-control" name="specialty" id="specialty">
                <option value="0" selected>Seleziona una specializzazione</option>
                <option v-for="specialty in specialties" :value="specialty.id" :key="specialty.id">{{ specialty.name }}
                </option>
              </select>
            </div>
            <button :disabled="store.specialtyID != 0 ? false : true" @click="submitForm"
              class="button text-center mt-4">Cerca</button>
          </div>
        </div>
      </div>
    </div>
  </header>

  <main>
    <!-- MEDICI IN EVIDENZA-->
    <div class="container">
      <div class="row justify-content-center">
        <h2 class="text-center mt-4 mb-4">Dottori in evidenza</h2>
        <div class="col-sm-3 mt-2" v-for="doctor in store.sponsoredDoctors" :key="doctor.id">
          <div class="card">
            <img class="card-img-top " style="height: 200px; object-fit: contain;" :src="doctor.doctorImage"
              :alt="doctor.doctorName">
            <div class="card-body" style="min-height: 200px;">
              <h5 class="card-title">{{ doctor.doctorName }}</h5>
              <p class="card-text" v-for="specialty in doctor.doctorSpecialtiesArray">{{ specialty }}</p>
              <router-link :to="`/doctorpage/${doctor.doctorId}`">Vai alla pagina del dottore</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>

  <footer>
    <!-- FAQ -->
    <div class="container">
      <div class="titleFaq text-center mt-4 mb-4">
        <h2>F.A.Q.</h2>
      </div>
      <div class="accordion mt-4 mb-4" id="accordionExample">
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
              data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              Come posso prenotare una visita con un dottore?
            </button>
          </h2>
          <div id="collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              Puoi prenotare una visita con un dottore utilizzando il nostro sistema di prenotazione online o chiamando
              il nostro numero di telefono. Basta selezionare il dottore che desideri visitare e scegliere una data e un
              orario disponibili.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
              data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              Quali sono i metodi di pagamento accettati?
            </button>
          </h2>
          <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              Accettiamo pagamenti tramite carta di credito, bonifico bancario e contanti. Si prega di notare che alcuni
              dottori potrebbero avere metodi di pagamento preferiti, quindi si consiglia di verificare con loro prima
              della visita.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
              data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              Cosa devo portare con me alla visita?
            </button>
          </h2>
          <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              Si consiglia di portare con sé la tessera sanitaria, eventuali documenti medici rilevanti e una lista dei
              farmaci che si stanno assumendo. Inoltre, potrebbe essere utile portare una lista di domande o
              preoccupazioni da discutere con il dottore durante la visita.
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                Come posso annullare o modificare un appuntamento?
              </button>
            </h2>
            <div id="collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                Puoi annullare o modificare un appuntamento utilizzando il nostro sistema di prenotazione online o
                chiamando il nostro numero di telefono. Si prega di notare che potrebbero essere applicate delle penali
                per le cancellazioni effettuate con meno di 24 ore di preavviso.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class=" mt-5">
      <!-- LINK SOCIAL -->
      <div class=" mt-5">
        <div class="bg-dark text-center text-white">
          <div class="container p-4 pb-0">
            <section class="mb-4">
              <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i
                  class="fab fa-facebook-f"></i></a>
              <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i class="fab fa-twitter"></i></a>
              <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i class="fab fa-google"></i></a>
              <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i
                  class="fab fa-instagram"></i></a>
              <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i
                  class="fab fa-linkedin-in"></i></a>
              <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i class="fab fa-github"></i></a>
            </section>
          </div>
          <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);">
            © 2023 Copyright:
            <a class="text-white" href="https://mdbootstrap.com/">BooleanProject</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss">
@use '../style.scss' as *;

.navbar {
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 75%;
  margin: auto;
}


.nav-left {
  display: flex;
  align-items: center;
  width: 330px;
  justify-content: space-between;
}


#logo {
  width: 110px;
}

.nav-right {
  width: 200px;
  display: flex;
  justify-content: space-between;
}

header a {
  text-decoration: none;
  color: white;
}

.link-header:hover {
  color: black;
}

.background {
  background-image: url(../img/Dottori4.png);
  background-size: cover;
  background-position: center;
}

.titleDoctor {
  height: 180px;
}

.form-row {
  width: 75%;
  height: 180px;
  margin: auto;
}

.button {
  background-color: white;
  width: 100px;
  height: 50px;
  border: none;
  border-radius: 6px;
  color: #17a5f5;
}

.form {
  height: 50px;
  border-radius: 2px
}

.sponsorDoctors {
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
