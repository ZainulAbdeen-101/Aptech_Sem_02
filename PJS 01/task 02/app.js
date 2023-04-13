class Shape {
  constructor() {
    this.pi = 3.14;
  }
}

class Circle extends Shape {
  constructor(radius) {
    super(radius);
    this.radius = radius;
  }
  area() {
    console.log(this.pi * this.radius ** 2);
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super(width, height);
    this.width = width;
    this.height = height;
  }
  area() {
    console.log(this.width * this.height);
  }
  perimeter() {
    console.log(2 * (this.width + this.height));
  }
}

const circle1 = new Circle(10);
circle1.area();

const rectangle1 = new Rectangle(14, 12);
rectangle1.perimeter();
