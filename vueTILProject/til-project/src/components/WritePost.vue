<template>
  <div>
    <b-container>
        <b-row class="mt-2">
        <b-col sm="10">
          <b-form-textarea
            id="textarea-large"
            size="lg"
            placeholder="Large textarea"
            v-model="text"
          ></b-form-textarea>
        </b-col>
      </b-row>
      <b>
        <button v-on:click="addPost">글 쓰기</button>
      </b>
    </b-container>
  </div>
</template>

<script>
export default {
    name : "WritePost",
    data(){
      return {
        text: ''
      }
    },
    methods:{
      addPost(){
        let user = this.getLoginUser()
        this.$emit('addPost',{user:user,text : this.text})
        this.text = ''
      },
      getLoginUser(){
        return localStorage.getItem('user')
      }
    }
}
</script>

<style>

</style>