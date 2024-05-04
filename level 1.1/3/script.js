// Дана строка. Выведите в консоль последний символ строки.
let string = prompt("Введите строку", "");

let func = (x) => {
  if (x) {
    // alert(string.slice(-1));// first
    alert(string.at(-1)); // second "faster because part of ECMAScript"
  } else {
    alert("empty");
  }
};

func(string);
