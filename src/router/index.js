import { createRouter, createWebHistory } from 'vue-router'
// import App from '../App.vue'
// import ContatosView from '../views/ContatosView.vue'
// import AcervoView from '../views/AcervoView.vue'
// import LoginView from '../views/LoginView.vue'
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('../views/HomeView.vue')
        },
        {
            path: '/contatos',
            name: 'contatos',
            component: () => import('../views/ContatosView.vue')
        },
        {
            path: '/acervo',
            name: 'acervo',
            component: () => import('../views/AcervoView.vue')
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('../views/LoginView.vue')
        },
        {
            path: '/estudante',
            name: 'estudante',
            component: () => import('../views/EstudanteView.vue')
        },
        {
            path: '/cadastro',
            name: 'cadastro',
            component: () => import('../views/CadastroView.vue')
        }
    ]
})
export default router