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

// Solution B: using math and no loop
function addUntil(n){
    return n * (n + 1)  / 2;
}
// 4 * (4 + 1) / 2
console.log(addUntil(4));