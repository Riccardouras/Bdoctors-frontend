<script>
import { store } from '../store/store';

export default {
    name: 'DoctorPage',
    data() {
        return {
            store
        }
    },
    computed: {

    },
    methods: {
        doctors() {
            return this.$route.params.doctorId;
        }
    },
    mounted() {
        console.log(this.store.doctors);
    }
}
</script>

<template>
    <!-- <header>
        <div class="background">
            <div class="container navbar ">
                <div class="nav-left">
                    <img id="logo" src="../img/LogoPiccolo.png" alt="">
                    <h1 class="text-white">B-Doctors</h1>
                </div>
                <div class="nav-right">
                    <a href="http://localhost:8000/register">Registrati</a>
                    <a href="http://localhost:8000/login">Accedi</a>
                </div>
            </div>
        </div> -->
    <!-- </header> -->





    <!-- <div class="profile-container mt-5" v-for="doctor in store.doctors">
            <h1>{{ doctor.name }}</h1>
=======

    <main>
        <!-- PROFILO DOTTORE -->
    <div class="profile-container mt-5">
        <h1>Nome dottore</h1>
        <img src="../img/logo.png" class="img-thumbnail" style="max-width: 40%;" alt="...">
        >>>>>>> 0e997b52dabbe1675918151edca9255e0cc82f24
        <p class="specialization">Specializzazione: ...</p>

        <div class="rating">
            <span class="rating-label">Valutazione media:</span>
            <span></span>
        </div>

        <div class="rating">
            <span class="rating-label"> Recensioni:</span>
            <span></span>
        </div>

        <div class="rating">
            <span class="rating-label"> Indirizzo:</span>
            <span></span>
        </div>

        <div class="rating">
            <span class="rating-label"> Telefono:</span>
            <span></span>
            <<<<<<< HEAD </div> -->


                <!-- 
                <div class="review-section">
                    <h2>Recensioni</h2>
                    <div class="user-review">
                        <p class="user-name">Maria Bianchi</p>
                        <p class="user-rating">★★★★★</p>
                        <p>Molto competente e gentile.</p>
=======
            </div>
            <div class="rating">
                <a href="" target="_blank">Clicca qui per aprire il CV</a>
            </div>
            <!-- RECENSIONE -->
                <div class="container mt-4">
                    <h3>Scrivi una recensione</h3>
                    <form>
                        <div class="form-group">
                            <label for="user-name">Nome:</label>
                            <input type="text" id="user-name" name="user-name" class="form-control"
                                placeholder="Il tuo nome">
                            >>>>>>> 0e997b52dabbe1675918151edca9255e0cc82f24
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
                        <<<<<<< HEAD </div> -->

                            <!-- Aggiungere un modulo per inserire una nuova recensione -->
                            <!-- <h3>Scrivi una recensione</h3>
            <form>
                <div>
                    <label for="user-name">Nome:</label>
                    <input type="text" id="user-name" name="user-name">
                </div>
                <div>
                    <label for="user-rating">Valutazione:</label>
                    <select id="user-rating" name="user-rating">
                        <option value="5">5</option>
                        <option value="4">4</option>
                        <option value="3">3</option>
                        <option value="2">2</option>
                        <option value="1">1</option>
                    </select>
                </div>
                <div>
                    <label for="user-review">Recensione:</label>
                    <textarea id="user-review" name="user-review" rows="4"></textarea>
                </div>
                <div>
                    <button type="submit">Invia recensione</button>
                </div>
            </form>
        </div>



    </main> -->
                            =======
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
                    <form>
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
                                Puoi prenotare una visita con un dottore utilizzando il nostro sistema di prenotazione
                                online o
                                chiamando
                                il nostro numero di telefono. Basta selezionare il dottore che desideri visitare e scegliere
                                una
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
                                Accettiamo pagamenti tramite carta di credito, bonifico bancario e contanti. Si prega di
                                notare
                                che alcuni
                                dottori potrebbero avere metodi di pagamento preferiti, quindi si consiglia di verificare
                                con
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
                                Si consiglia di portare con sé la tessera sanitaria, eventuali documenti medici rilevanti e
                                una
                                lista dei
                                farmaci che si stanno assumendo. Inoltre, potrebbe essere utile portare una lista di domande
                                o
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
                                    Puoi annullare o modificare un appuntamento utilizzando il nostro sistema di
                                    prenotazione
                                    online o
                                    chiamando il nostro numero di telefono. Si prega di notare che potrebbero essere
                                    applicate
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
        >>>>>>> 0e997b52dabbe1675918151edca9255e0cc82f24
</template>

<style  lang="scss">
@use '../style.scss' as *;


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
}</style>