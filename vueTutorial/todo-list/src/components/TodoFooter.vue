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
        localStorage.clear()
      }
    }
}
</script>

<style>

</style>