import Key from './keys.js';
// import inputHandler from './input.js';

var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');
var aKeySound = document.querySelector('#c3');
var sKeySound = document.querySelector('#d3');
var dKeySound = document.querySelector('#e3');
var fKeySound = document.querySelector('#f3');
var gKeySound = document.querySelector('#g3');
var hKeySound = document.querySelector('#a3');
var jKeySound = document.querySelector('#b3');
var kKeySound = document.querySelector('#c4');



var canvasWidth = canvas.width;

var doc = document;


let aKey = new Key(0, 200, canvasWidth, aKeySound);
aKey.draw(ctx);
// new inputHandler(aKey, ctx);


let sKey = new Key(100, 200, canvasWidth, sKeySound);
sKey.draw(ctx);

let dKey = new Key(200, 200 , canvasWidth, dKeySound);
dKey.draw(ctx);

let fKey = new Key(300, 200, canvasWidth, fKeySound);
fKey.draw(ctx);

let gKey = new Key(400, 200, canvasWidth, gKeySound);
gKey.draw(ctx);

let hKey = new Key(500, 200, canvasWidth, hKeySound);
hKey.draw(ctx);

let jKey = new Key(600, 200, canvasWidth, jKeySound);
jKey.draw(ctx);

let kKey = new Key(700, 200, canvasWidth, kKeySound);
kKey.draw(ctx);

document.addEventListener('keydown', (event)=>{
    

    switch(event.key){
        case 'a':
            // lightUp(ctx);
            aKey.lightUp(ctx);
            aKey.playSound();
        break;

        case 's':
            sKey.lightUp(ctx);
            sKey.playSound();
           
        break;

        case 'd':
            dKey.lightUp(ctx);
            dKey.playSound();

        break;

        case 'f':
            fKey.lightUp(ctx);
            fKey.playSound();
        break;

        case 'g':
            gKey.lightUp(ctx);
            gKey.playSound();
        break;

        case 'h':
            hKey.lightUp(ctx);
            hKey.playSound();
        break;

        case 'j':
            jKey.lightUp(ctx);
            jKey.playSound();
        break;

        case 'k':
            kKey.lightUp(ctx);
            kKey.playSound();
        break;
    }
});

document.addEventListener('keyup', (event)=>{

    switch(event.key){
        case 'a':
            // lightUp(ctx);
            aKey.draw(ctx);
        break;

        case 's':
            sKey.draw(ctx);
            
           
        break;

        case 'd':
            dKey.draw(ctx);
            

        break;

        case 'f':
            fKey.draw(ctx);
        break;

        case 'g':
            gKey.draw(ctx);
        break;

        case 'h':
            hKey.draw(ctx);
        break;

        case 'j':
            jKey.draw(ctx);
        break;

        case 'k':
            kKey.draw(ctx);
        break;
    }
});

