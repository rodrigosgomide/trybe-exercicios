let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let somaNumbers = 0;
// EX 2
for (let index = 0; index < numbers.length; index += 1) {
    somaNumbers += numbers[index]
}

console.log(somaNumbers)

// EX 3

let somaNumbers2 = 0;
let media =0;


for (let index = 0; index < numbers.length; index += 1) {
    somaNumbers2 += numbers[index]
    media = somaNumbers2 / numbers.length
}

console.log(media)

//EX 4
if (media > 20) {
    console.log('valor maior que 20')
} else {
    console.log('valor menor ou igual a 20')
}

// EX 5
let maiorNumero = 0;


for (let index = 0; index < numbers.length; index += 1) {
    let numero1 = numbers[index]
    if (numero1 > maiorNumero) {
        maiorNumero = numero1
    }
} 

console.log(maiorNumero)

// for (let index = 0; index < numbers.length; index += 1) {
//     if (maiorNumero < numbers[index]) maiorNumero = number[index]
// } 

// console.log(maiorNumero)

//EX 6
let numeroImpar = 0;

for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] % 2 === 1) numeroImpar += 1        
}

if (numeroImpar != 0) {
    console.log(numeroImpar)
} else {
    console.log('nenhum valor ímpar encontrado')
}

//EX 7

let menorNumero = maiorNumero;

for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] < menorNumero) menorNumero = numbers[index]
}

console.log(menorNumero)

//EX 8

let array1to25 = [];

for (let index = 1; index <= 25; index += 1) {
    array1to25.push (index)
}

console.log(array1to25)

//EX 9
let metadeArray1To25 = [];

for (let index = 0; index < 25; index += 1) {
    metadeArray1To25.push(array1to25[index] / 2)
}

console.log(metadeArray1To25)