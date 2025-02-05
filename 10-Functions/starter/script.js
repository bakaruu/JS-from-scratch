'use strict';


// How Passing Arguments Works: Value vs. Reference

const flight = 'LH234';

const jonas = {
    name: 'Jonas Schmedtmann',
    passport: 12345678,
};

const checkIn = function (flightNum, passenger) {
    flightNum = 'LH999';
    passenger.name = 'Mr. ' + passenger.name;

    if (passenger.passport === 12345678) {
        alert('Checked in');
    } else {
        alert('Wron passport!')
    }
};


//When we pass a reference type to a function, what is copied is really just a reference to the object in the memory heap.
checkIn(flight, jonas);
console.log(flight);
console.log(jonas);

const newPassport = function (person) {
    person.passport = Math.trunc(Math.random() * 10000000000);
};

newPassport(jonas);

//JS only passing by value., does not have passing by reference






//Default parameters in functions.
// const bookings = [];
//                                                         //ES6
// const createBooking = function (flightNum, numPassengers = 1, price = 199 ) { //OR we can do this: price = 199 * numPassengers etc

//     //ES5
//     // numPassengers = numPassengers || 1;
//     // price = price || 199;

//     const booking = {
//         flightNum,
//         numPassengers,
//         price
//     };

//     console.log(booking);
//     bookings.push(booking);

// }

// createBooking('LH123');
// createBooking('LH123', 2, 800);

// //we can't do this
// // createBooking('LH123', , 800);
// //or this to skip a parameter. Always in order.
// // createBooking('LH123',800);

// //we can do this trick.
// createBooking('LH123', undefined, 800);

