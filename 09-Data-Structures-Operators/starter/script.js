'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

//Writing object literals ES6

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

// Looping Objects: Object Keys, Values, and Entries
const properties = Object.keys(openingHours);
console.log(properties);
let openStr = (`We are open on ${properties.length} days: `)

// for (const day of Object.keys(openingHours)) {
//   console.log(day)
// }

for (const day of properties) {
  openStr += `${day}, `
}
console.log(openStr);

//Propery VALUES

const values = Object.values(openingHours);
console.log(values);

//Entire object
const entries = Object.entries(openingHours);
// console.log(entries);

for ( const [key, {open, close}] of entries ){
  console.log(`On ${key} we open at ${open} and close at ${close}`)
}


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




