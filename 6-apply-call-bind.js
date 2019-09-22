// 6. Apply, Call, Bind

var phone = {
  brand: "Iphone",
  model: "6S",
  cashPrice: 5000
};

var makeDiscount = function(amount) {
  return this.cashPrice * (1 - amount);
};

console.log(makeDiscount.call(phone, 0.1)); // Output: 4500 - İlk parametre this e karşılık gelecek olan nesne, sonraki yazılan diğer bütün parametreler asıl fonksiyonun alacağı parametrelerdir.
console.log(makeDiscount.apply(phone, [0.1])); // Output: 4500 - İlk parametre this e karşılık gelecek olan nesne, sonraki parametre asıl fonksiyonun alacağı parametrelerden oluşan bir dizidir.

var boundFunc = makeDiscount.bind(phone); // İlk parametre yine fonksiyonun hangi nesneye bağlanacağını alır.
console.log(boundFunc()); // Output: 4500
