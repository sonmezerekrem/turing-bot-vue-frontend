import { createApp } from 'vue';
import App from './App.vue';
import './assets/css/tailwind.css';

import {createRouter, createWebHistory} from "vue-router";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import Commands from './views/Commands';

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/about",
        name: "About",
        component: About,
    },
    {
        path: "/commands",
        name: "Commands",
        component: Commands
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

createApp(App).use(router).mount('#app');
