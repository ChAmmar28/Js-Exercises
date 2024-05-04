// Дано число. Проверьте, отрицательное оно или нет. Выведите об этом информацию в консоль.
let number = +prompt("Введите число");

let func = (x) => {
  if (x > 0) alert(`${x} is +`);
  else if (x < 0) alert(`${x} is -`);
  else alert(`${x} = ${x}`);
};

func(number);
