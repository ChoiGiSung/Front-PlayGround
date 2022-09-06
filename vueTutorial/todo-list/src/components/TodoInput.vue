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
        var obj = {complete : false, item: this.input}
        localStorage.setItem(this.input,JSON.stringify(obj))
        this.initInput()
      },

    }
}
</script>

<style>

</style>