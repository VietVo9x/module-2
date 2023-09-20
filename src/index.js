"use strict";
class Car {
    constructor(name, brand, price, color, category) {
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
    get getName() {
        return this.name;
    }
    get getBrand() {
        return this.brand;
    }
    get getPrice() {
        return this.price;
    }
    get getColor() {
        return this.color;
    }
    get getCategory() {
        return this.category;
    }
    set setName(name) {
        this.name = name;
    }
    set setBrand(brand) {
        this.brand = brand;
    }
    set setPrice(price) {
        this.price = price;
    }
    set setColor(color) {
        this.color = color;
    }
    set setCategory(category) {
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
console.log(11111111);
