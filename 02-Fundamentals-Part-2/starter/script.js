'use strict'

//Strict MODE

let hasDriversLicense = false
const passTest = true

//script.js:9 Uncaught ReferenceError: hasDriverLicense is not defined
if(passTest) hasDriverLicense = true
//Could not find name 'hasDriverLicense'. Did you mean 'hasDriversLicense'?ts(2570)
if(passTest) hasDriversLicense = true

if(hasDriversLicense) console.log('I can drive :D')

const interface = 'Audio'
const private = 234
//Uncaught SyntaxError: Unexpected strict mode reserved word (at script.js:15:7)


// Functions﻿
// Write a function called describeCountry which takes three parameters: country, population and capitalCity. Based on this input, the function returns a string with this format: 'Finland has 6 million people and its capital city is Helsinki'.

// Call this function 3 times, with input data for 3 different countries. Store the returned values in 3 different variables, and log them to the console.


