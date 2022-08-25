import {createRouter, createWebHistory} from 'vue-router'


const router = createRouter({
    history: createWebHistory(), 
    routes:[
        {
            path: '/',
            name: 'Root',
            component: import('../view/index.vue'),
            meta: {
                title: 'Root',
            }
        },
        {
            name: 'a',
            path: '/a',
            component: () => import('../view/A.vue')
        },
        {
            name: 'b',
            path: '/b',
            component: () => import('../view/B.vue')
        },
    ]
})

export default router