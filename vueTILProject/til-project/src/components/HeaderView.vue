<template>
  <div>
  <b-nav>
    <b-nav-item active>
      <router-link to="/login">로그인</router-link>
    </b-nav-item>
    <b-nav-item>
      <router-link to="/post">글쓰기</router-link>
    </b-nav-item>
    <b-nav-item>
      <router-link to="/list">글 목록</router-link>
    </b-nav-item>
  </b-nav>

  
</div>
</template>

<script>
export default {
    name : "HeaderView"
}
</script>

<style>

</style>