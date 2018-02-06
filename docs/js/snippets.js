var color = new Array();
color[0] = "#EE7752";
color[1] = "#E73C7E";
color[2] = "#23A6D5";
color[3] = "#23D5AB";

function changeColor() {
    var lastColorIndex = localStorage.getItem('lastColorIndex') || -1;
    var randomColor = -1;
    while (lastColorIndex == randomColor || randomColor === -1) {
        randomColor = Math.floor(Math.random() * color.length);
        console.log('LastIndex: ' + lastColorIndex + ',RandomColor: ' + randomColor);
    };
    localStorage.setItem('lastColorIndex', randomColor);
    //console.log(randomColor);
    console.log(color[randomColor]);
    document.getElementsByTagName(".splash")[0].style.backgroundColor = color[randomColor];
};

changeColor(); // do this in window.onload !!  window.onload(changeColor)
