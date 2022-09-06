<template>
  <div>
    <p @click="clearAll">clear all</p>
  </div>
</template>

<script>
export default {
    name: "TodoFooter",
    methods: {
      clearAll(){
        this.$emit('clearAll')
      }
    }
}
</script>

<style>

</style>