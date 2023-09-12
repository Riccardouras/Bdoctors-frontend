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
            vote: '',
            messageErrors: [],
            reviewErrors: [],
            voteErrors: [],
            messageSuccess: false,
            reviewSuccess: false,
            voteSuccess: false,
            doctorReviews: []
        }
    },
    computed: {

    },
    methods: {

        doctors() {
            return this.$route.params.doctorId;
        },

        getDoctorDetails() {
            this.store.loading = true
            let config = {
                params: {
                    doctor_id: this.$route.params.doctorId
                }
            }
            axios.get(this.backendPaths.doctorDetailsURL, config)
                .then(response => {
                    this.doctor = response.data.results.doctor;
                    console.log('DOCTOR LOG', this.doctor);
                    this.store.loading = false
                })
        },

        sendMsgData() {
            let data = {
                full_name: this.full_name,
                mail: this.mail,
                text: this.text,
                doctor_id: this.$route.params.doctorId,
            }

            axios.post(this.backendPaths.storeMessageURL, data).then(response => {
                if (response.data.success) {
                    console.log('Il messaggio è stato inviato con successo', response.data.success)
                    this.messageSuccess = true
                    this.messageErrors = []

                } else {
                    console.log('Qualcosa è andato storto', response.data.success)
                    this.messageErrors = response.data.errors
                    console.log(this.messageErrors, 'Questi sono gli errori')
                    this.messageSuccess = false
                }
            }).catch(err => {
                console.log(err, 'Bad request')
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
                if (response.data.success) {
                    console.log('La recensione è stata inviato con successo', response.data.success);
                    this.reviewSuccess = true;
                    this.reviewErrors = [];
                    this.getDoctorDetails();
                    this.getDoctorReviews();
                } else {
                    console.log('Qualcosa è andato storto', response.data.success);
                    this.reviewErrors = response.data.errors;
                    console.log(this.reviewErrors, 'Questi sono gli errori');
                    this.reviewSuccess = false;
                }
                this.loading = false;
            }).catch(err => {
                console.log(err.message, 'Bad request')
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
                if (response.data.success) {
                    console.log('Il voto è stata inviato con successo', response.data.success)
                    this.voteSuccess = true
                    this.voteErrors = []
                    this.getDoctorDetails();
                    this.getDoctorReviews();
                } else {
                    console.log('Qualcosa è andato storto', response.data.success);
                    this.voteErrors = response.data.errors;
                    console.log(this.voteErrors, 'Questi sono gli errori');
                    this.voteSuccess = false;
                }
            }).catch(err => {
                console.log(err.message, 'Bad request')
            });
            this.vote = '0'
        },
        getDoctorReviews() {
            this.store.loading = true
            let config = {
                params: {
                    doctor_id: this.$route.params.doctorId
                }
            };
            axios.get(this.backendPaths.getDoctorReviewsURL, config)
                .then(response => {
                    this.doctorReviews = response.data.results;
                    console.log('Chiamata per recensioni', this.doctorReviews);
                    this.store.loading = false
                });
        }
    },
    mounted() {
        this.getDoctorDetails();
        this.getDoctorReviews();
    }
}
</script>

