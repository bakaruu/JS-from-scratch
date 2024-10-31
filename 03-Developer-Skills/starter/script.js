// Remember, we're gonna use strict mode in all scripts now!
'use strict';


// PROBLEM

// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5]


//1) Understanding the problem
// - What is temp amplitude? Answer: Difference between highest and lowest temp
// - How to compute max and min temperatures?
// - what's a sensor error? And what to do?

//2) Breaking up into sub-problmes.
// - How to ignore errors? DONE
// - Find max value in temp array DONE
// - Find min value in temp array DONE
// - Subtract min from max ( amplitude) and return it DONE

const calcTempAmplitude = function (temps) {

    let max = temps[0];
    let min = temps[0];
    for (let i = 0; i < temps.length; i++) {
        const currentTemp = temps[i]
        if (typeof currentTemp !== 'number') continue;

        //debugger opens the debugger window directly
        if (currentTemp > max) max = currentTemp

        if (currentTemp < min) min = currentTemp


    }
    console.log(max, min);

    return max - min


}
calcTempAmplitude([1, 2, -4, 10])

const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);


//Debugging
const measureKelvin = function () {
    const measurement = {
        type: 'temp',
        unit: 'celsius',
        // value: prompt('Degrees in celsius'), // ORIGINAL
        value: Number(prompt('Degrees in celsius')),// DEBUGGED
    }

    console.log(measurement);
    console.table(measurement);

    const kelvin = measurement.value + 273
    return kelvin

}
console.log(measureKelvin());









