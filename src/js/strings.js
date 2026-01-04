const { log } = require("console");

const name = "Souvik";
const year = 2026;

const message = `Hello ${name}, welcome to ${year}!`;
console.log(message);

// String interpolation in JavaScript means inserting variables or expressions directly inside a string, cleanly and readably.Use backticks `
// "Hello " + name + ", welcome to " + year; old way avoid

// string object gives us inbult methods to use
const mode = String(`light mode on!!!`);
console.log(mode);
console.log(typeof mode);
console.log(mode.__proto__);  // we can see all the methods(functions) in webbrowser console tab
console.log(mode.length);
console.log(mode.toUpperCase()); // Strings are immutable → methods return NEW strings, original is unchanged

console.log(mode.charAt(1)); // indx 0 based
console.log(mode.indexOf(`t`));

const substr = mode.substring(0,4); // excluding the 4
console.log(substr);

/* slice(start, end) Negative values count from the END
 0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15
 l i g h t   m o d e     o  n  !  !  !

*/

console.log(mode.slice(0, 5));  // light
console.log(mode.slice(6)); // starts at 6th indx mode on!!!
console.log(mode.slice(-5)); // length - 5 = 16 - 5 = 11  mode.slice(11)
// console.log(mode.slice(-50, 0)); mode.slice(0, 0); no output
console.log(mode.slice(-10,10)); // start = 16-10 = 6 and end = 10-1 = 9 which is mode

const str_with_space = `  hellow   lots   of ..  . spaces  !! !`;
console.log(str_with_space);
console.log(str_with_space.trim());  // only trims start and end spaces and newlines

const url = `https://www.1%20line%20code.com`;
console.log(url.replace('%20',''));
console.log(url.includes('code')); // asking questions gives boolean answers

// The split() method of String values takes a pattern and divides this string into an ordered list of substrings by searching for the pattern, puts these substrings into an array, and returns the array.

const str = "the bird was singing a song in the morning";
const splitarr = str.split(" ");

console.log(splitarr);

const strCopy = str.split();
console.log(strCopy);


const emptyString = "";

// string is empty and separator is non-empty
console.log(emptyString.split("a")); // [""]

// string and separator are both empty strings
console.log(emptyString.split(emptyString)); // []


