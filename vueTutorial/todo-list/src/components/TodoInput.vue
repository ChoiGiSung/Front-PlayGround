<template>
  <div>
    <input type="text" v-model="input" @keyup.enter="saveInput">
    <button @click="saveInput">추가</button>
  </div>
</template>

<script>
export default {
    name: "TodoInput",
    data: function(){
      return{
        input:""
      }
    },
    methods:{
      initInput(){
        this.input = ""
      },
      saveInput(){
        localStorage.setItem(this.input,this.input)
        this.initInput()
      },

    }
}
</script>

<style>

</style>