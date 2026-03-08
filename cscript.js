const lines = [
"Keep shining, the world needs your light ✨",
"You make every day brighter",
"Your smile can defeat any bad day",
"You are stronger than you think",
"Never forget how amazing you are ❤️"
]

function pop(balloon){

balloon.innerHTML="💥"

let random = Math.floor(Math.random()*lines.length)

document.getElementById("message").innerText=lines[random]

}