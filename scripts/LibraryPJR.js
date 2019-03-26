//Created by Joe Rivera 03/23/2019
/*Includes a function to create titles for sections
as well as to style those titles.
styling is limited to color and font-family currently.*/

function titlePrint(color, family, tag, phrase){
	
	//to use this function, all arguments must be placed in quotes(single or double)
	//color must be given in hexidecimal
	//color does not need a # in front of the hexcode
	//font-family does not need a dash between multi-named fonts, but is preferred
document.write('<' + tag + ' style="color: #' + color + '; font-family: ' + family + ';">'
 + phrase + '</' + tag + '>');}
 
 function newL(){
 document.write("<br />");}