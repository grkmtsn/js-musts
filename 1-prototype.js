// 1. JavaScript Prototype

// JavaScript'te nesne oluşturmanın çeşitli yolları vardır. 
// JavaScript'te nesne oluşturmanın yollarından biri yapıcı(constructor) method yöntemidir.

function Phone(brand, model) {
  this.brand = brand;
  this.model = model;
  this.getDetails = function () {
    return this.brand + ' ' + this.model;
  }
}

const iphone6s = new Phone('Iphone', '6s');
const xaomiMi6 = new Phone('Xaomi', 'Mi6');

console.log(iphone6s.getDetails()); // Output: Iphone 6s
console.log(xaomiMi6.getDetails()); // Output: Xaomi Mi6
console.log(iphone6s);

// Yukarıdaki örnekte, bir yapıcı(constructor) methodu kullanarak 'iphone6s', 'xaomiMi6' adlı iki nesne yaratıyoruz. 
// JavaScript'te, her nesnenin kendi yöntemleri ve özellikleri vardır. 
// Örneğimizde, oluşturduğumuz iki nesne, getDetails () methodunun iki örneğine sahiptir. GetDetails'in kopyasının aynı şeyi yapması bir anlam ifade etmiyor. Performans kaybı!
// Yani her obje oluşturduğumuzda 'getDetails' metodu yeniden oluşacaktır. Bu durumun önüne geçmek için methodları prototype olarak tanımlamalıyız.

// Prototype
// Oluşturduğunuz instance’ların miras alacağı property’leri barındıran bir nesnedir.
// 'new' keyword‘ü kullanarak oluşturduğunuz instance, class’ının prototype nesnesindeki tanımlı property’leri miras alarak oluşturulur.
// Class-based dillere nazaran Prototype-based bir dil olan javascript’te bir class tanımlamak istediğinizde instance tarafından miras alınacak property’leri prototype’ına tanımlayacaksınız.
// Yukarıdaki yapıcı(constructor) methodunu prototype kullanarak tekrar yazalım.

function Store(code, name) {
  this.code = code;
  this.name = name;
}

Store.prototype.getDetails = function () {
  return this.code + ' ' + this.name;
}

const myStore = new Store('1', 'MyStore');
const newStore = new Store('2', 'NewStore');

console.log(myStore.getDetails()); // Output: 1 MyStore
console.log(newStore.getDetails()); // Output: 2 NewStore
console.log(myStore.__proto__ === Store.prototype); // Output: true