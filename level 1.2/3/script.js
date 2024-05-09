// Дано число. Выведите в консоль сумму первой и последней цифры этого числа.

let func = (x) => {
  //   return Number(x.at(0)) + Number(x.at(-1)); // мой вариант
  //   return parseInt(x.at(0)) + parseInt(x.at(-1)); //подсказка от gpt "paraseInt()"
  if (!isNaN(x)) {
    return parseInt(x.at(0)) + parseInt(x.at(-1));
  }
};

console.log(func(prompt("", 0)));
