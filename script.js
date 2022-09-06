alert("Calculadora")

let numberOne = prompt("digite o primeiro número")
let numberTwo = prompt("digite o segundo número")

numberOne = Number(numberOne)
numberTwo = Number(numberTwo)

const sum = numberOne + numberTwo
const sub = numberOne - numberTwo
const mult = numberOne * numberTwo
const div = numberOne / numberTwo
const restDiv = numberOne % numberTwo

alert("Soma: " + sum)
alert("Subtração: " + sub)
alert("multiplicação: " + mult)
alert("divisão: " + div)
alert("Resto da divisão: " + restDiv)


if (sum % 2 == 0) {
    alert("par");

} else {
    alert("Impar");
}

if (numberOne != numberTwo) {
    alert("Os números são diferentes.");

} else {
    alert("Os números são iguais.");
}
