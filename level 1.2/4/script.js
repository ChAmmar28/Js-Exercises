// Дано число. Выведите количество цифр в этом числе.

let func = (x) => {
  if (!isNaN(x)) {
    return Math.abs(x).toString().length;
  }
  return NaN;
};

console.log(func(+prompt("число", 0)));
