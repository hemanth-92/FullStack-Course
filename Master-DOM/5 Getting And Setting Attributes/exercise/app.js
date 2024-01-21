// 1. Select the anchor tag
const a = document.querySelector("a");
console.log(a);
// 2. Use getAttribute(attrName) to check the attribute.

const href = document.querySelector("href");

// 3. Select a-two & set "href" attribute
// setAttribute(attrName, value)

const a2 = document.querySelector("a-two");
a2.href("href", "https://www.instagram.com/");
console.log(a2);
