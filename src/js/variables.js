"use strict";// treat all js code as newer version

// alert("dinasaurss!!!!"); we are using node.js to run not browser... this will not work heree..
// documentation tc39.es and mdn

const rollNumber = 166345;
let emailId = "sonu@gmail.com";
var password = "756ty4@.1";
city = "Mumbai";  // can not use this after enabling string mode
let pinCode;

// rollNumber = 2; not allowed
console.table([rollNumber,emailId,password,city,pinCode]);
// we dont use var bacause of the problem in their scope.. it is depreciated

// number
// bigint
// string
// boolean
// null - standalone value
// undefined - not defined
// symbol - uniqueness
// object

console.log(typeof null);        // "object"  ← JS bug (historic)
console.log(typeof undefined);   // "undefined"
console.log(typeof 123);         // "number"
console.log(typeof 123n);        // "bigint"
console.log(typeof "chai");      // "string"
console.log(typeof true);        // "boolean"
console.log(typeof Symbol("id"));// "symbol"
console.log(typeof {});          // "object"
console.log(typeof []);          // "object"
console.log(typeof { a: 1 });    // "object"
console.log(typeof function(){});// "function"


//placeholders
var greet="hello", who="world";
console.log("%s, %s!",greet,who);