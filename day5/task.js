let b = document.querySelector("#box");
b.classList.add("yellow");
b.classList.remove("red");

function onstyle() {
  b.classList.add("yellow");
}
function offstyle() {
  b.classList.remove("yellow");
}
function onoffstyleYellow() {
  b.classList.toggle("yellow");
}
