const button = document.getElementById("todoAddButton");
//iki farklı şekilde button un değerlerine erişebiliriz
// console.log(button.id);

// console.log(button.getAttribute("id"));

// console.log(button.classList[0]);

let buttonText = button.textContent;

// console.log(buttonText);

//innerHTML özelliği html etiketlerinide dahil eder.

// console.log(button.innerHTML)

//document.getElementsByClassName ile elementi class ına göre alabiliriz
const todoList = document.getElementsByClassName("list-group-item");

// console.log(todoList)

//document.getElementsByTagName ile de elementi tag ismine göre alabiliriz. <h1>, <p>, <span>

 const forms = document.getElementsByTagName("form");
// console.log(forms[1].name);

//Array ile üzerinde döngü gerçekleştirmek

const formArr = Array.from(document.getElementsByTagName("form"));

 formArr.forEach(function(item){
     console.log(item);
 })
   
//querySelector - querySelectorAll: Cssteki gibi id, class, element seçimi yapabilirsiniz.

 const clearButton = document.querySelector("#clearButton").textContent;
 const fillButton = document.querySelector(".btn").textContent;
 const secondButton = document.querySelector("h5").textContent;

// console.log(clearButton);

//querySelectorAll

let fillButtonAll = document.querySelectorAll(".list-group-item")[2].textContent;

// console.log(fillButtonAll);

//Style özelliği

let todo = document.querySelectorAll(".list-group-item")[0];
todo.style.color="red";
todo.style.backgroundColor="black";





