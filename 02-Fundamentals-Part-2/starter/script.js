'use strict'

//Strict MODE

// let hasDriversLicense = false
// const passTest = true

// //script.js:9 Uncaught ReferenceError: hasDriverLicense is not defined
// if(passTest) hasDriverLicense = true
// //Could not find name 'hasDriverLicense'. Did you mean 'hasDriversLicense'?ts(2570)
// if(passTest) hasDriversLicense = true

// if(hasDriversLicense) console.log('I can drive :D')

// const interface = 'Audio'
// const private = 234
// //Uncaught SyntaxError: Unexpected strict mode reserved word (at script.js:15:7)


// Functions﻿

// //Examples.
// function logger(){
//     console.log('My name is Aru')
// }
// //calling / running / invoking function
// logger()


// function fruitProcessor(apples, oranges){
//     console.log(apples, oranges)

//     const juice = `Juice with ${apples} apples and ${oranges} oranges`

//     return juice
// }

// fruitProcessor(2, 3)

// let result = fruitProcessor(2,3)
// console.log(result)
// console.log(fruitProcessor(44, 4))


// Write a function called describeCountry which takes three parameters: country, population and capitalCity. Based on this input, the function returns a string with this format: 'Finland has 6 million people and its capital city is Helsinki'.

// function describeCountry(country, population, capitalCity){

//     const result = `${country} has ${population} million people and its capital city is ${capitalCity}`

//     return result

//     //or
//     // return `${country} has ${population} million people and its capital city is ${capitalCity}`;
// }

// // Call this function 3 times, with input data for 3 different countries. Store the returned values in 3 different variables, and log them to the console.

// console.log(describeCountry('Spain', 45, 'Madrid'))
// console.log(describeCountry('France', 68.4, 'Paris'))
// console.log(describeCountry('UK', 68, 'London'))




// Function Declarations vs. Expressions﻿

//Function declaration
//Function declarations are hoisted, meaning they are available throughout the scope (even before they are defined in the code). This means we can call the function before it is defined in the code.
function calcAge1(birthYear) {

    return 2024 - birthYear
}
const age1 = calcAge1(1988)
console.log(age1)

//Function expression, anonymous function
// Function expressions are not hoisted. This means you cannot call the function before it is defined in the code. It behaves just like any other variable, and the function is only available after the expression is evaluated.
const calcAge2 = function (birthYear) {
    return 2024 - birthYear
}
const age2 = calcAge1(1988)
console.log(age2)


// The world population is 7900 million people. Create a function declaration called percentageOfWorld1 which receives a population value, and returns the percentage of the world population that the given population represents. For example, China has 1441 million people, so it's about 18.2% of the world population.

// To calculate the percentage, divide the given population value by 7900 and then multiply by 100.

// Call percentageOfWorld1 for 3 populations of countries of your choice, store the results into variables, and log them to the console.

// Create a function expression which does the exact same thing, called percentageOfWolrd2, and also call it with 3 country populations (can be the same populations).

function percentageOfWorld1(population) {
    return (population / 7900) * 100;
}

const percentageOfWorld2 = function (population) {
    return (population / 7900) * 100;
};

const percSpain = percentageOfWorld1(103);
const percFrance = percentageOfWorld1(143);
const percUk = percentageOfWorld1(233);

console.log(percSpain, percFrance, percUk);



//  Arrow Functions﻿

const calcAge3 = birthYear => 2036 - birthYear
const age3 = calcAge3(1991)
console.log(age3)

//with multiples arguments
const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear
    const retirement = 65 - age
    return `${firstName} retires in ${retirement} years`
}

console.log(yearsUntilRetirement(1991))

// Recreate the last assignment, but this time create an arrow function called percentageOfWorld3.

const perfentageOfWorld3 = population => (population / 7900) * 100


console.log(percSpain, percFrance, percUk);


// Functions Calling Other Functions﻿

const cutPieces = function (fruit) {
    return fruit * 4
}

