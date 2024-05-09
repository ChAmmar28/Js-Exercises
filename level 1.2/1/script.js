// Дано число. Выведите в консоль первую цифру этого числа.

// console.log(+prompt("", 0).toString().at(0)); // это моя гордось в сокращении кода , но с отрицательными не работает

// console.log(+prompt("", 0).at(0)); // gpt оптимизировал мой код

// let func = (num) => {
//   if (num > 0) {
//     return num.toString().at(0);
//   }
//   return num.toString().at(1);
// };

// console.log(func(+prompt("число", 0))); // моя версия для любых чисел, при любых других знач. выдает (a) из NaN

// console.log(Math.abs(+prompt("", 0)).toString()[0]); // решение gpt

console.log(Math.abs(+prompt("", 0)).toString().at(0)); // более читабельная версия
