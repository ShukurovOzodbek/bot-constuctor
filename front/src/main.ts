import { createApp } from 'vue'
import './style.css'
// @ts-ignore
import App from './App.vue'
import {createRouter, createWebHistory} from "vue-router";
// @ts-ignore
import HomePage from './views/HomePage.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: "/", component: HomePage, name: "home"}
    ]
})

const app = createApp(App)
app.use(router)
app.mount('#app')
