// 단어 변경
//1. 단어 입력 시 이벤트로 결과 변경

const $ = document.querySelector.bind(document)

const defualtTime = 5
const word = $(".word")
const input = $(".input")
const socoreView = $(".score")
const timeView = $(".time")

let time = defualtTime
let timeInterval
let isPlaying = true
let words = []
let score = 0

init()

function init(){
    initWords()
    input.addEventListener("input",inputHandler.bind())
    timeInterval = setInterval(countDown,1000)
}

function initWords(){
    axios.get('https://random-word-api.herokuapp.com/word?number=10')
    .then(function (response) {
      words = response.data
      console.log(response);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
  
}

function inputHandler(){
    let result = wordMatch(word.innerText, input.value)
    if(result){
        score += 1
        socoreView.innerText = score
        input.innerText = ""
        time = defualtTime
        changeWord()
    }
}

function wordMatch(text, target){
   return text === target
}

function countDown(){
    time > 0 ? time-- : isPlaying =false
    if(!isPlaying){
        clearInterval(timeInterval)
        alert("game over")
    }
    timeView.innerText = time
 }

function changeWord(){
    const random = Math.floor(Math.random() * words.length)
    word.innerText = words[random]
}