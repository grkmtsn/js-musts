// 2. Classes
// JavaScript ile Nesne Yönelimli Programlama yöntemlerini kullanmak çok çok zor ve zahmetlidir.
// Değişken güvenliği, belleği en iyi şekilde kullanmak en basit bir kaç sorundu.
// Bir önceki konuda belirttiğimiz gibi nesne tanımlayı şöyle yapıyorduk:

const Shape = function(posX = 0, posY = 0) {
  // Eğer parametre geçmezsek default olarak 0 değerlerini atadık.
  this.posX = posX;
  this.posY = posY;
};

Shape.prototype.move = function(nextPosX, nextPosY) {
  this.posX += nextPosX;
  this.posY += nextPosY;
};

Shape.prototype.getCurrentPosition = function() {
  return `Object at ${this.posX}:${this.posY}`;
};

// Class ile nesne oluşturmak

class ShapeClass {
  constructor(posX = 0, posY = 0) {
    // Eğer parametre geçmezsek default olarak 0 değerlerini atadık.
    this.posX = posX;
    this.posY = posY;
  }
  move(nextPosX, nextPosY) {
    this.posX += nextPosX;
    this.posY += nextPosY;
  }
  getCurrentPosition() {
    return `Object at ${this.posX}:${this.posY}`;
  }
}

const shape = new ShapeClass(20, 20);
shape.move(10, 10);
shape.move(15, 15);
shape.move(10, 5);
console.log(shape.getCurrentPosition()); // Object at 10:10

// Nesneye ait methodları blok içerisinde tanımlayabiliyoruz ve daha okunaklı düzgün bir kod haline geliyor.

// Bir classdan kalıtım almak
class Square extends ShapeClass {
  constructor(posX = 0, posY = 0, edge = 5) {
    super(posX, posY);
    this.edge = edge;
  }
  getPositionAndArea() {
    return {
      position: super.getCurrentPosition(),
      area: this.edge * this.edge
    };
  }
}

const square = new Square(10, 10, 10);
console.log(square.getCurrentPosition());
console.log(square.getPositionAndArea());

// Burada kullanılan super() metodu, kalıtım alınan sınıfın yapıcı(constructor) metoduna parametre geçmemizi sağlar.
// Bir sınıftan kalıtım alıyorsak super() metodunu kullanmak zorundayız.
// Ayrıca super metodunu kullarak kalıtım alınan sınıfın methodlarına ve propertylerine erişebiliriz.
