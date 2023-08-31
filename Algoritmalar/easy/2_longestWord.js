export const longestWord = (sen) =>{

const arr = sen.replace(/[^a-zA-Z ]/g, "").split(" ");  //sen içerisinde replace ile noktalama işaretlerini boşluk ile değiştir, alınan değeri split ile boşluktan böl

arr.sort((a, b)=>{return b.length - a.length })     

return arr[0];


    //Noktalama işaretlerini kaldır.
    //Cümleyi boşluk kısımlarından böl ve ortaya çıkan kelimelerle bir array oluştur
    //Oluşturduğun array'i, kelimelerin karakter sayısına göre azalan bir şekilde sırala
    //0.indeksteki kelimeyi return et

}