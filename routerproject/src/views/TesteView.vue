<template>
    <main>
    <div class="testeView">
        <h1>teste view</h1>
    </div>
    <section  >
        <pre>
            {{ $route}}
        </pre>

        <button @click="login">login</button>
    </section>
</main>

</template>

<script>


export default{
    
    created(){
        console.log(this.$router,"router") // Obs.: o router traz informação da rota, e das ferramentas de roteamento, ou seja: tras as funcionalidades do esquema de roteamento
        console.log(this.$route,"route") // traz apenas iinformação sobre as rotas, ou seja: é o objeto da rota attual
    },

    methods:{
        login(){
            this.$router.push('/') //este codigo faz o redirecionamento da pagina para a home page, ('/') esse é o camiiinho defina na nossa rota para nossa home page
            console.log("chegou")
        }
    }



}
</script>

<style scoped>

</style>