// JavaScript Fundamentals - Hour 1

// let js = "amazing";
//console.log(40 + 8 + 23 - 10);

//Variables with let (Can Change)
//console.log("=== VARIABLES ===");

//let firstName = "Jonas";
//console.log(firstName);

//let age = 30;
//age = 31;
//console.log(age);

//Variables with const (Cannot Change)

//const birthYear = 1991;
//console.log(birthYear);

//const PI = 3.1415;
//console.log(PI);

//Use const by default
//const country = "Portugal";
//const language = "Portugese";
//const population = 10;

//Use let only when you need to change the value:
//let age = 25;
//age = 26;

//Variable Naming Rules:
// Good Names
//let firstName = "Sarah";
//let myCurrentJob = "teacher";
//let PI = 3.1415; 

//Basic Data Types
// console.log("=== DATA TYPES ===");

// let age = 23;
// console.log(age);
// console.log(typeof age); // "number"

// let firstName = "Jonas";
// console.log(firstName);
// console.log(typeof firstName); // "string"

// let javascriptIsFun = true;
// console.log(javascriptIsFun);
// console.log(typeof javascriptIsFun); // "boolean"

// let year;
// console.log(year); // undefined
// console.log(typeof year); // "undefined"

//Dynamic Typing Magic

// Start as a number
// let dynamicVariable = 23;
// console.log(dynamicVariable, typeof dynamicVariable); 
// Change to a string
// dynamicVariable = "Now I'm a string!";
// console.log(dynamicVariable, typeof dynamicVariable); 

// Change to a boolean
// dynamicVariable = true;
// console.log(dynamicVariable, typeof dynamicVariable);

// Exercise 1: Personal Info Variables
// const firstName = "Glyza";
// console.log(firstName, typeof firstName);

// let age = 20;
// console.log(age, typeof age);

// const favoriteNumber = 2;
// console.log(favoriteNumber, typeof favoriteNumber);

// let likesJavaScript = true;
// console.log(likesJavaScript, typeof likesJavaScript);

// Exersice 2: Variable Reassignment
// let score = 100;
// console.log(score);

// score = 150;
// console.log(score);

// const maxScore = 100;
// console.log(maxScore);

// maxScore = 150;
// console.log(maxScore);
//     //if you try to reassign a const, it will cause an error
//     //Error message in the console: "Uncaught TypeError: Assignment to constant variable. at script.js:26:10"

// console.log(typeof 42);
// console.log(typeof "Hello");
// console.log(typeof true);
// console.log(typeof undefined);

// JavaScript Fundamentals - Hour 2

//Basic Math Operations

// console.log("=== MATH OPERATORS ===");

// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;
// console.log(ageJonas, ageSarah); 

//All Math Operators
// console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2 = 8

// console.log("Math operations:");
// console.log("Addition:", 10 + 5); 
// console.log("Subtraction:", 20 - 8); 
// console.log("Multiplication:", 4 * 7); 
// console.log("Division:", 15 / 3); 
// console.log("Exponentiation:", 2 ** 3); 

//String Concaatenation
// const firstName = "Jonas";
// const lastName = "Schmedtmann";
// console.log(firstName + " " + lastName); // "Jonas Schmedtmann"

// console.log("Hello " + "World" + "!"); // "HelloWorld!"
// console.log("I am " + 25 + " years old"); // "I am 25 years old"

//Assignment Operators
//Basic Assignment
// console.log("=== ASSIGNMENT OPERATORS ===");

// let x = 10 + 5; // 15
// console.log("x starts as:", x);

// Assignment Shortcuts
// x += 10; 
// console.log("After x += 10:", x);

// x *= 4; 
// console.log("After x *= 4:", x);

// x /= 2;
// console.log("After x /= 2:", x);

// Increment and Decrement
// x++; // Same as: x = x + 1
// console.log("After x++:", x); // 51

// x--; // Same as: x = x - 1
// x--; // Again: x = x - 1
// console.log("After x-- twice:", x); // 49

// Exercise: Score Calculator
// let score = 100;

// score += 50; //Add 50 → 150
// score *= 2;  //Multiply by 2 → 300
// score -= 25; //Subtract 25 → 275
// score++;     //Increment once → 276
// score++;     //Increment again → 277

