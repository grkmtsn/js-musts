// 3. IIFE ( Immediately Invoked Function Expression)

// Normal Fonksiyon

function addTogether() {
  var x = 20;
  var y = 20;
  var answer = x + y;
}
addTogether();

// Yukarıda basit bir şekilde fonksiyonu tanımladık ve alt satırında onu çağırdık.
// Peki ya ben o çağırdığım methodu uygulamamın herhangi bir yerinde bir daha kullanmıcaksam ve ona bir daha erişilmesini istemiyorsam;
// Burada devreye IIFE giriyor. Adım adım fonksiyonumuzu IIFE uyarlayalım.

// 1. Adım: Methodumuzu parantezlere saralım.

(function addTogether() {
  var x = 20;
  var y = 20;
  var answer = x + y;
});

// 2.Adım: Şuan metodumuz named fuction expression ile yazılı. Fakat bizim metodumuzun anonim olması gerekir. Çünkü onu bir daha çağırmayacağız. Adını silelim.

(function() {
  var x = 20;
  var y = 20;
  var answer = x + y;
});

// 3.Adım: Ve son adım. Bizim bu metodu çağırmamız lazım. Ama adı yok. O zaman metodumuzun sonuna parantez çiftimizi ekleyelim.

(function() {
  var x = 20;
  var y = 20;
  var answer = x + y;
  console.log(answer); // Output: 40
})();