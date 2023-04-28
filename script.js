console.log("loaded");

var scene = document.getElementById('animado');
var parallaxInstance = new Parallax(animado);

document.getElementById('back1').addEventListener('ended', myHandler1, false);
function myHandler1(e) {
    console.log('ended');
    setTimeout(function () {
        document.getElementById('back1').play();
    }, 4000); 
}

document.getElementById('back2').addEventListener('ended', myHandler2, false);
function myHandler2(e) {
    console.log('ended');
    setTimeout(function () {
        document.getElementById('back2').play();
    }, 3000); 
}

document.getElementById('top1').addEventListener('ended', myHandler3, false);
function myHandler3(e) {
    console.log('ended');
    setTimeout(function () {
        document.getElementById('top1').play();
    }, 2000); 
}