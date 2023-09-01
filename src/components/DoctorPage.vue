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


    <!-- Dottore -->
    <!-- <main> -->
    <!-- <div class="container m-auto">
            <div class="titleDoctor d-flex flex-column justify-content-around w-75 m-auto align-items-start pt-5 ">
                <h2 class="m-auto">Ecco il tuo dottore</h2>
            </div>
            <div class="card mb-3 mt-4 m-auto w-50">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="../img/logo.png" class="img-fluid rounded-start">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">Nome Dottore</h5>
                            <p class="card-text">Indirizzo dottore</p>
                            <p class="card-text">Telefono Dottore</p>
                        </div>
                    </div>
                </div>
            </div>

        </div> -->



    <div>
        <h2></h2>
    </div>



    <!-- <div class="profile-container mt-5" v-for="doctor in store.doctors">
            <h1>{{ doctor.name }}</h1>
            <p class="specialization">Specializzazione: ...</p>

            <div class="rating">
                <span class="rating-label">Valutazione media:</span>
                <span class="stars"></span>
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
            </div> -->


    <!-- 
                <div class="review-section">
                    <h2>Recensioni</h2>
                    <div class="user-review">
                        <p class="user-name">Maria Bianchi</p>
                        <p class="user-rating">★★★★★</p>
                        <p>Molto competente e gentile.</p>
                    </div>

                    <div class="user-review">
                        <p class="user-name">Luigi Verdi</p>
                        <p class="user-rating">★★★☆☆</p>
                        <p>Un buon medico ma i tempi d'attesa sono lunghi.</p>
                    </div>
                </div> -->

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
</template>

<style scoped lang="scss">
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
}

.stars {
    color: #FFD700;
}

.review-section {
    margin-top: 20px;
}

.user-review {
    border: 1px solid #ccc;
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 5px;
}

.user-name {
    font-weight: bold;
}

.user-rating {
    color: #FFD700;
}
</style>