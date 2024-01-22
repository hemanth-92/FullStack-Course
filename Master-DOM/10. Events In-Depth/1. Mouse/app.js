// https://www.w3schools.com/jsref/obj_mouseevent.asp

// 1. click
let one = document.querySelector(".click");
one.addEventListener("click", () => {
  one.classList.toggle("red");
});

// 2. contextmenu
let two = document.querySelector(".contextmenu");
two.addEventListener("contextmenu", () => {
  two.classList.toggle("blue");
});

// 3. dblclick
let three = document.querySelector(".dblclick");
three.addEventListener("dblclick", () => {
  three.classList.toggle("teal");
});

// 4. mousedown
let four = document.querySelector(".mousedown");
four.addEventListener("mousedown", () => {
  four.classList.toggle("steelblue");
});

// 5. mouseenter
let five = document.querySelector(".mouseenter");
five.addEventListener("mouseenter", () => {
  five.classList.toggle("orange");
});

// 6. mouseleave
let six = document.querySelector(".mouseleave");
six.addEventListener("mouseleave", () => {
  six.classList.toggle("purple");
});

// 7. mousemove
let seven = document.querySelector(".mousemove");
seven.addEventListener("mousemove", () => {
  seven.classList.toggle("pink");
});

// 8. mouseout
let eight = document.querySelector(".mouseout");
eight.addEventListener("mouseout", () => {
  eight, classList.toggle;
});

// 9. mouseover
let nine = document.querySelector(".mouseover");
nine.addEventListener("mouseover", () => {
  nine.classList.toggle("chocolate");
});

// 10. mouseup
let ten = document.querySelector(".mouseup");
ten.addEventListener("mouseup", () => {
  ten.classList.toggle("aqua");
});
