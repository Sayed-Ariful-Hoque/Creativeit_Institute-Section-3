
function saiful(name, start, end) {
    console.log(name + " selepeing at " + start + " to " + end)
}
saiful("saiful", "12:00pm", "10:00am")
saiful("ariful", "11:00pm", "6:00am")
saiful("fahim", "11:00pm", "")


let your = document.querySelector(".your_age")
let chak = document.querySelector(".chake_button")
const age = 21
let show = document.querySelector(".show_output")

chak.addEventListener("click", function () {
       if(your.value >= age){
        show.innerHTML = "ok tomar jonno patri dekhtachi"
       }else{
        show.innerHTML = " tomar ekhono biyer boys hoi nai paknaki ektu kom koro "
       }

})
