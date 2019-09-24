// 9. Memoization

// İhtiyaç duyulan bir değerin sürekli olarak hesaplanması yerine bir kere hesaplanıp ihtiyaç 
// duyulduğunda bu değerin yeniden kullanılmasına verilen addır.
// Memorization ile karıştırılmaması gerekir.Bir nevi hatırlama denebilir.

const memoizedFunc = function () {
  let cache = {};
  return function (value) {
    if (value in cache) {
      console.log('Fetching from cache');
      return cache[value];
    } else {
      console.log('Calculating result');
      let result = value + 10;
      cache[value] = result;
      return result;
    }
  }
}

const addTen = memoizedFunc();
console.log(addTen(2));
console.log(addTen(10));
console.log(addTen(2));