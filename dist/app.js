"use strict";
class Product {
    constructor(id, name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
        this.id = id;
    }
    get info() {
        return {
            name: this.name,
            price: this.price,
            quantity: this.quantity,
            id: this.id,
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
}
class Bakery {
    constructor() {
        this.productList = [];
    }
    createProduct(data) {
        let id = 1;
        if (this.productList.length > 0) {
            id = this.productList[this.productList.length - 1].id + 1;
        }
        const newProduct = new Product(id, data.name, data.price, data.quantity);
        this.productList.push(newProduct);
    }
    showAllProduct() {
        const products = this.productList.map((product) => product.info);
        return products;
    }
    deleteProduct(id) {
        // const index = this.productList.findIndex((product) => product.id === id);
        // this.productList.splice(index, 1);
        const newList = this.productList.filter((product) => product.id !== id);
        this.productList = newList;
    }
    updateProduct(data) {
        if (data?.id) {
            const product = this.productList.find((product) => product.id == data.id);
            const index = this.productList.findIndex((product) => product.id == data.id);
            const newProduct = { ...product?.info, ...data };
            const productAdd = new Product(newProduct.id, newProduct.name, newProduct.price, newProduct.quantity);
            this.productList.splice(index, 1, productAdd);
        }
    }
    buyProduct(id) {
        const product = this.productList.find((product) => product.id == id);
        if (product === undefined) {
            alert("Sản phẩm không tồn tại");
            return;
        }
        if (product.info.quantity > 0) {
            // Giảm số lượng trong Bakery
            product.setQuantity = product.info.quantity - 1;
            this.updateProduct(product);
            //   Phải tạo sản phẩm mới với số lượng mới
            const newProduct = new Product(product.info.id, product.info.name, product.info.price, 1);
            return newProduct;
        }
        else {
            alert("Sản phẩm hết hàng");
        }
    }
    returnProduct(id, quantity) {
        const product = this.productList.find((product) => product.id === id);
        if (product) {
            // Kiểm tra số lượng trả lại có hợp lệ không
            if (quantity > 0) {
                // Cập nhật số lượng trong cửa hàng
                product.setQuantity = product.info.quantity + quantity;
                // Cập nhật thông tin sản phẩm trong danh sách sản phẩm của cửa hàng (nếu cần)
                // this.updateProduct(product);
                console.log(111111111, this.productList, product);
            }
            else {
                alert("Số lượng trả lại không hợp lệ");
            }
        }
        else {
            alert("Sản phẩm đã hết hàng");
        }
    }
}
const store = new Bakery();
store.createProduct({ name: "Bánh mì", price: 20000, quantity: 50 });
store.createProduct({ name: "Bánh bao", price: 15000, quantity: 100 });
store.createProduct({ name: "Bánh trung thu", price: 150000, quantity: 200 });
store.createProduct({ name: "Bánh đa", price: 10000, quantity: 200 });
class MyCart {
    constructor() {
        this.myCart = [];
    }
    buyProduct(id) {
        // Trừ sản phẩm
        const product = store.buyProduct(id);
        // name, id, price từ --> Bakery --> tạo 1 sản phẩm mới với số lượng là 1 --> cart
        if (!product) {
            return;
        }
        const productCart = this.myCart.find((productInCart) => productInCart.id === product.id);
        if (productCart) {
            productCart.setQuantity = productCart.info.quantity + 1;
        }
        else {
            this.myCart.push(product);
        }
    }
    deleteProduct(id) {
        const indexProduct = this.myCart.findIndex((product) => product.id === id); //index trong cart
        const product = this.myCart.find((product) => product.id === id); //product trong cart
        if (product) {
            store.returnProduct(id, product?.info.quantity);
        }
        //xoa san pham trong cart
        this.myCart.splice(indexProduct, 1);
    }
    editCart() {
    }
    showAllCart() {
        const products = this.myCart.map((product) => product.info);
        return products;
    }
}
const user_1 = new MyCart();
user_1.buyProduct(1);
user_1.buyProduct(2);
user_1.buyProduct(2);
user_1.buyProduct(3);
user_1.buyProduct(4);
user_1.buyProduct(4);
user_1.deleteProduct(4);
console.log(user_1);
console.log(store);
