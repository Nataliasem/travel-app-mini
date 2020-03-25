import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home'
import About from './views/About'
import Brazil from './views/Brazil'
import Hawaii from './views/Hawaii'
import Jamaica from './views/Jamaica'
import Panama from './views/Panama'


Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/about',
            name: 'about',
            component: About
        },
        {
            path: '/brazil',
            name: 'brazil',
            component: Brazil
        },
        {
            path: '/hawaii',
            name: 'hawaii',
            component: Hawaii
        },
        {
            path: '/jamaica',
            name: 'jamaica',
            component: Jamaica
        },
        {
            path: '/panama',
            name: 'panama',
            component: Panama
        }
    ]
})
