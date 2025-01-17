'use strict';


function calcAge(birthYear) {
    const age = 2037 - birthYear;

    function printAge() {
        let output = `${firstName}, you are ${age}, born in ${birthYear}`;
        console.log(output);

        if (birthYear >= 1981 && birthYear <= 1996) {
            var millenial = true;
            // Creating NEW variable with same name as outer scope's variable
            const firstName = 'Steven';

            // Reasssigning outer scope's variable
            output = 'NEW OUTPUT!';

            const str = `Oh, and you're a millenial, ${firstName}`;
            console.log(str);

            function add(a, b) {
                return a + b;
            }
        }
        // console.log(str);
        console.log(millenial);
        // console.log(add(2, 3));
        console.log(output);
    }
    printAge();

    return age;
}

const firstName = 'Jonas';
calcAge(1991);
// console.log(age);
// printAge();



console.log('new line')

console.log(me)
console.log(job)  //In TDZ
console.log(year) //In TDZ

var me = 'jonas'
let job = 'teacher'
const year = 1991


//Functions
console.log(addDecl(2, 3))
//what we are doing here is = undefined(2,3)
console.log(addExpr(2, 3))
console.log(addArrow(2, 3))


function addDecl(a, b) {
    return a + b
}

//var gets different error = "Is not a function" 
const addExpr = function (a, b) { //also in the TDZ cause its a const variable.
    return a + b
}

//var gets different error = "Is not a function" 
const addArrow = (a, b) => a + b // Same


//Example

//numProducts is true cause is not 10, is undefined.
if(!numProducts) deleteShoppingCart()

var numProducts = 10

function deleteShoppingCart(){
    console.log('All products deleted!')
}
