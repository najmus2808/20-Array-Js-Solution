// Problem-2: Given an array of numbers, find the largest number.

function findLargestNumber(array) {
    let largestNumber = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] > largestNumber) {
            largestNumber = array[i];
        }
    }
    return largestNumber;
}

const numbers = [4, 2, 7, 1, 8];
console.log(findLargestNumber(numbers));