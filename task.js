let a = 10;
let b = 5;
let difference = a - b;
console.log(sum);
console.log(difference);



// ===== Урок: операторы и условия =====

let tilt = "";

if (tilt === "") {
  console.log("Название задачи не указано");
} else {
  console.log("Задача:", title);
}



// ===== ДЗ 9 =====
let amount = 0;
if (amount === 0) {
  console.log("Корзина пуста.");
} else if (1 <= amount <= 1000) {
  console.log("Скидка 5%.");
} else if (1000 <= amount <= 5000) {
  console.log("Скидка 10%.");
}



// ===== Урок: 20 =====
function sum(a, b) {
  return a + b;
}

console.log(sum(3, 4));  // 7
console.log(sum(10, 5)); // 15


function max(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}

console.log(max(8, 3));  // 8
console.log(max(2, 10)); // 10


function printTask(title, status) {
  return "Задача: " + title + " | Статус: " + status;
}

console.log(printTask("Купить молоко", "активна"));
console.log(printTask("Сходить в спортзал", "выполнена"));


function isTaskDone(status) {
  return status === "выполнена";
}

console.log(isTaskDone("выполнена")); // true
console.log(isTaskDone("активна"));   // false


function greetUser(name) {
  return "Добро пожаловать, " + name + "!";
}

console.log(greetUser("Катя"));
console.log(greetUser("Иван"));


function taskSummary(total, done) {
  let active = total - done;
  return "Всего: " + total + " | Выполнено: " + done + " | Активных: " + active;
}

console.log(taskSummary(5, 3));
console.log(taskSummary(10, 4));



// ===== Урок: 21 =====
let numbers = [10, 20, 30, 40, 50];
console.log(numbers[0]);              // первый элемент — 10
console.log(numbers[numbers.length-1]); // последний элемент — 50

let cities = ["Москва", "Париж", "Берлин", "Токио"];
cities[2] = "Лондон";  
console.log(cities); 
// ["Москва", "Париж", "Лондон", "Токио"]

let task = {
  id: 1,
  title: "Купить молоко",
  status: "активна"
};
console.log(task.id);     // 1
console.log(task.title);  // "Купить молоко"
console.log(task.status); // "активна"

let tasks = [
  { id: 0, title: "Купить молоко", status: "активна" },
  { id: 1, title: "Позвонить врачу", status: "выполнена" },
  { id: 2, title: "Сделать уроки", status: "активна" }
];
console.log(tasks[0].title);  // "Купить молоко"
console.log(tasks[1].status); // "выполнена"

tasks[0].status = "выполнена";
console.log(tasks[0]); 
// { id: 1, title: "Купить молоко", status: "выполнена" }

tasks.push({ id: 3, title: "Прогулка", status: "активна" });
console.log(tasks);

let user = {
  name: "Анна",
  tasks: tasks
};

console.log(user.name);         // "Анна"
console.log(user.tasks.length); // 4



// ===== ДЗ: 10 =====
function findTaskByTitle(tasks, title) {
  return tasks.filter(function (task) {
    return task.title === title;
  });
}

console.log(findTaskByTitle(tasks, "Купить молоко"));
// => [{id: 0, title: 'Купить молоко', status: 'выполнена'}]




// ===== Урок: 22 =====
function filterByStatus(tasks, status) {
  return tasks.find(function (task) {
    return task.status === status;
  });
}

console.log(filterByStatus(tasks, "активна"));


function sortByTitleAsc(tasks) {
  return tasks.sort(function (a, b) {
    if (a.title > b.title) return -1;
    if (a.title < b.title) return 1;
    return 0;
  });
}

console.log(sortByTitleAsc(tasks));
/*
[
  {id: 3, title: "Сделать уроки",  status: "активна"},
  {id: 2, title: "Позвонить врачу", status: "выполнена"},
  {id: 1, title: "Купить молоко",   status: "активна"}
]
*/


function searchByTitle(tasks, query) {
  const q = query.toLowerCase();
  return tasks.filter(function (task) {
    return task.title.toLowerCase().indexOf(q) !== -1;
  });
}

console.log(searchByTitle(tasks, "куп"));
/*
[{ id:1, title:"Купить молоко", status:"активна" }]
*/

function removeTaskById(tasks, id) {
  return tasks.filter(function (task) {
    return task.id !== id;
  });
}

let tasks2 = [
  { id: 0, title: "Купить молоко", status: "активна" },
  { id: 1, title: "Позвонить врачу", status: "выполнена" },
  { id: 2, title: "Сделать уроки",  status: "активна" },
  { id: 3, title: 'Прогулка', status: 'активна' }
];

console.log(removeTaskById(tasks2, 2));
// => [{ id:1, ...}, { id:3, ...}]

