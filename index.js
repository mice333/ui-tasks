const list = document.querySelector(".task-list");

const tasksList = [
  {
    id: 0,
  },
  {
    id: 1,
  },
  {
    id: 2,
  },
  {
    id: 3,
  },
  {
    id: 4,
  },
];

let id = tasksList.length - 1;
for (let i = 0; i < id; i++) {
  list.insertAdjacentHTML(
    "beforeend",
    `<div class="task">${tasksList[i].id} task</div>`
  );
}
let tasks = document.querySelectorAll(".task");

function addTask() {
  tasksList.push({ id: id });
  list.insertAdjacentHTML(
    "beforeend",
    `<div class="task">${tasksList[tasksList.length - 1].id} task</div>`
  );
  id = tasksList.length - 1;
  tasks = document.querySelectorAll(".task");
  tasks.forEach((task) => observer.observe(task));
}
const addButton = document.querySelector(".btn");
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
