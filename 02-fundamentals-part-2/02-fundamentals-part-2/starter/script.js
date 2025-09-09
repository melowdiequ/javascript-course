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

// Coding Challenge #2 - Student Grade Manager

//const grades = [78, 85, 92, 67, 88, 95, 73, 82];

// Function to calculate average
//function calculateAverage(grades) {
  //let total = 0;
  //for (let i = 0; i < grades.length; i++) {
    //total += grades[i];
  //}
  //return total / grades.length;
//}

// Function to find highest grade
// function findHighestGrade(grades) {
//   let highest = grades[0];
//   for (let i = 1; i < grades.length; i++) {
//     if (grades[i] > highest) {
//       highest = grades[i];
//     }
//   }
//   return highest;
// }

// Function to find lowest grade
// function findLowestGrade(grades) {
//   let lowest = grades[0];
//   for (let i = 1; i < grades.length; i++) {
//     if (grades[i] < lowest) {
//       lowest = grades[i];
//     }
//   }
//   return lowest;
// }

// Function to count passing students
// function countPassing(grades, passingGrade) {
//   let count = 0;
//   for (let i = 0; i < grades.length; i++) {
//     if (grades[i] >= passingGrade) {
//       count++;
//     }
//   }
//   return count;
// }

// Generate complete report
// const average = calculateAverage(grades);
// const highest = findHighestGrade(grades);
// const lowest = findLowestGrade(grades);
// const passing = countPassing(grades, 70);

// console.log("=== GRADE REPORT ===");
// console.log(`Average: ${average.toFixed(2)}`);
// console.log(`Highest: ${highest}`);
// console.log(`Lowest: ${lowest}`);
// console.log(`Passing students: ${passing} out of ${grades.length}`);

// Part 2 Hour 3: Objects & Data Structures - Student Guide

// const jonasArray = [
//   "Jonas",
//   "Schmedtmann",
//   2037 - 1991,
//   "teacher",
//   ["Michael", "Peter", "Steven"],
// ];

// console.log(jonasArray[0]); // Jonas
// console.log(jonasArray[1]); // Schmedtmann
// console.log(jonasArray[2]); // 46

// console.log("=== OBJECTS ===");

// const jonas = {
//   firstName: "Jonas", 
//   lastName: "Schmedtmann", 
//   age: 2037 - 1991, 
//   job: "teacher", 
//   friends: ["Michael", "Peter", "Steven"], 
// };
// console.log(jonas);

// console.log(jonas.firstName); 
// console.log(jonas.lastName); 
// console.log(jonas.age);
// console.log(jonas.job);
// console.log(jonas.friends);

// console.log(jonas["firstName"]); 
// console.log(jonas["lastName"]);
// console.log(jonas["age"]);

// const nameKey = "Name";
// console.log(jonas["first" + nameKey]); 
// console.log(jonas["last" + nameKey]);

// jonas.job = "programmer";
// jonas["age"] = 35;
// console.log(jonas);

// jonas.location = "Portugal";
// jonas["twitter"] = "@jonasschmedtman";
// jonas.hasDriverLicense = true;
// console.log(jonas);

// Exercise 1: Personal Object
// 1. Create a 'book' object with title, author, pages, and isRead properties
// const book = {
//   title: "All Rhodes Lead Here",
//   author: "Mariana Zapata",
//   pages: 545,
//   isRead: false
// };

// 2. Create a 'playlist' object with name, creator, songs array, and genre
// const playlist = {
//   name: "Bughaw Vibes",
//   creator: "Gly",
//   songs: ["Huwag Kang Matakot", "Buwan", "Mundo"],
//   genre: "OPM"
// };

// 3. Access and log different properties using both dot and bracket notation
// console.log(book.title); 
// console.log(book["pages"]); 
// console.log(playlist.creator); 
// console.log(playlist["songs"]);

// 4. Add a new property to each object
// book.yearPublished = 2020;
// playlist.isPublic = true;

