"use strict";
function findTwoSum(nums, target) {
    const result = [];
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                result.push([nums[i], nums[j]]);
            }
        }
    }
    return result;
}
