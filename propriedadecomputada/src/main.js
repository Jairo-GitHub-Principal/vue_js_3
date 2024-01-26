import { createApp } from 'vue'
import App from './App.vue'
//import PropriedadeComputadaVue from './components/PropriedadeComputada.vue' // importamos o componente principal onde os outros componentes serão importados

//window.app = createApp(PropriedadeComputadaVue).mount('#app')// e montamos esse componente como tela inicial, ou como uma home principal observe que aqui nos fizemos como pagina principal inicial o conteudo do nosso componente propriedades computadas e não o componete App


window.app=createApp(App).mount('#app')


