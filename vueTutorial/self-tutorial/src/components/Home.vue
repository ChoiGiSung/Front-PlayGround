
<template>
  <div>
    <h1>홈{{title1}}</h1>
    <div>
        <input type="text" v-model="input1">
        <button type="button" @click="getData" v-bind:id="vid">추가</button>
        <button type="button" @click="setData">setData</button>
        <select v-model="defaultOption" @change="changeR" v-if="true">
            <option :key="i" v-for="(d,i) in options" :value="d.name">{{d.title}}</option>
        </select>
        <table v-show="true">
            <tr :key="i" v-for="(d,i) in options">
                <td>{{d.name}}</td>
                <td>{{d.title}}</td>
            </tr>
        </table>
    </div>
  </div>
</template>

<script>
export default {
        name: "Home",
        data(){
            return{
                title1 : "title1",
                options:[
                    {name:"부산",title:"busan"},
                    {name:"서울",title:"seoul"},
                    {name:"제주",title:"jeju"},
                ],
                defaultOption : "제주",
                input1 : "input",
                vid: "vid"
            }
        },
        methods:{
            getData(){
                alert(this.input1)
            },
            setData(){
                this.input1 = "sss"
                this.vid = "vvid"
            },
            changeR(){
                alert("체인지")
            }
        },
        watch:{
            input1(){
                alert("데이터 바뀜")
            }
        }


}
</script>

<style>
.vid{
    background-color: blue;
}
</style>
