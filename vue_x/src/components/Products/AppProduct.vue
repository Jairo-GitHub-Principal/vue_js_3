<template>
    <div class="card card-body m-3">
      <div class="row">
        <div class="col-12 m-3">
          <h3>Protudos{{ product.id }}</h3>
          <div style="text-align: left; margin:20px;">
            <h5>Id: {{ product.id }}</h5>
            <h5>Id: {{ product.name }}</h5>
            <h5>Id: {{ product.price }}</h5>
          </div>
          
        </div>
        <button @click="addProduct()">Adicionar</button>
        <button @click="removeProduct() "
               
                  >remover</button>
      </div>
    </div>
  </template>
  
  
  <script>
  export default {
    components:{

    },
    props: {
      product: Object,
    },
    methods:{
      addProduct(){  // vai trabalhar com os metodos de mutations de stored
          this.$store.commit('addProduct', this.product)
          console.log(this.product)
      },
      removeProduct(){ // vai enviar os dados para mutations em estore
         this.$store.commit('removeProduct',this.product.id)
  
      }
    }
  };
  </script>
  