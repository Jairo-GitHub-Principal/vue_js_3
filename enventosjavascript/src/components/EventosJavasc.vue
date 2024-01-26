<template>
    <h1> Eventos java script</h1>
    <button v-on:click="onclick()"> <!-- a diretiva v-on pode ser substituida po @-->
     Enviar
     </button> <br>
     <button @:click="onclick()">diretiva v-on: substituida por @</button>
</template>

<script>
export default{
    data(){
        return{

        }
    },

    methods:{
        onclick(){
            console.log('click');
            alert("teste de evento de click");
        }
    }
}
</script>

<style>
</style>