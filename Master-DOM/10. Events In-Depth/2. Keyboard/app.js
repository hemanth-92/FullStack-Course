// https://www.w3schools.com/jsref/obj_keyboardevent.asp

const input = document.querySelector("input");
input.addEventListener("keypress", () => {
  console.log("key pressed");
});

input.addEventListener("keyup", () => {
  console.log("keyup");
});

input.addEventListener("keydown", () => {
  console.log("keydown");
});

// KeyboardEvent Properties

input.addEventListener("keypress", (e) => {
  console.log(e.charCode);
});

input.addEventListener("keypress", (e) => {
  console.log(e.code);
});

input.addEventListener("keypress", (e) => {
  console.log(e.key);
});

input.addEventListener("keypress", (e) => {
  console.log(e.shiftKey);
});
