<script>

import { store } from '../data/store';


export default {
    name: 'AboutUs',
    data() {
        return {
            store
        }
    }
}
</script>


<template>
    <div class="background">
        <div class="container" style="padding-top: 80px; margin-top: -105px;">
            <div class="flex-column d-flex align-items-center justify-content-center  " style="min-height: 350px;">
                <h1 class="aboutus">About Us</h1>
                <h5><a class="home" href="/">Home</a> / AboutUs</h5>
            </div>
        </div>
    </div>
    <div class="container mt-5">
        <div class="row justify-content-center">
            <div class="col-lg-4 col-md-12 d-flex justify-content-center">
                <div class="card mb-2 custom-card">
                    <div class="card-body">
                        <h5 class="card-title"><strong>Il nostro Telefono</strong></h5>
                        <p class="card-text">+39 2223456345</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-12 d-flex justify-content-center">
                <div class="card mb-2 custom-card">
                    <div class="card-body">
                        <h5 class="card-title"><strong>Il nostro Indirizzo</strong></h5>
                        <p class="card-text">Via Garibaldi, Milano</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-12 d-flex justify-content-center">
                <div class="card mb-2 custom-card">
                    <div class="card-body">
                        <h5 class="card-title"><strong>La nostra Email</strong></h5>
                        <p class="card-text">boolean@project.com</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>



<style scoped lang="scss" >
@use '../style/partials/variables.scss' as var;

.background {
    background-image: url(../img/Dottori4.jpg);
    background-size: cover;
    background-position: center;
    min-height: 440px;
}

.aboutus {
    font-size: 60px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-weight: 600;
}

.home {
    text-decoration: none;
    color: var.$primaryColor;
}

.custom-card {
    border: none;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
</style>