// console.log(score); // Final result: 277

// Basic Comparisons
// console.log("=== COMPARISON OPERATORS ===");

// console.log("Age comparison:");
// console.log(ageJonas > ageSarah); 
// console.log(ageSarah >= 18); 
// console.log(ageJonas < 30); 

// console.log("Number comparisons:");
// console.log(25 > 20); 
// console.log(15 < 10); 
// console.log(18 >= 18); 
// console.log(16 <= 15); 

// Storing Comparison Results
// const isFullAge = ageSarah >= 18;
// console.log("Sarah is adult:", isFullAge); 

// const isJonasOlder = ageJonas > ageSarah;
// console.log("Jonas is older:", isJonasOlder); 

// Complex Comparisons
// const isFullAge = ageSarah >= 18;
// console.log("Sarah is adult:", isFullAge); 

// const isJonasOlder = ageJonas > ageSarah;
// console.log("Jonas is older:", isJonasOlder); 

// Exercise: Age Verification

// const myAge = 20;

// 1. Compare age to 18
// console.log(myAge >= 18); 

// 2. Check if 100 is greater than 99
// console.log(100 > 99); 

// 3. Store a comparison result in a variable
// let isAdult = myAge >= 18;
// console.log(isAdult);

// 4. Compare the result of two calculations
// console.log((10 + 5) * 2 > (50 / 2)); 

// Operator Precedense (Order Matters)
// Precedence Example

// Assignment Precedence
// let x, y;
// x = y = 25 - 10 - 5; 
// console.log(x, y); 

// Parentheses Overrise Everything
// const averageAge = (ageJonas + ageSarah) / 2;
// console.log(ageJonas, ageSarah, averageAge); 


// Coding Challenge #1: BMI Calculator

// Test Data 1
// let massMark = 78;
// let heightMark = 1.69;
// let massJohn = 92;
// let heightJohn = 1.95;

// 1. Calculate BMIs
// let bmiMark = massMark / (heightMark ** 2);
// let bmiJohn = massJohn / (heightJohn ** 2);

// 2. Create markHigherBMI variable
// let markHigherBMI = bmiMark > bmiJohn;

// 3. Log results to console
// console.log("Test Data 1:");
// console.log("Mark's BMI:", bmiMark);
// console.log("John's BMI:", bmiJohn);
// console.log("Does Mark have a higher BMI than John?", markHigherBMI);


// Test Data 2
// massMark = 95;
// heightMark = 1.88;
// massJohn = 85;
// heightJohn = 1.76;

// Recalculate BMIs
// bmiMark = massMark / (heightMark ** 2);
// bmiJohn = massJohn / (heightJohn ** 2);

// markHigherBMI = bmiMark > bmiJohn;

// console.log("\nTest Data 2:");
// console.log("Mark's BMI:", bmiMark);
// console.log("John's BMI:", bmiJohn);
// console.log("Does Mark have a higher BMI than John?", markHigherBMI);

// JavaScript Fundamentals - Hour 3

// String and Template Literals
// const firstName = "Jonas";
// const job = "teacher";
// const birthYear = 1991;
// const year = 2037;

// The modern way 
// const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
// console.log(jonasNew);

//Template Literal Superpowers
// console.log(`I'm ${2037 - 1991} years old`);
// console.log(`Math works: ${2 + 3} equals five`);
// console.log(`Comparisons too: ${5 > 3}`); 

// console.log(`Just a regular string...`);

// Multiline String Made Easy
// Old way 
// console.log(
//   "String with \n\
// multiple \n\
// lines"
// );

// New way
// console.log(`String
// multiple
// lines`);

//Exercises for Template Literals
//Exercise 1: Personal Introduction
// const myName = "Glyza"; 
// const myAge = 20; 
// const myJob = "student"; 
// const currentYear = 2025;

// const intro = `Hi, I'm ${myName}, a ${myAge} year old ${myJob}!`;
// console.log(intro);

// Exercise 2: Math in Templates
// const birthYear = currentYear - myAge;

// const info = `Born in ${birthYear}, 10*5 = ${10 * 5}, Adult: ${myAge >= 18}`;
// console.log(info);

