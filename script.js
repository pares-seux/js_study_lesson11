const btn = document.querySelector("#btn");
const input = document.querySelector("input[type=text]");
const square = document.querySelector("#square");
const insideButton = document.querySelector("#e_btn");
const range = document.querySelector("#range");
const rangeSpan = document.querySelector("#range-span");
const circle = document.querySelector("#circle");

const radiusCircle = function(event) {
  rangeSpan.textContent = event.target.value + "%";
  circle.style = "width: " + event.target.value + "%; height: " + event.target.value + "%;"
  
};

btn.addEventListener("click", function () {
  if (isNaN(input.value.trim())) {
    square.style.backgroundColor = input.value;
    input.value = "";
  }
});

insideButton.addEventListener("click", function () {
  insideButton.style.display = "none";
});

range.addEventListener("input", radiusCircle);


rangeSpan.textContent = range.value + "%";
circle.style = "width: " + range.value + "%; height: " + range.value + "%;"