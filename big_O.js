// console.log('hello world');

/* Big O Notation is about comparing or classifying code and optimizing performance */

// Timing My Code

//Example: Write a function that calculates the sum of all numbers from 1 up to (and including) some number n

// Solution A: using a loop
function addUpTo(n) {
    let total = 0;
    for(let i = 1; i <=n; i++){
        total += i;
    }
    return total;
}

console.log(addUpTo(10));

// timing solution A
const {performance} = 
require('perf_hooks');
let t1 = performance.now(); 
addUpTo(1000000000);
let t2 = performance.now();
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds`)
// Time Elapsed: 0.9893219910003245 seconds


// Solution B: using math and no loop
function addUntil(n){
    return n * (n + 1)  / 2;
}
// 4 * (4 + 1) / 2
console.log(addUntil(4));

// timing solution B
let time1 = performance.now(); 
addUntil(1000000000);
let time2 = performance.now();
console.log(`Time Elapsed: ${(time2 - time1) / 1000} seconds`)
// Time Elapsed: 0.000003360999748110771 seconds 

/* 
Which is the best solution for speed of execution, A or B?
Solution B is faster, however different machines will run the code at different speeds. So, this may not be the most precise way to determine which one is better.
*/


