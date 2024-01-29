const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");
  if (height === "" || height < 0 || isNaN(height)) {
    results.innerHTML = "Please give vaild height";
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    results.innerHTML = "Please give vaild weight";
  } else {
    const bmi = weight / ((height * height) / 10000).toFixed(2);
    results.innerHTML = `<span>${bmi}</span>`;
  }
  const guide = document.querySelector(".guide-result");
  if (bmi < 18.6) {
    guide.innerHTML = `<span>${underweight}</span>`;
  } else if (bmi > 18.6 && bmi < 24.9) {
    guide.innerHTML = `<span>${normal}</span>`;
  } else {
    guide.innerHTML = `<span>${overweight}</span>`;
  }
});
