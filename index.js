const button = document.querySelector("button");
const body = document.querySelector("body");
const colors = ["red", "yellow", "green", "blue", "pink", "purple", "gray"];

body.style.backgroundColor = "lightgray";
button.addEventListener("click", changeBackground);

function changeBackground() {
  const colorIndex = parseInt(Math.random() * colors.length);
  body.style.backgroundColor = colors[colorIndex];
}
