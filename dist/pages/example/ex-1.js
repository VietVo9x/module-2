"use strict";
function charCountTS(str) {
    const obj = {};
    for (let i = 0; i < str.length; i++) {
        obj[str[i]] ? obj[str[i]]++ : (obj[str[i]] = 1);
    }
    return obj;
}
