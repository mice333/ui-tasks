const list = document.querySelector(".task-list");

const tasksList = [];

let id = 1;
if (tasksList.length !== 0) {
  for (let i = 0; i <= id; i++) {
    list.insertAdjacentHTML(
      "beforeend",
      `<div class="task">${tasksList[i].id} ${tasksList[i].name}</div>`
    );
  }
}

let tasks = document.querySelectorAll(".task");

function addTask() {
  const newTask = document.querySelector('[name="taskname"]');
  tasksList.push({ id: id, name: newTask.value });
  list.insertAdjacentHTML(
    "beforeend",
    `<div class="task">${tasksList[tasksList.length - 1].id} ${
      tasksList[tasksList.length - 1].name
    }</div>`
  );
  id++;
  tasks = document.querySelectorAll(".task");
  tasks.forEach((task) => observer.observe(task));
}
const addButton = document.querySelector(".modal>div>.btn.add");
addButton.addEventListener("click", addTask);

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("isVisible");
    } else {
      entry.target.classList.remove("isVisible");
    }
  });
}, {});

tasks.forEach((task) => observer.observe(task));

const closeBtn = document.querySelector(".btn.close");

closeBtn.addEventListener("click", () => {
  const modal = document.querySelector(".modal_overlay");
  modal.classList.remove("active");
});

const openModal = document.querySelector(".task-options>.btn");
openModal.addEventListener("click", () => {
  const modal = document.querySelector(".modal_overlay");
  modal.classList.add("active");
});
