export const findIntersection = (arr) =>{
let intersection = []

const set1 = arr[0].replace(/\s/g,"").split(',');
const set2 = arr[1].replace(/\s/g,"").split(',');

set2.forEach(x => {
    if(set1.includes(x)){
        intersection.push(x);
    }
});

if(intersection.length != 0){
    return intersection.toString()
}else{
    return false
}


// yeni bir array tanımla
//replace(), split() kullan
//string.replace(searchValue, newValue)
//string.split(separator, limit)
//foreach(), includes()
//array.includes(element, start)


}