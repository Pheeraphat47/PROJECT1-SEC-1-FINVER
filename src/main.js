import './assets/main.css';
import { createApp } from 'vue';
import App from './App.vue';
import Gender from './pages/Gender.vue';
import { createRouter, createWebHistory } from 'vue-router';
import FemaleCard from "./pages/FemaleCard.vue";
import MaleCard from "./pages/MaleCard.vue";


const routes = [
    { path: '/', name: "Gender" , component: Gender },
    { path: '/Female', name: "FemaleCard", component: FemaleCard },
    { path: '/Male',  name: "MaleCard" ,component: MaleCard },
];

const router = createRouter({
    history: createWebHistory(),
    routes
})



createApp(App).use(router).mount('#app')
