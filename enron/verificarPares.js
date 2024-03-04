let num1 = 100;
let num2 = 333;
let num3 = 433;

let uNum1 = num1 % 10;
let uNum2 = num2 % 10;
let uNum3 = num3 % 10;

let numPares = [0, 2, 4, 6, 8];

if (numPares.includes(uNum1) || numPares.includes(uNum2) || numPares.includes(uNum3)) {
    console.log("Um dos valores é par.");
} else {
    console.log("Nenhum dos valores é par.");
}
