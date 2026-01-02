"use strict";

// all predictable results
console.log("02" > 2); //false
console.log("02" >= 2); //true
console.log("02" == 2); //true
console.log("02" < 2); //false
console.log("02" <= 2); //true


console.log("hii" > 12); //false  Number("hii") --> NaN and comparison to NaN alllways results in false



//--------------------------------------------------------------------------------------------------------------
// < > <= >=  → numeric conversion
// ==         → unsafe type coercion
// ===        → safe, predictable, recommended


"10" > 2;     // true
// "10" → Number("10") → 10
// 10 > 2 → true

"abc" > 1;    // false
// "abc" → Number("abc") → NaN
// Any comparison with NaN is false


"2" == 2;     // true
// "2" → Number("2") → 2
// 2 == 2 → true

"2" === 2;    // false
// string !== number → false
//----------------------------------------------------------------------------------------------------------------

/**
 * relation operations like > >= < <= converts null to a number but for equality operator (==) null is only euqal to undefined and for
 * every other case we get false. 
 */
console.log(null > 0);    // false
console.log(null == 0);   // false
console.log(null >= 0);   // true

// Number(undefined) === NaN
// any comparison with NaN -> false
console.log(undefined > 0);    // false
console.log(undefined < 0);    // false
console.log(undefined >= 0);   // false
console.log(undefined == 0);   // false


// special case
null == undefined    // true
null === undefined   // false

