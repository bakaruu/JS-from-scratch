'use strict';

//Default parameters in functions.
const bookings = [];
                                                        //ES6
const createBooking = function (flightNum, numPassengers = 1, price = 199 ) { //OR we can do this: price = 199 * numPassengers etc

    //ES5
    // numPassengers = numPassengers || 1;
    // price = price || 199;

    const booking = {
        flightNum,
        numPassengers,
        price
    };

    console.log(booking);
    bookings.push(booking);

}

createBooking('LH123');
createBooking('LH123', 2, 800);

//we can't do this
// createBooking('LH123', , 800);
//or this to skip a parameter. Always in order.
// createBooking('LH123',800);

//we can do this trick.
createBooking('LH123', undefined, 800);

