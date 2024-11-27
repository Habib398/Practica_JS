const prompt = require('prompt-sync')();

// Ejercicio 1
/*
function Bisiesto(year){
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0 )){
        return true;
    }
    return false;
}

if (Bisiesto(2024)){
    console.log('Es un año bisiesto');
}else{
    console.log('No es un bisiesto');
}*/

//Ejercicio 2

/*
let product = 1;
const sentinel = 0;
let number = prompt("Introduce el primer número:");

while (number !== sentinel) {
    product = product * number;
    number = prompt("Introduce el siguiente número:");
}

console.log("El producto total de los números introducidos es: " + product); */

//Ejercicio 3

/* const sentinel = -1;

let number = prompt("Introduce un número positivo:");

while  (number !== sentinel) {
        let root = Math.sqrt(number);
        console.log("La raíz cuadrada de " + number + " es: " + root);

    number = prompt("Introduce otro número positivo:");
}*/

// Ejercicio 4

/* let randomNumber = Math.floor(Math.random() * 10) + 1;

let guess = parseInt(prompt("Adivina el número (entre 1 y 10):"));

while (randomNumber !== guess) {
    guess = parseInt(prompt("Incorrecto. Intenta nuevamente:"));
}

console.log("¡Ganaste! El número es: " + randomNumber); */

// Ejercicio 7
/* function sumaReciprocals(n) {
    let suma = 0;
    for (let i = 1; i <= n; i++) {
        suma += 1 / i;
    }
    return suma;
}

const n = 10;
const resultado = sumaReciprocals(n);
console.log(`La suma de los recíprocos de los números naturales es: ${resultado}`);*/

// Ejercicio 8
/* let max = 10;
let min = 1;
let randomNumber1 = Math.floor(Math.random() * max) + min;
let randomNumber2 = Math.floor(Math.random() * max) + min;
let sumarandomNumber = randomNumber1 + randomNumber2;

let guess = parseInt(prompt("Adivina la suma (entre 1 y 10):"));

while (sumarandomNumber !== guess) {
    guess = parseInt(prompt("Incorrecto. Intenta nuevamente:"));
}

console.log("¡Ganaste! El número es: " + sumarandomNumber); */

// Ejercicio 9
/* let countEven = 0;

while (true) {
    const input = prompt('Por favor, ingresa un número (o "stop" para finalizar): ');
    if (input.toLowerCase() === 'stop') {
        break;
    }
    const number = parseInt(input);
    if (number % 2 === 0) {
        console.log('Par');
        countEven++;
    } else {
        console.log('Impar');
    }
}
console.log(`Total de números pares ingresados: ${countEven}`); */

// Ejercicio 10
/*
const nombre = prompt("Introduce tu nombre: ");
const apellido = prompt("Introduce tu apellido: ");
console.log(`Hola ${nombre} ${apellido}. Bienvenidos al mundo LIS :v`);*/

/* let uprCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let lwrCaseLetters = "abcdefghijklmnopqrstuvwxyz"
let letters = uprCaseLetters+lwrCaseLetters

console.log(uprCaseLetters.toLowerCase());
console.log(lwrCaseLetters.toLowerCase());

console.log(uprCaseLetters.slice(0,5));
console.log(uprCaseLetters.slice(20));
console.log(lwrCaseLetters.slice(1,6));

console.log(letters.slice(26,52));
console.log(letters.indexOf("a"));
console.log(letters.lastIndexOf("A"));
console.log(letters.replace("abc", "123"));

console.log(uprCaseLetters == lwrCaseLetters);
console.log(uprCaseLetters == lwrCaseLetters.toUpperCase()); */

//Ejercicio 12
/*
let meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
let diasMeses = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

const Mes = prompt("Introduce el nombre de un mes: ");
const monthIndex = meses.indexOf(Mes);

if (monthIndex !== -1) {
    console.log(`El mes de ${Mes} tiene ${diasMeses[monthIndex]} días.`);
} else {
    console.log("El nombre del mes ingresado no es válido.");
}*/

// Ejercicio 13
/*
let arrOfEvens = [2, 4, 6, 8, 10];
let arrOfOdds = [1, 3, 5, 7, 9];
let arrOfSums = [];

for (let i = 0; i < arrOfEvens.length; i++) {
    arrOfSums.push(arrOfEvens[i] + arrOfOdds[i]);
}

console.log(arrOfSums);
*/

// Ejercicio 14
// a)
/*let daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];
daysOfWeek.shift();
daysOfWeek.pop();
console.log(daysOfWeek);

// b)
daysOfWeek.push('Sat', 'Sun');
console.log(daysOfWeek);*/
