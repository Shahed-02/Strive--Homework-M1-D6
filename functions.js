/* EXERCISE 1
    Write a function called dice; it should randomize an integer number between 1 and 6.
*/
const dice = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;


const rollDice = () => dice(1, 6);
console.log("The dice has rolled on", Math.floor)
let result = "";
/* EXERCISE 2
    Write a function called whoIsBigger which receives 2 numbers as parameters and returns the biggest one.
*/
const a = 1;
const b = 3;
const myfunc = (a, b) => {
    console.log(a, );
};
myfunc(b);


/* EXERCISE 3
    Write a function called splitMe which receives a string as a parameter and returns an array with every word in that string.
    Ex.: splitMe("I love coding") => returns ["I", "Love", "Coding"]
*/
const c = "I love coding"
const myfunc2 = (c) => {
    console.log(c);
}
myfunc2(c);