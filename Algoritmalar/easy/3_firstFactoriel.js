export const firstFactoriel = (num) =>{

let factoriel = 1;

for(let i = 2; i <= num; i++){

    factoriel = factoriel * i;

}

return factoriel

}