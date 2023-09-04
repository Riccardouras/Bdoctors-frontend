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
      backendPaths
    }
  },
  methods: {
    submitForm() {
      this.$router.push('/advancedsearch');
    },
    sponsoredDoctors() {
      axios.get(this.backendPaths.sponsoredURL)
        .then(response => {
          this.store.sponsoredDoctors = response.data.results;
          console.log(response.data , 'sponsored doctors');
        });
    },
    getSpecialties() {
      axios.get(this.backendPaths.allSpecialtiesURL)
        .then(response => {
          this.store.specialties = response.data.results;
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
    this.sponsoredDoctors();
    console.log(this.sponsoredDoctors())
    this.getSpecialties();
  },
}
</script>
<template>
  <!-- NAVBAR -->
  <header>
    <div class="background">

      <!-- FORM RICERCA -->
      <div class="container" style="padding-top: 80px; margin-top: -105px;">
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
                <option v-for="specialty in store.specialties" :value="specialty.id" :key="specialty.id">{{ specialty.name
                }}
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
      <h2 class="text-center mt-4 mb-4">Dottori in evidenza</h2>
      <div class="row justify-content-center">
        <div class="col-lg-3 d-flex justify-content-center mt-2" v-for="doctor in store.doctors" :key="doctor.id">
                    <div class="card">
                        <img class="card-img-top heading pb-2" style="height: 200px; object-fit: contain;"
                            :src="doctor.doctorImage" :alt="doctor.doctorName">
                        <div class="content">
                            <h5 class="card-title">{{ doctor.doctorName }}</h5>
                            <span>Specializzato in:</span>
                            <ul class="list-unstyled">
                                <li class="specialization text-center" v-for="specialty in doctor.doctorSpecialtiesArray">{{
                                    specialty }}</li>
                            </ul>
                            <p class="card-text">Voto medio: {{ doctor.averageVote }}</p>
                            <p class="card-text">Numero recensioni: {{ doctor.numberOfReviews }}</p>
                            <button class="btn"><router-link :to="`/doctorpage/${doctor.doctorId}`">Vai alla
                                    pagina del
                                    dottore</router-link></button>
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

  </footer>
</template>

<style lang="scss">
@use '../style/partials/variables.scss' as var;

.navbar {
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 75%;
  margin: auto;
}

select{
  cursor: pointer;
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

.content {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 100%;
    align-items: center;
    gap: 20px;
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
