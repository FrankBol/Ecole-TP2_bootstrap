let vitesseRange = document.getElementById("vitesseRange");
let magieRange = document.getElementById("magieRange");
let forceRange = document.getElementById("forceRange");
let pouvoirRange = document.getElementById("pouvoirRange");

let vitesseValue = document.getElementById("vitesseValue");
let magieValue = document.getElementById("magieValue");
let forceValue = document.getElementById("forceValue");
let pouvoirValue = document.getElementById("pouvoirValue");

vitesseValue.textContent = vitesseRange.value;
magieValue.textContent = magieRange.value;
forceValue.textContent = forceRange.value;
pouvoirValue.textContent = pouvoirRange.value;

vitesseRange.addEventListener("mousemove", () => vitesseValue.textContent = vitesseRange.value);
magieRange.addEventListener("mousemove", () => magieValue.textContent = magieRange.value);
forceRange.addEventListener("mousemove", () => forceValue.textContent = forceRange.value);
pouvoirRange.addEventListener("mousemove", () => pouvoirValue.textContent = pouvoirRange.value);