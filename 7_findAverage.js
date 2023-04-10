// Problem-7: Given an array of numbers, find the average.

function findAverage(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i]
    }

    const average = sum / array.length;
    return average;
}

const numbers = [1, 2, 3, 4, 5];
console.log(findAverage(numbers));