// 5. Modify an existing property in each object
// book.isRead = true;
// playlist.genre = "Pinoy Alternative";

// Final logs
// console.log("Updated Book:", book);
// console.log("Updated Playlist:", playlist);

// const listOfYears = [1991, 1984, 2008, 2020];
// const shoppingList = ["apples", "bananas", "milk", "bread"];
// const testScores = [85, 92, 78, 96];

// const person = {
//   name: "Jonas",
//   age: 46,
//   occupation: "teacher",
// };

// const car = {
//   brand: "Toyota",
//   model: "Camry",
//   year: 2020,
//   color: "blue",
// };

// const student = {
//   name: "Sarah",
//   grades: [85, 92, 78], 
//   address: {
//     street: "123 Main St",
//     city: "New York",
//   },
// };

// console.log(student.grades[0]); 
// console.log(student.address.city); 

// const jonas = {
//   firstName: "Jonas",
//   lastName: "Schmedtmann",
//   birthYear: 1991,
//   job: "teacher",
//   friends: ["Michael", "Peter", "Steven"],
//   hasDriversLicense: true,

//   calcAge: function (birthYear) {
//     return 2037 - birthYear;
//   },
// };

// console.log(jonas.calcAge(1991)); 
// console.log(jonas.calcAge(jonas.birthYear));

// const jonasImproved = {
//   firstName: "Jonas",
//   lastName: "Schmedtmann",
//   birthYear: 1991,
//   job: "teacher",
//   friends: ["Michael", "Peter", "Steven"],
//   hasDriversLicense: true,

//   calcAge: function () {
//     console.log(this); 
//     return 2037 - this.birthYear; 
//   },
// };

// console.log(jonasImproved.calcAge());

// const jonasAdvanced = {
//   firstName: "Jonas",
//   lastName: "Schmedtmann",
//   birthYear: 1991,
//   job: "teacher",
//   friends: ["Michael", "Peter", "Steven"],
//   hasDriversLicense: true,

//   calcAge: function () {
//     this.age = 2037 - this.birthYear; 
//     return this.age;
//   },

//   getSummary: function () {
//     return `${this.firstName} is a ${this.calcAge()}-year old ${
//       this.job
//     }, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license.`;
//   },
// };

// console.log(jonasAdvanced.calcAge());
// console.log(jonasAdvanced.age); 
// console.log(jonasAdvanced.getSummary());

// Exercise 2: Calculator Object
// const calculator = {
//   num1: 10,
//   num2: 5,
//   operator: "+",

//   add: function () {
//     return this.num1 + this.num2;
//   },

//   subtract: function () {
//     return this.num1 - this.num2;
//   },

//   multiply: function () {
//     return this.num1 * this.num2;
//   },

//   divide: function () {
//     return this.num1 / this.num2;
//   },

//   calculate: function () {
//     if (this.operator === "+") return this.add();
//     if (this.operator === "-") return this.subtract();
//     if (this.operator === "*") return this.multiply();
//     if (this.operator === "/") return this.divide();
//     return "Invalid operator";
//   },

//   getResult: function () {
//     return `${this.num1} ${this.operator} ${this.num2} = ${this.calculate()}`;
//   },
// };

// // Test your calculator
// console.log(calculator.calculate()); 
// console.log(calculator.getResult()); 

// Coding Challenge #3 - User Profile System

// const user = {
//   firstName: "Sarah",
//   lastName: "Johnson",
//   birthYear: 1995,
//   location: "New York",
//   interests: ["photography", "travel", "coding"],
//   friends: [
//     { name: "Michael", status: "active" },
//     { name: "Emma", status: "inactive" },
//     { name: "David", status: "active" },
//   ],
//   isActive: true,

  // Calculate age method
  // calcAge: function () {
  //   const currentYear = new Date().getFullYear();
  //   this.age = currentYear - this.birthYear;
  //   return this.age;
  // },

  // Add friend method
  // addFriend: function (name, status = "active") {
  //   this.friends.push({ name, status });
  //   return this.friends.length;
  // },

  // Get active friends count
  // getActiveFriends: function () {
  //   return this.friends.filter(friend => friend.status === "active").length;
  // },

  // // Toggle active status
  // toggleStatus: function () {
  //   this.isActive = !this.isActive;
  //   return this.isActive;
  // },

  // Generate profile summary
