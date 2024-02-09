<template>
    <div id="app-products" class="border border-primary border-3 p-3 m-5 d-flex">
    <!-- aqui no template do component products fizamos o v-for para listar cada produto que temos que vai vim de componente
         product-->
    <AppProduct
      v-for="product in $store.state.prdotucts"
      v-bind:key="product.id"
      v-bind:product="product"
    />
 
</div>
 
</template>


<script>

import AppProduct from '@/components/Products/AppProduct.vue'
export default {
    components:{
        AppProduct
    }
  
}
</script>
