const input = document.querySelector(".input");
const button = document.querySelector(".btn");
const list = document.querySelector(".list");
const alert = document.querySelector(".alert-container");

let itemsList = [];

function newItem() {
  itemsList.push(input.value);

  input.value = "";

  showItem();
}

function showItem() {
  let newLi = "";

  itemsList.forEach((item, index) => {
    newLi =
      newLi +
      `
    <li class="list-item">
     <div class="custom-checkbox">
        <input type="checkbox" name="chk" id="chk-${index}">
        <label for="chk-${index}">${item}</label>
        <img id="delete" src="images/delete.svg" onclick="deleteItem(${index})">
    </div>
  </li>
  `;
  });

  list.innerHTML = newLi;

  localStorage.setItem("lista", JSON.stringify(itemsList));
}

function deleteItem(index) {
  itemsList.splice(index, 1);

  alert.style.opacity = "1";

  showItem();
}

function reloadPage() {
  const localStorageList = localStorage.getItem("lista");

  if (localStorageList) {
    itemsList = JSON.parse(localStorageList);
  }
  showItem();
}

function opacity() {
  alert.style.opacity = "0";
}

reloadPage();
button.addEventListener("click", newItem);
