console.log("This is TodosApp....!");
update();
// Submit button to add Todos
let addTodo = document.getElementById("addTodo");
addTodo.addEventListener("click", addItem);

// Add in localStorage
function addItem(e) {
  let title = document.getElementById("title");
  let description = document.getElementById("description");

  // GET ITEM FROM LOCAL STORAGE
  let getTitle = localStorage.getItem("getTitle");
  let getDesc = localStorage.getItem("getDesc");

  let setTitle;
  let setDesc;

  if (getTitle == null && getDesc == null) {
    setTitle = [];
    setDesc = [];
  } else {
    setTitle = JSON.parse(getTitle);
    setDesc = JSON.parse(getDesc);
  }

  setTitle.push(title.value);
  setDesc.push(description.value);


  localStorage.setItem("getTitle", JSON.stringify(setTitle));
  localStorage.setItem("getDesc", JSON.stringify(setDesc));

  title.value = "";
  description.value = "";

  e.preventDefault();
  update();

}

function update() {
  let getTitle = localStorage.getItem("getTitle");
  let getDesc = localStorage.getItem("getDesc");

  let setTitle;
  let setDesc;

  if (getTitle == null && getDesc == null) {
    setTitle = [];
    setDesc = [];
  } else {
    setTitle = JSON.parse(getTitle);
    setDesc = JSON.parse(getDesc);
  }
  // SET ITEM INTO LOCAL STORAGE
  localStorage.setItem("getTitle", JSON.stringify(setTitle));
  localStorage.setItem("getDesc", JSON.stringify(setDesc));
  let table = document.getElementById("result");
  let html = "";

  for (let i = 0; i < setTitle.length; i++) {
    html += `<tr class ="our">
    <th scope="row">${i + 1}</th>
          <td class = "cardNexts">${setTitle[i]}</td>
          <td>${setDesc[i]}</td>
          <td><button class="btn btn-danger btn-sm" onclick = "deleted(${i})">Delete</button></td>
    </tr>`;
  }
  if (setTitle.length !== 0 && setDesc.length !== 0) {
    table.innerHTML = html;
  }
  else {
    table.innerHTML = `<div class="alert alert-outline-primary text-dark" role="alert" style = "font-size: large">
                                Nothing to show Todos List 
                            </div>`;
  }

}

function deleted(itemIndex) {
  console.log("Delete", itemIndex);

  // GET ITEM FROM LOCAL STORAGE
  let getTitle = localStorage.getItem("getTitle");
  let getDesc = localStorage.getItem("getDesc");

  let setTitle;
  let setDesc;

  if (getTitle == null && getDesc == null) {
    setTitle = [];
    setDesc = [];
  } else {
    setTitle = JSON.parse(getTitle);
    setDesc = JSON.parse(getDesc);
  }

  setTitle.splice(itemIndex, 1);
  setDesc.splice(itemIndex, 1);

  // SET ITEM INTO LOCAL STORAGE
  localStorage.setItem("getTitle", JSON.stringify(setTitle));
  localStorage.setItem("getDesc", JSON.stringify(setDesc));
  update();
}