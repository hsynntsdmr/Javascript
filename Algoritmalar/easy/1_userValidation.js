export const userValidation = (str) =>{

    if(
        str.length >= 4 && str.length <=25 &&
        (/[a-zA-Z]/).test(str.slice(0,1)) &&
        (/^\w+$/).test(str) &&
        (/[a-zA-Z0-9]/).test(str.slice(-1))
        
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