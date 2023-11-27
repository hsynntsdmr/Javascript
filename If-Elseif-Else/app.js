let ad = prompt("Adınızı giriniz:");

let tckNo = prompt("TC kimliğinizi giriniz:");

function kontrol(ad, tckNo) {
    if (ad != "") {
        if (tckNo.length == 11) {
            console.log("Başarıyla giriş yaptınız :))")
        } else {
            console.log("TC Kimlik numaranızı eksik girdiniz!")
        }
    } else {
        console.log("Adınızı eksik girdiniz!!   ")
    }

}

kontrol2(ad, tckNo)

function kontrol2(ad, tckNo) {
    if (ad == "") {
        console.log("Adınızı eksik girdiniz!")
    return;
    }
    if (tckNo.length != 11) {
        console.log("Kimlik numaranızı eksik girdiniz")
    return;
    }


}