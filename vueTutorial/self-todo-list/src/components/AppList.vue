<template>
  <div>
    <ul>
        <li v-for="todoItem in this.propsdata" v-bind:key="todoItem.key" >
            <i :class="{finsh:todoItem.value.visible}" v-on:click="finsh(todoItem.value)">완료</i>
            {{todoItem.value.todo}}
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
      }
    }
}
</script>

<style>
.finsh{
  color:red
}
</style>