// ************ DOM SELECTORS ************
// 1. getElementsByTagName

console.log(document.getElementsByTagName("h1"));
console.log(document.getElementsByTagName("h1").length);

// 2. getElementById

console.log(document.getElementById("main"));

// 3. getElementsByClassName

console.log(document.getElementsByClassName("cls"));
console.log(document.getElementsByClassName("cls-1"));

// 4. querySelector
// it select only one query

console.log(document.querySelector("h1"));
console.log(document.querySelector(".cls")); //  . is used for the class in query selector
console.log(document.querySelector("#main")); //  #(Hash) is used for the id  in query selector
console.log(document.querySelector("#id-1")); //  #(Hash) is used for the id  in query selector
// 5. querySelectorAll

console.log(document.querySelectorAll(".cls")); //it select all  class with cls
console.log(document.querySelectorAll("li")); //it select all  class with cls

// ---------------------------------------
// Storing data in variables

const h1 = document.getElementsByTagName("h1");
console.log(h1);
