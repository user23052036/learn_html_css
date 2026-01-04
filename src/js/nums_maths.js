const score = 550;  // stack we onlt have copy
console.log(score.toFixed(3)); // after decimal 3 digit, for e-commerce application
// Returns a string representing a number in fixed-point notation.

const balance = new Number(440.34); // heap we have reference 
console.log(balance);
console.log(balance.toString());

const num = 27.5753;
console.log(num.toPrecision(2)); // no-of significat digits mentioned inside precision -> 28

const hundreds = 10000000;
console.log(hundreds.toLocaleString('en-IN')); // Converts a number to a string by using the current or specified locale.

console.log(Number.MAX_VALUE);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_VALUE);
console.log(Number.MIN_SAFE_INTEGER);

//-------------------------------------------- Maths--------------------------------------------------------------------

console.log(Math); // Object [Math] {}
console.log(typeof Math);        // "object"
console.log(Math.PI);            // 3.141592653589793
console.log(Math.max(2, 5, 9));  // 9
// new Math(); // ❌ TypeError: Math is not a constructor

/**
const obj = {};   // object without class
Objects in JS are not born from classes.
Classes are just syntax sugar added later.
Math is a built-in singleton object created by the JS runtime (V8, SpiderMonkey, etc.) when the program starts.
No new, no class, just an object literal internally.

In Java → objects come from classes
In JavaScript → classes come from objects

 */
