// Problem-4: Given an array of strings, create the new array with the first letter of each string.

function generateLetterArray(array, position = 0) {
    let letterArray = [];
    for (let i = 0; i < array.length; i++) {
        letterArray.push(array[i][position]);
    }

    return letterArray;
}

const strings = ['hello', 'world', 'foo', 'bar'];
console.log(generateLetterArray(strings));