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
        search(specialtyID, minVote, minReview) {
            this.store.loading = true
            let config = {
                params: {
                    specialty: specialtyID,
                    minAvgVote: minVote,
                    minNumOfReviews: minReview
                }
            };
            axios.get(this.backendPaths.searchURL, config)
                .then(response => {
                    this.store.doctors = response.data.results;
                    console.log('SEARCH', this.store.doctors);
                    this.store.loading = false
                })

            this.store.searchedSpecialty = this.store.specialties[specialtyID - 1].name;
        }
    },
    mounted() {
        this.store.minAvgVote = 0;
        this.store.minNumOfReviews = 0;
        this.search(this.store.specialtyID, this.store.minAvgVote, this.store.minNumOfReviews);
        // console.log('LOG AL MOUNTED', this.store.doctors);
    }
}
</script>

<template>
    <!-- NAVBAR -->
    <div class="background">

        <!-- FORM RICERCA -->
        <div class="container form-container " style="padding-top: 15px; margin-top: -105px;">
            <div class="titleDoctor d-flex flex-column justify-content-around w-75 m-auto align-items-start pt-5">
                <h2>Filtra per numero di recensioni e numero di stelle</h2>
            </div>
            <div class="form-row d-flex align-items-center">
                <div class="form-col col me-3">
                    <label for="minAvgVote">Voto minimo</label>
                    <select v-model="store.minAvgVote" class="form-control p-2" name="minAvgVote" id="minAvgVote">
                        <option :value="0" selected>Nessun minimo</option>
                        <option v-for="n in 5" :value="n">{{ n }}</option>
                    </select>
                </div>
                <div class="form-col col me-3">
                    <label for="minNumOfReviews">Recensioni minime</label>
                    <select v-model="store.minNumOfReviews" class="form-control p-2" name="minNumOfReviews"
                        id="minNumOfReviews">
                        <option value="0">Nessun minimo</option>
                        <option :value="5">5 o più</option>
                        <option :value="10">10 o più</option>
                    </select>
                </div>
                <div class="form-col col me-3">
                    <label for="specialization">Specializzazione:</label>
                    <select v-model="store.specialtyID" class="form-control" name="specialty" id="specialty">
                        <option v-for="specialty in store.specialties" :value="specialty.id"
                            :selected="store.specialtyID == specialty.id"> {{ specialty.name }} </option>
                    </select>
                </div>
                <button @click="search(store.specialtyID, store.minAvgVote, store.minNumOfReviews)"
                    class="button text-center mt-3 p-2">Cerca</button>
            </div>
        </div>
    </div>

    <!-- RISULTATO DELLA RICERCA -->
    <main>
        <div v-if="store.loading" class="text-center loading mt-4">
            <i class="fa-solid fa-spinner fa-spin"></i>
        </div>
        <div v-else class="container m-auto">
            <div class="row justify-content-center">
                <div class="col-12 text-center mt-4 mb-4">
                    <h2 v-if="store.doctors.length > 0">Risultati per: {{ store.searchedSpecialty }}</h2>
                    <h2 v-else>Nessun risultato trovato</h2>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center mt-2" v-for="doctor in store.doctors"
                    :key="doctor.id">
                    <div class="card" :class="doctor.sponsorCheck ? 'cardPremium' : ''">
                        <router-link :to="`/doctorpage/${doctor.id}`">
                            <img class="card-img-top heading mb-2 rounded-2" style="height: 200px; object-fit: contain;"
                                :src="doctor.image" :alt="doctor.name">
                        </router-link>
                        <div class="content">
                            <h5 class="card-title fw-bold"><router-link :to="`/doctorpage/${doctor.id}`">{{ doctor.name
                            }}</router-link>
                            </h5>
                            <span>Specializzato in:</span>
                            <ul class="list-unstyled">
                                <li class="specialization text-center text-black" v-for="specialty in doctor.specialties">{{
                                    specialty }}</li>
                            </ul>
                            <p v-if="doctor.averageVote > 0" class="card-text">⭐ {{ doctor.averageVote }}</p>
                            <p v-else>Nessun voto</p>
                            <p v-if="doctor.numberOfReviews > 0" class="card-text">Numero recensioni: {{ doctor.numberOfReviews }}</p>
                            <p v-else>Nessuna recensione</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<style scoped lang="scss">
@use '../style/partials/variables.scss' as var;

@media (max-width: 992px) {
    .form-row {
        flex-direction: column;
        text-align: center;
    }

    .form-container {
        min-height: 450px;
    }

    .form-col {
        width: 100%;
    }
}


select {
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

.btn {
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

.background {
    // background-image: url(../img/dottore.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    min-height: 450px;
}

.titleDoctor {
    height: 180px;
    
    h2{
        padding-top: 3rem;
    }
}

.form-row {
    width: 75%;
    height: 180px;
    margin: auto;
}


.form-select {
    height: 50px;
    border-radius: 2px
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
</style>