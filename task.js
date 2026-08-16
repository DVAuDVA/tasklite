let a = 10;
let b = 5;
let sum = a + b;
let difference = a - b;
console.log(sum);
console.log(difference);



// ===== Урок: операторы и условия =====

let title = "";

if (title === "") {
  console.log("Название задачи не указано");
} else {
  console.log("Задача:", title);
}

let tasks = 5;
if (tasks === 0) {
  console.log("Список пуст");
} else if (tasks <= 3) {
  console.log("Немного задач");
} else {
  console.log("Много задач");
}

// ===== ДЗ 9 =====
let amount = 0;
if (amount <= 0) {
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
