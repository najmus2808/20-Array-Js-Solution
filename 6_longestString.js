// Problem-6: Given an array of strings, find the longest string.

function findLongestString(array) {
    let longestString = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i].length > longestString.length) {
            longestString = array[i];
        }
    }

    return longestString;
}

const strings = ['hello', 'world', 'foo', 'bar'];
console.log(findLongestString(strings));