<template>
    <h3>{{ this.tituloqueaparecenoh3componenteAppProducts("j") }}</h3> 
    
</template>

<script>
import CalculateDiscountMixins from './CalculateDiscountMixins.vue';
    export default{
        
        mixins:[CalculateDiscountMixins], // injetamos o CalculateDiscountMixins dentro do mixins[], que nos possibiliita extender as funcionaliidade desse component, para o comonente AppProdutcs
        created(){
            this.calculateDiscount() //aquii estamos chamando uma função do coponente AppProducts e estamos usando a mesma direto dentro do template do compnente AppProduct, e assim exibimos o conteudo do compnente 
                                     //  CalculateDiscountMixins   sem precisar chamar o componente dentro do template, do component AppProducts
            this.tituloqueaparecenoh3componenteAppProducts("Produto_mixins"); // -/--/--
        },

       
        }
        
        
    

</script>

<style scoped>

</style>