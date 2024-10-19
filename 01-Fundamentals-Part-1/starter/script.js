// Values and Variables

// Declare variables called country, continent and population and assign their values according to your own country (population in millions).

// Log their values to the console.

let country= "Spain"
let continent = "Europe"
let population = 45

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
console.log(population>finlandPopulation)
//or 

console.log(population>6)

// The average population of a country is 33 million people. Does you country have less people than the average country?

console.log(population>= 33)

// Based on the variables you created, create a new variable description which contains a string with this format: 'Spain is in Europe, and its 45 million people speak spanish'.

let description = country + " Is in " + continent
+ " and its " + population + " million people speak " + language

console.log(description)


// Strings and Template Literals﻿
// Recreate the description variable from the last assignment, this time using the template literal syntax.

let descriptionLiterals = `${country} is in ${continent} and its ${population} million people speak ${language}`

console.log(descriptionLiterals)


