// Даны два числа. Проверьте, что первые цифры этих чисел совпадают.

let func = (a, b) => {
  return Math.abs(a)[0] === Math.abs(b)[0];
};

console.log(func(+prompt(), +prompt()));
