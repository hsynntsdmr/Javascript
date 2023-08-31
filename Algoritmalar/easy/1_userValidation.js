export const userValidation = (str) =>{

    if(
        str.length >= 4 && str.length <=25 && // 4 ile 25 arasında mı
        (/[a-zA-Z]/).test(str.slice(0,1)) && // harf ile başlıyor mu
        (/^\w+$/).test(str) && //sayı, harf, underscore var mı
        (/[a-zA-Z0-9]/).test(str.slice(-1)) //sonu _ ile bitiyor mu
        
    ){
        return true
    }else{

        return false
    }

}




// AND operator
// .length property


//Reg exp
// .slice() or .charAt()
//.test()