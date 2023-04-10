// Problem-10: Given an array of integers, find two numbers that add up to a target value.

function targetSum(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [nums[i], nums[j]];
            }
        }
    }
    return -1;
}

// Another Solution
function targetSumAnother(nums, target) {
    nums.sort((a, b) => a - b); // sort the array in non-decreasing order
    let i = 0;
    let j = nums.length - 1;
    while (i < j) {
        const sum = nums[i] + nums[j];
        if (sum === target) {
            return [nums[i], nums[j]];
        } else if (sum < target) {
            i++;
        } else {
            j--;
        }
    }
    return -1;
}

const numbers = [2, 7, 11, 15];
console.log(targetSum(numbers, 9));
console.log(targetSumAnother(numbers, 9));


