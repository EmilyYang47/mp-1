let numOne = document.getElementById("one");
let numTwo = document.getElementById("two");
let result = document.getElementById("output");

function doAdd() {
  // add the two inputs
  value = Number(numOne.value) + Number(numTwo.value);

  if (value < 0) {
    result.innerHTML = `<h4 id="negative">${String(value)}</h4>`;
  } else {
    result.innerHTML = `<h4>${String(value)}</h4>`;
  }
}

function doSubtract() {
  // subtract the two inputs
  value = Number(numOne.value) - Number(numTwo.value);

  if (value < 0) {
    result.innerHTML = `<h4 id="negative">${String(value)}</h4>`;
  } else {
    result.innerHTML = `<h4>${String(value)}</h4>`;
  }
}

function doMultiply() {
  // multiply the two inputs
  value = Number(numOne.value) * Number(numTwo.value);

  if (value < 0) {
    result.innerHTML = `<h4 id="negative">${String(value)}</h4>`;
  } else {
    result.innerHTML = `<h4>${String(value)}</h4>`;
  }
}

function doDivide() {
  // devide the first input by the second input
  value = Number(numOne.value) / Number(numTwo.value);

  if (value < 0) {
    result.innerHTML = `<h4 id="negative">${String(value)}</h4>`;
  } else {
    result.innerHTML = `<h4>${String(value)}</h4>`;
  }
}

function doPower() {
  // raise the value of the first input to the value of the second input
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
  // clear the result and the two inputs
  numOne.value = "";
  numTwo.value = "";
  result.innerHTML = `${String()}`;
}
