var myImage = document.querySelector('img');

myImage.onclick = function () {
    var mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/lena256.bmp') {
        myImage.setAttribute('src', 'images/watermelon.png');
    } else {
        myImage.setAttribute('src', 'images/lena256.bmp');
    }
}

var mybutton = document.querySelector('button');
var myheading = document.querySelector('h1');
function setusername() {
    var myname = prompt('please enter your name');
    localStorage.setItem('name',myname);
    myheading.textContent = 'mozilla is cool'+myname;
}

if(!localStorage.getItem('name')) {
    setusername();
}else{
    var storgedname = localStorage.getItem('name');
    myheading.textContent = 'mozilla is cool'+storgedname;
}

mybutton.onclick = function()
{
    setusername();
}