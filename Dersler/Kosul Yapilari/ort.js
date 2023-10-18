// DERS ORTALAMASI BULMA 

// vize %30, vize2 %30, final %40

let vize1 = Number(prompt('1.vize notunu giriniz:'));
let vize2 = Number(prompt('2.vize notunu giriniz:'));
let final = Number(prompt('final notunu giriniz:'));

let ort = (vize1*0.3) + (vize2*0.3) + (final*0.4);

if(ort >= 60){
alert('Dersten geçtiniz Tebrikler!!,' + ' Ortalamanız: ' + ort);

}
else{
alert('Dersten kaldınız!,'  + 'Ortalamanız:' + ort);
}