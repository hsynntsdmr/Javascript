//It lets you loop over iterable data structures such as Arrays, Strings, Maps, NodeLists, and more:

// const cars = ["Tesla", "BMW", "Mercedes","Audi"];

// let x = " ";

// for(let i of cars){
//      x += i + ","
// }
// console.log(x)


let language = "JavaScript";

let text = "";
for (let x of language) {
text += x + "\n" ;
}

console.log(text);