<template>
  <div id="app">
    <HeaderView/>
    <LoginView/>
  </div>
</template>

<script>
import HeaderView from "./components/HeaderView.vue"
import LoginView from "./components/LoginView.vue"


export default {
  name: 'App',
  components: {
    HeaderView,
    LoginView
  }
}
</script>

<style>
</style>
