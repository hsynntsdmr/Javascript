// 1 den 10 a kadar yazdıralım

for (i = 1; i <= 10; i++) {
    console.log(i);
}

//50 den 1 e doğru yazdıralım
for (i = 50; i >= 1; i--) {
    console.log(i);
}

//ikişer ikişer arttıralım

for (let i = 0; i <= 10; i += 2) {

    console.log(i);
}

//tek sayı halinde arttıralım

for (let i = 1; i <= 10; i += 2) {

    console.log(i);
}

// teklerde hüseyin yazsın çiftlerde naber yazsın

for (let i = 1; i <= 10; i++) {
    if (i % 2 == 1) {
        console.log("Hüseyin")
    }
    else {
        console.log("naber");
    }
}

// 50 den 1 e kadar gidelim ve sayıları toplayalım

let toplam = 0;

for (let i = 50; i >= 1; i--) {
    toplam += i

}
console.log(toplam)


//çarpım tablosu yapalım

// for(let i = 1; i<=10; i++){
//     for(let j = 1; j <=10; j++){
//        console.log(`${i}x${j}=${(i*j)}`)

//     }
// }

// kullanıcıdan istenilen sayı, asal sayı mı bulalım
// 1 e ve kendisinden başka sayıya bölünmeyen sayı asaldır.
// sayı nın yarısından sonra tam bölen olmaz, yani yarısına kadar bölsek yeterli
// Math.floor(sayi/2)

// let sayi = Number(prompt("Bir sayı giriniz: "));
// let sonuc = true;

// for(let i = 2; i<= Math.floor(sayi/2); i++){
//     if(sayi%i == 0){
//         // asal değildir
//         sonuc = false;
//         break;
//     }
// }
// if(sonuc){
//     alert(`${sayi} asaldır.`)
// }else{
//     alert(`${sayi} asal değildir.`)
// }

// Faktoriyel Hesaplama
// 5! 5.4.3.2.1

// let deger = Number(prompt("Bir sayi giriniz:"))
// let carpim = 1;

// for (i = 1; i <= deger; i++) {
//   carpim*=i
// }
// alert(`${deger} in faktoriyeli = ${carpim}`)


//armstrong sayısı hesaplama
//math.pow(sayi, üs)
// sayinin basamağı üssü oluyor ve haneleri üssü olarak toplanıp kendine eşitse armstrong sayısı oluyor
// 407 = (4^3) +(0^3) + (7^3) = 62 + 0 + 343 = 407

let deger = prompt("Bir deger giriniz");
let summ = 0;

for (i = 0; i <= deger.length; i++) {
    let rakam = deger.charAt(i)  //charAt ile indekse karşılık gelen sayıyı alıyoruz
    summ += rakam*rakam*rakam  // sayının kendi küpünü alıyoruz ve toplama ekliyoruz
}

if(Number(deger) == summ ){
    alert(`${deger} armstrong sayısıdır :).`);  
}else{
    alert(`${deger} armstrong sayısı değildir :(.)`); 
}

 