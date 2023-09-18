"use strict";
function handleEx_5() {
    const string = prompt("nhap day so cach nhau = dau phay") || " ";
    const arrNumber = string.split(",");
    const numbers = stringToNumber(arrNumber);
    const calulator = maxSubarraySum(numbers);
    console.log(calulator);
}
function maxSubarraySum(arr) {
    let maxSum = arr[0];
    let currentSum = arr[0];
    for (let i = 1; i < arr.length; i++) {
        currentSum = Math.max(arr[i], currentSum + arr[i]);
        if (currentSum > maxSum) {
            maxSum = currentSum;
        }
    }
    return maxSum;
}
function stringToNumber(str) {
    let numbers = [];
    for (let i = 0; i < str.length; i++) {
        numbers.push(Number(str[i]));
    }
    return numbers;
}
