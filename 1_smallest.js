// Problem-1: Given an array of numbers, find the smallest number.

function findSmallestNumber(array) {
    let smallestNumber = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] < smallestNumber) {
            smallestNumber = array[i];
        }
    }
    return smallestNumber;
}

const array = [4, 2, 7, 1, 8];
console.log(findSmallestNumber(array));