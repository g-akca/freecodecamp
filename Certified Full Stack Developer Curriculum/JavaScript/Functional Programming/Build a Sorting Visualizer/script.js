const generateBtn = document.getElementById("generate-btn");
const startingArray = document.getElementById("starting-array");
const arrayContainer = document.getElementById("array-container");
const sortBtn = document.getElementById("sort-btn");

function generateElement() {
  return Math.floor((Math.random() * 100) + 1);
}

function generateArray() {
  return [generateElement(), generateElement(), generateElement(), generateElement(), generateElement()];
}

function generateContainer() {
  return document.createElement("div");
}

function fillArrContainer(element, arr) {
  arr.forEach(item => {
    element.innerHTML += `<span>${item}</span>`;
  })
}

function isOrdered(firstInt, secondInt) {
  return firstInt <= secondInt;
}

function swapElements(arr, index) {
  if (!isOrdered(arr[index], arr[index + 1])) {
    [arr[index], arr[index + 1]] = [arr[index + 1], arr[index]];
  }
}

function highlightCurrentEls(element, index) {
  const children = element.children;

  children[index].style.border = "2px dashed red";
  children[index + 1].style.border = "2px dashed red";
}

generateBtn.addEventListener("click", () => {
  Array.from(arrayContainer.children).forEach(child => {
    if (child != startingArray) {
      child.remove();
    }
  });

  startingArray.innerHTML = "";
  fillArrContainer(startingArray, generateArray());
  
  sortBtn.classList.remove("hidden");
})

sortBtn.addEventListener("click", () => {
  const arr = Array.from(startingArray.children).map(span => Number(span.textContent));
  highlightCurrentEls(startingArray, 0);
  let workingArr = [...arr];
  let swapped = true;

  while (swapped) {
    swapped = false;

    for (let i = 0; i < workingArr.length - 1; i++) {
      const stepDiv = generateContainer();
      fillArrContainer(stepDiv, workingArr);
      highlightCurrentEls(stepDiv, i);
      arrayContainer.appendChild(stepDiv);

      if (workingArr[i] > workingArr[i + 1]) {
        swapElements(workingArr, i);
        swapped = true;
      }
    }
  }

  arrayContainer.children[1].remove();

  const sortedDiv = generateContainer();
  fillArrContainer(sortedDiv, workingArr);
  sortedDiv.style.border = "4px solid green";
  arrayContainer.appendChild(sortedDiv);

  sortBtn.classList.add("hidden");
});
