var n = Math.floor((Math.random() * 6)+ 1)
var random1 = "images/dice" + n + ".png"
document.querySelectorAll("img")[0].setAttribute("src",random1)
var n2 = Math.floor((Math.random() * 6 ) + 1)
var random2 = "images/dice" + n2+ ".png"
document.querySelectorAll("img")[1].setAttribute("src",random2)
if (random1 > random2) {
    document.querySelector("h1").innerHTML = "player 1 wins !!"
}
else if ( random1 < random2) {
    document.querySelector("h1").innerHTML = "player 2 wins !!"

}
else {
    document.querySelector("h1").innerHTML = "match draw !!"
}