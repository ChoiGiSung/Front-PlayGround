<template>
  <div>
    <ul>
      <li v-for="item in todoList" :key="item">{{item}}</li>
    </ul>
  </div>
</template>

<script>
export default {
    name: "TodoList",
    data: function(){
      return {
        todoList:[]
      }
    },
    created: function(){
      for(let i = 0; i < localStorage.length; i++){
         let item = localStorage.key(i)
         this.todoList.push(item)
      }
    }
    ,
    methods : {

    }

}
</script>

<style>

</style>