//   getSummary: function () {
//     this.calcAge();
//     return `
// User Profile Summary
// --------------------
// Name: ${this.firstName} ${this.lastName}
// Age: ${this.age}
// Location: ${this.location}
// Status: ${this.isActive ? "Online" : "Offline"}
// Friends: ${this.friends.length} total, ${this.getActiveFriends()} active
// Interests: ${this.interests.join(", ")}
// `;
//   },
// };

// Test your user profile system
// console.log(user.getSummary());
// user.addFriend("Alex", "active");
// user.toggleStatus();
// console.log(`\nAfter updates:`);
// console.log(user.getSummary());

// ====== State ======
const gameState = {
  scores: [0, 0],         // [p1, p2]
  target: 5,
  gameActive: true,

  setTarget(n) {
    this.target = Math.max(1, Math.min(20, Number(n) || 1));
    document.querySelector(".target").textContent = this.target;
  },

  reset() {
    this.scores = [0, 0];
    this.gameActive = true;
    this.updateDisplay();
    clearWinStyles();
    hideWinner();
  },

  addPoint(playerIndex) {
    if (!this.gameActive) return;
    this.scores[playerIndex]++;
    this.updateDisplay();
    this.checkWinner();
  },

  updateDisplay() {
    document.getElementById("score-1").textContent = this.scores[0];
    document.getElementById("score-2").textContent = this.scores[1];
  },

  checkWinner() {
    const [s1, s2] = this.scores;
    if (s1 >= this.target || s2 >= this.target) {
      this.gameActive = false;
      const winner = s1 > s2 ? 1 : 2;
      showWinner(winner);
      applyWinStyles(winner);
    }
  }
};

// ====== DOM refs ======
const addButtons = document.querySelectorAll(".btn-add");
const resetBtn = document.getElementById("btn-reset");
const inputTarget = document.getElementById("winning-score");
const winnerEl = document.querySelector(".winner");
const winnerNameEl = document.querySelector(".winner-name");
const players = {
  1: document.querySelector(".player-1"),
  2: document.querySelector(".player-2"),
};

// ====== Helpers (UI) ======
function showWinner(winner) {
  winnerNameEl.textContent = `Player ${winner}`;
  winnerEl.classList.remove("hidden");
  document.querySelector(".status").textContent = `Game Over • Player ${winner} reached ${gameState.target}`;
}

function hideWinner() {
  winnerEl.classList.add("hidden");
  document.querySelector(".status").innerHTML = `First to <span class="target">${gameState.target}</span> wins!`;
}

function applyWinStyles(winner) {
  const loser = winner === 1 ? 2 : 1;
  players[winner].classList.add("winner");
  players[loser].classList.add("loser");
}

function clearWinStyles() {
  Object.values(players).forEach(p => {
    p.classList.remove("winner", "loser");
  });
}

// ====== Events ======
addButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const who = Number(btn.dataset.player) - 1; // 0 or 1
    gameState.addPoint(who);
  });
});

resetBtn.addEventListener("click", () => gameState.reset());

inputTarget.addEventListener("input", () => {
  gameState.setTarget(inputTarget.value);
});

// Keyboard shortcuts: "1" -> P1, "2" -> P2, "R" -> reset
document.addEventListener("keydown", (e) => {
  if (e.key === "1") gameState.addPoint(0);
  if (e.key === "2") gameState.addPoint(1);
  if (e.key.toLowerCase() === "r") gameState.reset();
});

// Init
gameState.setTarget(inputTarget.value);
gameState.reset();

