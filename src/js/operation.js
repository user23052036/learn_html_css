"use strict";

// Unary + performs ToNumber coercion:
let val = 5;
let negVal = -val;

console.log(val);
console.log(negVal);
console.log(val+val);
console.log(val-val);
console.log(val/val);
console.log(val*val);
console.log(val**val);
console.log(val%val);

let  str1 = "oman";
let str2 = " Odriges";
let str3 = str1+str2;
console.log(str3);

console.log();  // nothing printed
console.log("");  // nothing printed
console.log(" "); // nothing printed

console.log("+true => ", +true); // 1
// console.log("++true => ", ++true); Invalid left-hand side expression in prefix operation
// console.log("true++ => ", true++);  Invalid left-hand side expression in postfix operation
console.log("+false => ", +false); // 0
// console.log("++false => ", ++false); Invalid left-hand side expression in prefix operation
//console.log("false++ => ", false++); Invalid left-hand side expression in postfix operation

console.log(+""); // 0
// console.log(++""); invalid left-hand side expression in prefix operation
// console.log(""++); Invalid left-hand side expression in postfix operation

console.log("1"+2+2); // 122
console.log(2+2+"1"); // 41

console.log("null => ", null); // null
console.log("+null => ", +null); // 0
// console.log(++null); Invalid left-hand side expression in prefix operation
// console.log(null++); Invalid left-hand side expression in postfix operation

console.log("undefined => ",undefined);  // undefined
console.log("+undefined => ",+undefined); // NaN
// console.log(++undefined); Cannot assign to read only property 'undefined' of object '#<Object>'
// console.log(undefined++); Cannot assign to read only property 'undefined' of object '#<Object>'

let num1,num2,num3;
num1 = num2 = num3 = 4*5;
console.table([num1,num2,num3]);
console.log(num1++);


