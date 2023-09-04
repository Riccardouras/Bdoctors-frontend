<script>

export default {
    name: 'AppFooter',
    data() {
        return {
            datodiprova: 'valorediprova'
        }
    }
}

</script>

<template>
    <!-- INFO -->
    <div class="container mt-5 mb-4">
        <div class="row">
            <div class="text-center mt-4 mb-4">
                <h2 style="font-weight: 700;">INFO</h2>
            </div>
            <div class="card custom-card col-md-3 justify-content-start ">
                <div class=" mb-2 mb-sm-0 media d-flex justify-content-between flex-column mt-0">
                    <div class="pr-1 text-center">
                        <div class="d-inline-flex">
                            <i class="svg-icon svg-icon-search svg-icon-size-24 svg-icon-color-secondary"><svg
                                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path
                                        d="M14 9.5a4.5 4.5 0 1 0-9 0 4.5 4.5 0 0 0 9 0Zm-.665 5.249a6.5 6.5 0 1 1 1.414-1.414l4.958 4.958a1 1 0 0 1-1.414 1.414l-4.958-4.958Z">
                                    </path>
                                </svg></i>
                            <h3 class="h4 ml-1 mb-0 mr-1 ps-2 text-center">Trova un dottore nella tua città</h3>
                        </div>
                    </div>
                    <div class="media-body">
                        <p class="text-muted mt-1 mb-3 m-0 mb-sm-3 text-center">Scegli tra oltre 100&nbsp;000 medici di
                            medicina
                            generale e
                            specialisti. Leggi le recensioni di altri pazienti.</p>
                    </div>
                </div>
            </div>
            <div class="card custom-card col-md-3 justify-content-start">
                <div class=" mb-2 mb-sm-0 media d-flex justify-content-between flex-column mt-0">
                    <div class="pr-1 text-center">
                        <div class="d-inline-flex">
                            <i class="svg-icon svg-icon-calendar-with-check svg-icon-size-24 svg-icon-color-secondary"><svg
                                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path
                                        d="M16 11.53a.754.754 0 0 0-1.06 0l-4.35 4.35L9 14.29a.754.754 0 0 0-1.06 0c-.29.29-.29.77 0 1.06l1.94 1.94c.39.39 1.02.39 1.41 0l4.7-4.7c.3-.29.3-.77.01-1.06ZM19 4h-1V3c0-.55-.45-1-1-1s-1 .45-1 1v1H8V3c0-.55-.45-1-1-1s-1 .45-1 1v1H5c-1.11 0-1.99.9-1.99 2L3 20a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2Zm-1 16H6c-.55 0-1-.45-1-1V9h14v10c0 .55-.45 1-1 1Z">
                                    </path>
                                </svg></i>

                            <h3 class="h4 ml-1 mb-0 mr-1  text-center">Prenota una visita: è facile e gratuito!</h3>
                        </div>
                    </div>
                    <div class="media-body">
                        <p class="text-muted mt-1 mb-3 m-0 mb-sm-3 text-center">Scegli la data che preferisci, inserisci i
                            tuoi
                            dati e
                            conferma…
                        </p>
                    </div>
                </div>
            </div>
            <div class="card custom-card col-md-3 justify-content-start">
                <div class=" mb-2 mb-sm-0 media d-flex justify-content-between flex-column mt-0">
                    <div class="pr-1 text-center">
                        <div class="d-inline-flex">
                            <i class="svg-icon svg-icon-bubble-chat-texting svg-icon-size-24 svg-icon-color-secondary"><svg
                                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path
                                        d="M20 2H4c-1.1 0-1.99.9-1.99 2l-.008 17.23c0 1.026 1.36 1.388 1.868.497L6 18h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2ZM9 10a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z">
                                    </path>
                                </svg></i>

                            <h3 class="h4 ml-1 mb-0 mr-1 ps-2 text-center">Richiedi prescrizioni</h3>
                        </div>
                    </div>

                    <div class="media-body">
                        <p class="text-muted mt-1 mb-3 m-0 mb-sm-3 text-center">Richiedi prescrizioni e condividi i
                            risultati di
                            test
                            ed analisi
                            con il tuo medico di medicina generale.</p>
                    </div>
                </div>
            </div>
            <div class="card custom-card col-md-3 justify-content-start">
                <div class=" mb-2 mb-sm-0 media d-flex justify-content-between flex-column  mt-0">
                    <div class="pr-1 text-center">
                        <div class="d-inline-flex">
                            <i class="svg-icon svg-icon-clock-filled svg-icon-size-24 svg-icon-color-secondary"><svg
                                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path
                                        d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10ZM11 8.75a.75.75 0 0 1 1.5 0v3.75h3.75a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75v-4.5Z">
                                    </path>
                                </svg></i>

                            <h3 class="h4 ml-1 mb-0 mr-1 ps-2 text-center">Promemoria via mail e SMS</h3>
                        </div>
                    </div>

                    <div class="media-body">
                        <p class="text-muted mt-1 mb-3 m-0 mb-sm-3 text-center">Ricorderai sempre le tue visite future! Ti
                            ricorderemo
                            della tua
                            visita tramite email e sms.</p>
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
                    <a class="text-white" href="https://mdbootstrap.com/">B-Doctors</a>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>