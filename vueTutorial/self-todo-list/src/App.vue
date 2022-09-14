<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <AppHeader></AppHeader>
    <AppInput></AppInput>
    <AppList></AppList>
    <AppFooter></AppFooter>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue'
import AppInput from './components/AppInput.vue'
import AppList from './components/AppList.vue'
import AppFooter from './components/AppFooter.vue'

export default {
  name: 'App',
  components: {
    AppHeader,
    AppInput,
    AppList,
    AppFooter
  }
}
</script>

<style>

</style>
