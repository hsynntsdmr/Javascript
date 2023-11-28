// //Değer Döndüren Parametreli Fonksiyonlar
// function printFullName() {
//     let isim = 'Hüseyin'
//     let soyisim = 'Taşdemir'
//     let boşluk = ' '
//     let isimVeSoyisim = isim + boşluk + soyisim
//     return isimVeSoyisim
// }

// console.log(printFullName())

// // iki parametreli fonksiyon

// function sumTwoNumbers(numOne, numTwo) {
//     let sum = numOne + numTwo
//     return sum

// }
// let t = sumTwoNumbers(5, 5)
// console.log(t)

// //çemberin alanı 

// const areaOfCircle = (radius) => {
//     let area = Math.PI * radius * radius;
//     return area;
// }
// console.log(areaOfCircle(5))


//sonsuz sayıda parametre alan fonksiyon kullanımı

// arguments nesnesine erişelim

// function sumAllNums() {
//  console.log(arguments)
// }

// // sumAllNums(1, 2, 3, 4)
// // // Arguments(4) [1, 2, 3, 4, callee: ƒ, Symbol(Symbol.iterator): ƒ]

// // // fonksiyon tanımı

// function sumAllNums() {
//   let sum = 0
//   for (let i = 0; i < arguments.length; i++) {
//     sum += arguments[i]
//   }
//   return sum
// }

// console.log(sumAllNums(1, 2, 3, 4)) // 10
// console.log(sumAllNums(10, 20, 13, 40, 10))  // 93
// console.log(sumAllNums(15, 20, 30, 25, 10, 33, 40))  // 173

//kendi kendini çağıran fonksiyon

// (function(p){
//     console.log(p * p)
// })(6)


// //Arrow Function

// const square = n =>{
// return n*n
// }
// console.log(square(5))

// //kod bloğunda sadece bir işlem varsa return gibi, aşağıdaki gibi kullanabilirsin

// const kare = n => n * n  // -> 4
// console.log(kare(7))


//Arrow Functionda sınırsız sayıda parametre ekleme

// arguments nesnesine erişmemize bir örnek

const sumAllNums = (...args) => {
 // console.log(arguments), arguments nesnesi bulunamadı
 // bunun yerine spread operator (...) ve parametre adı kullanalım
 console.log(args)
}

sumAllNums("Hüseyin","Taşdemir",35)

