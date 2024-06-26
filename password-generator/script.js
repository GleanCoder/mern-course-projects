"use strict";
const passwordDisplayer = document.querySelector("[dataPasswordDisplayer]");
const copyBtn = document.querySelector(".copy-btn");
const copyMsg = document.querySelector(".copy-msg");
const LengthCounter = document.querySelector("[password-length-counter]");
const inputSlider = document.querySelector("#input-slider");
const upperCheck = document.querySelector("#uppercase");
const lowerCheck = document.querySelector("#lowercase");
const numberCheck = document.querySelector("#number");
const symbolCheck = document.querySelector("#symbol");
const allCheckBox = document.querySelectorAll("input[type=checkbox]");
const indicator = document.querySelector("[data-indicator]");

const symbols = '~`!@#$%^&*()_-+={[}]|:;"<,>.?/';
const generateButton = document.querySelector("[password-generator]");

//initially
let password = "";
let checkCount = 0;
let passwordLength = 10;
handleSlider();
setIndicator("#ccc");
// handle slider
function handleSlider() {
  inputSlider.value = passwordLength;
  LengthCounter.innerText = passwordLength;
  const min = inputSlider.min;
  const max = inputSlider.max;
  inputSlider.style.backgroundSize =
    ((passwordLength - min) * 100) / (max - min) + "% 100%";
}

function setIndicator(color) {
  indicator.style.backgroundColor = color;
  indicator.style.boxShadow = `0px 0px 12px 1px ${color}`;
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function generateNumber() {
  return getRandomInt(0, 9);
}

function generateUppercase() {
  return String.fromCharCode(getRandomInt(65, 91));
}
function generateLowercase() {
  return String.fromCharCode(getRandomInt(97, 123));
}

function generateSymbol() {
  let randIndex = getRandomInt(0, symbols.length);
  return symbols.charAt(randIndex);
}

function shufflePassword(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  let str = "";
  array.forEach((el) => (str += el));
  return str;
}

function calcStrength() {
  let hasUpper = false;
  let hasLower = false;
  let hasNumber = false;
  let hasSymbol = false;
  if (upperCheck.checked) hasUpper = true;
  if (lowerCheck.checked) hasLower = true;
  if (numberCheck.checked) hasNumber = true;
  if (symbolCheck.checked) hasSymbol = true;

  if (hasUpper && hasLower && (hasNumber || hasSymbol) && passwordLength >= 8) {
    setIndicator("#0f0");
  } else if (
    (hasUpper || hasLower) &&
    (hasNumber || hasSymbol) &&
    passwordLength >= 6
  ) {
    setIndicator("#ff0");
  } else {
    setIndicator("#f00");
  }
}

async function copyContent() {
  try {
    await navigator.clipboard.writeText(passwordDisplayer.value);
    copyMsg.innerText = "copied";
  } catch (e) {
    copyMsg.innerText = "failed";
  }

  copyMsg.classList.add("active");

  setTimeout(() => {
    copyMsg.classList.remove("active");
  }, 2000);
}

copyBtn.addEventListener("click", () => {
  if (passwordDisplayer.value) copyContent();
});

function handleCheckBox() {
  checkCount = 0;
  allCheckBox.forEach((checkbox) => {
    if (checkbox.checked) checkCount++;
  });

  if (passwordLength < checkCount) {
    passwordLength = checkCount;
    handleSlider();
  }
  handleSlider();
}

allCheckBox.forEach((checkbox) => {
  checkbox.addEventListener("change", handleCheckBox);
});

inputSlider.addEventListener("input", (e) => {
  passwordLength = e.target.value;
  handleSlider();
});

generateButton.addEventListener("click", () => {
  if (checkCount == 0) return;

  if (passwordLength < checkCount) {
    passwordLength = checkCount;
    handleSlider();
  }
  console.log("Starting the Journey");
  password = "";

  let funcArr = [];
  if (upperCheck.checked) funcArr.push(generateUppercase);
  if (lowerCheck.checked) funcArr.push(generateLowercase);
  if (numberCheck.checked) funcArr.push(generateNumber);
  if (symbolCheck.checked) funcArr.push(generateSymbol);
  for (let i = 0; i < funcArr.length; i++) {
    password += funcArr[i]();
  }

  for (let i = 0; i < passwordLength - funcArr.length; i++) {
    let randIndex = getRandomInt(0, funcArr.length);
    password += funcArr[randIndex]();
  }

  password = shufflePassword(Array.from(password));

  passwordDisplayer.value = password;

  calcStrength();
});
