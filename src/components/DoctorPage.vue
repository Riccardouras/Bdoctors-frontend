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
            doctor: '',
            full_name: '',
            mail: '',
            text: ''
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
        },

        currentDate() {
            const current = new Date();
            const date = `${current.getFullYear()}/${current.getMonth() + 1}/${current.getDate()}`;
            return date;
        },

        sendMsgData() {
            let config = {
                full_name: this.full_name,
                mail: this.mail,
                text: this.text,
                doctor_id: this.$route.params.doctorId,
                date: this.currentDate(),
            }

            axios.post('http://localhost:8000/api/message', config).then(response => {
                console.log(response, 'I dati del form sono stati inviati correttamaente');
            }).catch(err => {
                console.log(err.message, 'ops, qualcosa è andato storto')
            });
            this.full_name = '';
            this.mail = '';
            this.text = '';
        },
    },
    mounted() {
        this.getDoctorDetails();
    }
}
</script>

<template>
    <main>
        <!-- PROFILO DOTTORE -->
        <div class="profile-container mt-5">
            <h1>{{ doctor.name }}</h1>
            <img :src='doctor.image' class="img-thumbnail" style="max-width: 40%;" :alt="doctor.doctorName">
            <p class="specialization" v-for="specialty in doctor.specialties">Specializzato in: {{ specialty }}
            </p>

            <div class="rating">
                <span class="rating-label">Valutazione media:
                </span>
                <span>{{ doctor.averageVote }}</span>
            </div>

            <div class="rating">
                <span class="rating-label">Numero di recensioni:
                </span>
                <span>{{ doctor.numberOfReviews }}</span>
            </div>

            <div class="rating">
                <span class="rating-label"> Indirizzo: {{ doctor.address }} </span>
                <span></span>
            </div>

            <div class="rating">
                <span class="rating-label"> Servizi: {{ doctor.service }} </span>
                <span></span>
            </div>

            <div class="rating">
                <span class="rating-label"> Telefono: {{ doctor.phone_number }} </span>
                <span></span>
            </div>
            <div class="rating">
                <a :href="doctor.curriculum" target="_blank">Clicca qui per aprire il CV</a>
            </div>
            <!-- RECENSIONE -->
            <div class="container mt-4">
                <h3>Scrivi una recensione</h3>
                <form>
                    <div class="form-group">
                        <label for="user-name">Nome:</label>
                        <input type="text" id="user-name" name="user-name" class="form-control" placeholder="Il tuo nome">
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
            <div class="card-footer">
                <h3>Invia un messaggio al dottore</h3>
                <form @submit.prevent="sendMsgData()">
                    <div class="form-group">
                        <label for="full_name">Nome:</label>
                        <input v-model="full_name" type="text" id="full_name" class="form-control"
                            placeholder="Il tuo nome">
                    </div>
                    <div class="form-group">
                        <label class="mt-2 mb-2" for="mail">Email</label>
                        <input v-model="mail" type="email" class="form-control" id="mail"
                            placeholder="Inserisci qui la tua email">
                    </div>
                    <div class="form-group">
                        <label class="mt-2 mb-2" for="text">Messaggio:</label>
                        <textarea v-model="text" id="text" class="form-control" rows="4"
                            placeholder="Il tuo messaggio"></textarea>
                    </div>
                    <div class="text-center">
                        <button type="submit" class="btn btn-primary mt-3 mb-4">Invia messaggio</button>
                    </div>
                </form>
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

<style lang="scss">
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