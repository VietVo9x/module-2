// khai báo type
let age: number = 29;
let username: string = "viet vo";
//tự khai báo type
let number = 30;

//khai báo 1 function return giá trị function đó
function sum(a: number, b: number): number {
  return a + b;
}
//bài tập
//bài 1 khai báo 1 sinh viên với các trường thông tin

//bài 2 : tạo 1 function tính diện tích hình chữ nhật

//bài 3: khai báo danh sách sản phẩm

//giải
//bài 1:
const student: { name: string; age: number; class: string; address: string } = {
  name: "viet vo",
  age: 29,
  class: "js230726",
  address: "quang nam",
};
console.log(student);
// bài 2:
function rectangularArea(a: number, b: number): number {
  return 2 * (a + b);
}
console.log(rectangularArea(15, 26));

// bài 3
const products: {
  name: string;
  price: number;
  desc: string;
}[] = [
  {
    name: "pc",
    price: 28,
    desc: "pc gaming gia re",
  },
  {
    name: "mouse",
    price: 15,
    desc: "chuot gaming",
  },
];
console.log(products);
const numbers: number[] = [123123, 123, 123];
console.log("test commond");
