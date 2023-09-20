"use strict";
class product {
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
    get getID() {
        return this.id;
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
    set setID(id) {
        this.id = id;
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
    displayData() {
        this.getInfo;
    }
}
