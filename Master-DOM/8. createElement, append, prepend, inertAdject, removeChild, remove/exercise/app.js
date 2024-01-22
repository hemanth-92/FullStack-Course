// createElement()

const h1 = document.createElement("h1");
const body = document.body;
body.appendChild(h1);

h1.innerText = "create h1 element ";
h1.style.color = "red";

// append()

const a = document.createElement("a");
body.appendChild(a);
a.innerText = "https://twitter.com/?";
a.style.color = "orange";

const h4 = document.createElement("h4");
h4.innerText = "twitter link";
h4.style.color = "crimson";

a.append(h4);
a.prepend(h4);
// prepend()

/* insertAdjacentElement(
    'beforebegin'
    'afterend'
    'beforeend'
    'afterend',
    element
) */

const firstP = document.querySelector("p");
const ip = document.createElement("ip");
ip.innerText = "I am learning  DOM";
ip.style.color = "red";
firstP.insertAdjacentElement("beforebegin", ip);
firstP.insertAdjacentElement("beforeend", ip);
firstP.insertAdjacentElement("afterbegin", ip);
firstP.insertAdjacentElement("afterend", ip);

// removeChild()

const ul = document.querySelector("ul");
const second = document.querySelector(".second");
ul.removeChild(second);

// remove()

ul.remove();
