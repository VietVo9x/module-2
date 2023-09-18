function handle_ex_3(): void {
  const str: string = prompt("nhap chuoi") || "/";
  const checkData = isValid(str);
  if (checkData) {
    console.log("ký tự hợp lệ");
  } else {
    console.log("ký tự không hợp lệ");
  }
}
function isValid(data: string): boolean {
  const dataCheck: { [key: string]: string } = {
    "{": "}",
    "[": "]",
    "(": ")",
  };
  const stack = [];
  for (let i = 0; i < data.length; i++) {
    const key = data[i];
    const value = dataCheck[key];
    if (value) {
      //kiểm tra xem có key bằng giá trị của data thứ i không
      stack.push(value);
    } else {
      //nếu không có char => dữ liệu không là những trường hợp dấu mở => nó là dấu đóng
      if (data[i] !== stack.pop()) {
        //kiểm tra xem dấu đóng đó có phải là dấu đóng cuối cùng hay không => nếu không trả về false
        return false;
      }
    }
  }
  return stack.length === 0;
}
