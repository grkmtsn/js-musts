// 9. Memoization

// İhtiyaç duyulan bir değerin sürekli olarak hesaplanması yerine bir kere hesaplanıp ihtiyaç 
// duyulduğunda bu değerin yeniden kullanılmasına verilen addır.
// Memorization ile karıştırılmaması gerekir.Bir nevi hatırlama denebilir.

const memoizedFunc = function () {
  let cache = {};
  return function (value) {
    if (value in cache) {
      return cache[value];
    } else {
      let result = 0;
      for (let index = 0; index < value; index++) {
        result += index;
      }
      cache[value] = result;
      return result;
    }
  }
}

const addTen = memoizedFunc();
console.time();
console.log(addTen(100000));
console.timeEnd(); // Output: 2.510986328125ms

console.time();
console.log(addTen(100000));
console.timeEnd(); // Output: 0.107177734375ms
