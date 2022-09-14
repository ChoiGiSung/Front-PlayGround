<template>
  <div>
    <ul>
        <li v-for="todoItem in this.propsdata" v-bind:key="todoItem.key" >
            {{todoItem.value}}
        </li>
    </ul>
  </div>
</template>

<script>
export default {
    name: "AppList",
    props:['propsdata']
}
</script>

<style>

</style>