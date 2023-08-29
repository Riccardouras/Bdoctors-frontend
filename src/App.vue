<script>
import HomePage from './components/HomePage.vue';
import { RouterView } from 'vue-router'

export default {
    components: {
        HomePage,
        RouterView
    }
}
</script>

<template>
    <router-view></router-view>
</template>

<style scoped></style>