// Making Decisions with if/else
// Basic if/else Structure
// const age = 15;

// if (age >= 18) {
//   console.log("Sarah can start driving license 🚗");
// } else {
//   const yearsLeft = 18 - age;
//   console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
// }

// Variable Assignment with Decisions
// const birthYear = 2012;

// let century;
// if (birthYear <= 2000) {
//   century = 20;
// } else {
//   century = 21;
// }
// console.log(century); 

// Real-World Decision Making
// const score = 85;

// if (score >= 60) {
//   console.log(`You passed with ${score} points!`);
//   console.log("Congratulations!");
// } else {
//   const pointsNeeded = 60 - score;
//   console.log(`You failed. Need ${pointsNeeded} more points.`);
// }

// Exercises for Making Decisions with if/else
// Exercise 1: Grade Calculator

// const testScore = 78;

// Use if/else to determine:
// 90+: "Excellent! Grade A!"
// 80 - 89: "Good Job! Grade B"
// 70 - 79: "Not Bad! Grade C"
// 60 - 69: "You passed! Grade D"
// Below 60: "You failed! Study Harder"

// if (testScore >= 90) {
//   console.log("Excellent! Grade A");
// } else if (testScore >= 80) {
//   console.log("Good job! Grade B");
// } else if (testScore >= 70) {
//   console.log("Not bad! Grade C");
// } else if (testScore >= 60) {
//   console.log("You passed! Grade D");
// } else {
//   console.log("You failed! Study harder");
// }

// //Exercise 2: Age Verification
// const userAge = 20;

// Rules:
// -18+: "Welcome! You can access all content"
// -13-17: "Welcome! Restricted content only"
// - Under 13: "Sorry, you're too young"

// if (userAge >= 18) {
//   console.log("Welcome! You can access all content");
// } else if (userAge >= 13) {
//   console.log("Welcome! Restricted content only");
// } else {
//   console.log("Sorry, you're too young");
// }

// Truthy and Falsy Values
// The 5 Falsy Values
////////////////////////////////////
// Truthy and Falsy Values

// 5 falsy values: 0, '', undefined, null, NaN
// console.log(Boolean(0)); 
// console.log(Boolean(undefined)); 
// console.log(Boolean("Jonas")); 
// console.log(Boolean({})); 
// console.log(Boolean(""));

// Practical Appplications
// const money = 100;
// if (money) {
//   console.log("Don't spend it all ;)");
// } else {
//   console.log("You should get a job!");
// }

// Common Gotcha - Be Careful
// let height = 0; 
// if (height) {
//   console.log("YAY! Height is defined");
// } else {
//   console.log("Height is UNDEFINED"); 
// }

// if (height !== undefined) {
//   console.log("Height is defined");
// }

// Practice Truthy/Falsy
// Exercise: Truth Detector

// const values = [0, 1, "", "hello", undefined, null, NaN, {}, []];

// values.forEach((val) => {
//   console.log("Value:", val);
//   console.log("Boolean:", Boolean(val));

//   if (val) {
//     console.log("Truthy!");
//   } else {
//     console.log("Falsy!");
//   }

//   console.log("---------------");
// });


// Coding Challenge #2: BMI Comparison
// const values = [0, 1, "", "hello", undefined, null, NaN, {}, []];

// values.forEach(value => {
//   console.log("Value:", value);
//   console.log("Boolean:", Boolean(value));
//   if (value) {
//     console.log("Truthy!");
//   } else {
//     console.log("Falsy!");
//   }
//   console.log("----------------");
// });


// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// const BMIMark = massMark / heightMark ** 2;
// const BMIJohn = massJohn / (heightJohn * heightJohn);
// console.log("Mark's BMI:", BMIMark);
// console.log("John's BMI:", BMIJohn);

// if (BMIMark > BMIJohn) {
//   console.log(`Mark's BMI (${BMIMark.toFixed(1)}) is higher than John's (${BMIJohn.toFixed(1)})!`);
// } else if (BMIJohn > BMIMark) {
//   console.log(`John's BMI (${BMIJohn.toFixed(1)}) is higher than Mark's (${BMIMark.toFixed(1)})!`);
// } else {
//   console.log(`Both Mark and John have the same BMI (${BMIMark.toFixed(1)})!`);
// }


