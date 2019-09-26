function pageChange(page){

    page == 'form' ? location.href="./form.html" : location.href="./index.html";
}


function showValue(){
var value = document.querySelector('#slider').value;
document.querySelector('#output').innerHTML = value;
}


// store information for second page use


// function save()
// {
//     var fName = document.querySelector('#fName').value;
//     var LName = document.querySelector('#lName').value;
//     var bDay = document.querySelector('#bDay').value;
//     var tutor = document.querySelector('#tutor').value;

//     var userData = `${fName} ${LName}<br />${bDay}<br />${tutor}`;
//     return userData;


    
// }



// document.querySelector('#data').innerHTML = save();

    
    




