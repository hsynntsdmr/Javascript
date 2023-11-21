let kg = Number(prompt("Kilonuzu giriniz:"));

let boy = Number(prompt("Boyunuzu metre cinsinden giriniz:"));

let sonuc = kg / (boy * 2);

if (sonuc < 18.5) {
  console.log("İdeal kilodasınız!");
} else if (sonuc >= 18.5 && sonuc <= 24.9) {
  console.log("İdeal kilonuzun altındasınız!");
} else if (sonuc >= 25 && sonuc <= 29.9) {
  console.log("İdeal kilonuzun üstündesiniz!");
} else if (sonuc >= 30 && sonuc <= 39.9) {
  console.log("İdeal kilonun çok üstündesiniz(obez)!");
} else if (sonuc >= 25 && sonuc <= 29.9) {
  console.log("İdeal kilonun çok üstündesiniz(morbid obez)!");
}