// JavaScript Fundamentals - Hour 4

// Manual Type Conversion
// const inputYear = "1991";
// console.log(Number(inputYear), inputYear); 
// console.log(Number(inputYear) + 18); 

// console.log(Number("Jonas")); 
// console.log(typeof NaN); 

// console.log(String(23), 23); 
// console.log(typeof String(23)); 

// Automatic Type Coercion 
// type coercion (automatic)
// console.log("I am " + 23 + " years old"); 
// console.log("23" - "10" - 3); 
// console.log("23" / "2");
// console.log("23" * "2"); 

// Tricky Examples
// let n = "1" + 1; 
// n = n - 1; 
// console.log(n);

// console.log(2 + 3 + 4 + "5"); 
// console.log("10" - "4" - "3" - 2 + "5"); 

// Practice Type Conversion
// Exercise 1: Conversion Detective
 
// console.log("5" + 2); // Output: "52"
// console.log("5" - 2); // Output: 3
// console.log("5" * 2); // Output: 10
// console.log("5" / 2); // Output: 2.5
 
// console.log(Number("25"), "25");
// console.log(String(95), 95);

// Exercise 2: Fix the Bug
// This calculator has a bug - fix it!
// const num1 = prompt("First number:");
// const num2 = prompt("Second number:");
// const sum = num1 + num2;
// console.log(`Sum: ${sum}`);
 
// Fixed version with conversion
// const num1 = Number(prompt("First number:"));
// const num2 = Number(prompt("Second number:"));
// const sum = num1 + num2;

//Strict Equality (===) - The Professional Way

// const age = "18";
// if (age === 18) console.log("You just became an adult :D (strict)");
// if (age == 18) console.log("You just became an adult :D (loose)");

// console.log("18" === 18); 
// console.log("18" == 18); 
// console.log(18 === 18); 

// Loose Equality (==) - The Dangerous One
// console.log("0" == 0); // true (string converted)
// console.log(0 == false); // true (boolean converted)
// console.log("0" == false); // true (both converted!)
// console.log(null == undefined); // true (special case)

// Weird cases that cause bugs
// console.log("" == 0); // true
// console.log("   " == 0); // true (spaces trimmed!)

// Best Practice Example
// const favourite = Number(prompt("What's your favourite number?"));
// console.log(favourite);
// console.log(typeof favourite);

// if (favourite === 23) {
//   console.log("Cool! 23 is an amazing number!");
// } else if (favourite === 7) {
//   console.log("7 is also a cool number");
// } else if (favourite === 9) {
//   console.log("9 is also a cool number");
// } else {
//   console.log("Number is not 23 or 7 or 9");
// }


// if (favourite !== 23) console.log("Why not 23?");

// Practice Equality

// Exercise 1: Equality Detective
// Test these comparisons - predict first, then run:
// console.log(5 === "5"); // false (strict equality checks type and value)
// console.log(5 == "5");  // true (loose equality converts "5" to number)
 
// console.log(true === 1); // false (different types: boolean vs number)
// console.log(true == 1);  // true (true is converted to 1)
 
// console.log(false === 0); // false (different types: boolean vs number)
// console.log(false == 0);  // true (false is converted to 0)

// Exercise 2: Fix the Login System
// This login system has bugs - fix them!
// const username = prompt("Username:");
// const password = prompt("Password:");
 
// Fix using strict equality
// if (username === "admin" && password === "1234") {
//   console.log("Welcome admin!");
// } else {
//   console.log("Access denied");
// }

// Basic Local Operators
// Logical Operators

// const hasDriversLicense = true; // A
// const hasGoodVision = true; // B

// console.log(hasDriversLicense && hasGoodVision); // AND: both must be true
// console.log(hasDriversLicense || hasGoodVision); // OR: one must be true
// console.log(!hasDriversLicense); // NOT: inverts the value

// Real-World Example
// const isTired = false; // C
// console.log(hasDriversLicense && hasGoodVision && !isTired);

