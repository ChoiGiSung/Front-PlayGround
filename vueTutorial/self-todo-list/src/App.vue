<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <AppHeader></AppHeader>
    <AppInput v-on:addTodoItem="addTodoItem"></AppInput>
    <AppList v-bind:propsdata="todoList" v-on:finsh="finsh" v-on:removeItem="removeItem"></AppList>
    <AppFooter v-on:clearAll="clearAll"></AppFooter>
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
          value: {
            visible: true,
            todo: "defaule"
          }
        }
      ]
    }
  },
  created() {
    for(let i = 0; i < localStorage.length; i++){
      let storageVaule = localStorage.getItem(localStorage.key(i))
      let jsonValue = JSON.parse(storageVaule)
      this.todoList.push({key: jsonValue.todo, value: jsonValue})
    }
  },
  methods:{
    addTodoItem(input){
      let obj = {key: input, value: {visible: true, todo: input}}
      localStorage.setItem(input, JSON.stringify(obj.value))
      this.todoList.push(obj)
    },
    clearAll(){
      this.todoList = []
      localStorage.clear()
    },
    finsh(value){
      value.visible = !value.visible
      localStorage.removeItem(value.todo)
      localStorage.setItem(value.todo,JSON.stringify(value))
    },
    removeItem(value){
      this.todoList.splice(value.index)
      localStorage.removeItem(value.key)
    }
  }
}
</script>

<style>

</style>