const fruitProcessor = function (apples, oranges) {

    const applePieces = cutPieces(apples)
    const orangePieces = cutPieces(oranges)


    const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges`

    return juice
}

console.log(fruitProcessor(2, 3))


// Create a function called describePopulation. Use the function type you like the most. This function takes in two arguments: country and population, and returns a strings like this: 'China has 1441 million people, which is about 18.2% of the world'.

// To calculate the percentage, describePopulation calls the percentageOfWorld1 you created earlier.

// Call describePopulation with data for 3 countries of your choice.

const describePopulation = function (country, population) {
    const percentage = percentageOfWorld1(population);
    const description = `${country} has ${population} million people, which is about ${percentage}% of the world.`;
    console.log(description);
};

describePopulation('Portugal', 10);
describePopulation('China', 1441);
describePopulation('USA', 332);


//challenge #1
/* Write your code below. Good luck! 🙂 */

const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

const scoreDolphins = calcAverage(44, 23, 71);
const scoreKoalas = calcAverage(65, 54, 49);

function checkWinner(avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {  // Dolphins must have at least double the score
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgKoalas >= 2 * avgDolphins) {  // Koalas must have at least double the score
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
    } else {
        console.log(`No team wins...`);
    }
}

checkWinner(scoreDolphins, scoreKoalas);



// Introduction to Arrays﻿

const friend1 = 'Michael'
const friend2 = 'Steven'
const friend3 = 'Peter'

//literal sintax
const friends = ['Michael', 'Steven', 'Peter']
console.log(friends)

const years = new Array(1991, 1212, 12222, 1222)

console.log(friends[0])
console.log(friends[2])
console.log(friends.length)
console.log(friends[friends.length - 1])// any position we want to show, we can use expressions which produces a value, js expect an expression, not an statement.

friends[2] = 'Example we can change the arrays'
console.log(friends)

//friends = ['Bob', 'Alice'], this cant be.


//Exercise
const calcAge = function (birthYear) {
    return 2024 - birthYear
}

const years2 = [1990, 1967, 2002, 2010, 2018]

const age = calcAge(years2[0])
const age22 = calcAge(years2[1])
const age33 = calcAge(years2[years2.length - 1])
console.log(age, age22, age33)

//we can use expressions.Calling functions inside an Array
const ages = [calcAge(years2[0]), calcAge(years2[1]), calcAge(years2[years2.length - 1])]


// Create an array containing 4 population values of 4 countries of your choice. You may use the values you have been using previously. Store this array into a variable called populations.

// Log to the console whether the array has 4 elements or not (true or false).

// Create an array called percentages containing the percentages of the world population for these 4 population values. Use the function percentageOfWorld1 that you created earlier to compute the 4 percentage values.


const populations = [12, 14, 33, 22]

console.log(populations.length === 4)

const percentages = [percentageOfWorld1(populations[0]),
                    percentageOfWorld1(populations[1]), 
                    percentageOfWorld1(populations[2]), 
                    percentageOfWorld1(populations[3])]



console.log(percentages)




// Basic Array Operations (Methods)﻿

const friends2 = ['Michael', 'Steven', 'Peter']
//.push add elements to the array
friends2.push('Murdok')
console.log(friends2)

//.unshift is used to add one or more elements to the beginning of an array
friends2.unshift('Murdok')
console.log(friends2)


//remove the last element of an Array
friends2.pop()
console.log(friends2)

// used to remove the first element from an array
friends2.shift()
console.log(friends2)


console.log(friends2.indexOf('Michael'))

friends2.push(23)
console.log(friends2.includes('Steven'))
console.log(friends2.includes('Bob'))

if(friends2.includes('Peter')){
    console.log('You have a friend called Peter')
}


//CHALLENGE #2
/* Write your code below. Good luck! 🙂 */

function calcTip(bill){
    if(bill>50 && bill <300){
        const tip = (bill * 15) / 100;

        return tip
    }else{
        const tip = (bill * 20) / 100;

        return tip
    }
    
}

console.log(calcTip(100))

const bills = [125, 555, 44]

const tips = new Array(calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2]))

console.log(tips)

const totals = new Array(bills[0]+ tips[0], bills[1]+tips[1], bills[2]+tips[2])
console.log(totals)



// Create an array containing all the neighbouring countries of a country of your choice. Choose a country which has at least 2 or 3 neighbours. Store the array into a variable called neighbours.

// At some point, a new country called 'Utopia' is created in the neighbourhood of your selected country, so add it to the end of the neighbours array.

// Unfortunately, after some time the new country is dissolved, so remove it from the end of the array.

// If the neighbours array does not include the country 'Germany', log to the console: 'Probably not a central european country :D'.

// Change the name of one of your neighbouring countries. To do that, find the index of the country in the neighbours array, and then use that index to change the array at that index position. For example, you can search for 'Sweden' in the array, and then replace it with 'Republic of Sweden'.

const neighbours = ['Norway', 'Sweden', 'Russia'];

neighbours.push('Utopia');
console.log(neighbours);

neighbours.pop();
console.log(neighbours);

if (!neighbours.includes('Germany')) {
  console.log('Probably not a central European country :D');
}

neighbours[neighbours.indexOf('Sweden')] = 'Republic of Sweden;';
console.log(neighbours);


// Introduction to Objects﻿
// Create an object called myCountry for a country of your choice, containing properties country, capital, language, population and neighbours (an array like we used in previous assignments).

const myCountry = {
    country: 'Finland',
    capital: 'Helsinki',
    language: 'finnish',
    population: 6,
    neighbours: ['Norway', 'Sweden', 'Russia']
  };


// // Dot vs. Bracket Notation﻿

// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Perez',
//     age: 2037- 1992,
//     job: 'teacher',
//     friends: ['Mike', 'Lau']
// }
// console.log(jonas)

// console.log(jonas.lastName)
// console.log(jonas['lastName'])

// const nameKey = 'Name'
// console.log(jonas['first' + nameKey])
// console.log(jonas['last' + nameKey])


// const nameIn = prompt('what choice?',)
// console.log(jonas[nameIn])


// //  Challenge
// // Jonas has 2 friends, and his best friend is called Mike

// console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`)


