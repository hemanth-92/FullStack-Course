// href

const a = document.querySelector("a");
const input = document.querySelector("input");
console.log(a.href);

// value

console.log(input.value); // empty bcz no value and after entering value we get it

// type

console.log(input.type);

console.log((a.href = "https://www.instagram.com/"));

console.log((input.type = "password"));
console.log((input.placeholder = " set strong password "));
// getAttribute(attrName)
console.log(input.getAttribute("type"));
console.log(input.getAttribute("placeholder")); //get the attribute

// setAttribute(attrName, value)

console.log(input.setAttribute("placeholder", "password"));
console.log(input.setAttribute("type", "password"));
