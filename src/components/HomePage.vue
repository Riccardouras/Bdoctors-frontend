<script>
import { Motion } from "motion/vue";
import axios from 'axios';
import { store } from '../data/store';
import { backendPaths } from '../data/backendPaths';
import { RouterLink } from 'vue-router';

export default {
  components: { Motion },
  data() {
    return {
      store,
      backendPaths,
      loopIndex: 0,
    }
  },
  computed: {
    currentSpecialty() {
      return this.store.specialties[this.loopIndex].name;
    }
  },

  methods: {
    submitForm() {
      this.$router.push('/advancedsearch');
    },
    sponsoredDoctors() {
      this.store.loading = true
      axios.get(this.backendPaths.sponsoredURL)
        .then(response => {
          this.store.sponsoredDoctors = response.data.results;
          console.log(response.data, 'sponsored doctors');
          this.store.loading = false
        });
    },
    getSpecialties() {
      this.store.loading = true
      axios.get(this.backendPaths.allSpecialtiesURL)
        .then(response => {
          this.store.specialties = response.data.results;
          this.store.loading = false
          // console.log(this.specialties);
        })
    },
    startCycle() {
      this.cycleItem();
    },
    cycleItem() {
      setTimeout(() => {
        // this.loopIndex = 0,
        this.loopIndex++;

        if (this.loopIndex === this.store.specialties.length) {
          this.loopIndex = 0;
        }
        this.cycleItem();
      }, 2000);
    },
  },
  created() {


  },
  mounted() {
    this.loopIndex = 0,
      this.startCycle();
    this.store.specialtyID = 0;
    this.sponsoredDoctors();
    this.getSpecialties();
  }
}
</script>
<template>
  <div v-if="store.loading" class="modalLoading d-flex align-items-center justify-content-center">
    <i class="fa-solid fa-spinner fa-spin"></i>
  </div>
  <div id="allContent" v-else>
    <!-- NAVBAR -->
    <header>
      <div class="background">
        <!-- FORM RICERCA -->
        <div class="container" style="padding-top: 80px; margin-top: -105px;">
          <div class="d-flex flex-column justify-content-around w-75 m-auto align-items-start pt-5 row">
            <h2 style="font-weight: 700;">Cerca il tuo dottore!</h2>
            <div v-if="!store.loading" class="d-none d-md-block align-items-center">
              <h4>Cerca tra 100 000 Medici specializzati in <span id="loopSpecialty"> {{ currentSpecialty }}</span></h4>
            </div>
          </div>

          <div>
            <div class="form-row d-flex align-items-center">
              <div class="container">
                <div class="row">
                  <div class="col-md-8 col-sm-12 d-flex justify-content-around flex-column">
                    <label class="text-blu" for="specialization">Specializzazione:</label>
                    <select v-model="store.specialtyID" class="form-control cursor-pointer" name="specialty"
                      id="specialty">
                      <option value="0" selected>Seleziona una specializzazione</option>
                      <option v-for="specialty in store.specialties" :value="specialty.id">{{
                        specialty.name }}</option>
                    </select>
                  </div>
                  <div class="col-md-4 col-sm-12 btncenter">
                    <button :disabled="store.specialtyID != 0 ? false : true" @click="submitForm"
                      class="button text-center mt-4">Cerca</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>

    <main>
      <!-- MEDICI IN EVIDENZA-->
      <div class="container">
        <h2 class="text-center mt-4 mb-4" style="font-weight: 700;">Dottori in evidenza</h2>
        <div class="row justify-content-center">
          <div class="col-xl-4 col-md-6 col-sm-12 d-flex justify-content-center mt-2"
            v-for="doctor in store.sponsoredDoctors" :key="doctor.id">
            <div class="card cardPremium">
              <router-link :to="`/doctorpage/${doctor.id}`">
                <img class="card-img-top heading mb-2 rounded-2" style="height: 200px; object-fit: contain;"
                  :src="doctor.image" :alt="doctor.name">
              </router-link>
              <div class="content">
                <h5 class="card-title"><router-link :to="`/doctorpage/${doctor.id}`">{{ doctor.name }}</router-link></h5>
                <span>Specializzato in:</span>
                <ul class="list-unstyled">
                  <li class="specialization text-center" v-for="specialty in doctor.specialties">{{ specialty }}</li>
                </ul>
                <p class="card-text">⭐ {{ doctor.averageVote }}</p>
                <p class="card-text">Numero recensioni: {{ doctor.numberOfReviews }}</p>
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
                Puoi prenotare una visita con un dottore contattandolo attraverso la sezione messaggi nella pagina
                dedicata, oppure attraverso
                il nostro numero di telefono. Basta selezionare il dottore che desideri contattare per visualizzarne i
                dettagli.
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
    </footer>
  </div>
</template>

<style scopded lang="scss">
@use '../style/partials/variables.scss' as var;

@media (max-width: 768px) {
  .btncenter {
    text-align: center;
  }
}

.background {
  background-image: url(../img/Dottori4.png);
}

.navbar {
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 75%;
  margin: auto;
}

.cursor-pointer {
  cursor: pointer;

}

#loopSpecialty {
  font-weight: 600;
}

.text-blu {
  color: #0b6091;
}

.modalLoading {
  font-size: 6rem;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: white;
  z-index: 999;
}


.card {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 320px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  height: 100%;
  padding: 32px;
  overflow: hidden;
  border-radius: 10px;
  background-color: rgb(248, 249, 250);
  border: 2px solid #313131;
  transition: all 0.5s cubic-bezier(0.23, 1, 0.320, 1);

  .card-title {
    color: var.$secondaryColor;
  }
}

.cardPremium::before {
  content: 'Premium';
  position: absolute;
  right: 100px;
  top: 40px;
  width: 100%;
  height: 40px;
  background-image: linear-gradient(45deg, #05486e 0%, #084f79 51%, #17a5f5 100%);
  transform: rotate(-45deg) translateY(-20px);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.23);
}

div a {
  text-decoration: none;
  color: #05486e;
}

.content {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
  align-items: center;
  gap: 5px;
  color: var.$primaryColor;
  transition: all 0.5s cubic-bezier(0.23, 1, 0.320, 1);
}

.content .heading {
  font-weight: 700;
  font-size: 32px;
}

.content .para {
  line-height: 1.5;
}

.content .btn {
  text-decoration: none;
  padding: 10px;
  font-weight: 600;
  border: none;
  cursor: pointer;
  background: #e5e5e5;
  border-radius: 5px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);

  a {
    text-decoration: none;
    color: var.$primaryColor;
  }
}

.card:hover {
  box-shadow: var.$primaryColor;
  border-color: var.$primaryColor;
}

.content .btn:hover {
  outline: 2px solid #e8e8e8;
  background: transparent;
  color: white;
}

.content .btn:active {
  box-shadow: none;
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

.svg-icon {
  color: #17a5f5;
}

.svg-icon path {
  fill: currentColor;
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
  background-image: url(../img/Dottori4.jpg);
  background-size: cover;
  background-position: center;
  transition: background-image ease-in 4s;
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
