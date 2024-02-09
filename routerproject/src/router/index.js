import AboutViewVue from '@/views/AboutView.vue'
//import { createRouter, createWebHashHistory } from 'vue-router' // createWebHashHistory esse codigo ele traz um tipo de link que não é muito amiigavel, devido as # tag que ele inserle no link, para contornar iisso mudamos o codigo createWebHashHistory para createWebHistory, observe o resultado no liink com o codigo que implementamos abaixo
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView // carregamento normal, para esse carregamento é nescessario importar o componente no topo da pagiina
  },
  {
    path: '/sobre',
    name: 'about',
    
    component:AboutViewVue // carragamento normal, 
  },

  {
    path:'/testeView',
    name:'testeView',
    component:()=> import('../views/TesteView.vue') // esse é o carregamento lazy-loading , para esse tipo de carregamento note
                                                    // que o import esta sendo feito aqui mesmo, na linha de decalaração do component, não é nescessario importa-lo no topo da pagiina  
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
