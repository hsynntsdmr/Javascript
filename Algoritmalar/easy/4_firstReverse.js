export const firstReverse = (string) =>{
 
const strArr = string.split("")
const reversedArr = strArr.reverse()
const newString = reversedArr.join("")

return string.split("").reverse().join("");
}


//string'i array haline getirmek için : .split()
//string'i  ters çevirmek için: .reverse()
//array'i string e çevirmek için: .join()