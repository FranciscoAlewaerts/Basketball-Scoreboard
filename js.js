let localResult = document.getElementById("localcount");
let guestResult= document.getElementById("guestcount");
let localCount = 0;
let guestCount = 0;

function localPlus1(){
    localCount += 1;
    localResult.innerHTML= localCount
}

function localPlus2(){
    localCount += 2;
    localResult.innerHTML= localCount
}

function localPlus3(){
    localCount += 3;
    localResult.innerHTML= localCount
}

function guestPlus1(){
    guestCount += 1;
    guestResult.innerHTML= guestCount
}

function guestPlus2(){
    guestCount += 2;
    guestResult.innerHTML= guestCount
}

function guestPlus3(){
    guestCount += 3;
    guestResult.innerHTML= guestCount
}

function countToCero(){
    localResult.innerHTML = 0;
    guestResult.innerHTML = 0;
    localCount = 0;
    guestCount = 0;


}