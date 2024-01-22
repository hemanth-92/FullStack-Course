const firstli = document.querySelector("li");

console.log(firstli.parentElement);
console.log(firstli.parentElement.parentElement);
console.log(firstli.parentElement.parentElement.parentElement);

const ul = document.querySelector("ul");

console.log(ul.children);
console.log(ul.children[0]);
console.log(ul.children[1]);
console.log(ul.children[2].innerText);

console.log(firstli.nextElementSibling.textContent);
console.log(firstli.nextElementSibling.nextElementSibling.textContent);

const fourthli = document.querySelector(".fourth");
console.log(fourthli.previousElementSibling);
console.log(fourthli.previousElementSibling.previousElementSibling.textContent);
