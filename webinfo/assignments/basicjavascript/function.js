// Counter code, set and get
function getCounter() {
  const counter = document.getElementById("counter");
  return Number(counter.textContent) || 0;
}

function setCounter(value) {
  document.getElementById("counter").textContent = String(value);
}

// tickUp and tickDown code
function tickUp() {
  setCounter(getCounter() + 1);
}

function tickDown() {
  setCounter(getCounter() - 1);
}

// For loop based on counter content
function runForLoop() {
  const val = getCounter();
  const output = [];

  // Here I use two for loop options, for if our counter is a negative number. I think this is whats desired?
  if (val >= 0) {
    for (let i = 0; i <= val; i++) { 
      output.push(i) ;
    }
  } else {
    for (let i = 0; i >= val; i--) { 
      output.push(i);
    }
  }

  // Output results with styling
  document.getElementById("forLoopResult").textContent = output.join(", ");
}

// Odd numbers implementation
function showOddNumbers() {
  const val = getCounter();
  const output = [];

  // Slight base case adjustment
  if (val >= 1) {
    for (let i = 1; i <= val; i++) {
      // Check if odd number with mod
      if (i % 2 !== 0) output.push(i);
    }
  }

  // Same output as above
  document.getElementById("oddNumberResult").textContent = output.join(", ");
}

// Array implementation
function addMultiplesToArray() {
  const val = getCounter();
  const output = [];

  // Base case: empty unless 5 or greater
  if (val >= 5) {
    // We work this one backwards for "reverse" order
    for (let i = val; i >= 5; i--) {
      if (i % 5 === 0) output.push(i);
    }
  }

  // Print the array at the end
  console.log(output);
}

// Output formatting for car data
function printCarObject() {
  const carType = document.getElementById("carType").value;
  const carMPG = document.getElementById("carMPG").value;
  const carColor = document.getElementById("carColor").value;

  const car = { carType, carMPG, carColor };
  console.log(car);
}

// Load function for car object
function loadCar(num) {
  let src = null;

  // Our car objects are located in the footer already? so we can just reference those here
  if (num === 1) src = carObject1;
  else if (num === 2) src = carObject2;
  else if (num === 3) src = carObject3;

  // If still null we can end early
  if (!src) return;

  // Here we load the elements of the selected car, if present
  document.getElementById("carType").value = src.cType;
  document.getElementById("carMPG").value = src.cMPG;
  document.getElementById("carColor").value = src.cColor;
}

// Style implementation
function changeColor(num) {
  // Here is the id specified in the html, so we fetch this
  const p = document.getElementById("styleParagraph");

  // If not found, end early
  if (!p) return;

  // Similar structure as above but just directly change styling of p element
  if (num === 1) p.style.color = "red";
  if (num === 2) p.style.color = "green";
  if (num === 3) p.style.color = "blue";
}

