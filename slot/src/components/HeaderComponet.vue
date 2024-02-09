<template>
  <header class="header">
    <h1 class="title" 
        v-if="$slots.title"> <!--essa linha faz com que o elemento h1 somente seja carregado no DOM se essa condição for verdadeira isso iimped que haja um elemento vazio sendo carregado na pagina-->
              <slot name="title" />
    </h1>

    <div class="description">
      <slot name="description" />
    </div>

    <div class="content">
      <h4><slot /></h4>
      <!--caso o slote não tenha um atributo name definido, ele tera um corportamento padrão-->
    </div>
  </header>
</template>

<script>
export default {

    mounted(){
        //console.log(this.$el) // me da acesso que me possibilita ver a estrutura DOM dos elementos do meu template
        console.log(this.$slots)// essa linha da suporte para definirmos o carregamento dos slot na pagina, atravez do objeto this.slot podemos determinar um comportamento do slot dentro do template
    }
};
</script>

<style scoped>
.header {
  background: #000;
  color: #fff;
}
</style>