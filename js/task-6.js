let arr = []
let input
while (true) {
    let input = prompt("Введите число");


// console.log(arr)
if (input === null) {
    break;
}
input = Number(input);
const nan = Number.isNaN(input)
if (nan) {
    alert("Было введено не число, попробуйте еще раз")
    continue;
}


arr.push(input)

}

// arr.push(input)
console.log(arr)