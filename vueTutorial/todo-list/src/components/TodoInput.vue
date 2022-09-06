<template>
  <div>
    <input type="text" v-model="input" @keyup.enter="saveInput">
    <ModalView v-if="modalIsShow" @close="modalIsShow = false">
      <template v-slot:header>
        경고
        <button @click="modalIsShow = !modalIsShow">닫기</button>
      </template>
      <template v-slot:footer>
        슬롯이 변경
      </template>
    </ModalView>
    <button @click="saveInput">추가</button>
  </div>
</template>

<script>
import ModalView from './common/ModalView.vue'

export default {
    name: "TodoInput",
    data: function(){
      return{
        input:"",
        modalIsShow: false
      }
    },
    components:{
      ModalView
    },
    methods:{
      saveInput(){
        if(this.input !== ''){
          this.$emit('saveInput',this.input)
          this.initInput()
        }else{
          this.modalIsShow = !this.modalIsShow
        }

      },
      initInput(){
        this.input = ""
      }

    }
}
</script>

<style>

</style>