<script>
import axios from 'axios';
import { store } from '../data/store';
import { backendPaths } from '../data/backendPaths';


export default {
    name: 'DoctorPage',
    data() {
        return {
            store,
            backendPaths,
            doctor: ''
        }
    },
    computed: {

    },
    methods: {
        doctors() {
            return this.$route.params.doctorId;
        },
        getDoctorDetails() {

            let config = {
                params: {
                    doctor_id: this.$route.params.doctorId
                }
            }
            axios.get(this.backendPaths.doctorDetailsURL, config)
                .then(response => {
                    this.doctor = response.data.results.doctor;
                    console.log('DOCTOR LOG', this.doctor);
                })
        }
    },
    mounted() {
        this.getDoctorDetails();
    }
}
</script>

<template>
    <main>
        <div class="container d-flex">
            <!-- PROFILO DOTTORE -->
            <div class="profile-container mt-5 border-3">
                <div class="d-flex flex-column align-items-center">
                    <h1>{{ doctor.name }}</h1>
                    <img :src='doctor.image' class="img-thumbnail" style="max-width: 70%;" :alt="doctor.doctorName">
                    <span><strong>Specializzato in:</strong></span>
                    <ul class="list-unstyled">
                        <li class="specialization text-center" v-for="specialty in doctor.specialties">{{ specialty }}</li>
                    </ul>

                    <div class="rating d-flex flex-column align-items-center">
                        <span class="rating-label text-center"><strong>Valutazione media:</strong>
                        </span>
                        <span>{{ doctor.averageVote }}</span>
                    </div>

                    <div class="rating d-flex flex-column align-items-center">
                        <span class="rating-label text-center"><strong>Numero di recensioni:</strong>
                        </span>
                        <span>{{ doctor.numberOfReviews }}</span>
                    </div>

                    <div class="rating d-flex flex-column align-items-center">
                        <span class="rating-label text-center"> <strong>Indirizzo:</strong> </span>
                        <span>{{ doctor.address }} </span>
                    </div>

                    <div class="rating d-flex flex-column align-items-center">
                        <span class="rating-label"> <strong>Servizi:</strong></span>
                        <span class="text-center">{{ doctor.service }}</span>
                    </div>

                    <div class="rating d-flex flex-column align-items-center">
                        <span class="rating-label text-center"><strong>Telefono:</strong> </span>
                        <span> {{ doctor.phone_number }} </span>
                    </div>
                    <div class="rating d-flex flex-column align-items-center">
                        <a :href="doctor.curriculum" target="_blank">Clicca qui per aprire il CV</a>
                    </div>
                </div>


            </div>

            <div class="container border-3 d-flex flex-column justify-content-around">

                <!-- RECENSIONE -->
                <div class="container mt-5 d-flex flex-column align-items-center">
                    <h3>Scrivi una recensione</h3>
                    <form class="w-100">
                        <div class="form-group">
                            <label for="user-name">Nome:</label>
                            <input type="text" id="user-name" name="user-name" class="form-control"
                                placeholder="Il tuo nome">
                        </div>
                        <div class="form-group">
                            <label for="user-rating" class="mt-2 mb-2">Valutazione:</label>
                            <select id="user-rating" name="user-rating" class="form-control">
                                <option value="5">5</option>
                                <option value="4">4</option>
                                <option value="3">3</option>
                                <option value="2">2</option>
                                <option value="1">1</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="user-review" class="mb-2 mt-2">Recensione:</label>
                            <textarea id="user-review" name="user-review" rows="4" class="form-control"
                                placeholder="Scrivi una recensione"></textarea>
                        </div>
                        <div class="text-center">
                            <button type="submit" class="btn btn-primary mt-3 mb-4">Invia Recensione</button>
                        </div>
                    </form>
                </div>

                <!-- INVIA MESSAGGIO AL DOTTORE -->

                <div class="card-footer d-flex flex-column align-items-center">
                    <h3>Invia un messaggio al dottore</h3>
                    <form class="w-100">
                        <div class="form-group">
                            <label for="user-name">Nome:</label>
                            <input type="text" id="user-name" class="form-control" placeholder="Il tuo nome">
                        </div>
                        <div class="form-group">
                            <label class="mt-2 mb-2" for="user-message">Messaggio:</label>
                            <textarea id="user-message" class="form-control" rows="4"
                                placeholder="Il tuo messaggio"></textarea>
                        </div>
                        <div class="text-center">
                            <button type="submit" class="btn btn-primary mt-3 mb-4">Invia messaggio</button>
                        </div>
                    </form>
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
                            Puoi prenotare una visita con un dottore utilizzando il nostro sistema di prenotazione online o
                            chiamando
                            il nostro numero di telefono. Basta selezionare il dottore che desideri visitare e scegliere una
                            data e un
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
                            Accettiamo pagamenti tramite carta di credito, bonifico bancario e contanti. Si prega di notare
                            che alcuni
                            dottori potrebbero avere metodi di pagamento preferiti, quindi si consiglia di verificare con
                            loro prima
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
                            Si consiglia di portare con sé la tessera sanitaria, eventuali documenti medici rilevanti e una
                            lista dei
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
                                Puoi annullare o modificare un appuntamento utilizzando il nostro sistema di prenotazione
                                online o
                                chiamando il nostro numero di telefono. Si prega di notare che potrebbero essere applicate
                                delle penali
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
                            <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i
                                    class="fab fa-twitter"></i></a>
                            <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i
                                    class="fab fa-google"></i></a>
                            <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i
                                    class="fab fa-instagram"></i></a>
                            <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i
                                    class="fab fa-linkedin-in"></i></a>
                            <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i
                                    class="fab fa-github"></i></a>
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

<style scoped lang="scss">
.navbar {
    height: 150px;
    margin: auto;
}

body {
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
    margin: 0;
    padding: 0;
}

.profile-container {
    max-width: 800px;
    margin: 0 auto;
    background-color: #fff;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}

h1 {
    color: #333;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

.specialization {
    color: #666;
}

.rating {
    display: flex;
    align-items: center;
    margin-top: 10px;
}

.rating-label {
    margin-right: 10px;
}
</style>