// 4. Scope(Kapsam)

// Global kapsamı bir şirketin geneli(en üst), diğer kapsamlarıda şirketin departmanları ve değişkenleride birimlerde çalışan insanlar olarak tanımlarsak,
// Javascript kapsamları fonksiyon bazlı oluşurlar ve bu oluşan kapsamın değişkenlerine dışarıdan ulaşılamaz.

var employee = "John Doe";

function hrDepartment() {
  console.log(employee); // Output: undefined
  var employee = "Simon Walter";
  console.log(employee); // Output: Simon Walter
}

function itDepartment(employee) {
  console.log(employee); // Output: Summer Cem
  employee = "Farid Bang";
  console.log(employee); // Output: Farid Bang
  manager = "Ramon Tapia";
}

hrDepartment();
itDepartment("Summer Cem");
console.log(manager); // Output: Ramon Tapia
console.log(employee); // Output: John Doe

// Yukarıdaki kod motor tarafından ilk geçilişinde derlenir. Ve ilgili departmanları oluşturur, çalışanları o birimlere yerleştirir.

// Motor ilk satırda 'var' anahtar kelimesini görür ve global kapsam içinde olduğu için global kapsama sorar: 'Sende employee adında bir değişken var mı?'
// Global kapsam ona 'hayır' cevabını verir ve global kapsama yani şirketin geneline 'employee' adında bir çalışan eklenir.

// Motor 8. satıra geldiğinde 'function' anahtar kelimesini görür ve 'hrDepartment' adında yeni bir kapsam oluşturur. Artık motor soruları bu kapsama yöneltecektir.
// Motor 9. satıra geldiğinde motor sorar: 'hrDepartmanı, sende 'employee' adında bir değişken var mı?'
// Motor, 'Malesef, yok' diye bir cevap alır. Çünkü önceki 'employee' değişkeni global kampsamdadır. O zaman motor 'hrDepartment' departmanına 'employee' çalışanını ekler.

// Motor 12. satıra geldiğinde 'itDepartment' adında bir kapsam daha oluşturur ve artık soruları bu kapsama yöneltecektir.
// Ama bu fonksiyon parametre alan bir fonksiyondur. Parametre de 'itDepartment' kapsamı için bir değişkendir ve bu kapsama 'employee' adında bir çalışan eklenir.
// Motor 13. satıra geldiğinde sorar: 'itDepartment' kapsamı sende 'employee' isimli bir değişken(çalışan) var mı?. Cevap: 'Evet var'.
// Motor 14. satıra geldiğinde sorar: 'itDepartment' kapsamı sende 'manager' isimli bir değişken(çalışan) var mı?' Cevap: 'Hayır.Yok'.
// Motor bu satırda 'var' anahtar kelimesini göremediği için aynı soruyu bu sefer global kapsama sorar.
// Global kapsam cevap verir: 'Malesef bende de yok ama senin için bir tane oluşturayım.' der ve global kapsama 'manager' adında bir değişken eklenir.

// Şimdi kodu çalıştırdığımızda neler olacak??

// 6. satırda 'employee' değişkenine 'John Doe' değeri atanır. (Global Kapsam)
// Daha sonra 21. satıra gider ve 'hrDepartment' fonksiyonunu çalıştırır. Artık kapsamımız burasıdır.
// 9. satırdaki 'employee', 'hrDepartment' kampsamında tanımlı fakat henüz değer atanmamıştır. Yani çıktısı 'undefined' olacaktır.
// 10. satırda 'employee' değişkenine 'Simon Walter' değeri atanmıştır.
// 11. satırda program consola 'Simon Walter' yazdırır ve bu kapsamdan ayrılır.

// 15. satırdaki console.log methodu ekrana parametreden gelen 'Summer Cem' değerini yazdırır. Daha sonra 'employee' değişkenine 'Farid Bang' değerini atar ve ekrana yazdırır.
// 'manager' değişkeni zaten global kapsamdaydı ve global kapsamdaki 'employee' değişkeni hiç değişmediği için ekrana sırasıyla, 'Ramon Tapia', 'John Doe' yazacaktır.

