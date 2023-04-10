// Problem-5: Given an array of numbers, create a new array with the only even number.

function generateEvenArray(array) {
    let evenNumbers = [];

    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            evenNumbers.push(array[i])
        }
    }

    return evenNumbers;
}

const numbers = [1, 2, 3, 4, 5];
console.log(generateEvenArray(numbers))