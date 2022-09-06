<template>
  <div>
    <transition-group name="list" tag="ul">
      <li v-for="(item,index) in this.propsdata" :key="item.item" >
        <i :class="{finsh:item.complete}" @click="finsh(item)">완료</i>
        {{item.item}}
        <i @click="remove(item.item,index)">삭제</i>
      </li>
    </transition-group>
  </div>
</template>

<script>
export default {
    name: "TodoList",
    props:[
      'propsdata'
    ],
    methods : {
      remove(item,index){
        this.$emit('removeItem',item,index)
      },
      finsh(item){
        this.$emit('finsh',item)
      }
    }

}
</script>

<style>
.finsh{
  color: red;
}
/* transition css */
.list-enter-active, .list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
</style>