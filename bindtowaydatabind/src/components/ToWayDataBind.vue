<template>
    <div class="Container">
    <div class="Container">
        <h1>To way data bind</h1>
        <h2>v-model -> formulario</h2>
        <label> nome:</label>

        <input type="text" v-model="name"><!--o v model possibilita o duplo caminho, do to way data bind, para ele passamos a variavel name, e note que ja atribuimos um valor para name, que simula um dado interno e pelo input na tela de usuario recebemos dados experno para atualizar ou mudar o valor da variavel name -->

        <br>
   
         
        <h4>{{ name }}</h4>

    </div>

    <div class="Container">
        <select v-model="sports">
            
            <option value="">escolha</option>
            <option value="futebol">Futebol</option>
            <option value="skate">Skate</option>
            <option value="tenis">Tenis</option>
        </select>
        <h3>{{ sports }}</h3>
    </div>

    <div class="Container">
        <label>News latter</label><br>
        <input v-model="newslatter" type="radio" value="sim">sim
        <input v-model="newslatter" type="radio" value="nao">não
        <br>
        <h3>{{ newslatter }}</h3>
    </div>

    <div class="Container">
        <label>Contrato</label><br>
        <input v-model="contract" type="checkbox"> Aceira nosso contrato
       
        <br>
        <h3>{{ contract }}</h3>
    </div>


    <div class="Container">
        <label>Contrato</label><br>
        <input v-model="colors" type="checkbox" value="azul"> Azul
        <input v-model="colors" type="checkbox" value="amarelo"> Amarelo
        <br>
        <h3>{{ colors }}</h3>
    </div>
</div>
</template>
  
<script>
export default {

    data() {
        return {
            name: 'jhon snow', // variavel com um valoro atribuido
            sports:'',
            newslatter:'selecine sim ou não ',
            contract:'false',// predefinimos a check box como false, e quando selecionamos ela fica true
            colors:[],
        }
    }
}
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.Container {
    border: solid 1px black;
}
</style>
  