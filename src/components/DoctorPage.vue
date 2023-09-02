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
            text: '',
            name: '',
            title: '',
            comment: '',
            vote: ''
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

        sendMsgData() {
            let config = {
                full_name: this.full_name,
                mail: this.mail,
                text: this.text,
                doctor_id: this.$route.params.doctorId,
            }

            axios.post(this.backendPaths.storeMessageURL, config).then(response => {
                console.log(response, 'I dati del form sono stati inviati correttamaente');
            }).catch(err => {
                console.log(err.message, 'ops, qualcosa è andato storto')
            });
            this.full_name = '';
            this.mail = '';
            this.text = '';
        },

        sendReviewData() {
            let dataMsg = {
                name: this.name,
                title: this.title,
                comment: this.comment,
                doctor_id: this.$route.params.doctorId,
            };

            axios.post(this.backendPaths.storeReviewURL, dataMsg).then(response => {
                console.log(response, 'La recensione è stata inviata correttamente');
            }).catch(err => {
                console.log(err.message, 'ops, qualcosa è andato storto')
            });
            this.name = '';
            this.title = '';
            this.comment = '';
        },

        sendVoteData() {
            let dataVote = {
                vote_id: this.vote,
                doctor_id: this.$route.params.doctorId,
            };

            axios.post(this.backendPaths.storeVoteURL, dataVote).then(response => {
                console.log(response, 'Il voto è stato inviato correttamente');
            }).catch(err => {
                console.log(err.message, 'ops, qualcosa è andato storto')
            });
            this.vote = '0'
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
            <div class="container">
                <div class="profile-container mt-5 d-flex flex-column align-items-center">
                    <h1>{{ doctor.name }}</h1>
                    <img :src='doctor.image' class="img-thumbnail" style="max-width: 70%;" :alt="doctor.doctorName">
                    <span><strong>Specializzato in:</strong></span>
                    <ul class="list-unstyled">
                        <li class="specialization text-center" v-for="specialty in doctor.specialties">{{ specialty }}</li>
                    </ul>

                    <div class="rating d-flex flex-column align-items-center">
                        <span class="rating-label"><strong>Valutazione media:</strong>
                        </span>
                        <span>{{ doctor.averageVote }}</span>
                    </div>

                    <div class="rating d-flex flex-column align-items-center">
                        <span class="rating-label"><strong>Numero di recensioni:</strong>
                        </span>
                        <span>{{ doctor.numberOfReviews }}</span>
                    </div>

                    <div class="rating d-flex flex-column align-items-center">
                        <span class="rating-label"><strong>Indirizzo:</strong> </span>
                        <span> {{ doctor.address }} </span>
                    </div>

                    <div class="rating d-flex flex-column align-items-center">
                        <span class="rating-label"><strong>Servizi:</strong> </span>
                        <span class="text-center">{{ doctor.service }}</span>
                    </div>

                    <div class="rating d-flex flex-column align-items-center">
                        <span class="rating-label"><strong>Telefono:</strong> </span>
                        <span>{{ doctor.phone_number }}</span>
                    </div>
                    <div class="rating d-flex flex-column align-items-center">
                        <a :href="doctor.curriculum" target="_blank">Clicca qui per aprire il CV</a>
                    </div>
                </div>
            </div>

            <!-- RECENSIONE -->
            <div class="container mt-5 d-flex flex-column justify-content-around">
                <h3 class="text-center">Scrivi una recensione</h3>
                <form @submit.prevent="sendReviewData()">
                    <div class="form-group">
                        <label for="name">Nome:</label>
                        <input v-model="name" type="text" id="name" name="name" class="form-control"
                            placeholder="Il tuo nome">
                    </div>
                    <div class="form-group">
                        <label for="title">Titolo:</label>
                        <input v-model="title" type="text" id="title" name="title" class="form-control"
                            placeholder="Il tuo nome">
                    </div>
                    <div class="form-group">
                        <label for="comment">Commento:</label>
                        <textarea v-model="comment" id="comment" name="title" class="form-control"
                            placeholder="Il tuo nome"></textarea>
                    </div>
                    <div class="text-center">
                        <button type="submit" class="btn btn-primary mt-3 mb-4">Invia Recensione</button>
                    </div>
                </form>


                <div>
                    <h3 class="text-center">Invia un voto</h3>
                    <form @submit.prevent="sendVoteData()">
                        <div class="form-group">
                            <label for="user-rating" class="mt-2 mb-2">Valutazione:</label>
                            <select v-model="vote" id="user-rating" name="user-rating" class="form-control">
                                <option value="5">5</option>
                                <option value="4">4</option>
                                <option value="3">3</option>
                                <option value="2">2</option>
                                <option value="1">1</option>
                            </select>
                            <div class="text-center">
                                <button type="submit" class="btn btn-primary mt-3 mb-4">Invia Voto</button>
                            </div>
                        </div>
                    </form>
                </div>

                <!-- INVIA MESSAGGIO AL DOTTORE -->
                <div class="card-footer">
                    <h3 class="text-center">Invia un messaggio al dottore</h3>
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
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
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