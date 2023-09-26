"use strict";
//bài 1 : sắp xếp mảng dữ liệu number or string
function sort(data, condition) {
    const newData = [...data];
    if (condition === "increase") {
        newData.sort((a, b) => (a > b ? 1 : 1));
    }
    else {
        newData.sort((a, b) => (a > b ? -1 : 1));
    }
    return newData;
}
console.log(sort([1, 11, 2, 21, 3], "decrease"));
console.log(sort(["b", "a", "d", "z", "y"], "increase"));
//BÀI 2. Viết 1 một hàm để push() dữ liệu vào trong mảng
// Input arr = [1,2]
// addData(arr, 10)  arr = [1,2,10]
function pushToArray(arr, element) {
    arr.push(element);
    return arr;
}
console.log(pushToArray([1, 2], 10));
//Bài 3: Duyệt qua các phần tử trong object
function readObject(obj) {
    for (let key in obj) {
        console.log(key + " la" + " " + obj[key]);
    }
}
const obj = { name: "viet vo", age: 29 };
readObject(obj);
//Bài 4: Viết function kiểm tra phần tử có trong mảng hay không
function checkElementToArray(arr, element) {
    return arr.includes(element);
}
console.log(checkElementToArray([1, 9, 2], 12));
console.log(checkElementToArray(["a", "z", "b"], "a"));
//Bài 5 function tìm giá trị lớn nhất trong mảng
function maxElementToArray(arr) {
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i];
        }
    }
    return max;
}
console.log(maxElementToArray([1, 21, 100, 2220, 2]));
console.log(maxElementToArray(["a", "b", "c", "d", "i", "z"]));
