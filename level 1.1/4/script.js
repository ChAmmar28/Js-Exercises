// Дано число. Проверьте, четное оно или нет.

let number = +prompt("Введите число", 0);

let func = (x) => {
  if (x % 2 === 0) {
    return "Чет";
  }
  return "Нечет";
};

alert(func(number));
