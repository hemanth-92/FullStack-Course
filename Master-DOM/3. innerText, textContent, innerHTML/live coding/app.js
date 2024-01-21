// innerText
// textContent
// innerHTML

const p = document.querySelector("p");
console.log(p.innerText); //gives pure text

console.log(p.textContent); //gives content inside the p tag

console.log(p.innerHTML); //gives content inside the p tag along with different tags

const h1 = document.querySelector("h1");
h1.innerText = "text changed";

h1.innerHTML = "<del>hemanth</del>";
