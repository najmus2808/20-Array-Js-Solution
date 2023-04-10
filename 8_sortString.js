// Problem-8: Given an array of strings, sort then in alphabetical order.

// Without using built-in method
function sortString(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                const temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}

const strings = ['hello', 'world', 'foo', 'bar'];
console.log(sortString(strings));

// Using built-in method
console.log(strings.sort());


