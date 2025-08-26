// JavaScript Fundamentals - Hour 2

//Exercise: Score Calculator
let score = 100;

score += 50; //Add 50 → 150
score *= 2;  //Multiply by 2 → 300
score -= 25; //Subtract 25 → 275
score++;     //Increment once → 276
score++;     //Increment again → 277

console.log(score); // Final result: 277

//Exercise: Age Verification

const myAge = 20;

// 1. Compare age to 18
console.log(myAge >= 18); 

// 2. Check if 100 is greater than 99
console.log(100 > 99); 

// 3. Store a comparison result in a variable
let isAdult = myAge >= 18;
console.log(isAdult);

// 4. Compare the result of two calculations
console.log((10 + 5) * 2 > (50 / 2)); 

//Coding Challenge #1: BMI Calculator

// Test Data 1
let massMark = 78;
let heightMark = 1.69;
let massJohn = 92;
let heightJohn = 1.95;

// 1. Calculate BMIs
let bmiMark = massMark / (heightMark ** 2);
let bmiJohn = massJohn / (heightJohn ** 2);

// 2. Create markHigherBMI variable
let markHigherBMI = bmiMark > bmiJohn;

// 3. Log results to console
console.log("Test Data 1:");
console.log("Mark's BMI:", bmiMark);
console.log("John's BMI:", bmiJohn);
console.log("Does Mark have a higher BMI than John?", markHigherBMI);


// Test Data 2
massMark = 95;
heightMark = 1.88;
massJohn = 85;
heightJohn = 1.76;

// Recalculate BMIs
bmiMark = massMark / (heightMark ** 2);
bmiJohn = massJohn / (heightJohn ** 2);

markHigherBMI = bmiMark > bmiJohn;

console.log("\nTest Data 2:");
console.log("Mark's BMI:", bmiMark);
console.log("John's BMI:", bmiJohn);
console.log("Does Mark have a higher BMI than John?", markHigherBMI);

