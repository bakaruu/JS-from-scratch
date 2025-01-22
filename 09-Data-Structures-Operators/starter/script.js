'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex],
    this.mainMenu[mainIndex]]
  },

  orderDelivery: function (obj) {
    console.log(`Order received! ${this.starterMenu[obj.mainIndex]} and ${this.mainMenu[obj.starterIndex]}, will be delivered to ${obj.address} at ${obj.time}` );
  },

  //destructuring
  orderDelivery: function ({starterIndex = 1, mainIndex = 0, time = '20:00', address}) {
    console.log(`Order received! ${this.starterMenu[mainIndex]} and ${this.mainMenu[starterIndex]}, will be delivered to ${address} at ${time}` );
  },



  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

//Spread operator

//bad example
const arr = [5, 6, 7];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

//good example with spread operator.
const newArr = [1, 2, ...arr];
console.log(newArr)

console.log(...newArr) // same as console.log(1,2,5,6,7)


const newMenu = [...restaurant.mainMenu, 'Gnocci'] //this is a new array from scratch
console.log(newMenu)

// Copia los valores: El operador ... hace una copia superficial de los elementos del array original.
// Si los elementos del array son primitivos (como strings, números, etc.), se copian completamente y son independientes.
// Si los elementos son objetos o arrays anidados, solo se copia la referencia. Esto significa que si cambias un objeto dentro de newMenu, también se verá reflejado en restaurant.mainMenu.


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




