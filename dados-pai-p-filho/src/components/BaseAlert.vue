<template>
  <div>
    <div :class="baseClass">
      <div v-if="$slots.title">
        <slot name="title" />
      </div>
      <button style="background: red; color: aliceblue; font-weight: 900" @click="onclick()">
        X
      </button>
    </div>
    <br />
  </div>
</template>

<script>
export default {
  props: {
    variant: {
      type: String,
      default: "",
    },
    text: {
      type: String,
      default: "test",
    },
  },
  computed: {
    baseClass() {
      return ["alert", this.variant ? `alert-${this.variant}` : ""];
    },
  },
  methods:{
    onclick(){
        console.log("fechou")
        this.$emit('close')
    }
  }
};
</script>

<style scoped>
.alert {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  padding: 5px;
  border-radius: 6px;
  color: gray;
  background: #ddd;
}

.alert-success {
  background: #42b983;
  color: #fff;
}
.alert-danger {
  background: red;
  color: white;
}
.alert-warning{
    background: orange;
  color: white;
}
</style>