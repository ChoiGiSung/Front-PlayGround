<template>
  <TodoHeader></TodoHeader>
  <TodoInput></TodoInput>
  <TodoList v-bind:propsdata="todoList" v-on:removeItem="remove"></TodoList>
  <TodoFooter></TodoFooter>

</template>

<script>
import TodoHeader from './components/TodoHeader.vue'
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'
import TodoFooter from './components/TodoFooter.vue'

export default {
  name: 'App',
  components: {
    TodoHeader,TodoInput,TodoList,TodoFooter
  },
  data: function(){
    return {
      todoList:[]
    }
  },
  methods:{
    remove:function(item,index){
          localStorage.removeItem(item)
         this.todoList.splice(index,1)
    }
  },
  created: function(){
    for(let i = 0; i < localStorage.length; i++){
        let item = localStorage.getItem(localStorage.key(i))
        this.todoList.push(JSON.parse(item))
    }
}
}
</script>

<style>

</style>
