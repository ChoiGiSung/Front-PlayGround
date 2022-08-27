
const $ = document.querySelector.bind(document)
let piecked = null
let pieckedIndex = null

const listView = $(".list")

console.log(listView)
listView.addEventListener("dragstart",(e)=>{
    console.log(e)
    piecked = e.target
    pieckedIndex = [...piecked.parentNode.children].indexOf(piecked)
})

listView.addEventListener("drop",(e)=>{
    console.log(e)
    const obj = e.target
    const index = [...obj.parentNode.children].indexOf(obj)
    if(index > pieckedIndex){
        obj.after(piecked)
    }else{
        obj.before(piecked)
    }
})

listView.addEventListener("dragover",(e)=>{
    e.preventDefault()
})