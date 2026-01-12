"use strict";

const numbers = [1,2,3,45];
const array = [2,4,55,6,true,"True",34.32,numbers];
// all elements are zero based indexing

const newArr = new Array(1,2,3,45,77);
// only diff
newArray(5) // -> creates an empty array of length 5
// [] is predictable. new Array() has traps. Use brackets unless you really know why.

numbers.push(99);
numbers.push(87.634);
numbers.pop(); // pops the last element
numbers.unshift(89); // adds at the very beginning high timeconsuming as all the values behind needs to be shifted right
numbers.shift(); // moes left like the << binary operation but not same literally
