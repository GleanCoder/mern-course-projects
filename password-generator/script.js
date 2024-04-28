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

// initially

let password = "";
let checkCount = 0;
let passwordLength = 10;
handleSlider();

// handle slider

function handleSlider() {
  inputSlider.value = passwordLength;
  LengthCounter.innerText = passwordLength;
}

function setIndicator(color) {
  indicator.style.backgroundColor = color;
}

// Generate Random Integer

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function generateUpperCase() {
  return String.fromCharCode(getRandomInt(65, 91));
}

function generateLowerCase() {
  return String.fromCharCode(getRandomInt(97, 123));
}

function generateNumber() {
  return getRandomInt(0, 9);
}

function generateSymbol() {
  let randNum = getRandomInt(0, symbols.length);
  return symbols.charAt(randNum);
}

// Calculate the strength

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

// Copy the Content
async function copyContent() {
  try {
    await navigator.clipboard.writeText(passwordDisplayer.value);
    copyMsg.innerText = "copied";
  } catch (e) {
    copyMsg.innerText = "Failed";
    console.log("Opps!failed.." + e);
  }
  //to make copy wala span visible
  copyMsg.classList.add("active");

  setTimeout(() => {
    copyMsg.classList.remove("active");
  }, 2000);
}

function handleCheckBox() {
  checkCount = 0;
  allCheckBox.forEach((checkbox) => {
    if (checkbox.checked) checkCount++;
  });
  if (passwordLength < checkCount) {
    passwordLength = checkCount;
    handleSlider();
  }
}

function shufflePassword(array) {
  //Fisher Yates Method
  for (let i = array.length - 1; i > 0; i--) {
    //random J, find out using random function
    const j = Math.floor(Math.random() * (i + 1));
    //swap number at i index and j index
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  let str = "";
  array.forEach((el) => (str += el));
  return str;
}

inputSlider.addEventListener("input", (e) => {
  passwordLength = e.target.value;
  handleSlider();
});

allCheckBox.forEach((checkbox) => {
  checkbox.addEventListener("change", handleCheckBox);
});

copyBtn.addEventListener("click", () => {
  if (passwordDisplayer.value) copyContent();
});

generateButton.addEventListener("click", () => {
  if (checkCount == 0) return;

  if (passwordLength < checkCount) {
    passwordLength = checkCount;
    handleSlider();
  }

  // let's start the jouney to find new password
  console.log("Starting the Journey");

  password = "";

  let funcArr = [];
  if (upperCheck.checked) funcArr.push(generateUpperCase);
  if (lowerCheck.checked) funcArr.push(generateLowerCase);
  if (numberCheck.checked) funcArr.push(generateNumber);
  if (symbolCheck.checked) funcArr.push(generateSymbol);

  //   Compolsory addition
  for (let i = 0; i < funcArr.length; i++) {
    password += funcArr[i]();
  }
  console.log("COmpulsory adddition done");
  //   remaining addition
  for (let i = 0; i < passwordLength - funcArr.length; i++) {
    let randIndex = getRandomInt(0, funcArr.length);
    password += funcArr[randIndex]();
  }
  console.log("Remaining adddition done");
  password = shufflePassword(Array.from(password));
  console.log("Shuffling done");
  passwordDisplayer.value = password;
  console.log("UI adddition done");
  calcStrength();
});
