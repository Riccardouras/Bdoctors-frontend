// main.js
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import './style/general.scss'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import HomePage from './components/HomePage.vue'
import AdvancedSearch from './components/AdvancedSearch.vue'
import DoctorPage from './components/DoctorPage.vue'
import AboutUs from './components/AboutUs.vue'


const routes = [
    { path: '/', component: HomePage },
    { path: '/advancedsearch', component: AdvancedSearch },
    { path: '/doctorpage/:doctorId', component: DoctorPage },
    { path: '/aboutus', component: AboutUs }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

const app = createApp(App)
app.use(router)
app.mount('#app')

