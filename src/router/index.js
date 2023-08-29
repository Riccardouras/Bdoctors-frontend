// router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../components/HomePage.vue'
import AdvancedSearch from '../components/AdvancedSearch.vue'

const routes = [
    { path: '/', component: HomePage },
    { path: '/advancedsearch', component: AdvancedSearch }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router


