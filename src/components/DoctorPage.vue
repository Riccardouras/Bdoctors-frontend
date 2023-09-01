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

<template></template>

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
}
</style>