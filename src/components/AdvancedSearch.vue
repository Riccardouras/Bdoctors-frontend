<script>
import { RouterLink } from 'vue-router'
export default {
    name: 'AdvancedSearch'
}
</script>

<template>
    <!-- NAVBAR -->
    <header>
        <div class="background">
            <div class="container navbar ">
                <Motion :initial="{ x: -1000 }" :animate="{ x: 0 }" :transition="{ type: 'spring', stiffness: 100 }">
                    <div class="nav-left">
                        <img id="logo" src="../img/LogoPiccolo.png" alt="">
                        <h1 class="text-white">B-Doctors</h1>
                    </div>
                </Motion>
                <Motion :initial="{ x: 1000 }" :animate="{ x: 0 }" :transition="{ type: 'spring', stiffness: 100 }">
                    <div class="nav-right">
                        <router-link to="/">Torna alla Home</router-link>
                        <a href="">Registrati</a>
                        <a href="">Accedi</a>
                    </div>
                </Motion>
            </div>

            <!-- FORM RICERCA -->
            <div class="container m-auto">
                <div class="titleDoctor d-flex flex-column justify-content-around w-75 m-auto align-items-start pt-5">
                    <h2>Filtra per numero di recensioni e numero di stelle</h2>
                </div>
                <form>
                    <div class="form-row d-flex align-items-center">
                        <div class="col me-3">
                            <select class="form-select p-2" aria-label="Default select example">
                                <option selected>Numero di stelle:</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="3">4</option>
                                <option value="3">5</option>
                            </select>
                        </div>
                        <div class="col me-3">
                            <select class="form-select p-2" aria-label="Default select example">
                                <option selected>Numero di recensioni</option>
                                <option value="1">0-5</option>
                                <option value="2">5-10</option>
                                <option value="3">Più di 10</option>
                            </select>
                        </div>
                        <button type="submit" class="button text-center">Cerca</button>
                    </div>
                </form>
            </div>
        </div>
    </header>
</template>

<style scoped lang="scss">
@use '../style.scss' as *;

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

div a {
    text-decoration: none;
    color: white;
}

a:hover {
    color: black;
}

.background {
    background-image: url(../img/dottore.jpg);
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