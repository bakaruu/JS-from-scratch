// Remember, we're gonna use strict mode in all scripts now!
'use strict';


// PROBLEM

// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

// const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5]


// //1) Understanding the problem
// // - What is temp amplitude? Answer: Difference between highest and lowest temp
// // - How to compute max and min temperatures?
// // - what's a sensor error? And what to do?

// //2) Breaking up into sub-problmes.
// // - How to ignore errors? DONE
// // - Find max value in temp array DONE
// // - Find min value in temp array DONE
// // - Subtract min from max ( amplitude) and return it DONE

// const calcTempAmplitude = function (temps) {

//     let max = temps[0];
//     let min = temps[0];
//     for (let i = 0; i < temps.length; i++) {
//         const currentTemp = temps[i]
//         if (typeof currentTemp !== 'number') continue;

//         //debugger opens the debugger window directly
//         if (currentTemp > max) max = currentTemp

//         if (currentTemp < min) min = currentTemp


//     }
//     console.log(max, min);

//     return max - min


// }
// calcTempAmplitude([1, 2, -4, 10])

// const amplitude = calcTempAmplitude(temperatures);
// console.log(amplitude);


// //Debugging
// const measureKelvin = function () {
//     const measurement = {
//         type: 'temp',
//         unit: 'celsius',
//         // value: prompt('Degrees in celsius'), // ORIGINAL
//         value: Number(prompt('Degrees in celsius')),// DEBUGGED
//     }

//     console.log(measurement);
//     console.table(measurement);

//     const kelvin = measurement.value + 273
//     return kelvin

// }
// console.log(measureKelvin());



// Coding Challenge #1

// Given an array of forecasted maximum temperatures, the thermometer displays a string with theres temperatures.Given

// Example: [17, 21, 23] will print '... 17C in 1 days ... 21C in 2 days ... 23C in 3 days ...'

// Create a function 'printForecast' which takes in an array 'arr'
// and logs a string like the above to the console

// Use the problem-solving framework: Understand the problem and break it up into sub-problems


// TEST DATA 1:  [17, 21, 23]
// TEST DATA 2:  [12, 5, -5, 0, 4]

const printForecast = function (arr) {
    let result = '';

    for (let i = 0; i < arr.length; i++) {
        result += `... ${arr[i]}C in ${i + 1} `;

    }
    return result += '...'

}

const DATA1 = [17, 21, 23]
const DATA2 = [12, 5, -5, 0, 4]


console.log(printForecast(DATA2));










