"use strict";
function handle_ex_3() {
    const str = prompt("nhap chuoi") || "/";
    const checkData = isValid(str);
    if (checkData) {
        console.log("ký tự hợp lệ");
    }
    else {
        console.log("ký tự không hợp lệ");
    }
}
function isValid(data) {
    const dataCheck = {
        "{": "}",
        "[": "]",
        "(": ")",
    };
    const stack = [];
    for (let i = 0; i < data.length; i++) {
        const key = data[i];
        const value = dataCheck[key];
        if (value) {
            stack.push(value);
        }
        else {
            if (data[i] !== stack.pop()) {
                return false;
            }
        }
    }
    return stack.length === 0;
}
