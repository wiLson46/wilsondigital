console.log("loaded");

var scene = document.getElementById('animado');
var parallaxInstance = new Parallax(animado);

document.getElementById('back1').addEventListener('ended', myHandler, false);
function myHandler(e) {
    console.log('ended');
    setTimeout(function () {
        document.getElementById('back1').play();
    }, 5000);
    
}
