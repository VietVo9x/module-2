//tính bao đóng của OOP
class Car {
  private id: number;
  private name: string;
  private price: number;
  private quantity: number;
  constructor(id: number, name: string, price: number, quantity: number) {
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

  set setQuantity(quantity: number) {
    this.quantity = quantity;
  }
}
const car_1 = new Car(1, "BMW", 10000, 100);

class Store {
  private store: Car[] = [];
}

// Lớp cha (superclass)
class Animal {
  constructor(public name: string, protected type: string) {
    this.name = name;
    this.type = type;
  }

  // Phương thức của lớp cha
  makeSound(sound: string) {
    console.log(`${this.name} makes a sound: ${sound}`);
  }
}

// Lớp con (subclass) kế thừa từ lớp cha
class Dog extends Animal {
  constructor(name: string) {
    super(name, "dong vat an co"); // Gọi constructor của lớp cha
  }

  // Phương thức của lớp con
  bark() {
    console.log(`${this.name} barks: Woof! Woof!`);
  }
}

// Sử dụng lớp cha
const genericAnimal = new Animal("lion", "dong vat an thit");
genericAnimal.makeSound("Grao Grao");

// Sử dụng lớp con
const myDog = new Dog("Buddy");
myDog.makeSound("Woof"); // Kế thừa từ lớp cha
myDog.bark(); // Phương thức của lớp con