// if (hasDriversLicense && hasGoodVision && !isTired) {
//   console.log("Sarah is able to drive!");
// } else {
//   console.log("Someone else should drive...");
// }

// Complex Logic with Parentheses

// const age = 20;
// const hasPermission = true;
// const hasExperience = false;

// Can drive if: (age >= 18 OR has permission) AND has experience
// if ((age >= 18 || hasPermission) && hasExperience) {
//   console.log("Approved to drive");
// } else {
//   console.log("Not approved to drive");
// }

// Practice Logical Operators
// Exercise 1: Club Entry System

// Create a club entry system with these rules:
// Entry allowed if: (age >= 21 AND hasID) OR isVIP
 
// const age = 19; // Try different values
// const hasID = true; // Try different values
// const isVIP = false; // Try different values
 
// Your logic here:
// if ((age >= 21 && hasID) || isVIP) {
//   console.log("Welcome to the club!");
// } else {
//   console.log("Sorry, you cannot enter");
// }

// Exercise 2: Weather Advisor
// Create a weather advisor:
// const temperature = 25; // Celsius
// const isRaining = false;
// const isWindy = true;
 
// Advice rules:
// Perfect day: temp 20-30 AND not raining AND not windy
// Good day: temp 15-35 AND not raining
// Stay inside: anything else
 
// if (temperature >= 20 && temperature <= 30 && !isRaining && !isWindy) {
//   console.log("Perfect day!");
// } else if (temperature >= 15 && temperature <= 35 && !isRaining) {
//   console.log("Good day!");
// } else {
//   console.log("Stay inside.");
// }

// Basic Ternary Syntax

// const age = 23;

// Basic ternary: condition ? valueIfTrue : valueIfFalse
// const drink = age >= 18 ? "wine 🍷" : "water 💧";
// console.log(drink);

// Equivalent if/else (more verbose)
// let drink2;
// if (age >= 18) {
//   drink2 = "wine 🍷";
// } else {
//   drink2 = "water 💧";
// }
// console.log(drink2);

// Ternary in Template Literals 
// console.log(`I like to drink ${age >= 18 ? "wine 🍷" : "water 💧"}`);

// When to Use Ternary vs if/else
// const status = score >= 60 ? "passed" : "failed";
// const message = isLoggedIn ? "Welcome back!" : "Please log in";
// const discount = isPremium ? 0.2 : 0.1; 

// if (score >= 90) {
//   console.log("Excellent!");
//   grade = "A";
//   bonus = true;
// } else if (score >= 80) {
//   console.log("Good job!");
//   grade = "B";
// } // ... etc

// Practice Ternary
// Exercise 1: Status Messages

//1. Login status
// const isLoggedIn = true;
// let welcomeMessage;
// if (isLoggedIn) {
//   welcomeMessage = "Welcome back!";
// } else {
//   welcomeMessage = "Please sign in";
// }

// Ternary Version
// 1. Login status
// const isLoggedIn = true;
// let welcomeMessage = isLoggedIn ? "Welcome back!" : "Please sign in";
// console.log(welcomeMessage);
 
// 2. Price with discount
// const isPremium = false;
// let price;
// if (isPremium) {
//   price = 100 * 0.8; // 20% discount
// } else {
//   price =

// Ternary Version
// 2. Price with discount
// const isPremium = false;
// let price = isPremium ? 100 * 0.8 : 100;
// console.log(price);

// Exercise 2: Smart Responses
// const score = 85;
// const weather = "sunny";
// const battery = 15; // percentage
 
// Smart responses
// const scoreMessage = `Your score: ${score} (${score >= 75 ? "Passed" : "Failed"})`;
// const weatherMessage = `Weather is ${weather} (${weather === "sunny" ? "Great for outdoor activities" : "Stay inside"})`;
// const batteryMessage = `Battery: ${battery}% (${battery < 20 ? "Low battery warning" : "Battery OK"})`;
 
// console.log(scoreMessage);
// console.log(weatherMessage);
// console.log(batteryMessage);

// Final Challenge: Tip Calculator
// Coding Challenge #4
 
// const bill = 275; // Test with 275, 40, and 430
 
// Tip calculation using ternary
// const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
 
// Output with template literal
// console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);
 