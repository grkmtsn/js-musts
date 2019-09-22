// 5. Closure and Module Pattern

// Normalde bir method çalışıp bittiğinde stackde oluşturduğu değişkenler yok olur.
// Closure bir fonksiyonun, başka bir lexical scope tarafından çağırılsa bile kendi lexical scope’unu hatırlamasıdır.
// Başka bir değişle; bir fonksiyon kendi kapsamı dışındaki bir değişkeni kullanıyorsa ve bu fonksiyon başka bir kapsamdan çalıştırılsa bile o değişkene hala erişimi vardır.

// IIFE
var receiptCalculator = (function() {
  var _totalCost = 0; // Değişken stackden silinmedi. Çünkü alt satırdaki fonksiyon tarafından kapatıldı(closure).Closure olmasaydı, fonksiyon her çağırıldığında değer 0 olacaktı. Aynı zamanda bir private değişken oldu.

  function add(amount) {
    if (amount < 0) {
      console.log("Error!");
    }
    _totalCost = amount + _totalCost;
    log();
    return _totalCost;
  }

  function remove(amount) {
    if (amount < 0) {
      console.log("Error!");
    }
    _totalCost = _totalCost - amount;
    log();
    return _totalCost;
  }

  // Private bir fonksiyon. Dışarıdan erişilemez.
  function log() {
    console.log(_totalCost);
  }

  return {
    // Dışarıya açtığım fonksiyonlar
    add,
    remove
  };
})();

receiptCalculator.add(10);
receiptCalculator.add(300);
var finalTotalCost = receiptCalculator.remove(150);
console.log("Final Cost is " + finalTotalCost); // Output: Final Cost is 160
console.log(receiptCalculator._totalCost); // Output: undefined
receiptCalculator.log(); // TypeError
