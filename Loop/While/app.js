// 1 den 10 a kadar yazdıralım

// let sayac = 1;
// while (sayac <= 10) {
//     console.log(sayac)
//     sayac++;
// }

// 1 den 10 a kadar çiftleri ve tekleri yazdıralım

let i = 0;

while (i <= 10) {
    if (i % 2 == 0) {
        console.log("Çift sayılar:" + i)
    }else{
        console.log("Tek sayılar:" + i)
    }
    i++;
}

// 0 dan başlayarak 10 a kadar, 2 nin kuvvetlerini yazdıralım

let base = 2;
let exponent = 1;

while(exponent <=10){
    let islem = Math.pow(base, exponent);
    console.log(`${base} üzeri ${exponent} = `+ islem)
    exponent++;
}

let numbers = [1,2,3,4,5,6,7,8,9,10]
let x = 0;
let toplam = 0;

while(x < numbers.length){
    toplam += numbers[x]
    x++;
}
console.log(`Dizinin elemanlarının toplamı= ${toplam}`)

