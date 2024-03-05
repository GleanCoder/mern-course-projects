"use strict";

const counterValue = document.getElementById("counterText");
let value = parseInt(counterValue.innerText);

document.querySelector("#increment").addEventListener("click", function () {
  value += 1;
  counterValue.innerText = value;
});

document.querySelector("#decrement").addEventListener("click", function () {
  value -= 1;
  counterValue.innerText = value;
});
