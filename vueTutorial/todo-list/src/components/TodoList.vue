<template>
  <div>
    <ul>
      <li v-for="(item,index) in todoList" :key="item" >
        {{item}}
        <i @click="finsh(item,index)">완료</i>
      </li>
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
      finsh(item,index){
        localStorage.removeItem(item)
         this.todoList.splice(index,1)
      }
    }

}
</script>

<style>

</style>