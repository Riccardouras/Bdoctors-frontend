<script>

</script>

<template>
    <header>
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
                            <a href="">Registrati</a>
                            <a href="">Accedi</a>
                        </div>
                    </Motion>
                </div>

                <!-- FORM RICERCA -->
                <div class="container">
                    <div class="titleDoctor d-flex flex-column justify-content-around w-75 m-auto align-items-start pt-5 ">
                        <h2>Cerca il tuo dottore!</h2>
                        <h4>Cerca tra 100 000 Specialisti e Medici di Medicina Generale.</h4>
                    </div>
                    <form>
                        <div class="form-row d-flex align-items-center">
                            <div class="col me-3">
                                <label class="text-white" for="specialization">Specializzazione:</label>
                                <input type="text" class="form form-control" id="specialization"
                                    placeholder="es. Cardiologo, Dentista, Ginecologo">
                            </div>
                            <button type="submit" class="button text-center mt-4">Cerca</button>
                        </div>
                    </form>
                </div>
            </div>
        </header>

        <main>
            <!-- MEDICI IN EVIDENZA -->
            <div class="container">
                <div class="row">
                    <h2 class="text-center mt-4 mb-4">Dottori in evidenza</h2>
                    <div class="col-sm-3 mt-2" v-for="doctor in doctors" :key="doctor.id">
                        <div class="card">
                            <img class="card-img-top" :src="doctor.image" :alt="doctor.name">
                            <div class="card-body">
                                <h5 class="card-title">{{ doctor.name }} {{ doctor.surname }}</h5>
                                <p class="card-text">{{ doctor.specialization }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </header>
</template>

<style></style>