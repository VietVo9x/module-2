function handleEx_4() {
  const str_1 = prompt("") || "";
  const str_2 = prompt("") || "";
  let newStr1 = checkString(str_1);
  let newStr2 = checkString(str_2);
  console.log(newStr1, 1111);
  console.log(newStr2, 1111);
  const permutation = checkPermutation(newStr1, newStr2);
  if (permutation) {
    console.log(str_1, "là hoán vị của", str_2);
  } else {
    console.log(str_1, "không phải là hoán vị của", str_2);
  }
}

function checkPermutation(arr1: string, arr2: string): boolean {
  if (arr1.length !== arr2.length) {
    return false;
  }

  const sortedStr1 = arr1.split("").sort().join("");
  const sortedStr2 = arr2.split("").sort().join("");

  return sortedStr1 === sortedStr2;
}

function checkString(param: string): string {
  let newStr = "";
  for (let i = 0; i < param.length; i++) {
    if (/^[a-zA-Z0-9]+$/.test(param[i])) {
      newStr += param[i];
    }
  }
  return newStr;
}
