let arr = [];
let input;
let total = 0;
while (true) {
  let input = prompt('Введите число');

  if (input === null) {
    break;
  }

  if (isNaN(Number(input))) {
    alert('Было введено не число, попробуйте еще раз');
    continue;
  }

  arr.push(input);
}

for (let element of arr) {
  element = Number(element);
  total += element;
}

console.log(total);
