// console.log("Part 2: Functions ready!");

// // Functions - Declarations and Expressions
// console.log("=== FUNCTIONS ===");

// // Function declarion
// function logger() {
//     console.log("My name is Glyza");
// }

// // Calling / running / invoking the function
// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//     console.log(apples, oranges);
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//     return juice;
// }

// const appleJuice = fruitProcessor (5, 0);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

// // Function Expressions
// const calcAge = function (birthYear) {
//     return 2037 - birthYear;
// };

// const age1 = calcAge(1991);
// console.log(age1);

// function calcAge(birthYear, currentYear) {
//     const age = currentYear - birthYear;
//     return age;
// }

// const myAge = calcAge(1991, 2037);
// const herAge = calcAge(2005, 2037);

// console.log(`I am ${myAge} years old`);
// console.log(`She is ${herAge} years old`);

// function introduce(firstName, lastName, age) {
//     const introduction = `HI, I'm ${firstName} ${lastName} and I'm ${age} years old.`;
//     return introduction;
// }

// console.log(introduce("Jonas", "Schmedtmann", 46));
// console.log(introduce("Sarah"));

// // Return Values and Scope
// function calcAge(birthYear) {
//     return 2037 - birthYear;
// }

// function yearsUntilRetirement(birthYear, firstName) {   
//     const age = calcAge(birthYear);
//     const retirement = 65 - age;

//     if (retirement > 0) {
//         return `${firstName} retires in ${retirement} years`;
//     } else {
//         return `${firstName} has already retired!`;
//     }
// }


// console.log(yearsUntilRetirement(1991, "Jonas"));
// console.log(yearsUntilRetirement(1950, "Mike"));

// // Global scope
// const globalVar = "I am global";

// function testScope() {
//     const localVar= "I am local";
//     console.log(globalVar);
//     console.log(localVar);
// }

// testScope();
// console.log(globalVar);

// const userName = "Jonas";

// function createWelcomeMessage(user) {
//     const message = `Welcome back, ${user}!`;
//     const timestamp = new Date().toLocaleTimeString();

//     return `${message} Current time: ${timeStamp}`;
// }

// console.log(createWelcomeMessage(userNamw));

// Coding Challenge #1: Function Calculator

// function calcAverage(score1, score2, score3) {
//  const average = (score1 + score2 + score3) / 3
//  return average; 
// }

// function checkWinner(avgDolphin, avgKoalas) {
//     if (avgDolphin >= avgKoalas * 2) {
//         return `Dolphin win ${avgDolphin} vs ${avgKoalas}`;
//     } else  if (avgKoalas >= avgDolphin * 2) {
//         return `Koalas win${avgKoalas} vs ${avgDolphin}`;
//    } else {
//     return `No team wins! Dolphin: ${avgDolphin} , Koalas: ${avgKoalas}`;
//    }
// }

// let scoreDolphins = calcAverage(44, 23, 71);
// let scoreKoalas = calcAverage(65, 54, 49);
// console.log(checkWinner(scoreDolphins, scoreKoalas));

// scoreDolphins = calcAverage(85, 54, 41);
// scoreKoalas = calcAverage(23, 34, 27);
// console.log(checkWinner(scoreDolphins, scoreKoalas));

// const grades = [85, 92, 78, 96, 88];
// console.log(grades);

// Arrays - Creation and Access
// console.log ("=== ARRAYS ===");

// const friends = ["Michael", "Steven", "Peter"];
// console.log(friends);

// const mixed = ["Jonas", 27, true, friends];
// console.log(mixed);

// const years = new Array(1991, 1984, 2008, 2020);
// console.log(years);

// Array indexing starts at 0
// console.log(friends[0]);
// console.log(friends[1]);
// console.log(friends[3]);

// console.log (friends.length);

// console.log(friends[friends.length - 1]);

// friends[1] = "Jay";
// console.log(friends);

// const firstName = "Glyza";
// const jonas = [firstName, "Schmedtmann", 2037 - 1991];
// console.log(jonas);

// const calcAge = function (birthYear) {
//     return 2037 - birthYear;
// };

// const ages = [calcAge(1991), calcAge(1967), calcAge(2002)];
// console.log(ages);

// const friends = ["Michael", "Steven", "Peter"];

// const newLength = friends.push("Jay");
// console.log(friends);

// console.log(newLength);

// friends.unshift("John");
// console.log(friends);

// const popped = friends.pop();
// console.log(popped);
// console.log(friends);

// const shifted = friends.shift();
// console.log(shifted);
// console.log(friends);

// console.log(friends.indexOf("Steven"));
// console.log(friends.indexOf("Bob"));

//const friends = ["Michael", "Steven", "Peter"];
// for (let i = 0; 1 < friends.length; i++) {
//     console.log(friends[i]);
// }

// const years = [1991, 2007, 1969, 2020];
// const age = [];
// for (let i=0; i < years.length; i++) {
//     ages.push(2037 - years[i]);
// }
// console.log(ages);

// friends.forEach(function (friend, index) {
//     console.log(`${index}: ${friend}`);
// })

// friends.forEach((friend, index) => {
//     console.log(`Friend ${index + 1}: ${friend}`);
// });

// const grades = [85, 92, 78, 96, 88, 74];
// let total = 0;

// for (let i = 0; i < grades.length; i++) {
//     total += grades[i];
// }
// const average = total / grades.length;
// console.log(`Average grade: ${average.toFixed(2)}`);

// let passedCount = 0;
// grades.forEach((grade) => {
//     if (grade >=70) passedCount++;
// });
// console.log(`${passedCount} out of ${grades.length} students passed`);

// Coding Challenge #2: Student Grade Manager

const grades = [78, 85, 92, 67, 88, 95, 73, 82];

function calculateAverage(grades) {

}

function findHIghestGrade(grades) {

}

function findLowestGrade(grades)
