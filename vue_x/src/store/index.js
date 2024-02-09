import { createStore } from 'vuex'

export default createStore({
  state: {

    user: { // aqui eu fiz uma inserção de dados
      first_name: 'Jon',
      last_name: 'Snow',
      email: 'jons@snow.com',
    },
    prdotucts: [
      {
        id: 1,
        name: 'Bola',
        price: 100
      },
      {
        id: 2,
        name: 'Chuteira',
        price: 200
      },
      {
        id: 3,
        name: 'Meião',
        price: 50
      }
    ],
    cart: []
  },
  mutations: { // aqui faremos atualização dos dados, que estão sendo exibidos
    storedUser(state, newUser) {
      state.user = newUser
      console.log('storeUser', state.user, newUser)
    },
    addProduct(state, data) { // recebe dados do compnente AppProduct para add no cart
      state.cart.push(data)
      console.log("carrinho", this.cart)

    },
    removeProduct(state, id) {// recebe dados do compnente AppProduct para remover do cart
      const idx = state.cart.findIndex(obj => obj.id === id)
      state.cart.splice(idx, 1)

    }

  },
  getters: { // funciona igual a computed
      total(state){
        return state.cart.reduce((total,item)=>total += item.price,0)//  com a função reduce() receberemos as variaveis total e item, onde faremos a somatoria dos valores  de itens, e e armazenaremos essa somatorioa em total
      }
  },
  actions: {
  },

  modules: {
  }
})
