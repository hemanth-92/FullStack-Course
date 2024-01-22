// ----------- BAD WAY-----------

const secondBtn = document.querySelector(".second-btn");
secondBtn.onclick = function () {
  console.log("hemanth");
};

// ----------- GREAT WAY-----------

const best = document.querySelector(".best");
function greet() {
  console.log("hello world");
}
best.addEventListener("click", greet);

// ----------- Event (e) Object -----------

const para = document.querySelector(".para");
para.addEventListener("click", (event) => console.log(event));

const form = document.querySelector("form");
const input = document.querySelector("input");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log(event);
});
input.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(input.value);
});
