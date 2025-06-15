const add = document.getElementById("add-btn");
const input = document.getElementById("input");
const ul = document.getElementById("ullist");
let currentli = null;
add.addEventListener("click", () => {
  const inputval = input.value;
  if (!inputval) {
    alert("Enter a item");
  } else {
    if (add.innerText === "Add") {
      addlist(inputval);
      input.value = "";
    } else {
      add.style.backgroundColor = "rgb(43, 39, 165)";
      add.innerHTML = "Add";
      // updating the editted value 
      currentli.textContent = input.value;
      input.value = "";
    }
  }
});

// For Keyboard event use mouse or ender key to submit
input.addEventListener("keypress", (k) => {
  if (k.key === "Enter") {
    if (!input.value) {
      alert("Enter a item");
    } else {
      if (add.innerText === "Add") {
        addlist(input.value);
        input.value = "";
      } else {
        add.style.backgroundColor = "rgb(43, 39, 165)";
        add.innerHTML = "Add";
        currentli.textContent = input.value;
        input.value = "";
      }
    }
  }
});

const addlist = (val) => {
  // For items

  const div = document.createElement("div");
  ul.appendChild(div);
  div.id = "lidiv";
  const li = document.createElement("li");
  li.textContent = val;
  div.appendChild(li);

  //Edit button created
  const ebtn = document.createElement("button");
  ebtn.id = "edit";
  ebtn.textContent = "Edit";
  div.appendChild(ebtn);

  //Delete button created
  const dbtn = document.createElement("button");
  dbtn.id = "delete";
  dbtn.textContent = "Delete";
  div.appendChild(dbtn);

  // Edit items function
  ebtn.addEventListener("click", (v) => {
    input.focus();
    input.value = li.textContent;
    add.innerText = "Edit";
    currentli = li;
    add.style.backgroundColor = "green";
  });

  // Delete items function
  dbtn.addEventListener("click", () => {
    ul.removeChild(div);
  });
};
