let number1 = 0;
let number2 = 1;
let sum = 0;
function gj(a, b) {
    return a + b;
}
do {
    console.log(number1);
    sum += number1;
    let temp;
    temp = number1;
    number1 = number2;
    number2 = gj(temp, number1);
} while (number1 < 100);
console.log("Tổng bằng:" + sum);
//# sourceMappingURL=main.js.map