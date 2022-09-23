<template>
  <div id="app">
    <HeaderView/>
    <router-view></router-view>
  </div>
</template>

<script>
import HeaderView from "./components/HeaderView.vue"

export default {
  name: 'App',
  data(){
    return{
      posts:[]
    }
  },
  components: {
    HeaderView,
  },
  methods:{
    addPost(){
      console.log("111");
    }
  }
}
</script>

<style>
</style>
