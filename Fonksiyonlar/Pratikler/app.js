// //Harf sayısı bulma uygulaması

// let metin = "Benim adım Hüseyin Taşdemir";

// let giris = prompt("Harf giriniz:");

// const harfbul = giris => {
//     let toplam = 0;

//     for (i = 0; i < metin.length; i++) {
//         if (metin.charAt(i) === giris) {
//             toplam += 1
//         }
//     }
//     return toplam
// }

// console.log(harfbul(giris))


//Mükemmel Sayı Uygulaması

// sayinin tam bölenlerinin toplamı, sayının iki katına eşitse mükemmel sayısıdır
// 6 = 1,2,3,6  1+2+3+6 = 12  6*2= 12
// bir sayının tam bölünmesi için kendi yarısana kadar gitmesi gereklidir
// 8/2 = 4  1,2,3,4   4 ten sonra tam bölüm olmaz




function mukemmelSayi(number) {
    let sum = 0;
    for (i = 2; i <= number / 2; i++) {    //2 den başlatmamın sebebi 1 ve kendini sonradan dahil etmek
        if (number % i == 0) {
            sum += i
        }
    }

    sum += 1 + number

    if (sum == number * 2) {
        console.log(`${Number} mükemmel sayıdır. `)

    } else {
        console.log(`${Number} mükemmel sayı değildir. `)
    }

}

console.log(mukemmelSayi(15))