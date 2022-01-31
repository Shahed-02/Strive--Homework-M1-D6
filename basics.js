/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be pushed to the repository and be available for the tutors by the end of the day (5PM CET)
- Complete as many exercises as you can
*/

// JS Basics

/* EXERCISE A
   Create a variable called test and assign a string value to it.
*/

let test = "This is a test"
console.log("Display", test)

/* EXERCISE B
    Create a variable called sum and assign to it the result of the sum between the numbers 10 and 20.
*/

let num1 = 10
let num2  = 20 
let sum = num1 + num2 
console.log("\nThe sum of exercise b is", sum)

/* EXERCISE C
    Create a variable called random and assign to it a random number between 0 and 20 (it should be randomly created at each execution).
*/
let random = 8;
if (random === 0){
    console.log("zero")
}else if (random === 1) {
    console.log("one");
  } else if (random === 2) {
    console.log("two");
  } else if (random === 3) {
    console.log("three");
  } else if (random === 4) {
    console.log("four");
  } else if (random === 5) {
    console.log("five");
  } else if (random === 6) {
    console.log("six");
  } else if (random === 7) {
    console.log("seven");
  } else if (random === 8) {
    console.log("eight");
  } else if (random === 9) {
    console.log("nine"); 
  } else if (random === 10) {
      console.log ("ten") ;
  } else if (random === 11) {
      console.log("eleven") ; 
  } else if (random === 12){
      console.log("twelve") ;
  } else if (random === 13) {
      console.log("thirteen") ;
  } else if (random === 14) {
      console.log("fourteen") ;
  } else if (random === 15) {
      console.log("fifteen") ;
  } else if (random === 16) {
      console.log("sixteen") ; 
  } else if (random === 17) {
      console.log("seventeen") ;
  } else if (random === 18) {
      console.log("eighteen") ;
  } else if (random === 19) {
      console.log("nineteen") ;
  } else if (random === 20) {
      console.log("twenty") ;
  } else {
      console.log ("\nThis is not a valid number")
  }

  /* EXERCISE D
    Create a variable called me and assign to it an object containing the following information: name = your name, surname = your surname, age = your age.
*/

let me = {
  name : "Shahed" , 
  surname : "Ali" , 
  age : "19"
} 
console.log("\nMy profile", me)
console.log("We did not need the age")
delete me.age;
console.log("We do not need the age", me)

/* EXERCISE E
    Write a piece of code for programmatically removing the age property from the previously create object.
*/
/* EXERCISE F
   Write a piece of code for programmatically adding to the me object you defined before an array called skills, containing the programming languages you know right now.
*/

let skills = ["HMTL5", "Java Script", "CSS"]
console.log(skills)
/* EXERCISE G
   Write a piece of code for programmatically removing the last skill from the skills array inside the me object.
*/
let CSS = skills.pop()
console.log("We removed the last skill from the list", skills)
