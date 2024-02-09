<script>
    // criaremos aqui um mixin e para isso precisamos apenas o escopo das tags script

    export default{
        titulo:'',
        methods:{
            calculateDiscount(){
                console.log('calculateDiiscount mixins')
            },
            tituloqueaparecenoh3componenteAppProducts(){
                
                return{
                    titulo:'Produto_Mixins_no_projeto composition api'
                }
            }
        }
    }

</script>