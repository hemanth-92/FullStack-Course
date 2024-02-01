/* let randomColor = function () {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 5; i++) {
    color += [Math.floor(Math.random() * 16)];
  }
  return color;
};
 */

let randomColor = function rgb() {
  let random1 = Math.floor(Math.random() * 255);
  let random2 = Math.floor(Math.random() * 255);
  let random3 = Math.floor(Math.random() * 255);
  return `rgb(${random1},${random2},${random3})`;
};

let intervalId;
document.querySelector("#start").addEventListener("click", changedColor);

function bgColor() {
  document.body.style.backgroundColor = randomColor();
}

function changedColor() {
  intervalId = setInterval(bgColor, 1000);
}

document.querySelector("#stop").addEventListener("click", () => {
  clearInterval(intervalId);
});
