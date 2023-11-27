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