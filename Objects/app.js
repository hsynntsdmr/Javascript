// boş bir nesne
const person = {}

// person1 nesnesinde firstName, lastName, age, location and skills propertieleri olsun.
// nesne nin değeri farklı değerler olabilir. Örnek olarak; string, int, boolean, array, function, object...

const person1 = {
firstName: 'Hüseyin',
lastName: 'Taşdemir',
age: 25,
location: 'İzmir,Türkiye',
skills: ['C#', 'Javascript', 'MsSQL'],
personinside :{
    fname: 'Ali',
    lName: ' Cabbar',
    age: 35
},
fullName: function(){
return this.firstName + " " + this.lastName;
}
}

//Yukarıdaki örnekte , this keywordü person1 e referans olarak geliyor


//Objelerin özelliklerine erişmenin iki yolu vardır:
// 1- objectName.propertyName
// 2- objectName["propertyName"]

console.log(person1.firstName);
console.log(person1['age']);

//Objelerin methodlarına erişmek için
//objectName.methodName()

console.log(person1.fullName())
console.log(person1.personinside.fname) // obje içinde obje tanımlayıp eriştim