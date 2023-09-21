"use strict";
class Product {
  constructor(id, name, price, quantity) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }
  get info() {
    return {
      id: this.id,
      name: this.name,
      price: this.price,
      quantity: this.quantity,
    };
  }
  set setName(name) {
    this.name = name;
  }
  set setPrice(price) {
    this.price = price;
  }
  set setQuantity(quantity) {
    this.quantity = quantity;
  }
  buy() {
    if (this.quantity === 0) {
      return { error: "Sản phẩm hết hàng" };
    }
    this.quantity -= 1;
    return { purchasedProduct: new Product(this.id, this.name, this.price, 1) };
  }
}
class Bakery {
  constructor() {
    this.productList = [];
  }
  createProduct(product) {
    let id = 1;
    if (this.productList.length > 0) {
      id = this.productList[this.productList.length - 1].id + 1;
    }
    const newProduct = new Product(
      id,
      product.name,
      product.price,
      product.quantity
    );
    this.productList.push(newProduct);
  }
  showAllProduct() {
    const products = this.productList.map((product) => product.info);
    return products;
  }
  updateProduct(data) {
    if (data?.id) {
      // nếu có data
      const index = this.productList.findIndex(
        (product) => product.id == data.id
      );
      if (index !== -1) {
        this.productList[index] = { ...this.productList[index], ...data }; //ghi đè thuộc tính cũ = thuộc tính mới
      }
    }
  }
  deleteProduct(id) {
    const indexProduct = this.productList.findIndex(
      (product) => product.id === id
    );
    this.productList.splice(indexProduct, 1);
  }
  buyProduct(id) {
    const product = this.productList.find((product) => product.id === id);
    if (product === undefined) {
      //tìm nếu không có sản phẩm
      alert("san pham khong ton tai");
    }
    product?.buy(); //hàm mua hàng trên product
  }
}
const store = new Bakery();
store.createProduct({ name: "laptop", price: 1000, quantity: 100 });
store.createProduct({ name: "mouse", price: 50, quantity: 200 });
store.createProduct({ name: "case", price: 30, quantity: 300 });
store.createProduct({ name: "head phone", price: 20, quantity: 500 });

console.log(store.showAllProduct());
class MyCart {
  addProduct() {}
  updateProduct() {}
  deleteProduct() {}
  showAllProduct() {}
}
