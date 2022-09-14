<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <AppHeader></AppHeader>
    <AppInput v-on:addTodoItem="addTodoItem"></AppInput>
    <AppList v-bind:propsdata="todoList"></AppList>
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
  },
  data(){
    return{
      todoList:[
        {
          key:"1",
          value: "ss"
        }
      ]
    }
  },
  methods:{
    addTodoItem(input){
      let obj = {key: input, value: input}
      this.todoList.push(obj)
    }
  }
}
</script>

<style>

</style>
