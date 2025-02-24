'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

//Writing object literals ES6

//Extra challenge


for (const flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';');
  const output = `${type.startsWith('_Delayed') ? '🔴' : ''} ${type.replaceAll('_', ' ')} from ${from.slice(0, 3).toUpperCase()} to ${to.slice(0, 3).toUpperCase()} (${time})`.trim();
  
  console.log(output);
}






const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};




// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // order: function (starterIndex, mainIndex) {
  //   return [this.starterMenu[starterIndex],
  //   this.mainMenu[mainIndex]]
  // },

  //After ES6 2nd enhance object literals.
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex],
    this.mainMenu[mainIndex]]
  },

  orderDelivery: function (obj) {
    console.log(`Order received! ${this.starterMenu[obj.mainIndex]} and ${this.mainMenu[obj.starterIndex]}, will be delivered to ${obj.address} at ${obj.time}`);
  },

  //destructuring
  orderDelivery: function ({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(`Order received! ${this.starterMenu[mainIndex]} and ${this.mainMenu[starterIndex]}, will be delivered to ${address} at ${time}`);
  },


  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`)
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);

  },

  //before ES6 enhance object literals.
  //same name, kinda a problem but not.
  // openingHours: openingHours,


  //After ES6 1st enhance object literals.
  openingHours,

  // openingHours: {
  //   thu: {
  //     open: 12,
  //     close: 22,
  //   },
  //   fri: {
  //     open: 11,
  //     close: 23,
  //   },
  //   sat: {
  //     open: 0, // Open 24 hours
  //     close: 24,
  //   },
  // },
};

////////////////////////////////////////////////////
////////////////////////////////////////////////////
// Coding Challenge #4


// Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.
// The input will come from a textarea inserted into the DOM (see code below to insert the elements), and conversion will happen when the button is pressed.

// Test data (pasted to textarea, including spaces):

// underscore_case
//  first_name
// Some_Variable
//  calculate_AGE
// delayed_departure


// Should produce this output (5 separate console.log outputs):

// underscoreCase ✅
// firstName ✅✅
// someVariable ✅✅✅
// calculateAge ✅✅✅✅
// delayedDeparture ✅✅✅✅✅


// Hints:
// § Remember which character defines a new line in the textarea �
// § The solution only needs to work for a variable made out of 2 words, like a_b
// § Start without worrying about the ✅. Tackle that only after you have the variable name conversion working �
// § This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

// Afterwards, test with your own test data!
// GOOD LUCK �

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  const lines = text.split('\n'); // split input by new lines
  console.log(lines);
 
  for (const [i, line] of lines.entries()) {
    // trim spaces, convert to lowercase, and split at underscore
    const [first, second] = line.trim().toLowerCase().split('_');

    // convert to camelCase
    const camelCase = first + second.replace(second[0], second[0].toUpperCase());

    // add checkmarks based on index (1, 2, 3, etc.)
    console.log(`${camelCase.padEnd(20)} ${'✅'.repeat(i + 1)}`);
  }
});



////////////////////////////////////////////////////
////////////////////////////////////////////////////
// Working with Strings part3.

// console.log('a+very+nice+string'.split('+'));
// console.log('Jonas Schmedtmann'.split(' '));

// const [firstName, lastName] = 'Jonas Schmedtmann'.split(' ');
// console.log(firstName, lastName);
// const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ')
// // string of Mr Jonas Schemdtmann.
// console.log(newName);

// const capitalizeName = function(name){
//   const names = name.split(' ');
//   const namesUpper = [];

//   for(const n of names){
//   //  namesUpper.push( n[0].toUpperCase() + n.slice(1)); //if n is empty = undefined = error =)

//     namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
//     //If n starts with a special character, number, or whitespace, n[0] will still be replaced, which might not always be the expected behavior.
//     // If n[0] appears multiple times in the string, only the first occurrence is changed.

//   }

//   console.log(namesUpper.join(' '))

// }

// capitalizeName('jessica ann smith davis');
// capitalizeName('jonas schmedtmann');


// //Padding 
// const message = 'Go to gate 23!';
// console.log(message.padStart(25, '+').padEnd(36, '+'));
// console.log('Jonas'.padStart(25, '+'));

// //Hidding credit cards number example.
// const maskCreditCard = function(number){
//   const str = number + '';
//   const last = str.slice(-4);
//   return last.padStart(str.length, '*');

// }

// console.log(maskCreditCard(332323542346346564));
// console.log(maskCreditCard('23423554745754654678'));


// //Repeat
// const message2 = 'Bad weather... All departues delayed';
// console.log(message2.repeat(4))





////////////////////////////////////////////////////
////////////////////////////////////////////////////
// Working with Strings part2.
// const airline = 'TAP Air Portugal';
// console.log(airline.toLowerCase());
// console.log(airline.toUpperCase());

// //fix capitalization in name
// const passenger = 'jOnAS'; // Jonas
// const passengerLower = passenger.toLowerCase();
// const passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1);

// console.log(passengerCorrect);

// //comparing Emails.
// const email = 'hello@jonas.com';
// const loginEmail = 'Hello@Jonas.com \n';

// // const lowerEmail = loginEmail.toLowerCase();
// // const trimmedEmail = lowerEmail.trim(); //trimm white spaces.

// const normalizedEmail = loginEmail.toLowerCase().trim();
// console.log(normalizedEmail);

// //replacing
// const priceGB = '289,23₤';
// const priceUS = priceGB.replace('₤','$').replace(',', '.');
// console.log(priceUS);

// //Booleans
// const plane = 'A320neo';
// console.log(plane.includes('A320'));
// console.log(plane.includes('Boeing'));
// console.log(plane.startsWith('Air'));


// Working with Strings part1.

// const airline = 'TAP Air Portugal';
// const plane = 'A320';


// console.log(plane[0]);
// console.log(plane[1]);
// console.log(plane[2]);
// console.log('B868'[0]);

// console.log(airline.length);
// console.log('B868'.length);

// console.log(airline.indexOf('r')); 
// console.log(airline.lastIndexOf('r')); 

// //search entire word case sensitive
// console.log(airline.lastIndexOf('portugal')); 

// console.log(airline.slice(4)); 
// console.log(airline.slice(4, 7)); 

// //when we dont know what string is

// console.log(airline.slice(0, airline.indexOf(' ')))
// console.log(airline.slice(airline.lastIndexOf(' ') + 1))

// console.log(airline.slice(-2)); 
// console.log(airline.slice(1, -1)); 


// const checkMiddleSeat = function(seat){
//   //B AND E are middle seats.
//   const s = seat.slice(-1);
//   if(s === 'B' || s === 'E')
//     console.log('You got the middle seat.');
//   else console.log('You got lucky');

// }

// checkMiddleSeat('11B');
// checkMiddleSeat('23C');
// checkMiddleSeat('3E');





////////////////////////////////////////////////////
////////////////////////////////////////////////////
// Coding Challenge #3


// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
//     'Hummels'],
//   date: 'Nov 9th, 2037',

//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// const gameEvents = new Map([
//   [17, '⚽ GOAL'],
//   [36, '♻ Substitution'],
//   [47, '⚽ GOAL'],
//   [61, '♻ Substitution'],
//   [64, '🟨 Yellow Card'],
//   [69, '🟥 Red Card'],
//   [70, '♻ Substitution'],
//   [72, '♻ Substitution'],
//   [76, '⚽ GOAL'],
//   [80, '⚽ GOAL'],
//   [92, '🟨 Yellow Card'],
// ]);



// // Let's continue with our football betting app! This time, we have a map called 'gameEvents' (see below) with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

// // Your tasks:

// // 1. Create an array 'events' of the different game events that happened (no duplicates)

// const events = [ ...new Set(gameEvents.values())];
// console.log(events);

// // 2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.

// gameEvents.delete(64);
// console.log(gameEvents);


// // 3. Compute and log the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)


// const time = [...gameEvents.keys()].pop();

// console.log(`An event happened, on average, every ${time / gameEvents.size} minutes.`);


// // 4. Loop over 'gameEvents' and log each element to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:

// // [FIRST HALF] 17: ⚽ GOAL
// // GOOD LUCK �

// for (const [minute, event] of gameEvents) {
//   const half = minute <= 45 ? 'FIRST HALF' : 'SECOND HALF';
//   console.log(`[${half}] ${minute}: ${event}`);
// }





////////////////////////////////////////////////////
////////////////////////////////////////////////////
// MAPS ITERATIONS

// const question = new Map ([
//   ['question', 'What is the best programming language in the world.'],
//   [1, 'C'],
//   [2, 'java'],
//   [3, 'JavaScript'],
//   ['correct', 3],
//   [true, 'Correct ⚽'],
//   [false, 'Try again!'],

// ]);
// console.log(question);

// //same structure when calling Object.entries.
// console.log(Object.entries(openingHours));

// //theres an easy way to convert from objects to maps.
// const hoursMap = new Map(Object.entries(openingHours));
// console.log(hoursMap);

// //ITERATIONS
// for (const [key, value] of question){
//   if (typeof key === 'number') console.log(`Answer: ${key}: ${value}`)
// }

// console.log(question.get('question'));
// // const answer = Number(prompt('Your answer: '));
// const answer = 3;

// console.log(question.get(question.get('correct') === answer));

// //To convert Map to array
// console.log(...question);
// console.log(...question.entries());
// console.log(...question.values());


// MAPS

//  const rest = new Map();
//  rest.set('name', 'Classico Italiano');
//  rest.set(1, 'Firenze, Italy');
 
//  console.log(rest.set(2, 'Lisbon, Portugal'));


//  rest
//   .set('categories', ['Italian', 'Pizzeria', 
//     'Vegetarian', 'Organica'])
//   .set('open', 11)
//   .set('close', 23)
//   .set(true, 'We are open.')
//   .set(false, 'We are closed.');

// console.log(rest);
// console.log(rest.get('name'));

// //ways of getting the value without the key.
// for (const [key, value] of rest) {
//   if (value === 'Classico Italiano') {
//     console.log(`Key for value "Classico Italiano" is: ${key}`);
//   }
// };


// const time = 11;
// console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

// console.log(rest.has('categories'));
// rest.delete(2);
// // rest.clear();
// // rest.set([1, 2], 'Test');

// console.log(rest);

// console.log(rest.get([1, 2])); // not working cause not the same reference for the array, are 2 different arrays.

// // const arr = [1, 2];
// //then console.log(rest.get([arr])) output: "Test";
// rest.set(document.querySelector('h1'), 'Heading');
// console.log(rest);



////////////////////////////////////////////////////
////////////////////////////////////////////////////
//SETS

// const italianFoods = new Set([
//   'pasta',
//   'gnocchi',
//   'tomatoes',
//   'olive oil',
//   'garlic',
//   'basil'
// ]);

// const mexicanFoods = new Set([
//   'tortillas',
//   'beans',
//   'rice',
//   'tomatoes',
//   'avocado',
//   'garlic'
// ]);

// //for latest browsers ES2025

// //intersection method.
// const commonFoods = italianFoods.intersection(mexicanFoods);
// console.log('Intersection: ', commonFoods);
// console.log([...commonFoods]);

// //union method.
// const italianMexicanFusion = italianFoods.union(mexicanFoods);
// console.log('Union: ', italianMexicanFusion);

// console.log(new Set([...italianFoods, ...mexicanFoods]));
// // if we want an array
// console.log([...new Set([...italianFoods, ...mexicanFoods])]);


// // The method Set.prototype.difference(setB) returns a new Set containing elements that are in the first set (this), but not in the second set (setB).

// const uniqueItalianFood = italianFoods.difference(mexicanFoods);
// console.log('Difference italian', uniqueItalianFood);

// const uniqueMexicanFoods = mexicanFoods.difference(italianFoods);
// console.log('Difference mexican', uniqueMexicanFoods);


// //returns a new Set containing elements that are in either of the two sets, but NOT in both.
// const uniqueItalianAndMexicanFoods = italianFoods.symmetricDifference(mexicanFoods);
// console.log(uniqueItalianAndMexicanFoods);

// console.log(italianFoods.isDisjointFrom(mexicanFoods));






// const orderSet = new Set(['Pasta', 'Pizza', 'Pizza', 'Risotto', 'Pasta', 'Pizza']);

// // A Set in JavaScript is a built-in data structure that only stores unique values. When you create a Set, it automatically removes any duplicate entries.
// console.log(orderSet);
// console.log(new Set ('Jonas'));

// //If we need to count how uniques  characters or items
// console.log(orderSet.size);

// //Check if something is inside of it.
// console.log(orderSet.has('Pizza'));
// console.log(orderSet.has('Bread'));

// //add new elements to a set ( only one, cause can't have repeated items.)
// orderSet.add('Garlic bread');
// orderSet.add('Garlic bread');
// console.log(orderSet);

// //delete elements. ( not in arrays.)
// orderSet.delete('Risotto');

// //delete everything from the set.
// // orderSet.clear();


// //In sets theres no indexes, we can't take info out of a set.

// //SET USE CASES.
// //1. Removing duplicates from an array ( most common use case)
// const numbers = [1, 2, 3, 3, 4, 4, 5, 6, 6, 7];
// const uniqueNumbers = [...new Set(numbers)];
// console.log(uniqueNumbers); // [1, 2, 3, 4, 5, 6, 7]

// //2. Checking if a value exist ( faster than in an array)
// const userRoles = new Set(['admin', 'editor', 'viewer']);
// console.log(userRoles.has('admin')); // true
// console.log(userRoles.has('superadmin')); // false

// //3. Storing Unique Values Efficiently
// const usedUsernames = new Set();
// usedUsernames.add('JohnDoe');
// usedUsernames.add('JaneSmith');
// usedUsernames.add('JohnDoe'); // Won't be added again
// console.log(usedUsernames); // Set { 'JohnDoe', 'JaneSmith' }


// //4. Iterating Over Unique Values
// const letters = new Set('hello'); // {'h', 'e', 'l', 'o'}
// for (const letter of letters) {
//   console.log(letter); // h, e, l, o
// }
// //5. Converting a Set to an Array for Indexed Access
// const mySet = new Set(['apple', 'banana', 'orange']);
// const myArray = [...mySet]; // Convert to Array
// console.log(myArray[1]); // "banana"


////////////////////////////////////////////////////
////////////////////////////////////////////////////

// Coding Challenge #2

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
//     'Hummels'],
//   date: 'Nov 9th, 2037',

//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// // Let's continue with our football betting app! Keep using the 'game' variable from
// // before.
// // Your tasks:
// // 1. Loop over the game.scored array and print each player name to the console,
// // along with the goal number (Example: "Goal 1: Lewandowski")

// for ( const [index, player] of game.scored.entries()){
//   console.log(`Goal ${index + 1}: ${player}`)
// }


// // 2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
// const odds = Object.values(game.odds); // we get an array with the values.
// console.log(odds);

// let sum = 0;
// for (const odd of odds){
//   sum += odd;
// }

// const average = sum / odds.length;
// console.log(average);


// // 3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
// // Odd of victory Bayern Munich: 1.33
// // Odd of draw: 3.25
// // Odd of victory Borrussia Dortmund: 6.5
// // Get the team names directly from the game object, don't hardcode them
// // (except for "draw"). Hint: Note how the odds and the game objects have the same property names �

// for (const [key, value] of Object.entries(game.odds)) {
//   const teamName = key === "x" ? "draw" : `victory ${game[key]}`;
  
//   console.log(`Odd of ${teamName}: ${value}`);
// }


// // 4. Bonus: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
// // {
// //  Gnarby: 1,
// //  Hummels: 1,
// //  Lewandowski: 2
// // }
// // GOOD LUCK �

// const scorers = {};

// for (const player of game.scored){
//   scorers[player] = (scorers[player] || 0) +1;
// }

// console.log(scorers);

////////////////////////////////////////////////////
////////////////////////////////////////////////////

// Looping Objects: Object Keys, Values, and Entries
// const properties = Object.keys(openingHours);
// console.log(properties);
// let openStr = (`We are open on ${properties.length} days: `)

// // for (const day of Object.keys(openingHours)) {
// //   console.log(day)
// // }

// for (const day of properties) {
//   openStr += `${day}, `
// }
// console.log(openStr);

// //Propery VALUES

// const values = Object.values(openingHours);
// console.log(values);

// //Entire object
// const entries = Object.entries(openingHours);
// // console.log(entries);

// for ( const [key, {open, close}] of entries ){
//   console.log(`On ${key} we open at ${open} and close at ${close}`)
// }


////////////////////////////////////////////////////
////////////////////////////////////////////////////

//OPTIONAL CHAINING (?.)

// if (restaurant.openingHours && restaurant.openingHours.mon)
//   console.log(restaurant.openingHours.mon.open);

// // console.log(restaurant.openingHours.mon.open); //throws an error cause does not exist.

// //with optional chaining
// console.log(restaurant.openingHours.mon?.open);
// console.log(restaurant.openingHours?.mon?.open); //prevents bugs.

// // restaurant.openingHours.mon:
// // If restaurant.openingHours exists but mon is undefined (e.g., the restaurant is closed on Mondays), accessing .open without optional chaining would cause an error.

// // restaurant.openingHours.mon?.open:
// // If mon exists, it returns mon.open.
// // If mon is undefined or null, it immediately returns undefined instead of throwing an error.

// //Example.
// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// for (const day of days) {
//   const open = restaurant.openingHours[day]?.open ?? 'Closed';
//   console.log(`On ${day}, we open at ${open}`);
// }

// //Methods, we can check if methods actually exist before calling em.

// console.log(restaurant.order?.(0, 1) ?? 'Method does not exist.')
// console.log(restaurant.orderRissotto?.(0, 1) ?? 'Method does not exist.')

// //Arrays is empty?
// const users = [{name: 'Jonas', enamil: 'hello@jonas.com'}];
// // const users = [];


// //with optional chaining
// console.log(users[0]?.name ?? 'User array empty.');

// //old version.
// if(users.length > 0) console.log(users[0].name);
// else console.log('User array empty.')



//////////////////////////////////////////////////////
//////////////////////////////////////////////////////
//Looping over arrays FOR-0F LOOP
//we can still use the continue and break keywords.

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (const item of menu) console.log(item);

// //old school ways
// // for (const item of menu.entries()) {
// //   console.log(`${item[0] + 1}: ${item[1]}`)
// // }

// //with destructuring way.
// for (const [i, el] of menu.entries()) {
//   console.log(`${i + 1}: ${el}`)
// }

// //contains an array with the index position and the element in the original array.
// console.log([...menu.entries()])



///////////////////////////////////////
///////////////////////////////////////
// Coding Challenge #1

// /* 
// We're building a football betting app (soccer for my American friends 😅)!

// Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
//     'Hummels'],
//   date: 'Nov 9th, 2037',

//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// // 1. Create one player array for each team (variables 'players1' and 'players2')
// const [players1, players2] = game.players;
// console.log(players1);
// console.log(players2);

// // 2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players

// //Rest operator example.
// const [gk, ...fieldPlayers] = players1;

// // 3. Create an array 'allPlayers' containing all players of both teams (22 players)

// //spread operator example.
// const allPlayers = [...players1, ...players2];
// console.log(allPlayers);

// // 4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'

// const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];


// // 5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')

// const { team1, x: draw, team2 } = game.odds;
// //or
// //  const {
// //   odds: {team1, x: draw, team2},
// // } = game;

// console.log(team1, draw, team2);

// // 6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)

// // or const printGoals = function(...players){};
// function printGoals(...players) {
//   //to print every player who scored.
//   players.forEach(player => console.log(player));

//   console.log(`${players.length} goals were scored in total.`);
// };

// printGoals(...game.scored);

// // 7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.


// const teams = [game.team1, game.team2];

// // Find the team with the lower odd
// const mostLikelyToWin = teams[team1 < team2 ? 0 : 1];

// console.log(`${mostLikelyToWin} is more likely to win`);


// TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored



// The OR assignment operator (||=) does not work like the nullish assignment operator (??=) because it treats 0 as a falsy value

//Assign a value to a variable if it is currently truthy

// const rest1 = {
//   name: 'Capri',
//   // numGuests: 20,
//   numGuests: 0,
// };

// const rest2 = {
//   name: 'La piazza',
//   owner: 'Giovanni Rossi',
// };

// //OR assignment operator.
// // rest1.numGuests = rest1.numGuests || 10;
// // rest2.numGuests = rest2.numGuests || 10;

// //same as this up here.
// // rest1.numGuests ||= 10;
// // rest2.numGuests ||= 10;

// //Nullish assignment operator.
// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;

// // rest1.owner = rest1.owner && '<ANONYMOUS>';
// // rest2.owner = rest2.owner && '<ANONYMOUS>';

// rest1.owner &&= '<ANONYMOUS>';
// rest2.owner &&= '<ANONYMOUS>';

// console.log(rest1);
// console.log(rest2);

//Nullish coalescing
// restaurant.numGuest = 0;
// const guest2 = restaurant.numGuest || 10;
// console.log(guest2)


// //Nullish: null and undefined  (NOT - or '')
// const guestCorrect = restaurant.numGuest ?? 10;
// console.log(guestCorrect)


// // SHORT CIRCUITING

// // Use ANY data type, return ANY data type, short-circuiting

// console.log('------ OR ------')
// console.log(2 || 'Jonas');
// console.log('' || 'Jonas');
// console.log(true || 0);
// console.log(undefined || null);

// //from left to right return first truthy value
// console.log(undefined || 0  || '' || 'Hello' || 23 || null);

// //numGuest going to be 23 if we declare it otherwise 10
// // restaurant.numGuest = 23; //if this is 0, wont work
// const guest1 = restaurant.numGuest ? restaurant.numGuest : 10;
// console.log(guest1)

// const guest2 = restaurant.numGuest || 10;
// console.log(guest2)

// console.log('------ AND ------');
// console.log(0 && 'Jonas');
// console.log(7 && 'Jonas');


// console.log('Hello' && 23 && null && 'Jonas');

// //practical example
// if(restaurant.orderPizza){
//   restaurant.orderPizza('mushrooms', 'spinach')
// }

// restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach') //hard to read.







// // Rest pattern

// // The Rest Pattern in JavaScript is used to collect multiple elements and condense them into a single variable. It's often used when working with arrays or objects, and it’s closely related to the Spread Operator (...). However, while the spread operator expands elements, the rest pattern collects elements.

// // SPREAD, because on Right side of =
// const arr = [1, 2, ...[3, 4]];

// // REST, because on LEFT side of =
// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others)

// //only one rest operator in any destructuring assignment.
// const [pizza, , rissoto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(pizza, rissoto, otherFood)


// //REST pattern in Objects
// const { sat, ...weekDays } = restaurant.openingHours;
// console.log(sat, weekDays)

// // FUNCTIONS
// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++)
//     sum += numbers[i];

//   console.log(sum)
// }
// add(2, 3)
// add(3, 6, 3)
// add(2, 3, 3, 4)

// const x = [23, 5, 7];
// add(...x);

// restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach')
// restaurant.orderPizza('mushrooms')

// //Spread operator

// //bad example
// const arr = [5, 6, 7];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArr);

// //good example with spread operator.
// const newArr = [1, 2, ...arr];
// console.log(newArr)

// console.log(...newArr) // same as console.log(1,2,5,6,7)


// const newMenu = [...restaurant.mainMenu, 'Gnocci'] //this is a new array from scratch
// console.log(newMenu)

// // Copia los valores: El operador ... hace una copia superficial de los elementos del array original.
// // Si los elementos del array son primitivos (como strings, números, etc.), se copian completamente y son independientes.
// // Si los elementos son objetos o arrays anidados, solo se copia la referencia. Esto significa que si cambias un objeto dentro de newMenu, también se verá reflejado en restaurant.mainMenu.

// //Copy array
// const mainMenuCopy = [...restaurant.mainMenu];

// //Join 2 arrys
// const menu = [...restaurant.mainMenu, ...restaurant.starterMenu]
// console.log(menu)

// //iterables: arrays, strings, maps, sets, NOT objects.
// const str = 'Jonas'
// const letters = [...str]
// console.log(letters)

// const ingredients = [
//   // prompt("Let's make pasta! Ingredient 1?"),
//   // prompt("Ingredient 2?"),
//   // prompt("Ingredient 3?"),
// ];

// console.log(ingredients)
// //without spread operator vs
// restaurant.orderPasta(ingredients[0],ingredients[1], ingredients[2] )

// //with spread operator.
// restaurant.orderPasta(...ingredients)

// //spread operators since 2018 also works on objetcs even though objects are not ierables.

// //Objects, shallow copies with objects.
// const newRestaurant = {...restaurant, founder: 'Guiseppe'}
// console.log(newRestaurant)

// const restaurantCopy = {...restaurant};
// restaurantCopy.name = 'lololololol'
// console.log(restaurant.name);
// console.log(restaurantCopy.name);






// restaurant.orderDelivery({ time: '22:30', address: 'Via del sole, 21', mainIndex: 2, starterIndex: 2, })

// restaurant.orderDelivery({
//   address: 'Dr. Oloriz', 
//   starterIndex: 1
// })


// //Destructuring objects
// const { name, openingHours, categories } = restaurant;

// console.log(name, openingHours, categories);

// const { name: restaurantName, openingHours: hours, categories: tags } = restaurant;
// console.log(restaurantName, hours, tags);

// // restaurant.menu => undefined
// const { menu = [], starterMenu: starters = [] } = restaurant
// console.log(menu, starters)

// //mutating variables while destructuring objects.
// let a = 111;
// let b = 999;
// let c = 2
// const obj = { a: 23, b: 7, c: 14 };

// ({ a, b } = obj)
// console.log(a, b)

// //nested objects
// const { fri: { open, close } } = openingHours
// console.log(open, close)


// // // const arr = [2, 3, 4];

// // // const a = arr[0]
// // // const b = arr[1]
// // // const c = arr[2]

// // // //this here is destructuring an array.
// // // const [x, y, z] = arr
// // // console.log(x, y, z)


// // // const [first, second] = restaurant.categories
// // // console.log(first, second)


// // //if we want to take just 1st and 3rd do this.

// // let [main, , secondary] = restaurant.categories;
// // console.log(main, secondary);
// // console.log(restaurant.categories);

// // //switch main and secondary category.
// // // const temp = main
// // // main = secondary
// // // secondary = temp

// // //with destructuring

// // [main, secondary] = [secondary, main];
// // console.log(main, secondary);

// // //Receive 2 return values from a function
// // console.log(restaurant.order(2, 0));
// // //with destructuring
// // const [starter, mainCourse] = restaurant.order(2, 0);
// // console.log(starter, mainCourse);


// // //nested array
// // const nested = [2, 4, [5, 6]];
// // // const [i, , j] = nested;
// // // console.log(i, j);

// // //Nested destructuring.
// // const [i, , [j, k]] = nested;
// // console.log(i, j, k);


// // //default values
// // const [p = 1, q = 1, r = 1] = [8, 9];
// // console.log(p, q, r);




// //ASSIGNMENTS

// // Introduction﻿
// // 👋 Hey! Did you like the assignments for the previous sections? We have some more for you; this time it's all about books 📕📗📘

// // Below you can find data used in the assignments;

// // It's an array of books related to computer science, math and business;

// // Each book is represented by an object;

// // Missing properties, different data types for same properties or duplicates are intentional;

// // Copy this data to your code editor, and give yourself some time to familiarize with it before you start working on assignments.

// const books = [
//   {
//     title: 'Algorithms',
//     author: ['Robert Sedgewick', 'Kevin Wayne'],
//     publisher: 'Addison-Wesley Professional',
//     publicationDate: '2011-03-24',
//     edition: 4,
//     keywords: ['computer science', 'programming', 'algorithms', 'data structures', 'java', 'math', 'software', 'engineering'],
//     pages: 976,
//     format: 'hardcover',
//     ISBN: '9780321573513',
//     language: 'English',
//     programmingLanguage: 'Java',
//     onlineContent: true,
//     thirdParty: {
//       goodreads: {
//         rating: 4.41,
//         ratingsCount: 1733,
//         reviewsCount: 63,
//         fiveStarRatingCount: 976,
//         oneStarRatingCount: 13
//       }
//     },
//     highlighted: true
//   },
//   {
//     title: 'Structure and Interpretation of Computer Programs',
//     author: ['Harold Abelson', 'Gerald Jay Sussman', 'Julie Sussman (Contributor)'],
//     publisher: 'The MIT Press',
//     publicationDate: '2022-04-12',
//     edition: 2,
//     keywords: ['computer science', 'programming', 'javascript', 'software', 'engineering'],
//     pages: 640,
//     format: 'paperback',
//     ISBN: '9780262543231',
//     language: 'English',
//     programmingLanguage: 'JavaScript',
//     onlineContent: false,
//     thirdParty: {
//       goodreads: {
//         rating: 4.36,
//         ratingsCount: 14,
//         reviewsCount: 3,
//         fiveStarRatingCount: 8,
//         oneStarRatingCount: 0
//       }
//     },
//     highlighted: true
//   },
//   {
//     title: 'Computer Systems: A Programmer\'s Perspective',
//     author: ['Randal E. Bryant', 'David Richard O\'Hallaron'],
//     publisher: 'Prentice Hall',
//     publicationDate: '2002-01-01',
//     edition: 1,
//     keywords: ['computer science', 'computer systems', 'programming', 'software', 'C', 'engineering'],
//     pages: 978,
//     format: 'hardcover',
//     ISBN: '9780130340740',
//     language: 'English',
//     programmingLanguage: 'C',
//     onlineContent: false,
//     thirdParty: {
//       goodreads: {
//         rating: 4.44,
//         ratingsCount: 1010,
//         reviewsCount: 57,
//         fiveStarRatingCount: 638,
//         oneStarRatingCount: 16
//       }
//     },
//     highlighted: true
//   },
//   {
//     title: 'Operating System Concepts',
//     author: ['Abraham Silberschatz', 'Peter B. Galvin', 'Greg Gagne'],
//     publisher: 'John Wiley & Sons',
//     publicationDate: '2004-12-14',
//     edition: 10,
//     keywords: ['computer science', 'operating systems', 'programming', 'software', 'C', 'Java', 'engineering'],
//     pages: 921,
//     format: 'hardcover',
//     ISBN: '9780471694663',
//     language: 'English',
//     programmingLanguage: 'C, Java',
//     onlineContent: false,
//     thirdParty: {
//       goodreads: {
//         rating: 3.9,
//         ratingsCount: 2131,
//         reviewsCount: 114,
//         fiveStarRatingCount: 728,
//         oneStarRatingCount: 65
//       }
//     }
//   },
//   {
//     title: 'Engineering Mathematics',
//     author: ['K.A. Stroud', 'Dexter J. Booth'],
//     publisher: 'Palgrave',
//     publicationDate: '2007-01-01',
//     edition: 14,
//     keywords: ['mathematics', 'engineering'],
//     pages: 1288,
//     format: 'paperback',
//     ISBN: '9781403942463',
//     language: 'English',
//     programmingLanguage: null,
//     onlineContent: true,
//     thirdParty: {
//       goodreads: {
//         rating: 4.35,
//         ratingsCount: 370,
//         reviewsCount: 18,
//         fiveStarRatingCount: 211,
//         oneStarRatingCount: 6
//       }
//     },
//     highlighted: true
//   },
//   {
//     title: 'The Personal MBA: Master the Art of Business',
//     author: 'Josh Kaufman',
//     publisher: 'Portfolio',
//     publicationDate: '2010-12-30',
//     keywords: ['business'],
//     pages: 416,
//     format: 'hardcover',
//     ISBN: '9781591843528',
//     language: 'English',
//     thirdParty: {
//       goodreads: {
//         rating: 4.11,
//         ratingsCount: 40119,
//         reviewsCount: 1351,
//         fiveStarRatingCount: 18033,
//         oneStarRatingCount: 1090
//       }
//     }
//   },
//   {
//     title: 'Crafting Interpreters',
//     author: 'Robert Nystrom',
//     publisher: 'Genever Benning',
//     publicationDate: '2021-07-28',
//     keywords: ['computer science', 'compilers', 'engineering', 'interpreters', 'software', 'engineering'],
//     pages: 865,
//     format: 'paperback',
//     ISBN: '9780990582939',
//     language: 'English',
//     thirdParty: {
//       goodreads: {
//         rating: 4.7,
//         ratingsCount: 253,
//         reviewsCount: 23,
//         fiveStarRatingCount: 193,
//         oneStarRatingCount: 0
//       }
//     }
//   },
//   {
//     title: 'Deep Work: Rules for Focused Success in a Distracted World',
//     author: 'Cal Newport',
//     publisher: 'Grand Central Publishing',
//     publicationDate: '2016-01-05',
//     edition: 1,
//     keywords: ['work', 'focus', 'personal development', 'business'],
//     pages: 296,
//     format: 'hardcover',
//     ISBN: '9781455586691',
//     language: 'English',
//     thirdParty: {
//       goodreads: {
//         rating: 4.19,
//         ratingsCount: 144584,
//         reviewsCount: 11598,
//         fiveStarRatingCount: 63405,
//         oneStarRatingCount: 1808
//       }
//     },
//     highlighted: true
//   }
// ];


// // 1.1
// // Destructure the books array into two variables called firstBook and secondBook.

// const [firstBook, secondBook] = books;
// console.log(firstBook, secondBook);

// // 1.2
// // Destructure the books array into a variable called thirdBook. You must skip the first two books.

// const [, , thirdBook] = books;

// // 1.3
// // Below is the nested ratings array that contains two other arrays. Destructure the nested ratings arrays into two variables called rating and ratingsCount. In the result of your destructuring, the ratings variable should store a number 4.19, and the ratingsCount variable should store a number 144584.

// const ratings = [['rating', 4.19], ['ratingsCount', 144584]];

// const [[, rating], [, ratingsCount]] = ratings


// // 1.4
// // Below is the ratingStars array. Destructure it into three variables called fiveStarRatings, oneStarRatings and threeStarRatings. Assign the threeStarRatings variable with a default value of 0.

// const ratingStars = [63405, 1808];

// const [fiveStarRatings, oneStarRatings, threeStarRatings = 0] = ratingStars




