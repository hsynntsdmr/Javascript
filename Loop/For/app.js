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

let sayi = Number(prompt("Bir sayı giriniz: "));
let sonuc = true;

for(let i = 2; i<= Math.floor(sayi/2); i++){
    if(sayi%i == 0){
        // asal değildir
        sonuc = false;
        break;
    }
}
if(sonuc){
    alert(`${sayi} asaldır.`)
}else{
    alert(`${sayi} asal değildir.`)
}










//faktoriyel bulalım

