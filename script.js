

let image3 = 1;
let image4 = 1;
let image8 = 1;
/* let firstimage = document.getElementById("photo8");
let video = document.createElement("video");
video.src = "img-8-2.mp4";
video.controls = true;
video.autoplay = true;
video.width = 400; */


function image8like() {
    image8++;
    if (image8 = 1) {
    console.log("image 8 clicked");
 /*   photo8.parentNode.replaceChild(video, img); */
    document.getElementById("photo8").src = "images/img-8-2.gif";
    document.getElementById("photo8").onclick = null;
}};


function image3like() {
    console.log("image 3 clicked");
    if (image3 <4) {
    image3++;
    document.getElementById("photo3").src = "images/img-3-" + image3 + ".png";
}};

function image4like() {
    if (image4 < 3) {
    image4++;
    console.log("image 4 clicked");
    document.getElementById("photo4").src = "images/img-4-" + image4 + ".png";
}};



function image1like() {
    console.log("image 1 clicked");
    document.getElementById("photo1").src = "images/img-1-2.png";
};

function image2like() {
    console.log("image 2 clicked");
    document.getElementById("photo2").src = "images/img-2-2.png";
};

function image5like() {
    console.log("image 5 clicked");
    document.getElementById("photo5").src = "images/img-5-2.png";
};

function image6like() {
    console.log("image 6 clicked");
    document.getElementById("photo6").src = "images/img-6-2.png";
};

function image7like() {
    console.log("image 7 clicked");
    document.getElementById("photo7").src = "images/img-7-2.png";
};

function image9like() {
    console.log("image 9 clicked");
    document.getElementById("photo9").src = "images/img-9-2.png";
};