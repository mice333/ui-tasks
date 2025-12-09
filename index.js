const list = document.querySelector(".task-list");

const tasksList = [
  {
    id: 1,
    name: "jog",
  },
  {
    id: 2,
    name: "run",
  },
  {
    id: 3,
    name: "jewelry",
  },
];

let id = tasksList.length + 1;

renderTaskList();

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

const search = document.querySelector('[name="search"]');

search.addEventListener("change", () => {
  if (tasksList.length !== 0) {
    console.log("Input value changed:", search.value);
    list.innerHTML = "";
    for (let i = 0; i < tasksList.length; i++) {
      if (tasksList[i].name.includes(search.value))
        list.insertAdjacentHTML(
          "beforeend",
          `<div class="task isVisible">${tasksList[i].id} ${tasksList[i].name}</div>`
        );
    }
  }
  if (search.value === "") {
    console.log(tasksList.length);

    if (tasksList.length !== 0) {
      console.log("Input value changed:", search.value);
      list.innerHTML = "";
      for (let i = 0; i < tasksList.length; i++) {
        if (tasksList[i].name.includes(search.value))
          list.insertAdjacentHTML(
            "beforeend",
            `<div class="task isVisible">${tasksList[i].id} ${tasksList[i].name}</div>`
          );
      }
    }
  }
});

function renderTaskList() {
  if (tasksList.length !== 0) {
    for (let i = 0; i < tasksList.length; i++) {
      list.insertAdjacentHTML(
        "beforeend",
        `<div class="task">${tasksList[i].id} ${tasksList[i].name}</div>`
      );
    }
  }
}
