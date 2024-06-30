const userText = document.querySelector("#inputText");
const taskList = document.querySelector(".task_list");

function addTaskBtn() {
  if (userText.value === "") {
    alert("Please enter a Task");
  } else {
    let li = document.createElement("li");
    li.innerHTML = userText.value;
    taskList.appendChild(li);

    let span = document.createElement("span");
    span.innerHTML = `\u00d7`;
    li.appendChild(span);
  }
  userText.value = "";
  storeTask();
}

taskList.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    storeTask();
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    storeTask();
  }
});

const storeTask = () => {
  localStorage.setItem("data", taskList.innerHTML);
};

const restoreTask = () => {
  taskList.innerHTML = localStorage.getItem("data");
  // console.log("restore");
};

restoreTask();
