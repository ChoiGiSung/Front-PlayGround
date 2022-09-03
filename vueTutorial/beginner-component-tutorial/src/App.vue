<template>
  <input type="text" v-model="id">
  <input type="text" v-model="password">
  <HeaderView v-bind:realId="id"
              v-bind:realPassword="password"
    ></HeaderView>
</template>

<script>
import HeaderView from "./components/HeaderView"

export default {
  name: 'App',
  components: {
    HeaderView
  },
  data : function(){
    return{
      id: "",
      password: ""
    }
  }
}
</script>


