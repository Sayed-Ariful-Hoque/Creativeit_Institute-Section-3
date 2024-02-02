
let player_name_one = document.querySelector(".player_name_one")
let player_submit_one = document.querySelector(".player_submit_one")
let player_one = document.querySelector(".player_one")
let player_tow = document.querySelector(".player_tow")
let error = document.querySelector(".error")

player_submit_one.addEventListener("click", function(){
    if(player_name_one.value == ""){
        error.innerHTML ="plase enter your name"
    }else{
    player_tow.style.display = "flex"
    player_one.style.display = "none"
}
})
