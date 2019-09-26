function pageChange(page){

    page == 'form' ? location.href="./form.html" : location.href="./index.html";
}


function showValue(){
var value = document.querySelector('#slider').value;
document.querySelector('#output').innerHTML = value;
}

function hideUserData(){
    document.querySelector('#userAlert').style.visibility = "hidden";
}


function setup(){

    location.href="#";

     var fName = document.querySelector('#fName').value;
     var LName = document.querySelector('#lName').value;
     var bDay = document.querySelector('#bDay').value;
     var tutor = document.querySelector('#tutor').value;
     var color = document.querySelector('#color').value;

    document.querySelector('.formStuff').style.visibility = "hidden";

    document.querySelector('#label').innerHTML = `Welcome ${fName} ${LName}!`;

    document.querySelector('#firstLine').innerHTML = `D.O.B: ${bDay}<br />Tutor: ${tutor}<br />Color: ${color}`;

    document.body.style.backgroundColor = color;
    var userData = document.querySelector('.user');
    userData.style.backgroundColor = "#333333";
    userData.style.marginTop = '1em';
    userData.style.paddingTop = '.8em';
    userData.style.paddingBottom = '.8em';
    userData.style.textAlign = "center";

    var alertUser = document.querySelector('#userAlert');alertUser.style.visibility = 'visible';
    alertUser.style.paddingTop = "1em";

    




}
    
    




