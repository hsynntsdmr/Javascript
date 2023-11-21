/*


1- Dizel : 24.53
2- Benzin : 22.25
3- LPG : 11.1


Alınacak Bilgiler;
1- Yakıt Tipi
2- Yüklenecek Yakıt Litresi


*/

const newLine = "\r\n";

let dizel = 24.53,
  benzin = 22.5,
  lpg = 11.1;

const yakitMetni = "1- Dizel" + newLine;
"2- Benzin" + newLine;
"3- LPG" + newLine;
("Yakıt türünüzü seçiniz");

let yakitTipi = prompt(yakitMetni);
let yakitLitresi = Number(prompt("Yakıt litresi giriniz:"));
let bakiye = Number(prompt("Bakiyenizi giriniz:"));

if (yakitTipi == "1") {
  //DİZEL
  let odenecekTutar = dizel * yakitLitresi;
  //bakiyeniz yeterli

  alert(
    "Yakıt alma işlemi başarılı" +
      newLine +
      "Alınan yakıt:" +
      yakitLitresi +
      newLine +
      "Tutar:" +
      tutar +
      newLine +
      "Kalan bakiyeniz:" +
      bakiye -
      odenecekTutar
  );
} else {
  //bakiyeniz yetersiz
  alert(
    "Yakıt alma işlemi başarısız" + newLine +
      "Ödenecek tutar:" + odenecekTutar +
      +"Bakiyeniz:" + bakiye +
      +"Eksik tutar:" +
      bakiye -tutar
  );
}
if (yakitTipi == "2") {
} else {
}
if (yakitTipi == "3") {
} else {
}
