'use strict';


// function calcAge(birthYear) {
//     const age = 2037 - birthYear;

//     function printAge() {
//         let output = `${firstName}, you are ${age}, born in ${birthYear}`;
//         console.log(output);

//         if (birthYear >= 1981 && birthYear <= 1996) {
//             var millenial = true;
//             // Creating NEW variable with same name as outer scope's variable
//             const firstName = 'Steven';

//             // Reasssigning outer scope's variable
//             output = 'NEW OUTPUT!';

//             const str = `Oh, and you're a millenial, ${firstName}`;
//             console.log(str);

//             function add(a, b) {
//                 return a + b;
//             }
//         }
//         // console.log(str);
//         console.log(millenial);
//         // console.log(add(2, 3));
//         console.log(output);
//     }
//     printAge();

//     return age;
// }

// const firstName = 'Jonas';
// calcAge(1991);
// // console.log(age);
// // printAge();



// console.log('new line')

// console.log(me)
// console.log(job)  //In TDZ
// console.log(year) //In TDZ

// var me = 'jonas'
// let job = 'teacher'
// const year = 1991


// //Functions
// console.log(addDecl(2, 3))
// //what we are doing here is = undefined(2,3)
// console.log(addExpr(2, 3))
// console.log(addArrow(2, 3))


// function addDecl(a, b) {
//     return a + b
// }

// //var gets different error = "Is not a function" 
// const addExpr = function (a, b) { //also in the TDZ cause its a const variable.
//     return a + b
// }

// //var gets different error = "Is not a function" 
// const addArrow = (a, b) => a + b // Same


// //Example

// //numProducts is true cause is not 10, is undefined.
// if(!numProducts) deleteShoppingCart()

// var numProducts = 10

// function deleteShoppingCart(){
//     console.log('All products deleted!')
// }

// //Another example

// var x = 1
// let y = 2
// const z = 3

// //var creates a property on the global window object
// console.log(x === window.x)//true
// console.log(y === window.x)//false
// console.log(z === window.x)//false


// // Tamaño de la ventana
// console.log(window.innerWidth); // Ancho de la ventana
// console.log(window.innerHeight); // Altura de la ventana

// // Navegación en el historial
// window.history.back(); // Volver a la página anterior
// window.history.forward(); // Avanzar en el historial

// // URL y ubicación
// console.log(window.location.href); // URL completa actual
// window.location.reload(); // Recargar la página

// // Abrir y cerrar ventanas
// const myWindow = window.open('https://example.com', '_blank'); // Abrir nueva ventana
// myWindow.close(); // Cerrar la ventana abierta


//this keyword

//this keyword/variable is a special variable that is created for every execution context(every function). Takes the value of (points to) the "owner" of the function in which the this keyword is used. Is not static.


// console.log(this)

// const jonas = {
//     year: 1991,
//     calcAge: function(){
//         console.log(this.year -1000)
//     }
// }

// jonas.calcAge()
// const matilda = {
//     year: 2018
// }

// //methods borrow.
// matilda.calcAge = jonas.calcAge

// matilda.calcAge() 


// const f = jonas.calcAge;
// //cannot read property year.
// f()


///////////////////////////////////////
// Regular Functions vs. Arrow Functions
// var firstName = 'Matilda';

const jonas = {
  firstName: 'Jonas',
  year: 1991,
  calcAge: function () {
    // console.log(this);
    console.log(2037 - this.year);

    // Solution 1
    // const self = this; // self or that
    // const isMillenial = function () {
    //   console.log(self);
    //   console.log(self.year >= 1981 && self.year <= 1996);
    // };

    // Solution 2
    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
  },

  greet: () => {
    console.log(this);
    console.log(`Hey ${this.firstName}`);
  },
};
jonas.greet();
jonas.calcAge();

//Object References in Practice (Shallow vs. Deep Copies)

const jessica = {
  firstName: 'jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
}


const marriedJessica = jessica
marriedJessica.lastName = 'Davis'

console.log('Before', jessica)
console.log('After', marriedJessica)

//we copy the reference of the object, we dont create a new one in the heap.


//the spread operator doesnt create new references of the arrays etc.. ( same references as the originals)

//Shallow copy - Copia superficial
const jessicaCopy = { ...jessica }

jessicaCopy.lastName = 'Simpson'

jessicaCopy.family.push('Mary')
jessicaCopy.family.push('Jhon')


console.log(jessica)
console.log(jessicaCopy)


//Deep copy/clone
const jessicaClone = structuredClone(jessica)
jessicaClone.family.push('Mary')
jessicaClone.family.push('Jhon')

console.log('Before', jessica)
console.log('After', jessicaClone)


// Memory management: gargabe collection:

// Mark and sweep algorithm

// Mark: Mark all objects that are reachable from a root as alive 

// Sweep: Delete un-marked ( unreachable) objects and reclaim memory for future allocations.

//Memory leak: When objects that are no longer needed are incorrectly still reachable, and therefore not being garbage collected