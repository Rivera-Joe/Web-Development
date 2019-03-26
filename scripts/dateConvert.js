var date = new Date();
var weekday = date.getDay();
switch(weekday){
case 0:
weekday = "Sunday";
break;
case 1:
weekday = "Monday";
break;
case 2:
weekday = "Tuesday";
break;
case 3:
weekday = "Wednesday";
break;
case 4:
weekday = "Thursday";
break;
case 5:
weekday = "Friday";
break;
case 6:
weekday = "Saturday";
break;
default:
document.write("Oops. Something happened. Time hole or something.");}

var month = date.getMonth();
month++;
switch(month){
case 1:
month = "January";
break;
case 2:
month = "February";
break;
case 3:
month = "March";
break;
case 4:
month = "April";
break;
case 5:
month = "May";
break;
case 6:
month = "June";
break;
case 7:
month = "July";
break;
case 8:
month = "August";
break;
case 9:
month = "September";
break;
case 10:
month = "October";
break;
case 11:
month = "November";
break;
case 12:
month = "December";
break;
default:
document.write("Oops. Time warps happen.");}

var day = date.getDate();
var hours = date.getHours();
var minutes = date.getMinutes();
var seconds = date.getSeconds();
