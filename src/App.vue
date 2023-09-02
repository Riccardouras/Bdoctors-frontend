<script>
import AppHeader from './components/AppHeader.vue';
import HomePage from './components/HomePage.vue';
import { RouterView } from 'vue-router'

export default {
    components: {
    HomePage,
    RouterView,
    AppHeader
}
}
</script>

<template>
    <AppHeader />
    <router-view></router-view>
</template>

<style lang="scss">

    @use './style/general.scss' as *;

</style>
