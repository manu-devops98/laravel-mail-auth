/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');
Vue.use(VueRouter);
import App from './views/App.vue';
import Home from './pages/Home.vue';
import Contacts from './pages/Contacts.vue';
import VueRouter from 'vue-router';

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            href: 'home',
            component: Home
        },
        {
            path: '/contacts',
            href: 'contacts',
            component: Contacts
        }
    ],
});

const app = new Vue({
    el: '#app',
    render: h => h(App),
});