// //   Using the object from the previous assignment, log a string like this to the console: 'Finland has 6 million finnish-speaking people, 3 neighbouring countries and a capital called Helsinki'.
  
// //   Increase the country's population by two million using dot notation, and then decrease it by two million using bracket notation.

// console.log(
//     `${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`
//   );
  
//   myCountry.population += 2;
//   console.log(myCountry.population);
  
//   myCountry['population'] -= 2;
//   console.log(myCountry.population);



//   Object Methods﻿

  
const jonas = {
    firstName: 'Jonas',    
    lastName: 'Perez',
    birthYear: 1991,
    job: 'teacher',
    friends: ['Mike', 'Lau'],
    hasDriverLicense: true,

    

    calcAgeBetter: function(){
        this.age = 2037 - this.birthYear
        return this.age
    },

    getSummary: function(){
        return `${this.firstName} is a ${this.calcAgeBetter()}-year old ${jonas.job}, and he has ${this.hasDriverLicense ? 'a' : 'no'} driver's license.`
    },

    

    showInfo: function(){
        return `${this.firstName}\n${this.lastName}`;
    },
}

jonas.calcAgeBetter();
console.log(jonas.age);

console.log(jonas.getSummary())



//   Add a method called describe to the myCountry object. This method will log a string to the console, similar to the string logged in the previous assignment, but this time using the 'this' keyword.
  
//   Call the describe method.
  
//   Add a method called checkIsland to the myCountry object. This method will set a new property on the object, called isIsland. isIsland will be true if there are no neighbouring countries, and false if there are. Use the ternary operator to set the property.


const myCountry2 = {
    country: 'Finland',
    capital: 'Helsinki',
    language: 'finnish',
    population: 6,
    neighbours: ['Norway', 'Sweden', 'Russia'],
    describe: function() {
      console.log(
        `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`
      );
    },
    checkIsland: function() {
      this.isIsland = this.neighbours.length === 0 ? true : false;
  
      // Even simpler version (see why this works...)
      // this.isIsland = !Boolean(this.neighbours.length);
    }
  };
  
  myCountry2.describe();
  myCountry2.checkIsland();
  
  console.log(myCountry2);