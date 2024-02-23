let nome = "Otávio"
let idade = 17
let peso = 98
let altura = 1.80
let randNumber = Math.floor(Math.random() * 5) + 1;

let idadeSomada = idade + randNumber

let concatenar = `O nome do sujeito é ${nome} e sua idade é ${idadeSomada} ele tem ${altura} de altura e pesa ${peso} kg`

console.log(concatenar);