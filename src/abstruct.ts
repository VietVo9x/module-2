abstract class Shape {
  private color: string;
  constructor(color: string) {
    this.color = color;
  }
  set setColor(color: string) {
    this.color = color;
  }
  get getColor(): string {
    return this.color;
  }
  abstract getArea(): number;
  abstract getPerimeter(): number;
}
class Circle extends Shape {
  protected radius: number;

  constructor(radius: number, color: string) {
    super(color);
    this.radius = radius;
  }
  getArea(): number {
    return this.radius ** 2 * Math.PI;
  }
  getPerimeter(): number {
    return this.radius * Math.PI * 2;
  }
  get getRadius() {
    return this.radius;
  }
}
class Rectangle extends Shape {
  protected width: number;
  protected height: number;
  constructor(width: number, height: number, color: string) {
    super(color);
    this.width = width;
    this.height = height;
  }
  getArea(): number {
    return this.width * this.height;
  }
  getPerimeter(): number {
    return (this.width + this.height) * 2;
  }
}
const circle = new Circle(16, "blue");

interface Playable {
  play(action: string): void;
}
class AudioPlayer implements Playable {
  play(action: string): void {
    console.log(`Đang phát Audio …: ${action}`);
  }
}
class VideoPlayer implements Playable {
  play(action: string): void {
    console.log(`Đang phát Video …${action}`);
  }
}
const audio = new AudioPlayer();
const video = new VideoPlayer();
video.play("ok");
