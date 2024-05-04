// Дана строка. Выведите в консоль последний символ строки.
let string = prompt("Введите строку", "");

let func = (x) => {
  if (x) {
    alert(string.slice(-1));
  } else {
    alert("empty");
  }
};

func(string);
