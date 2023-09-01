<script>
import { RouterLink } from 'vue-router'
import { store } from '../data/store';
import { backendPaths } from '../data/backendPaths';

import axios from 'axios';

export default {
    name: 'AdvancedSearch',
    data() {
        return {
            store,
            backendPaths
        }
    },
    methods: {
        searchPerSpecialty(specialtyID) {
            let config = {
                params: {
                    specialty: specialtyID
                }
            };
            axios.get(this.backendPaths.searchPerSpecialtyURL, config)
                .then(response => {
                    this.store.doctors = response.data.results;
                    console.log('SEARCH PER SPECIALTY', this.store.doctors);
                })
        },
        searchWithFilter(specialtyID, minVote, minReview) {
            let config = {
                params: {
                    specialty: specialtyID,
                    minAvgVote: minVote,
                    minNumOfReviews: minReview
                }
            };
            axios.get(this.backendPaths.searchWithFilterURL, config)
                .then(response => {
                    this.store.doctors = response.data.results;
                    console.log('SEARCH WITH FILTER', this.store.doctors);
                })
        },

        saveMinAvgVote(event) {
            this.store.minAvgVote = event.target.value;
            console.log(this.store.minAvgVote);
        },
        saveMinNumOfReviews(event) {
            this.store.minNumOfReviews = event.target.value;
            console.log(this.store.minNumOfReviews);
        },
        saveSpecialtyID(event) {
            this.store.specialtyID = event.target.value;
            // console.log(this.store.specialtyID);
        },
        submitForm() {
            this.$router.push('/advancedsearch');
        },
    },
    mounted() {
        this.store.minAvgVote = 0;
        this.store.minNumOfReviews = 0;
        this.searchPerSpecialty(this.store.specialtyID);
        console.log('LOG AL MOUNTED', this.store.doctors);
    }
}
</script>

<template>
    <!-- NAVBAR -->
    <header>
        <div class="background">

            <!-- FORM RICERCA -->
            <div class="container">
                <div class="titleDoctor d-flex flex-column justify-content-around w-75 m-auto align-items-start pt-5">
                    <h2>Filtra per numero di recensioni e numero di stelle</h2>
                </div>
                <div class="form-row d-flex align-items-center">
                    <div class="col me-3">
                        <label for="minAvgVote">Voto minimo</label>
                        <select @change="saveMinAvgVote($event)" class="form-control p-2" name="minAvgVote" id="minAvgVote">
                            <option :value="0" :key="0" selected>Nessun minimo</option>
                            <option v-for="n in 5" :value="n" :key="n">{{ n }}</option>
                        </select>
                    </div>
                    <div class="col me-3">
                        <label for="minNumOfReviews">Numero minimo di recensioni</label>
                        <select @change="saveMinNumOfReviews($event)" class="form-control p-2" name="minNumOfReviews"
                            id="minNumOfReviews">
                            <option value="0" :key="0" selected>Nessun minimo</option>
                            <option v-for="n in 10" :value="n">{{ n }}</option>
                        </select>
                    </div>
                    <div class="col me-3">
                        <label for="specialization">Specializzazione:</label>
                        <select @change="saveSpecialtyID($event)" class="form-control" name="specialty" id="specialty">
                            <option v-for="specialty in store.specialties" :value="specialty.id" :key="specialty.id" :selected="store.specialtyID == specialty.id">
                            {{ specialty.name }}
                            </option>
                        </select>
                    </div>
                    <button @click="searchWithFilter(store.specialtyID, store.minAvgVote, store.minNumOfReviews)"
                        class="button text-center mt-4">Cerca</button>
                </div>
                <div class="form-row d-flex align-items-center">

                    <!-- <button :disabled="store.specialtyID != 0 ? false : true" @click="submitForm"
                        class="button text-center mt-4">Cerca</button> -->
                </div>
            </div>


        </div>
    </header>

    <main>
        <div class="container m-auto">
            <div class="row justify-content-center">
                <div class="col-12 text-center mt-4 mb-4">
                    <h2 v-if="store.doctors.length > 0">Specializzazione selezionata: {{
                        store.doctors[0].doctorSpecialtiesArray[0] }}</h2>
                </div>
                <div class="col-sm-3 mt-2" v-for="doctor in store.doctors" :key="doctor.id">
                    <div class="card">
                        <img class="card-img-top" style="height: 200px;" :src="doctor.doctorImage" :alt="doctor.doctorName">
                        <div class="card-body" style="min-height: 300px;">
                            <h5 class="card-title">{{ doctor.doctorName }}</h5>
                            <p class="card-text" v-for="specialty in doctor.doctorSpecialtiesArray">{{ specialty }}</p>
                            <p class="card-text">Voto medio: {{ doctor.averageVote }}</p>
                            <p class="card-text">Numero recensioni: {{ doctor.numberOfReviews }}</p>
                            <router-link :to="`/doctorpage/${doctor.doctorId}`">Vai alla pagina del dottore</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<style lang="scss">

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
    width: 300px;
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
    // background-image: url(../img/dottore.jpg);
    background-size: cover;
    background-repeat: no-repeat;

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

.form-select {
    height: 50px;
    border-radius: 2px
}
</style>