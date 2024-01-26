<template>
    <div>
        <h4>{{ user.first_name }} {{ user.last_name }}</h4>

    </div>

    <button @click="click">click</button>
    <p> abaixo temos o uso de propriedades computadas</p>
    <div><h4>{{ fullName }}</h4></div>
</template>

<script>
export default{
    data(){
        return{
            user:{ // objeto user
                first_name:'Jon', // propriedades do objeto
                last_name:'Snow'
            }
        }
    },
    // propriedades compudadas
    computed:{
         fullName(){ 
            return `${this.user.first_name} ${this.user.last_name}` // template string ou interpolação
        }
    },


    methods:{
        click(){
            console.log(this.user)
        }
    }
}
</script>

<style>
</style>