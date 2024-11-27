// let counter = 0;

// const sayHi = () => {
//   console.log("hello, world");
//   console.log(++counter);
// };

// sayHi();
// sayHi();
// sayHi();

//----------------------------------------------------------------------------//

// const foo = () => {
//   let counter = 0;

//   return () => {
//     console.log("hello, world");
//     console.log(++counter);
//   };
// };

// const sayHi = foo();
// sayHi();
// sayHi();
// sayHi();

//----------------------------------------------------------------------------//

//--------Логирование функции----------//

// const warning = (name) => {
//   alert(`Выходите с сайта. ОПАСНО!!!!!!111 ${name}`);
// };

// const logger = (func) => {
//   let counter = 0;

//   return () => {
//     ++counter;
//     console.log(counter);
//     func();
//   };
// };

// const call = logger(() => warning("Denis"));

// call();
// call();
// call();
// call();
// call();
//----------------------------------------------------------------------------//

//----------------------Счётчик с замыканием---------------------------------//

// const counter = () => {
//   let counter = 0;

//   return {
//     increment: () => {
//       counter++;
//       console.log(counter);
//     },
//     decrement: () => {
//       counter--;
//       console.log(counter);
//     },
//     reset: () => {
//       counter = 0;
//       console.log(counter);
//     },
//   };
// };

// const count = counter();

// count.increment();
// count.increment();
// count.increment();
// count.decrement();
// count.increment();
// count.increment();
// count.decrement();
// count.reset();

//----------------------------------------------------------------------------//

//-----------------------------Генератор настроек-----------------------------//

// const settingsManager = () => {
//   let settings = {};

//   return {
//     set: (key, value) => {
//       settings[key] = value;
//     },
//     get: (key) => {
//       console.log(settings[key]);
//     },
//     getAll: () => {
//       console.log(settings);
//     },
//   };
// };

// const settings = settingsManager();

// settings.set("name", "Arnold");

// const lang = prompt("Выберите язык");

// settings.set("theme", lang);

// settings.getAll();

//----------------------------------------------------------------------------//

// Форматтер текста: Написать функцию, возвращающую замыкание, которое форматирует строки текста в заданном стиле (например, обрезка до определенной длины, добавление префикса или суффикса).
// Список задач: Реализовать модуль для управления списком задач (добавление, удаление, вывод задач) с использованием замыканий.

// const taskList = () => {
//   let tasks = [];

//   return {
//     addTask: (task) => {
//       tasks.push(task);
//     },
//     printTasks: () => {
//       console.log(tasks);
//     },
//     removeTask: (task) => {
//       tasks.pop(task);
//     },
//   };
// };

// const myTaskList = taskList();

// myTaskList.addTask("Сходить на тренировку");
// myTaskList.addTask("Обучение IT");
// myTaskList.addTask("Прочитать книгу");

// myTaskList.printTasks();

// myTaskList.removeTask();

// myTaskList.printTasks();
