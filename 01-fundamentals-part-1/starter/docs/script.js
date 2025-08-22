//JavaScript Fundamentals - Hour 1

//Exercise 1: Personal Info Variables
const firstName = "Glyza";
console.log(firstName, typeof firstName);

let age = 20;
console.log(age, typeof age);

const favoriteNumber = 2;
console.log(favoriteNumber, typeof favoriteNumber);

let likesJavaScript = true;
console.log(likesJavaScript, typeof likesJavaScript);

//Exersice 2: Variable Reassignment
let score = 100;
console.log(score);

score = 150;
console.log(score);

const maxScore = 100;
console.log(maxScore);

maxScore = 150;
console.log(maxScore);
    //if you try to reassign a const, it will cause an error
    //Error message in the console: "Uncaught TypeError: Assignment to constant variable. at script.js:26:10"

console.log(typeof 42);
console.log(typeof "Hello");
console.log(typeof true);
console.log(typeof undefined);