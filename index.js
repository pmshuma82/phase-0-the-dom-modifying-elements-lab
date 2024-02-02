const element = document.createElement("div");

document.body.append(element);

const ul = document.createElement("ul");
for (let i = 0; i < 3; i++) {
  const li = document.createElement("li");
  li.textContent = (i + 1).toString();
  ul.append(li);
}
element.append(ul);

const main = document.getElementById("main");
main.innerHTML =
  "<h1>Poodles!</h1><h3>An Essay into the Pom-Pom as Aesthetic Reconfiguration of the Other from a post-Frankfurt School Appropriationist Perspective</h3><p><em>By: Byron Q. Poodle, Esq., BA.</em></p>";

const elementToChange = document.getElementById("main");
elementToChange.style.height = "300px";
elementToChange.style.backgroundColor = "#27647B";
elementToChange.textContent = "You've changed what's on the screen!";
elementToChange.style.fontSize = "24px";
elementToChange.style.marginLeft = "30px";
elementToChange.style.lineHeight = 2;

const ulToRemove = document.querySelector("ul");
const secondChild = ulToRemove.querySelector("li:nth-child(2)");
ulToRemove.removeChild(secondChild);
