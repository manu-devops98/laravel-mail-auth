require('./bootstrap');

window.Vue = require('vue');
import App from './views/App.vue';
import Home from './pages/Home.vue';
import Contacts from './pages/Contacts.vue';
import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/contacts',
            name: 'contacts',
            component: Contacts
        }
    ],
});

const app = new Vue({
    el: '#app',
    render: h => h(App),
    router
});
