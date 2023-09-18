function handle_ex_4(): void {
  const str = prompt("nhap chuoi");
  const pattern = /^[a-zA-Z0-9]$/;
  let result: string[] = [];
  if (str) {
    for (let i = 0; i < str.length; i++) {
      if (pattern.test(str[i].toLocaleLowerCase())) {
        result.push(str[i]);
      }
    }
    isPalindrome(result);
  }
  
}
function isPalindrome(arr: string[]): void {
  let isValid = true;
  for (let i = 0; i < Math.floor(arr.length / 2); i++) {
    if (arr[i] !== arr[arr.length - 1 - i]) {
      isValid = false;
    }
  }
  if (isValid) {
    console.log(arr, "là một palindrome");
  } else {
    console.log(arr, "không phải là một palindrome");
  }
}
