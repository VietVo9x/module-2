"use strict";
class Shape {
    constructor(color) {
        this.color = color;
    }
    set setColor(color) {
        this.color = color;
    }
    get getColor() {
        return this.color;
    }
}
class Circle extends Shape {
    constructor(radius, color) {
        super(color);
        this.radius = radius;
    }
    getArea() {
        return this.radius ** 2 * Math.PI;
    }
    getPerimeter() {
        return this.radius * Math.PI * 2;
    }
    get getRadius() {
        return this.radius;
    }
}
class Rectangle extends Shape {
    constructor(width, height, color) {
        super(color);
        this.width = width;
        this.height = height;
    }
    getArea() {
        return this.width * this.height;
    }
    getPerimeter() {
        return (this.width + this.height) * 2;
    }
}
const circle = new Circle(16, "blue");
class AudioPlayer {
    play(action) {
        console.log(`Đang phát Audio …: ${action}`);
    }
}
class VideoPlayer {
    play(action) {
        console.log(`Đang phát Video …${action}`);
    }
}
const audio = new AudioPlayer();
const video = new VideoPlayer();
video.play("ok");