function toggleTaskStatus(tasks, id) {
  return tasks.map(function (task) {
    if (task.id === id) {
      const newStatus =
        task.status === "выполнена" ? "активна" : "выполнена";

      return {
        id: task.id,
        title: task.title,
        status: newStatus,
      };
    }

    return task;
  });
}
// Пример
let tasks3 = [
  { id: 0, title: "Купить молоко", status: "активна" },
  { id: 1, title: "Позвонить врачу", status: "выполнена" }
];
console.log(toggleTaskStatus(tasks3, 1));
// => [{ id:1, title:"Купить молоко", status:"выполнена" }, { id:2, ...}]



// ===== Урок: 23 =====
let tasks4 = [
  { id: 1, title: "Купить молоко", status: "активна" },
  { id: 2, title: "Сходить в спортзал", status: "выполнена" },
  { id: 3, title: "Поклонится", status: "активна" },
  { id: 4, title: "Прочитать книгу", status: "выполнена" },
  { id: 5, title: "Сделать проект", status: "активна" }
];

for (let i = 0; i < tasks.length; i++) {
  console.log(tasks[i].id + ":", tasks[i].title);
}

for (let task of tasks) {
  console.log(task.id + ":", task.title);
}

let i = 0;
let total = 0;
let done = 0;
let active = 0;

while (i < tasks.length) {
  total++;
  if (tasks[i].status === "выполнена") {
    done++;
  } else {
    active++;
  }
  i++;
}
console.log("Всего:", total, "| Выполнено:", done, "| Активных:", active);

for (let task of tasks) {
  if (task.status === "активна") {
    console.log("Активная задача:", task.title);
  }
}

tasks.forEach(task => {
  console.log("#" + task.id + " " + task.title + " (" + task.status + ")");
});

let searchTitle = "Купить молоко";
let found = null;
for (let task of tasks) {
  if (task.title === searchTitle) {
    found = task;
    break;
  }
}
if (found) {
  console.log("Найдена задача:", found);
} else {
  console.log("Задача не найдена");
}

let activeTasks = [];
for (let task of tasks) {
  if (task.status === "активна") {
    activeTasks.push(task);
  }
}
console.log("Активные задачи:", activeTasks);



// ===== ДЗ: 11 =====
function findTaskByKeyword(tasks, keyword) {
  const k = keyword.toLowerCase();
  let result = tasks.find(function (task) {
    return task.title.toLowerCase().indexOf(k) !== -1;
  });
  if (result == undefined) return "Задача не найдена.";
  else return result;
}

console.log(findTaskByKeyword(tasks4, "прив"));
console.log(findTaskByKeyword(tasks4, "ок"));
console.log(findTaskByKeyword(tasks4, "пок")); // :)



// ===== Уроки: 24 и 25 =====
const input = document.querySelector('.form-add__input');
const addButton = document.querySelector('.form-add__button');
const container = document.querySelector('.tasks');

function renderTask(taskData) {
  // создаём обёртку карточки
  const task = document.createElement('div');
  task.classList.add('task');

  const content = document.createElement('div');
  content.classList.add('task__content');
  task.append(content);

  const title = document.createElement('div');
  title.classList.add('task__title');
  title.textContent = taskData.text;

  const meta = document.createElement('div');
  meta.classList.add('task__meta');
  meta.textContent = taskData.date;

  content.append(title, meta);

  const actions = document.createElement('div');
  actions.classList.add('task__actions');
  task.append(actions);

  const editBtn = document.createElement('button');
  editBtn.classList.add('task__action', 'task__action--edit');
  editBtn.title = 'Редактировать';
  editBtn.innerHTML = `
    <svg class="task__icon" viewBox="0 0 24 24" fill="none" stroke="#6f64a3" stroke-width="2"
      stroke-linecap="round" stroke-linejoin="round">
      <path d="M12 20h9" />
      <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
    </svg>
  `;

  const deleteBtn = document.createElement('button');
  deleteBtn.classList.add('task__action', 'task__action--delete');
  deleteBtn.title = 'Удалить';
  deleteBtn.innerHTML = `
    <svg class="task__icon" viewBox="0 0 24 24" fill="none" stroke="#cb6e6e" stroke-width="2"
      stroke-linecap="round" stroke-linejoin="round">
      <polyline points="3 6 5 6 21 6" />
      <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
      <path d="M10 11v6" />
      <path d="M14 11v6" />
      <path d="M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" />
    </svg>
  `;

  actions.append(editBtn, deleteBtn);
  task.append(content, actions);

  return task;
}

const container2 = document.querySelector('main');

const task1 = renderTask({
  text: 'Сходить на прогулку',
  date: 'Сегодня, 18:00'
});

const task2 = renderTask({
  text: 'Позвонить врачу',
  date: 'Сегодня, 19:30'
});

container.append(task1, task2);

const searchInput = document.querySelector('.toolbar__search');
const footer = document.querySelector('.footer-controls');
const sortSelect = document.querySelector('.toolbar__sort');