const element = document.createElement("div");

document.body.append(element);

const ul = document.createElement("ul");

for (let i = 0; i < 3; i++) {
  const li = document.createElement("li");
  li.textContent = (i + 1).toString();
  ul.append(li);
}

element.append(ul);

const mainElement = document.getElementById("main");
mainElement.style.height = "300px";
mainElement.style.backgroundColor = "#27647B";
mainElement.textContent = "You've changed what's on the screen!";
mainElement.style.fontSize = "24px";
mainElement.style.marginLeft = "30px";
mainElement.style.lineHeight = 2;
mainElement.classList.add("pet-listing", "dog");

const secondChild = ul.querySelector("li:nth-child(2)");
ul.removeChild(secondChild);

ul.remove();

const main = document.getElementById("main");
main.innerHTML =
  "<h1 id='victory'>YOUR-NAME is the champion</h1><h3>An Essay into the Pom-Pom as Aesthetic Reconfiguration of the Other from a post-Frankfurt School Appropriationist Perspective</h3><p><em>By: Byron Q. Poodle, Esq., BA.</em></p>";

const newHeader = document.getElementById("victory");

main.remove();

if (typeof exports !== "undefined") {
  module.exports = { newHeader };
}
