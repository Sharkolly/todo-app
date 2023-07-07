const myInput = document.querySelector("input");
const submitBtn = document.querySelector(".submit");
const newTodoList = document.querySelector(".todo-list");
const redParagraph = document.querySelector(".red");
const clearBtn = document.querySelector(".ssubmit");
const myNewArray = [];

submitBtn.addEventListener("click", function (e) {
    e.preventDefault();
  const time = document.querySelector("#time");
  const newTime = document.createElement("p");
  const slicdeVal = time.value.slice(0, 2);
  newTime.textContent = slicdeVal >= 12 ? `${time.value}pm` : `${time.value}am`;
  const datePicker = document.querySelector(".datePicker");
  const newParagraph = document.createElement("p");
  newParagraph.textContent = datePicker.value;
  const todo = document.createElement("div");
  todo.classList.add("todo");
  const createTodoDiv = document.createElement("p");
  const removeBtn = document.createElement("button");
  removeBtn.classList.add("removeBtn");
  removeBtn.textContent = "Delete";
  const upperCase =
    myInput.value.charAt(0).toUpperCase() + myInput.value.slice(1);
  createTodoDiv.textContent = upperCase;
  if (myInput.value == "" || datePicker.value == "" || time.value == "") {
    redParagraph.style.display = "block";
    clearBtn.style.display = "block";
    setTimeout(() => {
      redParagraph.style.display = "none";
      clearBtn.style.display = "none";
    }, 2000);

    clearBtn.addEventListener("click", function () {
      redParagraph.style.display = "none";
      clearBtn.style.display = "none";
    });
  } else {
    myInput.value = "";
    datePicker.value = "";
    time.value = "";
    todo.appendChild(createTodoDiv);
    todo.appendChild(newParagraph);
    todo.appendChild(newTime);
    todo.appendChild(removeBtn);
    newTodoList.appendChild(todo);
    const arr = {
      date: newParagraph.textContent,
      time: newTime.textContent,
      todo: createTodoDiv.textContent,
    };
    myNewArray.push(arr);
    localStorage.setItem("myTodoList", JSON.stringify(myNewArray));
    clearBtn.style.display = "none";
    redParagraph.style.display = "none";
  }
  removeBtn.addEventListener("click", function (e) {
    todo.remove();
  });
});

// const joinArr = ["hey", "you", "are", "a", "Bitch"];
// const join = ["hey", "you", "are", "a", "cow"];

//  const see = [...new Set([...joinArr, ...join])];
//  console.log(see)
