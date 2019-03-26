function printTitle(){


document.write('<h1>' + document.title + '</h1>');}

function printRand(range){
var number = Math.round(Math.random() * range);
document.getElementById("rando").innerHTML = number;}