<template>
    <div>
        <h1>홈 {{title1}}!</h1>
        <input type="text" v-model="input1">
        <button type="button" @click="getData">Get</button>
        <button type="button" @click="setData">Set</button>

        <select class="form-control" v-model="region" @change="changeRegion" v-show="selectShow">
            <option :key="i" :value="d.name" v-for="(d,i) in options">
                {{d.title}}
            </option>
        </select>

        <table v-if="tableShow">
            <tr :key="i" v-for="(d,i) in options">
                <td>{{d.name}}</td>
                <td>{{d.title}}</td>
            </tr>
        </table>
    </div>
</template>
<script>

export default {
  name: "Home",
  data(){
    return{
        title1 : "타이틀1",
        title2 : "타이틀2",
        input1 : "인풋1",
        options: [
            {name : "S" ,title : "서울"},
            {name : "J" ,title : "제주"},
            {name : "B" ,title : "부산"},
        ],
        region : "B",
        tableShow: false,
        selectShow: true
    }
  },
  methods:{
    getData(){
        alert(this.input1)
    },
    setData(){
        this.input1 = "12345"
    },
    changeRegion(){
        alert(this.region)
    }
  },
  watch:{
    input1(){
        alert("데이터 바뀜")
    }
  }
}
</script>
