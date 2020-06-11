import VueRouter from "vue-router"
import Form from "@/components/Form"
import Inputs from "@/components/Inputs"
import List from "@/components/List"
import Master from "@/components/masterSlave/Master"
import Switcher from "@/components/ownControl/Switcher"
// import Cars from "@/pages/Cars"
import CarInfo from "@/pages/CarInfo"
import CarFull from "@/pages/CarFull"
import ErrorCmp from "@/pages/Error"
import AppVuex from "@/vuex/AppVuex"

const Cars = resolve => {  // Lazy loading component for better performance
    require.ensure(['@/pages/Cars'], () => {
        resolve (
            require('@/pages/Cars')
        )
    })
}

export default new VueRouter({
    routes: [
        {
            path: '',
            component: Form
        },
        {
            path: '/masterSlave',
            component: Master
        },
        {
            path: '/inputs',
            component: Inputs
        },
        {
            path: '/list',
            component: List
        },
        {
            path: '/switcher',
            component: Switcher
        },
        {
            path: '/cars',
            component: Cars,
            name: 'cars'
        },
        {
            path: '/car/:id',
            component: CarInfo,
            children: [
                {
                    path: 'full',
                    component: CarFull,
                    name: 'carFull',
                    beforeEnter (to, from, next) { // (to, from, next)
                        console.log('beforeEnter')
                        next()
                    }
                }
            ]
        },
        {
            path: '/none',
            redirect: {
                name: 'cars'
            }
        },
        {
            path: '*',
            component: ErrorCmp
        },
        {
            path: '/vuex',
            component: AppVuex
        }
    ],
    mode: 'history',
    scrollBehavior (to) { // (to, from, savedPosition)

        // if (savedPosition) {
        //     return savedPosition
        // }

        if (to.hash) {
            return { selector: to.hash }
        }

        return {
            x: 0,
            y: 0
        }
    }
})