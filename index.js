// Task 1: Remove the 'main#main' node
const mainNode = document.querySelector('main#main');
if (mainNode) {
  mainNode.remove();
}

// Task 2: Create a new h1 element and assign it to the 'newHeader' variable
const newHeader = document.createElement('h1');

// Task 3: Set the id attribute of the 'newHeader' element to 'victory'
newHeader.setAttribute('id', 'victory');

// Task 4: Set the text content of the 'newHeader' element to "YOUR-NAME is the champion"
newHeader.textContent = "YOUR-NAME is the champion";

// Task 5: Append the 'newHeader' element to the body
document.body.appendChild(newHeader);
