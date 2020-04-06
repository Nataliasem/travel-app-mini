import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home'
import store from './store'



Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
            props: true
        },
        {
            path: '/destination/:slug',
            name: 'DestinationDetails',
            props: true,
            component: () => import(/*webpackChunkName: 'DestinationDetails'*/ './views/DestinationDetails'),
            children: [
                {
                    path: ":experienceSlug",
                    name: "experienceDetails",
                    props: true,
                    component: () => import(/*webpackChunkName: 'ExperienceDetails'*/ './views/ExperienceDetails')
                }
            ],
            beforeEnter: (to, from, next) => {
                let exists = store.destinations.find(
                  destination => destination.slug === to.params.slug
                );
                if(exists){
                    next()
                } else {
                    next({name: "notFound"})
                }
            }
        },
        {
            path: "404",
            alias: "*",
            name: "notFound",
            component: () => import(/*webpackChunkName: 'NotFound'*/ './views/NotFound')
        }
    ]
})
