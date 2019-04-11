//function for page 1
//asks user for a password and has an infinite number of attemps. password is Doughnut
function permission1(){
var password = null;
while(password != "Doughnut"){
password = prompt("Please enter a password");}
}

//function for page 2
//gives user 3 attempts to enter the correct password (Psycho)
//if the password is not entered in the 3 attempts, page is redirected to SanJac homepage
function permission2(){
var password = null;
var tries = 0;
while (password != "Psycho" && tries <=4){
var password = prompt("Please enter a password", "Password Here");
tries++;
if (tries == 3 && password != "Psycho"){
alert("Amount of attempts has been surpasses");
location.href = "http://www.sanjac.edu";
break;}
}


}

//alter the blockquote function for page 2
function alterQuote(){
var bq = document.getElementById("bq");
bq.style.borderStyle = "outset";
bq.style.borderColor = "#550099";
bq.style.borderWidth = "5px";
bq.style.padding = "5px";
bq.style.backgroundColor = "#000000";

}

//function for page 3
//asks user to enter a day of the week
//checks if data entered is a number. if so, it throws an error and tries again
function weekday(){

var day = prompt("Please enter a day of the week (Not numerical)");
if (isNaN(day) == true){
var uDay = day.toUpperCase();
	switch(uDay){
	case "MONDAY":
	alert("you have entered Monday!");
	break;
	case "TUESDAY":
	alert("You have entered Tuesday!");
	break;
	case "WEDNESDAY":
	alert("You have entered Wednesday!");
	break;
	case "THURSDAY":
	alert("You have entered Thursday!");
	break;
	case "FRIDAY":
	alert("You have entered Friday!");
	break;
	case "SATURDAY":
	alert("You have entered Saturday!");
	break;
	case "SUNDAY":
	alert("You have entered Sunday!");
	break;
	default:
	alert("An error was made(misspelling or a day was not entered!");
	weekday();}
}
else{
alert("You have entered a number!! Close this alert to retry.");
weekday();}
}
	