<template>
    <main>
        <div class="backDoctor">

        </div>
        <div v-if="store.loading" class="text-center loading mt-4">
            <i class="fa-solid fa-spinner fa-spin"></i>
        </div>
        <div v-else class="container">
            <div class="row">
                <!-- PROFILO DOTTORE -->
                <div class="col-md-6 col-sm-12">
                    <div class="profile-container mt-5 d-flex flex-column align-items-center">
                        <h1>{{ doctor.name }}</h1>
                        <img :src='doctor.image' class="img-thumbnail" style="max-width: 70%;" :alt="doctor.doctorName">
                        <span><strong>Specializzato in:</strong></span>
                        <ul class="list-unstyled">
                            <li class="specialization text-center" v-for="specialty in doctor.specialties">{{ specialty }}
                            </li>
                        </ul>

                        <div class="rating d-flex align-items-center">
                            <span class="rating-label fs-3">⭐</span>
                            <span class="fw-bold">{{ doctor.averageVote }}</span>
                        </div>

                        <div v-if="doctorReviews.length != 0" class="rating d-flex flex-column align-items-center">
                            <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#reviewsModal">{{
                                doctor.numberOfReviews }} <span
                                    v-if="doctorReviews.length == 1 && doctorReviews.length != 0"> recensione</span> <span
                                    v-if="doctorReviews.length > 1"> recensioni</span></button>
                        </div>

                        <div v-else>
                            <span class="rating-label fw-bold">Nessuna recensione</span>
                        </div>

                        <div class="modal fade" id="reviewsModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                            aria-hidden="true">
                            <div class="modal-dialog modal-dialog-scrollable">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h3 class="modal-title" id="exampleModalLabel">Recensioni</h3>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal"
                                            aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <template v-for="review in doctorReviews">
                                            <div class="card w-auto p-0 mb-2">
                                                <div class="card-header w-100">
                                                    <h3 class="card-title">{{ review.title }}</h3>
                                                    <div class="card-subtitle">{{ review.name }} , {{ review.date }}</div>
                                                </div>
                                                <div class="card-body">
                                                    <p class="card-text">{{ review.comment }}</p>
                                                </div>
                                            </div>
                                        </template>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary"
                                            data-bs-dismiss="modal">Chiudi</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="rating d-flex flex-column align-items-center">
                            <span class="rating-label"><strong>Indirizzo:</strong> </span>
                            <span> {{ doctor.address }}, {{ doctor.city }} </span>
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
                <div class="col-md-6 col-sm-12 mt-5">
                    <h3 class="text-center">Scrivi una recensione</h3>
                    <form @submit.prevent="sendReviewData()">
                        <div class="form-group">
                            <label class="mt-2 mb-2" for="name">Nome *</label>
                            <input v-model="name" type="text" id="name" name="name" class="form-control"
                                :class="reviewErrors.name ? 'is-invalid' : ''" required maxlength="30"
                                placeholder="Il tuo nome">
                            <template v-if="reviewErrors.name">
                                <p class="text-danger" v-for="error in reviewErrors.name">{{ error }}</p>
                            </template>
                        </div>
                        <div class="form-group">
                            <label class="mt-2 mb-2" for="title">Titolo *</label>
                            <input v-model="title" type="text" id="title" name="title" class="form-control"
                                :class="reviewErrors.title ? 'is-invalid' : ''" required maxlength="300"
                                placeholder="Titolo recensione">
                            <template v-if="reviewErrors.title">
                                <p class="text-danger" v-for="error in reviewErrors.title">{{ error }}</p>
                            </template>
                        </div>
                        <div class="form-group">
                            <label class="mt-2 mb-2" for="comment">Commento *</label>
                            <textarea v-model="comment" id="comment" name="title" class="form-control" required
                                maxlength="800" placeholder="Il tuo commento"></textarea>
                            <template v-if="reviewErrors.comment">
                                <p class="text-danger" v-for="error in reviewErrors.comment">{{ error }}</p>
                            </template>
                        </div>
                        <div class="text-center">
                            <button type="submit" class="btn btn-primary mt-3 mb-4">Invia Recensione</button>
                        </div>
                        <p class="text-success text-center" v-if="reviewSuccess">La recensione è stata inviata
                            correttamente
                        </p>
                    </form>


                    <div>
                        <h3 class="text-center">Invia un voto</h3>
                        <form @submit.prevent="sendVoteData()">
                            <div class="star-rating-wrapper">
                                <span class="star-rating">
                                    <label for="rate-1" style="--i:1"><i class="fa-solid fa-star"></i></label>
                                    <input v-model="vote" type="radio" name="vote_id" id="rate-1" value="1">
                                    <label for="rate-2" style="--i:2"><i class="fa-solid fa-star"></i></label>
                                    <input v-model="vote" type="radio" name="vote_id" id="rate-2" value="2" checked>
                                    <label for="rate-3" style="--i:3"><i class="fa-solid fa-star"></i></label>
                                    <input v-model="vote" type="radio" name="vote_id" id="rate-3" value="3">
                                    <label for="rate-4" style="--i:4"><i class="fa-solid fa-star"></i></label>
                                    <input v-model="vote" type="radio" name="vote_id" id="rate-4" value="4">
                                    <label for="rate-5" style="--i:5"><i class="fa-solid fa-star"></i></label>
                                    <input v-model="vote" type="radio" name="vote_id" id="rate-5" value="5">
                                </span>
                            </div>
                            <template v-if="voteErrors.doctor_id || voteErrors.vote_id">
                                <p class="text-danger text-center">Ops qualcosa è andato storto</p>
                            </template>
                            <div class="text-center">
                                <button type="submit" class="btn btn-primary mt-3 mb-4">Invia Voto</button>
                            </div>
                            <p class="text-success text-center" v-if="voteSuccess">Il voto è stato inviato
                                correttamente
                            </p>
                        </form>
                    </div>

                    <!-- INVIA MESSAGGIO AL DOTTORE -->
                    <div class="card-footer">
                        <h3 class="text-center">Invia un messaggio al dottore</h3>
                        <form @submit.prevent="sendMsgData()">
                            <div class="form-group">
                                <label class="mt-2 mb-2" for="full_name">Nome *</label>
                                <input v-model="full_name" type="text" id="full_name"
                                    :class="messageErrors.full_name ? 'is-invalid' : ''" class="form-control" required
                                    maxlength="30" placeholder="Il tuo nome">
                                <template v-if="messageErrors.full_name">
                                    <p class="text-danger" v-for="error in messageErrors.full_name">{{ error }}</p>
                                </template>
                            </div>
                            <div class="form-group">
                                <label class="mt-2 mb-2" for="mail">Email *</label>
                                <input v-model="mail" type="email" id="mail" :class="messageErrors.mail ? 'is-invalid' : ''"
                                    class="form-control" required placeholder="Inserisci qui la tua email">
                                <template v-if="messageErrors.mail">
                                    <p class="text-danger" v-for="error in messageErrors.mail">{{ error }}</p>
                                </template>
                            </div>
                            <div class="form-group">
                                <label class="mt-2 mb-2" for="text">Messaggio *</label>
                                <textarea v-model="text" id="text" :class="messageErrors.text ? 'is-invalid' : ''"
                                    class="form-control" required maxlength="800" rows="4"
                                    placeholder="Il tuo messaggio"></textarea>
                                <template v-if="messageErrors.text">
                                    <p class="text-danger" v-for="error in messageErrors.text">{{ error }}</p>
                                </template>
                            </div>
                            <div class="text-center">
                                <button type="submit" class="btn btn-primary mt-3 mb-4">Invia messaggio</button>
                            </div>
                            <p class="text-success text-center" v-if="messageSuccess">Il messaggio è stato inviato
                                correttamente
                            </p>
                        </form>
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

.backDoctor {
    height: 100px;
    background-image: url(../img/Dottori4.jpg);
    background-size: cover;
    background-position: center;
    margin-top: -100px;

}

// STAR RATING

.star-rating-wrapper {
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5em;

    label {
        cursor: pointer;
    }
}

.star-rating {
    white-space: nowrap;
}

.star-rating [type="radio"] {
    appearance: none;
}

.star-rating i {
    font-size: 1.2em;
    transition: 0.3s;
}

.star-rating label:is(:hover, :has(~ :hover)) i {
    transform: scale(1.35);
    color: #fffdba;
    animation: jump 0.5s calc(0.3s + (var(--i) - 1) * 0.15s) alternate infinite;
}

.star-rating label:has(~ :checked) i {
    color: #faec1b;
    text-shadow: 0 0 2px #ffffff, 0 0 10px #ffee58;
}

@keyframes jump {

    0%,
    50% {
        transform: translatey(0) scale(1.35);
    }

    100% {
        transform: translatey(-15%) scale(1.35);
    }
}
</style>