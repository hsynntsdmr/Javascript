const car = {
    brand : "Tesla",
    model: "Model Y",
    color: "White",
    year: 2020
}

// for in ile objectin propertielerini döndürebiliriz.

for(item in car){
    console.log(car[item]);
}

//for in dizilerde de kullanılır

const number = [5,2,3,4,1,6,7,8,9,10]

for( i in number){
    console.log(number[i])
}


// eğer dizilerde ordered bir şekilde döngü yapmak istiyorsak, for veya foreach kullanılır

//The forEach() method calls a function (a callback function) once for each array element.

const numbers = [3, 4, 94, 16, 25];

let txt = "";
numbers.forEach(myFunction);

function myFunction(value) {
  txt += value + ",";
}
console.log(txt)