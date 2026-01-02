"use strict";

let score = "645ay6";

console.log(typeof(score)); // But this is NOT a function call: typeof is an operator, not a function.
console.log(typeof score);

let valInNumber = Number(score);
console.log(valInNumber); // NaN not a number
console.log(typeof valInNumber); // number

let val1 = null;
let val2 = undefined;
let val3 = NaN;

console.table([val1,val2,val3]); 
console.table([typeof val1, typeof val2, typeof val3]);  // object undefined number

let IntVal1 = Number(val1);
let IntVal2 = Number(val2);
let IntVal3 = Number(val3);

console.table([IntVal1,IntVal2,IntVal3]); // 0 NaN NaN
console.table([typeof IntVal1, typeof IntVal2, typeof IntVal3]);  // number number number

// 1 => true 0 => false
// "" => false "sonu" => true

let someNum = 89;
let boolNum = Boolean(someNum);
let stringNum = String(someNum);

console.table([someNum,boolNum,stringNum]);
console.table([typeof someNum, typeof boolNum, typeof stringNum]);

