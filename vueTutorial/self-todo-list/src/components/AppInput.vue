<template>
    <div>
        <input  type="text" v-model="inputData">
        <button  v-on:click="addTodoItem">추가</button>
    </div>
</template>

<script>
export default {
    name: "AppInput",
    data(){
        return {
            inputData: ""
        }
    },
    methods:{
        addTodoItem(){
            if(this.inputData != ""){
                this.$emit("addTodoItem",this.inputData)
                this.inputData = ""
            }
        }
    }
}
</script>

<style>

</style>