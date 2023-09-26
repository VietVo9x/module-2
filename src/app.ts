class CloneArr<T> {
  private element: T[] = [];

  add(...number: T[]) {
    this.element.push(...number);
  }
  sum(): string | number {
    if (typeof this.element[0] == "number") {
      return this.element.reduce(
        (cur, arr) => (cur as number) + (arr as number),
        0
      );
    }
    return " Mảng không phải số nên không thể tính tổng";
  }
}
const newArr = new CloneArr();
newArr.add(1, 2, 4, 5, 6, 7);
console.log(newArr.sum());

// newArr.add(
//   1,
//   2,
//   3,
//   "2",
//   "212",
//   { name: "viet" },
//   [0, 2, 1, 54, 5, 5, 5]
// );
