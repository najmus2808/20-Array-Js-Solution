// Problem-9: Given an array of numbers, remove all duplicates.

function removeDuplicates(array) {
    const result = [];

    for (let i = 0; i < array.length; i++) {
        if (!result.includes(array[i])) {
            result.push(array[i]);
        }
    }

    return result;
}

const numbers = [1, 2, 2, 3, 3, 4, 5];
const uniqueNumbers = [...new Set(numbers)];  // another way to get unique numbers
console.log(uniqueNumbers);
console.log(removeDuplicates(numbers));