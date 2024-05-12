// Даны два целых числа. Проверьте, что первое число без остатка делится на второе.

let func = (a, b) => {
  if (!(a.toFixed() % b.toFixed())) {
    return "ok";
  }
  return "-";
};

console.log(func(+prompt("1"), +prompt("2")));
