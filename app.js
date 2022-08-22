// alert("Hellow world!");

// var num = +prompt("ENTER YOUR FAV NUM");

// var new_Num = parseInt(num);

// var new_Num2 = Number(num);

// console.log(num + new_Num);

// var Num1 = +prompt("ENTER YOUR FIRST FAV NUMBER : ");

// console.log(Num1);

// var Num2 = prompt("ENTER YOUR SECOND FAV NUMBER : ");

// Num2 = parseInt(Num2);

// console.log(Num2);

// var Num3 = prompt("ENTER YOUR THIRD FAV NUMBER : ");

// Num3 = Number(Num3);

// console.log(Num3);

// console.log("THE SUM OF YOUR FAV NUMBERS ARE : ",Num1 + Num2 + Num3);

// var num = +prompt("WHAT IS FAV NUM ?");

// if ((num % 2 === 0) && (num % 4 === 0)) {
//     console.log("IT IS DIVISIBLE BY BOTH 2 AND 4");
// }

// else if (num % 2 === 0) {
//     console.log("IT IS ONLY DIVISIBLE BY 2");   
// }

// else if (num % 4 === 0) {
//     console.log("IT IS ONLY DIVISIBLE BY 4");    
// }

// else{
//     console.log("IT IS NOT DIVISIBLE BY BOTH 2 AND 4");
// }

// console.log((null && true) || ("true" && false));

// var percentage = +prompt("Enter your percentage");
// var grade;


// if (percentage > 0 && percentage <= 100) {
    
// if (percentage >= 80) {
//     grade = "A+";
// }

// else if (percentage >= 70) {
//     grade = "A";
// }

// else if (percentage >= 60) {
//    grade = "B";
// }

// else if (percentage >= 50) {
//     grade = "C";
// }

// else if (percentage >= 40) {
//     grade = "D";
// }

// else{
//     grade = "F";
// }

// console.log("YOUR GRADE IS :",grade);

// }

// else{
//     console.log("Incorrect Choice!")
// }

// var num = +prompt("REVERSE THE NUMBER YOU WANT:")

// function revNum(){

//     num = num.toString().split("").reverse().join("");

//     if (num.endsWith("-")) {
//         num = "-" + num;
//         return parseInt(num);
//     }
//     else{
//         return parseInt(num); 
//     }
    
    
// }

// console.log(revNum());


// var inputString = prompt("ENTER ANY STRING TO CHECK WETHER IT IS PALINDROME OR NOT ?");

// function PalindromeStr(){

// inputString = inputString.toLowerCase();

// reverseString = inputString.split("").reverse().join("");

// if (inputString === reverseString) {
//     console.log(inputString + " is a Palindrome Word!");
// } else {
//     console.log(inputString + " is not a Palindrome Word!");
// }

// }

// PalindromeStr();

// function call(fname = "Hassan",lname = "Khan") {
//     document.write("Hello " + fname + " " + lname + '</br>');
// }

// call("Khan","Hassan");

// function sum(a,b) {
//     alert(a + b + "<br>");
// }

// sum(15,20);
// sum(45,20);
// sum(30,20);

// var user = prompt("Enter your current semester");

// var course = prompt("In how many courses you are enrolled ?");

// document.write("Your current semester is: " + user + "<br>");
// document.write("Your currently enrolled courses are: " + course + "<br>");
// document.write("Your Current Semester Total Marks are: 400" + "<br>");


// function ObMarks(OS,NC,CC,SE) {
//     var ObtainedMarks = OS + NC + CC + SE;
//     return ObtainedMarks; 
// }

// var tMarks = ObMarks(99,91,82,89);
// document.write("Your Current Semester Obtained Marks are: " + tMarks + "<br>");

// function percentage(OM) {
//     var cper = OM / 400 * 100;
//     return cper;
// }

// var currentPercentage = percentage(tMarks);
// document.write("Your Current Semester Percentage is: " + currentPercentage);

//Write a JavaScript function that generates all combinations of a string.

function combStr(string)
{
var subString = [];
  for (var x = 0, y=1; x < string.length; x++,y++) 
  {
   subString[x]=string.substring(x, y);
    }
var combine = [];
var temp= "";
var slent = Math.pow(2, subString.length);

for (var i = 0; i < slent ; i++)
{
    temp= "";
    for (var j=0;j<subString.length;j++) {
        if ((i & Math.pow(2,j))){ 
            temp += subString[j];
        }
    }
    if (temp !== "")
    {
        combine.push(temp);
    }
}
  document.write(combine.join("\n </br>"));
}

combStr("cat");
