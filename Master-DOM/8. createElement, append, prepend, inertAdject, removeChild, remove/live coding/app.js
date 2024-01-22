// ------------------------------------
// createElement()

const h1 = document.createElement("h1");
h1.textContent = "hello world";
h1.classList = "greetings";

// appendChild()

const body = document.body;
body.appendChild(h1);
// append()

const section = document.querySelector("section");
const i = document.createElement("i");
i.innerText = "I am learning java script";
i.style.color = "teal";

const h4 = document.createElement("h4");
h4.innerText = "hemanth";
h4.style.color = "crimson";

section.append(i, h4);
section.prepend(i, h4);

// prepend()
// selector.insertBefore(what,where)

const ul = document.querySelector("ul");
const newLi = document.createElement("li");
newLi.innerText = " li tag";
ul.appendChild(newLi);

const firstLi = document.querySelector("li");
ul.insertBefore(newLi, firstLi);

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
ip.style.color = "skyblue";
firstP.insertAdjacentElement("beforebegin", ip);
firstP.insertAdjacentElement("beforeend", ip);
firstP.insertAdjacentElement("afterbegin", ip);
firstP.insertAdjacentElement("afterend", ip);

// removeChild()

const newList = document.querySelector(".new-list");
const fourth = document.querySelector(".fourth");
newList.removeChild(fourth);

// remove()

newList.remove();

// ------------------------------------
