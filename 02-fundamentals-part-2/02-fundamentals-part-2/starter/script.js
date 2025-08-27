console.log("Part 2: Functions ready!");

// Functions - Declarations and Expressions
console.log("=== FUNCTIONS ===");

// Function declarion
function logger() {
    console.log("My name is Glyza");
}

// Calling / running / invoking the function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor (5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

// Function Expressions
const calcAge = function (birthYear) {
    return 2037 - birthYear;
};

const age1 = calcAge(1991);
console.log(age1);

function calcAge(birthYear, currentYear) {
    const age = currentYear - birthYear;
    return age;
}

const myAge = calcAge(1991, 2037);
const herAge = calcAge(2005, 2037);

console.log(`I am ${myAge} years old`);
console.log(`She is ${herAge} years old`);

function introduce(firstName, lastName, age) {
    const introduction = `HI, I'm ${firstName} ${lastName} and I'm ${age} years old.`;
    return introduction;
}

console.log(introduce("Jonas", "Schmedtmann", 46));
console.log(introduce("Sarah"));

// Return Values and Scope
function calcAge(birthYear) {
    return 2037 - birthYear;
}

function yearsUntilRetirement(birthYear, firstName) {   
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if (retirement > 0) {
        return `${firstName} retires in ${retirement} years`;
    } else {
        return `${firstName} has already retired!;
    }
}

console.log(yearsUntilRetirement(1991, "Jonas"));
console.log(yearsUntilRetirement(1950, "Mike"));'

// Global