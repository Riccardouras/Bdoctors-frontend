<script>
import AppFooter from './components/AppFooter.vue';
import AppHeader from './components/AppHeader.vue';
import HomePage from './components/HomePage.vue';
import { RouterView } from 'vue-router'

export default {
    components: {
    HomePage,
    RouterView,
    AppHeader,
    AppFooter
}
}
</script>

<template>
    <AppHeader />
    <router-view></router-view>
    <AppFooter />
</template>

<style lang="scss">

    @use './style/general.scss' as *;

</style>
