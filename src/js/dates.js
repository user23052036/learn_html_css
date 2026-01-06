/**
 * JavaScript Date objects represent a single moment in time in a platform-independent format. Date objects encapsulate an integral 
 * number that represents milliseconds since the midnight at the beginning of January 1, 1970, UTC (the epoch).
 * 
 */

// console.log(new Date(8.64e15).toString()); // "Sat Sep 13 275760 00:00:00 GMT+0000 (Coordinated Universal Time)"
// console.log(new Date(8.64e15 + 1).toString()); // "Invalid Date"

let myDate = new Date(); // created a date object

console.log(myDate);
console.log(myDate.getDate());
console.log(myDate.getDay());
console.log(myDate.getFullYear());
console.log(myDate.getHours());
console.log(myDate.getMinutes());
console.log(myDate.getMonth()+1); // month is 0 indexed
console.log(myDate.getSeconds());
console.log(myDate.getMilliseconds());
console.log(myDate.getTime());

console.log(typeof myDate); // object
console.log(myDate.toString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleString());  // date + time
console.log(myDate.toLocaleString('default',{
    weekday: 'long'
    //'short'  // Sun
    // 'long'   // Sunday
    // 'narrow' // S
    

}));

// Full date
myDate.toLocaleString('default', {
  dateStyle: 'full'
});
// → Sunday, 1 June 2026

// Only month
myDate.toLocaleString('default', {
  month: 'long'
});
// → June

// Day + Month
myDate.toLocaleString('default', {
  day: 'numeric',
  month: 'short'
});
// → 1 Jun


console.log(myDate.toLocaleDateString()); // only date
console.log(myDate.toLocaleTimeString()); // only time

let newDate1 = new Date(2026,0,12);
console.log(newDate1.toLocaleString());

let newDate2 = new Date(2026,0,12,1,1);
console.log(newDate2.toLocaleString());

let newDate3 = new Date("22-11-2003"); // mm-dd-yyyy
console.log(newDate3.toLocaleString());// Invalid Date

let newDate4 = new Date("11-22-2003"); // mm-dd-yyyy
console.log(newDate4.toLocaleString()); // 11/22/2003, 12:00:00 AM

// for quizes/poles
let myTimeStamp = Date.now(); // milisec val 
console.log(myTimeStamp);
console.log(Math.floor(myTimeStamp/1000)); // in seconds





