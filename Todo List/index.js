let arr = [];
function myFunction() {
  const inputData = document.getElementById("input").value;

  let obj = {
    inputData,
  };
  arr.push(obj);
  renderElements();
  console.log(inputData);
  console.log(arr);
}
function deleteFunction(i) {
  arr.splice(i, 1);
  renderElements();
}
function renderElements() {
  document.getElementById("task-list").innerHTML = null;
  let div = document.getElementById("task-list");

  for (let i = 0; i < arr.length; i++) {
    let ele = arr[i];
    const divEle = document.createElement("div");
    divEle.classList.add("task-element");

    const infoDiv = document.createElement("div");
    infoDiv.classList.add("info-section");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("checkbox");
    infoDiv.appendChild(checkbox);

    const span = document.createElement("p");
    span.textContent = ele.inputData;
    span.classList.add("task-text");
    infoDiv.appendChild(span);
    divEle.appendChild(infoDiv);

    const deleteBtn = document.createElement("p");
    deleteBtn.textContent = "✕";
    deleteBtn.classList.add("delete-btn");
    divEle.appendChild(deleteBtn);

    deleteBtn.addEventListener("click", () => deleteFunction(i));
    div.appendChild(divEle);
  }
}
