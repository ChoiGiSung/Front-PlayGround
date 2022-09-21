<template>
   <div>
    <b-form>
      <b-form-group
        description="아이디을 씁시다."
        label= "아이디"
      >
        <b-form-input
          id="input-1"
          type="text"
          placeholder="아이디"
          v-model="userId"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" 
       label="비밀번호"
       description="비밀번호를 씁시다."
       label-for="input-2">
        <b-form-input
          id="input-2"
          placeholder="비밀번호를 씁시다"
          v-model="userPw"
          type="password"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-4">
        <b-form-checkbox-group
          id="checkboxes-4"
        >
          <b-form-checkbox value="male">남성</b-form-checkbox>
          <b-form-checkbox value="female">여성</b-form-checkbox>
        </b-form-checkbox-group>
      </b-form-group>

      <b-button type="button" @click="loginRequest">Submit</b-button>
      <b-button type="reset">Reset</b-button>
    </b-form>
    <b-card class="mt-3">
        <p>card</p>
    </b-card>
  </div>

</template>

<script>
export default {
    name : "LoginView",
    data(){
      return{
        userId:'',
        userPw:''
      }
    },
    methods:{
      loginRequest(){
        const url = '/api/authaccount/registration'
        this.$http.post(url, this.getUserJson,{
          headers: {
            "Content-Type": `application/json`,
          },
        })
        .then((result) => {
          alert(result.data.message)
          this.redirectPage()
        }).catch(function(error){
          console.log(error);
        })
      },
      redirectPage(){
          this.$router.push('/post')
      }
    },
    computed:{
      getUserJson(){
        return JSON.stringify(
          {
            "name" : this.userId,
            "password" : this.userPw,
            "email" : this.userId + '@naver.com'
          }
        )
      }
    }

}
</script>

<style>

</style>