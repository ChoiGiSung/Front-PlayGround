<template>
  <div>
    <p>{{realId}}</p>
     <p>{{realPassword}}</p>
    <p></p>
  </div>
</template>

<script>
export default {
    name : "HeaderView",
    props:[
        'realId',
        'realPassword'
    ]
}
</script>

<style>

</style>