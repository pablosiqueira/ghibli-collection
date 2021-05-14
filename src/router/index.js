import { createWebHistory, createRouter } from 'vue-router'

import Home from '@/views/Home'
import Films from '@/views/Films'
import Details from '@/views/Details'
import Characters from '@/views/Characters'
import FilmsTable from '@/views/FilmsTable'
import Error404 from '@/views/Error404'


const routes =[
        {
        name: 'Films',
        path: '/films',
        component: Films,
        props: (route) => ({ page: route.query.page }) ,
        meta: {
          auth: true,
          title: 'Films'
        }
        },
        {
          name: 'Details',
          path: '/films/details',
          component: Details,
          props: (route) => ({ id: route.query.id }),
        },
        {
        name: 'Home',
        path: '/home',
        component: Home,
        },
        {
          name: 'Characters',
          path: '/characters',
          component: Characters,
          meta: {
            auth: true,
            title: 'Characters'
          }
        },
        {
          name: 'FilmsTable',
          path: '/films/table',
          component: FilmsTable,
          meta: {
            auth: true,
            title: 'Films Table'
          }
        },
        {
        path: '/',
        redirect: '/home',
        },
        {
          path: '/:pathMatch(.*)*',
          component: Error404,
          meta: {
            auth: true,
            title: 'Page Not Found'
          }
          },
        ]

  const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router