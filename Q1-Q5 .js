//  Question 1  //

document.getElementById('br').addEventListener('click', function () {
    document.getElementById('selectbrand').removeChild(document.getElementById('selectbrand').lastElementChild);
});

//  Question 2  //

function changecolor(){
    let selectedcolor= document.getElementById('selectcolor').value
    let text = document.getElementById('text');
    text.style.color=selectedcolor;
}

//  Question 3  //

function getvalue(){
    const firstName = document.getElementById('fname').value
    const lastName = document.getElementById('lname').value
    console.log('First name : ', firstName);
    console.log('Last name  : ', lastName);
}

//  Question 4  //
function volumesphere(){

    let volume;
    let radius = document.getElementById(radius).value;
    radius = Math.abs(radius);
    volume = (4/3) * Math.PI * Math.pow(radius,3);
    volume = volume.toFixed(4);
    document.getElementById('volume').value = volume;
    return false;

}
document.getElementById('form1').addEventListener('submit',volumesphere)

//  Question 5  //

document.getElementById('btn1').addEventListener('click')

function changeimage(){
    document.getElementById('img1').src='sky.jpg'
}

//  Question 6  //

function newWindow(){
    window.open('https://canva.com');
}

//  Question 7  //

function reDirect(){
    window.location.href='https://squarespace.com';
}

//  Question 8  //




//  Question 9  //

function pagereload(){
    location.reload();
}

//  Question 10  //

function sh(){
    document.getElementById("dheight").innerHTML="Display Height:"+screen.height;
}
function sw(){
    document.getElementById("dwidth").innerHTML="Display Width:"+screen.width;
}

//  Question 10  //

//function timerstart(){
   // setTimer();
   // clear= setInterval(setTimer,1000);
//}
function countdownTimer(){
    setTimer();
    setTimer= setInterval(setTimer,1000);
}