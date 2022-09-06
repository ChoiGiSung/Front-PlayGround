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
      saveInput(){
        this.$emit('saveInput',this.input)
        this.initInput()
      },
      initInput(){
        this.input = ""
      }

    }
}
</script>

<style>

</style>