

var randumNumber1 = Math.floor((Math.random() * 6 + 1))
document.querySelector(".img1").setAttribute("src", "images/dice" + randumNumber1 + ".png");



var randumNumber2 = Math.floor((Math.random() * 6 + 1))
document.querySelector(".img2").setAttribute("src", "images/dice" + randumNumber2 + ".png");


document.addEventListener('keyup', function (e) {
    if (e.keyCode == 13)
        window.location.reload();
})


if (randumNumber1 === randumNumber2) {
    document.querySelector("h1").innerHTML = "⭐Draw!⭐";
}
if (randumNumber1 > randumNumber2) {
    document.querySelector("h1").innerHTML = "⭐Player1 win!";
}
if (randumNumber1 < randumNumber2) {
    document.querySelector("h1").innerHTML = "Player2 win⭐!";
}