// 7. Polymorphism

// Polymorphism için en sade: “Bir ana sınıftan (base class’da denilir) türetilmiş sınıflar.”

class GeometricShape {
  area() {
    return 0;
  }
  toString() {
    return Object.getPrototypeOf(this).constructor.name;
  }
}

class Circle extends GeometricShape {
  constructor(r) {
    super();
    this.radius = r;
  }

  area() {
    return Math.PI * this.radius ** 2;
  }
}

class Rectangle extends GeometricShape {
  constructor(w, h) {
    super();
    this.width = w;
    this.height = h;
  }

  area() {
    return this.width * this.height;
  }
}

class Triangle extends GeometricShape {
  constructor(b, h) {
    super();
    this.base = b;
    this.height = h;
  }

  area() {
    return (this.base * this.height) / 2;
  }
}

function cumulateShapes(shapes) {
  return shapes.reduce(function(sum, shape) {
    if (shape instanceof GeometricShape) {
      console.log(
        `Shape: ${shape.toString()} - Area: ${shape.area()} - Sum: ${sum}`
      );
      return sum + shape.area();
    }
    throw Error("Bad argument shape");
  }, 0);
}

var shapes = [
  new Circle(3),
  new Rectangle(2, 3),
  new Triangle(3, 4),
  new Circle(2)
];

console.log(cumulateShapes(shapes));
