// Дана строка. Если в этой строке более одного символа, выведите в консоль предпоследний символ этой строки.

let func = (x) => {
  if (x) {
    if (x.length > 1) {
      return x.at(-2);
    }
    return x;
  }
  return "esc";
};

console.log(func(prompt("ввод", "")));
