// router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../components/HomePage.vue'
import AdvancedSearch from '../components/AdvancedSearch.vue'
import DoctorPage from '../components/DoctorPage.vue'

const routes = [
    { path: '/', component: HomePage },
    { path: '/advancedsearch', component: AdvancedSearch },
    { path: '/doctorpage', component: DoctorPage }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router


