// Дана строка. Если в этой строке более одного символа, выведите в консоль предпоследний символ этой строки.

// // v1

// let func = (x) => {
//   if (x) {
//     if (x.length > 1) {
//       return x.at(-2);
//     }
//     return x;
//   }
//   return "esc";
// };

// // v2 (тут я забыл return и gpt напомнил)

// let func = (x) => {
//   x ? (x.length > 1 ? x.at(-2) : x) : "esc";
// };

// // v3 (gpt help)

let func = (x) => {
  return x ? (x.length > 1 ? x.at(-2) : x) : "esc";
};

console.log(func(prompt("ввод", "")));
