// Problem-16: Based on finding the two numbers that add up to a target value.

const purchases = [1, 2, 3, 4, 5, 1, 3, 5, 6, 7, 2, 4, 8, 9, 9];
let target = 10;
let pairs = [];
for (let i = 0; i < purchases.length; i++) {
    for (let j = i + 1; j < purchases.length; j++) {
        if (purchases[i] + purchases[j] === target) {
            pairs.push([purchases[i], purchases[j]]);
        }
    }
}
console.log(pairs);