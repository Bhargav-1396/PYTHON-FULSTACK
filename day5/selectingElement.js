let di = document.getElementById("name");
di.style.color = "hotpink";
di.style.backgroundcolor = "yellow";

let de = document.getElementsByClassName("child");
for (let i = 0; i < de.length; i++) {
  de[i].style.backgroundcolor = "blue";
}
