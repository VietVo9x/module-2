class Car {
  private name: string;
  private brand: string;
  private price: number;
  private color: string;
  private category: string;
  constructor(
    name: string,
    brand: string,
    price: number,
    color: string,
    category: string
  ) {
    this.name = name;
    this.brand = brand;
    this.price = price;
    this.color = color;
    this.category = category;
  }
  get getInfor() {
    return {
      name: this.name,
      brand: this.brand,
      price: this.price,
      color: this.color,
      category: this.category,
    };
  }
  get getName(): string {
    return this.name;
  }
  get getBrand(): string {
    return this.brand;
  }
  get getPrice(): number {
    return this.price;
  }
  get getColor(): string {
    return this.color;
  }
  get getCategory(): string {
    return this.category;
  }
  set setName(name: string) {
    this.name = name;
  }
  set setBrand(brand: string) {
    this.brand = brand;
  }
  set setPrice(price: number) {
    this.price = price;
  }
  set setColor(color: string) {
    this.color = color;
  }
  set setCategory(category: string) {
    this.category = category;
  }
  inputData() {
    const name = prompt("nhập tên") || "";
    const color = prompt("nhập màu") || "";
    const price = Number(prompt("nhập giá")) || 0;
    const brand = prompt("nhập hãng");
    const category = prompt("nhập loại");
    if (name) {
      this.setName = name;
    }
    if (color) {
      this.setColor = color;
    }
    if (price) {
      this.setPrice = price;
    }
    if (brand) {
      this.setBrand = brand;
    }
    if (category) {
      this.setCategory = category;
    }
  }
}
