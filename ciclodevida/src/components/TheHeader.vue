<template>
    <header>
        <h1 class="header">Header</h1>
    </header>
</template>

<script>
export default{
    mounted(){ // montado
          window.addEventListener('resize',this.resize)
        },
    // antes de destruir as libs
    beforeUnmount(){
        console.log('beforeUnmount')
        window.removeEventListener('resize',this.resize)
    },// libs destruidas
    unmounted(){
        console.log('unmounted')
    },

    methods:{
        resize($evt){
            console.log($evt)
        }
    }

}
</script>

<style>
    .header{
        background: #000;
        color: #fff;
    }

</style>