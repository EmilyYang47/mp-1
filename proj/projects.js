let numOne = document.getElementById("one");
let numTwo = document.getElementById("two");
let result = document.getElementById("output");

function doAdd() {
  value = Number(numOne.value) + Number(numTwo.value);

  if (value < 0) {
    result.innerHTML = `<h4 id="negative">${String(value)}</h4>`;
  } else {
    result.innerHTML = `<h4>${String(value)}</h4>`;
  }
}

function doSubtract() {
  value = Number(numOne.value) - Number(numTwo.value);

  if (value < 0) {
    result.innerHTML = `<h4 id="negative">${String(value)}</h4>`;
  } else {
    result.innerHTML = `<h4>${String(value)}</h4>`;
  }
}

function doMultiply() {
  value = Number(numOne.value) * Number(numTwo.value);

  if (value < 0) {
    result.innerHTML = `<h4 id="negative">${String(value)}</h4>`;
  } else {
    result.innerHTML = `<h4>${String(value)}</h4>`;
  }
}

function doDivide() {
  value = Number(numOne.value) / Number(numTwo.value);

  if (value < 0) {
    result.innerHTML = `<h4 id="negative">${String(value)}</h4>`;
  } else {
    result.innerHTML = `<h4>${String(value)}</h4>`;
  }
}

function doPower() {
  let value = 1;

  for (let i = 0; i < Number(numTwo.value); i++) {
    value = Number(numOne.value) * value;
  }

  if (value < 0) {
    result.innerHTML = `<h4 id="negative">${String(value)}</h4>`;
  } else {
    result.innerHTML = `<h4>${String(value)}</h4>`;
  }
}

function doClear() {
  numOne.value = "";
  numTwo.value = "";
  result.innerHTML = `${String()}`;
}
