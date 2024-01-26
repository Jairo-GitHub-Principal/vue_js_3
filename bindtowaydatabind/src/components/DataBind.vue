<template>
    <div>
   <h1  v-bind:class="{'title':true, 'title-home':isHome}">Bind</h1> <!-- title-home é a classe, e isHome é a variavel onde se armazenou o valor de v ou f, para descidir se vai aplicar o estilo naquele elemento ou não-->
   <img v-if="escolha === 1" v-bind:src="srcimg1"/>
   <img v-else-if="escolha === 2" v-bind:src="srcimg2"/>
   <img v-else v-bind:src="srcimg3"/>
</div>
<div :style="divStyle"> 
<div :class="dClass">
    
    <p v-bind:class="pClass1">
        Non doloremque nisi sed similique deserunt non illo galisum. Ut placeat asperiores qui magni recusandae est sunt reprehenderit rem quas fuga aut dignissimos omnis in iure inventore. Qui consectetur modi sit fugiat debitis hic blanditiis quas qui quam exercitationem sed minima quam.
    </p>

    <p v-bind:class="pClass2">
        Lorem ipsum dolor sit amet. Sit suscipit modi ut adipisci inventore eos nobis quasi? Et eaque voluptas qui voluptatem consequatur est unde ratione ex animi placeat in necessitatibus odit. Est quaerat sint ut harum velit et quaerat iusto ut iste obcaecati in dolores sint. Quo quos eaque aut suscipit voluptates eos quasi tempora.
    </p>
</div>
</div>
</template>

<script>
export default {

 
    data(){
    return{
        escolha:1, // ao alternar entre 1 e 3 o valor de escolha, mudara a imagem abaixo do titulo bind, isso torna o nosso  atributo dinamico
      srcimg1: "https://via.placeholder.com/600/92c952", 
      srcimg2: "https://via.placeholder.com/600/66b7d2", 
      srcimg3:"https://via.placeholder.com/600/51aa97", 

       
      // aplicar a tecnica bind ou data binding para estilizar um compnente ou elemento

      // variavel passada como valor do atributo
      isHome:true, 
      
             
      // array passado como valor do atribulto
        pClass1:['title',],
          // objeto passado como valor do atribulto no codigo abaixo
          dClass:{'divTexto':true,'divfundo':true}, 
          // abaixo implementamos um objeto, para trabalhar com o atrybuto style dentro da tag html, ou css inline
          divStyle:{'display':'flex', 'flex-direction':'row', 'justify-content':'center', 'width':'100%','text-align':'center','border':'solid 1px black'},

      // objeto passado como valor do atribulto no codigo abaixo na: na verdade temos um array de objetos
      pClass2:[{'text':true},{'text-home':true,'title':true}], // lembrando que o objeto ele tem que ter o atributo e o valor do atributot, como 'text'=== atributo e true === valor do atributo 

      
    }
}
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
.title{
    font-size:30px;
    color: blueviolet;
}
.title-home{
    font-size: 50px;
    color: blue;
}

.text{
    color:brown
}

.text-home{
    color: rgb(3, 173, 182);
}
.divTexto{
    width: 600px;
    text-align: left;
    padding: 10px;
}
.divfundo{
    background: red;
}


</style>
