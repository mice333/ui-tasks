const list = document.querySelector(".task-list");
const tasks = document.querySelectorAll(".task");
let id = 0;
function addTask() {
  list.insertAdjacentHTML("beforeend", `<div class="task">${id++} task</div>`);
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
