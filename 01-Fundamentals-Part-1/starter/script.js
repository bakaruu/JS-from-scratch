// Values and Variables

// Declare variables called country, continent and population and assign their values according to your own country (population in millions).

// Log their values to the console.

let country = "Spain"
let continent = "Europe"
let population = 13

console.log(country)
console.log(continent)
console.log(population)


// Data Types﻿
// Declare a variable called isIsland and set its value according to your country. The variable should hold a Boolean value. Also declare a variable language, but don't assign it any value yet.

// Log the types of isIsland, population, country and language to the console.

let isIsland = false
let language

console.log(typeof isIsland)
console.log(typeof population)
console.log(typeof continent)
console.log(typeof country)

// let, const and var﻿
// Set the value of language to the language spoken where you live (some countries have multiple languages, but just choose one).

// Think about which variables should be const variables (which values will never change, and which might change?). Then, change these variables to const.

// Try to change one of the changed variables now, and observe what happens.

language = 'Spanish';
// const country2 = 'Spain';
// const continent2 = 'Europe';
// const isIsland2 = false;
// isIsland2 = true
// //script.js:40 Uncaught TypeError: Assignment to constant variable. at script.js:40:11
// console.log(isIsland)



// Basic Operators﻿

// If your country split in half, and each half would contain half the population, then how many people would live in each half?

let halfOfPopulation = population / 2
console.log(halfOfPopulation)
// or 
console.log(population / 2)

// Increase the population of your country by 1 and log the result to the console.
population++
console.log(population)

// Finland has a population of 6 million. Does your country have more people than Finland?
let finlandPopulation = 6
console.log(population > finlandPopulation)
//or 

console.log(population > 6)

// The average population of a country is 33 million people. Does you country have less people than the average country?

console.log(population >= 33)

// Based on the variables you created, create a new variable description which contains a string with this format: 'Spain is in Europe, and its 45 million people speak spanish'.

let description = country + " Is in " + continent
  + " and its " + population + " million people speak " + language

console.log(description)


// Strings and Template Literals﻿
// Recreate the description variable from the last assignment, this time using the template literal syntax.

let descriptionLiterals = `${country} is in ${continent} and its ${population} million people speak ${language}`

console.log(descriptionLiterals)


// Taking Decisions: if / else Statements﻿
// If your country's population is greater than 33 million, log a string like this to the console: "Portugal's population is 22 million below average" (the 22 is the average of 33 minus the country's population).

// After checking the result, change the population temporarily to 13 and then to 130. See the different results, and set the population back to original.


if (population > 33) {
  console.log(`${country}'s population is above average`);
} else {
  console.log(
    `${country}'s population is ${33 - population} million below average`
  );
}


console.log("TYPE CONVERSION AND COERCION")
//   Type Conversion and Coercion﻿
// Predict the result of these 5 operations without executing them:


//TYPE CONVERSION
const inputYear = '1991'
// const inputYear = Number('1991')
console.log(Number(inputYear), inputYear)
console.log(Number(inputYear) + 18)
console.log(Number('Albert')) // = NaN, its a number but an invalid one
console.log(String(23))


//TYPE COERCION

console.log('i am' + 23 + ' years old')
console.log('23' - '10' - 3) // minus operation triggers the opposite conversion

let n = '1' + 1
n = n - 1
console.log(n) // = 10


console.log('9' - '5'); // -> ? 4
console.log('19' - '13' + '17'); // -> ? 617
console.log('19' - '13' + 17); // -> ? 23
console.log('123' < 57); // -> ?false
console.log(5 + 6 + '4' + 9 - 4 - 2); // -> ? 1143



//Truthy and Falsy Values

console.log(Boolean(0))
console.log(Boolean(undefined))
console.log(Boolean('Aru'))
console.log(Boolean({}))
console.log(Boolean(''))

const money = 200

if (money) {
  console.log("Don't spend it all ;")
} else {
  console.log('You should get a job!')
}


let height = 0
if (height) {
  console.log('YAY! Height is defined')
} else {
  console.log('Height is UNDEFINED')
}


// Equality Operators: == vs. ===﻿

// ==
// performs a loose comparison, meaning it checks if the values are equivalent after performing type coercion if necessary.

5 == '5';  // true (because '5' is coerced to the number 5)
true == 1;  // true (because true is coerced to 1)
null == undefined;  // true (special case, both are considered loosely equal)


// === strict comparison, meaning it checks for both value and type equality. No type conversion is done, so both the value and the type must be the same for the comparison to return true

