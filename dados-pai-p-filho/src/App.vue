<template>
  <div>
    <div>
      <AlertComponent 
      v-if="showAlert"
      @close="onclose()"
      :variant="variant">
        <template v-slot:title>
          <h1>alerta</h1>
        </template>
        
        <br />
    
      </AlertComponent>
    </div>

    <div>
      <button
        style="color: aliceblue; background: red; padding: 5px" @click="perigo()" >
        alert
      </button>
      <button style="color: aliceblue; background: orange; padding: 5px" @click="cuidado()">
        warning
      </button>
      <button style="color: aliceblue; background: greenyellow; padding: 5px" @click="sussesso()">
        success
      </button>
    </div>
   
  </div>
</template>

<script>
import AlertComponent from "./components/BaseAlert.vue";

export default {
  
  name: "App",
  components: {AlertComponent},
  data(){
    return{
      variant:'',
      showAlert:true,
    }
  },

  methods:{
    sussesso(){
      this.variant = 'success'
    },
    perigo(){
      this.variant = 'danger'
    },
    cuidado(){
      this.variant = 'warning'
    },
    onclose(){
      console.log('on close')
      this.showAlert=false
    }
  }
   
 
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
