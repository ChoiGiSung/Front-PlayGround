<template>
    <div>
        <span @click="clearAll">CLEAR ALL</span>
    </div>
</template>

<script>
export default {
    name: "AppFooter",
    methods:{
        clearAll(){
            this.$emit("clearAll")
        }
    }
}
</script>

<style>

</style>