5 === '5';  // false (because 5 is a number and '5' is a string)
true === 1;  // false (because true is a boolean and 1 is a number)
null === undefined;  // false (because they are different types)




// Declare a variable numNeighbours based on a prompt input like this:
// prompt('How many neighbour countries does your contry have?');

// let numNeighbours = prompt('How many neighbour countries does your contry have?')

// // If there is only 1 neighbour, log to the console 'Only 1 border!' (use loose equality == for now).

// // Use an else-if block to log 'More than 1 border' in case numNeighbours is greater than 1.

// // Use an else block to log 'No borders' (this block will be executed when numNeighbours is 0 or any other value).

// // Test the code with different values of numNeighbours, including 1 and 0.

// if (numNeighbours === 1) { // works cause coercion string to number
//   console.log('Only 1 border!')

// } else if (numNeighbours > 1) {
//   console.log('More than 1 border')
// } else {
//   console.log('No borders')
// }

// Change == to ===, and test the code again, with the same values of numNeighbours. Notice what happens when there is exactly 1 border! Why is this happening?

// Finally, convert numNeighbours to a number, and watch what happens now when you input 1.
// let numNeighbours2 = Number(prompt('How many neighbour countries does your contry have?'))

// if (numNeighbours2 === 1) {
//   console.log('Only 1 border!')

// } else if (numNeighbours2 > 1) {
//   console.log('More than 1 border')
// } else {
//   console.log('No borders')
// }
// Reflect on why we should use the === operator and type conversion in this situation.


console.log('Boolean Logic')
//Boolean Logic

console.log(true && true);  // true
console.log(true && false); // false
console.log(false && false); // false



// Logical Operators﻿

// && (AND): Both conditions must be true for the result to be true.
// || (OR): At least one condition must be true for the result to be true.
// ! (NOT): Inverts the boolean value (true becomes false, false becomes true).
// Falsy values: 0, "", null, undefined, NaN, false.
// Truthy values: Anything not falsy, including non-empty strings, objects, arrays, and non-zero numbers.

// Let's say Sarah is looking for a new country to live in. She wants to live in a country that speaks English, has less than 50 million people and is not an island.

// Write an if statement to help Sarah figure out if your country is right for her. You will need to write a condition that accounts for all of Sarah's criteria. Take your time with this, and check part of the solution if necessary.

// If yours is the right country, log a strings like this 'You should live in Portugal :)'. If not, log 'Portugal does not meet your criteria :('.

// Probably your country does not meet all the criteria. So go back and temporarily change some variables in order to make the condition true (unless you live in Canada :D).


if (language === 'english' && population < 50 && !isIsland) {
  console.log(`You should live in ${country} :)`);
} else {
  console.log(`${country} does not meet your criteria :(`);
}
//


console.log('The switch statement')


// The switch Statement﻿
// Use a switch statement to log the following string for the given language:

// chinese or mandarin: 'MOST number of native speakers!';

// spanish: '2nd place in number of native speakers';

// english: '3rd place';

// hindi: 'Number 4';

// arabic: '5th most spoken language';

// for all other simply log 'Great language too :D'.


// switch (language) {
//   case 'chinese':
//   case 'mandarin':
//     console.log('MOST number of native speakers!');
//     break;
//   case 'spanish':
//     console.log('2nd place in number of native speakers');
//     break;
//   case 'english':
//     console.log('3rd place');
//     break;
//   case 'hindi':
//     console.log('Number 4');
//     break;
//   case 'arabic':
//     console.log('5th most spoken language');
//     break;
//   default:
//     console.log('Great language too :D');
// }


//The Conditional (Ternary) Operator﻿
//examples
const age = 14
age >= 18 ? console.log('I like to drink wine') : console.log('I like to drink water')

const drink = age >= 18 ? 'wine' : 'water'
console.log(drink)

let drink2

if(age>=18){
  drink2 = 'wine'
}else {
  drink2 = 'water'
}

console.log(`I like to drink ${age >= 18 ? 'wine' : 'water'}`);

// If your country's population is greater than 33 million, use the ternary operator to log a string like this to the console: "Portugal's population is above average". Otherwise, simply log "Portugal's population is below average". Notice how only one word change between these two sentences!

// After checking the result, change the population temporarily to 13 and then to 130. See the different results, and set the population back to original.


console.log(`${country}'s population is ${population > 33 ?'above' : 'below'} average`
);