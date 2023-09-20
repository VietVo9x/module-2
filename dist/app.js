"use strict";
class Product {
    constructor(id, name, price, quantity) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.quantity = quantity;
        this.id = id;
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }
    get getInfo() {
        return {
            id: this.id,
            name: this.name,
            price: this.price,
            quantity: this.quantity,
        };
    }
    get getName() {
        return this.name;
    }
    get getPrice() {
        return this.price;
    }
    get getQuantity() {
        return this.quantity;
    }
    set setName(name) {
        this.name = name;
    }
    set sePrice(price) {
        this.price = price;
    }
    set setQuantity(quantity) {
        this.quantity = quantity;
    }
    inputData() {
        this.name = prompt("nhap name") || "";
        this.price = Number(prompt("nhap price")) || 0;
        this.quantity = Number(prompt("nhap quantity")) || 0;
    }
    displayData() {
        return `Id: ${this.id}, Name: ${this.name}, Price: ${this.price}, Quantity: ${this.quantity}`;
    }
}
class Bakery {
    constructor() {
        this.productList = [];
    }
    //tao moi product
    addProduct(data) {
        let id = 1;
        if (this.productList.length > 0) {
            id = this.productList[this.getLength - 1].id + 1;
        }
        const newProduct = new Product(id, data.name, data.price, data.quantity);
        this.productList.push(newProduct);
    }
    get getLength() {
        return this.productList.length;
    }
    //hien thi tat ca product
    displayProduct() {
        const products = this.productList.forEach((product) => product.getInfo);
        return products;
    }
    //delete product
    deleteProduct(id) {
        // const index = this.productList.findIndex((product) => product.id === id);
        // this.productList.splice(index, 1); // tìm theo thứ tự và xoá = splice
        const newProductList = this.productList.filter((product) => product.id !== id);
        this.productList = newProductList; // gán lại
    }
    //update product
    updateProduct(id, updatedData) {
        const productIndex = this.productList.findIndex((product) => product.id === id);
        if (productIndex !== -1) {
            // Sao chép thuộc tính của sản phẩm hiện tại
            const currentProduct = { ...this.productList[productIndex] };
            // Áp dụng các thay đổi từ updatedData
            this.productList[productIndex] = { ...currentProduct, ...updatedData };
        }
        else {
            console.log(`Không tìm thấy sản phẩm với ID ${id}`);
        }
    }
}
const products = new Bakery();
console.log(products);
