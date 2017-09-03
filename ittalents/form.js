function changeBg() {
    document.getElementById("mainfieldset").style = "border: 1px solid red";
}
changeBg();
function lastName() {
    document.getElementById("lastname").style = "background-color : green; color:white";
}

function changeFormBgRed() {
    document.getElementById("mainfieldset").style = "background-color : red";
}
function changeFormBgYellow() {
    document.getElementById("mainfieldset").style = "background-color : yellow";
}
function changeFormBgBlue() {
    document.getElementById("mainfieldset").style = "background-color : blue;";
}
function playMusic() {
    if (document.getElementById("kilata").paused) {
        document.getElementById("kilata").play()
    } else {
        document.getElementById("kilata").pause()
    }
}
function showSmile(){
  document.write(`<img src = 'http://www.unityofroanokevalley.org/wp-content/uploads/sites/4/2017/05/2017Apr30smiley-face.jpg' width = "200px"; alt="smile face"/>`);
}
function showSad(){
  document.write(`<img src="http://www.cuded.com/wp-content/uploads/2014/04/Sad-face.jpeg" alt='sad face' width="200px;"/>`)
}
function blurBg(){
  var stoinost = document.getElementById("changefont").value;
  document.getElementById("mainfieldset").style = "opacity:" + stoinost*0.1 + ";"
}
