<template>
  <div>
    <ul>
        <li v-for="(todoItem, index) in this.propsdata" v-bind:key="todoItem.key" >
            <i :class="{finsh:todoItem.value.visible}" v-on:click="finsh(todoItem.value)">완료</i>
            {{todoItem.value.todo}}
            <i @click="removeItem(todoItem.key,index)">삭제</i>
        </li>
    </ul>
  </div>
</template>

<script>
export default {
    name: "AppList",
    props:['propsdata'],
    methods:{
      finsh(param){
        console.log(param);
        this.$emit("finsh",param)
      },
      removeItem(key, index){
        this.$emit("removeItem",{key,index})
      }
    }
}
</script>

<style>
.finsh{
  color:red
}
</style>