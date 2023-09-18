function handleEx_5(): void {
  const string = prompt("nhap day so cach nhau = dau phay") || " ";
  const arrNumber: string[] = string.split(",");
  const numbers = stringToNumber(arrNumber);
  const calulator: number = maxSubarraySum(numbers);
  console.log(calulator);
}
function maxSubarraySum(arr: number[]): number {
  let maxSum = arr[0];
  let currentSum = arr[0];

  for (let i = 1; i < arr.length; i++) {
    // So sánh currentSum + arr[i] với arr[i] để quyết định xem
    // liệu có nên bắt đầu một mảng con mới hay không.
    currentSum = Math.max(arr[i], currentSum + arr[i]);

    // So sánh currentSum với maxSum để cập nhật maxSum nếu cần.
    if (currentSum > maxSum) {
      maxSum = currentSum;
    }
  }

  return maxSum;
}
function stringToNumber(str: string[]): number[] {
  let numbers = [];
  for (let i = 0; i < str.length; i++) {
    numbers.push(Number(str[i]));
  }
  return numbers;
}
