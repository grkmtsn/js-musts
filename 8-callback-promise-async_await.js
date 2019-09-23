// 8. Callback - Promise - Async Await

// Callback - ES5
// Basit bir tanımla çalıştırılabilir bir kod bloğunu yani bir metotu, başka bir metota parametre olarak geçilmesi ve
// o metot içinden çalıştırılmasıdır.

function greeting(name) {
  console.log('Hello ' + name);
}
function processGreeting(callback) {
  name = 'John Doe';
  callback(name);
}
processGreeting(greeting); // Output: Hello John Doe

// Promises - ES6
// Promise objesi bir asenkron işlemin tamamlanma durumunu bize sunar ve duruma göre değişen değeri döner.
// Promise kodu callback cehenneminden kurtarmak için kullanılır.
// Promise üç duruma sahiptir.
// 1. pending: ilk durumdur(initial state).
// 2. fulfilled: İşlemin başarılı durumunu belirtir.
// 3. rejected: İşlemin başarısız durumunu belirtir.

// Örnek 1
var getUsers = new Promise(function (resolve, reject) {
  isDbOperationCompleted = true;
  if (isDbOperationCompleted) {
    resolve([{ id: 1, username: 'John' }, { id: 2, username: 'Foo' }]);
  } else {
    reject('You are not authorize!');
  }
});

getUsers.then(function (result) {
  console.log(result); // Output: if isDbOperationCompleted is true, [{ id: 1, username: 'John' }, { id: 2, username: 'Foo' }]
}).catch(function (error) {
  console.log(error); // Output: if isDbOperationCompleted is false, 'You are not authorize!'
});

// Örnek 2

var getTodos = function () {
  fetch('https://jsonplaceholder.typicode.com/todos').then(function (result) {
    result.json().then(function (json) {
      console.log(json);
    })
  }).catch(function (error) {
    console.log(error);
  })
}

getTodos();

// Async Await - ES7

var getPosts = async function () {
  try {
    var data = await fetch('https://jsonplaceholder.typicode.com/posts'); // fetch API, asenkron çalışan bir yapıdır.
    var posts = await data.json(); // Aynı şekilde json metotu da asenkron çalışan bir metottur.
    console.log(posts);
  } catch (error) {
    console.log(error);
  }
}

getPosts();