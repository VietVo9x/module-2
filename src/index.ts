class Circle {
  constructor(private radius: number, private color: string) {
    this.radius = radius;
    this.color = color;
  }
  getPerimeter(): number {
    return this.radius * 2 * Math.PI;
  }
  getArea(): number {
    return this.radius * this.radius * Math.PI;
  }
  getInfor(): { radius: number; color: string } {
    return { radius: this.radius, color: this.color };
  }
}
const circle1 = new Circle(20, "mau xanh");
// console.log(circle1);

class QuadraticEquation {
  constructor(private a: number, private b: number, private c: number) {
    this.a = a;
    this.b = b;
    this.c = c;
  }
  getter(): { a: number; b: number; c: number } {
    return { a: this.a, b: this.b, c: this.c };
  }
  setter(a: number, b: number, c: number): void {
    this.a = a;
    this.b = b;
    this.c = c;
  }
  get getDiscriminant(): number {
    let delta = this.b ** 2 - 4 * this.a * this.c;
    return delta;
  }
  get getRoot1() {
    const delta = this.getDiscriminant;
    if (delta >= 0) {
      return -this.b + Math.sqrt(delta) / (2 * this.a);
    }
    return 0;
  }
  get getRoot2() {
    const delta = this.getDiscriminant;
    if (delta >= 0) {
      return -this.b - Math.sqrt(delta) / (2 * this.a);
    }
    return 0;
  }
  calculation(): string {
    const delta = this.getDiscriminant;
    if (delta > 0) {
      return `phương trình đã cho có 2 nghiệm x1 = ${this.getRoot1} x2 = ${this.getRoot2}`;
    } else if (delta === 0) {
      return `phương trình có nghiệm kép x1 = x2 = ${this.getRoot1}`;
    } else {
      return "phương trình vô nghiệm";
    }
  }
}
const test = new QuadraticEquation(1, 10, 4);
// console.log(test.calculation());
class Fan {
  readonly slow = 1;
  readonly medium = 2;
  readonly fast = 3;
  constructor(
    private speed: number = 1,
    private status: boolean = false,
    private color: string,
    private radius: number
  ) {
    (this.speed = speed),
      (this.status = status),
      (this.color = color),
      (this.radius = radius);
  }
  get getSpeed(): string {
    switch (this.speed) {
      case this.fast:
        return "fast";
      case this.medium:
        return "medium";
      default:
        return "slow";
    }
  }
  get getStatus(): string {
    if (this.status) {
      return "fan is on";
    } else {
      return "fan is off";
    }
  }
  get getInfor(): {
    speed: string;
    status: string;
    color: string;
    radius: number;
  } {
    return {
      speed: this.getSpeed,
      status: this.getStatus,
      color: this.color,
      radius: this.radius,
    };
  }
  set setSpeed(param: number) {
    this.speed = param;
  }
  set setStatus(param: boolean) {
    this.status = param;
  }
}
const fanOne = new Fan(3, true, "blue", 10);
// console.log(fanOne.getInfor);

function handleCRUD(): void {
  const selected = prompt("C/R/U/D");
  const myClass = new ClassRoom();
  switch (selected) {
    case "C":
      myClass.addStudent(new Student(1, "viet vo", 28));
      console.log(myClass);
      break;

    case "R":
      myClass.renderStudent();
      break;

    case "U":
      myClass.updateStudent(1, new Student(1, "quoc vo", 21));
      break;

    case "D":
      myClass.deleteStudent(1);
      break;

    default:
      alert("Chon C/R/U/D");
      break;
  }
}
class Student {
  constructor(readonly id: number, private name: string, private age: number) {
    this.id = id;
    this.name = name;
    this.age = age;
  }
  getInfor(): { id: number; name: string; age: number } {
    return { id: this.id, name: this.name, age: this.age };
  }
  set setName(name: string) {
    this.name = name;
  }
  set setAge(age: number) {
    this.age = age;
  }
}
class ClassRoom {
  private students: Student[] = [];
  //phuong thuc
  addStudent(student: Student) {
    this.students.push(student);
  }
  deleteStudent(id: number) {
    const index = this.students.findIndex((student) => student.id === id);
    this.students.splice(index, 1);
  }
  renderStudent() {
    this.students.forEach((student) => {
      console.log(student.getInfor());
    });
  }
  updateStudent(id: number, updatedStudent: Student) {
    const index = this.students.findIndex((student) => student.id === id);

    if (index !== -1) {
      // Tìm thấy sinh viên có ID tương ứng
      this.students[index] = updatedStudent;
      console.log(`Sinh viên có ID ${id} đã được cập nhật.`);
    } else {
      console.log(`Không tìm thấy sinh viên có ID ${id}.`);
    }
  }
}

// class employee {
//   constructor(
//     private name: string,
//     private age: number,
//     private gender: string,
//     private rate: number,
//     private salary: any
//   ) {
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
//     this.rate = rate;
//     this.salary = this.calSalary();
//   }

//   calSalary() {
//     if (this.rate !== null) {
//       this.salary = this.rate * 1300000;
//     }
//   }
// }
// class Company {
//   private company: employee[] = [];
// }

class Employee {
  private id: string;
  private name: string;
  private age: number;
  private gen: string;
  private rate: number;
  private salary: number;

  constructor(
    id: string,
    name: string,
    age: number,
    gen: string,
    rate: number
  ) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.gen = gen;
    this.rate = rate;
    this.salary = 0;
  }

  inputData() {
    // Cho phép người dùng nhập thông tin
    this.id = prompt("Nhập mã nhân viên: ") || "";
    this.name = prompt("Nhập tên nhân viên: ") || "";
    this.age = Number(prompt("Nhập tuổi: ") || "0");
    this.gen = prompt("Nhập giới tính: ") || "";
    this.rate = Number(prompt("Nhập hệ số lương: ") || "0");
  }

  calSalary() {
    // Tính lương theo công thức
    this.salary = this.rate * 1300000;
  }

  displayData() {
    // Hiển thị thông tin nhân viên
    console.log("Mã nhân viên:", this.id);
    console.log("Tên nhân viên:", this.name);
    console.log("Tuổi:", this.age);
    console.log("Giới tính:", this.gen);
    console.log("Hệ số lương:", this.rate);
    console.log("Lương:", this.salary);
  }
}
class Company {
  main(): void {
    const employees: Employee[] = [];

    // Khởi tạo 5 đối tượng Employee và nhập thông tin
    for (let i = 1; i <= 5; i++) {
      const emp = new Employee("", "", 0, "", 0);
      emp.inputData();
      emp.calSalary();
      employees.push(emp);
    }

    // Hiển thị thông tin của tất cả nhân viên
    for (const emp of employees) {
      emp.displayData();
    }
  }
}

// Khởi tạo đối tượng
const company = new Company();
