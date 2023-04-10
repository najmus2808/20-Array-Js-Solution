// Problem-3: Given an array of numbers, find the sum of all number.

function findSum(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}

const numbers = [4, 2, 7, 1, 8];
console.log(findSum(numbers));