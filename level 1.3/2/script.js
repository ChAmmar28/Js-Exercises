// Даны два целых числа. Проверьте, что первое число без остатка делится на второе.

// v1

// let func = (a, b) => {
//   if (!(a.toFixed() % b.toFixed())) {
//     return "ok";
//   }
//   return "-";
// };

// console.log(func(+prompt("1"), +prompt("2")));

// v2 (gpt обьяснил что метод toFixed возвращаяет строку я про это забыл)

// let func = (a, b) => {
//   !(a.toFixed() % b.toFixed()) ? "ok" : "-";
// };

// console.log(func(+prompt("1"), +prompt("2")));

// v2 gpt help

let func = (a, b) => {
  !(Number(a.toFixed()) % Number(b.toFixed())) ? "ok" : "-";
};

console.log(func(+prompt("1"), +prompt("2")));
