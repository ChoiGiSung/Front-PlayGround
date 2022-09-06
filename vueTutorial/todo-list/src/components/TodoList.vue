<template>
  <div>
    <ul>
      <li v-for="(item,index) in todoList" :key="item" >
        <i :class="{finsh:item.complete}" @click="finsh(item)">완료</i>
        {{item.item}}
        <i @click="remove(item.item,index)">삭제</i>
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
         let item = localStorage.getItem(localStorage.key(i))
         this.todoList.push(JSON.parse(item))
      }
    }
    ,
    methods : {
      remove(item,index){
        localStorage.removeItem(item)
         this.todoList.splice(index,1)
      },
      finsh(item){
        console.log(item)
        item.complete =  !item.complete
        localStorage.removeItem(item)
        localStorage.setItem(item.item,JSON.stringify(item))
      }
    }

}
</script>

<style>
.finsh{
  color: red;
}
</style>